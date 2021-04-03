import ClientDashboard from '../Views/Client/Client.Dashboard';
import SignIn from '../Views/SignIn/Login';
import ClientProfile from '../Views/Client/Profile.client';

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
  {
    path: "/Client/Profile",
    name: "ClientProfile",
    component: ClientProfile,
    exact: true,
  },
 
];

export default ClientRoutes;