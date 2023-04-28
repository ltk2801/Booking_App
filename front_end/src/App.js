import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnNavigate from "./utils/ScrollToTopOnNavigate";
// Import Component
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login isAuthenticated={user} />} />
        <Route path="/register" element={<Register isAuthenticated={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
