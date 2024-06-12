import { useRoutes } from "react-router-dom";
import LoginPage from "../pages/login";
export default function App() {
  const routes = useRoutes([
    {
      path: "/login",
      index: true,
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return routes;
}
