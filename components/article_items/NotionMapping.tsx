import Link from 'next/link';
import { FC } from 'react';

import Heading from '../article_items/Heading';
import Paragraph from '../article_items/Paragraph';
import Subheading from '../article_items/Subheading';

import {
	Block,
	HeadingOneBlock,
	HeadingThreeBlock,
	HeadingTwoBlock,
	ParagraphBlock
} from '../notion/notion';
import Subsubheading from './Subsubheading';

export const NotionHeading = (block: HeadingOneBlock) => {
	return (
		<>
			{block.heading_1.text.map((e, id) => {
				return <Heading text={e.plain_text} key={id} />;
			})}
		</>
	);
};

export const NotionSubheading = (block: HeadingTwoBlock) => {
	return (
		<>
			{block.heading_2.text.map((e, id) => {
				return <Subheading text={e.plain_text} key={id} />;
			})}
		</>
	);
};

export const NotionSubsubheading = (block: HeadingThreeBlock) => {
	return (
		<>
			{block.heading_3.text.map((e, id) => {
				return <Subsubheading text={e.plain_text} key={id} />;
			})}
		</>
	);
};

export const NotionParagraph: FC<{ block: ParagraphBlock }> = ({
	block,
	children
}) => {
	return (
		<>
			{block.paragraph.text.length != 0 ? (
				<div className={children ? 'pb-2' : ''}>
					<Paragraph text={''} hasChildren={children ? true : false}>
						{block.paragraph.text.map((e) => {
							if (e.annotations.bold) {
								return <b> {e.plain_text} </b>;
							}
							if (e.annotations.italic) {
								return <i> {e.plain_text} </i>;
							}
							if (e.annotations.code) {
								return <code> {e.plain_text} </code>;
							}
							if (e.href) {
								return (
									<Link href={e.href} passHref>
										<a href="">
											<span className="text-accent">
												{e.plain_text}
											</span>
										</a>
									</Link>
								);
							}
							return e.plain_text;
						})}
					</Paragraph>
					{children && <div className="pl-4">{children}</div>}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export const NotionBulletedListItem = (block: Block) => {
	return;
};
export const NotionTodo = (block: Block) => {
	return;
};

// export const NotionImage = (block: Block) => { return; };
// export const NotionImage = (block: Block) => { return; };
