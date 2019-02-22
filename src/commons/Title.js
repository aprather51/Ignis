import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const Title = ({
	children,
	align,
	color,
	fontSize,
	lineHeight,
	medAlign,
	smAlign
}) => (
	<SetTitle
		color={color}
		fontSize={fontSize}
		lineHeight={lineHeight}
		align={align}
		smAlign={smAlign}
		medAlign={medAlign}
	>
		{children}
	</SetTitle>
);

Title.propTypes = {
	align: PropTypes.string,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.string,
	medAlign: PropTypes.string,
	smAlign: PropTypes.string
};
export default Title;

const SetTitle = styled.h1`
	color: ${props => props.color};
	font-size: ${props => props.fontSize || undefined};
	line-height: ${props => props.lineHeight || undefined};
	text-align: ${props => props.align || undefined};
	/* Mobile */
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		text-align: ${props => props.smAlign};
	}

	/* Tablets */
	@media screen and (max-width: ${theme.breakpoints.tablet}) {
		text-align: ${props => props.medAlign};
	}
`;
