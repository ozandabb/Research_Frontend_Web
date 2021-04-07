import ClientDashboard from '../Views/Client/Client.Dashboard';
import SignIn from '../Views/SignIn/Login';
import ClientProfile from '../Views/Client/Profile.client';
import ClientProjects from '../Views/Client/Projects.client';
import ClientAddProject from '../Views/Client/ClientComponents/addProject.client';

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
  {
    path: "/Client/Projects",
    name: "ClientProjects",
    component: ClientProjects,
    exact: true,
  },
  {
    path: "/Client/AddProject",
    name: "ClientAddProject",
    component: ClientAddProject,
    exact: true,
  },
 
];

export default ClientRoutes;