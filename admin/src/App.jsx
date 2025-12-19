import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";

import Dashboard from "./pages/Dashboard/Dashboard";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";

const App = () => {
  return (
    <Router>
      <SignedOut>
        <Login />
      </SignedOut>

      <SignedIn>
        <Navbar />
        <div style={{ display: "flex", minHeight: "90vh" }}>
          <Sidebar />
          <main style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>
      </SignedIn>
    </Router>
  );
};

export default App;
