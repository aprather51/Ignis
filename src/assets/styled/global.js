import { createGlobalStyle } from 'styled-components';
import theme from 'assets/styled/theme';

export const Global = createGlobalStyle`

:root {
    font-size: 100%;
}

body {
    font-size: 1em;
    line-height: 1.4em;
    
}

/* Extra Small Mobile */
@media screen and (min-width: theme.breakpoints.xs) {
    body {
        font-size: calc(1em + (1.3125 - 1) * ((100vw - 20em) / (80 - 20)));
        line-height: calc(1.4em + (1.8 - 1.4) * ((100vw - 20em) / (80 - 20)));
    }
}

/* Desktop */
@media (min-width: theme.breakpoints.lg) {
    body {
        font-size: 1.3125em;
        line-height: 1.8em;
    }

}

/* Global Theme */
  body{
    ${theme.fontFamily.googleLink};
    font-family: 'Merriweather', serif;
  }

  h1,h2,h3,h4,h5,h6,p{
    color: ${theme.colors.primary};
  }

/* Global Resetters */
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

  html, body{
    width: 100%;
    height: 100%;
  }

	html,
	body,
	p,
	ol,
	ul,
	li,
	dl,
	dt,
	dd,
	blockquote,
	figure,
	fieldset,
	legend,
	textarea,
	pre,
	iframe,
	hr,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		${'' /* font-size: 100%; */}
		font-weight: normal;
	}

	ul {
		list-style: none;
	}

	button,
	input,
	select,
	textarea {
		margin: 0;
    outline: none;
	}

	a {
		text-decoration: none;
	}

	img,
	embed,
	iframe,
	object,
	video {
		height: auto;
		max-width: 100%;
	}

	audio {
		max-width: 100%;
	}

	iframe {
		border: 0;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
		text-align: left;
	}
`;
