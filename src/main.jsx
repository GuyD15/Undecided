import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Technologies from "./pages/technologies";
const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/projects.jsx",
                element: <Projects />,
            },
            {
                path: "/technologies.jsx",
                element: <Technologies />,
            },
            {
                path: "/contact.jsx",
                element: <Contact />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );