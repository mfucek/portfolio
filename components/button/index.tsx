import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

type buttonProps = {
	className?: string;
	href?: string;
};

const ButtonHelper = styled.a<buttonProps>`
	& {
		cursor: pointer;

		font-family: 'Open Sans';
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.05em;

		position: relative;
		display: inline-block;
		align-items: center;
		padding: 12px 32px;
		border-radius: 8px;
		transition-duration: 0.3s;
		filter: drop-shadow(var(--button-shadow-default));
		font-weight: bold;
	}
	&.simple {
		padding: 0;
		filter: none !important;
	}

	&:hover {
		transform: translateY(var(--button-transform-hover));
		filter: drop-shadow(var(--button-shadow-hover));
	}

	&:active {
		transform: translateY(var(--button-transform-active));
		opacity: 0.8;
		transition-duration: 0.1s;
		filter: drop-shadow(var(--button-shadow-active));
	}

	&.btn-primary {
		background: rgb(var(--accent));
		color: rgb(var(--white));
	}
	&.btn-secondary {
		background: #0d0e11;
		color: rgb(var(--white));
	}

	/* &::after {
	content: '';
	--rad: 4px;
	position: absolute;
	top: calc( 8px - var(--rad) );
	left: calc( 8px - var(--rad) );
	height: calc( var(--rad) * 2 * 2 );
	width: calc( 100% - var(--rad) * 2 );
	border-radius: var(--rad);
	background-color: #fff;
	opacity: 0.05;
	transition-duration: 0.3s;
}
&:hover::after {
	height: calc( var(--rad) * 2 * 1.5 );
}
&:active::after {
	height: calc( var(--rad) * 2 * 2.5 );
	transition-duration: 0.1s;
} */

	&.btn-social {
		padding: 10px 12px;
		border-radius: 12px;
		background-color: rgb(var(--theme-shade));
		filter: none;
	}
	&.btn-social:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}
	&.btn-social:active {
		background-color: rgba(0, 0, 0, 0.5);
	}
	&.btn-social::after {
		content: none;
	}
`;

const Button = (props: any) => {
	return (
		<Link href={props.href} passHref>
			<ButtonHelper className={props.className}>
				{props.children}
			</ButtonHelper>
		</Link>
	);
};

export default Button;
