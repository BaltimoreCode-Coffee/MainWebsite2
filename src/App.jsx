// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./components/HomeView/HomeView";
import Navbar from "./components/Navbar/Navbar";
import EventTypes from "./components/EventTypes/EventTypes";
import EventCalPage from "./components/EventCal/EventCalPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Volunteer from "./components/Volunteer/Volunteer";

function App() {
  return (
    <div id="root">
    <Router>
      <Navbar />
      <div className="content">
<<<<<<< HEAD
      <Routes >
        <Route path="/" element={<HomeView />} />
        <Route path="/event-types" element={<EventTypes />} />
        <Route path="/event-calendar" element={<EventCalPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      </div>
      <Footer />
=======
        <Routes >
          <Route path="/" element={<HomeView />} />
          <Route path="/event-types" element={<EventTypes />} />
          <Route path="/event-types/:tag?" element={<EventTypes />} />
          <Route path="/event-calendar" element={<EventCalPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </div>
      <Footer /> 
>>>>>>> d5f5ee31ff4f9307cf396ec93e74f3ea1721b9e8
    </Router>
    </div>
  );
}

export default App;
