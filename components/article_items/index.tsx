import React from 'react';
import Button from '../button';
import { Col, Container, Row } from '../grid';
import { Color } from '../../components/typography';

import logo_ig from '../../assets/img/social_icons/instagram.svg';
import styled from 'styled-components';

import Image from 'next/image';

type ParagraphProps = {
	className?: String;
	text: String;
	narrow?: Boolean;
	justify?: String;
};
export class Paragraph extends React.Component<ParagraphProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-4">
					<Col
						span={12}
						sm={this.props.narrow ? 6 : 8}
						className={`${
							this.props.justify
								? 'text-' + this.props.justify
								: 'text-left'
						}`}>
						<p className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

type TitleProps = {
	className?: String;
	text: String;
	center?: boolean;
};
export class Title extends React.Component<TitleProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-3">
					<Col
						span={12}
						sm={8}
						className={`${this.props.center ? 'text-center' : ''} ${
							this.props.className
						}`}>
						<h2 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h2>
					</Col>
				</Row>
			</Container>
		);
	}
}

type HeadingProps = {
	className?: String;
	text: String;
	center?: boolean;
};
export class Heading extends React.Component<HeadingProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-1">
					<Col
						span={12}
						sm={8}
						className={`${this.props.center ? 'text-center' : ''}`}>
						<h3 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}

type SubheadingProps = {
	className?: String;
	text: String;
	center?: boolean;
};
export class Subheading extends React.Component<SubheadingProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-1">
					<Col
						span={12}
						sm={8}
						className={`${this.props.center ? 'text-center' : ''}`}>
						<h4 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h4>
					</Col>
				</Row>
			</Container>
		);
	}
}

type ImageProps = {
	img: string;
};
type ArticleHeaderProps = {
	color: string;
	title: string;
	categories: string[];
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
					background-color: rgba(var(--black), 0.5);
					padding: 6px 12px;
					border-radius: var(--radius-small);

					:not(:last-child) {
						margin-right: var(--spacing-1);
					}
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
											<li key={cat} className="label">
												{' '}
												{cat}{' '}
											</li>
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

const SingleImage = styled.div<ImageProps>`
	display: block;
	height: 240px;
	border-radius: var(--radius-big);
	background-image: url('${(props) => props.img}');
	background-size: cover;
	background-position: center;
	margin-bottom: var(--spacing-3);

	img {
		display: none;
	}
`;
const ImageContainer = styled.div`
	display: block;
	height: 240px;
	position: relative;
	border-radius: var(--radius-big);
	margin-bottom: var(--spacing-3);
	overflow: hidden;
`;

type ArticleImagesProps = {
	img: string[];
};

const calculateCols = (length: number, size: string): number[] => {
	let out: number[] = [];

	let layouts: number[] = size == 'md' ? [4, 8, 8, 4] : [6];

	if (length == 1) {
		return [12];
	} else if (length == 2) {
		return [6, 6];
	}

	for (let i = 0; i < length; i++) {
		out.push(layouts[i % 4]);
	}
	if (length % 2 == 1) {
		out[length - 1] = 12;
	}
	return out;
};

export class ArticleImages extends React.Component<ArticleImagesProps> {
	render() {
		return (
			<Container className="mb-3">
				<Row justify className="px-2 px-md-0">
					{this.props.img.map((img, index) => {
						return (
							<Col
								key={index}
								span={
									calculateCols(
										this.props.img.length,
										'span'
									)[index]
								}
								md={
									calculateCols(this.props.img.length, 'md')[
										index
									]
								}>
								{/* <SingleImage img={img}>
									{' '}
									<img src={img} alt="TODO" />{' '}
								</SingleImage> */}
								<ImageContainer>
									<Image
										src={img}
										alt="TODO"
										layout="fill"
										objectFit="cover"
									/>
								</ImageContainer>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export const Backdrop = styled.div`
	background-color: rgba(var(--theme-shade), 0.5);
	/* background-color: rgba(var(--theme-shade), 0.25); */
	border-radius: var(--radius-big);
`;

type ArticleEmphasisProps = {
	text: string;
	linkText?: string;
	link?: string;
};
export class ArticleEmphasis extends React.Component<ArticleEmphasisProps> {
	render() {
		return (
			<Container>
				<Backdrop>
					<Row justify>
						<Col span={8} className="py-3 my-1">
							<h4 className="mb-1"> {this.props.text} </h4>
							{this.props.link ? (
								<a href={this.props.link} className="link">
									{' '}
									{this.props.linkText}{' '}
								</a>
							) : (
								<></>
							)}
						</Col>
					</Row>
				</Backdrop>
			</Container>
		);
	}
}
