import { HomePage } from "@/pages/Home"
import LoginPage from "@/pages/Login/ui/LoginPage"
import type { RouteProps } from "react-router"

export const AppRoutes = {
    HOME: "home",
    LOGIN: 'login'
} as const


type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const routePaths : Record<AppRoutes, string> ={
    [AppRoutes.HOME] : "/",
    [AppRoutes.LOGIN] : "/login",
}

export const routeConfig: RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage />,
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage />,
    }
]