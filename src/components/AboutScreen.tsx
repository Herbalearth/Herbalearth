import React from 'react';

interface AboutScreenProps {
  onNavigateTab: (tab: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigateTab }) => {
  return (
    <div className="flex flex-col w-full px-gutter-mobile py-space-md gap-space-lg max-w-7xl mx-auto">
      {/* Header Banner */}
      <section className="bg-surface-container-low p-space-md sm:p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md border border-outline-variant/40 shadow-sm">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-code-spec text-code-spec uppercase text-primary font-bold">
              10+ Years of Industry Expertise · Quality-Driven
            </span>
            <span className="px-space-xs py-space-2xs bg-secondary-container text-on-secondary-container font-label-data-sm text-[10px] uppercase font-bold">
              CIN: U24290PB2023PTC057589
            </span>
          </div>

          <h1 className="font-headline-lg text-[28px] sm:text-[36px] text-on-surface font-bold">
            About Herbal Earth Nutraceuticals
          </h1>
          <div className="flex flex-col gap-3 font-body-lg text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed">
            <p>
              Herbal Earth Nutraceuticals Pvt. Ltd. is a professionally driven nutraceutical ingredients company backed by over a decade of industry experience in botanical extracts, nutraceutical ingredients, functional raw materials, and ingredient solutions.
            </p>
            <p>
              Our expertise enables us to deliver certified, high-potency nutraceutical ingredients, standardized botanical extracts, and functional raw materials to dietary supplement brands, food manufacturers, and pharmaceutical formulators across global markets.
            </p>
            <p>
              With a strong understanding of ingredient sourcing, botanical standardization, quality requirements, and evolving market needs, we combine industry experience with modern capabilities to provide reliable, consistent, and high-quality ingredient solutions.
            </p>
            <p>
              We are committed to building long-term partnerships through quality, transparency, technical expertise, and sustainable sourcing, helping our customers develop products that meet demanding standards and changing consumer expectations.
            </p>
          </div>

          {/* Key Value Pill Strip */}
          <div className="mt-2 p-2.5 sm:p-3 bg-[#FAFDF5] border border-[#CCD8B8] flex items-center justify-center sm:justify-start">
            <span className="font-code-spec text-[11px] sm:text-[12px] text-[#1B4D1C] font-bold tracking-wide text-center sm:text-left break-words leading-relaxed">
              10+ Years of Industry Expertise | Quality-Driven | Globally Focused | Sustainably Sourced
            </span>
          </div>

          <div className="flex flex-wrap gap-space-xs pt-space-xs">
            <button
              onClick={() => onNavigateTab('home-about-us')}
              className="px-space-md py-space-xs bg-primary text-on-primary font-label-data-sm text-[11px] uppercase tracking-wider font-bold cursor-pointer hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              Explore Product Portfolio
            </button>
          </div>
        </div>

        {/* Corporate Logo Display */}
        <div className="bg-[#FFFFFF] p-2.5 sm:p-4 border-2 border-[#1B4D1C] shadow-sm shrink-0 self-center md:self-auto max-w-full">
          <img
            alt="Herbal Earth Logo"
            className="h-20 xs:h-24 sm:h-28 md:h-32 w-auto max-w-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_WCRS6MzV4ARDL4d0_VJPsZ81F_ksVEOtwKn5W8xuGWnjZffCk1cJGPiClC6MpSq22pUJCLmMtRaCreP8igaloHZcIjl1vEZ7letBZcQCwKdY8pIyH7F9k0_eTLY9K6KubhKRJHhd_Q1DZ5Va_I3y3gnG8BzOUxx0RBfHJLI9s4IFhG6rYgXdcHPu2nxyDsKCZ1gSPgQDrHHgwH65lQ0uo4aR1R-t4LwGrZYb3v4sNaOcPELMK5_uCkqZenOpnYcrQSQ"
          />
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
        <div className="bg-surface-container-lowest p-space-md border border-outline-variant/40 shadow-xs flex flex-col gap-space-xs">
          <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">flag</span>
          </div>
          <h2 className="font-headline-sm text-[18px] text-on-surface font-bold">Our Mission</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            To be the most reliable, transparent, and science-grounded B2B ingredients partner for health and wellness industries, delivering authentic botanical actives with guaranteed chemical integrity.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-space-md border border-outline-variant/40 shadow-xs flex flex-col gap-space-xs">
          <div className="w-10 h-10 bg-tertiary/10 text-tertiary flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">visibility</span>
          </div>
          <h2 className="font-headline-sm text-[18px] text-on-surface font-bold">Our Vision</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            To set new global benchmarks for botanical purity, standardizing Himalayan and exotic bioactives while fostering ethical cultivation cooperatives and zero-adulteration supply chains.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-space-md border border-outline-variant/40 shadow-xs flex flex-col gap-space-xs">
          <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[24px]">verified</span>
          </div>
          <h2 className="font-headline-sm text-[18px] text-on-surface font-bold">Our Commitment</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Every batch delivered is accompanied by comprehensive Certificates of Analysis (COA) with verified HPLC fingerprints, USP heavy metal limit tests, and zero solvent residue certification.
          </p>
        </div>
      </section>

      {/* Ingredients & Supply Chain Advantage */}
      <section className="bg-surface-container-lowest p-space-md sm:p-space-lg border border-outline-variant/40 shadow-sm flex flex-col gap-space-md">
        <div>
          <span className="font-code-spec text-[11px] uppercase tracking-wider text-primary font-bold">
            Ingredients Excellence
          </span>
          <h2 className="font-headline-lg text-[24px] sm:text-[30px] text-on-surface font-bold">
            Our Sustainable Botanical Ingredients Model
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-sm text-[17px] text-on-surface font-bold text-secondary">
              Ethical Cooperative Alliances
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              We partner directly with indigenous harvesting cooperatives across Kumaon and Garhwal foothills. By removing intermediaries, we ensure fair compensation for local harvesters while maintaining strict custody logs for all botanical biomass.
            </p>
          </div>

          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-sm text-[17px] text-on-surface font-bold text-tertiary">
              Sustainable Harvest Seasons
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Herbs are gathered strictly during peak phytochemical potency windows and managed with rotational harvesting to ensure long-term biodiversity preservation in the fragile Himalayan eco-system.
            </p>
          </div>

          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-sm text-[17px] text-on-surface font-bold text-primary">
              Temperature-Controlled Global Cold Chain
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Finished powders and extracts are sealed in nitrogen-purged hermetic barrier packaging, stored in climate-monitored hubs, and dispatched via dedicated air freight routes through Delhi International Cargo (DEL).
            </p>
          </div>

          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-sm text-[17px] text-on-surface font-bold text-secondary">
              Custom Particle Engineering
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              In addition to raw powder supply, we provide tailor-made granulation, water-soluble micro-encapsulations, and mesh adjustments (through 80–120 mesh) for seamless tableting, hard-capsule filling, and beverage integration.
            </p>
          </div>
        </div>
      </section>

      {/* Presence :- Section */}
      <section className="bg-[#FAFDF5] p-space-md sm:p-space-lg flex flex-col gap-space-md border-2 border-[#D2DEC0] shadow-sm">
        <div className="flex flex-col gap-1">
          <span className="font-code-spec text-[11px] uppercase tracking-widest text-[#8A5025] font-bold">
            Strategic Operations &amp; Facilities
          </span>
          <h2 className="font-headline-lg text-[26px] sm:text-[32px] text-[#171D13] font-bold">
            Presence :-
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Head Office */}
          <div className="bg-[#FFFFFF] p-space-md border-2 border-[#D2DEC0] hover:border-[#1B4D1C] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 bg-[#1B4D1C] text-[#FFFFFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">corporate_fare</span>
            </div>
            <span className="font-headline-sm text-[16px] text-[#171D13] font-bold">
              Head Office
            </span>
            <p className="font-body-sm text-[13px] text-[#4F5E45] leading-relaxed font-medium">
              Bhawana Industrial Area, New Delhi
            </p>
            <span className="font-code-spec text-[10px] text-[#1B4D1C] font-bold uppercase mt-auto pt-2 border-t border-[#F0F5E5]">
              Corporate Administration
            </span>
          </div>

          {/* Sales Office 01 */}
          <div className="bg-[#FFFFFF] p-space-md border-2 border-[#D2DEC0] hover:border-[#8A5025] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 bg-[#8A5025] text-[#FFFFFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">store</span>
            </div>
            <span className="font-headline-sm text-[16px] text-[#171D13] font-bold">
              Sales Office 01
            </span>
            <p className="font-body-sm text-[13px] text-[#4F5E45] leading-relaxed font-medium">
              Gurugram, Haryana
            </p>
            <span className="font-code-spec text-[10px] text-[#8A5025] font-bold uppercase mt-auto pt-2 border-t border-[#F0F5E5]">
              Commercial Client Desk
            </span>
          </div>

          {/* Food & Nutra Testing Lab */}
          <div className="bg-[#FFFFFF] p-space-md border-2 border-[#D2DEC0] hover:border-[#1B4D1C] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 bg-[#1B4D1C] text-[#FFFFFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">biotech</span>
            </div>
            <span className="font-headline-sm text-[16px] text-[#171D13] font-bold">
              Food &amp; Nutra Testing Lab
            </span>
            <p className="font-body-sm text-[13px] text-[#4F5E45] leading-relaxed font-medium">
              Bhawana Industrial Area, New Delhi
            </p>
            <span className="font-code-spec text-[10px] text-[#1B4D1C] font-bold uppercase mt-auto pt-2 border-t border-[#F0F5E5]">
              Analytical Quality Hub
            </span>
          </div>

          {/* Manufacturing Facility */}
          <div className="bg-[#FFFFFF] p-space-md border-2 border-[#D2DEC0] hover:border-[#532600] transition-colors flex flex-col gap-2 shadow-xs">
            <div className="w-10 h-10 bg-[#532600] text-[#FFFFFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">precision_manufacturing</span>
            </div>
            <span className="font-headline-sm text-[16px] text-[#171D13] font-bold">
              Manufacturing Facility
            </span>
            <p className="font-body-sm text-[13px] text-[#4F5E45] leading-relaxed font-medium">
              Nainital, Uttarakhand
            </p>
            <span className="font-code-spec text-[10px] text-[#532600] font-bold uppercase mt-auto pt-2 border-t border-[#F0F5E5]">
              Extraction &amp; Processing Unit
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
