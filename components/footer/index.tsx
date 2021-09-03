import React from 'react';
import Button from '../button';
import Image from 'next/image';
import { Col, Container, Row } from '../grid';

import styled from 'styled-components';

const FooterSection = styled.section`
	& {
		position: relative;
		padding-bottom: var(--spacing-5);
		/* background: rgb(var(--theme-background)); */
		background: linear-gradient(
			0deg,
			rgba(var(--theme-shade), 1),
			rgba(var(--theme-shade), 0)
		);
		margin-left: calc(-1 * var(--spacing-2));
		margin-right: calc(-1 * var(--spacing-2));
	}
	/* & .gradient {
		position: absolute;
		background: linear-gradient(
			0deg,
			rgba(var(--theme-shade), 1),
			rgba(var(--theme-shade), 0)
		);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
	} */
`;

export class Footer extends React.Component {
	render() {
		return (
			<FooterSection>
				<Container className="pt-4">
					{/* <div className="gradient"></div> */}
					<Row justify className="mb-3">
						<Col span={8} md={12} className="text-center">
							<h2 className="text-theme">
								Let&apos;s work together!
							</h2>
						</Col>
					</Row>
					<Row justify className="mb-4">
						<Col span={12} className="text-center">
							<Button
								className="btn-secondary mx-2"
								href="/contact">
								Buy me a coffee
							</Button>
							<Button
								className="btn-primary mx-2"
								href="/contact">
								Get in touch
							</Button>
						</Col>
					</Row>
					<Row justify className="mb-3 footer-text">
						<Col span={12} className="text-center">
							<p className="small o-25 text-theme">
								Copyright 2021 All rights reserved. Matija Fucek
							</p>
						</Col>
					</Row>
					<Row justify className="mb-3">
						<Col className="text-center">
							<Button
								className="btn-social mx-2"
								href="https://www.linkedin.com/in/matija-fu%C4%87ek-017331154">
								<Image
									src="/img/social_icons/instagram.svg"
									height={16}
									width={16}
									alt=""
								/>
							</Button>
							<Button
								className="btn-social mx-2"
								href="https://github.com/mfucek">
								<Image
									src="/img/social_icons/github.svg"
									height={16}
									width={16}
									alt=""
								/>
							</Button>
							<Button
								className="btn-social mx-2"
								href="https://instagram.com/matijafucek">
								<Image
									src="/img/social_icons/linkedin.svg"
									alt=""
									height={16}
									width={16}
								/>
							</Button>
						</Col>
					</Row>
				</Container>
			</FooterSection>
		);
	}
}
