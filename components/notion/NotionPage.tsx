import React from 'react';
import { BlockReference, DataBlocks } from '../../@types/article';
import BlockElement from './BlockElement';
import { Block, ID } from './notion';

export default function NotionPage(parentBlocks: ID[], dataBlocks: DataBlocks) {
	let jsx: JSX.Element[] = [];

	// go through all Parent blocks and render out children recursively
	if (parentBlocks != undefined && parentBlocks.length != 0) {
		parentBlocks.forEach((el, id) => {
			// BlockElement handles each parent block
			jsx.push(<BlockElement id={el} key={id} dataBlocks={dataBlocks} />);
		});
	}

	return jsx;
}
