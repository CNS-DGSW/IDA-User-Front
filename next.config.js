const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    // 1. SVG 파일 처리를 위한 룰 찾기
    const svgRule = config.module.rules.find((rule) =>
      String(rule.test).includes("svg"),
    )

    // 2. 찾은 룰을 복사하여 새로운 룰을 추가
    const fileLoaderRule = { ...svgRule }

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      },
    )

    // 3. 기존의 SVG 룰을 수정하여 exclude 옵션 추가
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig
