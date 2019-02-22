import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* Styled - Global - Theme*/
import styled from 'styled-components';
import { Global } from 'assets/styled/global';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styled/theme';

/* Componets */
import { Footer } from 'components';

const Layout = ({ children }) => (
	<Fragment>
		<Global suppressMultiMountWarning />
		<ThemeProvider theme={theme}>
			<AbsoluteWrapper>
				{/* <Header /> */}
				{children}
				<Footer
					bgColor={' linear-gradient(to top, #1f1b58, #5c1354, #841143);'}
				/>
			</AbsoluteWrapper>
		</ThemeProvider>
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

const AbsoluteWrapper = styled.main`/* width: 100%;
	height: 100%; */`;
