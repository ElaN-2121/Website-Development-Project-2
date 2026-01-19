import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import EventsTestimonials from "./pages/EventsTestimonials";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Gallery" element={<Gallery />} />
          
          {/* Matches your Navbar link: "/Events&Testimonials" */}
          <Route path="/EventsTestimonials" element={<EventsTestimonials />} />
          
          {/* Added this so your 'Book a table' button works */}
          <Route path="/reservation" element={<div>Reservation Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;