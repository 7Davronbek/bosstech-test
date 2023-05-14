import { Route, Routes } from "react-router-dom"
import { Login, Main } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
