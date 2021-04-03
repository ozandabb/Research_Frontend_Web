import StudentDashboard from '../Views/Student/Student.Dashboard';
import StudentSurvey from '../Views/Student/Student.Survey';
import SignIn from '../Views/SignIn/Login';
import StudentProfile from '../Views/Student/Profile.Student';
import StudentProjects from '../Views/Student/Projects.Student'

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
  },
  {
    path: "/Student/Profile",
    name: "StudentProfile",
    component: StudentProfile,
    exact: true,
  },
  {
    path: "/Student/Projects",
    name: "StudentProjects",
    component: StudentProjects,
    exact: true,
  },
 
];

export default StudentRoutes;