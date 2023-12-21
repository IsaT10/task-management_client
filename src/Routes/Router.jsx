import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import DashboardHome from '../Dashboard/DashboardHome.jsx/DashboardHome';
import DashboardLayout from '../Layouts/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },

  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [{ path: 'home', element: <DashboardHome /> }],
  },

  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
]);

export default router;
