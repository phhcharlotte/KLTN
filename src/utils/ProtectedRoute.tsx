import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  if (123) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
