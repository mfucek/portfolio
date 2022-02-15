// articleHeader
// article

// category

import {ID, Block, Page} from '../components/notion/notion';

export type BlockReference = {
	block: Block | Page;
	children: ID[];
	parent: null | ID;
};

// export type DataBlocks = {
// 	[id: ID]: BlockReference;
// };
export type DataBlocks = Record<string, BlockReference>;