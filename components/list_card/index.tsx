import React from 'react';
import styled from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Flex, { FlexConstant, FlexFill } from '../grid/Flex';

const ArticleMain = styled.div`
	& .card-image {
		height: 180px;
		border-radius: var(--radius-big);

		filter: drop-shadow(var(--card-shadow-default));

		background-color: rgb(var(--theme-shade));
		background-position: center;
		background-size: cover;

		transition-duration: 0.3s;

		&.tall {
			height: 240px;
		}
	}

	&:hover .card-image {
		transform: scale(var(--card-resize-hover));
		filter: drop-shadow(var(--card-shadow-hover));
	}
	&:active .card-image {
		transform: scale(var(--card-resize-active));
		filter: drop-shadow(var(--card-shadow-hover));
	}

	& .card-text {
		transition-duration: 0.3s;
		text-align: left;
		opacity: 0.8;
	}
	&:hover .card-text {
		opacity: 1;
	}
`;

type ArticleProps = {
	size: string;
	fluid?: Boolean;
	className?: String;
	title: string;
	description: string;
	categories?: string[];
	image: string;
};
export class ListCard extends React.Component<ArticleProps> {
	render() {
		return (
			<Container
				className={`${this.props.size == 'big' ? 'mb-4' : 'mb-3'}`}>
				<ArticleMain>
					<Row justify>
						{this.props.size == 'big' ? (
							<Col span={12}>
								<div
									className="card-image tall mb-2"
									style={{
										backgroundImage: `url("${this.props.image}")`
									}}
								/>
							</Col>
						) : (
							<></>
						)}

						<Col span={12} sm={8}>
							<Flex>
								{this.props.size == 'small' ? (
									<FlexConstant width="180px">
										<div
											className="card-image mr-3"
											style={{
												backgroundImage: `url("${this.props.image}")`
											}}></div>
									</FlexConstant>
								) : (
									<></>
								)}

								<FlexFill align_self="center">
									<div className="card-text">
										<span className="display-6 text-accent">
											{this.props.categories?.toString()}
										</span>
										<h4 className="mb-1">
											{this.props.title}
										</h4>
										<p className="small o-60">
											{this.props.description}
										</p>
									</div>
								</FlexFill>
							</Flex>
						</Col>
					</Row>
				</ArticleMain>
			</Container>
		);
	}
}
