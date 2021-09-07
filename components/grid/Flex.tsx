import React from 'react';
import styled from 'styled-components';

export default class Flex extends React.Component {
	render() {
		return <div className="d-flex"> {this.props.children} </div>;
	}
}

type FlexConstantProps = {
	width: string;
	align_self?: string;
	className?: string;
};

const FlexHelper = styled.div<FlexConstantProps>`
	flex: 0 0 ${(props) => props.width};
`;

export class FlexConstant extends React.Component<FlexConstantProps> {
	render() {
		return (
			<FlexHelper
				width={this.props.width}
				className={`${
					this.props.align_self
						? 'align-self-' + this.props.align_self
						: ''
				}`}>
				{' '}
				{this.props.children}{' '}
			</FlexHelper>
		);
	}
}

type FlexFillProps = {
	align_self?: string;
	className?: string;
};
export class FlexFill extends React.Component<FlexFillProps> {
	render() {
		return (
			<div
				className={`${'flex-fill'} ${
					this.props.align_self
						? 'align-self-' + this.props.align_self
						: ''
				}`}>
				{' '}
				{this.props.children}{' '}
			</div>
		);
	}
}
