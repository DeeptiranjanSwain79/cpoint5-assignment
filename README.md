# Grocery Inventory Management System

This project is a simple web application for managing a grocery inventory. It provides endpoints for adding grocery items to the inventory and retrieving a list of all items. The project uses Prisma as the ORM for interacting with a relational database and Axios for making HTTP requests from the frontend.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add grocery items to the inventory.
- Retrieve a list of all items in the inventory.
- Web UI for visualizing and interacting with the inventory.

## Technologies Used

- Backend:
  - Node.js
  - Express.js
  - Prisma (ORM for database interactions)
  - CORS (for handling Cross-Origin Resource Sharing)
- Frontend:
  - React.js
  - Material-UI (React UI framework)
  - Axios (for making HTTP requests)

## Project Structure

- `backend/`: Contains the backend server code.
- `frontend/`: Contains the frontend React application code.
- `prisma/`: Contains Prisma schema and configurations.

## Getting Started

1. **Download the zip of this repo:**


2. **Install dependencies:**

    ```bash
    cd backend
    npm install

    cd ../frontend
    npm install
    ```

3. **Configure the database:**

    - Set up a relational database of your choice (e.g., PostgreSQL).
    - Update the database connection details in `backend/prisma/.env`.

4. **Run the project:**

    ```bash
    # In the backend directory
    npm start
    npx prisma studio

    # In the frontend directory
    npm start
    ```

5. **Open the app:**

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

- **POST `http://localhost:3000/api/v1/create`**: Add a grocery item to the inventory.
- **GET `http://localhost:3000/api/v1/get`**: Retrieve a list of all items in the inventory.

## Demo

[Provide a link or instructions for accessing the demo, if available.]

## Contributing

[Include information on how others can contribute to your project.]

## License

[Specify the license under which your project is distributed.]

