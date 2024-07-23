import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const RouterHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ]);
  
  return <RouterProvider router={router} />;
};

export default RouterHandler;
