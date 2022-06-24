import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ViewCart from "./pages/ViewCart";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>
    </Router>
  );
}

export default App;
