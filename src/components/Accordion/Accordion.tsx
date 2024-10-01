import React, { useState, ReactNode } from 'react';
import {
	AccordionContainer,
	AccordionItem,
	AccordionTitle,
	AccordionContent,
} from './Accordion.style';

type AccordionProps = {
	items: { title: string; content: ReactNode }[]; // Change content to ReactNode
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(index === openIndex ? null : index);
	};

	return (
		<AccordionContainer>
			{items.map((item, index) => (
				<AccordionItem key={index}>
					<AccordionTitle onClick={() => handleToggle(index)}>
						{item.title}
					</AccordionTitle>
					<AccordionContent className={openIndex === index ? 'open' : ''}>
						{item.content}
					</AccordionContent>
				</AccordionItem>
			))}
		</AccordionContainer>
	);
};
