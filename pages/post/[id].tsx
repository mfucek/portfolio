import Link from 'next/link';

import Footer from '../../components/footer/Footer';
import Container from '../../components/grid/Container';
import Navbar from '../../components/nav/Navbar';

import { Theme } from '../../components/theme/theme';
import ArticleHeader from '../../components/article_items/ArticleHeader';
import Wrapper from '../../components/grid/Wrapper';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NotionPage from '../../components/notion/NotionPage';
import {
	getAllIds,
	getBlocksById,
	getDatabaseChildren,
	getPageData
} from '../../services/notion/controller';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ArticlePage, ID } from '../../components/notion/notion';
import { BlockReference, DataBlocks } from '../../@types/article';

// const Post = ({ dataBlocks, parentBlocks, pageData, pageReferences }) => {
const Post = ({
	dataBlocks,
	parentBlocks,
	pageData
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	useEffect(() => {
		console.clear();
		console.log('data blocks:');
		console.log(dataBlocks);
		console.log('parent blocks:');
		console.log(parentBlocks);
		console.log('page data:');
		console.log(pageData);
	});

	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Theme
				background={'darker'}
				accent={'blue'}
				text={'white'}
				shade={'black'}>
				<Navbar />

				<Wrapper
					color="var(--dark)"
					url={
						pageData.properties['Background Image'].files[0]?.file
							.url
					}>
					<Container className="mt-3"></Container>

					<ArticleHeader
						color="var(--dark)"
						title={pageData.properties['Name'].title[0]?.plain_text}
						categories={pageData.properties[
							'Tags'
						].multi_select.map((tag) => tag.name)}
						date={pageData.properties['Relevant Date'].date?.start}
					/>

					{NotionPage(parentBlocks, dataBlocks)}
					{/* <MDXRemote {...blogPost.source} components={components} /> */}

					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
};

export async function getStaticProps(context: GetStaticPropsContext) {
	let parentID: ID = context?.params?.id as ID;

	if (parentID === undefined) {
		parentID = '1c34642cd53c4c76afd66ed940268dae'; // 404 :)
	}

	let pageData = (await getPageData(parentID)) as ArticlePage;
	let parentBlocks: ID[] = [];
	let dataBlocks: DataBlocks = {};

	console.log('RELOADING API');

	let queryStack: ID[] = [];
	let pageQueryStack: ID[] = [];
	let databaseQueryStack: ID[] = [];

	const response = await getBlocksById(parentID);

	// record all top-level parent blocks
	response.forEach((block) => {
		parentBlocks.push(block.id);
		dataBlocks[block.id] = {
			block: block,
			children: [],
			parent: null
		};

		if (block.has_children) {
			queryStack.push(block.id);
		}
		if (block.type == 'child_database') {
			databaseQueryStack.push(block.id);
		}
		if (block.type == 'link_to_page') {
			pageQueryStack.push(block.link_to_page.page_id);
		}
	});

	// fetch children blocks
	console.log('\n\nBlock children fetching');

	while (queryStack.length > 0) {
		const parentBlockID: ID = queryStack.pop()!;

		console.log(
			parentBlockID + ' - ' + dataBlocks[parentBlockID].block.type
		);

		let response = await getBlocksById(parentBlockID);
		response.forEach((child) => {
			console.log('\t-> ' + child.id);
			dataBlocks[child.id] = {
				block: child,
				children: [],
				parent: parentBlockID
			};
			dataBlocks[parentBlockID].children.push(child.id);
			if (child.has_children) {
				queryStack.push(child.id);
			}
		});
	}

	// fetch database children as page references
	console.log('\n\nDatabase entry fetching');

	while (databaseQueryStack.length != 0) {
		const databaseID: ID = databaseQueryStack.pop()!;
		console.log(databaseID);

		let response = await getDatabaseChildren(databaseID, 'Order');
		response.forEach((child) => {
			console.log('\t-> ' + child.id);
			dataBlocks[child.id] = {
				block: child,
				children: [],
				parent: databaseID
			};
			dataBlocks[databaseID].children.push(child.id);
		});
	}

	// fetch page references
	console.log('\n\nPage info fetching');

	while (pageQueryStack.length != 0) {
		const pageID: ID = pageQueryStack.pop()!;
		console.log('\t-> ' + pageID);

		let response = await getPageData(pageID);
		dataBlocks[pageID] = {
			block: response,
			children: [],
			parent: null
		};
	}

	return {
		props: {
			dataBlocks: dataBlocks,
			parentBlocks: parentBlocks,
			pageData: pageData
		},
		revalidate: 60
	};
}

export async function getStaticPaths() {
	let paths = await getAllIds();
	console.log(paths);

	return { paths: paths, fallback: false };
}

export default Post;
