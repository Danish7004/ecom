// server.js  (ESM)
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

// component imports
import { router as userRouter } from "./routes/userRouter.js";
import { catRouter } from "./routes/categoryRouter.js";
import { routerImg } from "./routes/upload.js";
import { productRouter } from "./routes/productRouter.js";
import { paymentRouter } from "./routes/paymentRouter.js";
import { razorpaymentRouter } from "./routes/razorpaymentRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true, // uses /tmp on Vercel which is allowed
  })
);

/**
 * Route mounting
 * Note: behind Vercel we’ll route /api/* to this function,
 * so all app routes should start with /api
 */
app.use("/api/user", userRouter);
app.use("/api", catRouter);
app.use("/api", routerImg);
app.use("/api", productRouter);
app.use("/api", paymentRouter);
app.use("/api", razorpaymentRouter);

// Simple health check
app.get("/api/health", (_req, res) => res.json({ ok: true }));

/**
 * MongoDB connection (reused across invocations)
 */
const { MONGODB_URI } = process.env;

// cache the connection across serverless invocations
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        // modern options are defaults in Mongoose 7/8, but safe to include
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((m) => {
        console.log("MongoDB connected");
        return m;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Ensure DB connection before handling any request
app.use(async (_req, _res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.error("MongoDB connection error:", err);
    next(err);
  }
});

// ❌ No app.listen() in serverless
// ✅ Export a serverless handler instead
export default serverless(app);
