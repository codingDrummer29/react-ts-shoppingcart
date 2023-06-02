import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import FourZeroFour from "./pages/FourZeroFour";

const App = () => {
  return (
    <>
      <div className="px-12 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
