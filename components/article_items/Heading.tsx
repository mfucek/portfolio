import React from 'react';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';

type HeadingProps = {
	className?: String;
	text: String;
	center?: boolean;
};

export class Heading extends React.Component<HeadingProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-1">
					<Col
						span={12}
						sm={8}
						className={`${this.props.center ? 'text-center' : ''}`}>
						<h3 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Heading;
