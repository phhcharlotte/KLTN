import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/products/:category/:filter?",
        element: <Products />,
      },
      {
        element: <ProtectedRoute role="user" />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/editprofile",
            element: <EditProfile />,
          },
        ],
      },
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          {
            path: "/admin",
            element: <Admin />,
          },
        ],
      },
      {
        path: "*",
        element: <p>404 Error - Nothing here...</p>,
      },
    ],
  },
]);

export default router;
