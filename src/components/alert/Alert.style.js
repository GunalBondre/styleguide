import styled, { css } from 'styled-components';

export const AlertContainer = styled.div`
	width: 100%;
	max-width: 350px;
	display: flex;
	padding: 10px 20px;
	border-radius: 20px;
	${(props) => {
		if (props.variant === 'success') {
			return css`
				background: green;
				color: #fff;
			`;
		}
		if (props.variant === 'warning') {
			return css`
				background: yellow;
			`;
		}
		if (props.variant === 'error') {
			return css`
				background: red;
				color: #fff;
			`;
		}
	}}
`;

export const IconTextWrapper = styled.div`
	display: flex;
`;

export const IconWrapper = styled.div`
	padding-right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const TextWrapper = styled.div`
	display: flex;
`;
