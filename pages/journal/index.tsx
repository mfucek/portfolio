import React from 'react';
import Link from 'next/link';

import {
	Backdrop,
	Heading,
	Subheading,
	Title
} from '../../components/article_items';
import { Footer } from '../../components/footer';
import { Col, Container, Row, Section, Wrapper } from '../../components/grid';
import { ListCard } from '../../components/list_card';
import { Navbar } from '../../components/nav';
import Article from './[slug]';

import { GraphQLClient } from 'graphql-request';
import { InferGetStaticPropsType } from 'next';

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
	return (
		<>
			<Navbar />
			<Wrapper color={'var(--dark)'} className="pt-5">
				<Section>
					<Container>
						<Title center text="Journal" />
						{/* <Subheading text={products} /> */}
					</Container>
				</Section>

				<Section>
					<Container>
						{blogPosts.map((bp, index) => (
							<>
								<Link href={`/journal/${bp.slug}`}>
									<a>
										<ListCard
											size={
												index % 4 == 0 ? 'big' : 'small'
											}
											title={bp.title}
											description={bp.content}
											categories={bp.tags.map(
												(tag) => tag.name
											)}
											image="https://s3.amazonaws.com/lumi-blog/_pano/prism-1-05_191009_223101.png?mtime=20191009153102&focal=none&tmtime=20200327071732"
										/>
									</a>
								</Link>
							</>
						))}
					</Container>
				</Section>

				<Footer />
			</Wrapper>
		</>
	);
}
