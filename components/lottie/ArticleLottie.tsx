import React from 'react';
import styled, { css } from 'styled-components';

import Container from '../grid/Container';
import Col from '../grid/Col';
import Row from '../grid/Row';
import Image from 'next/image';

import Lottie from 'react-lottie';
import dynamic from 'next/dynamic';

import * as lottie_beer from '../../public/lottie/beer.json';
import * as lottie_answer_status from '../../public/lottie/answer_status.json';

import * as lottie_cheng from '../../public/lottie/cheng2.json';
import * as lottie_bibor from '../../public/lottie/bibor2.json';
import * as lottie_verda from '../../public/lottie/verda2.json';
import * as lottie_nila from '../../public/lottie/nila2.json';

import * as lottie_ending from '../../public/lottie/ending.json';
import * as lottie_intro from '../../public/lottie/intro.json';
import * as lottie_never from '../../public/lottie/never.json';
import * as lottie_signs from '../../public/lottie/signs.json';
import * as lottie_tapout from '../../public/lottie/tapout.json';
import * as lottie_virus from '../../public/lottie/virus.json';
import * as lottie_voting from '../../public/lottie/voting.json';
import * as lottie_buttons from '../../public/lottie/buttons.json';

const data = import('../../public/lottie/beer.json');

const defaultOptions = (data: any) => ({
	loop: true,
	autoplay: true,
	animationData: data,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
});

export default class ArticleLottie extends React.Component {
	render() {
		return (
			<Container className="mb-3">
				<Row justify>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_answer_status)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_beer)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_buttons)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_ending)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_intro)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_never)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_signs)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_tapout)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_virus)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_voting)}
							height={200}
							width={200}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_nila)}
							height={200}
							width={150}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_bibor)}
							height={200}
							width={150}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_verda)}
							height={200}
							width={150}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
					<Col span={6} md={4}>
						<Lottie
							options={defaultOptions(lottie_cheng)}
							height={200}
							width={150}
							isStopped={false}
							isPaused={false}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}
