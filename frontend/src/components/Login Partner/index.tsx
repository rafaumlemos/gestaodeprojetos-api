import * as React from "react";

import { Content, ImageSection, LoginSection, SvgWrapper } from "./style";

import { SchoolKidSvg } from "../../assets/Svg/SchoolKidSvg";

import { LoginForm } from "./Form";

export const LoginComp = () => {
	return (
		<Content>
			<ImageSection>
				<SvgWrapper>
					<SchoolKidSvg />
				</SvgWrapper>
			</ImageSection>
			<LoginSection>
				<LoginForm />
			</LoginSection>
		</Content>
	);
};

export const LoginPartner = LoginComp;
