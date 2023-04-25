/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["i.ytimg.com", "yt3.ggpht.com", "i.ibb.co"],
	},
}

module.exports = nextConfig
