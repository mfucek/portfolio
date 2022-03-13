import Link from 'next/link';
import React from 'react';

import ArticleImageFull from '../article_items/ArticleImageFull';
import {
	ArticleSplitItem,
	ArticleSplitter
} from '../article_items/ArticleSplitter';
import ArticleTopic from '../article_items/ArticleTopic';
import Heading from '../article_items/Heading';
import Paragraph from '../article_items/Paragraph';
import Subheading from '../article_items/Subheading';
import ArticleCard from '../cards/ArticleCard';
import ArticleCardList from '../cards/ArticleCardList';

import {
	ArticlePage,
	BasePage,
	Block,
	BulletedListBlock,
	ChildDatabaseBlock,
	HeadingOneBlock,
	HeadingThreeBlock,
	HeadingTwoBlock,
	ID,
	ImageBlock,
	ImagePage,
	LinkToPageBlock,
	Page,
	ParagraphBlock,
	TodoBlock,
	TopicPage
} from '../notion/notion';

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

export const NotionParagraph = (block: ParagraphBlock) => {
	return (
		<>
			{block.paragraph.text.length != 0 ? (
				// <Paragraph text={block.paragraph.text[0]?.plain_text} />
				<Paragraph text={''}>
					{/* {block.paragraph.text[0]?.plain_text} */}
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
