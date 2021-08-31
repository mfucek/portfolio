import type { NextPage } from 'next';

import {
	ArticleEmphasis,
	Backdrop,
	Heading,
	Paragraph,
	Subheading,
	Title
} from '../components/article_items';
import { Card } from '../components/cards';
import {
	Col,
	Container,
	Flex,
	FlexConstant,
	FlexFill,
	Row,
	Section,
	Wrapper
} from '../components/grid';
import {
	FeaturedSection,
	HeroSection,
	SkillsSection
} from '../components/sections/home_sections';
import { ListCard } from '../components/list_card';
import { Footer } from '../components/footer';
import { Navbar } from '../components/nav';
import { Theme } from '../components/theme/theme';

const Home: NextPage = () => {
	return (
		<>
			<Theme>
				<Navbar />
				<Wrapper className="pt-5">
					<HeroSection />

					<FeaturedSection />

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

						<SkillsSection />

						<Paragraph
							justify="justify"
							text="Driven by this I spent my time delving into many different fields and as a result I found myself using these tools most frequently."
						/>

						<ArticleEmphasis
							text="Innovative brands i helped manage scalable and sustainable packaging."
							link="https://www.infinum.com"
							linkText="Infinum"
						/>
					</Section>

					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
};

export default Home;
