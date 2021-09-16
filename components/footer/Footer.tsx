import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';

import Image from 'next/image';
import Link from 'next/link';

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

		.container {
			position: relative;
		}

		.circle-1 {
			top: 0;
			right: 0;
			border: 1px solid rgba(var(--theme-text), 0.1);
		}
		.circle-2 {
			top: -80px;
			right: -80px;
			background-color: rgba(var(--theme-text), 0.05);
		}
		.circle-1,
		.circle-2 {
			position: absolute;
			width: 420px;
			height: 420px;
			border-radius: 100%;
		}

		.content {
			position: relative;
			display: flex;
			align-items: center;
			text-align: right;
			padding-right: 80px;

			.statement {
				display: inline-block;
				text-align: left;
				height: 100%;
				transition-duration: 0.3s;
				cursor: pointer;
				&:hover {
					transform: translateY(var(--button-transform-hover))
						scale(1.1);
				}

				&:active {
					transform: translateY(var(--button-transform-active))
						scale(1.1);
					opacity: 0.8;
					transition-duration: 0.1s;
				}
			}
			.image {
				position: relative;
				display: inline-block;
				margin-left: auto;
				height: 200px;
				width: 200px;
			}
		}
		@media (max-width: 768px) {
			.bottom {
				text-align: center;
			}

			.content {
				justify-content: center;
				padding-right: 20px;
				margin-bottom: 40px;
				.image {
					margin-left: unset;
					height: 120px;
					width: 120px;
				}
			}
		}
	}
`;

export default class Footer extends React.Component {
	render() {
		return (
			<FooterSection className="mt-4">
				<Container className="pt-4">
					<div className="circle-2" />
					<div className="circle-1" />
					<div className="content">
						<div className="image">
							<Image
								src={'/img/footer/footer.png'}
								layout="fill"
								objectFit="contain"></Image>
						</div>

						<Link href={'mailto:matijafucek1@gmail.com'}>
							<div className="statement">
								<h4> Got a project? </h4>
								<h2> Let's talk! </h2>
							</div>
						</Link>
					</div>

					<Row className="mb-3 bottom">
						<Col span={12} className="mb-2">
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
						<Col span={12}>
							<p className="small o-25 text-theme mx-2">
								Copyright 2021 All rights reserved. Matija Fucek
							</p>
						</Col>
					</Row>
				</Container>
			</FooterSection>
		);
	}
}
