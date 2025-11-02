import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lost & Found System</h1>
      <p><Link to="/dashboard">Admin Dashboard</Link></p>
    </div>
  );
}
