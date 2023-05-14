import { Route, Routes } from "react-router-dom";
import { Dogs, Login, Main } from "./pages";
import { PrivateRoute } from "./components";

const App = () => {
  return (
    <Routes>

      {/* PRIVATE ROUTES */}
      <Route element={<PrivateRoute />}>
      </Route>

      {/* ROUTES */}
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/dogs" element={<Dogs />} />
    </Routes>
  );
};

export default App;
