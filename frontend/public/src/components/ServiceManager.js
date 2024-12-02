import React, { useState } from "react";

function ServiceManager() {
  const [name, setName] = useState("");
  const [endpoint, setEndpoint] = useState("");

  const handleAddService = async () => {
    const response = await fetch("http://localhost:6969/services/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, endpoint }),
    });

    if (response.ok) {
      alert("Service added successfully!");
    } else {
      alert("Failed to add service.");
    }
  };

  return (
    <div>
      <h2>Manage Services</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Service Endpoint"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <button className="button" onClick={handleAddService}>Add Service</button>
    </div>
  );
}

export default ServiceManager;
