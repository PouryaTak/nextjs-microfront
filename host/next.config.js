const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    remoteApp: `remoteApp@http://localhost:3001/_next/static/${location}/remoteEntry.js`
  };
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  webpack(config, { isServer }) {
 if(!isServer){
   config.plugins.push(
     new NextFederationPlugin({
       name: 'host',
       filename: 'static/chunks/remoteEntry.js',
       remotes: remotes(isServer),
       exposes: {},
       shared: {},
       extraOptions:{
         automaticAsyncBoundary: true,
       }
     })
   );
 }    
    return config;
  },
}

module.exports = nextConfig
