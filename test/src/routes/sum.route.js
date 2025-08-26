import { Router } from "express";
import { findTheSumeOfTwoNumbers } from "../controllers/sum.controller.js";

const router = Router();

router.get("/", findTheSumeOfTwoNumbers);

export default router;
