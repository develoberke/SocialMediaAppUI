import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const isAuthenticated = useSelector((state) => state.security.isAuthenticated);
    if(!(isAuthenticated && localStorage.getItem("token"))){
        return <Navigate to={"/signin"} replace />
    }

    return children;
}

export default ProtectedRoute;