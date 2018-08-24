import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import App from './App';
import SignupPage from './pages/SignupPage/SignupPage';

const Routes = [
  {
    component: App,
    routes: [
      {
        component: Layout,
        path: '/',
        exact: true,
        routes: [
          { component: DashboardPage, path: '/', exact: true }
        ]
      },
      { component: LoginPage, path: '/login', exact: true },
      { component: SignupPage, path: '/signup', exact: true },
      { component: NotFoundPage }
    ],
  }
];

export default Routes;