import React, { useState } from 'react';
import { BOTANICAL_EXTRACTS } from '../data/extracts';
import { BotanicalExtract } from '../types';

interface HomeScreenProps {
  onNavigateTab: (tab: string) => void;
  onOpenCoaModal: (extract: BotanicalExtract) => void;
  onToast: (msg: string) => void;
}

interface ProductItem {
  name: string;
  spec: string;
  origin: string;
  cas: string;
  category: 'botanical' | 'bioactive' | 'enzymes' | 'proteins_fibers';
}

const NUTRACEUTICAL_PORTFOLIO_ITEMS: ProductItem[] = [
  { name: 'Ashwagandha', spec: 'Standardized Withanolides ≥ 2.5% – 5.0% HPLC', origin: 'Botanical Extract', cas: '90147-43-6', category: 'botanical' },
  { name: 'Bacopa', spec: 'Total Bacosides A & B ≥ 20.0% – 50.0%', origin: 'Botanical Extract', cas: '93165-02-7', category: 'botanical' },
  { name: 'Milk thistle', spec: 'Silymarin Complex ≥ 80.0% UV / HPLC', origin: 'Botanical Extract', cas: '84604-20-6', category: 'botanical' },
  { name: 'Aloe Vera', spec: 'Aloin-Free / Polysaccharides ≥ 10.0%', origin: 'Botanical Extract', cas: '85507-69-3', category: 'botanical' },
  { name: 'Grape Seed', spec: 'Proanthocyanidins (OPC) ≥ 95.0%', origin: 'Botanical Extract', cas: '84929-27-1', category: 'botanical' },
  { name: 'Boswellia 65%', spec: 'Total Boswellic Acids ≥ 65.0% Titration', origin: 'Botanical Extract', cas: '97952-72-2', category: 'botanical' },
  { name: 'Boswellia AKBA 30%', spec: 'AKBA ≥ 30.0% HPLC High Potency', origin: 'Standardized Fraction', cas: '67416-61-9', category: 'botanical' },
  { name: 'Green Coffee Extract 45%', spec: 'Total Chlorogenic Acids ≥ 45.0% HPLC', origin: 'Botanical Extract', cas: '327-97-9', category: 'botanical' },
  { name: 'Banaba 1%', spec: 'Corosolic Acid ≥ 1.0% HPLC', origin: 'Botanical Extract', cas: '4547-24-4', category: 'botanical' },
  { name: 'Banaba 20%', spec: 'Corosolic Acid ≥ 20.0% HPLC', origin: 'Botanical Extract', cas: '4547-24-4', category: 'botanical' },
  { name: 'Ginkgo Extract 24%', spec: 'Ginkgo Flavone Glycosides ≥ 24.0% / Terpenes ≥ 6.0%', origin: 'USP / EP Grade', cas: '90045-36-6', category: 'botanical' },
  { name: 'Ginseng 4% UV', spec: 'Total Ginsenosides ≥ 4.0% by UV-Vis', origin: 'Botanical Extract', cas: '50647-08-0', category: 'botanical' },
  { name: 'Glutathione Plain 98%', spec: 'Reduced L-Glutathione (GSH) ≥ 98.0% HPLC', origin: 'Bio-Fermented', cas: '70-18-8', category: 'bioactive' },
  { name: 'Hyaluronic Acid', spec: 'Sodium Hyaluronate ≥ 95.0% (Food & Cosmetic)', origin: 'Microbial Fermentation', cas: '9067-32-7', category: 'enzymes' },
  { name: 'Collagen Mol. Wt. 500-1000 dalton', spec: 'Hydrolyzed Peptides Protein ≥ 90.0% (Type I & III)', origin: 'Bio-Peptides', cas: '9007-34-5', category: 'enzymes' },
  { name: 'Lutein 5%', spec: 'Natural Lutein Free/Esterified ≥ 5.0% HPLC', origin: 'Natural Carotenoid', cas: '127-40-2', category: 'bioactive' },
  { name: 'Lycopene 10% UV', spec: 'Natural Lycopene ≥ 10.0% by UV-Vis', origin: 'Natural Carotenoid', cas: '502-65-8', category: 'bioactive' },
  { name: 'Astaxanthin 10% powder UV', spec: 'Natural Astaxanthin (H. pluvialis) ≥ 10.0% UV', origin: 'Microalgae Carotenoid', cas: '472-61-7', category: 'bioactive' },
  { name: 'CoQ10', spec: 'Coenzyme Q10 (Ubiquinone) ≥ 98.0% – 101.0%', origin: 'USP / EP Grade', cas: '303-98-0', category: 'bioactive' },
  { name: 'Bromelain 2400 GDU', spec: 'Proteolytic Activity ≥ 2,400 GDU/g', origin: 'Enzymatic Isolate', cas: '9001-00-7', category: 'enzymes' },
  { name: 'Bromelain 1200 GDU', spec: 'Proteolytic Activity ≥ 1,200 GDU/g', origin: 'Enzymatic Isolate', cas: '9001-00-7', category: 'enzymes' },
  { name: 'MucoPolysaccharides Bovine', spec: 'Glycosaminoglycans (Chondroitin) ≥ 90.0%', origin: 'USP Standard', cas: '9082-07-9', category: 'enzymes' },
  { name: 'Shilajit Extract 50% Powder', spec: 'Fulvic Acid ≥ 50.0% Gravimetric / Titration', origin: 'Himalayan Purified', cas: '479-66-3', category: 'botanical' },
  { name: 'Shilajit 75% Powder', spec: 'Fulvic Acid ≥ 75.0% High-Purity Assay', origin: 'Himalayan Purified', cas: '479-66-3', category: 'botanical' },
  { name: 'Berberine 95%', spec: 'Berberine Hydrochloride ≥ 95.0% HPLC', origin: 'Phyto-Isolate', cas: '633-65-8', category: 'botanical' },
  { name: 'Berberine 60%', spec: 'Berberine Hydrochloride ≥ 60.0% HPLC', origin: 'Botanical Extract', cas: '633-65-8', category: 'botanical' },
  { name: 'Turmeric 95%', spec: 'Total Curcuminoids ≥ 95.0% HPLC', origin: 'Standardized Extract', cas: '458-37-7', category: 'botanical' },
  { name: 'Black pepper Extract 95%', spec: 'Piperine ≥ 95.0% HPLC Bioavailability Enhancer', origin: 'Standardized Phyto-Active', cas: '94-62-2', category: 'botanical' },
  { name: 'DHA powder 10%', spec: 'Docosahexaenoic Acid (Omega-3 DHA) ≥ 10.0%', origin: 'Algal / Lipid Powder', cas: '6217-54-5', category: 'bioactive' },
  { name: 'DHA Powder 20%', spec: 'Docosahexaenoic Acid (Omega-3 DHA) ≥ 20.0%', origin: 'Algal / Lipid Powder', cas: '6217-54-5', category: 'bioactive' },
  { name: 'Pea Protein 80%', spec: 'Crude Protein ≥ 80.0% (Dry Basis, Non-GMO)', origin: 'Plant Protein Isolate', cas: '90082-41-0', category: 'proteins_fibers' },
  { name: 'Pea Protein 85%', spec: 'Crude Protein ≥ 85.0% (Dry Basis, Non-GMO)', origin: 'Plant Protein Isolate', cas: '90082-41-0', category: 'proteins_fibers' },
  { name: 'Rose Hip Extract 50%', spec: 'Natural Vitamin C / Polyphenols ≥ 50.0%', origin: 'Botanical Extract', cas: '84696-47-9', category: 'botanical' },
  { name: 'Dates Powder', spec: '100% Dehydrated Date Fruit, Natural Fiber', origin: 'Superfood Powder', cas: '90027-90-0', category: 'proteins_fibers' },
  { name: 'Amla Fiber', spec: 'Dietary Fiber ≥ 60.0% with Natural Tannins', origin: 'Botanical Fiber', cas: '90028-28-7', category: 'proteins_fibers' },
  { name: 'Guargum', spec: 'Galactomannan Viscosity 5000–6000 cps', origin: 'Natural Hydrocolloid', cas: '9000-30-0', category: 'proteins_fibers' }
];

const PORTFOLIO_CATEGORIES = [
  { id: 'all', title: 'All Ingredients (36)', subtitle: 'Complete commercial portfolio of validated standardized nutraceutical ingredients', icon: 'apps' },
  { id: 'botanical', title: 'Botanical Extracts (19)', subtitle: 'Standardized phyto-actives & herbal extracts verified by HPLC & UV', icon: 'eco' },
  { id: 'bioactive', title: 'Bioactives & Antioxidants (7)', subtitle: 'High-purity cellular antioxidants, carotenoids & microencapsulated omega lipids', icon: 'auto_awesome' },
  { id: 'enzymes', title: 'Enzymes & Peptides (5)', subtitle: 'Proteolytic enzymes, collagen peptides, and structural mucopolysaccharides', icon: 'biotech' },
  { id: 'proteins_fibers', title: 'Proteins & Fibers (5)', subtitle: 'Non-GMO plant protein isolates, date powder, amla fiber & guar gum', icon: 'nutrition' }
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onOpenCoaModal,
  onToast
}) => {
  // Product category tab selector & search
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const tabsScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Commercial form state
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [targetCategory, setTargetCategory] = useState('Standardized Botanical Extracts');
  const [procureEmail, setProcureEmail] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const subject = encodeURIComponent(`B2B Quotation Request: ${orgName || 'Commercial Inquiry'}`);
    const bodyContent = [
      `HERBAL EARTH NUTRACEUTICALS - B2B INGREDIENTS QUOTATION REQUEST`,
      `-------------------------------------------------------------`,
      `Enterprise / Brand Name: ${orgName}`,
      `Contact Person: ${contactPerson}`,
      `Corporate Work Email: ${procureEmail}`,
      `Target Category: ${targetCategory}`,
      `Destination / Terms: ${destinationCountry || 'FOB / CIF Pending'}`,
      `Active Assay / Details: ${message || 'Standard Dossier Required'}`,
      `-------------------------------------------------------------`,
      `Recipient: bd@herbalearthindia.com`
    ].join('\n');

    const mailtoUrl = `mailto:bd@herbalearthindia.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    
    // Open default mail client with prepopulated draft
    window.location.href = mailtoUrl;

    onToast(`Request prepared and submitted to bd@herbalearthindia.com for ${orgName || 'your enterprise'}.`);
    
    setTimeout(() => {
      setFormSubmitted(false);
      setOrgName('');
      setContactPerson('');
      setProcureEmail('');
      setDestinationCountry('');
      setMessage('');
    }, 5000);
  };

  const filteredPortfolioItems = NUTRACEUTICAL_PORTFOLIO_ITEMS.filter((item) => {
    const matchesTab = activeCategoryTab === 'all' || item.category === activeCategoryTab;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.spec.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const activeCategoryMeta =
    PORTFOLIO_CATEGORIES.find((c) => c.id === activeCategoryTab) || PORTFOLIO_CATEGORIES[0];

  return (
    <div className="flex flex-col w-full text-on-surface bg-surface">
      {/* Hero Section (NutraNova Global Style Sourcing & Supply Platform) */}
      <section className="relative w-full bg-gradient-to-b from-[#F2F7E6] via-[#FAFDF5] to-[#FFFFFF] px-gutter-mobile py-space-xl sm:py-space-2xl border-b border-[#D2DEC0]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-space-xl justify-between">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="flex-1 flex flex-col gap-space-md text-left max-w-2xl">
            {/* Main Headline */}
            <div className="flex flex-col gap-space-xs">
              <span className="inline-block self-start px-space-xs py-1 bg-[#1B4D1C] text-[#FFFFFF] font-code-spec text-[10px] sm:text-[11px] uppercase tracking-wider font-bold shadow-xs">
                Premium B2B Nutraceutical Raw Materials
              </span>
              <h1 className="font-headline-lg text-[26px] xs:text-[32px] sm:text-[42px] md:text-[46px] leading-[1.18] text-[#171D13] font-bold tracking-tight break-words">
                Your Trusted Partner for <span className="text-[#1B4D1C]">Standardized Botanical Extracts</span> &amp; Functional Ingredients
              </h1>
              <p className="font-body-lg text-[14px] sm:text-[16px] text-[#333E2B] leading-relaxed">
                Herbal Earth Nutraceuticals is a premier B2B ingredients partner and global supplier providing verified botanical extracts, high-potency bioactives, vitamins, amino acids, and clinical formulations to dietary supplement, functional food, and pharmaceutical leaders worldwide.
              </p>
            </div>

            {/* Launchpad Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 pt-1">
              {/* Primary Button - Ingredients */}
              <button
                onClick={() => {
                  const el = document.getElementById('portfolio-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-space-md py-space-sm bg-[#1B4D1C] text-[#FFFFFF] font-label-data-sm text-[12px] uppercase tracking-wider font-bold shadow-md hover:bg-[#345300] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">spa</span>
                <span>Ingredients</span>
              </button>

              {/* Outline Button - Get Custom Quote */}
              <button
                onClick={() => {
                  const el = document.getElementById('procurement-desk');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigateTab('contact-inquiry');
                  }
                }}
                className="px-space-md py-space-sm bg-[#FFFFFF] text-[#1B4D1C] border-2 border-[#1B4D1C] font-label-data-sm text-[12px] uppercase tracking-wider font-bold hover:bg-[#F2F7E6] transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">request_quote</span>
                <span>Get Custom Quote</span>
              </button>

              {/* Last Button - Commercial Enquiry */}
              <button
                onClick={() => onNavigateTab('contact-inquiry')}
                className="px-space-md py-space-sm bg-[#532600] text-[#FFFFFF] font-label-data-sm text-[12px] uppercase tracking-wider font-bold shadow-md hover:bg-[#6E3300] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Commercial Enquiry</span>
              </button>
            </div>
          </div>

          {/* Right Column: Ingredients & Quality Credentials Card (No Manufacturing Plant Machinery) */}
          <div className="w-full lg:w-[460px] flex flex-col gap-space-xs">
            <div className="bg-[#FFFFFF] p-space-md border-2 border-[#1B4D1C]/25 shadow-xl relative flex flex-col gap-space-sm">
              <div className="flex items-center justify-between border-b border-[#D2DEC0] pb-space-xs">
                <span className="font-code-spec text-[11px] uppercase tracking-wider text-[#8A5025] font-bold">
                  Quality &amp; Supply Assured
                </span>
                <span className="px-2 py-0.5 bg-[#1B4D1C] text-[#FFFFFF] font-code-spec text-[10px] uppercase font-bold">
                  Verified B2B Supplier
                </span>
              </div>

              <div className="bg-[#FAFDF5] p-space-sm border border-[#D2DEC0] flex flex-col gap-2">
                <span className="font-headline-sm text-[16px] sm:text-[17px] text-[#171D13] font-bold">
                  End-to-End Nutraceutical Ingredients Solutions
                </span>
                <p className="font-body-sm text-[12px] text-[#333E2B] leading-relaxed">
                  From raw botanical harvest identification to final standardized assay testing, we supply authenticated bulk ingredients with full regulatory documentation (COA, MSDS, Technical Specifications, and Allergen Statements).
                </p>
              </div>

              {/* High-Impact Stat Grid */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center font-code-spec">
                <div className="p-1.5 sm:p-2 bg-[#F5FCE8] border border-[#C9D9B2] flex flex-col justify-center">
                  <span className="text-[17px] sm:text-[20px] font-bold text-[#1B4D1C] block leading-tight">36+</span>
                  <span className="text-[9px] sm:text-[10px] text-[#4E662F] uppercase font-semibold leading-tight mt-0.5">Active Products</span>
                </div>
                <div className="p-1.5 sm:p-2 bg-[#FDF5ED] border border-[#E9C8AD] flex flex-col justify-center">
                  <span className="text-[17px] sm:text-[20px] font-bold text-[#8A5025] block leading-tight">99.8%</span>
                  <span className="text-[9px] sm:text-[10px] text-[#8A5025] uppercase font-semibold leading-tight mt-0.5">Consistency</span>
                </div>
                <div className="p-1.5 sm:p-2 bg-[#F5FCE8] border border-[#C9D9B2] flex flex-col justify-center">
                  <span className="text-[17px] sm:text-[20px] font-bold text-[#1B4D1C] block leading-tight">100%</span>
                  <span className="text-[9px] sm:text-[10px] text-[#4E662F] uppercase font-semibold leading-tight mt-0.5">Traceability</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comprehensive Product Portfolio Showcase (Modeled after NutraNova Global Product Range) */}
      <section id="portfolio-section" className="w-full bg-[#FAFDF5] px-gutter-mobile py-space-xl border-b border-[#D2DEC0]">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          {/* Section Heading */}
          <div className="flex flex-col gap-space-2xs text-center max-w-3xl mx-auto">
            <span className="font-code-spec text-[11px] uppercase tracking-widest text-[#8A5025] font-bold">
              Comprehensive Ingredient Portfolio
            </span>
            <h2 className="font-headline-lg text-[24px] xs:text-[28px] sm:text-[36px] text-[#171D13] font-bold">
              Explore Our Diverse Range of Nutraceutical Ingredients
            </h2>
            <p className="font-body-md text-[13px] sm:text-[14px] text-[#4E662F]">
              Direct commercial supply of 36 standardized botanical extracts, high-purity bioactives, proteolytic enzymes, plant proteins, and functional superfoods with batch-certified HPLC and analytical assay specs.
            </p>
          </div>

          {/* Category Tabs: Streamlined Responsive Horizontal Swipe Bar */}
          <div className="relative w-full">
            <div 
              ref={tabsScrollRef}
              className="flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 border-b border-[#D2DEC0] scroll-smooth w-full no-scrollbar -mx-1 px-1 sm:mx-0 sm:px-0 touch-pan-x"
            >
              {PORTFOLIO_CATEGORIES.map((cat) => {
                const isActive = activeCategoryTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryTab(cat.id)}
                    className={`shrink-0 min-h-[42px] px-3 sm:px-4 py-2 font-label-data-sm text-[11px] sm:text-[12px] uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 sm:gap-2 touch-manipulation active:scale-95 ${
                      isActive
                        ? 'bg-[#1B4D1C] text-[#FFFFFF] font-bold shadow-sm border-2 border-[#1B4D1C]'
                        : 'bg-[#FFFFFF] text-[#2C3823] border border-[#CCD8B8] hover:bg-[#EAF2DA] hover:border-[#1B4D1C]/40'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[16px] sm:text-[18px] ${isActive ? 'text-[#FFFFFF]' : 'text-[#1B4D1C]'}`}>
                      {cat.icon}
                    </span>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Header & Search Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#FFFFFF] p-3.5 sm:p-4 border border-[#D2DEC0] shadow-xs">
            <div className="flex flex-col min-w-0">
              <h3 className="font-headline-sm text-[18px] sm:text-[20px] text-[#171D13] font-bold flex items-center flex-wrap gap-2">
                <span>{activeCategoryMeta.title}</span>
                <span className="text-[11px] sm:text-[12px] font-code-spec text-[#8A5025] font-semibold bg-[#F5FCEA] px-2 py-0.5 border border-[#CCD8B8]/60 inline-flex items-center">
                  {filteredPortfolioItems.length} available
                </span>
              </h3>
              <span className="font-body-sm text-[12px] sm:text-[13px] text-[#4E662F] leading-snug mt-0.5">
                {activeCategoryMeta.subtitle}
              </span>
            </div>

            {/* Quick Search Input */}
            <div className="flex items-center gap-2 w-full md:w-80 shrink-0">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search ingredient or spec..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 sm:py-2 bg-[#FAFDF5] text-[#171D13] border border-[#CCD8B8] text-[16px] sm:text-[13px] focus:outline-none focus:border-[#1B4D1C] focus:ring-1 focus:ring-[#1B4D1C]/30 min-h-[44px]"
                />
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-[#4E662F] pointer-events-none">
                  search
                </span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#8A5025] hover:text-[#532600] text-[14px] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Product Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm">
            {filteredPortfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-space-sm border border-[#C9D6B5] hover:border-[#1B4D1C] shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-space-xs group"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <span className="px-1.5 py-0.5 bg-[#F2F7E6] text-[#1B4D1C] font-code-spec text-[10px] font-bold uppercase border border-[#D2DEC0]">
                      {item.origin}
                    </span>
                    <span className="font-code-spec text-[10px] text-[#8A5025] font-bold uppercase">
                      Pure Active
                    </span>
                  </div>

                  <h4 className="font-headline-sm text-[16px] sm:text-[17px] text-[#171D13] font-bold group-hover:text-[#1B4D1C] transition-colors">
                    {item.name}
                  </h4>

                  <div className="bg-[#FAFDF5] p-2 border border-[#E0E8D0] text-[12px] font-code-spec mt-1">
                    <span className="text-[#647155] uppercase text-[10px] block font-semibold">Standardized Spec:</span>
                    <span className="text-[#1B4D1C] font-bold">{item.spec}</span>
                  </div>
                </div>

                <div className="mt-auto pt-2.5 border-t border-[#EAF2DA] flex items-center justify-between text-[11px] font-code-spec flex-wrap gap-1">
                  <span className="text-[#647155] font-semibold">
                    CAS: {item.cas}
                  </span>
                  <span className="text-[#1B4D1C] font-bold">
                    Standardized Active
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredPortfolioItems.length === 0 && (
            <div className="p-space-lg bg-[#FFFFFF] border border-[#CCD8B8] text-center flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[32px] text-[#8A5025]">search_off</span>
              <span className="font-headline-sm text-[16px] text-[#171D13] font-bold">
                No ingredient matching &quot;{searchQuery}&quot;
              </span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryTab('all');
                }}
                className="mt-1 px-3 py-1 bg-[#1B4D1C] text-[#FFFFFF] text-[11px] font-code-spec uppercase font-bold"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Herbal Earth (Value Proposition / NutraNova Global Model) */}
      <section className="w-full bg-[#FFFFFF] px-gutter-mobile py-space-xl border-b border-[#D2DEC0]">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-2xs text-center max-w-3xl mx-auto">
            <span className="font-code-spec text-[11px] uppercase tracking-widest text-[#1B4D1C] font-bold">
              Core Competencies
            </span>
            <h2 className="font-headline-lg text-[28px] sm:text-[36px] text-[#171D13] font-bold">
              Why Global Brands Choose Herbal Earth as Ingredients Partner
            </h2>
            <p className="font-body-md text-[14px] text-[#4E662F]">
              Combining Himalayan agricultural direct partnerships with modern zero-emission extraction engineering and international regulatory rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {/* Feature 1 */}
            <div className="p-space-md bg-[#FAFDF5] border-2 border-[#D2DEC0] flex flex-col gap-space-xs hover:border-[#1B4D1C] transition-colors">
              <div className="w-12 h-12 bg-[#1B4D1C] text-[#FFFFFF] flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-[26px]">energy_savings_leaf</span>
              </div>
              <h3 className="font-headline-sm text-[19px] text-[#171D13] font-bold">
                1. Himalayan Bio-Corridor Source
              </h3>
              <p className="font-body-sm text-[13px] text-[#333E2B] leading-relaxed">
                Direct farm-gate aggregation across Kumaon and Garhwal regions. Raw botanicals harvested at peak therapeutic potency enter our extraction lines within 18 hours of harvest.
              </p>
              <span className="font-code-spec text-[11px] text-[#8A5025] font-bold mt-auto">
                100% Geo-Tagged Harvest
              </span>
            </div>

            {/* Feature 2 */}
            <div className="p-space-md bg-[#FAFDF5] border-2 border-[#D2DEC0] flex flex-col gap-space-xs hover:border-[#8A5025] transition-colors">
              <div className="w-12 h-12 bg-[#8A5025] text-[#FFFFFF] flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-[26px]">verified</span>
              </div>
              <h3 className="font-headline-sm text-[19px] text-[#171D13] font-bold">
                2. Certified Raw Material Purity
              </h3>
              <p className="font-body-sm text-[13px] text-[#333E2B] leading-relaxed">
                All raw materials and standardized extracts comply with rigorous global pharmacopeia standards. Zero hexane, non-GMO, and guaranteed absence of harmful synthetic carriers or industrial solvents.
              </p>
              <span className="font-code-spec text-[11px] text-[#1B4D1C] font-bold mt-auto">
                100% Non-GMO &amp; Pure
              </span>
            </div>

            {/* Feature 3 */}
            <div className="p-space-md bg-[#FAFDF5] border-2 border-[#D2DEC0] flex flex-col gap-space-xs hover:border-[#1B4D1C] transition-colors">
              <div className="w-12 h-12 bg-[#2D4900] text-[#FFFFFF] flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-[26px]">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-[19px] text-[#171D13] font-bold">
                3. Stringent Analytical Quality Assurance
              </h3>
              <p className="font-body-sm text-[13px] text-[#333E2B] leading-relaxed">
                In-house Waters HPLC-PDA, GC-MS/MS, and ICP-MS testing ensure strict compliance with USP &lt;232&gt; heavy metals, USP &lt;467&gt; residual solvents, and EP 2.8.13 pesticide screening.
              </p>
              <span className="font-code-spec text-[11px] text-[#8A5025] font-bold mt-auto">
                ISO/IEC 17025 Calibrated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Formulation Formats Served (NutraNova Global model) */}
      <section className="w-full bg-[#FFFFFF] px-gutter-mobile py-space-xl border-b border-[#D2DEC0]">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-2xs text-center max-w-3xl mx-auto">
            <span className="font-code-spec text-[11px] uppercase tracking-widest text-[#8A5025] font-bold">
              Target Formulation Formats
            </span>
            <h2 className="font-headline-lg text-[28px] sm:text-[36px] text-[#171D13] font-bold">
              Industries &amp; Applications We Support
            </h2>
            <p className="font-body-md text-[14px] text-[#4E662F]">
              Engineered bulk densities, mesh profiles, and direct-compressible granules customized for brand requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-space-sm">
            <div className="p-space-sm bg-[#FAFDF5] border border-[#CCD8B8] flex flex-col items-center text-center gap-1">
              <span className="material-symbols-outlined text-[32px] text-[#1B4D1C]">pill</span>
              <span className="font-headline-sm text-[15px] font-bold text-[#171D13]">Dietary Supplements</span>
              <span className="font-body-sm text-[11px] text-[#4E662F]">Capsules, Tablets, Hardgel</span>
            </div>

            <div className="p-space-sm bg-[#FAFDF5] border border-[#CCD8B8] flex flex-col items-center text-center gap-1">
              <span className="material-symbols-outlined text-[32px] text-[#8A5025]">icecream</span>
              <span className="font-headline-sm text-[15px] font-bold text-[#171D13]">Functional Foods</span>
              <span className="font-body-sm text-[11px] text-[#4E662F]">Gummies, Bars, Fortified</span>
            </div>

            <div className="p-space-sm bg-[#FAFDF5] border border-[#CCD8B8] flex flex-col items-center text-center gap-1">
              <span className="material-symbols-outlined text-[32px] text-[#1B4D1C]">sports_gymnastics</span>
              <span className="font-headline-sm text-[15px] font-bold text-[#171D13]">Sports Nutrition</span>
              <span className="font-body-sm text-[11px] text-[#4E662F]">Isolates, BCAAs, Electrol</span>
            </div>

            <div className="p-space-sm bg-[#FAFDF5] border border-[#CCD8B8] flex flex-col items-center text-center gap-1">
              <span className="material-symbols-outlined text-[32px] text-[#8A5025]">local_drink</span>
              <span className="font-headline-sm text-[15px] font-bold text-[#171D13]">Wellness Beverages</span>
              <span className="font-body-sm text-[11px] text-[#4E662F]">Instant Soluble RTD Blends</span>
            </div>

            <div className="p-space-sm bg-[#FAFDF5] border border-[#CCD8B8] flex flex-col items-center text-center gap-1 col-span-2 md:col-span-1">
              <span className="material-symbols-outlined text-[32px] text-[#1B4D1C]">spa</span>
              <span className="font-headline-sm text-[15px] font-bold text-[#171D13]">Cosmeceuticals</span>
              <span className="font-body-sm text-[11px] text-[#4E662F]">Topical Actives &amp; Serums</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Procurement & Quote Request Desk (NutraNova Style) */}
      <section id="procurement-desk" className="w-full bg-[#FFFFFF] px-gutter-mobile py-space-xl border-b border-[#D2DEC0]">
        <div className="max-w-4xl mx-auto bg-[#FAFDF5] p-space-md sm:p-space-xl border-2 border-[#1B4D1C]/40 shadow-xl flex flex-col gap-space-md">
          <div className="flex flex-col gap-1 border-b border-[#D2DEC0] pb-space-xs">
            <span className="px-space-xs py-1 bg-[#1B4D1C] text-[#FFFFFF] font-code-spec text-[10px] uppercase font-bold self-start">
              B2B Commercial Desk
            </span>
            <h2 className="font-headline-lg text-[26px] sm:text-[32px] text-[#171D13] font-bold">
              Request Ingredients Quotation &amp; Specification Dossiers
            </h2>
            <p className="font-body-sm text-[13px] text-[#4E662F]">
              Submit your formulation requirements. Our technical sales executives reply with COA dossiers, pricing tiers, and commercial quotations within 48 business hours.
            </p>
          </div>

          <form onSubmit={handleInquirySubmit} className="flex flex-col gap-space-xs font-body-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
              <div>
                <label className="font-label-data-sm text-[11px] text-[#4E662F] uppercase block mb-1 font-bold">
                  Enterprise / Brand Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. VitaPharm Global Labs"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full bg-[#FFFFFF] p-2.5 sm:p-3 text-[16px] sm:text-[13px] text-[#171D13] border border-[#CCD8B8] focus:border-[#1B4D1C] focus:outline-none min-h-[44px]"
                />
              </div>

              <div>
                <label className="font-label-data-sm text-[11px] text-[#4E662F] uppercase block mb-1 font-bold">
                  Contact Person &amp; Role *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. Arthur Pendelton, VP Formulations"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full bg-[#FFFFFF] p-2.5 sm:p-3 text-[16px] sm:text-[13px] text-[#171D13] border border-[#CCD8B8] focus:border-[#1B4D1C] focus:outline-none min-h-[44px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
              <div>
                <label className="font-label-data-sm text-[11px] text-[#4E662F] uppercase block mb-1 font-bold">
                  Corporate Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="procurement@vitapharm.com"
                  value={procureEmail}
                  onChange={(e) => setProcureEmail(e.target.value)}
                  className="w-full bg-[#FFFFFF] p-2.5 sm:p-3 text-[16px] sm:text-[13px] text-[#171D13] border border-[#CCD8B8] focus:border-[#1B4D1C] focus:outline-none min-h-[44px]"
                />
              </div>

              <div>
                <label className="font-label-data-sm text-[11px] text-[#4E662F] uppercase block mb-1 font-bold">
                  Target Product Category
                </label>
                <select
                  value={targetCategory}
                  onChange={(e) => setTargetCategory(e.target.value)}
                  className="w-full bg-[#FFFFFF] p-2.5 sm:p-3 text-[16px] sm:text-[13px] text-[#171D13] border border-[#CCD8B8] focus:border-[#1B4D1C] focus:outline-none min-h-[44px]"
                >
                  <option value="Standardized Botanical Extracts">Standardized Botanical Extracts</option>
                  <option value="Specialty Bioactives & Antioxidants">Specialty Bioactives &amp; Antioxidants</option>
                  <option value="Enzymes, Peptides & Functional">Enzymes, Peptides &amp; Functional</option>
                  <option value="Plant Proteins & Functional Fibers">Plant Proteins &amp; Functional Fibers</option>
                  <option value="Custom Formulation & Granulation Sourcing">Custom Formulation &amp; Granulation Sourcing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-label-data-sm text-[11px] text-[#4E662F] uppercase block mb-1 font-bold">
                Destination Country / Delivery Terms
              </label>
              <input
                type="text"
                placeholder="e.g. United States (FOB Delhi or CIF New Jersey)"
                value={destinationCountry}
                onChange={(e) => setDestinationCountry(e.target.value)}
                className="w-full bg-[#FFFFFF] p-2.5 sm:p-3 text-[16px] sm:text-[13px] text-[#171D13] border border-[#CCD8B8] focus:border-[#1B4D1C] focus:outline-none min-h-[44px]"
              />
            </div>

            <div>
              <label className="font-label-data-sm text-[11px] text-[#4E662F] uppercase block mb-1 font-bold">
                Specific Active Assay / Finished Form Details
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific active marker percentages, particle mesh size (80 mesh), solubility requirements, or custom formulation specifications..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#FFFFFF] p-2.5 sm:p-3 text-[16px] sm:text-[13px] text-[#171D13] border border-[#CCD8B8] focus:border-[#1B4D1C] focus:outline-none min-h-[80px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 bg-[#1B4D1C] text-[#FFFFFF] font-label-data-sm text-[13px] uppercase tracking-widest font-bold shadow-md hover:bg-[#345300] active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Submit Request to bd@herbalearthindia.com</span>
            </button>
          </form>

          {formSubmitted && (
            <div className="p-space-sm bg-[#EAF2DA] text-[#2D4900] font-code-spec text-[12px] border-2 border-[#1B4D1C] text-center font-bold flex flex-col gap-1">
              <span>✓ Request submitted to <strong>bd@herbalearthindia.com</strong>.</span>
              <span className="text-[11px] font-normal text-[#333E2B]">
                If your email software did not launch automatically,{' '}
                <a
                  href={`mailto:bd@herbalearthindia.com?subject=B2B%20Quotation%20Request&body=Please%20find%20our%20inquiry%20details.`}
                  className="underline font-bold text-[#1B4D1C]"
                >
                  click here to email bd@herbalearthindia.com directly
                </a>.
              </span>
            </div>
          )}

          {/* Quick Hotline Call Strip */}
          <div className="bg-[#FFFFFF] p-space-sm border border-[#CCD8B8] flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[#8A5025] text-[24px]">support_agent</span>
              <div>
                <span className="font-label-data-sm text-[10px] text-[#8A5025] uppercase font-bold block">
                  Technical Sales &amp; Regulatory Direct
                </span>
                <a
                  href="tel:+919289797357"
                  className="font-code-spec text-[14px] font-bold text-[#171D13] hover:text-[#1B4D1C] transition-colors"
                >
                  +91-9289797357
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration & Compliance Footer (NutraNova Global & Herbal Earth Standard) */}
      <footer className="w-full bg-[#172109] text-[#CBD9BE] px-gutter-mobile py-space-xl border-t border-[#345300]">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Column 1: Brand & Logo */}
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs bg-[#FFFFFF] p-3.5 self-start border-2 border-[#83D617] shadow-md">
                <img
                  alt="Herbal Earth Logo"
                  className="h-24 sm:h-28 w-auto object-contain drop-shadow-xs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_WCRS6MzV4ARDL4d0_VJPsZ81F_ksVEOtwKn5W8xuGWnjZffCk1cJGPiClC6MpSq22pUJCLmMtRaCreP8igaloHZcIjl1vEZ7letBZcQCwKdY8pIyH7F9k0_eTLY9K6KubhKRJHhd_Q1DZ5Va_I3y3gnG8BzOUxx0RBfHJLI9s4IFhG6rYgXdcHPu2nxyDsKCZ1gSPgQDrHHgwH65lQ0uo4aR1R-t4LwGrZYb3v4sNaOcPELMK5_uCkqZenOpnYcrQSQ"
                />
              </div>
              <span className="font-headline-sm text-[21px] sm:text-[23px] text-[#FFFFFF] font-bold mt-1">
                Herbal Earth Nutraceuticals Pvt. Ltd.
              </span>
              <p className="font-body-sm text-[12px] text-[#A6BA96] leading-relaxed">
                Professionally driven nutraceutical ingredients company backed by over a decade of industry experience in botanical extracts, nutraceutical ingredients, functional raw materials, and ingredient solutions.
              </p>
              <span className="font-code-spec text-[11px] text-[#FFB786] font-bold">
                CIN: U24290PB2023PTC057589
              </span>
            </div>

            {/* Column 2: Products */}
            <div className="flex flex-col gap-2">
              <span className="font-code-spec text-[12px] uppercase text-[#FFFFFF] font-bold tracking-wider">
                Ingredient Divisions
              </span>
              <ul className="flex flex-col gap-1.5 text-[12px] font-body-sm text-[#A6BA96]">
                <li><button onClick={() => { const el = document.getElementById('portfolio-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#FFFFFF] text-left cursor-pointer">Botanical &amp; Herbal Extracts</button></li>
                <li><button onClick={() => { const el = document.getElementById('portfolio-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#FFFFFF] text-left cursor-pointer">Specialty Bioactives &amp; Antioxidants</button></li>
                <li><button onClick={() => { const el = document.getElementById('portfolio-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#FFFFFF] text-left cursor-pointer">Enzymes &amp; Bio-Peptides</button></li>
                <li><button onClick={() => { const el = document.getElementById('portfolio-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#FFFFFF] text-left cursor-pointer">Plant Proteins &amp; Natural Fibers</button></li>
                <li><button onClick={() => { const el = document.getElementById('portfolio-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#FFFFFF] text-left cursor-pointer">Superfoods &amp; Hydrocolloids</button></li>
              </ul>
            </div>

            {/* Column 3: Corporate & Quality */}
            <div className="flex flex-col gap-2">
              <span className="font-code-spec text-[12px] uppercase text-[#FFFFFF] font-bold tracking-wider">
                Corporate &amp; Quality
              </span>
              <ul className="flex flex-col gap-1.5 text-[12px] font-body-sm text-[#A6BA96]">
                <li><button onClick={() => onNavigateTab('about-us')} className="hover:text-[#FFFFFF] text-left cursor-pointer">About Herbal Earth</button></li>
                <li><button onClick={() => onNavigateTab('about-us')} className="hover:text-[#FFFFFF] text-left cursor-pointer">Sustainable Ingredients Ethics</button></li>
                <li><button onClick={() => onNavigateTab('rd-quality-labs')} className="hover:text-[#FFFFFF] text-left cursor-pointer">Food &amp; Nutra Testing Lab (Bhawana)</button></li>
                <li><button onClick={() => onNavigateTab('rd-quality-labs')} className="hover:text-[#FFFFFF] text-left cursor-pointer">ICP-MS &amp; HPLC Analytical Suite</button></li>
                <li><button onClick={() => onNavigateTab('contact-inquiry')} className="hover:text-[#FFFFFF] text-left cursor-pointer">Commercial Procurement Desk</button></li>
              </ul>
            </div>

            {/* Column 4: Presence :- */}
            <div className="flex flex-col gap-2">
              <span className="font-code-spec text-[12px] uppercase text-[#83D617] font-bold tracking-wider">
                Presence :-
              </span>
              <ul className="flex flex-col gap-2 text-[12px] font-body-sm text-[#A6BA96]">
                <li className="flex flex-col">
                  <span className="text-[#FFFFFF] font-bold">Head Office</span>
                  <span>Bhawana Industrial Area, New Delhi</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#FFFFFF] font-bold">Sales Office 01</span>
                  <span>Gurugram, Haryana</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#FFFFFF] font-bold">Food &amp; Nutra Testing Lab</span>
                  <span>Bhawana Industrial Area, New Delhi</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#FFFFFF] font-bold">Manufacturing Facility</span>
                  <span>Nainital, Uttarakhand</span>
                </li>
              </ul>
              <div className="flex flex-col gap-1 text-[11px] font-code-spec mt-1 pt-2 border-t border-[#23350C]">
                <span>Tel: +91-9289797357</span>
                <span>
                  Email:{' '}
                  <a href="mailto:bd@herbalearthindia.com" className="hover:text-[#FFFFFF] text-[#83D617] transition-colors">
                    bd@herbalearthindia.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-code-spec text-[#7F996B] pt-space-md border-t border-[#23350C]">
            <span>© 2023–2026 Herbal Earth Nutraceuticals Pvt. Ltd. All rights reserved.</span>
            <span className="text-[#83D617] font-bold mt-1 sm:mt-0">Standardized Botanical &amp; Nutraceutical Purity</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
