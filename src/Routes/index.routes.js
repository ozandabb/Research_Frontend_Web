import SignIn from '../Views/SignIn/Login';
import SignUp from "../Views/SignIn/SignUp";
import StudentSurvey from '../Views/Student/Student.Survey';

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


//temporary ewa
  {
    path: "/StudentSurvey",
    name: "StudentSurvey",
    component: StudentSurvey,
    exact: true,
  }

  //tem ew ends here
 
];

export default indexRoutes;