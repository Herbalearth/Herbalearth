import React, { useState } from 'react';
import { BOTANICAL_EXTRACTS } from '../data/extracts';

interface ContactScreenProps {
  onToast: (msg: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onToast }) => {
  // Formulation calculator state
  const [selectedExtractId, setSelectedExtractId] = useState<string>('curcumin');
  const [batchUnits, setBatchUnits] = useState<number>(50000); // 50,000 capsules or bottles
  const [activeMgPerUnit, setActiveMgPerUnit] = useState<number>(250); // 250 mg per capsule

  // Procurement form state
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Commercial Pricing & Long-Term Contract');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentExtract =
    BOTANICAL_EXTRACTS.find((e) => e.id === selectedExtractId) || BOTANICAL_EXTRACTS[0];

  // Raw extract required in kg = (batchUnits * activeMgPerUnit) / 1,000,000
  const rawExtractKg = ((batchUnits * activeMgPerUnit) / 1000000).toFixed(2);
  const drumsCount = Math.ceil(Number(rawExtractKg) / 25); // 25 kg fiber drums

  const handleCommercialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Commercial Supply Inquiry: ${companyName || 'Enterprise Procurement'}`);
    const bodyContent = [
      `HERBAL EARTH NUTRACEUTICALS - COMMERCIAL PROCUREMENT INQUIRY`,
      `-------------------------------------------------------------`,
      `Enterprise Brand / Manufacturer: ${companyName}`,
      `Procurement Lead: ${contactName}`,
      `Corporate Work Email: ${workEmail}`,
      `Selected Botanical Active: ${currentExtract.commonName} (${currentExtract.botanicalName})`,
      `Assay Standard: ${currentExtract.assayStandard}`,
      `Batch Calculation: ${batchUnits.toLocaleString()} units @ ${activeMgPerUnit}mg/unit`,
      `Calculated Extract Required: ${rawExtractKg} kg (${drumsCount} x 25kg drums)`,
      `Primary Inquiry Focus: ${inquiryType}`,
      `Finished Dosage / Target Specs: ${notes || 'Standard Pharmacopeial Specifications'}`,
      `-------------------------------------------------------------`,
      `Recipient: bd@herbalearthindia.com`
    ].join('\n');

    const mailtoUrl = `mailto:bd@herbalearthindia.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;

    onToast(`Commercial request submitted to bd@herbalearthindia.com for ${companyName}.`);

    setTimeout(() => {
      setSubmitted(false);
      setCompanyName('');
      setContactName('');
      setWorkEmail('');
      setNotes('');
    }, 5000);
  };

  return (
    <div className="flex flex-col w-full px-3 sm:px-6 md:px-8 py-4 sm:py-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
      {/* Header */}
      <section className="bg-surface-container-low p-3.5 sm:p-space-md flex flex-col gap-space-xs border border-outline-variant/40 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="font-code-spec text-code-spec uppercase text-primary font-bold">
            B2B Commercial &amp; Formulation Desk
          </span>
          <span className="px-space-xs py-space-2xs bg-secondary-container text-on-secondary-container font-label-data-sm text-[10px] uppercase font-bold">
            Direct Supply Contracts
          </span>
        </div>
        <h1 className="font-headline-sm text-[22px] sm:text-[26px] text-on-surface font-bold">
          Procurement, Pilot Runs &amp; Technical Support
        </h1>
        <p className="font-body-sm text-[13px] sm:text-[14px] text-on-surface-variant leading-relaxed">
          Direct engagement with formulation scientists, procurement directors, and contract manufacturers. We supply verified botanical active ingredients in airtight 25kg nitrogen-blanketed fiber drums.
        </p>

        {/* Quick Contact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 font-code-spec text-[12px]">
          <div className="p-2.5 bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-2">
            <div className="min-w-0">
              <span className="text-outline uppercase text-[10px] block">Sales Direct</span>
              <a href="tel:+919289797357" className="font-bold text-on-surface hover:text-primary text-[13px]">
                +91-9289797357
              </a>
            </div>
          </div>

          <div className="p-2.5 bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-2">
            <div className="min-w-0">
              <span className="text-outline uppercase text-[10px] block">Commercial Inquiries</span>
              <a href="mailto:bd@herbalearthindia.com" className="font-bold text-on-surface hover:text-primary text-[13px] truncate block">
                bd@herbalearthindia.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Formulation Batch Calculator */}
      <section className="bg-surface-container-lowest p-3.5 sm:p-space-md border border-outline-variant/40 shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-surface-container pb-2 flex-wrap gap-2">
          <div>
            <span className="font-code-spec text-[10px] uppercase text-primary font-bold">
              R&amp;D Formulation Engineering Tool
            </span>
            <h2 className="font-headline-sm text-[19px] sm:text-[22px] text-on-surface font-bold">
              Raw Active Batch Volume Calculator
            </h2>
          </div>
          <span className="font-code-spec text-[10px] bg-surface-container px-2 py-1 text-on-surface font-semibold uppercase">
            Formulation Tool
          </span>
        </div>

        <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
          Calculate the exact mass of standardized botanical extract required for your planned capsule, tablet, powder stick-pack, or functional beverage production run.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-code-spec text-[12px]">
          <div>
            <label className="text-outline uppercase text-[10px] block mb-1 font-bold">Select Botanical Extract</label>
            <select
              value={selectedExtractId}
              onChange={(e) => setSelectedExtractId(e.target.value)}
              className="w-full bg-surface-container-low p-2.5 sm:p-3 font-medium text-on-surface border border-outline-variant/40 min-h-[44px]"
            >
              {BOTANICAL_EXTRACTS.map((ext) => (
                <option key={ext.id} value={ext.id}>
                  {ext.commonName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-outline uppercase text-[10px] block mb-1 font-bold">
              Active mg per Finished Dosage Unit
            </label>
            <input
              type="number"
              min={10}
              max={2000}
              step={10}
              value={activeMgPerUnit}
              onChange={(e) => setActiveMgPerUnit(Number(e.target.value))}
              className="w-full bg-surface-container-low p-2.5 sm:p-3 font-bold text-on-surface border border-outline-variant/40 min-h-[44px]"
            />
          </div>

          <div>
            <label className="text-outline uppercase text-[10px] block mb-1 font-bold">
              Total Production Units (Capsules)
            </label>
            <input
              type="number"
              min={1000}
              max={10000000}
              step={5000}
              value={batchUnits}
              onChange={(e) => setBatchUnits(Number(e.target.value))}
              className="w-full bg-surface-container-low p-2.5 sm:p-3 font-bold text-on-surface border border-outline-variant/40 min-h-[44px]"
            />
          </div>
        </div>

        {/* Calculated Result Output Box */}
        <div className="bg-surface-container-high p-3 sm:p-space-sm border border-outline-variant/30 grid grid-cols-1 sm:grid-cols-2 gap-3 font-code-spec">
          <div>
            <span className="text-outline uppercase text-[10px] block font-bold">Standardized Extract Required</span>
            <div className="text-[22px] font-bold text-primary">{rawExtractKg} kg</div>
            <span className="text-[11px] text-on-surface-variant block mt-0.5">Assay: {currentExtract.assayStandard}</span>
          </div>

          <div>
            <span className="text-outline uppercase text-[10px] block font-bold">Packaging Configuration</span>
            <div className="text-[22px] font-bold text-secondary">{drumsCount} Drums</div>
            <span className="text-[11px] text-on-surface-variant block mt-0.5">25kg hermetic fiber drums + N2 purge</span>
          </div>
        </div>
      </section>

      {/* Enterprise Procurement Form */}
      <section className="bg-surface-container-lowest p-3.5 sm:p-space-md border border-outline-variant/40 shadow-sm flex flex-col gap-space-sm">
        <div>
          <span className="font-code-spec text-[10px] uppercase text-secondary font-bold">
            Formal B2B Specification &amp; Supply Agreement
          </span>
          <h2 className="font-headline-sm text-[20px] text-on-surface font-bold">
            Commercial Supply Inquiry Form
          </h2>
        </div>

        <form onSubmit={handleCommercialSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-label-data-sm text-[10px] text-outline uppercase block mb-1 font-bold">
                Enterprise Brand / Manufacturer Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Apex BioPharma Inc."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-surface-container-low p-2.5 sm:p-3 text-[16px] sm:text-[14px] text-on-surface border border-outline-variant/40 min-h-[44px] focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="font-label-data-sm text-[10px] text-outline uppercase block mb-1 font-bold">
                Procurement Lead / Contact Person *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Marcus Thorne, VP Procurement"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-surface-container-low p-2.5 sm:p-3 text-[16px] sm:text-[14px] text-on-surface border border-outline-variant/40 min-h-[44px] focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-label-data-sm text-[10px] text-outline uppercase block mb-1 font-bold">
                Corporate Work Email *
              </label>
              <input
                required
                type="email"
                placeholder="procurement@apexbiopharma.com"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                className="w-full bg-surface-container-low p-2.5 sm:p-3 text-[16px] sm:text-[14px] text-on-surface border border-outline-variant/40 min-h-[44px] focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="font-label-data-sm text-[10px] text-outline uppercase block mb-1 font-bold">
                Primary Inquiry Focus
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-surface-container-low p-2.5 sm:p-3 text-[16px] sm:text-[14px] text-on-surface border border-outline-variant/40 min-h-[44px] focus:outline-none focus:border-primary"
              >
                <option value="Commercial Pricing & Long-Term Contract">Commercial Pricing &amp; Long-Term Contract</option>
                <option value="Custom Supercritical Phyto-Extraction Contract">Custom Supercritical Phyto-Extraction Contract</option>
                <option value="Regulatory Dossier (DMF / USP / EU Compliance)">Regulatory Dossier (DMF / USP / EU Compliance)</option>
                <option value="Third-Party Quality Audit Schedule">Third-Party Quality Audit Schedule</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-label-data-sm text-[10px] text-outline uppercase block mb-1 font-bold">
              Finished Dosage Form &amp; Target Specifications
            </label>
            <textarea
              rows={3}
              placeholder="Specify intended dosage form (capsule, liquid, gummy), bulk density requirements, target dissolution or blend excipients..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-surface-container-low p-2.5 sm:p-3 text-[16px] sm:text-[14px] text-on-surface border border-outline-variant/40 focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 bg-primary text-on-primary font-label-data-sm text-[12px] uppercase tracking-widest cursor-pointer active:bg-primary-container flex items-center justify-center gap-2 font-bold shadow-md min-h-[46px]"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>Submit Request to bd@herbalearthindia.com</span>
          </button>
        </form>

        {submitted && (
          <div className="p-space-xs bg-secondary-container text-on-secondary-container font-label-data-sm text-label-data-sm text-center border border-secondary flex flex-col gap-1">
            <span>✓ Inquiry registered and prepared for <strong>bd@herbalearthindia.com</strong>.</span>
            <span className="text-[11px] font-normal">
              If your email client didn't launch automatically,{' '}
              <a
                href="mailto:bd@herbalearthindia.com?subject=Commercial%20Supply%20Inquiry&body=Please%20find%20our%20commercial%20supply%20inquiry%20details."
                className="underline font-bold"
              >
                click here to email bd@herbalearthindia.com directly
              </a>.
            </span>
          </div>
        )}
      </section>
    </div>
  );
};
