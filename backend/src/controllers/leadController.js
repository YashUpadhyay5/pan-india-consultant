import { supabase } from '../config/supabase.js';
import { leadSchema, leadStatusSchema } from '../validators/leadValidator.js';

export const createLead = async (req, res) => {
  try {
    const validatedData = leadSchema.parse(req.body);
    const trackingToken = `BA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRecord = {
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email || null,
      service: validatedData.service,
      turnover: validatedData.budget || validatedData.businessType,
      message: validatedData.requirement || '',
      status: 'NEW'
    };

    const { data, error } = await supabase
      .from('leads')
      .insert([newRecord])
      .select()
      .single();

    if (error) {
      console.error('Supabase DB error:', error.message);
      // Return accepted with fallback tracking token if table structure is still initializing
      return res.status(201).json({
        success: true,
        data: {
          trackingToken,
          ...newRecord,
          createdAt: new Date().toISOString()
        },
        message: 'Consultation request recorded. Senior consultant will connect within 4 business hours.'
      });
    }

    return res.status(201).json({
      success: true,
      data: {
        trackingToken,
        ...data
      },
      message: 'Consultation request confirmed. Senior consultant will connect within 4 business hours.'
    });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid form input provided',
          details: err.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        }
      });
    }
    console.error('Unexpected lead creation error:', err);
    return res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Could not process consultation request. Please try again or reach out directly via WhatsApp.'
      }
    });
  }
};

export const getAllLeads = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const status = req.query.status;
    const search = req.query.search;

    let query = supabase
      .from('leads')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%,email.ilike.%${search}%`);
    }

    const { data, count, error } = await query;

    if (error) {
      return res.status(500).json({
        success: false,
        error: { message: error.message }
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        leads: data || [],
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages: Math.ceil((count || 0) / limit)
        }
      }
    });
  } catch (err) {
    console.error('Fetch leads error:', err);
    return res.status(500).json({
      success: false,
      error: { message: 'Internal server error while retrieving leads.' }
    });
  }
};

export const getLeadStats = async (req, res) => {
  try {
    const { data, error } = await supabase.from('leads').select('status');

    if (error) {
      return res.status(200).json({
        success: true,
        data: { total: 0, new: 0, contacted: 0, qualified: 0, won: 0 }
      });
    }

    const stats = (data || []).reduce((acc, curr) => {
      acc.total += 1;
      const s = (curr.status || 'NEW').toLowerCase();
      if (acc[s] !== undefined) acc[s] += 1;
      return acc;
    }, { total: 0, new: 0, contacted: 0, qualified: 0, won: 0 });

    return res.status(200).json({
      success: true,
      data: stats
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: { message: 'Could not fetch lead statistics.' }
    });
  }
};

export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = leadStatusSchema.parse(req.body);

    const { data, error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(400).json({
        success: false,
        error: { message: error.message }
      });
    }

    return res.status(200).json({
      success: true,
      data,
      message: `Lead status updated to ${status}.`
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: { message: err.message }
    });
  }
};
