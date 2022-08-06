import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.style';

const Button = ({
	variant,
	color,
	size,
	children,
	borderRadius,
	noBorder,
	width,
	height,
	iconName,
	iconColor,
	fontSize,
	disabled,
	...props
}) => {
	return (
		<ButtonContainer
			variant={variant}
			color={color}
			width={width}
			height={height}
			customRadius={borderRadius}
			noBorder={noBorder}
			size={size}
			fontSize={fontSize}
			disabled={disabled}
			{...props}
		>
			{children}
		</ButtonContainer>
	);
};

Button.propTypes = {
	/**
	 * decides the button variant
	 */
	variant: PropTypes.string,
	/**
	 * decides the color
	 */
	color: PropTypes.string,
	/**
	 * decides the width
	 */
	width: PropTypes.number,
	/**
	 * decides the height
	 */
	height: PropTypes.number,
	/**
	 * decides the custome radius
	 */
	customRadius: PropTypes.number,
	/**
	 * removes border
	 */
	noBorder: PropTypes.bool,
	/**
	 * renders children
	 */
	children: PropTypes.node,
};

export default Button;
