
# **Network Monitoring**

A real-time network monitoring dashboard with traffic analysis, uptime tracking, and alerts for anomalies. The project uses **React.js** for the frontend, **Node.js** and **Python** for the backend, and **MongoDB** for data storage. It is designed to allow general users to view network logs and statuses while enabling admins to manage services being monitored.

---

## **Features**
- **Real-Time Updates**: Displays live network logs and status updates using WebSocket.
- **Admin Dashboard**: Allows admins to:
  - Login securely.
  - Add and manage monitored services.
- **Network Traffic Analysis**: Tracks uptime, service statuses, and logs anomalies.
- **Accessible Interface**: General users can view the dashboard without authentication.
- **Scalable Design**: Supports multithreaded data analysis with Python and MongoDB for logging.

---

## **Tech Stack**
### Frontend
- **React.js**: Dynamic and responsive UI.
- **Socket.io Client**: Real-time communication.

### Backend
- **Node.js**: Handles API and WebSocket communication.
- **Python**: Performs network traffic analysis.
- **MongoDB**: Stores logs, admin credentials, and monitored services.

---

## **Getting Started**
### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/JoshBaneyCS/Network-Monitor.git
   cd Network-Monitor
   \`\`\`

2. Navigate to the backend folder and install dependencies:
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. Set up environment variables in \`backend/.env\`:
   \`\`\`plaintext
   MONGO_URI=mongodb://localhost:27017/network-monitoring-dashboard
   JWT_SECRET=your_jwt_secret_key
   \`\`\`

4. Start the backend server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Navigate to the frontend folder and install dependencies:
   \`\`\`bash
   cd ../frontend
   npm install
   \`\`\`

6. Start the React development server (development only):
   \`\`\`bash
   npm start
   \`\`\`

7. (Optional) Run the Python network analysis script:
   \`\`\`bash
   python monitor/network_analysis.py
   \`\`\`

8. For production, serve the React frontend via the backend (on port 6969):
   - Build the React app:
     \`\`\`bash
     npm run build
     \`\`\`
   - Serve the app through the backend server.

---

## **Usage**
### Development Mode
- **Frontend**: Accessible at \`http://localhost:3000\`.
- **Backend**: Accessible at \`http://localhost:6969\`.

### Production Mode
- **Full Application**: Accessible at \`http://localhost:6969\`.

---

## **File Structure**
\`\`\`
network-monitoring-dashboard/
├── backend/
│   ├── app.js             # Main backend server file
│   ├── routes/            # API routes for admin, public, and services
│   ├── models/            # MongoDB schemas
│   ├── middleware/        # Authentication middleware
│   └── .env               # Environment variables
├── frontend/
│   ├── public/            # Static HTML files
│   ├── src/               # React components and pages
│   ├── App.js             # Main React application file
│   └── styles.css         # Styling
├── monitor/
│   └── network_analysis.py # Python script for network traffic analysis
├── README.md              # Project documentation
├── package.json           # Backend package dependencies
└── package-lock.json      # Backend package lock file
\`\`\`

---

## **API Endpoints**
### Public Endpoints
| Method | Endpoint        | Description            |
|--------|-----------------|------------------------|
| GET    | \`/api/logs\`     | Fetch recent logs.    |

### Admin Endpoints (Protected)
| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| POST   | \`/admin/login\`        | Authenticate admin user.       |
| POST   | \`/services/add\`       | Add a new monitored service.   |

---

## **Screenshots**

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch:
   \`\`\`bash
   git checkout -b feature-name
   \`\`\`
3. Commit your changes:
   \`\`\`bash
   git commit -m "Add feature-name"
   \`\`\`
4. Push to the branch:
   \`\`\`bash
   git push origin feature-name
   \`\`\`
5. Create a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
- **Author**: Joshua Baney
- **Email**: me@joshbaney.com
- **GitHub**: [JoshBaneyCS](https://github.com/JoshBaneyCS)
