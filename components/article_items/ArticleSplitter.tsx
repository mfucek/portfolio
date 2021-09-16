import React from 'react';
import styled, { css } from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Image from 'next/image';

export class ArticleSplitter extends React.Component {
	render() {
		return (
			<Container className="mb-3">
				<Row justify>{this.props.children} </Row>
			</Container>
		);
	}
}

export class ArticleSplitItem extends React.Component {
	render() {
		return (
			<Col span={12} md={6}>
				{' '}
				{this.props.children}{' '}
			</Col>
		);
	}
}
