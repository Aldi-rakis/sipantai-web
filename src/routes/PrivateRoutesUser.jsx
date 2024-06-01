//import cookie
import Cookies from "js-cookie";

//import react router dom
import { Navigate } from "react-router-dom";

function privateRoutesUser({ children }) {

    
    //token from cookie
    const role = Cookies.get('role');
    const token = Cookies.get('token');
   

    //if token not set
    if(!token){
        return <Navigate to="/pengaduan/regist" replace />;
    }else if(token && role == 'users'){
        return children;

    }  else {
        return <Navigate to="/" replace />;
    }


}

export default privateRoutesUser;
