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

import { useEffect } from 'react';
import { ArticlePage } from '../components/notion/notion';
import { getAllArticles } from '../services/notion/controller';

export default function About() {
	return (
		<>
			<Theme>
				<Seo />
				<Navbar />
				<Wrapper className="pt-5">
					<Section id="about" className="mb-4">
						<Title center text="About me" />

						<Paragraph
							justify="justify"
							text="In as few words possible, i'm a designer. But not one you imagine when you hear the word. I like to look deeper and envision how things work under the hood, not only how they look."
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

					{/* <Section>
						<ArticleEmphasis
							text="Innovative brands i helped manage scalable and sustainable packaging. (PH)"
							linkText="Journal"
							link="/journal"
						/>
					</Section> */}

					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
}
