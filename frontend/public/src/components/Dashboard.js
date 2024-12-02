import React, { useEffect, useState } from "react";

function Dashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const response = await fetch("http://localhost:6969/api/logs");
      const data = await response.json();
      setLogs(data);
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Recent Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {log.service} - {log.status} - {new Date(log.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
