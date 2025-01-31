import express from "express";
const router = express.Router();
import { validateRequest } from "../Middleware/validateRequest.js";
import { workspacesValidation } from "../validation/workspacesValidation.js";
import { sessionMiddleware } from "../Middleware/sessionMiddleware.js";
import { workspacesController } from "../controllers/workspacesController.js";
router.post(
  "/",
  validateRequest(workspacesValidation),
  sessionMiddleware,
  workspacesController
);

export default router;
