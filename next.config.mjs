/** @type {import('next').NextConfig} */

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    sassOptions: {
      includePaths: ['./pages'],
      prependData: `@import "~@styles/_spec.scss";`,
    },
    future: {
      webpack5: true,
    },
    reactStrictMode: true,
    experimental: {
      appDir: false,
    },
  }

  return config
}

export default nextConfig
