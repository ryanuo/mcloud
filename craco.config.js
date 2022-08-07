/*
 * @Author: Harry
 * @Date: 2022-08-07 18:33:07
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-07 19:05:19
 * @FilePath: \cloudm\craco.config.js
 */
const path = require("path");
//dir为当前文件（craco-根路径）路径，__dirname为下方resolve（）传递过来的路径，然后拼接
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    babel: {
        plugins: [
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "css",
                },
            ],
        ],
    },
    webpack: {
        alias: {
            "@": resolve("src"),
            components: resolve("src/components"),
        },
    },
};