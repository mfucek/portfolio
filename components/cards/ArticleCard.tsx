import React from 'react';
import styled from 'styled-components';

const CardMain = styled.div`
	position: relative;
	overflow: hidden;
	display: block;
	border-radius: var(--radius-big);

	box-shadow: var(--card-shadow-default);

	background-color: #00000080;
	background-position: center;
	background-size: cover;

	transition-duration: 0.3s;

	&.small {
		height: 200px;
	}
	&.big {
		height: 320px;
	}

	&:hover {
		transform: scale(var(--card-resize-hover));
		box-shadow: var(--card-shadow-hover);
	}
	&:active {
		transform: scale(var(--card-resize-active));
		box-shadow: var(--card-shadow-hover);
	}

	& .card-shade {
		position: absolute;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.8) 50%
		);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		transition-duration: 0.3s;
	}

	&:hover .card-shade {
		transform: translateY(0);
		opacity: 1;
	}
	& .card-shade {
		transform: translateY(50%);
		opacity: 0;
	}

	& .card-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transition-duration: 0.3s;
		text-align: center;
	}

	&:hover .card-text {
		transform: translate(-50%, -50%);
		opacity: 1;
	}
	& .card-text {
		transform: translate(-50%, -40%);
		opacity: 0;
	}
`;

type CardProps = {
	size: string;
	fluid?: Boolean;
	className?: String;
	title: string;
	description?: string;
	categories?: string[];
	image: string;
};
export default class ArticleCard extends React.Component<CardProps> {
	render() {
		return (
			<CardMain
				className={`${'mb-3'} ${this.props.size}`}
				style={{ backgroundImage: `url("${this.props.image}")` }}>
				<div className="card-shade"></div>
				<div className="card-text">
					<h4 className="text-white">{this.props.title}</h4>
					<span className="display-6 text-accent">
						{this.props.categories?.toString()}
					</span>
				</div>
			</CardMain>
		);
	}
}
