import Layout from './components/Layout/Layout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import App from './App';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';

const Routes = [
  {
    component: HomePage,
    path: '/',
    exact: true,
  },
  {
    component: Layout,
    path: '/dashboard',
    exact: true,
    routes: [
      { component: DashboardPage, path: '/dashboard', exact: true }
    ]
  },
  { component: LoginPage, path: '/login', exact: true },
  { component: SignupPage, path: '/signup', exact: true },

  { component: NotFoundPage }
];

export default Routes;