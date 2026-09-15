import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
//employee
import EmployeeLayout from "./pages/employee/EmployeeLayout";
import Employee from "./pages/employee/Employee";
import FindJobs from "./pages/employee/FindJobs";
import SavedJobs from "./pages/employee/SavedJobs";
import MyApplication from "./pages/employee/MyApplication";
import Recommended from "./pages/employee/Recommended";
//employer
import { Toaster } from "sonner";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import EmployerLayout from "./pages/employer/EmployerLayout";
import RecentJobs from "./components/employer/RecentJobs";
import RecentApplicants from "./components/employer/RecentApplicants";
import PostJob from "./components/employer/PostJob";
import EmployerSection from "./components/employer/EmployerSection";
import CompanyProfile from "./components/employer/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Main />} />

        {/* AUTH */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* EMPLOYER */}
        {/* <Route path="/employer/dashboard" element={<EmployerDashboard />} /> */}
        <Route path="/employer" element={<EmployerLayout />}>
          {/* /employer */}
          <Route index element={<EmployerDashboard />} />

          {/* /employer/jobs */}
          <Route path="jobs" element={<RecentJobs />} />

          {/* /employer/applicants */}
          <Route path="applicants" element={<RecentApplicants />} />

          {/* /employer/post-job */}
          <Route path="post-job" element={<PostJob />} />

          {/* /employer/interviews */}
          <Route
            path="interviews"
            element={<EmployerSection section="interviews" />}
          />

          {/* /employer/messages */}
          <Route
            path="messages"
            element={<EmployerSection section="messages" />}
          />

          {/* /employer/profile */}
          <Route path="profile" element={<CompanyProfile />} />

          {/* /employer/settings */}
          <Route
            path="settings"
            element={<EmployerSection section="settings" />}
          />
        </Route>

        {/* EMPLOYEE */}
        <Route path="/employee" element={<EmployeeLayout />}>
          {/* /employee */}
          <Route index element={<Employee />} />

          {/* /employee/find-jobs */}
          <Route path="find-jobs" element={<FindJobs />} />
          <Route path="my-applications" element={<MyApplication />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="recommended" element={<Recommended />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
