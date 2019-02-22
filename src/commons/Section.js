import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ children, background, padding }) => (
	<SetSection background={background} padding={padding}>
		{children}
	</SetSection>
);

Section.propTypes = {
	background: PropTypes.string,
	padding: PropTypes.string
};

export default Section;

const SetSection = styled.section`
	background: ${props => props.background || 'transparent'};
	padding: ${props => props.padding || '2em 1em'};
`;
