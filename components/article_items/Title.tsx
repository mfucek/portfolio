import React from 'react';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';

type TitleProps = {
	className?: String;
	text: String;
	center?: boolean;
};

export class Title extends React.Component<TitleProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-3">
					<Col
						span={12}
						sm={8}
						className={`${this.props.center ? 'text-center' : ''} ${
							this.props.className
						}`}>
						<h2 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h2>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default Title;
