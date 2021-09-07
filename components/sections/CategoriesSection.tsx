import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Flex, { FlexFill, FlexConstant } from '../grid/Flex';
import Section from '../grid/Section';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

interface CategoriesSectionProps {
	title?: string;
	description?: string;
	href?: any;
	icon?: string;
	color?: string;
}
const CategoryItemHelper = styled.div<CategoriesSectionProps>`
	& {
		.icon {
			display: inline-block;
			font-size: 32px;
			text-align: center;
			justify-content: center;
			line-height: 56px;
			width: 56px;
			border-radius: 12px;
			background-color: ${(props) => props.color};
		}
		.body {
			display: inline;
			.title {
			}
			.description {
				opacity: 0.6;
			}
		}
		margin-bottom: var(--spacing-3);
	}
`;

class CategoryItem extends React.Component<CategoriesSectionProps> {
	render() {
		return (
			<Button href={this.props.href} className="simple w-100">
				<CategoryItemHelper color={this.props.color}>
					<Flex>
						<FlexConstant width="68px">
							<div className="icon">{this.props.icon}</div>
						</FlexConstant>
						<FlexFill>
							<div className="body">
								<p className="title display-5">
									{this.props.title}
								</p>
								<p className="description small">
									{this.props.description}
								</p>
							</div>
						</FlexFill>
					</Flex>
				</CategoryItemHelper>
			</Button>
		);
	}
}

export default class CategoriesSection extends React.Component {
	render() {
		return (
			<>
				<Section className="mb-3">
					<Container>
						<Row justify>
							<Col span={10} md={8}>
								<Row>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Movies"
											description="Explore my filmography and production."
											href="/journal?tags=filmography"
											icon="🎬"
											color="#3AD0FF40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Interface"
											description="Explore my filmography and production."
											href="/journal?tags=interface"
											icon="🖥"
											color="#FF3A8140"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Motion Graphics"
											description="From 3D CGI to 2D short animations."
											href="/journal?tags=motion-graphics"
											icon="🚀"
											color="#FF6A3A40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Packaging"
											description="Explore my filmography and production."
											href="/journal?tags=packaging"
											icon="📦"
											color="#FFB03A40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Game Development"
											description="Beware this section!"
											href="/journal?tags=game-development"
											icon="👾"
											color="#CC3AFF40"
										/>
									</Col>
									<Col span={12} sm={6}>
										<CategoryItem
											title="Branding"
											description="Explore my filmography and production."
											href="/journal?tags=branding"
											icon="🎨"
											color="#D8FF3A40"
										/>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</Section>
			</>
		);
	}
}
