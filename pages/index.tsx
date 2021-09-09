import React from 'react';
import type { InferGetStaticPropsType, NextPage } from 'next';

import Section from '../components/grid/Section';
import Wrapper from '../components/grid/Wrapper';

import CategoriesSection from '../components/sections/CategoriesSection';
import FeaturedSection from '../components/sections/FeaturedSection';
import HeroSection from '../components/sections/HeroSection';
import SkillsSection from '../components/sections/SkillSection';

import Footer from '../components/footer/Footer';
import Navbar from '../components/nav/Navbar';
import { Theme } from '../components/theme/theme';
import { GraphQLClient } from 'graphql-request';
import Paragraph from '../components/article_items/Paragraph';
import Title from '../components/article_items/Title';
import Heading from '../components/article_items/Heading';
import ArticleEmphasis from '../components/article_items/Emphasis';
import { blogPost } from '../@types/blog_post';
import Seo from '../components/seo/Seo';

export async function getStaticProps() {
	const graphcms = new GraphQLClient(
		'https://api-eu-central-1.graphcms.com/v2/ckshlh7hm1ej901xl2pv5f46c/master'
	);

	const { blogPosts } = await graphcms.request<{
		blogPosts: blogPost[];
	}>(
		`
			query HomepageQuery {
				blogPosts ( where: {featured: true} first: 5 ) {
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
			blogPosts: blogPosts.map((bp) => ({
				...bp,
				content: bp.content.slice(0, 128)
			}))
		}
	};
}

export default function Home({
	blogPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Theme>
				<Seo />
				<Navbar />
				<Wrapper className="pt-5">
					<HeroSection />

					<FeaturedSection blogPosts={blogPosts} />

					<CategoriesSection />

					<Section id="about" className="mb-4">
						<Title center text="About me" />

						<Paragraph
							justify="justify"
							text="In as few words possible, i’m a designer. But not one you imagine when you hear the word. I like to look deeper and envision how things work under the hood, not only how they look."
						/>

						<Heading center text="The tools" />

						<Paragraph
							justify="justify"
							text="One of the most powerful desires I have is being capable of putting into reality anything I set my mind into."
						/>

						<Paragraph
							justify="justify"
							text="Driven by this I spent my time delving into many different fields and as a result I found myself using these tools most frequently."
						/>
					</Section>

					<SkillsSection />

					<Section>
						<Paragraph
							justify="justify"
							text="Driven by this I spent my time delving into many different fields and as a result I found myself using these tools most frequently."
						/>

						<ArticleEmphasis
							text="Innovative brands i helped manage scalable and sustainable packaging. (PH)"
							linkText="Journal"
							link="/journal"
						/>
					</Section>

					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
}
