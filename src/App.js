// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Contacts from "./pages/Contacts";
import Deals from "./pages/Deals";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import NotificationsPage from "./pages/Notifications";
import TrainingPortal from "./pages/TrainingPortal";
import Account from "./pages/Account";

import ProtectedRoute from "./ProtectedRoute";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/training-portal" element={<TrainingPortal />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
