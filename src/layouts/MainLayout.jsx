import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { MobileBottomBar } from '../components/common/MobileBottomBar';
import { FloatingWhatsApp } from '../components/common/FloatingWhatsApp';
import { CookieConsent } from '../components/common/CookieConsent';
import { ConsultationModal } from '../components/lead/ConsultationModal';

export const MainLayout = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleOpenConsultation = (serviceId = null) => {
    setSelectedServiceId(serviceId);
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Main Sticky Navbar (Top-0) */}
      <Navbar onOpenConsultation={() => handleOpenConsultation(null)} />

      {/* Main Page Outlet */}
      <main className="flex-grow">
        <Outlet context={{ openConsultation: handleOpenConsultation }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <MobileBottomBar onOpenConsultation={() => handleOpenConsultation(null)} />
      <CookieConsent />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
        preselectedServiceId={selectedServiceId}
      />

    </div>
  );
};
