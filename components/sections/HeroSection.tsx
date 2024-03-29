import React from 'react';
import styled from 'styled-components';

import { Color } from '../../components/typography';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

const HeroName = styled.h1`
	font-size: 120px;
	line-height: 120px;
	margin-bottom: -40px;
`;

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
					<Row className="mb-5 mt-4">
						<Col span={12} md={12}>
							<HeroName className="text-shade display-0">
								Fućek
							</HeroName>
							{/* <Row> */}
							<Col span={12} md={6}>
								<h2 className="text-theme mb-1"> /foochek/ </h2>
								<h6 className="o-50">DEFINITION</h6>
								<p className="o-50">
									A person who designs and develops digital
									products and experiences.
								</p>
							</Col>
							{/* </Row> */}
						</Col>
					</Row>
				</HeroContainer>
			</section>
		);
	}
}
