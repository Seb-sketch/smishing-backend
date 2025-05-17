import 'dotenv/config';
import express from 'express';
import connectDB from './configs/db.config.js';
import authRoute from './routes/auth.route.js';
import contactRoute from "./routes/contact.route.js";
import securityMiddleware from './middlewares/security.middleware.js';
import { apiLimiter, authLimiter } from './middlewares/rateLimiter.middleware.js';

const app = express();

// Apply security headers
app.use(securityMiddleware);

// Apply general rate limiter
app.use(apiLimiter);

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mount routes with specific rate limiters
app.use('/api/auth', authLimiter, authRoute);

// Mount contact routes at /api/contact
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
