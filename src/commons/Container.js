import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children, bgColor, maxWidth, padding }) => (
	<SetContainer maxWidth={maxWidth} padding={padding}>
		{children}
	</SetContainer>
);

Container.propTypes = {
	children: PropTypes.node.isRequired,
	maxWidth: PropTypes.string,
	padding: PropTypes.string
};

export default Container;

/* Styles */
const SetContainer = styled.div`
	margin: 0 auto;
	max-width: ${props => props.maxWidth || `1200px`};
	padding: ${props => props.padding || '0'};
	min-height: 100%;
`;
