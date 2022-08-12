/*
 * @Author: Harry
 * @Date: 2022-08-07 21:49:42
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-10 23:03:25
 * @FilePath: \cloudm\src\router\index.js
 */
import React, { lazy, Suspense } from "react";

import { Navigate } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover"));
const Home = lazy(() =>
    import("@/views/discover/home")
);
const Ranking = lazy(() => import("@/views/discover/ranking"));
const Album = lazy(() => import("@/views/discover/album"));
const Songs = lazy(() => import("@/views/discover/sing"));
const Like = lazy(() => import("@/views/discover/like"));
// const Djradio =  lazy((_) => import("@/views/Discover/c-views/Djradio"));
// const Artist =  lazy((_) => import("@/views/Discover/c-views/Artist"));

// const Friends =  lazy((_) => import("@/views/Friends"));
// const Mine =  lazy((_) => import("@/views/Mine"));
const NotFound = lazy(() => import("@/components/NotFound"));

const routes = [
    {
        path: "/",
        // index: true,
        element: <Discover />,
        children: [
            {
                path: "",
                element: <Navigate to='/home' />,
            },
            {
                path: "home",
                element: <Suspense><Home /></Suspense>,
            },
            {
                path: 'ranking',
                element: <Suspense><Ranking /></Suspense>,
            },
            {
                path: 'album',
                element: <Suspense><Album /></Suspense>,
            },
            {
                path: 'singer',
                element: <Suspense><Songs /></Suspense>,
            },
            {
                path: 'like',
                element: <Suspense><Like /></Suspense>,
            },
            {
                path: "*",
                // index: true,
                element: <Suspense><NotFound /></Suspense>,
            },
        ]
    },
    {
        path: "*",
        exact: true,
        element: <NotFound />,
    }
];
export default routes;