# Workout MERN Application

This is a **Workout Tracker** application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). The application allows users to manage their workout routines by creating, reading, updating, and deleting workout records.

---

## Features

- **Frontend**: Built with React.js for a responsive and interactive user interface.
- **Backend**: Built with Express.js and Node.js to handle API requests and business logic.
- **Database**: MongoDB is used to store workout data.
- **RESTful API**: Provides endpoints for CRUD operations on workout data.
- **State Management**: Context API and `useReducer` are used for managing the application state.

---

## Project Structure

### 1. **Frontend**
- **Path**: `frontend/`
- **Tech Stack**: React.js
- **Key Features**:
  - Displays a list of workouts.
  - Allows users to add new workouts.
  - Enables users to delete workouts.
  - Provides a form for creating workouts with validation.
- **Start Command**: `npm start` (inside the `frontend` folder).

### 2. **Backend**
- **Path**: `backend/`
- **Tech Stack**: Node.js, Express.js, MongoDB
- **Key Features**:
  - RESTful API with endpoints for CRUD operations.
  - MongoDB integration for data persistence.
  - Error handling for invalid requests.
- **Start Command**: `npm run dev` (inside the `backend` folder).

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- MongoDB connection string.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/workout-mern.git
   cd workout-mern
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` folder with the following content:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. Open the application in your browser at `http://localhost:3000`.

---

## API Endpoints

Refer to the [Backend API Documentation](./backend/README.md) for detailed information about the available endpoints.

---

## Screenshots

### Home Page
- Displays a list of workouts and a form to add new workouts.

![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)

---

## Technologies Used

- **Frontend**: React.js, Context API, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB Atlas
- **State Management**: Context API with `useReducer`

---

## Future Enhancements

- Add user authentication and authorization.
- Implement filtering and sorting for workouts.
- Add a feature to track workout progress over time.

---

## License

This project is licensed under the MIT License.
