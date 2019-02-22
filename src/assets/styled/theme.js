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
	colors
};

export default theme;
