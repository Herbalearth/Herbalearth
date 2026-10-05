export interface IngredientItem {
  id: string;
  name: string; // Exact name from attached list
  plantName: string; // Plant / botanical / biological origin
  plantPart: string; // Plant part harvested
  spec: string; // Standardized specification
  category: 'Botanical Extracts' | 'Bioactives & Antioxidants' | 'Enzymes & Peptides' | 'Proteins & Fibers';
  plantImage: string; // High quality plant photograph
  casNumber?: string;
  description: string;
}

export const INGREDIENTS_CATALOG: IngredientItem[] = [
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    plantName: 'Withania somnifera (Winter Cherry)',
    plantPart: 'Roots & Leaves',
    spec: 'Standardized Withanolides ≥ 2.5% – 5.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    casNumber: '90147-43-6',
    description: 'Premier adaptogenic root extract with verified withanolides and withaferin-A for stress balance and cognitive resilience.'
  },
  {
    id: 'bacopa',
    name: 'Bacopa',
    plantName: 'Bacopa monnieri (Brahmi / Water Hyssop)',
    plantPart: 'Whole Herb & Leaves',
    spec: 'Total Bacosides A & B ≥ 20.0% – 50.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
    casNumber: '93165-02-7',
    description: 'Nootropic wetland perennial botanical extract standardized for synaptic neurotransmission and cognitive memory support.'
  },
  {
    id: 'milk-thistle',
    name: 'Milk thistle',
    plantName: 'Silybum marianum (Milk Thistle Blossom)',
    plantPart: 'Seeds & Flowering Tops',
    spec: 'Silymarin Complex ≥ 80.0% UV / HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    casNumber: '84604-20-6',
    description: 'Hepatoprotective flavonolignan matrix rich in silybin and isosilybin for cellular detoxification and antioxidant liver defense.'
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    plantName: 'Aloe barbadensis Miller',
    plantPart: 'Succulent Inner Leaf Fillet',
    spec: 'Aloin-Free / Polysaccharides ≥ 10.0%',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1567689574186-056a86fbe524?auto=format&fit=crop&w=600&q=80',
    casNumber: '85507-69-3',
    description: 'Purified acemannan mucopolysaccharides for gastrointestinal mucosal support and top-tier topical cosmeceutical hydration.'
  },
  {
    id: 'grape-seed',
    name: 'Grape Seed',
    plantName: 'Vitis vinifera (Grapevine Seed Clusters)',
    plantPart: 'Cleaned Dried Seeds',
    spec: 'Proanthocyanidins (OPC) ≥ 95.0% UV',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=600&q=80',
    casNumber: '84929-27-1',
    description: 'High-potency oligomeric proanthocyanidins providing intense free radical neutralization and microvascular cardiovascular tone.'
  },
  {
    id: 'boswellia-65',
    name: 'Boswellia 65%',
    plantName: 'Boswellia serrata (Indian Olibanum Tree)',
    plantPart: 'Purified Exudate Gum Resin',
    spec: 'Total Boswellic Acids ≥ 65.0% Titration',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    casNumber: '97952-72-2',
    description: 'Full-spectrum pentacyclic triterpenic acids engineered for targeted 5-LOX enzyme inhibition and joint flexibility.'
  },
  {
    id: 'boswellia-akba-30',
    name: 'Boswellia AKBA 30%',
    plantName: 'Boswellia serrata (High-Purity Fraction)',
    plantPart: 'Standardized Resin Fraction',
    spec: '3-O-Acetyl-11-Keto-β-Boswellic Acid ≥ 30.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    casNumber: '67416-61-9',
    description: 'Premium fractionated bioactive with tenfold concentrated AKBA potency for clinical musculoskeletal inflammation management.'
  },
  {
    id: 'green-coffee-45',
    name: 'Green Coffee Extract 45%',
    plantName: 'Coffea arabica (Unroasted Green Coffee)',
    plantPart: 'Raw Green Coffee Beans',
    spec: 'Total Chlorogenic Acids ≥ 45.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    casNumber: '327-97-9',
    description: 'Unroasted polyphenol complex supporting healthy glucose absorption kinetics and clean metabolic energy modulation.'
  },
  {
    id: 'banaba-1',
    name: 'Banaba 1%',
    plantName: 'Lagerstroemia speciosa (Queen Crape Myrtle)',
    plantPart: 'Mature Foliage Leaves',
    spec: 'Corosolic Acid ≥ 1.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    casNumber: '4547-24-4',
    description: 'Standardized botanical phyto-insulin active promoting healthy cellular GLUT-4 glucose transporter facilitation.'
  },
  {
    id: 'banaba-20',
    name: 'Banaba 20%',
    plantName: 'Lagerstroemia speciosa (High Potency)',
    plantPart: 'Selected Leaves',
    spec: 'Corosolic Acid ≥ 20.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    casNumber: '4547-24-4',
    description: 'Ultra-concentrated corosolic acid isolate calibrated for advanced glycemic dietary supplements and metabolic formulas.'
  },
  {
    id: 'ginkgo-extract-24',
    name: 'Ginkgo Extract 24%',
    plantName: 'Ginkgo biloba (Maidenhair Tree)',
    plantPart: 'Green Fan-Shaped Leaves',
    spec: 'Ginkgo Flavone Glycosides ≥ 24.0% / Terpenes ≥ 6.0%',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80',
    casNumber: '90045-36-6',
    description: 'USP / EP pharmacopeial standard extract with ginkgolides A, B, C and bilobalide for cerebral and peripheral microcirculation.'
  },
  {
    id: 'ginseng-4-uv',
    name: 'Ginseng 4% UV',
    plantName: 'Panax ginseng C.A. Meyer',
    plantPart: 'Mature Roots (4-6 Years)',
    spec: 'Total Ginsenosides (Rb1, Rg1, Re) ≥ 4.0% UV-Vis',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    casNumber: '50647-08-0',
    description: 'Classic Eastern adaptogen promoting cellular ATP mitochondrial kinetics, physical stamina, and adrenal equilibrium.'
  },
  {
    id: 'glutathione-plain-98',
    name: 'Glutathione Plain 98%',
    plantName: 'Saccharomyces cerevisiae Ferment (Cellular Tripeptide)',
    plantPart: 'Non-GMO Microbial Cell Culture',
    spec: 'Reduced L-Glutathione (GSH) ≥ 98.0% HPLC',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    casNumber: '70-18-8',
    description: 'The body’s master endogenous cellular antioxidant; pharmaceutical grade ultra-white crystalline powder for skin radiance and detox.'
  },
  {
    id: 'hyaluronic-acid',
    name: 'Hyaluronic Acid',
    plantName: 'Streptococcus zooepidemicus Bio-Fermentation',
    plantPart: 'Microbial Culture Media',
    spec: 'Sodium Hyaluronate ≥ 95.0% (Food & Cosmetic Grade)',
    category: 'Enzymes & Peptides',
    plantImage: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80',
    casNumber: '9067-32-7',
    description: 'Non-animal biotechnology glycosaminoglycan with high water-binding capacity for joint synovial fluid and dermis hydration.'
  },
  {
    id: 'collagen',
    name: 'Collagen Mol. Wt. 500-1000 dalton',
    plantName: 'Bio-Enzymatic Peptides Matrix',
    plantPart: 'Purified Hydrolyzed Peptides',
    spec: 'Hydrolyzed Peptides Protein ≥ 90.0% (Type I & III)',
    category: 'Enzymes & Peptides',
    plantImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80',
    casNumber: '9007-34-5',
    description: 'Ultra-low molecular weight bio-peptides (500–1000 Dalton) engineered for rapid cellular uptake, superior bioavailability, and connective tissue extracellular matrix synthesis.'
  },
  {
    id: 'lutein-5',
    name: 'Lutein 5%',
    plantName: 'Tagetes erecta (Aztec Marigold Blossom)',
    plantPart: 'Petals & Flower Heads',
    spec: 'Natural Lutein Free / Esterified ≥ 5.0% HPLC',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80',
    casNumber: '127-40-2',
    description: 'Golden xanthophyll pigment protecting ocular macular pigment optical density (MPOD) against harmful blue-light photo-oxidation.'
  },
  {
    id: 'lycopene-10-uv',
    name: 'Lycopene 10% UV',
    plantName: 'Solanum lycopersicum (Vine Tomato)',
    plantPart: 'Ripe Red Tomato Fruit Flesh',
    spec: 'Natural Lycopene ≥ 10.0% by UV-Vis',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    casNumber: '502-65-8',
    description: 'Unsaturated open-chain carotenoid providing potent singlet oxygen quenching for prostate vitality and vascular protection.'
  },
  {
    id: 'astaxanthin-10-uv',
    name: 'Astaxanthin 10% powder UV',
    plantName: 'Haematococcus pluvialis (Freshwater Microalgae)',
    plantPart: 'Encysted Red Algal Cells',
    spec: 'Natural Astaxanthin Carotenoid ≥ 10.0% UV',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
    casNumber: '472-61-7',
    description: 'The king of marine antioxidants spanning lipid bilayers; 6,000x stronger than Vitamin C against oxidative membrane degradation.'
  },
  {
    id: 'coq10',
    name: 'CoQ10',
    plantName: 'Rhodobacter sphaeroides Fermentation',
    plantPart: 'Bio-Fermented Crystal Complex',
    spec: 'Coenzyme Q10 (Ubiquinone) ≥ 98.0% – 101.0% USP',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    casNumber: '303-98-0',
    description: 'Essential lipid-soluble electron transport carrier in myocardial mitochondria supporting cardiovascular energy production.'
  },
  {
    id: 'bromelain-2400',
    name: 'Bromelain 2400 GDU',
    plantName: 'Ananas comosus (Pineapple Plant)',
    plantPart: 'Mature Stem & Fruit Core',
    spec: 'Proteolytic Activity ≥ 2,400 GDU/g',
    category: 'Enzymes & Peptides',
    plantImage: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80',
    casNumber: '9001-00-7',
    description: 'High-activity natural sulfhydryl proteolytic enzyme complex facilitating protein digestion and post-exercise tissue recovery.'
  },
  {
    id: 'bromelain-1200',
    name: 'Bromelain 1200 GDU',
    plantName: 'Ananas comosus (Pineapple Plant)',
    plantPart: 'Selected Stems',
    spec: 'Proteolytic Activity ≥ 1,200 GDU/g',
    category: 'Enzymes & Peptides',
    plantImage: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=600&q=80',
    casNumber: '9001-00-7',
    description: 'Standardized enzymatic isolate customized for bulk food processing, nutraceutical digestive aids, and anti-inflammatory blends.'
  },
  {
    id: 'mucopolysaccharides',
    name: 'MucoPolysaccharides Bovine',
    plantName: 'Chondroitin Bio-Glycosaminoglycans',
    plantPart: 'Natural Structural Cartilage Matrix',
    spec: 'Glycosaminoglycans (Chondroitin) ≥ 90.0%',
    category: 'Enzymes & Peptides',
    plantImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    casNumber: '9082-07-9',
    description: 'Structural macromolecular matrix providing osmotic resistance, elasticity, and compressive resilience in articular joint cartilage.'
  },
  {
    id: 'shilajit-50',
    name: 'Shilajit Extract 50% Powder',
    plantName: 'Asphaltum punjabianum (Himalayan Bio-Mineral Pitch)',
    plantPart: 'Purified High-Altitude Mineral Rock Exudate',
    spec: 'Fulvic Acid ≥ 50.0% Gravimetric / Titration',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    casNumber: '479-66-3',
    description: 'Ancient Himalayan humic-fulvic mineral resin purified to remove heavy metals; restores intracellular ATP and mineral bioavailability.'
  },
  {
    id: 'shilajit-75',
    name: 'Shilajit 75% Powder',
    plantName: 'Asphaltum punjabianum (Ultra Purified)',
    plantPart: 'Pristine Himalayan Mineral Bio-Mass',
    spec: 'Fulvic Acid ≥ 75.0% High-Purity Assay',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    casNumber: '479-66-3',
    description: 'Ultra-concentrated fulvic acid complex with 84+ trace minerals in natural ionic form for cellular vitality and endurance formulations.'
  },
  {
    id: 'berberine-95',
    name: 'Berberine 95%',
    plantName: 'Berberis aristata (Indian Barberry / Daruharidra)',
    plantPart: 'Root Bark & Wood',
    spec: 'Berberine Hydrochloride ≥ 95.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    casNumber: '633-65-8',
    description: 'Isoquinoline botanical alkaloid recognized as a potent AMPK master metabolic regulator for blood glucose and lipid balance.'
  },
  {
    id: 'berberine-60',
    name: 'Berberine 60%',
    plantName: 'Berberis aristata (Standardized Extract)',
    plantPart: 'Dried Root Bark',
    spec: 'Berberine Hydrochloride ≥ 60.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    casNumber: '633-65-8',
    description: 'Standardized whole-root phyto-extract balancing active berberine with synergistic native phytochemicals for gut microbiome health.'
  },
  {
    id: 'turmeric-95',
    name: 'Turmeric 95%',
    plantName: 'Curcuma longa (Golden Turmeric)',
    plantPart: 'Cured Rhizomes',
    spec: 'Total Curcuminoids ≥ 95.0% HPLC (Curcumin, DMC, BDMC)',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80',
    casNumber: '458-37-7',
    description: 'Industry-standard three-peak curcuminoid extract extracted without chlorinated solvents; validated for anti-inflammatory efficacy.'
  },
  {
    id: 'black-pepper-95',
    name: 'Black pepper Extract 95%',
    plantName: 'Piper nigrum (Black Pepper Vine)',
    plantPart: 'Sun-Dried Peppercorns',
    spec: 'Piperine Alkaloid ≥ 95.0% HPLC',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
    casNumber: '94-62-2',
    description: 'Gold-standard bioavailability enhancer that enhances intestinal absorption of curcumin, coenzyme Q10, and botanical nutrients by up to 2,000%.'
  },
  {
    id: 'dha-powder-10',
    name: 'DHA powder 10%',
    plantName: 'Schizochytrium sp. (Marine Microalgae)',
    plantPart: 'Cultured Algal Plant Biomass',
    spec: 'Docosahexaenoic Acid (Omega-3 DHA) ≥ 10.0%',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    casNumber: '6217-54-5',
    description: 'Vegan, fish-free microencapsulated omega-3 powder engineered with superior oxidative stability for infant formulas and functional foods.'
  },
  {
    id: 'dha-powder-20',
    name: 'DHA Powder 20%',
    plantName: 'Schizochytrium sp. (Marine Microalgae)',
    plantPart: 'Concentrated Algal Oil Powder',
    spec: 'Docosahexaenoic Acid (Omega-3 DHA) ≥ 20.0%',
    category: 'Bioactives & Antioxidants',
    plantImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
    casNumber: '6217-54-5',
    description: 'High-payload vegetarian microalgae DHA powder with excellent dispersibility in instant dry beverage blends and dietary softgels.'
  },
  {
    id: 'pea-protein-80',
    name: 'Pea Protein 80%',
    plantName: 'Pisum sativum (Yellow Field Pea)',
    plantPart: 'De-Hulled Dried Seed Kernels',
    spec: 'Crude Plant Protein ≥ 80.0% (Dry Basis, Non-GMO)',
    category: 'Proteins & Fibers',
    plantImage: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80',
    casNumber: '90082-41-0',
    description: 'Hypoallergenic plant-based protein isolate rich in branched-chain amino acids (BCAAs) for clean sports nutrition and plant-based foods.'
  },
  {
    id: 'pea-protein-85',
    name: 'Pea Protein 85%',
    plantName: 'Pisum sativum (Yellow Field Pea)',
    plantPart: 'Fine Ultra-Pure Isolate',
    spec: 'Crude Plant Protein ≥ 85.0% (Dry Basis, Non-GMO)',
    category: 'Proteins & Fibers',
    plantImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=600&q=80',
    casNumber: '90082-41-0',
    description: 'Ultra-refined pea isolate with neutral organoleptic profile, high emulsification power, and superior PDCAAS digestibility score.'
  },
  {
    id: 'rose-hip-50',
    name: 'Rose Hip Extract 50%',
    plantName: 'Rosa canina (Wild Rose Hip Bush)',
    plantPart: 'Fleshy Pseudo-Fruits & Seeds',
    spec: 'Natural Vitamin C / Polyphenols ≥ 50.0%',
    category: 'Botanical Extracts',
    plantImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    casNumber: '84696-47-9',
    description: 'Bioflavonoid-dense botanical complex with natural ascorbic acid, galactolipids, and lycopene for joint mobility and collagen synthesis.'
  },
  {
    id: 'dates-powder',
    name: 'Dates Powder',
    plantName: 'Phoenix dactylifera (Date Palm Tree)',
    plantPart: 'Naturally Dried Whole Date Fruit',
    spec: '100% Dehydrated Date Fruit, Natural Prebiotic Fiber',
    category: 'Proteins & Fibers',
    plantImage: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80',
    casNumber: '90027-90-0',
    description: 'Nutrient-rich, low-glycemic whole food sweetener and fiber source packed with potassium, magnesium, and polyphenols.'
  },
  {
    id: 'amla-fiber',
    name: 'Amla Fiber',
    plantName: 'Phyllanthus emblica (Indian Gooseberry Tree)',
    plantPart: 'Sun-Dried Fruit Pulp & Pomace',
    spec: 'Dietary Fiber ≥ 60.0% with Natural Tannins',
    category: 'Proteins & Fibers',
    plantImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    casNumber: '90028-28-7',
    description: 'High-tannin soluble and insoluble botanical fiber powder supporting colon mucosal integrity and gastrointestinal motility.'
  },
  {
    id: 'guargum',
    name: 'Guargum',
    plantName: 'Cyamopsis tetragonoloba (Guar Bean Bush)',
    plantPart: 'Endosperm of Guar Seeds',
    spec: 'Galactomannan Viscosity 5,000 – 6,000 cps',
    category: 'Proteins & Fibers',
    plantImage: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80',
    casNumber: '9000-30-0',
    description: 'Natural cold-water swelling polysaccharide hydrocolloid for viscosity control, texture stabilization, and clean-label dietary fiber binding.'
  }
];
