/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.uniqlo.com',
			},
      {
        protocol: "https",
        hostname: "img.ltwebstatic.com",
      },
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = nextConfig;
