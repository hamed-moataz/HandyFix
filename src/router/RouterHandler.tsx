import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login/Login.js";
import Register from "../pages/Register/Register.js";
import { Services } from "../pages/Services/Services.js";

const RouterHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterHandler;
