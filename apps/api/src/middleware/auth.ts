import { Request, Response, NextFunction } from "express";
import { verifyFirebaseToken } from "../config/firebaseAdmin";
import { User, IUser } from "../models/User";

export interface AuthenticatedRequest extends Request {
  user?: {
    uid: string;
    email?: string;
    dbUser?: IUser;
  };
}

export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized: Missing or invalid Authorization header" });
    return;
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = await verifyFirebaseToken(token);

    if (!decodedToken || !decodedToken.uid) {
      res.status(401).json({ error: "Unauthorized: Invalid token" });
      return;
    }

    const firebaseUid = decodedToken.uid;
    const email = decodedToken.email || "";

    // Sync or fetch MongoDB user record
    let dbUser = await User.findOne({ firebaseUid });

    if (!dbUser && email) {
      try {
        dbUser = await User.create({
          firebaseUid,
          email,
          displayName: decodedToken.name || "",
          photoURL: decodedToken.picture || "",
        });
        console.log(`[MongoDB] Synced new Firebase user to MongoDB: ${email} (${firebaseUid})`);
      } catch (err) {
        console.error("[MongoDB] Error creating user profile:", err);
      }
    }

    req.user = {
      uid: firebaseUid,
      email,
      dbUser: dbUser || undefined,
    };

    next();
  } catch (error) {
    console.error("[Auth Middleware] Error:", error);
    res.status(401).json({ error: "Unauthorized: Token verification failed" });
  }
};
