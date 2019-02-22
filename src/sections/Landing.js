import React from 'react';
import styled from 'styled-components';
import theme from 'assets/styled/theme';
import { rgba } from 'polished';
// import { Spring, config } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

import { Container } from 'commons';

const Landing = () => {
	const introWords = useSpring({
		from: { opacity: 0, transform: 'scale(1.1)' },
		to: { opacity: 1, transform: 'scale(1)' },
		delay: 1200,
		config: {
			tension: 200,
			friction: 35
		}
	});

	const introBtn = useSpring({
		from: { opacity: 0, transform: 'translateY(150px)' },
		to: { opacity: 1, transform: 'translateY(0)' },
		delay: 2000,
		config: {
			tension: 300,
			friction: 50
		}
	});
	return (
		<Container>
			<Header>
				<Intro>
					<animated.div style={introWords}>
						<h1>
							Hi, I'm <strong>Super</strong>, just another <br />
							Gatsby template starter.
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
							Similique rem dolores laboriosam eligendi accusamus et labore{' '}
							<br />
							non obcaecati nostrum inventore.
						</p>
					</animated.div>

					<animated.div style={introBtn}>
						<BtnBox>Lets Discover</BtnBox>
					</animated.div>
				</Intro>
			</Header>
		</Container>
	);
};
export default Landing;

const Header = styled.div`
	position: relative;
	text-align: center;
	@media screen and (min-width: ${theme.breakpoints.desktop}) {
		padding: 6em 0;
	}

	@media screen and (max-width: 980px) {
		padding: 4em 3em;
	}
`;

const Intro = styled.div`
	position: relative;
	h1 {
		color: #efefef;
		line-height: 1.7;
		font-weight: 300;
	}

	p {
		color: ${rgba('#efefef', 0.8)};
		font-weight: 300;
		margin: 1em 0 0;
		line-height: 1.7;
	}
`;

const BtnBox = styled.div`
	position: relative;
	border-radius: 4px;
	border: 0;
	display: block;
	color: #efefef !important;
	margin: 3.5em auto;
	padding: .5em 1em;
	text-transform: capitalize;
	vertical-align: middle;
	box-shadow: inset 0 0 0 1px #efefef;

	&::after {
		position: absolute;
		top: 2.4em;
		left: calc(50% - 1px);
		background: #efefef;
		content: "";
		display: block;
		height: 30rem;
		width: .7px;
	}

	@media screen and (min-width: ${theme.breakpoints.desktop}) {
		/* Line height under "Let Discover" button */
		width: 20%;
		/* margin: 3.5em auto; */
	}

	@media screen and (min-width: {$theme.breakpoints.tablet}) {
		width: 100%;
	}
`;
