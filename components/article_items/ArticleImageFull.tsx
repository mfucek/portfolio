import React from 'react';
import styled from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Image from 'next/image';
import Section from '../grid/Section';

const ImageContainer = styled.div`
	& {
		display: block;
		width: 100%;
		position: relative;
		border-radius: var(--radius-big);
		margin-bottom: var(--spacing-3);
		/* filter: drop-shadow(var(--card-shadow-default)); */
		overflow: hidden;

		.test {
			height: 320px;
			width: 100%;
			background-color: red;
		}

		.custom-img {
			object-fit: contain;
			width: 100% !important;
			position: relative !important;
			height: unset !important;
		}

		.unset-img {
			width: 100%;
		}
		.unset-img > * {
			position: unset !important;
		}
	}
`;

type ImageProps = {
	img: string;
	fluid?: boolean;
};

export class ArticleImageFull extends React.Component<ImageProps> {
	render() {
		return (
			<Section className="mb-4">
				<Container fluid={this.props.fluid ? true : false}>
					<ImageContainer>
						{/* <img src={this.props.img} width="100%" /> */}
						{/* <Image
							src={this.props.img}
							alt="TODO"
							width="100%"
							layout="fill"
						/> */}
						<div className="unset-img">
							<Image
								alt=""
								// placeholder="blur"
								src={this.props.img}
								layout="fill"
								className="custom-img"
							/>
						</div>
					</ImageContainer>
				</Container>
			</Section>
		);
	}
}

export default ArticleImageFull;
