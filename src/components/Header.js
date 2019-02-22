import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ children, bgColor, color }) => (
	<SetHeader bgColor={bgColor} color={color}>
		{children}
	</SetHeader>
);

Header.propTypes = {
	bgColor: PropTypes.string,
	color: PropTypes.string
};

export default Header;

const SetHeader = styled.div`
	background-color: ${props => props.bgColor || '#333'};
	color: ${props => props.color || '#fff'};
	height: 4rem;
	padding: 1rem;
`;
