import React from 'react';

import Container from '../grid/Container';
import Col from '../grid/Col';
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
						<h4 className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</h4>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Subheading;
