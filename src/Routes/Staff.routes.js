import StaffDashboard from '../Views/Staff/Staff.Dashboard';
import SignIn from '../Views/SignIn/Login';

let StaffRoutes = [

  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    exact: true,
  },
  {
    path: "/StaffDashboard",
    name: "StaffDashboard",
    component: StaffDashboard,
    exact: true,
  },
  // {
  //   path: "/basic",
  //   name: "Basic",
  //   component: Basic,
  //   exact: true,
  // },
 
];

export default StaffRoutes;