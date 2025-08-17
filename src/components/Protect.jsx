import { useSelector } from 'react-redux'
import { SelectAuth, SelectIsLogin } from '../features/Authslice'
import { Navigate } from 'react-router-dom'

export const Protect = ({children}) => {
    // let Loginstatus=useSelector(SelectIsLogin)
    let auth=useSelector(SelectAuth)
    if (auth) {
        return children;

    }
    else{
        return  <Navigate to='/login' replace={true} > </Navigate>
    }
      

}
