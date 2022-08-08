/*
 * @Author: Harry
 * @Date: 2022-08-07 18:13:44
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-08 16:14:33
 * @FilePath: \cloudm\src\App.js
 */
// / 导入的第三方库
import React, { memo } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import routes from "./router";
export default memo(function App() {
  const element = useRoutes(routes)
  return (
    <div>
      {element}
      <Outlet />
    </div>
  );
});