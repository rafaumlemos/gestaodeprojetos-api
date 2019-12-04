import * as React from "react";

import { Content, ImageSection, LoginSection, SvgWrapper } from "./style";

import { MedicineSvg } from "../../assets/Svg/Medicine";

import { LoginForm } from "./Form";

export const LoginComp = () => {
	return (
		<Content>
			<ImageSection>
				<SvgWrapper>
					<MedicineSvg />
				</SvgWrapper>
			</ImageSection>
			<LoginSection>
				<LoginForm />
			</LoginSection>
		</Content>
	);
};

export const LoginPartner = LoginComp;
