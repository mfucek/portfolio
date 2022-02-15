import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import ArticleCard from '../cards/ArticleCard';
import Link from 'next/link';
import { blogPost } from '../../@types/blog_post';
import Section from '../grid/Section';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';
import { ArticlePage } from '../notion/notion';

const FeaturedMainContainer = styled(Container)`
	& {
		margin-bottom: -100px;
		@media (max-width: 768px) {
			margin-bottom: 0;
		}
	}
`;

type featuredSectionProps = {
	articles: ArticlePage[];
};

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
									href={`/post/${this.props.articles[0].id}`}>
									<a>
										<ArticleCard
											size="small"
											title={
												this.props.articles[0]
													.properties?.Name.title[0]
													?.plain_text
											}
											categories={this.props.articles[0].properties.Tags.multi_select.map(
												(tag) => tag.name
											)}
											image={
												this.props.articles[0]?.cover
													?.file?.url
											}
										/>
									</a>
								</Link>
								<Link
									href={`/post/${this.props.articles[1].id}`}>
									<a>
										<ArticleCard
											size="small"
											title={
												this.props.articles[1]
													.properties?.Name.title[0]
													?.plain_text
											}
											categories={this.props.articles[1].properties.Tags.multi_select.map(
												(tag) => tag.name
											)}
											image={
												this.props.articles[1]?.cover
													?.file?.url
											}
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
									href={`/post/${this.props.articles[2].id}`}>
									<a>
										<ArticleCard
											size="big"
											title={
												this.props.articles[2]
													.properties?.Name.title[0]
													?.plain_text
											}
											categories={this.props.articles[2].properties.Tags.multi_select.map(
												(tag) => tag.name
											)}
											image={
												this.props.articles[2]?.cover
													?.file?.url
											}
										/>
									</a>
								</Link>
							</Col>
							<Col span={12} md={4} sm={6}>
								<Link
									href={`/post/${this.props.articles[3].id}`}>
									<a>
										<ArticleCard
											size="small"
											title={
												this.props.articles[3]
													.properties?.Name.title[0]
													?.plain_text
											}
											categories={this.props.articles[3].properties.Tags.multi_select.map(
												(tag) => tag.name
											)}
											image={
												this.props.articles[3]?.cover
													?.file?.url
											}
										/>
									</a>
								</Link>
								<Link
									href={`/post/${this.props.articles[4].id}`}>
									<a>
										<ArticleCard
											size="small"
											title={
												this.props.articles[4]
													.properties?.Name.title[0]
													?.plain_text
											}
											categories={this.props.articles[4].properties.Tags.multi_select.map(
												(tag) => tag.name
											)}
											image={
												this.props.articles[4]?.cover
													?.file?.url
											}
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
