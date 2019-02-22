// Theme colors
const colors = {
	primary: '#222',
	secondary: '#d9d9d9',

	/* Text Color */
	txtColor: '#222',

	/*Basic Color */
	blk: '#222',
	wht: '#f3f3f3',

	/* Link Color */
	link: '#1e90ff'
};

// Font Family
const fontFamily = {
	googleLink: `@import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,700,900');`,
	fonts: 'Merriweather, serif'
};

const fontSize = {
	h1: '2.25em',
	h2: '2em',
	h3: '1.35em',
	h4: '1.25em',
	h5: '0.9em',
	h6: '0.7em',
	p: '1em'
};

// @media
const breakpoints = {
	xs: '20em', //320px — small mobile screen
	mobile: '37.5em', // 600px — Minimum mobile screen
	tablet: '47em', // 768px
	desktop: '62.5em', // 1000px — Minimun desktop screen
	lg: '80em' //1280px — full desktop screen
};

// import/export
const theme = {
	breakpoints,
	colors,
	fontFamily,
	fontSize
};

export default theme;
