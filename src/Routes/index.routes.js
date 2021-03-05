import SignIn from '../Views/SignIn/Login';
import SignUp from "../Views/SignIn/SignUp";

let indexRoutes = [

  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    exact: true,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
    exact: true,
  },
 
];

export default indexRoutes;