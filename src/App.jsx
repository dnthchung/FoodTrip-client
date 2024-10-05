import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
// layout for mobile devices
import HomeMobile from "./pages/MobileVersion/Home";
// layout for web or larger screens
import HomeWeb from "./pages/WebsiteVersion/Home";
import Blog from "./pages/WebsiteVersion/Blog";
import Menu from "./pages/WebsiteVersion/Menu";
import Favorites from "./pages/WebsiteVersion/Favorites";
import Contact from "./pages/WebsiteVersion/Contact";
import Login from "./pages/WebsiteVersion/Login";
import Register from "./pages/WebsiteVersion/Register";
import ProductDetail from "./pages/WebsiteVersion/ProductDetail";
import ForgetPassword from "./pages/WebsiteVersion/ForgetPassword"

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get the current location to determine if we are on login or register pages
  const location = useLocation();

  // Handle screen size change
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  // Handle scroll event to add shadow on scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Add resize and scroll event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial call to set states based on current conditions
    handleResize();
    handleScroll();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current path is /login or /register
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Conditional rendering for Header and BottomBar */}
      {!isMobile && !isAuthPage && <Header isScrolled={isScrolled} />}
      {!isAuthPage && isMobile && <BottomBar />}

      {/* Main content section */}
      <div className={`mb-5 p-4 ${isMobile ? "mobile-layout" : "web-layout"}`}>
        {isMobile ? (
          <>
            {/* Layout for mobile devices */}
            <HomeMobile />
          </>
        ) : (
          <>
            {/* Route Layout for web or larger screens */}
            <Toaster />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomeWeb />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              {/* auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
            </Routes>
          </>
        )}
      </div>

      {/* Footer should only be rendered if not on mobile and not on login/register pages */}
      {!isMobile && !isAuthPage && <Footer />}
    </>
  );
}

export default App;