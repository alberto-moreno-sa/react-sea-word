const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const appPaths = require('./src/configs/appPaths');
const pjson = require('./package.json');
const localeSubpaths = {
  en: 'en',
};

const tracer = require('dd-trace').init({
  logInjection: true,
});

const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  swcMinify: false,
  i18n,
  rewrites: async () => appPaths.appPaths,
  publicRuntimeConfig: {
    localeSubpaths,
  },
  generateBuildId: async () => {
    return pjson.version;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Version',
            value: pjson.version,
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1;mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=16000000;includeSubDomains;preload',
          },
          {
            key: 'X-Service',
            value: 'clip-ecommerce',
          },
        ],
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }

    return config;
  },
});
