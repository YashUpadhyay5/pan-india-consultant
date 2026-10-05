import { Router } from 'express';
import leadRoutes from './leadRoutes.js';
import newsletterRoutes from './newsletterRoutes.js';

const apiRouter = Router();

// Health check
apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'pan-india-consulting-api',
    version: '1.0.0'
  });
});

apiRouter.use('/leads', leadRoutes);
apiRouter.use('/newsletter', newsletterRoutes);

export default apiRouter;
