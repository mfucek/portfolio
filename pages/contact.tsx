import React from 'react';

import Title from '../components/article_items/Title';
import Footer from '../components/footer/Footer';
import Navbar from '../components/nav/Navbar';
import { Theme } from '../components/theme/theme';

import Section from '../components/grid/Section';
import Container from '../components/grid/Container';
import Wrapper from '../components/grid/Wrapper';
import Seo from '../components/seo/Seo';

export default function Contact() {
	return (
		<>
			<Theme>
				<Seo />
				<Navbar />
				<Wrapper color={'var(--dark)'} className="pt-5">
					<Section>
						<Container>
							<Title
								center
								text="Contact Me"
								className="pb-5 mb-5"
							/>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</Container>
					</Section>
					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
}
