import React from 'react';
import styled, { css } from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Image from 'next/image';
import Link from 'next/link';

type ImageContainerProps = {
	height: number;
};

const ImageContainer = styled.div<ImageContainerProps>`
	display: block;
	height: ${(props) => props.height}px;
	@media (max-width: 768px) {
		& {
			height: 240px;
		}
	}
	position: relative;
	border-radius: var(--radius-big);
	margin-bottom: var(--spacing-3);
	overflow: hidden;
	/* filter: drop-shadow(var(--card-shadow-default)); */
`;

type ArticleImagesProps = {
	img: string | string[];
	height?: number;
};

const calculateCols = (length: number, size: string): number[] => {
	let out: number[] = [];

	// when length > 2
	let layouts: number[] = size == 'md' ? [4, 8, 8, 4] : [6, 6, 6, 6];

	if (length == 1) {
		return [12];
	} else if (length == 2) {
		return [6, 6];
	} else {
		for (let i = 0; i < length; i++) {
			out.push(layouts[i % 4]);
		}
		if (length % 2 == 1) {
			out[length - 1] = 12;
		}
		return out;
	}
};

class ArticleImageMultiple extends React.Component<ArticleImagesProps> {
	images: string[] = Array.isArray(this.props.img)
		? this.props.img
		: [this.props.img];

	render() {
		return (
			<Container className="mb-3">
				<Row justify>
					{this.images.map((img, index) => {
						return (
							<Col
								key={index}
								span={
									calculateCols(this.images.length, 'span')[
										index
									]
								}
								md={
									calculateCols(this.images.length, 'md')[
										index
									]
								}>
								<ImageContainer
									height={
										this.props.height
											? this.props.height
											: 240
									}>
									{/* <Link href={img} passHref>
										<a href=""> */}
									<Image
										src={img}
										// placeholder="blur"
										alt="TODO"
										layout="fill"
										objectFit="cover"
									/>
									{/* </a>
									</Link> */}
								</ImageContainer>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}

export default ArticleImageMultiple;
