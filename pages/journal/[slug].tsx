import React from 'react';
import Footer from '../../components/footer/Footer';
import Container from '../../components/grid/Container';
import Navbar from '../../components/nav/Navbar';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Theme } from '../../components/theme/theme';
import Paragraph from '../../components/article_items/Paragraph';
import Heading from '../../components/article_items/Heading';
import Subheading from '../../components/article_items/Subheading';
import ArticleImageMultiple from '../../components/article_items/ArticleImageMultiple';
import ArticleHeader from '../../components/article_items/ArticleHeader';
import Wrapper from '../../components/grid/Wrapper';
import { Color } from '../../components/typography';

type BlogPost = {
	id: string;
	slug: string;
	title: string;
	content: string;
	tags: { name: string }[];
	dateRelevant: number;
	source: any;
};

type PropsType = GetStaticProps<{ blogPost: BlogPost }, { slug: string }>;

export const getStaticProps: PropsType = async (context) => {
	const graphcms = new GraphQLClient(
		'https://api-eu-central-1.graphcms.com/v2/ckshlh7hm1ej901xl2pv5f46c/master'
	);

	const { blogPost } = await graphcms.request<{
		blogPost: BlogPost;
	}>(
		`
			query ProductPageQuery($slug: String!) {
				blogPost ( where: {slug: $slug} ) {
          slug
          title
					content
					tags {
						name
					}
					dateRelevant
        }
      }
    `,
		{ slug: context.params?.slug }
	);

	const source = blogPost.content;
	const mdxSource = await serialize(source);

	return {
		props: {
			blogPost: { ...blogPost, source: mdxSource }
		}
	};
};

export async function getStaticPaths() {
	const graphcms = new GraphQLClient(
		'https://api-eu-central-1.graphcms.com/v2/ckshlh7hm1ej901xl2pv5f46c/master'
	);

	const { blogPosts } = await graphcms.request<{
		blogPosts: { slug: string }[];
	}>(`
    {
      blogPosts {
        slug
      }
    }
  `);

	return {
		paths: blogPosts.map((bp) => ({
			params: { slug: bp.slug }
		})),
		fallback: false
	};
}

const components = {
	// p: dynamic(() => import('../../components/test')),
	p: Paragraph,
	h1: Heading,
	h2: Subheading,
	ImageGallery: ArticleImageMultiple,
	Test: Color
};

export default function Article({
	blogPost
}: InferGetStaticPropsType<typeof getStaticProps>) {
	//

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
					url={`/articles/${blogPost.slug}/blur.png`}>
					{/* url="https://media.istockphoto.com/photos/magic-abstract-blurred-blue-background-picture-id953240180?k=6&m=953240180&s=612x612&w=0&h=3U8IkNGD37jd3NdtWDTPHiIcGd-r9kV1F_EE4j6s0S0=" */}
					<Container className="mt-3"></Container>

					<ArticleHeader
						color="var(--dark)"
						title={blogPost.title}
						categories={blogPost.tags.map((a) => a.name)}
						img={`/articles/${blogPost.slug}/cover.png`}
					/>

					<MDXRemote {...blogPost.source} components={components} />
					<Footer />
				</Wrapper>
			</Theme>
		</>
	);
}
