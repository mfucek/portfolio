import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import Backdrop from '../article_items/Backdrop';
import Section from '../grid/Section';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

const SkillContainer = styled(Container)`
	& .skill-icon {
		height: 48px;
		margin-bottom: 8px;
	}
`;

export default class SkillsSection extends React.Component {
	render() {
		return (
			<Section className="mb-4">
				<SkillContainer>
					<Row>
						<Col span={12} md={6} className="mb-md-0 mb-3">
							<Backdrop className="pt-3 pb-2 px-2 text-center">
								<Row>
									<Col span={12}>
										<h4 className="mb-3"> Languages </h4>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/html.png"
											height={48}
											width={48}
										/>
										<p className="small"> HTML 5 </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/css.png"
											height={48}
											width={48}
										/>
										<p className="small"> CSS 3 </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/js.png"
											height={48}
											width={48}
										/>
										<p className="small"> Javascript </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/ts.png"
											height={48}
											width={48}
										/>
										<p className="small"> Typescript </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/react.png"
											height={48}
											width={48}
										/>
										<p className="small"> React </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/py.png"
											height={48}
											width={48}
										/>
										<p className="small"> Python </p>
									</Col>
								</Row>
							</Backdrop>
						</Col>
						<Col span={12} md={6}>
							<Backdrop className="pt-3 pb-2 px-2 text-center">
								<Row>
									<Col span={12}>
										<h4 className="mb-3"> Software </h4>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/ai.png"
											height={48}
											width={48}
										/>
										<p className="small"> Illustrator </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/ae.png"
											height={48}
											width={48}
										/>
										<p className="small"> After Effects </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/pr.png"
											height={48}
											width={48}
										/>
										<p className="small"> Premiere Pro </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/f360.png"
											height={48}
											width={48}
										/>
										<p className="small"> Fusion 360 </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/blender.png"
											height={48}
											width={48}
										/>
										<p className="small"> Blender </p>
									</Col>
									<Col
										span={4}
										sm={2}
										md={4}
										className="mb-2">
										<Image
											className="skill-icon"
											src="/img/skill_icons/figma.png"
											height={48}
											width={48}
										/>
										<p className="small"> Figma </p>
									</Col>
								</Row>
							</Backdrop>
						</Col>
					</Row>
				</SkillContainer>
			</Section>
		);
	}
}
