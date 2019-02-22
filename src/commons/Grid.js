import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const Grid = ({
	children,
	bgColor,
	smCols,
	medCols,
	lgCols,
	gaps,
	margin,
	padding
}) => (
	<SetGrid
		bgColor={bgColor}
		smCols={smCols}
		medCols={medCols}
		lgCols={lgCols}
		gaps={gaps}
		margin={margin}
		padding={padding}
	>
		{children}
	</SetGrid>
);

Grid.propTypes = {
	bgColor: PropTypes.string,
	smCols: PropTypes.number,
	medCols: PropTypes.number,
	lgCols: PropTypes.number,
	gaps: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string
};

export default Grid;

const SetGrid = styled.div`
	display: grid;
	grid-gap: ${props => props.gaps || '1em'};
	background: ${props => props.bgColor || 'transparent'};
	margin: ${props => props.margin || '0'};
	padding: ${props => props.padding || '0'};
	height: 100%;

	/* Mobile */
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		grid-template-columns: repeat(${props => props.smCols || 4}, 1fr);
	}

	/* Tablets */
	@media screen and (min-width: ${theme.breakpoints.tablet}) {
		grid-template-columns: repeat(${props => props.medCols || 1}, 1fr);
	}

	/* Larger Sreen */
	@media screen and (min-width: ${theme.breakpoints.desktop}) {
		grid-template-columns: repeat(${props => props.lgCols || 3}, 1fr);
	}
`;
