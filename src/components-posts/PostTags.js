import React from 'react';
import styled from 'styled-components';

const PostTags = ({ tags }) => (
	<Tags tags={tags}>{tags.map((tag, i) => <p key={i}> {tag} </p>)}</Tags>
);
export default PostTags;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 1em auto;
	p {
		background-color: #efefef;
		margin: .2em;
		padding: .7em;
		border-radius: 4px;
		text-transform: capitalize;
	}
`;
