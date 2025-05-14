import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root/Root';
import Home from './Pages/Home';
import DigitalMarketing from './Pages/DigitalMarketing ';
// import DataAnalysis from './Pages/Services/DataAnalysis';
// import SystemSecurity from './Pages/Services/SystemSecurity';
// import UIUXDesign from './Pages/Services/UIUXDesign';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services/digital-marketing', element: <DigitalMarketing /> },
      // { path: '/services/data-analysis', element: <DataAnalysis /> },
      // { path: '/services/system-security', element: <SystemSecurity /> },
      // { path: '/services/ui-ux-design', element: <UIUXDesign /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
