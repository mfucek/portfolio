import React from 'react';
import styled from 'styled-components';

import { Color } from '../typography';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

const HeroContainer = styled(Container)`
	& .hero-image {
		display: inline-block;
		height: 200px;
		width: 200px;
		border-radius: 100%;
		/* background: linear-gradient(
			180deg,
			rgba(27, 29, 34, 0) 0%,
			#1b1d22 71.35%
		),
		url('/img/memoji/m-1.png'); */
		background: url('/img/memoji/m-1.png');
		background-size: cover;
		background-position: center;
		margin-bottom: calc(-1 * var(--spacing-3));
	}
`;

export default class HeroSection extends React.Component {
	render() {
		return (
			<section>
				<HeroContainer>
					<Row justify className="mb-5">
						<Col span={12} md={8} className="text-center mb-1">
							<div className="hero-image" />
							<h1 className="text-theme">
								{' '}
								<Color>Hi</Color>, I&apos;m Matija{' '}
							</h1>
						</Col>
						<Col span={8} sm={8} md={6} className="text-center">
							<p className="text-theme">
								{' '}
								The world can be big at times, so I made a
								little corner of my own.{' '}
							</p>
						</Col>
					</Row>
				</HeroContainer>
			</section>
		);
	}
}
