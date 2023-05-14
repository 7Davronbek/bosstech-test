import { Route, Routes } from "react-router-dom";
import { Login, Main } from "./pages";
import { PrivateRoute } from "./components";

const App = () => {
  return (
    <Routes>

      {/* PRIVATE ROUTES */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Main />} />
      </Route>

      {/* ROUTES */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
