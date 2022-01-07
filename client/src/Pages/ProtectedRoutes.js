import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const user = useSelector((state) => state.reducerUser);
    return user.username ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
