import React from 'react';
import Link from 'next/link';

import Backdrop from '../../components/article_items/Backdrop';
import { Footer } from '../../components/footer';
import Section from '../../components/grid/Section';
import Col from '../../components/grid/Col';
import Container from '../../components/grid/Container';
import Row from '../../components/grid/Row';
import { ListCard } from '../../components/list_card';
import { Navbar } from '../../components/nav';
import Article from './[slug]';

import { GraphQLClient } from 'graphql-request';
import { InferGetStaticPropsType } from 'next';
import { Theme } from '../../components/theme/theme';
import { Card } from '../../components/cards';
import Title from '../../components/article_items/Title';
import Wrapper from '../../components/grid/Wrapper';

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-eu-central-1.graphcms.com/v2/ckshlh7hm1ej901xl2pv5f46c/master'
	);

	const { blogPosts } = await graphcms.request<{
		blogPosts: {
			id: string;
			slug: string;
			title: string;
			content: string;
			tags: { name: string }[];
			dateRelevant: number;
		}[];
	}>(
		`
      {
        blogPosts {
					id
          slug
          title
					content
					tags {
						name
					}
					dateRelevant
        }
      }
    `
	);

	return {
		props: {
			blogPosts: blogPosts
				.map((bp) => ({
					...bp,
					content: bp.content.slice(0, 128)
				}))
				.sort((a, b) => b.dateRelevant - a.dateRelevant) // ne radi
		}
	};
}

export default function Journal({
	blogPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
	let card_view: Boolean = false;

	return (
		<>
			<Theme
				background={'darker'}
				accent={'blue'}
				text={'white'}
				shade={'black'}>
				<Navbar />
				<Wrapper className="pt-5">
					<Section>
						<Container>
							<Title center text="Journal" />
							{/* <Subheading text={products} /> */}
						</Container>
					</Section>

					<Section>
						<Container>
							<Row>
								{card_view ? (
									<>
										{blogPosts.map((bp, index) => (
											<Col span={4} key={index}>
												<>
													<Link
														href={`/journal/${bp.slug}`}>
														<a>
															<Card
																size={
																	index % 4 ==
																	0
																		? 'big'
																		: 'small'
																}
																title={bp.title}
																description={
																	bp.content
																}
																categories={bp.tags.map(
																	(tag) =>
																		tag.name
																)}
																image="/articles/css-animators/cover.png"
															/>
														</a>
													</Link>
												</>
											</Col>
										))}
									</>
								) : (
									<>
										{blogPosts.map((bp, index) => (
											<Col span={12} key={index}>
												<>
													<Link
														href={`/journal/${bp.slug}`}>
														<a>
															<ListCard
																size={
																	index % 4 ==
																	0
																		? 'big'
																		: 'small'
																}
																title={bp.title}
																description={
																	bp.content
																}
																categories={bp.tags.map(
																	(tag) =>
																		tag.name
																)}
																image={`/articles/${bp.slug}/cover.png`}
															/>
														</a>
													</Link>
												</>
											</Col>
										))}
									</>
								)}
							</Row>
						</Container>
					</Section>
					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
}
