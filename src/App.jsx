// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./components/HomeView/HomeView";
import Navbar from "./components/Navbar/Navbar";
import EventTypes from "./components/EventTypes/EventTypes";
import EventCal from "./components/EventCal/EventCal";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import Volunteer from "./components/Volunteer/Volunteer";
import Organizers from './components/Organizers/Organizers'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/event-types" element={<EventTypes />} />
        <Route path="/event-calendar" element={<EventCal />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/oganizers" element={<Organizers />} />
      </Routes>
    </Router>
  );
}

export default App;
