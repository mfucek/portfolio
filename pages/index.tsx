import * as React from 'react';
import { InferGetStaticPropsType } from 'next';

import Section from '../components/grid/Section';
import Wrapper from '../components/grid/Wrapper';

import CategoriesSection from '../components/sections/CategoriesSection';
import FeaturedSection from '../components/sections/FeaturedSection';
import HeroSection from '../components/sections/HeroSection';
import SkillsSection from '../components/sections/SkillSection';

import Footer from '../components/footer/Footer';
import Navbar from '../components/nav/Navbar';
import { Theme } from '../components/theme/theme';
import Paragraph from '../components/article_items/Paragraph';
import Title from '../components/article_items/Title';
import Heading from '../components/article_items/Heading';
import ArticleEmphasis from '../components/article_items/Emphasis';
import Seo from '../components/seo/Seo';

import { createContext, useContext, useEffect, useState } from 'react';
import { ArticlePage } from '../components/notion/notion';
import { getAllArticles } from '../services/notion/controller';
import PostSection from '../components/sections/PostSection';
import { useRouter } from 'next/router';

export default function Home({
	results
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [articles, setArticles] = useState<ArticlePage[]>(results);

	const router = useRouter();

	useEffect(() => {
		let devMode =
			router.asPath.includes('?dev') ||
			process.env.NODE_ENV == 'development';
		console.log('development status: ', devMode);

		let tmpArticles = articles;

		if (!devMode) {
			tmpArticles = tmpArticles.filter(
				(a) => a.properties.Status.select?.name === 'Done' // && parseInt(a.properties['Release Date'].date.start) <= Date.now()
			);
		}

		tmpArticles = tmpArticles.sort(
			(a, b) =>
				parseInt(b.properties['Relevant Date'].date.start) -
				parseInt(a.properties['Relevant Date'].date.start)
		);

		setArticles(tmpArticles);
	}, []);

	return (
		<>
			<Theme>
				<Seo />
				<Navbar />
				<Wrapper className="pt-5">
					<HeroSection />

					<PostSection articles={articles} card_view={true} />

					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
}

export async function getStaticProps() {
	const results: ArticlePage[] = await getAllArticles([
		'Done',
		'In progress'
	]);

	return {
		props: {
			results
		},
		revalidate: 10
	};
}
