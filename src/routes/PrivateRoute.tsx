
import { Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Context/auth'
import Register from '../page/Register/Register';
import Login from '../page/Login/Login';


const PrivateRoute = () => {
  const Navigate = useNavigate();
  const {auth}= useAuth()

   return auth? <Outlet/>: <Login/>

 
} 

export default PrivateRoute