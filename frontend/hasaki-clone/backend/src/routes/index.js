import express from "express";
import someController from "../controllers/index.js"; // Adjust the import based on your controllers

const router = express.Router();

// Define your routes here
router.get("/api/example", someController.exampleFunction); // Example route

export default router;