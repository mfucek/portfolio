import React from 'react';

type Id = {
	id?: string;
	className?: string;
};
export default class Section extends React.Component<Id> {
	render() {
		return (
			<section className={this.props.className} id={this.props.id}>
				{' '}
				{this.props.children}{' '}
			</section>
		);
	}
}
