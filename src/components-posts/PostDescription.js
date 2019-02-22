import React from 'react';
import styled from 'styled-components';
// import theme from 'assets/styled/theme';

const PostDescription = ({ description }) => {
	return <Description>{description}</Description>;
};

export default PostDescription;

const Description = styled.p`/* something */`;
