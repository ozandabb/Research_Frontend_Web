import AdminDashboard from '../Views/Admin/Admin.Dashboard';
import SignIn from '../Views/SignIn/Login';

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
  // {
  //   path: "/basic",
  //   name: "Basic",
  //   component: Basic,
  //   exact: true,
  // },
 
];

export default AdminRoutes;