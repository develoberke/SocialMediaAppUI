import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { logout } from "../Store/securitySlice";

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.security.isAuthenticated);
    if(!(isAuthenticated && localStorage.getItem("token"))){
        dispatch(logout())
        return <Navigate to="/signin"/>
    }

    return children;
}

export default ProtectedRoute;