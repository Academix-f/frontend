import "./App.css";
import "./styles/index.css";
import Landing from "./pages/Landing";
import LogIn from "../src/pages/login/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/register";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
