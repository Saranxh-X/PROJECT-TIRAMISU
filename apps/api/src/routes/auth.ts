import { Router, Response } from "express";
import { authenticateUser, AuthenticatedRequest } from "../middleware/auth";

const router = Router();

// GET /api/auth/me - Protected endpoint to get current authenticated user profile
router.get("/me", authenticateUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    res.json({
      status: "ok",
      user: {
        uid: req.user?.uid,
        email: req.user?.email,
        profile: req.user?.dbUser,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to fetch user profile" });
  }
});

export default router;
