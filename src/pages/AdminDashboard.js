import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Optional Components (create real ones later)
const UserAnalytics = () => <div>User Analytics</div>;
const Notifications = () => <div>Notifications</div>;
const ActivityLog = () => <div>Activity Log</div>;
const UserGrowthChart = () => <div>User Growth Chart</div>;
const UserActivityChart = () => <div>User Activity Chart</div>;
const UserManagement = () => <div>User Management</div>;

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchUsers();
    }
  }, [token, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5050/users", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(Array.isArray(data) ? data : []);

      setUser({
        id: localStorage.getItem("userId"),
        role: localStorage.getItem("role"),
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      background: darkMode ? "#222" : "#f5f5f5",
      color: darkMode ? "white" : "black",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      background: darkMode ? "#333" : "white",
      color: darkMode ? "white" : "black",
    },
    th: {
      background: "#007bff",
      color: "white",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      borderBottom: darkMode ? "1px solid #555" : "1px solid #ddd",
    },
    button: {
      padding: "10px 15px",
      background: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
      marginLeft: "10px",
      borderRadius: "5px",
    },
    logoutButton: {
      background: "red",
    },
  };

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Admin Dashboard</h1>
        <div>
          {user && <span>👤 {user.role?.toUpperCase()} (ID: {user.id})</span>}
          <button style={styles.button} onClick={toggleDarkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button style={{ ...styles.button, ...styles.logoutButton }} onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>

      <div style={styles.grid}>
        <UserAnalytics darkMode={darkMode} />
        <Notifications darkMode={darkMode} />
        <UserGrowthChart darkMode={darkMode} />
        <UserActivityChart darkMode={darkMode} />
      </div>

      <ActivityLog darkMode={darkMode} />
      <UserManagement darkMode={darkMode} />

      <h2>User List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={styles.td}>{u.id}</td>
              <td style={styles.td}>{u.username}</td>
              <td style={styles.td}>{u.email}</td>
              <td style={styles.td}>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
