import { knex } from "../postgresql";
import { Request, Response } from "express";
import { UserLogin, User } from "../models/user";
import { PartnerAdmin, PartnerAdminLogin } from "../models/partnerAdmin";

class AuthController {
    public async loginPartnerAdmin (req: Request, res: Response) {
        try {
            const {email, password, partnerId} = req.body;
            const login: PartnerAdminLogin = {
                email,
                password,
                partnerId
            };
            const result = await knex("partners_admin").select(
                "id",
                "name",
                "phone",
                "email",
                "partnerId",
                "blocked"
            ).where({...login});
            const partnerAdmin: PartnerAdmin = result[0];
            if (!partnerAdmin || partnerAdmin.blocked) throw "auth error";
            return res.json({
                ...partnerAdmin
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "auth error"
            });
        }
    }

    public async loginUser (req: Request, res: Response) {
        try {
            const {email, password, partnerId} = req.body;
            const login: UserLogin = {
                email,
                password,
                partnerId
            };
            const result = await knex("users").select(
                "id",
                "name",
                "phone",
                "email",
                "partnerId",
                "blocked"
            ).where({...login});
            const user: User = result[0];
            if (!user || user.blocked) throw "auth error";
            return res.json({
                ...user
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "auth error"
            });
        }
    }
}

export default new AuthController();