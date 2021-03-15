import AdminDashboard from '../Views/Admin/Admin.Dashboard';
import SignIn from '../Views/SignIn/Login';
import staffRegister from '../Views/Admin/Staff/StaffREgistration';
import AllStaff from '../Views/Admin/Staff/AllStaff';
let AdminRoutes = [

  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    exact: true,
  },
  {
    path: "/AdminDashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    exact: true,
  },
  {
    path: "/Admin/staffRegister",
    name: "staffRegister",
    component: staffRegister,
    exact: true,
  },
  {
    path: "/Admin/AllStaff",
    name: "AllStaff",
    component: AllStaff,
    exact: true,
  },
 
];

export default AdminRoutes;