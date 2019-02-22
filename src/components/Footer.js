import React from 'react';
import styled from 'styled-components';
import config from 'assets/utils/profile';
import theme from 'assets/styled/theme';

/* Commons */
import { Container, Icon } from 'commons';

/* Social Icons */
import { facebook, instagram, twitter } from 'assets/SVG/social';

const Footer = ({ bgColor, color, fontSize }) => (
	<SetFooter color={color} bgColor={bgColor}>
		<Container>
			<Social>
				<a href={config.Facebook}>
					<Icon
						hover
						icon={facebook}
						color={theme.colors.secondary}
						size={'2.5rem'}
						margin={'0 10px'}
					/>
				</a>
				<a href={config.Twitter}>
					<Icon
						hover
						icon={twitter}
						color={theme.colors.secondary}
						size={'2.5rem'}
						margin={'0 10px'}
					/>
				</a>
				<a href={config.Instagram}>
					<Icon
						hover
						icon={instagram}
						color={theme.colors.secondary}
						size={'2.5rem'}
						margin={'0 10px'}
					/>
				</a>
			</Social>
			<p fontSize={fontSize} color={color}>
				© {new Date().getFullYear()}, {config.title} — All Rights Reserved.
			</p>
		</Container>
	</SetFooter>
);
export default Footer;

const SetFooter = styled.footer`
	background: ${props =>
		props.bgColor || theme.colors.primary || 'transparent'};
	color: ${props => props.color || theme.colors.secondary};
	width: 100%;

	p {
		color: ${props => props.color || theme.colors.secondary};
		font-size: ${props => props.fontSize || '.8rem'};
		padding: '.5em 0';
		text-align: ${props => props.align || 'center'};
	}

	/* Larger Sreen */
	@media screen and (min-width: ${theme.breakpoints.desktop}) {
		padding: ${props => props.padding || '2rem'};
	}
`;

export const Social = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em 0;
`;
