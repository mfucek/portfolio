import React from 'react';
import styled, { css } from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Image from 'next/image';

const ArticleTopicHelper = styled.div`
	& {
		background-color: rgba(var(--theme-shade), 0.25);
		border-radius: var(--radius-big);
		padding: 0;
		overflow: hidden;

		.custom-img {
			object-fit: contain;
			width: 100% !important;
			position: relative !important;
			height: unset !important;
		}

		.unset-img {
			width: 100%;
		}
		.unset-img > div {
			position: unset !important;
		}

		.content {
			padding: var(--spacing-3);
		}
	}
`;

type ArticleTopicProps = {
	img?: string;
	title: string;
	text: string;
};

export default class ArticleTopic extends React.Component<ArticleTopicProps> {
	render() {
		return (
			<ArticleTopicHelper className="mb-3">
				<div className="content">
					<h4 className="mb-1">{this.props.title}</h4>
					<p>{this.props.text}</p>
				</div>
				{this.props.img ? (
					<>
						<div className="unset-img">
							<Image
								alt="Mountains"
								src={this.props.img}
								layout="fill"
								className="custom-img"
							/>
						</div>
					</>
				) : (
					<></>
				)}
			</ArticleTopicHelper>
		);
	}
}
