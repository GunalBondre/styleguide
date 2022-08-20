import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AccordionItemWrapper } from '../Accordion.style';

const AccordionItem = ({ children, alwaysOpen }) => {
	const key = Math.ceil(Math.random() * 10);
	const [open, setOpen] = useState(false);
	const handleClick = (e) => {
		setOpen(!open);
	};
	return (
		<AccordionItemWrapper key={key} onClick={handleClick}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, { open, setOpen, alwaysOpen });
			})}
		</AccordionItemWrapper>
	);
};

AccordionItem.propTypes = {
	/**
	 * Children denotes accordion childrens
	 */
	children: PropTypes.node,
};

export default AccordionItem;
