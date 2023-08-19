
import React, {useState} from "react";
import "./style.scss"
import "./events.scss"
import Login from "./pages/Login";
import {
  createBrowserRouter, 
  RouterProvider,
  Route,
  Outlet,

} from "react-router-dom"

import UpperNav from "./components/UpperNav";
import Register from "./pages/Register";
import UpperNavGuest from "./components/UpperNavGuest";
import UpperNavAdmin from "./components/UpperNavAdmin";
import AdminNav from "./components/AdminNav";
import EditHome from "./pages/EditHome";
import AddEmployee from "./components/AddEmployee";
import ModifyEmployee from "./components/ModifyEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import EventsGuest from "./pages/EventsGuest";
import Event from "./components/Event";
import CreateEvent from "./components/CreateEvent";
import Footer from "./components/Footer";



function App() {
  const [adminNavClosed, setAdminNavClosed] = useState(false);
const handleAdminNavToggle = () => {
  setAdminNavClosed(!adminNavClosed);
};

// Views
const Member = () => {
  return (
    <>
      <UpperNav />
      <Outlet />
      <Footer />
    </>
  )
}

const Guest = () => {
  return (
    <>
      <UpperNavGuest />
      <Outlet />
      <Footer/>
    </>
  )
}

const AdminEditPages = () => {
  return (
    <>
      <AdminNav adminNavClosed={adminNavClosed} onToggle={handleAdminNavToggle}/>
      <UpperNavAdmin adminNavClosed={adminNavClosed}/>
      <Outlet />
    </>
  )
}

const AdminEmployees = () =>{
  return (
    <>
    <AdminNav adminNavClosed={adminNavClosed} onToggle={handleAdminNavToggle}/>
    <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path:"/",
    element: <AdminEditPages/>,
    children: [
      {
        path: "/edit-home",
        element: <EditHome adminNavClosed={adminNavClosed}/>
      }]
    },
    {
      path:"/",
      element: <AdminEmployees />,
      children:[
      {
        path: "/add-employee",
        element: <AddEmployee adminNavClosed={adminNavClosed}/>
      },
      {
        path:"/modify-employee",
        element: <ModifyEmployee adminNavClosed={adminNavClosed}/>
      },
      {
        path: "/delete-employee",
        element:<DeleteEmployee adminNavClosed={adminNavClosed}/>
      }
    ]
  },
  {
    path:"/",
    element: <Member />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/shop",
        element:<Shop/>
      },
      {
        path:"/events",
        element:<Events/>
      },
      {
        path: "/event/:id",
        element: <Event />
      },
      {
        path: "/write",
        element: <CreateEvent />
      }
    ]

  },
  {
    path:"/",
    element:<Guest/>,
    children: [
      {
        path:"/guest",
        element: <Home />
      },
      {
        path: "/shop",
        element:<Shop />
      },
      {
        path: "/events",
        element:<EventsGuest />
      }
    ]
  },
  
  


  
]);

  return (
    <div className="app">
      <div className="container">
        <div>
          <RouterProvider router={router}/>
        </div>
        </div>
      </div>
      
  );
}

export default App;
