import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";

// pages
import Home from "./pages/dashboard";
import NotFound from "./pages/Page404";

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <DashboardLayout />,
            children: [{ path: "/", element: <Home /> }],
        },
        {
            path: "/",
            children: [
                // { path: "login", element: <Login /> },
                { path: "404", element: <NotFound /> },
                { path: "/", element: <Navigate to="/dashboard" /> },
                { path: "*", element: <Navigate to="/404" /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
