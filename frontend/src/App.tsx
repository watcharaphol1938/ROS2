import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Dashboard";
import UserCreate from "./components/UserCreate";
import Analytics from "./components/Analytics";
import Setting from "./components/Setting";
import About from "./components/About";
import Home from "./components/Home";
export default function App() {
return (
  <Router>
   <div>
   <Navbar />
   <Routes>
       {/* <Route path="/" element={<Users />} /> */}
       <Route path="/" element={<Home />} />
       <Route path="/analytics" element={<Analytics />} />
       <Route path="/create" element={<UserCreate />} />
       <Route path="/setting" element={<Setting />} />
       <Route path="/about" element={<About />} />
   </Routes>
   </div>
  </Router>
);
}
