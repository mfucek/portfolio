import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';

const FooterSection = styled.section`
	& {
		position: relative;
		padding-bottom: var(--spacing-5);
		background: linear-gradient(
			0deg,
			rgba(var(--theme-shade), 1),
			rgba(var(--theme-shade), 0)
		);
		margin-left: calc(-1 * var(--spacing-2));
		margin-right: calc(-1 * var(--spacing-2));
	}
`;

export default class Footer extends React.Component {
	render() {
		return (
			<FooterSection>
				<Container className="pt-4">
					{/* <div className="gradient"></div> */}
					<Row justify className="mb-3">
						<Col span={8} md={12} className="text-center">
							<h4>Got a project?</h4>
							<h2 className="text-theme">Let&apos;s talk!</h2>
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
								href="https://instagram.com/matijafucek"
								svg="/img/social_icons/instagram.svg"></Button>
							<Button
								className="btn-social mx-2"
								href="https://github.com/mfucek"
								svg="/img/social_icons/github.svg"></Button>
							<Button
								className="btn-social mx-2"
								href="https://www.linkedin.com/in/matija-fu%C4%87ek-017331154"
								svg="/img/social_icons/linkedin.svg"></Button>
						</Col>
					</Row>
				</Container>
			</FooterSection>
		);
	}
}
