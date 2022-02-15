import React from 'react';

import Title from '../components/article_items/Title';
import Footer from '../components/footer/Footer';
import Navbar from '../components/nav/Navbar';
import { Theme } from '../components/theme/theme';

import Section from '../components/grid/Section';
import Container from '../components/grid/Container';
import Wrapper from '../components/grid/Wrapper';
import Seo from '../components/seo/Seo';
import { submitContactInfo } from '../services/notion/controller';

export default function Contact() {
	return (
		<>
			<Theme>
				<Seo />
				<Navbar />
				<Wrapper color={'var(--dark)'} className="pt-5">
					<Section>
						<Container>
							<Title center text="Contact Me" />
							<form
								onSubmit={(e: React.SyntheticEvent) => {
									e.preventDefault();
									const target =
										e.target as typeof e.target & {
											email: { value: string };
											name: { value: string };
											subject: { value: string };
										};
									const email = target.email.value; // typechecks!
									const name = target.name.value; // typechecks!
									const subject = target.subject.value; // typechecks!
									submitContactInfo();
								}}>
								<div>
									<label>
										Contact email <br />
										<input type="email" name="email" />
									</label>
								</div>
								<div>
									<label>
										Name <br />
										<input type="text" name="name" />
									</label>
								</div>
								<div>
									<label>
										Subject <br />
										<input type="text" name="subject" />
									</label>
								</div>
								<div>
									<label>
										Message <br />
										<textarea />
									</label>
								</div>
								<div>
									<input type="submit" value="Send" />
								</div>
							</form>
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
