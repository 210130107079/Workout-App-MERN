# Workout Backend API Documentation

This document provides an overview of all the API endpoints available in the backend, along with their descriptions, status codes, and required data.

## Base URL
```
http://localhost:5000/api/workouts
```

---

## Endpoints

### 1. **Get All Workouts**
- **URL:** `/`
- **Method:** `GET`
- **Description:** Fetch all workouts sorted by creation date in descending order.
- **Response:**
  - **200 OK:** Returns an array of workout objects.

---

### 2. **Get Specific Workout**
- **URL:** `/:id`
- **Method:** `GET`
- **Description:** Fetch a specific workout by its ID.
- **Required Data:**
  - `id` (Path Parameter): The ID of the workout.
- **Response:**
  - **200 OK:** Returns the workout object.
  - **404 Not Found:** If the ID is invalid or the workout is not found.

---

### 3. **Create a New Workout**
- **URL:** `/`
- **Method:** `POST`
- **Description:** Create a new workout.
- **Required Data (JSON Body):**
  ```json
  {
    "title": "string",
    "load": "number",
    "reps": "number"
  }
  ```
- **Response:**
  - **200 OK:** Returns the created workout object.
  - **400 Bad Request:** If required fields are missing, returns an error message and a list of empty fields.

---

### 4. **Delete a Workout**
- **URL:** `/:id`
- **Method:** `DELETE`
- **Description:** Delete a workout by its ID.
- **Required Data:**
  - `id` (Path Parameter): The ID of the workout.
- **Response:**
  - **200 OK:** Returns the deleted workout object.
  - **404 Not Found:** If the ID is invalid or the workout is not found.

---

### 5. **Update a Workout**
- **URL:** `/:id`
- **Method:** `PATCH`
- **Description:** Update a workout by its ID.
- **Required Data (JSON Body):**
  ```json
  {
    "title": "string (optional)",
    "load": "number (optional)",
    "reps": "number (optional)"
  }
  ```
- **Response:**
  - **200 OK:** Returns the updated workout object.
  - **404 Not Found:** If the ID is invalid or the workout is not found.

---

## Error Responses
- **400 Bad Request:** Missing or invalid data.
- **404 Not Found:** Resource not found or invalid ID.
- **500 Internal Server Error:** Server-side error.

---

## Notes
- Ensure the `MONGO_URI` environment variable is correctly set in the `.env` file for database connectivity.
- Use a REST client like Postman or cURL to test the endpoints.
