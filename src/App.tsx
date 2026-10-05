/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { LabsScreen } from './components/LabsScreen';
import { ContactScreen } from './components/ContactScreen';
import { CoaModal } from './components/CoaModal';
import { BotanicalExtract } from './types';
import { BOTANICAL_EXTRACTS } from './data/extracts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home-about-us');
  const [coaModalExtract, setCoaModalExtract] = useState<BotanicalExtract | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenCoaModal = (extract: BotanicalExtract) => {
    setCoaModalExtract(extract);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-secondary-container selection:text-on-secondary-container relative w-full max-w-full overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-4 right-4 max-w-md mx-auto z-50 bg-secondary text-on-secondary p-space-xs font-label-data-sm text-[12px] text-center shadow-lg border border-primary flex items-center justify-between gap-space-xs animate-in slide-in-from-top-3 duration-200">
          <div className="flex items-center gap-space-2xs text-left">
            <span className="material-symbols-outlined text-[18px] text-primary-fixed">verified</span>
            <span>{toastMessage}</span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:opacity-80 text-on-secondary cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onNavigateTab={setCurrentTab}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col relative w-full pt-[5.75rem] xs:pt-[6.25rem] sm:pt-[6.5rem] md:pt-[7rem] pb-24 sm:pb-28 lg:pb-12 bg-surface">
        {currentTab === 'home-about-us' && (
          <HomeScreen
            onNavigateTab={setCurrentTab}
            onOpenCoaModal={handleOpenCoaModal}
            onToast={showToast}
          />
        )}

        {(currentTab === 'about-us' || currentTab === 'manufacturing-unit') && (
          <AboutScreen
            onNavigateTab={setCurrentTab}
          />
        )}

        {currentTab === 'rd-quality-labs' && (
          <LabsScreen
            onOpenCoaModal={handleOpenCoaModal}
            onToast={showToast}
          />
        )}

        {currentTab === 'contact-inquiry' && (
          <ContactScreen
            onToast={showToast}
          />
        )}
      </main>

      {/* Sticky Bottom Navigation Bar */}
      <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Certificate of Analysis (COA) Inspector Modal */}
      {coaModalExtract && (
        <CoaModal
          extract={coaModalExtract}
          onClose={() => setCoaModalExtract(null)}
          onToast={showToast}
        />
      )}
    </div>
  );
}
