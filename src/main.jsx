import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        transition={Slide}
        pauseOnHover={false}
        theme="dark"
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
