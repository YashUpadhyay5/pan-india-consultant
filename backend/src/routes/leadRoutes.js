import { Router } from 'express';
import { createLead, getAllLeads, getLeadStats, updateLeadStatus } from '../controllers/leadController.js';

const router = Router();

// Public lead submission
router.post('/', createLead);

// CRM lead queries
router.get('/', getAllLeads);
router.get('/stats', getLeadStats);
router.patch('/:id/status', updateLeadStatus);

export default router;
