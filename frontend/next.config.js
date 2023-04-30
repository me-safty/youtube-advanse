/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			"i.ytimg.com",
			"yt3.ggpht.com",
			"i.ibb.co",
			"yt3.googleusercontent.com",
			"lh3.googleusercontent.com",
		],
	},
}

module.exports = nextConfig
