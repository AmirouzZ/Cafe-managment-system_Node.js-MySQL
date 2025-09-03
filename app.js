import express from "express";
import cors from "cors";

const app = express();

// Routes
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Implement Routes
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/auth/", authRoutes);
app.use("/api/v1/categories/", categoryRoute);
app.use("/api/v1/admin/", adminRoutes);

export default app;
