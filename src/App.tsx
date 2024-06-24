import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import StudentLayout from "./layouts/studentLayout";
import ListTopicPages from "./pages/Student/ListTopic";
import ReportKLTN from "./pages/Student/Report";
import AdminLayout from "./layouts/adminLayout";
import TeacherLayout from "./layouts/teacherLayout";
import ListStudent from "./pages/Admin/ListStudent";
import ListTeacher from "./pages/Admin/ListTeacher";
import Topics from "./pages/Teacher/PostTopic";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AdminLayout />}>
          <Route path="/list-student" element={<ListStudent />} />
          <Route path="/list-teacher" element={<ListTeacher />} />
        </Route>
        <Route element={<TeacherLayout />}>
          <Route path="/list-topic" element={<Topics />} />
          <Route path="/report" element={<ReportKLTN />} />
        </Route>
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
        <Route
          path="*"
          element={
            <>
              <div className="flex justify-center items-center h-screen">
                <b className="text-4xl">404 Not Found</b>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
