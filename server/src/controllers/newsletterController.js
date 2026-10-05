import { supabase } from '../config/supabase.js';
import { newsletterSchema } from '../validators/leadValidator.js';

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = newsletterSchema.parse(req.body);

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email: email.toLowerCase() }])
      .select();

    if (error && error.code !== '23505') { // Ignore unique constraint if already subscribed
      console.warn('Newsletter insert note:', error.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Subscribed to Bharat Advisory weekly regulatory bulletin.'
    });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        error: { message: 'A valid email address is required.' }
      });
    }
    return res.status(500).json({
      success: false,
      error: { message: 'Subscription failed. Please try again.' }
    });
  }
};
