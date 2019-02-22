import React from 'react';
import styled from 'styled-components';
// import theme from 'assets/styled/theme';

const PostDate = ({ date }) => (
	<Date>
		<strong>Published:</strong> {date}
	</Date>
);

export default PostDate;

const Date = styled.div`
	font-size: 1em;
	margin: 1em 0;
	padding: 1em 0;
	strong {
		font-weight: 600;
	}
`;
