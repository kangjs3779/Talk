import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';  // Test 컴포넌트를 별도 파일로 만들어 import

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
