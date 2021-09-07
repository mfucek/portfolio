import React from 'react';

type RowProps = {
	justify?: Boolean;
	className?: String;
};
export default class Row extends React.Component<RowProps> {
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
