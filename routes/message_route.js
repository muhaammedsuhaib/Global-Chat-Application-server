import express from "express";
import {
  add_message,
  get_messages,
} from "../controllers/message_controller.js";

const router = express.Router();

router.get("/", get_messages);
router.post("/", add_message);

export default router;
