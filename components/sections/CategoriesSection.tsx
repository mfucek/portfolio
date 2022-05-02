import React from 'react';
import styled from 'styled-components';

import Button from '../button';
import Flex, { FlexFill, FlexConstant } from '../grid/Flex';
import Section from '../grid/Section';
import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

interface CategoryItemProps {
	title?: string;
	description?: string;
	href?: any;
	icon?: string;
	color?: string;
	setPostFilter: React.Dispatch<React.SetStateAction<string>>;
	postFilter: string;
}
interface CategoryItemHelperProps {
	title?: string;
	description?: string;
	href?: any;
	icon?: string;
	color?: string;
}
const CategoryItemHelper = styled.div<CategoryItemHelperProps>`
	& {
		/* padding-left: calc(var(--bs-gutter-x) * 0.5);
		padding-right: calc(var(--bs-gutter-x) * 0.5); */
		padding: calc(var(--bs-gutter-x) * 0.75) calc(var(--bs-gutter-x) * 0.5);
		border-radius: 12px;
		&:hover {
			background-color: rgba(var(--theme-shade), 50%);
		}
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
			.title {
			}
			.description {
				opacity: 0.5;
			}
		}
		&.active {
			.body .description {
				opacity: 1;
			}
		}
		/* margin-bottom: var(--spacing-3); */
	}
`;

const Col2 = styled(Col)`
	@media screen and (min-width: 576px) {
		& {
			padding: 0;
		}
	}
`;

class CategoryItem extends React.Component<CategoryItemProps> {
	render() {
		return (
			<Button
				className={
					this.props.postFilter &&
					this.props.postFilter != this.props.href
						? 'simple w-100 o-50'
						: 'simple w-100'
				}
				onClick={() => {
					if (this.props.postFilter != this.props.href) {
						this.props.setPostFilter(this.props.href);
					} else {
						this.props.setPostFilter('');
					}
				}}>
				<CategoryItemHelper
					color={this.props.color}
					className={
						this.props.href == this.props.postFilter ? 'active' : ''
					}>
					<Flex>
						{/* <FlexConstant width="68px">
							<div className="icon">{this.props.icon}</div>
						</FlexConstant> */}
						<FlexFill>
							<div className="body">
								<p className="title display-5">
									{this.props.icon} {this.props.title}
								</p>
								<p className="card-content description">
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

interface CategoriesSectionProps {
	setPostFilter: React.Dispatch<React.SetStateAction<string>>;
	postFilter: string;
}
export default function CategoriesSection(props: CategoriesSectionProps) {
	return (
		<>
			<Section className="mb-5">
				<Container>
					<Row>
						{/* <div className="text-center mb-3">
							<p className="o-25">
								Warning: Project filtering doesn&apos;t work
								yet.
							</p>
						</div> */}
					</Row>
					{/* <Row justify>
						<Col span={12} md={12}> */}
					<Row>
						<Col2 span={12} md={4} sm={6}>
							<CategoryItem
								title="Game Development"
								description="Beware this section!"
								href="Game Development"
								icon="👾"
								color="#CC3AFF40"
								setPostFilter={props.setPostFilter}
								postFilter={props.postFilter}
							/>
						</Col2>
						<Col2 span={12} md={4} sm={6}>
							<CategoryItem
								title="Motion Graphics"
								description="From 3D CGI to 2D short animations."
								href="Motion Graphics"
								icon="🚀"
								color="#FF6A3A40"
								setPostFilter={props.setPostFilter}
								postFilter={props.postFilter}
							/>
						</Col2>
						<Col2 span={12} md={4} sm={6}>
							<CategoryItem
								title="Packaging"
								description="Explore my filmography and production."
								href="Packaging"
								icon="📦"
								color="#FFB03A40"
								setPostFilter={props.setPostFilter}
								postFilter={props.postFilter}
							/>
						</Col2>
						<Col2 span={12} md={4} sm={6}>
							<CategoryItem
								title="UI & UX Design"
								description="Explore my filmography and production."
								href="Design"
								icon="🖥"
								color="#FF3A8140"
								setPostFilter={props.setPostFilter}
								postFilter={props.postFilter}
							/>
						</Col2>
						<Col2 span={12} md={4} sm={6} className="test">
							<CategoryItem
								title="Movies"
								description="Explore my filmography and production."
								href="Filmmaking"
								icon="🎬"
								color="#3AD0FF40"
								setPostFilter={props.setPostFilter}
								postFilter={props.postFilter}
							/>
						</Col2>
						<Col2 span={12} md={4} sm={6}>
							<CategoryItem
								title="Branding"
								description="Explore my filmography and production."
								href="Branding"
								icon="🎨"
								color="#D8FF3A40"
								setPostFilter={props.setPostFilter}
								postFilter={props.postFilter}
							/>
						</Col2>
					</Row>
					{/* </Col>
					</Row> */}
				</Container>
			</Section>
		</>
	);
}
