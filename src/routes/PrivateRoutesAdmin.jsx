//import cookie
import Cookies from "js-cookie";

//import react router dom
import { Navigate } from "react-router-dom";

function privateRoutesAdmin({ children }) {

    
    //token from cookie
    const role = Cookies.get('role');
    const token = Cookies.get('token');
   

    //if token not set
    if(token && role == 'admin'){
        return children;

    }  else {
        // return children;

         return <Navigate to="/" replace />;

    }


}

export default privateRoutesAdmin;
