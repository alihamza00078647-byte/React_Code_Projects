import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostContainer from "./components/PostContainer.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostContainer /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
  { path: "/", element: <App /> },
  { path: "/create-post", element: <CreatePost /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
