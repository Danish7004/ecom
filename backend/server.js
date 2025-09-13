// server.js (ESM)
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

// routers
import { router as userRouter } from "./routes/userRouter.js";
import { catRouter } from "./routes/categoryRouter.js";
import { router as routerImg } from "./routes/upload.js";
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
    useTempFiles: true,
    tempFileDir: "/tmp", // Vercel allows writing only to /tmp
    createParentPath: true,
  })
);

// ---- Routes (behind /api) ----
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/user", userRouter);
app.use("/api", catRouter);
app.use("/api", routerImg);
app.use("/api", productRouter);
app.use("/api", paymentRouter);
app.use("/api", razorpaymentRouter);

// ---- Mongo connection (reuse across invocations) ----
const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI env var");
}

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((m) => {
        console.log("MongoDB connected");
        return m;
      })
      .catch((err) => {
        console.error("Mongo connection error:", err);
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// ensure DB before handling routes
app.use(async (_req, _res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (e) {
    next(e);
  }
});

// global error handler to avoid silent 500s
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// ❌ No app.listen in serverless
// ✅ Export serverless handler
export default serverless(app);
