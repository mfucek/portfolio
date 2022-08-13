import React from 'react';

import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';

type ParagraphProps = {
	className?: String;
	text: String;
	narrow?: Boolean;
	justify?: String;
	hasChildren?: boolean;
};

class Paragraph extends React.Component<ParagraphProps> {
	render() {
		return (
			<Container>
				<Row
					justify
					className={this.props.hasChildren ? 'mb-2' : 'mb-4'}>
					<Col
						span={12}
						sm={this.props.narrow ? 6 : 8}
						className={`${
							this.props.justify
								? 'text-' + this.props.justify
								: 'text-left'
						}`}>
						<p className="text-theme">
							{' '}
							{this.props.text || this.props.children}{' '}
						</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Paragraph;
