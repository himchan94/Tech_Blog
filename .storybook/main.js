module.exports = {
  stories: [
    // 테스트용 기본 스토리북 파일들 (추후 삭제 예정)
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    /// 컴포넌트 및 페이지 폴더 스토리북 파일 빌드
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    config.resolve.alias["next/router"] = require.resolve(
      "../__mocks__/next/router.js"
    );
    config.resolve.alias["next/link"] = require.resolve(
      "../__mocks__/next/link.js"
    );
    config.resolve.alias["next/image"] = require.resolve(
      "../__mocks__/next/image.js"
    );
    return config;
  },
};
