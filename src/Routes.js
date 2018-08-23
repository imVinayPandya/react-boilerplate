import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import App from "./App";
import Signup from "./pages/Signup/Signup";

const Routes = [
  {
    component: App,
    routes: [
      {
        component: Layout,
        path: '/',
        exact: true,
        routes: [
          { component: Dashboard, path: '/', exact: true }
        ]
      },
      { component: Login, path: '/login', exact: true },
      { component: Signup, path: '/signup', exact: true },
      { component: NotFound }
    ],
  }
];

export default Routes;