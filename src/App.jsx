import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      // 다른 라우트들...
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
