import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./Components/About";
import Contect from "./Components/Contect";
import Service from "./Components/Service";

import NotFound from "./components/NotFound";

import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
// import Cards from "./components/Cards";
import UpDateCards from "./components/UpDateCards";
import DeletePost from "./components/DeletePost";

const allPaths = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contect />,
  },
  {
    path: "/service",
    element: <Service />,
  },
 
  {
    path: "/dashboard",
    element: <Dashboard />,

    children: [
      {
        path: "forms",
        element: <Form />,
      },
      {
        path: "updateForm",
        element: <UpDateCards />,
        // <UpdateForm/>
      },
      {
        path: "deletePost",
        element: <DeletePost />,
        //  <Delete/>
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={allPaths} />
    </>
  );
}

export default App;
