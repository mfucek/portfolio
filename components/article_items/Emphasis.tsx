import React from 'react';

import Col from '../grid/Col';
import Container from '../grid/Container';
import Row from '../grid/Row';
import Backdrop from './Backdrop';

type ArticleEmphasisProps = {
	text: string;
	linkText?: string;
	link?: string;
};

class ArticleEmphasis extends React.Component<ArticleEmphasisProps> {
	render() {
		return (
			<Container>
				<Backdrop>
					<Row justify>
						<Col span={8} className="py-3 my-1">
							<h4 className="mb-1"> {this.props.text} </h4>
							{this.props.link ? (
								<a href={this.props.link} className="link">
									{' '}
									{this.props.linkText}{' '}
								</a>
							) : (
								<></>
							)}
						</Col>
					</Row>
				</Backdrop>
			</Container>
		);
	}
}

export default ArticleEmphasis;
