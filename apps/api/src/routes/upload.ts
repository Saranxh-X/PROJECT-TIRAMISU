import { Router, Request, Response } from "express";
import multer from "multer";

const router = Router();

// Store files in memory for processing
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are supported"));
    }
  },
});

// POST /api/upload endpoint skeleton
router.post("/", upload.single("receipt"), async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No receipt image provided" });
      return;
    }

    console.log(`[Multer] Received upload: ${req.file.originalname} (${req.file.size} bytes)`);

    // Placeholder response for Phase 1 skeleton
    res.status(202).json({
      message: "Receipt received successfully for processing",
      filename: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
      status: "queued",
      taskId: `task_${Date.now()}`,
    });
  } catch (error: any) {
    console.error("[Upload Route] Error:", error);
    res.status(500).json({ error: error.message || "Failed to handle file upload" });
  }
});

export default router;
