import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width={70} height={70} />
        <div>IDMB Demo App</div>
      </header>
      <div className="App-background">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
