import React, { useEffect } from 'react';
import Link from 'next/link';

import Backdrop from '../../components/article_items/Backdrop';
import Footer from '../../components/footer/Footer';
import Section from '../../components/grid/Section';
import Col from '../../components/grid/Col';
import Container from '../../components/grid/Container';
import Row from '../../components/grid/Row';
import ArticleCardList from '../../components/cards/ArticleCardList';
import Navbar from '../../components/nav/Navbar';
// import Article from './[slug]';

import { GraphQLClient } from 'graphql-request';
import { InferGetStaticPropsType } from 'next';
import { Theme } from '../../components/theme/theme';
import ArticleCard from '../../components/cards/ArticleCard';
import Title from '../../components/article_items/Title';
import Wrapper from '../../components/grid/Wrapper';
import { useRouter } from 'next/router';
import Subheading from '../../components/article_items/Subheading';
import { ArticlePage } from '../../components/notion/notion';
import { getAllArticles } from '../../services/notion/controller';

const Post = () => {
	const router = useRouter();
	const { tags } = router.query;

	if (tags === undefined) {
		return '';
	} else {
		return `${tags}`;
	}
};

export default function Journal({
	results
}: InferGetStaticPropsType<typeof getStaticProps>) {
	useEffect(() => {
		console.log(results);
	});
	let card_view: Boolean = false;

	let articles = results.filter(
		(b) => b.properties.Status.select.name == 'Done'
	);
	if (Post()) {
		articles = articles.filter((b) =>
			b.properties.Tags.multi_select
				.map((c) => c.name)
				.includes(JSON.parse(Post()))
		);
	}

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

					{Post() ? (
						<>
							<Subheading text={Post()} />
							<p> {JSON.parse(Post())} </p>
						</>
					) : (
						<></>
					)}

					<Section>
						<Container>
							<Row>
								{card_view ? (
									<>
										{articles.map((bp, index) => (
											<Col span={4} key={index}>
												<>
													<Link
														href={`/post/${bp.id}`}>
														<a>
															<ArticleCard
																size={
																	index % 4 ==
																	0
																		? 'big'
																		: 'small'
																}
																title={
																	bp
																		.properties[
																		'Name'
																	].title[0]
																		.plain_text
																}
																description={
																	bp
																		.properties[
																		'Description'
																	]
																		.rich_text[0]
																		?.plain_text
																}
																categories={bp.properties[
																	'Tags'
																].multi_select.map(
																	(tag) =>
																		tag.name
																)}
																image={
																	bp.cover
																		?.file
																		.url
																}
															/>
														</a>
													</Link>
												</>
											</Col>
										))}
									</>
								) : (
									<>
										{articles.map((bp, index) => (
											<Col span={12} key={index}>
												<>
													<Link
														href={`/post/${bp.id}`}>
														<a>
															<ArticleCardList
																size={
																	index % 4 ==
																	0
																		? 'big'
																		: 'small'
																}
																title={
																	bp
																		.properties[
																		'Name'
																	].title[0]
																		.plain_text
																}
																description={
																	bp
																		.properties[
																		'Description'
																	]
																		.rich_text[0]
																		?.plain_text
																}
																categories={bp.properties[
																	'Tags'
																].multi_select.map(
																	(tag) =>
																		tag.name
																)}
																image={
																	bp.cover
																		?.file
																		.url
																}
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

export async function getStaticProps() {
	const results: ArticlePage[] = await getAllArticles();

	return {
		props: {
			results
		},
		revalidate: 60
	};
}
