import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import LoadingSpinner from "./components/ui/loading-spinner";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const Rooms = React.lazy(() => import("./pages/Rooms"));
const Mess = React.lazy(() => import("./pages/Mess"));
const Amenities = React.lazy(() => import("./pages/Amenities"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <Router basename="/SRM_PG">
        <ScrollToTop />
        <Header />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <LoadingSpinner size="lg" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/mess" element={<Mess />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;