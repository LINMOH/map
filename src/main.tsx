import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { reportWebVitals } from "./reportWebVitals.ts";
import { router } from "./router.tsx";

// 渲染到根组件
const rootElement = document.querySelector("#app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<RouterProvider router={router} />);
}

// 性能监控. 文档: https://bit.ly/CRA-vitals
reportWebVitals();
