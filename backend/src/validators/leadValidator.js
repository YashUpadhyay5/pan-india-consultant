import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters long' }),
  phone: z.string().trim().min(10, { message: 'Mobile number must be at least 10 digits' }),
  email: z.string().trim().email({ message: 'Invalid email address' }).optional().or(z.literal('')),
  service: z.string().trim().min(2, { message: 'Service selection is required' }),
  city: z.string().trim().optional().default('Not Specified'),
  businessType: z.string().trim().optional().default('Private Limited / Enterprise'),
  requirement: z.string().trim().optional().default('General consultation inquiry'),
  preferredContact: z.string().trim().optional().default('Phone / WhatsApp'),
  preferredDate: z.string().trim().optional().nullable(),
  preferredTime: z.string().trim().optional().nullable(),
  budget: z.string().trim().optional().default('Standard Fee'),
  attribution: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
    landingPage: z.string().optional(),
    referrer: z.string().optional()
  }).optional()
});

export const leadStatusSchema = z.object({
  status: z.enum(['NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL_SENT', 'WON', 'LOST', 'SPAM'])
});

export const newsletterSchema = z.object({
  email: z.string().trim().email({ message: 'Valid email address is required' })
});
