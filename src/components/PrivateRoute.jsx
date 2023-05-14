import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    let auth = localStorage.getItem("TOKEN")
    return (
        auth ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoute
