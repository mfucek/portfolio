import React from 'react';

type ContainerProps = {
	fluid?: Boolean;
	className?: String;
};
export default class Container extends React.Component<ContainerProps> {
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
