import { Router } from "express";
import { getPosts } from "../controllers/postsController.js";

const router = Router();

router.get("/", getPosts);

export default router;
