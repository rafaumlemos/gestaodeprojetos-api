import * as React from "react";

import { Title, FormWrapper } from "./style";

import { TextInput } from "../../TextInput";
import { PasswordTextInput } from "../../PasswordTextInput";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LoginFormComp = () => {
	return (
		<FormWrapper>
			<Title>Care | Login</Title>
			<TextInput />
			<PasswordTextInput />
			<Button>
				<Link to="/mockPage">Login</Link>
			</Button>
		</FormWrapper>
	);
};

export const LoginForm = LoginFormComp;
