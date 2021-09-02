import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
	url?: string;
	color?: string;
	className?: string;
};
export const WrapperHelper = styled.div<WrapperProps>`
	position: relative;
	min-height: 100vh;

	max-width: 100vw;
	overflow-x: hidden;

	padding-left: var(--spacing-2);
	padding-right: var(--spacing-2);

	padding-top: var(--spacing-4);
	background-color: rgb(var(--${(props) => props.color}));

	background-image: url('${(props) => props.url}');
	background-size: cover;
	background-attachment: fixed;

	.backdrop {
		position: absolute;
		top: 0;
		height: 200vh;
		max-height: 100%;
		left: 0;
		width: 100vw;
		background: linear-gradient(
			180deg,
			rgba(${(props) => props.color}, 1) 0%,
			rgba(${(props) => props.color}, 0) 100%
		);
		z-index: -1;
		pointer-events: none;
	}

	:not(.backdrop) {
		z-index: 1;
	}
`;

export class Wrapper extends React.Component<WrapperProps> {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<WrapperHelper
				url={this.props.url}
				color={this.props.color ? this.props.color : 'theme-background'}
				className={this.props.className}>
				{this.props.url ? <div className="backdrop" /> : undefined}
				{this.props.children}
			</WrapperHelper>
		);
	}
}

type ContainerProps = {
	fluid?: Boolean;
	className?: String;
};
export class Container extends React.Component<ContainerProps> {
	render() {
		return (
			<div
				className={`${
					this.props.fluid ? 'container-fluid' : 'container'
				} ${this.props.className ? this.props.className : ''}`}>
				{this.props.children}
			</div>
		);
	}
}

type RowProps = {
	justify?: Boolean;
	className?: String;
};
export class Row extends React.Component<RowProps> {
	render() {
		return (
			<div
				className={`row ${
					this.props.justify ? 'justify-content-center' : ''
				} ${this.props.className ? this.props.className : ''}`}>
				{this.props.children}
			</div>
		);
	}
}

type ColProps = {
	span?: Number;
	sm?: Number;
	md?: Number;
	lg?: Number;
	xs?: Number;
	className?: String;
	hide?: string;
};
export class Col extends React.Component<ColProps> {
	private df_out: string = this.props.span ? ' col-' + this.props.span : '';
	private sm_out: string = this.props.lg ? ' col-lg-' + this.props.lg : '';
	private md_out: string = this.props.md ? ' col-md-' + this.props.md : '';
	private lg_out: string = this.props.sm ? ' col-sm-' + this.props.sm : '';
	private xs_out: string = this.props.xs ? ' col-xs-' + this.props.xs : '';

	private hide: string = this.props.hide ? ' hide-' + this.props.hide : '';

	render() {
		return (
			<div
				className={`col${
					this.df_out +
					this.sm_out +
					this.md_out +
					this.lg_out +
					this.xs_out +
					this.hide
				} ${this.props.className ? this.props.className : ''}`}>
				{this.props.children}
			</div>
		);
	}
}

type Id = {
	id?: string;
	className?: string;
};
export class Section extends React.Component<Id> {
	render() {
		return (
			<section className={this.props.className} id={this.props.id}>
				{' '}
				{this.props.children}{' '}
			</section>
		);
	}
}

export class Flex extends React.Component {
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
