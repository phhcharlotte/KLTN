// import LoginPage from "./pages/login";
import ListTopicPages from "./pages/Student/ListTopic";
import ReportKLTN from "./pages/Student/report";
import StudentLayout from "./layouts/studentLayout";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<StudentLayout />}>
        <Route index element={<ListTopicPages />} />
        <Route path="report" element={<ReportKLTN />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
