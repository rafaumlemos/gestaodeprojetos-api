import * as React from "react";
import { Title, FormWrapper } from "./style";
import api from "../../../services/api";
import { TextInput } from "../../TextInput";
import { PasswordTextInput } from "../../PasswordTextInput";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LoginFormComp = (props: any) => {
	const handleLogin = async () => {
		const body = {
			email: "testeadmin1partner1@gmail.com",
			password: "testeadminuser1parceiro1",
			partnerId: "1000"
		};
		const result = await api.post("/user/login", body);
		if (result.status !== 200) throw "error";
		console.log(result.data);
	};
	return (
		<FormWrapper>
			<Title>Acompanhando Saúde | Partner Login</Title>
			<TextInput />
			<PasswordTextInput />
			<Button onClick={handleLogin}>
				<Link to={"feed/partner"}>Login</Link>
			</Button>
		</FormWrapper>
	);
};

export const LoginForm = LoginFormComp;
