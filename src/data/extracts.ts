import { BotanicalExtract, Pillar } from '../types';

export const PILLARS: Pillar[] = [
  {
    number: 'PIL-01',
    title: 'Incorporated 2023: Modern Green Chemistry',
    description: 'Built from the ground up without legacy industrial liabilities. Employs supercritical fluid and counter-current ethanolic extraction avoiding toxic petroleum distillates.',
    tags: ['Zero Hexane', 'Closed-Loop Recovery'],
    icon: 'calendar_today',
    colorClass: 'bg-secondary-container text-on-secondary-container'
  },
  {
    number: 'PIL-02',
    title: 'Origin & Himalayan Foothill Facility',
    description: 'Direct geological proximity to high-altitude medicinal herbs of Kumaon and Garhwal regions. Raw materials enter extraction within 18 hours of harvesting.',
    tags: ['Nainital Foothills', 'Direct Farm-Gate Log'],
    icon: 'landscape',
    colorClass: 'bg-tertiary-fixed text-on-tertiary-fixed'
  },
  {
    number: 'PIL-03',
    title: 'Analytical Rigor: Multi-Detector Assay',
    description: 'Complete batch characterization via high-performance liquid chromatography (HPLC), UV spectrophotometry, GC-MS residual solvent screening, and USP heavy metals panels.',
    tags: ['HPLC/UV Standardized', 'Microbiological Panel'],
    icon: 'chips',
    colorClass: 'bg-primary-fixed text-on-primary-fixed'
  },
  {
    number: 'PIL-04',
    title: 'Ethical Wildcrafting & 100% Traceability',
    description: 'Partnered with indigenous Himalayan cooperatives ensuring ethical wildcraft regeneration cycles, fair compensations, and QR-coded batch origin logs.',
    tags: ['Community Sourced', 'Geo-Tagged Harvest'],
    icon: 'forest',
    colorClass: 'bg-secondary-fixed text-on-secondary-fixed'
  }
];

export const BOTANICAL_EXTRACTS: BotanicalExtract[] = [
  {
    id: 'curcumin',
    commonName: 'Curcumin (HPLC Purified)',
    botanicalName: 'Curcuma Longa',
    assayStandard: 'Curcuminoids ≥ 95.0% by HPLC',
    activeMarker: 'Curcumin, Demethoxycurcumin, Bisdemethoxycurcumin',
    casNumber: '458-37-7',
    extractionMethod: 'Hydro-Ethanolic (Closed Loop)',
    purityScore: 98.4,
    retentionTime: '4.82 min (98.4%)',
    harvestAltitude: '1,200 m AMSL',
    harvestRegion: 'Tarai Foothills & Ramnagar Corridor',
    category: 'Antioxidant & Anti-inflammatory',
    description: 'Standardized three-peak curcuminoid matrix isolated via low-temperature counter-current ethanolic percolation. Ultra-fine free-flowing orange-yellow crystalline powder with 100% hexane-free certification.',
    certBatch: '#HEN-2024-H089',
    coaSummary: {
      appearance: 'Fine crystalline orange-yellow powder',
      heavyMetals: { lead: '< 0.20 ppm', arsenic: '< 0.10 ppm', cadmium: '< 0.05 ppm', mercury: '< 0.01 ppm' },
      microbiology: { totalPlateCount: '< 100 CFU/g', yeastMold: '< 20 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'USP <467> compliant (Ethanol < 120 ppm, Hexane Non-Detected)'
    },
    svgPeakPath: 'M 0,80 L 40,79 L 80,78 L 110,79 L 130,75 L 142,10 L 155,77 L 190,78 L 220,74 L 230,45 L 242,78 L 300,80',
    peakX: 142,
    peakY: 10,
    peakCallout: 'Peak I: 4.82m · Area 98.4%'
  },
  {
    id: 'ashwagandha',
    commonName: 'Withanolides Standardized 5%',
    botanicalName: 'Withania Somnifera',
    assayStandard: 'Total Withanolides ≥ 5.0% by HPLC',
    activeMarker: 'Withaferin A, Withanolide A, Withanolide D',
    casNumber: '90147-43-6',
    extractionMethod: 'Aqueous Fractionation',
    purityScore: 5.24,
    retentionTime: '6.14 min (5.24%)',
    harvestAltitude: '1,450 m AMSL',
    harvestRegion: 'Kumaon Valley Organic Cooperative',
    category: 'Adaptogen',
    description: 'Full-spectrum root extract maintaining the natural botanical fingerprint with Withaferin A suppressed below 0.1% to eliminate cytotoxicity while maximizing Withanolide A & D neuro-modulatory efficacy.',
    certBatch: '#HEN-2024-A104',
    coaSummary: {
      appearance: 'Light tan to brownish fine hygroscopic powder',
      heavyMetals: { lead: '< 0.35 ppm', arsenic: '< 0.15 ppm', cadmium: '< 0.08 ppm', mercury: '< 0.02 ppm' },
      microbiology: { totalPlateCount: '< 300 CFU/g', yeastMold: '< 50 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'USP <467> Water-only extraction residue compliant'
    },
    svgPeakPath: 'M 0,80 L 50,80 L 90,78 L 120,75 L 160,77 L 180,22 L 195,78 L 240,79 L 260,35 L 275,80 L 300,80',
    peakX: 180,
    peakY: 22,
    peakCallout: 'Peak II: 6.14m · Area 5.24%'
  },
  {
    id: 'boswellia',
    commonName: 'AKBA 30% (Boswellia Serrata)',
    botanicalName: 'Boswellia Serrata',
    assayStandard: '3-O-Acetyl-11-Keto-β-Boswellic Acid (AKBA) ≥ 30.0%',
    activeMarker: 'AKBA, KBA, β-Boswellic Acid',
    casNumber: '67416-61-9',
    extractionMethod: 'Supercritical CO2',
    purityScore: 30.8,
    retentionTime: '3.45 min (30.8%)',
    harvestAltitude: '1,800 m AMSL',
    harvestRegion: 'Garhwal Foothills Wild Gum Cooperative',
    category: 'Antioxidant & Anti-inflammatory',
    description: 'Enriched pentacyclic triterpene oleoresin fraction isolated via supercritical CO2 extraction at 350 bar. Specifically concentrated for 5-LOX inhibition and joint cartilage homeostasis.',
    certBatch: '#HEN-2024-B032',
    coaSummary: {
      appearance: 'Off-white to pale cream free-flowing powder',
      heavyMetals: { lead: '< 0.15 ppm', arsenic: '< 0.08 ppm', cadmium: '< 0.04 ppm', mercury: '< 0.01 ppm' },
      microbiology: { totalPlateCount: '< 150 CFU/g', yeastMold: '< 30 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'CO2 solvent trace: zero VOCs'
    },
    svgPeakPath: 'M 0,80 L 30,79 L 75,76 L 95,15 L 115,76 L 150,78 L 210,79 L 235,50 L 250,79 L 300,80',
    peakX: 95,
    peakY: 15,
    peakCallout: 'Peak I: 3.45m · Area 30.8%'
  },
  {
    id: 'berberine',
    commonName: 'Berberine HCl 97% Standardized',
    botanicalName: 'Berberis Aristata',
    assayStandard: 'Berberine Hydrochloride ≥ 97.0% by HPLC',
    activeMarker: 'Berberine, Palmatine, Jatrorrhizine',
    casNumber: '633-65-8',
    extractionMethod: 'Hydro-Ethanolic (Closed Loop)',
    purityScore: 97.6,
    retentionTime: '5.20 min (97.6%)',
    harvestAltitude: '2,200 m AMSL',
    harvestRegion: 'Almora Alpine Slope Reserves',
    category: 'Metabolic & Digestive',
    description: 'High-purity isoquinoline alkaloid salt crystallised from wild-harvested Indian Barberry root bark. Calibrated for AMP-activated protein kinase (AMPK) activation and glucose homeostasis formulations.',
    certBatch: '#HEN-2024-BER12',
    coaSummary: {
      appearance: 'Vivid deep yellow crystalline needle powder',
      heavyMetals: { lead: '< 0.18 ppm', arsenic: '< 0.09 ppm', cadmium: '< 0.05 ppm', mercury: '< 0.01 ppm' },
      microbiology: { totalPlateCount: '< 200 CFU/g', yeastMold: '< 25 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'USP <467> compliant'
    },
    svgPeakPath: 'M 0,80 L 45,79 L 85,78 L 120,77 L 150,12 L 165,76 L 200,78 L 240,76 L 270,79 L 300,80',
    peakX: 150,
    peakY: 12,
    peakCallout: 'Peak I: 5.20m · Area 97.6%'
  },
  {
    id: 'kutki',
    commonName: 'Kutki Standardized (Kutkin 4%)',
    botanicalName: 'Picrorhiza Kurroa',
    assayStandard: 'Total Iridoid Glycosides (Kutkin) ≥ 4.0%',
    activeMarker: 'Picroside I & Picroside II',
    casNumber: '91845-42-0',
    extractionMethod: 'Hydro-Ethanolic (Closed Loop)',
    purityScore: 4.62,
    retentionTime: '7.30 min (4.62%)',
    harvestAltitude: '3,100 m AMSL',
    harvestRegion: 'Chamoli High-Alpine Cooperative',
    category: 'Metabolic & Digestive',
    description: 'Ethically wildcrafted high-altitude Himalayan bitter rhizome extract. Tested via dual-channel HPLC for hepatoprotective picroside fractions, harvested strictly above 3,000 meters.',
    certBatch: '#HEN-2024-KUT07',
    coaSummary: {
      appearance: 'Light brown hygroscopic bitter powder',
      heavyMetals: { lead: '< 0.22 ppm', arsenic: '< 0.12 ppm', cadmium: '< 0.06 ppm', mercury: '< 0.02 ppm' },
      microbiology: { totalPlateCount: '< 400 CFU/g', yeastMold: '< 50 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'Non-detectable hexane, USP compliant ethanol'
    },
    svgPeakPath: 'M 0,80 L 60,80 L 110,79 L 160,77 L 210,18 L 225,78 L 260,79 L 300,80',
    peakX: 210,
    peakY: 18,
    peakCallout: 'Peak I: 7.30m · Area 4.62%'
  },
  {
    id: 'rhododendron',
    commonName: 'Buransh Anthocyanin Extract 15%',
    botanicalName: 'Rhododendron Arboreum',
    assayStandard: 'Total Anthocyanins ≥ 15.0% by UV-Vis',
    activeMarker: 'Cyanidin-3-galactoside, Quercetin',
    casNumber: '528-58-5',
    extractionMethod: 'Aqueous Fractionation',
    purityScore: 16.2,
    retentionTime: '2.80 min (16.2%)',
    harvestAltitude: '2,400 m AMSL',
    harvestRegion: 'Nainital Oak-Rhododendron High Ridges',
    category: 'Cardiovascular',
    description: 'Hand-picked scarlet floral petals wild-gathered at peak spring bloom in Kumaon hills. Exceptional cardioprotective and nitric oxide boosting bioflavonoid complex.',
    certBatch: '#HEN-2024-RHO03',
    coaSummary: {
      appearance: 'Intense ruby-violet fine botanical powder',
      heavyMetals: { lead: '< 0.12 ppm', arsenic: '< 0.07 ppm', cadmium: '< 0.03 ppm', mercury: '< 0.01 ppm' },
      microbiology: { totalPlateCount: '< 250 CFU/g', yeastMold: '< 40 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'Clean water/aqueous extract, Zero VOCs'
    },
    svgPeakPath: 'M 0,80 L 35,78 L 70,16 L 85,76 L 140,78 L 190,75 L 240,79 L 300,80',
    peakX: 70,
    peakY: 16,
    peakCallout: 'Peak I: 2.80m · Area 16.2%'
  },
  {
    id: 'bacopa',
    commonName: 'Baccopa Standardized (Bacosides 20%)',
    botanicalName: 'Bacopa Monnieri',
    assayStandard: 'Total Bacosides A & B ≥ 20.0% by HPLC',
    activeMarker: 'Bacoside A3, Bacopaside II, Jujubogenin isomer',
    casNumber: '93165-02-7',
    extractionMethod: 'Hydro-Ethanolic (Closed Loop)',
    purityScore: 21.4,
    retentionTime: '5.90 min (21.4%)',
    harvestAltitude: '650 m AMSL',
    harvestRegion: 'Tarai Bio-Corridor Wetland Reserves',
    category: 'Cognitive & Neuro',
    description: 'Synaptic neuro-enhancer extract formulated without thermal degradation. Verified with five-analyte HPLC assay protocol for nootropic dietary supplements.',
    certBatch: '#HEN-2024-BAC19',
    coaSummary: {
      appearance: 'Greenish-brown fine characteristic herbal powder',
      heavyMetals: { lead: '< 0.28 ppm', arsenic: '< 0.14 ppm', cadmium: '< 0.06 ppm', mercury: '< 0.01 ppm' },
      microbiology: { totalPlateCount: '< 300 CFU/g', yeastMold: '< 60 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'USP <467> compliant'
    },
    svgPeakPath: 'M 0,80 L 40,80 L 90,78 L 135,76 L 175,19 L 190,77 L 230,78 L 270,79 L 300,80',
    peakX: 175,
    peakY: 19,
    peakCallout: 'Peak III: 5.90m · Area 21.4%'
  },
  {
    id: 'piperine',
    commonName: 'Piperine 95% Pure Fine Powder',
    botanicalName: 'Piper Nigrum',
    assayStandard: 'Piperine ≥ 95.0% by HPLC',
    activeMarker: '1-Piperoylpiperidine',
    casNumber: '94-62-2',
    extractionMethod: 'Supercritical CO2',
    purityScore: 98.9,
    retentionTime: '4.15 min (98.9%)',
    harvestAltitude: '900 m AMSL',
    harvestRegion: 'Sub-Himalayan Spice Belts',
    category: 'Metabolic & Digestive',
    description: 'Thermo-nutrient bio-enhancer that boosts systemic bioavailability of curcuminoids, polyphenols, and CoQ10 by up to 2,000%. Ultra-pure supercritical CO2 fraction.',
    certBatch: '#HEN-2024-PIP08',
    coaSummary: {
      appearance: 'Pale cream to yellowish crystalline powder',
      heavyMetals: { lead: '< 0.15 ppm', arsenic: '< 0.08 ppm', cadmium: '< 0.04 ppm', mercury: '< 0.01 ppm' },
      microbiology: { totalPlateCount: '< 100 CFU/g', yeastMold: '< 20 CFU/g', eColi: 'Negative / 10g', salmonella: 'Negative / 25g' },
      residualSolvents: 'Supercritical CO2, zero VOC residues'
    },
    svgPeakPath: 'M 0,80 L 30,79 L 65,78 L 115,10 L 130,76 L 180,78 L 240,79 L 300,80',
    peakX: 115,
    peakY: 10,
    peakCallout: 'Peak I: 4.15m · Area 98.9%'
  }
];
