import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let auth = localStorage.getItem("TEST_USER_INFORMATION");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
