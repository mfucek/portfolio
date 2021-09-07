import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
	url?: string;
	color?: string;
	className?: string;
};
const WrapperHelper = styled.div<WrapperProps>`
	position: relative;
	min-height: 100vh;

	max-width: 100vw;
	overflow-x: hidden;

	padding-left: var(--spacing-2);
	padding-right: var(--spacing-2);

	padding-top: var(--spacing-4);
	background-color: rgb(var(--${(props) => props.color}));

	background-image: url('${(props) => props.url}');
	background-size: cover;
	background-attachment: fixed;

	.backdrop {
		position: absolute;
		top: 0;
		height: 200vh;
		max-height: 100%;
		left: 0;
		width: 100vw;
		background: linear-gradient(
			180deg,
			rgba(${(props) => props.color}, 1) 0%,
			rgba(${(props) => props.color}, 0) 100%
		);
		z-index: -1;
		pointer-events: none;
	}

	:not(.backdrop) {
		z-index: 1;
	}
`;

export default class Wrapper extends React.Component<WrapperProps> {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<WrapperHelper
				url={this.props.url}
				color={this.props.color ? this.props.color : 'theme-background'}
				className={this.props.className}>
				{this.props.url ? <div className="backdrop" /> : undefined}
				{this.props.children}
			</WrapperHelper>
		);
	}
}
