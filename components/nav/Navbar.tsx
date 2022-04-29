import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Flex, { FlexConstant, FlexFill } from '../grid/Flex';
import Button from '../button';

const Sidebar = styled.div`
	position: fixed;
	left: 0;
	/* top: 50%;
	transform: translateY(-50%); */
	bottom: 0;
	z-index: 2;
	* {
		display: block;
	}

	@media screen and (max-width: 992px) {
		& {
			display: none;
		}
	}
`;
const NavbarMain = styled.div`
	position: relative;
	height: 0;
	z-index: 10;

	& ul.nav {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	& .nav-container {
		position: relative;
	}

	& ul.nav li {
		display: inline-block;
		position: relative;
	}

	& .nav a {
		text-decoration: none;
		position: relative;
		border-radius: var(--radius-small);
		transition-duration: 0.3s;
		color: rgb(var(--theme-text));
	}

	& .nav a:hover {
		background-color: rgba(var(--theme-shade), 0.5);
		transition-duration: 0.1s;
	}

	& .nav a:active {
		background-color: rgba(var(--theme-shade), 0.4);
	}

	& .gradient-top {
		position: absolute;
		background: linear-gradient(
			rgb(var(--theme-background)),
			rgb(var(--theme-background), 0)
		);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
	}
`;
export default class Navbar extends React.Component {
	render() {
		return (
			<>
				<NavbarMain>
					<Container fluid className="nav-container pt-3 px-0">
						<div className="gradient-top"></div>
						<Container fluid>
							<div className="row mx-0 text-center">
								<Col>
									<Flex>
										<FlexFill>
											<ul className="nav pb-3 text-left">
												<li>
													<Link href="/">
														<a className="display-6 py-2 px-2">
															Foochek.
														</a>
													</Link>
												</li>
											</ul>
										</FlexFill>
										<FlexFill>
											<ul className="nav pb-3 text-right">
												<li className="px-1">
													<Link href="/about">
														<a className="display-6 py-2 px-2">
															About
														</a>
													</Link>
												</li>
												<li className="px-1">
													<Link href="mailto:matijafucek1@gmail.com">
														<a className="display-6 py-2 px-2">
															Contact
														</a>
													</Link>
												</li>
											</ul>
										</FlexFill>
									</Flex>
								</Col>
							</div>
						</Container>
					</Container>
				</NavbarMain>
				<Sidebar className="mb-3">
					<Button
						className="btn-social mx-1 my-2"
						href="https://instagram.com/matijafucek"
						svg="/img/social_icons/instagram.svg"></Button>
					<Button
						className="btn-social mx-1 my-2"
						href="https://github.com/mfucek"
						svg="/img/social_icons/github.svg"></Button>
					<Button
						className="btn-social mx-1 my-2"
						href="https://www.linkedin.com/in/matija-fu%C4%87ek-017331154"
						svg="/img/social_icons/linkedin.svg"></Button>
				</Sidebar>
			</>
		);
	}
}
