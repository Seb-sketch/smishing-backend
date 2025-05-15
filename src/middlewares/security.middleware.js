// src/middlewares/security.middleware.js
import helmet from 'helmet';

const securityMiddleware = helmet({
  contentSecurityPolicy: false, // APIs typically don't need CSP
  crossOriginResourcePolicy: { policy: 'same-site' },
  frameguard: { action: 'deny' },
});

export default securityMiddleware;
