import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraph = ({ children, bgColor, color, dangerouslySetInnerHTML }) => (
	<SetParagraph
		bgColor={bgColor}
		color={color}
		dangerouslySetInnerHTML={dangerouslySetInnerHTML}
	>
		{children}
	</SetParagraph>
);

Paragraph.propTypes = {
	bgColor: PropTypes.string,
	color: PropTypes.string
};

export default Paragraph;

const SetParagraph = styled.p`
	background: ${props => props.bgColor || 'transparent'};
	color: ${props => props.color || '#222'};
`;
