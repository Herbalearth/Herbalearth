import React, { useState } from 'react';

interface HeaderProps {
  currentTab: string;
  onNavigateTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigateTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getTabTitle = () => {
    switch (currentTab) {
      case 'home-about-us':
        return 'Home';
      case 'about-us':
      case 'manufacturing-unit':
        return 'About Us';
      case 'rd-quality-labs':
        return 'Food & Nutra Testing Lab (Bhawana)';
      case 'contact-inquiry':
        return 'Commercial Desk';
      default:
        return 'Home';
    }
  };

  const navItems = [
    { id: 'home-about-us', label: 'Home & Portfolio', icon: 'spa' },
    { id: 'about-us', label: 'About Us', icon: 'corporate_fare' },
    { id: 'rd-quality-labs', label: 'Food & Nutra Lab', icon: 'biotech' },
    { id: 'contact-inquiry', label: 'Commercial Desk', icon: 'request_quote' }
  ];

  const handleSelectTab = (tabId: string) => {
    onNavigateTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-surface/98 backdrop-blur-xl pt-safe shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-[#1B4D1C]/25">
      <div className="min-h-[4.25rem] xs:min-h-[4.75rem] sm:min-h-[5.5rem] md:min-h-[6.25rem] px-3 sm:px-6 max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 py-2">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleSelectTab('home-about-us')}
          className="flex items-center gap-2 sm:gap-3.5 cursor-pointer group shrink min-w-0"
        >
          <div className="bg-[#FFFFFF] p-1 xs:p-1.5 sm:p-2 border-2 border-[#1B4D1C] shadow-sm flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <img
              alt="Herbal Earth Logo"
              className="h-9 xs:h-11 sm:h-16 md:h-20 w-auto object-contain shrink-0 drop-shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_WCRS6MzV4ARDL4d0_VJPsZ81F_ksVEOtwKn5W8xuGWnjZffCk1cJGPiClC6MpSq22pUJCLmMtRaCreP8igaloHZcIjl1vEZ7letBZcQCwKdY8pIyH7F9k0_eTLY9K6KubhKRJHhd_Q1DZ5Va_I3y3gnG8BzOUxx0RBfHJLI9s4IFhG6rYgXdcHPu2nxyDsKCZ1gSPgQDrHHgwH65lQ0uo4aR1R-t4LwGrZYb3v4sNaOcPELMK5_uCkqZenOpnYcrQSQ"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-headline-sm text-[13px] xs:text-[15px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-tight text-[#1B4D1C] font-extrabold tracking-tight truncate sm:whitespace-normal">
              Herbal Earth Nutraceuticals
            </span>
            <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
              <span className="font-code-spec text-[10px] xs:text-[11px] sm:text-[13px] md:text-[15px] uppercase tracking-wider text-[#1B4D1C] font-bold truncate">
                {getTabTitle()}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {navItems.map((item) => {
            const isActive = currentTab === item.id || (item.id === 'about-us' && currentTab === 'manufacturing-unit');
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`px-3.5 py-2 text-[13px] font-label-data-sm uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#1B4D1C] text-[#FFFFFF] shadow-xs'
                    : 'text-[#2C3823] hover:text-[#1B4D1C] hover:bg-[#F2F7E6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          <a
            href="tel:+919289797357"
            className="ml-2 px-3.5 py-2 bg-[#FAFDF5] border border-[#1B4D1C]/40 text-[#1B4D1C] text-[12px] font-code-spec font-bold flex items-center hover:bg-[#1B4D1C] hover:text-[#FFFFFF] transition-colors"
          >
            <span>+91-9289797357</span>
          </a>
        </div>

        {/* Mobile Navigation Hamburger Button */}
        <div className="flex lg:hidden items-center shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="w-10 h-10 flex items-center justify-center bg-[#FAFDF5] border border-[#1B4D1C]/40 text-[#1B4D1C] cursor-pointer active:scale-95 transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay to close when tapped outside */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[4.25rem] xs:top-[4.75rem] bg-black/40 backdrop-blur-xs z-30 lg:hidden"
            aria-hidden="true"
          />
          <div className="relative z-40 lg:hidden w-full bg-[#FFFFFF] border-b-2 border-[#1B4D1C] shadow-2xl px-4 py-4 animate-in slide-in-from-top-2 duration-200 flex flex-col gap-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#E0E8D0]">
              <span className="font-code-spec text-[11px] uppercase font-bold text-[#8A5025] tracking-wider">
                Navigation Menu
              </span>
              <span className="font-code-spec text-[10px] text-[#4E662F] font-semibold">
                CIN: U24290PB2023PTC057589
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {navItems.map((item) => {
                const isActive = currentTab === item.id || (item.id === 'about-us' && currentTab === 'manufacturing-unit');
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTab(item.id)}
                    className={`flex items-center justify-between p-3 text-left font-label-data-sm text-[13px] uppercase tracking-wider font-bold transition-all min-h-[48px] border touch-manipulation active:scale-[0.99] ${
                      isActive
                        ? 'bg-[#1B4D1C] text-[#FFFFFF] border-[#1B4D1C] shadow-xs'
                        : 'bg-[#FAFDF5] text-[#171D13] border-[#E0E8D0] hover:bg-[#EAF2DA]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-[#FFFFFF]' : 'text-[#1B4D1C]'}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-[18px] opacity-70">
                      chevron_right
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Action Buttons on Mobile */}
            <div className="pt-2 border-t border-[#E0E8D0] flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-code-spec">
                <a
                  href="tel:+919289797357"
                  className="py-2.5 px-2 bg-[#FAFDF5] border border-[#CCD8B8] text-[#171D13] font-bold hover:text-[#1B4D1C] flex items-center justify-center gap-1.5 min-h-[44px] touch-manipulation active:scale-95"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#1B4D1C]">call</span>
                  <span className="text-[12px]">+91-9289797357</span>
                </a>
                <a
                  href="mailto:bd@herbalearthindia.com"
                  className="py-2.5 px-2 bg-[#FAFDF5] border border-[#CCD8B8] text-[#171D13] font-bold hover:text-[#1B4D1C] flex items-center justify-center gap-1.5 min-h-[44px] touch-manipulation active:scale-95 truncate"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#1B4D1C]">mail</span>
                  <span className="truncate text-[12px]">Email BD</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
