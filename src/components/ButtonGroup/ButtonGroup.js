import React from 'react';
import { ButtonWrapper } from './ButtonGroup.style';
import Button from '../button/Button';

const ButtonGroup = ({ children, bgColor, textColor, customWidth }) => {
	return (
		<ButtonWrapper
			children={children}
			bgColor={bgColor}
			textColor={textColor}
			customWidth={customWidth}
		>
			{children}
		</ButtonWrapper>
	);
};

Button.Item = Button;

export default ButtonGroup;
