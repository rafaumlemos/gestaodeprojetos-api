import styled from "styled-components";

import { colors } from "../../utils/style";

export const Content = styled.main`
	background-color: ${colors.gray};
	display: flex;
	justify-content: space-evenly;
	height: 100vh;
`;

export const ImageSection = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const SvgWrapper = styled.div`
	margin-top: 25%;
`;

export const LoginSection = styled.div`
	background-color: ${colors.primary};
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`;
