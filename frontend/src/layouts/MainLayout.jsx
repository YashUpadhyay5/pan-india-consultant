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
      
      {/* Main Sticky Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation(null)} />

      {/* Main Page Outlet with safe mobile bottom clearance for MobileBottomBar */}
      <main className="flex-grow pb-16 lg:pb-0">
        <Outlet context={{ openConsultation: handleOpenConsultation }} />
      </main>

      {/* Global Footer */}
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
