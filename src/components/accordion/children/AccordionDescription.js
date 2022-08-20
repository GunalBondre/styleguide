import React from 'react';
import PropTypes from 'prop-types';
import { AccordionDescriptionWrapper } from '../Accordion.style';

const AccordionDescription = ({ children, open, id }) => {
	return (
		<AccordionDescriptionWrapper>
			{open && <div>{children}</div>}
		</AccordionDescriptionWrapper>
	);
};

AccordionDescription.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
};

export default AccordionDescription;
