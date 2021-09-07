import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from '../grid/Container';
import Col from '../grid/Col';

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
		background-color: rgba(var(--theme-background), 1);
		transition-duration: 0.1s;
	}

	& .nav a:active {
		background-color: rgba(var(--theme-background), 0.5);
	}

	& .gradient-top {
		position: absolute;
		background: linear-gradient(
			rgb(var(--theme-shade)),
			rgb(var(--theme-shade), 0)
		);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;
export default class Navbar extends React.Component {
	render() {
		return (
			<NavbarMain>
				<Container fluid className="nav-container pt-3 px-0">
					<div className="gradient-top"></div>
					<div className="row mx-0 text-center">
						<Col>
							<ul className="nav pb-3">
								<li className="px-1">
									<Link href="/">
										<a className="display-6 py-2 px-2">
											Home
										</a>
									</Link>
								</li>
								<li className="px-1">
									<Link href="/journal">
										<a className="display-6 py-2 px-2">
											Projects
										</a>
									</Link>
								</li>
								<li className="px-1">
									<Link href="/contact">
										<a className="display-6 py-2 px-2">
											Contact
										</a>
									</Link>
								</li>
							</ul>
						</Col>
					</div>
				</Container>
			</NavbarMain>
		);
	}
}
