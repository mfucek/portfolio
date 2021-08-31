import React from 'react';
import Button from '../button';
import { Col, Container, Row, Section } from '../grid';
import { Color } from '../../components/typography';

import { Backdrop, Paragraph } from '../article_items';
import styled from 'styled-components';
import { Card } from '../cards';
import Link from 'next/link';

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

export class HeroSection extends React.Component {
	render() {
		return (
			<section>
				<HeroContainer>
					<Row justify className="mb-5">
						<Col span={8} className="text-center mb-1">
							<div className="hero-image" />
							<h1 className="text-theme">
								{' '}
								<Color>Hi</Color>, I&apos;m Matija{' '}
							</h1>
						</Col>
						<Col span={6} className="text-center">
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

const FeaturedMainContainer = styled(Container)`
	& {
		margin-bottom: -100px;
	}
`;

export class FeaturedSection extends React.Component {
	render() {
		return (
			<>
				<Section className="mb-4">
					<FeaturedMainContainer>
						<Row justify>
							<Col span={8} className="mb-3">
								<h3 className="text-center">
									I design digital products, brands and
									experiences.
								</h3>
							</Col>
						</Row>
						<Row justify className="mb-3">
							<Col span={12} className="text-center">
								<Button
									className="btn-secondary mx-2"
									href="#test">
									About me
								</Button>
								<Button
									className="btn-secondary mx-2"
									href="/journal">
									My Journey
								</Button>
							</Col>
						</Row>
					</FeaturedMainContainer>
					<Container fluid>
						<Row>
							<Col span={4}>
								<Link href="/journal/test2">
									<Card
										size="small"
										title="Mundus App Design"
										categories="UI / UX Design"
										image="https://s3.amazonaws.com/lumi-blog/_pano/prism-1-05_191009_223101.png?mtime=20191009153102&focal=none&tmtime=20200327071732"
									/>
								</Link>
								<Link href="/journal/test2">
									<Card
										size="small"
										title="Mundus App Design"
										categories="UI / UX Design"
										image="https://s3.amazonaws.com/lumi-blog/_pano/prism-1-05_191009_223101.png?mtime=20191009153102&focal=none&tmtime=20200327071732"
									/>
								</Link>
							</Col>
							<Col span={4} className="mt-5">
								<Link href="/journal/test2">
									<Card
										size="big"
										title="Mundus App Design"
										categories="UI / UX Design"
										image="https://s3.amazonaws.com/lumi-blog/_pano/prism-1-05_191009_223101.png?mtime=20191009153102&focal=none&tmtime=20200327071732"
									/>
								</Link>
							</Col>
							<Col span={4}>
								<Link href="/journal/test2">
									<Card
										size="small"
										title="Mundus App Design"
										categories="UI / UX Design"
										image="https://s3.amazonaws.com/lumi-blog/_pano/prism-1-05_191009_223101.png?mtime=20191009153102&focal=none&tmtime=20200327071732"
									/>
								</Link>
								<Link href="/journal/test2">
									<Card
										size="small"
										title="Mundus App Design"
										categories="UI / UX Design"
										image="https://s3.amazonaws.com/lumi-blog/_pano/prism-1-05_191009_223101.png?mtime=20191009153102&focal=none&tmtime=20200327071732"
									/>
								</Link>
							</Col>
						</Row>
					</Container>
				</Section>
			</>
		);
	}
}

const SkillContainer = styled(Container)`
	& img.skill-icon {
		height: 48px;
		margin-bottom: 8px;
	}
`;

export class SkillsSection extends React.Component {
	render() {
		return (
			<SkillContainer className="mb-4">
				<Row>
					<Col span={12} md={6} className="mb-md-0 mb-3">
						<Backdrop className="pt-3 pb-2 px-2 text-center">
							<Row>
								<Col span={12}>
									<h4 className="mb-3"> Languages </h4>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/html.png"
									/>
									<p className="small"> HTML 5 </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/css.png"
									/>
									<p className="small"> CSS 3 </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/js.png"
									/>
									<p className="small"> Javascript </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/ts.png"
									/>
									<p className="small"> Typescript </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/react.png"
									/>
									<p className="small"> React </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/py.png"
									/>
									<p className="small"> Python </p>
								</Col>
							</Row>
						</Backdrop>
					</Col>
					<Col span={12} md={6}>
						<Backdrop className="pt-3 pb-2 px-2 text-center">
							<Row>
								<Col span={12}>
									<h4 className="mb-3"> Software </h4>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/ai.png"
									/>
									<p className="small"> Illustrator </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/ae.png"
									/>
									<p className="small"> After Effects </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/pr.png"
									/>
									<p className="small"> Premiere Pro </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/f360.png"
									/>
									<p className="small"> Fusion 360 </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/blender.png"
									/>
									<p className="small"> Blender </p>
								</Col>
								<Col span={4} sm={2} md={4} className="mb-2">
									<img
										className="skill-icon"
										src="/img/skill_icons/figma.png"
									/>
									<p className="small"> Figma </p>
								</Col>
							</Row>
						</Backdrop>
					</Col>
				</Row>
			</SkillContainer>
		);
	}
}
