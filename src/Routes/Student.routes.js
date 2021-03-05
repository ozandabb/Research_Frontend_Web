import StudentDashboard from '../Views/Student/Student.Dashboard';
import StudentSurvey from '../Views/Student/Student.Survey'
import SignIn from '../Views/SignIn/Login';

let StudentRoutes = [

  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    exact: true,
  },
  {
    path: "/StudentDashboard",
    name: "StudentDashboard",
    component: StudentDashboard,
    exact: true,
  },
  {
    path: "/StudentSurvey",
    name: "StudentSurvey",
    component: StudentSurvey,
    exact: true,
  }
  // {
  //   path: "/basic",
  //   name: "Basic",
  //   component: Basic,
  //   exact: true,
  // },
 
];

export default StudentRoutes;