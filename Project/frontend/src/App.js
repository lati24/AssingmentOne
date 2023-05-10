import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./props/Login";
import { login,logout } from "./Auth/Auth";
import Explorer from "./props/Explorer";
import {useState} from 'react'
import { AuthContext } from "./Auth/AuthContext";
import Register from "./props/Register";

const router = createBrowserRouter([
  {path:'/', element: <Explorer />},
  {path:'/register', element: <Register />},
  {path:'/login',element: <Login />}
])
function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <AuthContext.Provider value={{user, setUser, login, logout}}>
        <RouterProvider router ={router}/>
      </AuthContext.Provider>
    </>
  );
}

export default App;
