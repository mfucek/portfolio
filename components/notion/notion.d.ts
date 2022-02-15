
export type ID = string

export type BlockType =
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'paragraph'
  | 'to_do'
  | 'bulleted_list_item'
  | 'image'
  | 'link_to_page'
  | 'child_database'
  | 'video'

export type Page =
	| BasePage
	| ArticlePage
	| TopicPage
	| ImagePage

export type Block =
	| HeadingOneBlock
	| HeadingTwoBlock
	| HeadingThreeBlock
	| ParagraphBlock
	| TodoBlock
	| BulletedListBlock
	| ImageBlock
	| LinkToPageBlock
	| ChildDatabaseBlock
	| VideoBlock

export interface Base {
	object: 'page' | 'block'
  id: ID

	archived: boolean
  created_time: string
  last_edited_time: string
}

export abstract interface BaseBlock extends Base {
	object: 'block'

  type: BlockType
  properties?: any

	has_children: boolean
}

interface RichText {
	type: "text";
	text: {
		content: string;
		link: null | string;
	}
	plain_text: string;
	href: string | null;
	annotations: {
		"bold": boolean,
		"italic": boolean,
		"strikethrough": boolean,
		"underline": boolean,
		"code": boolean,
		"color": string
	};
	type: string
}
interface Title extends RichText {

}

export interface HeadingOneBlock extends BaseBlock {
  type: 'heading_1'
  heading_1: {
		text: RichText[],
  }
}

export interface HeadingTwoBlock extends BaseBlock {
  type: 'heading_2'
  heading_2: {
		text: RichText[],
	}
}

export interface HeadingThreeBlock extends BaseBlock {
  type: 'heading_3'
  heading_3: {
		text: RichText[],
	}
}

export interface ParagraphBlock extends BaseBlock {
  type: 'paragraph'
	paragraph: {
		text: RichText[],
  }
}

export interface BulletedListBlock extends BaseBlock {
  type: 'bulleted_list_item'
	bulleted_list_item: {
		text: RichText[],
  }
}

export interface TodoBlock extends BaseBlock {
  type: 'to_do'
	to_do: {
		text: RichText[],
		checked: boolean
  }
}

export interface ImageBlock extends BaseBlock {
	type: 'image'
	image: {
		caption: RichText[]
		type: 'file',
		file: {
			url: string
			expiry_time: string
		}
	}
}

export interface VideoBlock extends BaseBlock {
	type: 'video'
	video: {
		caption: RichText[]
		type: 'external',
		external: {
			url: string
		}
	}
}

// Databases & pages

export interface LinkToPageBlock extends BaseBlock {
	type: 'link_to_page'
	link_to_page: {
		type: 'page_id'
		page_id: string
	}
}

export interface ChildDatabaseBlock extends BaseBlock {
	type: 'child_database'
	child_database: {
		title: string
	}
}

interface DBBaseProperty {
	id: ID
}
interface DBRichText extends DBBaseProperty {
	type: 'rich_text'
	rich_text: RichText[]
}
interface DBSelect extends DBBaseProperty {
	type: 'select'
	select: {
		id: ID,
		name: string
		color: string
	}
}
interface DBMultiSelect extends DBBaseProperty {
	type: 'multi_select'
	multi_select: {
		id: ID
		name: string
		color: string
	}[]
}
interface DBNumber extends DBBaseProperty {
	type: 'number'
	number: number
}
interface DBCreatedTime extends DBBaseProperty {
	type: 'created_time'
	created_time: string
}
interface DBDate extends DBBaseProperty {
	type: 'date'
	date: {
		start: string
		end: string
		time_zone: string
	}
}
interface DBFiles extends DBBaseProperty {
	type: 'files'
	files: {
		name: string
		type: 'file'
		file: {
			url: string
			expiry_time: string
		}
	}[]
}
interface DBTitle extends DBBaseProperty {
	title: RichText[]
}

// pages

export abstract interface BasePage extends Base {
	object: 'page'
	type: 'page'
	icon?: string
	url: string
	cover: {
		type: "file"
		file: {
			url: string
			expiry_time: string
		}
	}
	properties: object
}

export interface ImagePage extends BasePage {
	properties: {
		"Name": DBTitle // title
	}
}

export interface TopicPage extends BasePage {
	properties: {
		"Name": DBTitle // Heading
		"Content": DBRichText // Subheading
	}
}

export interface ArticlePage extends BasePage {
	properties: {
		"Name": DBTitle
		"Description": DBRichText
		"Likes": DBNumber
		"Type": DBSelect
		"Tags": DBMultiSelect
		"Relevant Date": DBDate
		"Release Date": DBDate
		"Social Media": DBSelect
		"Created": DBCreatedTime
		"Status": DBSelect
		"Background Image": DBFiles
	}
}