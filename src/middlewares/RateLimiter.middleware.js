import rateLimit from 'express-rate-limit';

// General API limiter (100 requests/minute)
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: {
    error: "Too many requests, please try again later.",
    status: 429,
  },
});

// Stricter auth rate limiter (10 per 15 min)
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    error: "Too many login attempts, please try again later.",
    status: 429,
  },
});
