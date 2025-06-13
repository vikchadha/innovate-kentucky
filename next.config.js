const withMDX = require("@next/mdx")({
  extension: /\\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  
  // Configure images if needed
  images: {
    domains: ['images.unsplash.com'],
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Handle SVG files with file-loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgo: false, // Disable SVGO as it's causing issues
          titleProp: true,
          ref: true,
        }
      }],
    });
    
    // Handle SVG files in CSS/SCSS files
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash:8][ext]',
        publicPath: '/_next/static/media/',
      },
      exclude: /node_modules/,
    });
    
    // Important: return the modified config
    return config;

    return config;
  },
};

module.exports = withMDX(nextConfig);
