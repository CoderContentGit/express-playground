import { Router } from "express";
import { getPaginatedPosts } from "../controllers/postsController.js";

const router = Router();

router.get("/", getPaginatedPosts);

export default router;
