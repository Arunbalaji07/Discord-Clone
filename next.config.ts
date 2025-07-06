import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: '49yikshjfh.ufs.sh',
				port: ''
			}
		]
	}
};

export default nextConfig;
