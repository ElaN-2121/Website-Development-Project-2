import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
