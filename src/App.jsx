import { Route, Routes } from "react-router-dom";
import { Dogs, Login, Main, Profile } from "./pages";
import { PrivateRoute } from "./components";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes>
        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* ROUTES */}
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
