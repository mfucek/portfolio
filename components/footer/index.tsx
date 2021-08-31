import React from 'react';
import Button from '../button';
import { Col, Container, Row } from '../grid';

import styled from 'styled-components';

const FooterSection = styled.section`
	padding-bottom: var(--spacing-5);
	background: linear-gradient(
		0deg,
		rgba(var(--theme-shade), 1) 0%,
		rgba(var(--theme-shade), 0) 100%
	);
`;

export class Footer extends React.Component {
	render() {
		return (
			<FooterSection>
				<Container className="pt-4">
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
								<img
									src="/img/social_icons/instagram.svg"
									alt=""
								/>
							</Button>
							<Button
								className="btn-social mx-2"
								href="https://github.com/mfucek">
								<img
									src="/img/social_icons/github.svg"
									alt=""
								/>
							</Button>
							<Button
								className="btn-social mx-2"
								href="https://instagram.com/matijafucek">
								<img
									src="/img/social_icons/linkedin.svg"
									alt=""
								/>
							</Button>
						</Col>
					</Row>
				</Container>
			</FooterSection>
		);
	}
}
