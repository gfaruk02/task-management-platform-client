import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import CreateTask from "../Pages/dashboard/CreateTask/CreateTask";
import UserDashboard from "../Pages/dashboard/UserDashboard";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
        

      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'userdashboard',
            element: <UserDashboard></UserDashboard>,
            loader: () => fetch('https://task-management-platform-server-fawn.vercel.app/createTask')
          },
            {
              path: 'createtask',
              element: <CreateTask></CreateTask>
            }
            // {
            //   path: 'tasks',
            //   element: <Tasks></Tasks>,
            //   loader: () => fetch('http://localhost:5000/createTask')
            // }
        ]
      
    }
  ]);