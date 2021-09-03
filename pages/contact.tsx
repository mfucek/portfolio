import React from 'react';
import { Heading, Title } from '../components/article_items';
import { Footer } from '../components/footer';
import { Container, Section, Wrapper } from '../components/grid';
import { Navbar } from '../components/nav';
import { Theme } from '../components/theme/theme';

export default function Contact() {
	return (
		<>
			<Theme>
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
