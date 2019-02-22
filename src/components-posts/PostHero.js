import React from 'react';
import PropTypes from 'prop-types';
import GetImg from 'gatsby-image';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const PostHero = ({ color, fluid, height, maxHeight, title }) => {
	return (
		<Section>
			<Img fluid={fluid} height={height} maxHeight={maxHeight} />
			<Title color={color}>{title}</Title>
		</Section>
	);
};

export default PostHero;

PostHero.propTypes = {
	color: PropTypes.string,
	fluid: PropTypes.object.isRequired,
	height: PropTypes.string,
	maxHeight: PropTypes.string,
	title: PropTypes.string
};

const Section = styled.section`
	position: relative;
	min-height: ${props => props.maxHeight || '300px'};
`;

const Img = styled(GetImg)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: '#fefefe'; 
  width: 100%;
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || '300px'};
  z-index: -1;
  object-fit: ${props => props.fit || 'cover'} !important;
  object-position: ${props => props.position || '50% 50%'} !important;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: ${props => props.height || 'auto'};
  }
  
  /* Tint */
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

`;

const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	color: ${props => props.color || '#fefefe'};
	width: 100%;
	max-width: 1200px;
	padding: 0 1rem;
	font-size: 3em;
	font-weight: 600;
	text-align: center;
	text-transform: capitalize;
	line-height: 1.25;
	transform: translate(-50%, -50%);
`;
