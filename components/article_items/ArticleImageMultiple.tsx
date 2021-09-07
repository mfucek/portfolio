import React from 'react';
import styled from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Image from 'next/image';

type ImageProps = {
	img: string;
};

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

class ArticleImageMultiple extends React.Component<ArticleImagesProps> {
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

export default ArticleImageMultiple;
