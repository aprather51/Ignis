import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hero = ({ children, height, bgColor, bgImage }) => (
	<SetHero height={height} bgColor={bgColor} bgImage={bgImage}>
		{children}
	</SetHero>
);

Hero.propTypes = {
	height: PropTypes.string,
	bgColor: PropTypes.string,
	bgImage: PropTypes.string
};

export default Hero;

const SetHero = styled.header`
	background-color: ${props => props.bgColor || '#333'};
	background-image: ${props => props.bgImage};

	width: 100%;
	height: ${props => props.height || '50%'};
	background-position: center;
	background-repeat: no-repeat;
	/* background-size: cover;  */
	background-size: auto, cover, cover;
	position: relative;
	max-height: 100vh;
	overflow: hidden;
`;
