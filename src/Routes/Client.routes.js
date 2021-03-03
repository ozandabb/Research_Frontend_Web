import ClientDashboard from '../Views/Client/Client.Dashboard';
import SignIn from '../Views/SignIn/Login';

let ClientRoutes = [

  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    exact: true,
  },
  {
    path: "/ClientDashboard",
    name: "ClientDashboard",
    component: ClientDashboard,
    exact: true,
  },
  // {
  //   path: "/basic",
  //   name: "Basic",
  //   component: Basic,
  //   exact: true,
  // },
 
];

export default ClientRoutes;