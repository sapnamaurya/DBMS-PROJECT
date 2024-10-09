import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Single from "./pages/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/single" element={<Single />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
      <p>deuhdfejhd</p>
    </div>
  );
}

export default App;
