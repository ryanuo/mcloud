const path = require("path");
//dir为当前文件（craco-根路径）路径，__dirname为下方resolve（）传递过来的路径，然后拼接
const resolve = (dir) => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: "less",
        },
      ]
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ff414b' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
    },
  },
};