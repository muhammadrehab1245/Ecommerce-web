import { useSelector } from 'react-redux'
import { SelectIsLogin } from '../features/Authslice'
import { Navigate } from 'react-router-dom'

export const Protect = ({children}) => {
    let Loginstatus=useSelector(SelectIsLogin)
    if (Loginstatus) {
        return children;

    }
    else{
        return  <Navigate to='/login' replace={true} > </Navigate>
    }
      

}
