import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import { Card } from '../cards';
import Link from 'next/link';
import { blogPost } from '../../@types/blog_post';
import Section from '../grid/Section';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

type featuredSectionProps = {
	blogPosts: blogPost[];
};

const FeaturedMainContainer = styled(Container)`
	& {
		margin-bottom: -100px;
		@media (max-width: 768px) {
			margin-bottom: 0;
		}
	}
`;
export default class FeaturedSection extends React.Component<featuredSectionProps> {
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
