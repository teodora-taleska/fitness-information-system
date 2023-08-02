

import {
  createBrowserRouter, 
  RouterProvider,
  Route,

} from "react-router-dom"

const Layout = () => {
  return(
    <>
    </>
  )
  }

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Hello world!!! This is home</div>
  },
  {
    path:"/test",
    element: <Layout />
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <p>Hello world</p>
        <div>
          <RouterProvider router={router}/>
        </div>
        </div>
      </div>
      
  );
}

export default App;
