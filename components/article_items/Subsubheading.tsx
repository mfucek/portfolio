import React from 'react';

import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

type SubheadingProps = {
	className?: String;
	text: String;
	center?: boolean;
};

class Subheading extends React.Component<SubheadingProps> {
	render() {
		return (
			<Container>
				<Row justify className="mb-1">
					<Col
						span={12}
						sm={8}
						className={`${this.props.center ? 'text-center' : ''}`}>
						<h5 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h5>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Subheading;
