import { Route, Routes } from "react-router-dom";
import { Login, Main } from "./pages";
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
    </Routes>
  );
};

export default App;
