import React from 'react';
import PropTypes from 'prop-types';
import {
	AlertContainer,
	IconTextWrapper,
	IconWrapper,
	TextWrapper,
} from './Alert.style';
import { AlertVariant } from './Alert.constant';

import {
	FaCheckCircle,
	FaExclamationTriangle,
	FaRegTimesCircle,
} from 'react-icons/fa';

const Alert = ({ variant, message, noBorder, ...restProps }) => {
	return (
		<AlertContainer
			variant={variant}
			message={message}
			noBorder={noBorder}
			{...restProps}
		>
			<IconTextWrapper>
				<IconWrapper>
					{variant === AlertVariant.SUCCESS && <FaCheckCircle />}
					{variant === AlertVariant.WARNING && <FaExclamationTriangle />}
					{variant === AlertVariant.ERROR && <FaRegTimesCircle />}
				</IconWrapper>
				<TextWrapper>
					<div className='message'>{message}</div>
				</TextWrapper>
			</IconTextWrapper>
		</AlertContainer>
	);
};

Alert.propTypes = {
	/**
	 * decides the alert variant
	 */
	variant: PropTypes.string,
	/**
	 * decides the alert message
	 */
	message: PropTypes.string,
	/**
	 * decides the alert title
	 */
	title: PropTypes.string,
	/**
	 * decides the border-radius
	 */
	noBorder: PropTypes.bool,
	/**
	 * decides the box shadow
	 */
	noShadow: PropTypes.bool,
};
Alert.defaultProps = {
	variant: AlertVariant.SUCCESS,
	message: null,
	title: null,
	noBorder: false,
	noShadow: false,
};

export default Alert;
