import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import StudentLayout from "./layouts/studentLayout";
import ListTopicPages from "./pages/Student/ListTopic";
import ReportKLTN from "./pages/Student/report";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<StudentLayout />}>
          <Route path="/home" element={<ListTopicPages />} />
          <Route path="/report" element={<ReportKLTN />} />
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.permissions.includes("dashboard")}
                redirectTo="/home">
                <DashboardPage />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/admin"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("admin")}
                redirectTo="/home">
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/config"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("admin")}
                redirectTo="/home">
                <ConfigPage />
              </ProtectedRoute>
            }
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
