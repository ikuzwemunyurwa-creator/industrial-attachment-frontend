import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import StudentRegister from "./pages/StudentRegister";
import CompanyRegister from "./pages/CompanyRegister";
import StudentDashboard from "./pages/student/StudentDashboard";
import SearchInternships from "./pages/student/SearchInternships";
import InternshipDetails from "./pages/student/InternshipDetails";
import ApplyInternship from "./pages/student/ApplyInternship";
import ApplicationTracking from "./pages/student/ApplicationTracking";
import StudentProfile from "./pages/student/StudentProfile";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import PostInternship from "./pages/company/PostInternship";
import ManageInternships from "./pages/company/ManageInternships";
import ViewApplicants from "./pages/company/ViewApplicants";
import CompanyProfile from "./pages/company/CompanyProfile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ApproveCompanies from "./pages/admin/ApproveCompanies";
import ManageInternshipsAdmin from "./pages/admin/ManageInternshipsAdmin";
import Analytics from "./pages/admin/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register/student",
    Component: StudentRegister,
  },
  {
    path: "/register/company",
    Component: CompanyRegister,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/search",
    Component: SearchInternships,
  },
  {
    path: "/student/internship/:id",
    Component: InternshipDetails,
  },
  {
    path: "/student/apply/:id",
    Component: ApplyInternship,
  },
  {
    path: "/student/applications",
    Component: ApplicationTracking,
  },
  {
    path: "/student/profile",
    Component: StudentProfile,
  },
  {
    path: "/company/dashboard",
    Component: CompanyDashboard,
  },
  {
    path: "/company/post",
    Component: PostInternship,
  },
  {
    path: "/company/manage",
    Component: ManageInternships,
  },
  {
    path: "/company/applicants/:id",
    Component: ViewApplicants,
  },
  {
    path: "/company/profile",
    Component: CompanyProfile,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/users",
    Component: ManageUsers,
  },
  {
    path: "/admin/companies",
    Component: ApproveCompanies,
  },
  {
    path: "/admin/internships",
    Component: ManageInternshipsAdmin,
  },
  {
    path: "/admin/analytics",
    Component: Analytics,
  },
]);
