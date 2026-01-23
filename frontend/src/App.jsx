import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";

// User Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Gallery from "./pages/Gallery";
import EventsTestimonials from "./pages/EventsTestimonials";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";

// Admin Layout and Pages
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Reservations from "./admin/pages/Reservations";
import MenuManagement from "./admin/pages/MenuManagement"; // Ensure spelling matches your filename
import Testimonials from "./admin/pages/Testimonials";
import Messages from "./admin/pages/Messages";
import GalleryAdmin from "./admin/pages/Gallery";

// Routes protection
import ProtectedRoute from "./routes_frontend/ProtectedRoute";
import AdminRoute from "./routes_frontend/AdminRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* 1. PUBLIC ROUTES */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 2. PROTECTED USER ROUTES (Must be logged in) */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events" element={<EventsTestimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>

          {/* 3. PROTECTED ADMIN ROUTES (Must be logged in AND an admin) */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              {/* This is the /admin default page */}
              <Route index element={<Dashboard />} />
              
              <Route path="reservations" element={<Reservations />} />
              <Route path="menu" element={<MenuManagement />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="messages" element={<Messages />} />
              <Route path="gallery" element={<GalleryAdmin />} />
            </Route>
          </Route>

          {/* Fallback - Redirect to login if route doesn't exist */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;