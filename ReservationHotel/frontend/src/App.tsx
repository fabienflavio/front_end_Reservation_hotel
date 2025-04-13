import { createBrowserRouter,RouterProvider } from "react-router"
import HomePage from "./page/User/HomePage"
import Login from "./page/Auth/Login"
import Register from "./page/Auth/Register"

const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage />
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/register",
    element : <Register />
  },
])
function App() {
  return (
    <div className="bg-[#242424] text-white ">
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
