import { knex } from "../postgresql";
import { Request, Response } from "express";
import { CreatePartner } from "../models/partner";
import { CreatePartnerAdmin } from "../models/partnerAdmin";
import { CreateUser } from "../models/user";
import * as uuid from "uuid";
import moment from "moment";

class RegisterController {
    public async createPartner (req: Request, res: Response) {
        try {
            const partner: CreatePartner = {
                id: uuid.v4(),
                name: req.body.name,
                blocked: req.body.blocked,
                dueDate: moment().toDate()
            };

            await knex("partners").insert(partner);

            return res.json({
                message: "partner created"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "error on create user"
            });
        }
    }

    public async createAdminPartner (req: Request, res: Response) {
        try {
            const adminPartner: CreatePartnerAdmin = {
                id: uuid.v4(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                partnerId: req.body.partnerId,
                blocked: req.body.blocked,
                dueDate: moment().toDate() 
            };

            await knex("partners_admin").insert(adminPartner);
            
            return res.json({
                message: "admin partner created"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "error on create user"
            });
        }
    }

    public async createUser (req: Request, res: Response) {
        try {
            const adminPartner: CreateUser = {
                id: uuid.v4(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                partnerId: req.body.partnerId,
                blocked: req.body.blocked,
                dueDate: moment().toDate() 
            };

            await knex("users").insert(adminPartner);

            return res.json({
                message: "user created"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "error on create user"
            });
        }
    }
}

export default new RegisterController();