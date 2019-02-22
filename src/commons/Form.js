import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const Form = ({ children, action, bgColor, color, padding, radius, width }) => (
	<SetForm
		action={action}
		bgColor={bgColor}
		color={color}
		padding={padding}
		radius={radius}
		width={width}
	>
		{children}
	</SetForm>
);

Form.propTypes = {
	bgColor: PropTypes.string,
	color: PropTypes.string,
	padding: PropTypes.string,
	radius: PropTypes.string,
	width: PropTypes.string
};

export default Form;

const SetForm = styled.form`
	background-color: ${props => props.bgColor || undefined};
	color: ${props => props.color || undefined};
	width: '100%';
	padding: ${props => props.padding || '1em'};
	margin: 0 auto;
	border-radius: ${props => props.radius || undefined};

	@media screen and (min-width: ${theme.breakpoints.tablet}) {
		width: ${props => props.width || '100%'};
	}
`;
