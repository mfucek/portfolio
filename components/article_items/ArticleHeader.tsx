import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';

type ArticleHeaderProps = {
	color: string;
	title: string;
	categories: string[];
	img?: string;
	date: string;
};

type ImageProps = {
	img?: string;
};

const ArticleHeaderHelper = styled.div<ImageProps>`
	& {
		position: relative;

		.image {
			position: relative;
			/* position: relative; */
			display: block;
			height: 320px;
			border-radius: var(--radius-big);
			background-image: url('${(props) => props.img}');
			background-size: cover;
			background-position: center;
			margin-bottom: -32px;
			overflow: hidden;
			filter: drop-shadow(var(--card-shadow-default));

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 120px;
				background: linear-gradient(
					180deg,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 0.8) 100%
				);
			}
		}

		.content {
			position: relative;

			ul.categories {
				list-style-type: none;
				padding: 0;
				margin: 0;
				li {
					display: inline-block;
					background-color: rgba(var(--theme-accent), 0.1);
					color: rgba(var(--theme-accent), 1);
					padding: 4px 12px;
					border-radius: var(--radius-small);
				}
				*:not(:last-child) {
					margin-right: var(--spacing-1);
				}
			}
		}
	}
`;
export class ArticleHeader extends React.Component<ArticleHeaderProps> {
	date: string =
		new Date(this.props.date).toLocaleString('default', {
			month: 'long'
		}) +
		' ' +
		new Date(this.props.date).toLocaleString('default', {
			day: 'numeric'
		}) +
		', ' +
		new Date(this.props.date).toLocaleString('default', {
			year: 'numeric'
		});

	render() {
		return (
			<ArticleHeaderHelper img={this.props.img} className="mb-4">
				<Container>
					<Row justify>
						<Col span={12} className="text-center px-2">
							{/* {this.props.img ? <div className="image" /> : <></>} */}
							<p className="small mb-1 o-50">{this.date}</p>
							<div className="content">
								<h1 className="display-2 mb-1">
									{' '}
									{this.props.title}{' '}
								</h1>
								<ul className="categories">
									{this.props.categories.map((cat) => {
										return (
											<Link
												key={cat}
												href={`/journal?tags="${cat}"
													`}
												// href={`/journal?tags=
												// 		${cat.replace(/[\s/\n]+/g, '-').toLowerCase()}
												// 	`}
												passHref>
												<a className="label">
													<li key={cat}>{cat}</li>
												</a>
											</Link>
										);
									})}
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</ArticleHeaderHelper>
		);
	}
}

export default ArticleHeader;
