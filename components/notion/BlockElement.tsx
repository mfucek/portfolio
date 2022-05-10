import Link from 'next/link';
import React from 'react';
import { BlockReference, DataBlocks } from '../../@types/article';
import {
	NotionHeading,
	NotionParagraph,
	NotionSubheading
} from '../article_items/NotionMapping';

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

import Col from '../grid/Col';
import Row from '../grid/Row';
import {
	ArticlePage,
	BasePage,
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
	TopicPage,
	VideoBlock
} from './notion';
import ArticleImageMultiple from '../article_items/ArticleImage';
import Container from '../grid/Container';

type BlockElementProps = {
	dataBlocks: DataBlocks;
	id: ID;
};

export default class BlockElement extends React.Component<BlockElementProps> {
	render() {
		const dataBlocks = this.props.dataBlocks;
		const block = dataBlocks[this.props.id as ID] as BlockReference;

		let blockChildren: JSX.Element[] = [];

		if (block.children.length != 0) {
			block.children.forEach((child, id) => {
				blockChildren.push(
					<BlockElement id={child} key={id} dataBlocks={dataBlocks} />
				);
			});
		}

		if (block.block.object === 'block') {
			if (block.block.type === 'heading_1') {
				return <NotionHeading {...block.block} />;
			}

			if (block.block.type === 'heading_2') {
				return <NotionSubheading {...block.block} />;
			}

			if (block.block.type === 'heading_3') {
				let b: HeadingThreeBlock = block.block;
				return (
					<>
						{b.heading_3.text.map((e, id) => {
							return <h3 key={id}>{e.plain_text}</h3>;
						})}
					</>
				);
			}

			if (block.block.type === 'paragraph') {
				return <NotionParagraph {...block.block} />;
			}

			if (block.block.type === 'bulleted_list_item') {
				let b: BulletedListBlock = block.block;
				return (
					<>
						<Container>
							<Row justify>
								<Col span={12} sm={8}>
									<li>
										{b.bulleted_list_item.text.map((e) => {
											if (e.annotations.bold) {
												return <b>{e.plain_text}</b>;
											}
											return <>{e.plain_text}</>;
										})}
									</li>
								</Col>
							</Row>
						</Container>
						{blockChildren.length != 0 ? (
							<ul>{blockChildren}</ul>
						) : (
							<></>
						)}
					</>
				);
			}

			if (block.block.type === 'to_do') {
				let b: TodoBlock = block.block;
				return (
					<>
						<input
							type="checkbox"
							checked={!!b.to_do.checked}
							readOnly
						/>

						<label htmlFor="vehicle1">
							{b.to_do.text.map((e) => {
								if (e.annotations.bold) {
									return <b>{e.plain_text}</b>;
								}
								return <>{e.plain_text}</>;
							})}
						</label>
						<br />

						{blockChildren.length != 0 ? (
							<ul>{blockChildren}</ul>
						) : (
							<></>
						)}
					</>
				);
			}

			if (block.block.type === 'child_database') {
				let b: ChildDatabaseBlock = block.block;
				if (b.child_database.title === 'Images') {
					let imgs = block.children
						.map(
							(c) =>
								(dataBlocks[c].block as ImagePage).cover?.file
									?.url
						)
						.filter((e) => e);
					return <ArticleImageMultiple img={imgs} />;
				}
				return (
					<>
						{blockChildren.length != 0 ? (
							<ArticleSplitter>{blockChildren}</ArticleSplitter>
						) : (
							<></>
						)}
					</>
				);
			}

			if (block.block.type === 'video') {
				let b: VideoBlock = block.block;

				const youtube_parser = (url: string) => {
					var regExp =
						/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
					var match = url.match(regExp);
					return match && match[7].length == 11 ? match[7] : false;
				};
				return (
					<>
						{/* <p>{b.video.external.url}</p> */}
						<Container>
							<Row justify={true}>
								<Col span={12}>
									<div
										style={{
											height: '420px',
											width: '100%',
											position: 'relative',
											marginBottom: '4em',
											borderRadius: '8px',
											overflow: 'hidden'
										}}>
										<iframe
											width="520"
											height="315"
											src={
												'https://www.youtube.com/embed/' +
												youtube_parser(
													b.video.external.url
												) +
												'?rel=0&amp;modestbranding=1'
											}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
											allowFullScreen
											style={{
												position: 'relative',
												top: '0',
												left: '0',
												width: '100%',
												height: '100%'
											}}
										/>
									</div>
								</Col>
							</Row>
						</Container>
					</>
				);
			}

			if (block.block.type === 'image') {
				if ((block.block as ImageBlock).image?.file?.url) {
					return (
						<ArticleImageFull img={block.block.image.file.url} />
					);
				}
				return <></>;
			}
			if (block.block.type === 'link_to_page') {
				let b: LinkToPageBlock = block.block;
				let ref = this.props.dataBlocks[b.link_to_page.page_id]
					.block as ArticlePage;
				let bp = ref;

				if (ref.object === 'page') {
					return (
						<Row>
							<Col span={12} key={'23'}>
								<>
									<Link href={`/post/${bp.id}`}>
										<a>
											<ArticleCardList
												size={'small'}
												title={
													bp.properties['Name']
														.title[0].plain_text
												}
												description={
													bp.properties['Description']
														.rich_text[0].plain_text
												}
												categories={bp.properties[
													'Tags'
												].multi_select.map(
													(tag) => tag.name
												)}
												image={bp.cover?.file.url}
											/>
										</a>
									</Link>
								</>
							</Col>
						</Row>
					);
				}

				return (
					<>
						<p>
							Couldn&apos;t resolve page: {b.link_to_page.page_id}
						</p>
					</>
				);
			}

			const other = block as any;
			return (
				<>
					<p>{other.block.type}</p>
					<pre> {JSON.stringify(block, null, 8)} </pre>
					{/* {blockChildren ? <ul>{blockChildren}</ul> : <></>} */}
				</>
			);
		} else {
			if (block.parent) {
				let p = dataBlocks[block.parent].block;
				if (
					p.type == 'child_database' &&
					p.child_database.title == 'Topics'
				) {
					let b = block.block as TopicPage;
					let title = b.properties?.Name?.title[0]?.plain_text;
					let text = b.properties?.Content?.rich_text[0]?.plain_text;
					let img = b.cover?.file?.url;
					return (
						<>
							<ArticleSplitItem>
								{img != undefined ? (
									<ArticleTopic
										title={title ? title : ''}
										text={text ? text : ''}
										img={img}
									/>
								) : (
									<ArticleTopic title={title} text={text} />
								)}
							</ArticleSplitItem>
						</>
					);
				}
			}
		}
	}
}
