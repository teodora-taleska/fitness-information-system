import "./style.scss"
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
import AdminLogin from "./pages/AdminLogin";
import ModifyEmployee from "./components/ModifyEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import EventsGuest from "./pages/EventsGuest";

// Views
const Member = () => {
  return (
    <>
      <UpperNav />
      <Outlet />
    </>
  )
}

const Guest = () => {
  return (
    <>
      <UpperNavGuest />
      <Outlet />
    </>
  )
}

const Admin = () => {
  return (
    <>
      <AdminNav />
      <UpperNavAdmin />
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
  },{
    path:"/admin-access", 
    element: <AdminLogin />
  },
  {
    path:"/admin",
    element: <Admin/>,
    children: [
      {
        path: "/admin",
        element: <EditHome />
      },
      {
        path: "/admin/add-employee",
        element: <AddEmployee />
      },
      {
        path:"/admin/modify-employee",
        element: <ModifyEmployee />
      },
      {
        path: "/admin/delete-employee",
        element:<DeleteEmployee />
      }
    ]
  },
  {
    path:"/home",
    element: <Member />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/home/contact",
        element:<Contact/>
      },
      {
        path: "/home/shop",
        element:<Shop/>
      },
      {
        path:"/home/events",
        element:<Events/>
      }
    ]

  },
  {
    path:"/guest",
    element:<Guest/>,
    children: [
      {
        path:"/guest",
        element: <Home />
      },
      {
        path: "/guest/shop",
        element:<Shop />
      },
      {
        path: "/guest/events",
        element:<EventsGuest />
      }
    ]
  },
  


  
]);

function App() {
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
