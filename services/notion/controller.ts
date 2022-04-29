import { Client } from '@notionhq/client';
import { CreatePageParameters, GetDatabaseResponse, GetPageResponse, ListBlockChildrenResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import { ArticlePage, BasePage, Block, ID, Page } from '../../components/notion/notion';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseID = <string> process.env.ARTICLES_DB;
const contactDatabaseID = <string> process.env.CONTACT_DB;

async function getAllIds() {

	try {
		const response: QueryDatabaseResponse = await notion.databases.query( { database_id: databaseID } );
		
		return response.results.map(post => {
			const url = (post as ArticlePage).url.split("-").reverse()[0];
			return `/post/${post.id}`;
		});
	} catch {
		return []
	}
}

async function getBlocksById(id:ID) {
	const response = <Block[]> await (await notion.blocks.children.list({ block_id: id })).results;
	return response;
}

async function getDatabaseChildren<T = Page>(
	id:ID,
	sortProperty?:string | null,
	filterByStatus?:string | null
) {
	
	console.log({

		database_id: id,

		...(sortProperty ? {
			sorts: [{property: sortProperty, direction: 'ascending'}]
		} : {}),
		
		...(filterByStatus ? {
			filter: {property: "Status", select: {equals: filterByStatus} }
		} : {})

	});
	

	return (
		await notion.databases.query ({

			database_id: id,

			...(sortProperty ? {
				sorts: [{property: sortProperty, direction: 'ascending'}]
			} : {}),
			
			...(filterByStatus ? {
				filter: {property: "Status", select: {equals: filterByStatus} }
			} : {})

		})
	).results as unknown as T[];

}

let lastCall = 0;
let getAllArticlesResponse:ArticlePage[];

async function getAllArticles(filterByStatus?: string) {
	if (Date.now() - lastCall > 1000*60) {
		lastCall = Date.now();
		getAllArticlesResponse = await getDatabaseChildren<ArticlePage>( databaseID, null, filterByStatus );
	}
	
	return getAllArticlesResponse;
}

async function getPageData(id:ID) {
	const response = <Page> <unknown> await notion.pages.retrieve({ page_id: id});
	return response;
}

async function submitContactInfo() {
	// database_id: "326ed6d321824eacbd41cdbd0083f090",
		const response = await notion.pages.create({
			parent: {
				database_id: '326ed6d321824eacbd41cdbd0083f090',
			},
			 icon: {
				type: "emoji",
				emoji: "🎉"
			},
			properties: {
				Name: {
					title: [
						{
							text: {
								content: 'Tuscan Kale',
							},
						},
					],
				},
				Message: {
					rich_text: [
						{
							text: {
								content: 'A dark green leafy vegetable',
							},
						},
					],
				}
			}
		});
		console.log(response);

	return response;
}

async function submitContactInfo2() {

	const {properties} = await notion.databases.retrieve({
		database_id: contactDatabaseID
	})

	let propertyValues = {
		"Name": {
			id: "",
			type: "title",
			title: [
				{
					type: "text",
					text: { content: "asdasd asd asd" },
				},
			],
		},
		"Date": {
			id: "",
			type: "date",
			date: {
				start: new Date().toISOString(),
			}
		},
		"Email": {
			id: "",
			type: "email",
			email: "faker.internet.email()",
			
		},
		"Message": {
			id: "",
			type: "rich_text",
			rich_text: [
				{
					type: "text",
					text: { content: "faker.name.firstName()" },
				},
			]

		}
 	};

	Object.keys(properties).forEach(e => {
		let property = properties[e]

		switch(properties[e].name) {
			case "Name":
				propertyValues['Name'].id = property.id
			case "Date":
				propertyValues['Date'].id = property.id
			case "Email":
				propertyValues['Email'].id = property.id
			case "Message":
				propertyValues['Message'].id = property.id
			default:
		}
	})

	const parameters: CreatePageParameters = {
		parent: {
			database_id: contactDatabaseID,
		},
		properties: propertyValues,
	} as CreatePageParameters

	await notion.pages.create(parameters);

}

export { getAllIds, getBlocksById, getAllArticles, getDatabaseChildren, getPageData, submitContactInfo }