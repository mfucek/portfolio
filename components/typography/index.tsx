import styled from 'styled-components';

export const Heading1 = styled.h1.attrs((props) => ({
	className: props.className
}))`
	color: red;
`;

export const Color = styled.span`
	color: rgb(var(--accent));
`;
