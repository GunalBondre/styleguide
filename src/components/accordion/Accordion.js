import React from 'react';
import PropTypes from 'prop-types';
import { AccordionWrapper } from './Accordion.style';
import AccordionItem from './children/AccordionItem';
import AccordionHeading from './children/AccordionHeading';
import AccordionDescription from './children/AccordionDescription';

const Accordion = ({ children, alwaysOpen, ...restProps }) => {
	return (
		<div>
			<AccordionWrapper
				alwaysOpen={alwaysOpen}
				children={children}
				{...restProps}
			>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child);
				})}
			</AccordionWrapper>
		</div>
	);
};

Accordion.Item = AccordionItem;
Accordion.Heading = AccordionHeading;
Accordion.Description = AccordionDescription;

Accordion.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
	/**
	 * always opem denotes accordion open or not
	 */
	alwaysOpen: PropTypes.bool,
};

export default Accordion;
