const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    experimental: {
        esmExternals: false,
    },
    output: 'standalone',
    webpack(config, { isServer }) {
        if (!isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'remoteApp',
                    filename: 'static/chunks/remoteEntry.js',
                    remotes: {},
                    exposes: {
                        './RemotePage': './src/pages/remote-page.tsx',
                    },
                    shared: {},
                    extraOptions: {
                        exposePages: true,
                    },
                })
            );
        }


        return config;
    },
}

module.exports = nextConfig
