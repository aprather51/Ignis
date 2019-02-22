import React from 'react';
import PropTypes from 'prop-types';
import image from 'gatsby-image';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const Img = ({ fluid, margin, smSize, medSize, lgSize, src }) => (
	<SetImg
		fluid={fluid}
		src={src}
		smSize={smSize}
		medSize={medSize}
		lgSize={lgSize}
		margin={margin}
	/>
);

Img.propType = {
	smSize: PropTypes.string,
	medSize: PropTypes.string,
	lgSize: PropTypes.string,
	margin: PropTypes.string,
	src: PropTypes.src
};
export default Img;

const SetImg = styled(image)`
	display: block;
  margin: ${props => props.margin || '0 auto'};
  padding: 2em;
  /* Mobile */
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
    width: ${props => props.smSize || '100%'};
	  height: ${props => props.smSize || '100%'};
	}

	/* Tablets */
	@media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: ${props => props.medSize || '100%'};
	  height: ${props => props.medSize || '100%'};
	}

	/* Larger Sreen */
	@media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: ${props => props.lgSize || '100%'};
	  height: ${props => props.lgSize || '100%'};
	}
`;
