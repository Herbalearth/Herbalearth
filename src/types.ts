export interface BotanicalExtract {
  id: string;
  commonName: string;
  botanicalName: string;
  assayStandard: string;
  activeMarker: string;
  casNumber: string;
  extractionMethod: 'Supercritical CO2' | 'Hydro-Ethanolic (Closed Loop)' | 'Aqueous Fractionation';
  purityScore: number; // e.g. 98.4
  retentionTime: string; // e.g. '4.82 min'
  harvestAltitude: string; // e.g. '2,100 m AMSL'
  harvestRegion: string;
  category: 'Adaptogen' | 'Antioxidant & Anti-inflammatory' | 'Metabolic & Digestive' | 'Cognitive & Neuro' | 'Cardiovascular';
  description: string;
  certBatch: string;
  coaSummary: {
    appearance: string;
    heavyMetals: { lead: string; arsenic: string; cadmium: string; mercury: string };
    microbiology: { totalPlateCount: string; yeastMold: string; eColi: string; salmonella: string };
    residualSolvents: string;
  };
  svgPeakPath: string;
  peakX: number;
  peakY: number;
  peakCallout: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  colorClass: string;
}

export interface InquiryFormData {
  organization: string;
  targetAssay: string;
  email: string;
  annualVolume?: string;
  notes?: string;
}
