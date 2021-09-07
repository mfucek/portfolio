export interface blogPost {
	id: string;
	slug: string;
	title: string;
	content: string;
	tags: { name: string }[];
	dateRelevant: number;
	source: any;
}