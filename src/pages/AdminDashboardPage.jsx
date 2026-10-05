import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, Phone, Mail, MessageSquare, Download, RefreshCw, 
  Search, Shield, CheckCircle2, Clock, Filter, AlertCircle, 
  ArrowUpRight, Lock, KeyRound, LogOut
} from 'lucide-react';
import { supabase } from '../utils/supabase';

const ADMIN_PIN = "2026";

export const AdminDashboardPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');

  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  // Fetch leads from backend API with Supabase fallback
  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      // 1. Try Backend API
      const response = await fetch('http://localhost:5000/api/v1/leads');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data?.leads) {
          setLeads(result.data.leads);
          setLastRefreshed(new Date());
          setIsLoading(false);
          return;
        }
      }
      throw new Error('API unavailable, falling back to Supabase direct');
    } catch {
      // 2. Direct Supabase Fallback
      try {
        const { data, error } = await supabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data) {
          setLeads(data);
        }
      } catch (err) {
        console.warn('Could not fetch from Supabase:', err);
      } finally {
        setLastRefreshed(new Date());
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      // Auto-refresh every 30 seconds
      const interval = setInterval(fetchLeads, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // Handle PIN Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setPinError('');
    } else {
      setPinError('Incorrect Admin PIN. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
  };

  // Update lead status
  const handleStatusChange = async (leadId, newStatus) => {
    // Optimistic UI update
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));

    try {
      await fetch(`http://localhost:5000/api/v1/leads/${leadId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch {
      // Supabase direct fallback
      await supabase.from('leads').update({ status: newStatus }).eq('id', leadId);
    }
  };

  // KPI Calculations
  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter(l => (l.status || 'NEW') === 'NEW').length;
    const contacted = leads.filter(l => l.status === 'CONTACTED').length;
    const won = leads.filter(l => l.status === 'WON' || l.status === 'CONVERTED').length;
    
    const today = new Date().toISOString().split('T')[0];
    const todayCount = leads.filter(l => l.created_at && l.created_at.startsWith(today)).length;

    return { total, newCount, contacted, won, todayCount };
  }, [leads]);

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter(l => {
      const matchesSearch = 
        (l.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (l.phone || '').includes(searchQuery) ||
        (l.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (l.service || '').toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === 'ALL' || (l.status || 'NEW') === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, searchQuery, statusFilter]);

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = ["Date", "Name", "Phone", "Email", "Service", "Requirement", "Status"];
    const rows = leads.map(l => [
      l.created_at ? new Date(l.created_at).toLocaleString() : '',
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${(l.service || '').replace(/"/g, '""')}"`,
      `"${(l.message || l.requirement || '').replace(/"/g, '""')}"`,
      `"${l.status || 'NEW'}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Leads_Report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 max-w-md w-full border border-slate-100 text-center">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight font-display mb-2">
            Admin Access Portal
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Enter your secure Admin PIN to manage client meetings and inquiries.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                maxLength={6}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter PIN (Default: 2026)"
                className="w-full text-center tracking-widest text-lg font-bold py-3 px-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                autoFocus
              />
              {pinError && <p className="text-red-500 text-xs mt-2">{pinError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#16222d] hover:bg-amber-500 text-white hover:text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="text-[11px] text-slate-400 mt-6">
            Protected under Bharat Advisory corporate security guidelines.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                Lead Intelligence
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#16222d] font-display mt-1">
              Executive Consultation Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Live inquiries across PAN-India statutory, corporate tax & audit practices.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-slate-300 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 bg-slate-200 hover:bg-rose-100 hover:text-rose-700 text-slate-600 text-xs font-bold px-3 py-2.5 rounded-xl transition-colors"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Leads</span>
              <div className="text-3xl font-black text-[#16222d] font-display mt-1">{stats.total}</div>
              <span className="text-[11px] font-semibold text-emerald-600">+{stats.todayCount} today</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">New Inquiries</span>
              <div className="text-3xl font-black text-amber-600 font-display mt-1">{stats.newCount}</div>
              <span className="text-[11px] font-semibold text-amber-600">Needs partner review</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">In Progress</span>
              <div className="text-3xl font-black text-blue-600 font-display mt-1">{stats.contacted}</div>
              <span className="text-[11px] font-semibold text-blue-600">Contacted / Briefing</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Converted Clients</span>
              <div className="text-3xl font-black text-emerald-600 font-display mt-1">{stats.won}</div>
              <span className="text-[11px] font-semibold text-emerald-600">Retainers active</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client name, mobile, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'WON', 'LOST'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors ${
                  statusFilter === st 
                    ? 'bg-[#16222d] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

        </div>

        {/* Interactive Leads Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                  <th className="py-4 px-6">Client Details</th>
                  <th className="py-4 px-6">Direct Actions</th>
                  <th className="py-4 px-6">Requested Practice</th>
                  <th className="py-4 px-6">Notes / Requirements</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-slate-400">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-amber-500" />
                      Loading live consultation records...
                    </td>
                  </tr>
                ) : filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-slate-400">
                      No meeting requests match your current filters.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                      
                      {/* Client Name & Email */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-slate-900 text-sm">{lead.name || 'Anonymous Client'}</div>
                        {lead.email && (
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{lead.email}</span>
                          </div>
                        )}
                      </td>

                      {/* Phone & Direct Actions */}
                      <td className="py-4 px-6">
                        <div className="font-mono font-bold text-slate-800 text-xs mb-1.5">
                          {lead.phone || 'No phone'}
                        </div>
                        <div className="flex items-center gap-2">
                          {lead.phone && (
                            <>
                              <a
                                href={`tel:${lead.phone}`}
                                className="inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded text-[11px] font-bold transition-colors"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Call</span>
                              </a>
                              <a
                                href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${lead.name || ''}, this is the Managing Partner from Bharat Advisory regarding your ${lead.service || 'consulting'} inquiry.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[11px] font-bold transition-colors"
                              >
                                <MessageSquare className="w-3 h-3 text-emerald-600" />
                                <span>WhatsApp</span>
                              </a>
                            </>
                          )}
                        </div>
                      </td>

                      {/* Service */}
                      <td className="py-4 px-6">
                        <span className="inline-block bg-amber-50 text-amber-800 border border-amber-200/80 font-bold px-2.5 py-1 rounded-md text-[11px]">
                          {lead.service || 'General Advisory'}
                        </span>
                      </td>

                      {/* Message */}
                      <td className="py-4 px-6 max-w-xs">
                        <p className="text-slate-600 line-clamp-2 text-xs leading-relaxed">
                          {lead.message || lead.requirement || 'No specifics provided.'}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 whitespace-nowrap text-slate-500 text-[11px]">
                        {lead.created_at ? new Date(lead.created_at).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        }) : 'Recent'}
                      </td>

                      {/* Interactive Status Selector */}
                      <td className="py-4 px-6">
                        <select
                          value={lead.status || 'NEW'}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border transition-colors cursor-pointer ${
                            (lead.status || 'NEW') === 'NEW' 
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : lead.status === 'CONTACTED'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : lead.status === 'WON'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          <option value="NEW">🟡 NEW</option>
                          <option value="CONTACTED">🔵 CONTACTED</option>
                          <option value="QUALIFIED">🟣 QUALIFIED</option>
                          <option value="PROPOSAL_SENT">🟠 PROPOSAL SENT</option>
                          <option value="WON">🟢 WON</option>
                          <option value="LOST">⚪ LOST</option>
                        </select>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
            <span>Showing {filteredLeads.length} of {leads.length} total records</span>
            <span>Last synchronized: {lastRefreshed.toLocaleTimeString()}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
