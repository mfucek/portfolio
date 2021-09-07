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
	img: string;
};

type ImageProps = {
	img: string;
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
					background-color: rgba(var(--theme-shade), 0.5);
					padding: 6px 12px;
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
	render() {
		return (
			<ArticleHeaderHelper img={this.props.img} className="mb-4">
				<Container>
					<Row justify>
						<Col span={12} className="text-center px-2">
							{this.props.img ? <div className="image" /> : <></>}
							<div className="content">
								<h2> {this.props.title} </h2>
								<ul className="categories">
									{this.props.categories.map((cat) => {
										return (
											<Link
												key={cat}
												href={`/journal?tags=
														${cat.replace(/[\s/\n]+/g, '-').toLowerCase()}
													`}
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
