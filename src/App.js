import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ViewCart from "./pages/ViewCart";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>
    </Router>
  );
}

export default App;
