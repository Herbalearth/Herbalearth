import React from 'react';

interface BottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    {
      id: 'home-about-us',
      label: 'Home',
      icon: 'eco',
      path: 'home-about-us'
    },
    {
      id: 'about-us',
      label: 'About Us',
      icon: 'corporate_fare',
      path: 'about-us'
    },
    {
      id: 'rd-quality-labs',
      label: 'Food Lab',
      icon: 'biotech',
      path: 'rd-quality-labs'
    },
    {
      id: 'contact-inquiry',
      label: 'Contact',
      icon: 'contact_support',
      path: 'contact-inquiry'
    }
  ];

  return (
    <nav 
      className="bottom-nav fixed bottom-0 w-full z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-[#FFFFFF]/98 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.08)] border-t border-[#1B4D1C]/20 lg:hidden"
      data-active-classes="text-primary font-semibold"
    >
      <div className="h-16 px-1 xs:px-2 max-w-7xl mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onSelectTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`min-h-[48px] min-w-[44px] flex-1 flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer touch-manipulation active:scale-95 relative py-1 ${
                isActive
                  ? 'text-[#1B4D1C] font-bold'
                  : 'text-[#4F5E45] hover:text-[#171D13]'
              }`}
              data-path={tab.path}
            >
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-[#1B4D1C] rounded-full" />
              )}
              <span className={`material-symbols-outlined text-[22px] transition-transform ${isActive ? 'scale-110' : ''}`}>
                {tab.icon}
              </span>
              <span className="font-label-data-sm text-[10px] xs:text-[11px] tracking-tight text-center leading-tight whitespace-nowrap font-bold">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
