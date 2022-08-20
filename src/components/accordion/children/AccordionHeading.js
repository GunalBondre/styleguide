import React from 'react';
import PropTypes from 'prop-types';
import {
	AccordionHeadingWrapper,
	HeadingIconWrapper,
	HeadingWrapper,
} from '../Accordion.style';

import { FaPlus, FaMinus } from 'react-icons/fa';
const AccordionHeading = ({ children, open, alwaysOpen }) => {
	return (
		<AccordionHeadingWrapper open={open} alwaysOpen={alwaysOpen}>
			<HeadingWrapper>{children}</HeadingWrapper>
			<HeadingIconWrapper>{open ? <FaMinus /> : <FaPlus />}</HeadingIconWrapper>
		</AccordionHeadingWrapper>
	);
};

AccordionHeading.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
};

export default AccordionHeading;
