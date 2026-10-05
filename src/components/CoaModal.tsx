import React from 'react';
import { BotanicalExtract } from '../types';

interface CoaModalProps {
  extract: BotanicalExtract;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const CoaModal: React.FC<CoaModalProps> = ({ extract, onClose, onToast }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onToast(`Certificate ${extract.certBatch} downloaded (PDF Document Generated).`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#000000]/75 backdrop-blur-sm flex items-end sm:items-center sm:justify-center p-0 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-surface-container-lowest border-t-2 sm:border-2 border-[#1B4D1C] shadow-2xl p-space-sm sm:p-space-lg flex flex-col gap-space-sm text-on-surface my-auto max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-primary pb-space-sm">
          <div className="flex flex-col">
            <span className="font-code-spec text-[11px] uppercase tracking-widest text-primary font-bold">
              Herbal Earth Nutraceuticals Pvt. Ltd.
            </span>
            <h2 className="font-headline-sm text-[22px] text-on-surface">
              Certificate of Analysis (COA)
            </h2>
            <span className="font-code-spec text-[11px] text-secondary">
              Analytical Testing & Batch Release Dossier
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-surface-container text-on-surface-variant cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Batch Metadata Header Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs p-space-xs bg-surface-container-low text-[11px] font-code-spec border border-outline-variant/40">
          <div>
            <span className="text-outline uppercase block text-[10px]">Product Name</span>
            <span className="font-bold text-on-surface">{extract.commonName}</span>
          </div>
          <div>
            <span className="text-outline uppercase block text-[10px]">Batch Number</span>
            <span className="font-bold text-primary">{extract.certBatch}</span>
          </div>
          <div>
            <span className="text-outline uppercase block text-[10px]">Extraction Method</span>
            <span className="text-on-surface truncate">{extract.extractionMethod}</span>
          </div>
          <div>
            <span className="text-outline uppercase block text-[10px]">Harvest Region</span>
            <span className="text-on-surface truncate">{extract.harvestRegion}</span>
          </div>
        </div>

        {/* Botanical Identity Specs */}
        <div className="flex flex-col gap-space-2xs text-[12px]">
          <div className="flex justify-between border-b border-surface-container py-1">
            <span className="font-semibold text-secondary">Botanical Taxonomy:</span>
            <span className="italic">{extract.botanicalName}</span>
          </div>
          <div className="flex justify-between border-b border-surface-container py-1">
            <span className="font-semibold text-secondary">Target Assay Standard:</span>
            <span className="font-code-spec font-bold text-primary">{extract.assayStandard}</span>
          </div>
          <div className="flex justify-between border-b border-surface-container py-1">
            <span className="font-semibold text-secondary">Extraction Method:</span>
            <span>{extract.extractionMethod}</span>
          </div>
          <div className="flex justify-between border-b border-surface-container py-1">
            <span className="font-semibold text-secondary">HPLC Peak Retention:</span>
            <span className="font-code-spec text-secondary font-bold">{extract.retentionTime}</span>
          </div>
        </div>

        {/* Analytical Test Results Table */}
        <div className="flex flex-col gap-space-2xs">
          <span className="font-code-spec text-[11px] uppercase tracking-wider text-secondary font-bold">
            Physicochemical &amp; Instrument Assay
          </span>
          <div className="border border-outline-variant text-[11px] overflow-x-auto">
            <div className="min-w-[320px]">
              <div className="grid grid-cols-3 bg-secondary text-on-secondary p-space-xs font-code-spec font-semibold uppercase">
                <span>Test Parameter</span>
                <span>Monograph Spec</span>
                <span className="text-right">Actual Result</span>
              </div>
              <div className="grid grid-cols-3 p-space-xs border-b border-outline-variant/30 bg-surface-container-lowest">
                <span>Phyto-Assay (HPLC)</span>
                <span>≥ {extract.assayStandard.split('≥')[1] || '95.0%'}</span>
                <span className="text-right font-code-spec font-bold text-primary">{extract.purityScore}% (PASS)</span>
              </div>
              <div className="grid grid-cols-3 p-space-xs border-b border-outline-variant/30 bg-surface-container-low">
                <span>Physical Appearance</span>
                <span>Visual Spec Standard</span>
                <span className="text-right">{extract.coaSummary.appearance}</span>
              </div>
              <div className="grid grid-cols-3 p-space-xs border-b border-outline-variant/30 bg-surface-container-lowest">
                <span>Loss on Drying</span>
                <span>≤ 5.0% w/w</span>
                <span className="text-right font-code-spec">2.84% (PASS)</span>
              </div>
              <div className="grid grid-cols-3 p-space-xs border-b border-outline-variant/30 bg-surface-container-low">
                <span>Residual Solvents</span>
                <span>USP &lt;467&gt; Limits</span>
                <span className="text-right text-[10px] truncate">{extract.coaSummary.residualSolvents}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy Metals & Microbiology Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
          <div className="p-space-xs bg-surface-container-low border border-outline-variant/30 text-[11px]">
            <span className="font-code-spec text-[10px] font-bold text-tertiary uppercase block mb-1">
              USP &lt;232&gt; Heavy Metals (ICP-MS)
            </span>
            <div className="flex justify-between py-0.5"><span>Lead (Pb):</span><span className="font-code-spec text-primary font-semibold">{extract.coaSummary.heavyMetals.lead}</span></div>
            <div className="flex justify-between py-0.5"><span>Arsenic (As):</span><span className="font-code-spec text-primary font-semibold">{extract.coaSummary.heavyMetals.arsenic}</span></div>
            <div className="flex justify-between py-0.5"><span>Cadmium (Cd):</span><span className="font-code-spec text-primary font-semibold">{extract.coaSummary.heavyMetals.cadmium}</span></div>
            <div className="flex justify-between py-0.5"><span>Mercury (Hg):</span><span className="font-code-spec text-primary font-semibold">{extract.coaSummary.heavyMetals.mercury}</span></div>
          </div>

          <div className="p-space-xs bg-surface-container-low border border-outline-variant/30 text-[11px]">
            <span className="font-code-spec text-[10px] font-bold text-secondary uppercase block mb-1">
              USP &lt;2021&gt; Microbiological Safety
            </span>
            <div className="flex justify-between py-0.5"><span>Total Plate Count:</span><span className="font-code-spec text-primary">{extract.coaSummary.microbiology.totalPlateCount}</span></div>
            <div className="flex justify-between py-0.5"><span>Yeast &amp; Mold:</span><span className="font-code-spec text-primary">{extract.coaSummary.microbiology.yeastMold}</span></div>
            <div className="flex justify-between py-0.5"><span>E. Coli:</span><span className="font-code-spec text-primary font-semibold">{extract.coaSummary.microbiology.eColi}</span></div>
            <div className="flex justify-between py-0.5"><span>Salmonella:</span><span className="font-code-spec text-primary font-semibold">{extract.coaSummary.microbiology.salmonella}</span></div>
          </div>
        </div>

        {/* Quality Release Sign-off */}
        <div className="pt-space-xs border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-code-spec text-outline">
          <div>
            <span>RELEASED BY: QC Laboratory Manager</span>
            <div className="text-secondary font-bold">Dr. V. K. Joshi (Nainital Unit)</div>
          </div>
          <div className="text-left sm:text-right">
            <span className="px-space-xs py-1 bg-secondary-container text-on-secondary-container font-bold uppercase text-[10px]">
              RELEASED FOR GLOBAL DISPATCH
            </span>
            <div className="text-[10px] mt-0.5">Validated against USP-NF &amp; EP 10.0</div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs pt-space-xs">
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-space-2xs py-space-sm bg-primary text-on-primary font-label-data-sm text-[12px] uppercase tracking-wider cursor-pointer active:bg-primary-container min-h-[44px]"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Download PDF COA</span>
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center justify-center gap-space-2xs py-space-sm bg-surface-container text-on-surface font-label-data-sm text-[12px] uppercase tracking-wider cursor-pointer hover:bg-surface-container-high min-h-[44px]"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
};
