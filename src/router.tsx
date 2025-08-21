import {
	Outlet,
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Index } from "./pages/index";

const rootRoute = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});

// 主页
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Index,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({
	routeTree,
	context: {},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export { router };
