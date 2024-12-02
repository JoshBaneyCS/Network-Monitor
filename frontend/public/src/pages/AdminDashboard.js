import React from "react";
import AdminLogin from "../components/AdminLogin";
import ServiceManager from "../components/ServiceManager";

function AdminDashboard() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <AdminLogin />
      <ServiceManager />
    </div>
  );
}

export default AdminDashboard;
