# Simple-React-Express-App
This project features an Express.js backend serving a React frontend that dynamically displays text based on whether it's a weekday or a weekend.

## Overview

The project consists of an Express.js server providing data about the current day (whether it's a weekday or a weekend) to a React frontend. The React app fetches this data from the server and displays a corresponding message based on the day.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Express.js**: Minimal and flexible Node.js web application framework.
- **axios**: Promise-based HTTP client for making requests from the React app to the Express server.

## Getting Started

### Prerequisites

- Node.js and npm should be installed.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/express-react-app.git  

2. **Install Dependencies:**

- Should open Frontend and backend files in diffrent terminals.

# Go to the frontend directory
   ```bash
   cd frontend/
   npm install
   npm run dev      
 ```
   The React app will start running on http://localhost:5173.

   Open your browser and visit http://localhost:3001 to see the app in action.
   
# Go to the backend directory
   cd ../backend/
   - npm install
  
3.**Running the Application**

# Inside the backend directory
   Start the backend Express server: 
   - node index.js

   Install nodemon.js for better use
   The React app will start running on http://localhost:3000.

# Inside the backend directory
   Start the React frontend:
   - npm run dev
   The React app will start running on http://localhost:5173
