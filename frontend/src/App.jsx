import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";

import Signup from "./pages/Signup";
import Problem from "./pages/Problem";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Problem" element={<Problem />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
