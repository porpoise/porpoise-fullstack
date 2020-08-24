import { createRouter } from "porpoise-router";

// Import Components:
import "./components/pages/404";
import "./components/pages/index";

createRouter([
    {
        path: "/",
        element: "page-index"
    },
    {
        path: "*",
        element: "page-404"
    }
]); 