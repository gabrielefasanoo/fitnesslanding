import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PartnersPage from './pages/PartnersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/chi-siamo",
    element: <AboutPage />
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: "/partner",
    element: <PartnersPage />
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;