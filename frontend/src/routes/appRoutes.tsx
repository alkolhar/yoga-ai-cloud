import HomePage from "../pages/home/HomePage";
import {RouteType} from "./config";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import DefaultPage from "../pages/dashboard/DefaultPage";
import React from "react";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home"
    },
    {
        path: "/dashboard",
        element: <DashboardPageLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon/>
        },
        child: [
            {
                index: true,
                element: <DashboardIndex/>,
                state: "dashboard.index"
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage/>,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            }
        ]
    },
    {
        path: "/changelog",
        element: <ChangelogPage/>,
        state: "changelog",
        sidebarProps: {
            displayText: "Changelog",
            icon: <FormatListBulletedOutlinedIcon/>
        }
    }

];

export default appRoutes;