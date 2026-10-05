import React from 'react';
import { BotanicalExtract } from '../types';

interface LabsScreenProps {
  onOpenCoaModal?: (extract: BotanicalExtract) => void;
  onToast?: (msg: string) => void;
}

const LABORATORY_DIVISIONS = [
  {
    icon: 'biotech',
    title: 'Chromatography & Phytochemical Assays',
    desc: 'Equipped with Waters Alliance HPLC-PDA, UHPLC, and Shimadzu GC-MS systems for precision quantification of bioactive marker compounds, botanical authenticity confirmation, and residual solvent screening (USP <467>).',
    metrics: '0.01% Limit of Quantitation · Multi-Wavelength UV/Vis Detection'
  },
  {
    icon: 'science',
    title: 'Elemental Impurities & Trace Metals',
    desc: 'High-throughput Agilent 7900 ICP-MS analytical suite ensuring strict compliance with USP <232>/<233>, California Proposition 65, and FSSAI maximum permissible limits down to sub-ppb (parts-per-billion) sensitivity.',
    metrics: 'Lead, Cadmium, Arsenic, Mercury · Sub-ppb Sensitivity'
  },
  {
    icon: 'clean_hands',
    title: 'ISO Class 7 Microbiological Cleanroom',
    desc: 'Dedicated Class 10,000 cleanroom environment engineered with HEPA filtration, positive pressure airlocks, and Biosafety Level 2 containment for pathogen screening, total viable counts, and rapid molecular identification.',
    metrics: 'Class 10,000 (ISO 7) Cleanroom · 0% Cross-Contamination Risk'
  },
  {
    icon: 'bug_report',
    title: 'Pesticide & Mycotoxin Residue Screening',
    desc: 'Advanced Triple-Quadrupole LC-MS/MS and GC-MS/MS platforms screening over 450+ agrochemical residues, polychlorinated biphenyls, aflatoxins (B1, B2, G1, G2), and ethylene oxide (EtO) with rapid sample turnaround.',
    metrics: '450+ Pesticide Residues Screened · EIC & Export Protocol Ready'
  },
  {
    icon: 'thermostat',
    title: 'ICH Climatic Walk-in Stability Suites',
    desc: 'Calibrated stability test chambers continuously monitored via 21 CFR Part 11 compliant data loggers to support accelerated, intermediate, and real-time shelf-life testing for nutraceutical brands and exporters.',
    metrics: 'ICH Q1A (R2) Compliant · Continuous 24/7 Redundant Telemetry'
  },
  {
    icon: 'inventory_2',
    title: 'Physical & Proximate Characterization',
    desc: 'Full-spectrum physical property evaluation including particle size distribution by laser diffraction, tapped/bulk density, dissolution & disintegration profiling, loss on drying, and total ash indices.',
    metrics: 'Laser Diffraction Sizing · Karl Fischer Micro-Moisture'
  }
];

export const LabsScreen: React.FC<LabsScreenProps> = () => {
  return (
    <div className="flex flex-col w-full text-on-surface bg-surface min-h-screen">
      {/* Hero Banner: Upcoming Food & Nutra Testing Laboratory in Bhawana Industrial Area */}
      <section className="relative w-full bg-gradient-to-b from-[#18230B] via-[#21300F] to-[#121A08] text-[#FFFFFF] px-gutter-mobile py-space-xl sm:py-space-2xl border-b border-[#345300] overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#9FD753_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="px-space-xs py-1 bg-[#1B4D1C] text-[#FFFFFF] font-code-spec text-[11px] uppercase tracking-wider font-bold shadow-xs">
              Upcoming Analytical Facility
            </span>
            <span className="px-space-xs py-1 bg-[#2C3F12] text-[#CFECA7] border border-[#52771C] font-code-spec text-[11px] uppercase tracking-wider font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#9FD753]">location_on</span>
              Bhawana Industrial Area, New Delhi - 110039
            </span>
            <span className="px-space-xs py-1 bg-[#532600] text-[#FFDCC7] border border-[#8A5025] font-code-spec text-[11px] uppercase tracking-wider font-bold">
              ISO/IEC 17025 &amp; FSSAI Compliant Architecture
            </span>
          </div>

          {/* Main Title & Executive Mission */}
          <div className="flex flex-col gap-space-sm max-w-4xl">
            <h1 className="font-headline-lg text-[24px] xs:text-[28px] sm:text-[38px] md:text-[46px] leading-[1.16] text-[#FFFFFF] font-bold tracking-tight break-words">
              State-of-the-Art <span className="text-[#9FD753]">Food &amp; Nutraceutical Ingredients</span> Testing Laboratory
            </h1>
            <p className="font-body-lg text-[14px] sm:text-[17px] text-[#D8E6C8] leading-relaxed max-w-3xl">
              Herbal Earth is commissioning an advanced commercial analytical testing laboratory in <strong>Bhawana Industrial Area, New Delhi</strong>. Specifically engineered for dietary supplements, botanical extracts, functional food ingredients, and active phytochemicals with multi-instrument chromatographic, elemental, and microbiological precision.
            </p>
          </div>

          {/* Key Strategic Facility Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs pt-space-xs font-code-spec text-[11px]">
            <div className="bg-[#1D290D]/90 p-space-sm border border-[#3C5B14] flex flex-col gap-1">
              <span className="text-[#A7C28A] uppercase text-[10px] block">Location</span>
              <span className="text-[14px] font-bold text-[#FFFFFF]">Bhawana Industrial Area</span>
              <span className="text-[10px] text-[#A7C28A]">North West Delhi, India</span>
            </div>
            <div className="bg-[#1D290D]/90 p-space-sm border border-[#3C5B14] flex flex-col gap-1">
              <span className="text-[#A7C28A] uppercase text-[10px] block">Accreditation Target</span>
              <span className="text-[14px] font-bold text-[#9FD753]">ISO/IEC 17025:2017</span>
              <span className="text-[10px] text-[#A7C28A]">FSSAI &amp; AYUSH Recognition</span>
            </div>
            <div className="bg-[#1D290D]/90 p-space-sm border border-[#3C5B14] flex flex-col gap-1">
              <span className="text-[#A7C28A] uppercase text-[10px] block">Sample Turnaround</span>
              <span className="text-[14px] font-bold text-[#FFB786]">24h Express / 3–5 Days</span>
              <span className="text-[10px] text-[#A7C28A]">Digital COA with QR Auth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-gutter-mobile py-space-xl flex flex-col gap-space-2xl w-full">
        {/* Section 1: Laboratory Analytical Testing Divisions */}
        <section className="flex flex-col gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-2xs text-[#1B4D1C]">
              <span className="material-symbols-outlined text-[20px]">science</span>
              <span className="font-code-spec text-[11px] uppercase tracking-widest font-bold">
                Analytical Testing Capabilities
              </span>
            </div>
            <h2 className="font-headline-md text-[26px] sm:text-[32px] text-on-surface font-bold">
              Specialized Divisions for Nutraceuticals &amp; Food Ingredients
            </h2>
            <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant max-w-3xl">
              Engineered to meet the exact testing rigor demanded by international pharmacopoeias (USP, Ph. Eur., BP, IP), FSSAI regulations, AYUSH guidelines, and global nutraceutical brand specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {LABORATORY_DIVISIONS.map((div, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-space-md border border-outline-variant/40 shadow-xs flex flex-col justify-between gap-space-sm hover:border-[#1B4D1C] transition-colors"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[26px]">{div.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-[18px] text-on-surface font-bold">
                    {div.title}
                  </h3>
                  <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
                    {div.desc}
                  </p>
                </div>
                <div className="pt-space-xs border-t border-surface-container font-code-spec text-[10px] text-secondary font-bold">
                  {div.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
