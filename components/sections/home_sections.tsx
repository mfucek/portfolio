import React from 'react';
import Button from '../button';
import {
	Col,
	Container,
	Flex,
	FlexConstant,
	FlexFill,
	Row,
	Section
} from '../grid';
import { Color } from '../../components/typography';

import { Backdrop, Paragraph } from '../article_items';
import styled from 'styled-components';
import { Card } from '../cards';
import Link from 'next/link';
import Image from 'next/image';

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

const FeaturedMainContainer = styled(Container)`
	& {
		margin-bottom: -100px;
		@media (max-width: 768px) {
			margin-bottom: 0;
		}
	}
`;

type blogPost = {
	id: string;
	slug: string;
	title: string;
	content: string;
	tags: { name: string }[];
	dateRelevant: number;
};

type featuredSectionProps = {
	blogPosts: blogPost[];
};

export class FeaturedSection extends React.Component<featuredSectionProps> {
	render() {
		return (
			<>
				<Section className="mb-4">
					<FeaturedMainContainer>
						<Row justify>
							<Col span={12} md={8} className="mb-3">
								<h3 className="text-center">
									I design digital products, brands and
									experiences.
								</h3>
							</Col>
						</Row>
						<Row justify className="mb-3">
							<Col span={12} className="text-center">
								<Button
									className="btn-secondary mr-1"
									onClick={() => {
										let obj =
											document.querySelector('#about');
										if (obj) {
											obj.scrollIntoView({
												behavior: 'smooth'
											});
										}
									}}>
									About me
								</Button>
								<Button
									className="btn-secondary"
									href="/journal">
									My Journey
								</Button>
							</Col>
						</Row>
					</FeaturedMainContainer>
					<Container fluid>
						<Row>
							<Col span={12} md={4} sm={6}>
								<Link
									href={`/journal/${this.props.blogPosts[0].slug}`}>
									<a>
										<Card
											size="small"
											title={
												this.props.blogPosts[0].title
											}
											categories={this.props.blogPosts[0].tags.map(
												(tag) => tag.name
											)}
											image={`articles/${this.props.blogPosts[0].slug}/cover.png`}
										/>
									</a>
								</Link>
								<Link
									href={`/journal/${this.props.blogPosts[1].slug}`}>
									<a>
										<Card
											size="small"
											title={
												this.props.blogPosts[1].title
											}
											categories={this.props.blogPosts[1].tags.map(
												(tag) => tag.name
											)}
											image={`articles/${this.props.blogPosts[1].slug}/cover.png`}
										/>
									</a>
								</Link>
							</Col>
							<Col
								span={12}
								md={4}
								sm={6}
								hide={'md'}
								className="mt-5">
								<Link
									href={`/journal/${this.props.blogPosts[2].slug}`}>
									<a>
										<Card
											size="big"
											title={
												this.props.blogPosts[2].title
											}
											categories={this.props.blogPosts[2].tags.map(
												(tag) => tag.name
											)}
											image={`articles/${this.props.blogPosts[2].slug}/cover.png`}
										/>
									</a>
								</Link>
							</Col>
							<Col span={12} md={4} sm={6}>
								<Link
									href={`/journal/${this.props.blogPosts[3].slug}`}>
									<a>
										<Card
											size="small"
											title={
												this.props.blogPosts[3].title
											}
											categories={this.props.blogPosts[3].tags.map(
												(tag) => tag.name
											)}
											image={`articles/${this.props.blogPosts[3].slug}/cover.png`}
										/>
									</a>
								</Link>
								<Link
									href={`/journal/${this.props.blogPosts[4].slug}`}>
									<a>
										<Card
											size="small"
											title={
												this.props.blogPosts[4].title
											}
											categories={this.props.blogPosts[4].tags.map(
												(tag) => tag.name
											)}
											image={`articles/${this.props.blogPosts[4].slug}/cover.png`}
										/>
									</a>
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
	& .skill-icon {
		height: 48px;
		margin-bottom: 8px;
	}
`;

export class SkillsSection extends React.Component {
	render() {
		return (
			<Section className="mb-4">
				<SkillContainer>
					<Row>
						<Col span={12} md={6} className="mb-md-0 mb-3">
							<Backdrop className="pt-3 pb-2 px-2 text-center">
								<Row>
									<Col span={12}>
										<h4 className="mb-3"> Languages </h4>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/html.png"
											height={48}
											width={48}
										/>
										<p className="small"> HTML 5 </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/css.png"
											height={48}
											width={48}
										/>
										<p className="small"> CSS 3 </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/js.png"
											height={48}
											width={48}
										/>
										<p className="small"> Javascript </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/ts.png"
											height={48}
											width={48}
										/>
										<p className="small"> Typescript </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/react.png"
											height={48}
											width={48}
										/>
										<p className="small"> React </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/py.png"
											height={48}
											width={48}
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
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/ai.png"
											height={48}
											width={48}
										/>
										<p className="small"> Illustrator </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/ae.png"
											height={48}
											width={48}
										/>
										<p className="small"> After Effects </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/pr.png"
											height={48}
											width={48}
										/>
										<p className="small"> Premiere Pro </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/f360.png"
											height={48}
											width={48}
										/>
										<p className="small"> Fusion 360 </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/blender.png"
											height={48}
											width={48}
										/>
										<p className="small"> Blender </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/figma.png"
											height={48}
											width={48}
										/>
										<p className="small"> Figma </p>
									</Col>
								</Row>
							</Backdrop>
						</Col>
					</Row>
				</SkillContainer>
			</Section>
		);
	}
}

interface CategoriesSectionProps {
	title?: string;
	description?: string;
	href?: any;
	icon?: string;
	color?: string;
}
const CategoryItemHelper = styled.div<CategoriesSectionProps>`
	& {
		.icon {
			display: inline-block;
			font-size: 32px;
			text-align: center;
			justify-content: center;
			line-height: 56px;
			width: 56px;
			border-radius: 12px;
			background-color: ${(props) => props.color};
		}
		.body {
			display: inline;
			.title {
			}
			.description {
				opacity: 0.6;
			}
		}
		margin-bottom: var(--spacing-3);
	}
`;

class CategoryItem extends React.Component<CategoriesSectionProps> {
	render() {
		return (
			<Button href={this.props.href} className="simple w-100">
				<CategoryItemHelper color={this.props.color}>
					<Flex>
						<FlexConstant width="68px">
							<div className="icon">{this.props.icon}</div>
						</FlexConstant>
						<FlexFill>
							<div className="body">
								<p className="title display-5">
									{this.props.title}
								</p>
								<p className="description small">
									{this.props.description}
								</p>
							</div>
						</FlexFill>
					</Flex>
				</CategoryItemHelper>
			</Button>
		);
	}
}

export class CategoriesSection extends React.Component {
	render() {
		return (
			<>
				<Section className="mb-3">
					<Container>
						<Row justify>
							<Col span={10} md={8}>
								<Row>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Movies"
											description="Explore my filmography and production."
											href="/journal?tags=filmography"
											icon="🎬"
											color="#3AD0FF40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Interface"
											description="Explore my filmography and production."
											href="/journal?tags=interface"
											icon="🖥"
											color="#FF3A8140"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Motion Graphics"
											description="From 3D CGI to 2D short animations."
											href="/journal?tags=motion-graphics"
											icon="🚀"
											color="#FF6A3A40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Packaging"
											description="Explore my filmography and production."
											href="/journal?tags=packaging"
											icon="📦"
											color="#FFB03A40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Game Development"
											description="Beware this section!"
											href="/journal?tags=game-development"
											icon="👾"
											color="#CC3AFF40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Branding"
											description="Explore my filmography and production."
											href="/journal?tags=branding"
											icon="🎨"
											color="#D8FF3A40"
										/>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</Section>
			</>
		);
	}
}
