import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Section from '../../components/grid/Section';
import Col from '../../components/grid/Col';
import Container from '../../components/grid/Container';
import Row from '../../components/grid/Row';
import ArticleCardList from '../../components/cards/ArticleCardList';

import ArticleCard from '../../components/cards/ArticleCard';
import { ArticlePage } from '../../components/notion/notion';
import CategoriesSection from './CategoriesSection';
import { useRouter } from 'next/router';

const FeaturedMainContainer = styled(Container)`
	& {
		margin-bottom: -100px;
		@media (max-width: 768px) {
			margin-bottom: 0;
		}
	}
`;

const Post = () => {
	const router = useRouter();
	const { tags } = router.query;

	if (tags === undefined) {
		return '';
	} else {
		if (typeof tags == 'string') {
			return tags;
		} else {
			return tags[0];
		}
	}
};

type postSectionProps = {
	articles: ArticlePage[];
	card_view: Boolean;
};

export default function PostSection(props: postSectionProps) {
	let [postFilter, setPostFilter] = useState(
		Post().split(',')[0].replace(/"/g, '')
	);

	let articles = props.articles.filter((b) => {
		let bb = b.properties.Tags.multi_select.map((c) => c.name);
		bb.push('');

		return bb.includes(postFilter);
	});

	return (
		<>
			<CategoriesSection
				setPostFilter={setPostFilter}
				postFilter={postFilter}
			/>

			<Section>
				<Container>
					{articles.length == 0 ? (
						<>
							<p className="text-center small mb-1 o-25">
								No projects in '{postFilter}' are currently
								featured.
							</p>
							<p className="text-center mb-3">
								Please check back soon!
							</p>
						</>
					) : (
						<></>
					)}

					<Row>
						{props.card_view ? (
							<>
								{articles.map((bp, index) => (
									<Col span={12} md={6} key={index}>
										<>
											<Link href={`/post/${bp.id}`}>
												<a>
													<ArticleCard
														size={'small'}
														title={
															bp.properties[
																'Name'
															].title[0]
																.plain_text
														}
														description={
															bp.properties[
																'Description'
															].rich_text[0]
																?.plain_text
														}
														categories={bp.properties[
															'Tags'
														].multi_select.map(
															(tag) => tag.name
														)}
														image={
															bp.cover?.file.url
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
											<Link href={`/post/${bp.id}`}>
												<a>
													<ArticleCardList
														size={
															index % 4 == 0
																? 'big'
																: 'small'
														}
														title={
															bp.properties[
																'Name'
															].title[0]
																.plain_text
														}
														description={
															bp.properties[
																'Description'
															].rich_text[0]
																?.plain_text
														}
														categories={bp.properties[
															'Tags'
														].multi_select.map(
															(tag) => tag.name
														)}
														image={
															bp.cover?.file.url
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
		</>
	);
}
