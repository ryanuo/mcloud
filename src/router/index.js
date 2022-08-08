/*
 * @Author: Harry
 * @Date: 2022-08-07 21:49:42
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-08 12:44:21
 * @FilePath: \cloudm\src\router\index.js
 */
import React, { lazy, Suspense } from "react";

import { Navigate } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover"));
const Home = lazy(() =>
    import("@/views/discover/home")
);
// const Ranking =  lazy((_) => import("@/views/Discover/c-views/Ranking"));
// const Songs =  lazy((_) => import("@/views/Discover/c-views/Songs"));
// const Djradio =  lazy((_) => import("@/views/Discover/c-views/Djradio"));
// const Artist =  lazy((_) => import("@/views/Discover/c-views/Artist"));
// const Album =  lazy((_) => import("@/views/Discover/c-views/Album"));

// const Friends =  lazy((_) => import("@/views/Friends"));
// const Mine =  lazy((_) => import("@/views/Mine"));
const NotFound = lazy(() => import("@/components/NotFound"));
// const Song = React.lazy((_) => import("@/views/Player"));

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
                path: "*",
                // index: true,
                element: <Suspense><NotFound /></Suspense>,
            },
        ]
    },
    // {
    //     path: "/discover",
    //     // component: Discover,
    //     routes: [
    //         {
    //             path: "/discover",
    //             exact: true,
    //             render: () => <Navigate to="/discover/home" />,
    //         },
    //         {
    //             path: "/discover/home",
    //             element: Home,
    //         },
    //         //   {
    //         //     path: "/discover/ranking",
    //         //     component: Ranking,
    //         //   },
    //         //   {
    //         //     path: "/discover/songs",
    //         //     component: Songs,
    //         //   },
    //         //   {
    //         //     path: "/discover/djradio",
    //         //     component: Djradio,
    //         //   },
    //         //   {
    //         //     path: "/discover/artist",
    //         //     component: Artist,
    //         //   },
    //         //   {
    //         //     path: "/discover/album",
    //         //     component: Album,
    //         //   },
    //         //   {
    //         //     path: "/discover/song",
    //         //     component: Song,
    //         //   },
    //         {
    //             path: "*",
    //             exact: true,
    //             element: <NotFound />,
    //         },
    //     ],
    // },
    // //   {
    // //     path: "/friends",
    // //     component: Friends,
    // //   },
    // //   {
    // //     path: "/mine",
    // //     component: Mine,
    // //   },
    // //   {
    // //     path: "/song",
    // //     component: Song,
    // //   },
    {
        path: "*",
        exact: true,
        element: <NotFound />,
    }
];
export default routes;