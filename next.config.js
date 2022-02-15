/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: ['https://s3.us-west-2.amazonaws.com', 's3.us-west-2.amazonaws.com']
	},
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/pages',
				destination: 'https://api.notion.com/v1/pages'
      },
    ]
  }
}
