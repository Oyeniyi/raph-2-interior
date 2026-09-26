import { ServiceItem, PortfolioItem, TrustPillar, TestimonialItem, FaqItem } from '../types';
import { ASSETS } from './images';

export const COMPANY_INFO = {
  name: 'Raph2 Interior Expert',
  founder: 'Ogunwale Raphael',
  founderTitle: 'Founder & Lead Interior Specialist',
  tagline1: '...perfect finishing, stunning spaces',
  tagline2: 'We transform spaces into beautiful experiences.',
  philosophy: "We don't just design interiors, we create experiences.",
  phone1: '09061402498',
  phone2: '07088085470',
  formattedPhone1: '+234 906 140 2498',
  formattedPhone2: '+234 708 808 5470',
  whatsappUrl1: 'https://wa.me/2349061402498?text=Hello%20Raph2%20Interior%20Expert,%20I%20would%20like%20to%20request%20a%20free%20consultation%20and%20quote%20for%20my%20property.',
  whatsappUrl2: 'https://wa.me/2347088085470?text=Hello%20Raph2%20Interior%20Expert,%20I%20need%20expert%20interior%20finishing%20services.',
  facebookUrl: 'https://www.facebook.com/raphael.ogunwale',
  facebookName: 'Ogunwale Raphael',
  workingHours: 'Mon - Sat: 7:30 AM - 7:00 PM | Sun: By Appointment',
  serviceCoverage: 'Lagos, Ogun, Oyo, Abuja & Nationwide Services across Nigeria',
  experienceYears: '8+',
  completedProjects: '500+',
  satisfactionRate: '100%',
  logoUrl: ASSETS.logo,
  founderPhotoUrl: ASSETS.founder,
};

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: 'workmanship',
    title: 'Professional Workmanship',
    subtitle: 'Zero Compromise On Precision',
    description: 'Every contour, P.O.P moulding, and paint edge is executed with surgical architectural precision. We adhere to international finishing codes.',
    metric: '99.8%',
    metricLabel: 'Flawless Execution Rate',
    iconName: 'Award',
  },
  {
    id: 'materials',
    title: 'Quality Materials Only',
    subtitle: 'High-Grade Plaster & Pigments',
    description: 'We source genuine virgin P.O.P plaster, premium moisture-barrier screeding compounds, and non-fading architectural grade paint coatings.',
    metric: '10+ Yrs',
    metricLabel: 'Durability Guarantee',
    iconName: 'ShieldCheck',
  },
  {
    id: 'timely',
    title: 'Timely Project Delivery',
    subtitle: 'Strict Milestone Adherence',
    description: 'No endless contractor delays. We run dedicated specialist crews with strict project milestones, handing over your space exactly on schedule.',
    metric: '100%',
    metricLabel: 'On-Time Milestones',
    iconName: 'Clock',
  },
  {
    id: 'pricing',
    title: 'Affordable & Transparent Pricing',
    subtitle: 'Maximum Value for Every Naira',
    description: 'Comprehensive Bill of Quantities (BOQ) with zero hidden charges. Luxury finishes tailored to both executive and premium private budgets.',
    metric: '0%',
    metricLabel: 'Hidden Fee Guarantee',
    iconName: 'Coins',
  },
  {
    id: 'satisfaction',
    title: '100% Customer Satisfaction',
    subtitle: 'Our Word is Our Bond',
    description: 'Post-project inspection, customer walkthrough, and a touch-up warranty ensure you are completely in love with your newly transformed space.',
    metric: '500+',
    metricLabel: 'Delighted Clients',
    iconName: 'Sparkles',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'pop-ceiling',
    title: 'P.O.P Ceiling Design & Casting',
    shortDesc: 'Artisanal decorative plaster of Paris ceilings, recessed warm LED troughs, coffered layouts, and acoustic balance.',
    fullDesc: 'Custom architectural P.O.P ceilings engineered with superior structural anchoring, crack-resistant plaster mixes, and ambient concealed lighting. Whether minimal contemporary flat bulkheads or ornate classical mouldings, we elevate the vertical dimension of your interior.',
    tagline: 'Sculpted elegance overhead that redefines modern spatial luxury.',
    deliveryTime: '3 - 7 Days typical room turnaround',
    badge: 'Signature Specialty',
    imageUrl: ASSETS.popCeiling,
    features: [
      'Concealed warm cove & perimeter LED lighting channels',
      'Anti-crack structural reinforcement & virgin gypsum compounds',
      'Bespoke TV consoles & integrated media wall bulkheads',
      'Curved, coffered, and multi-tier geometric drops',
      'Smooth jointing with zero shadow lines or sagging'
    ]
  },
  {
    id: 'wallpaper-installation',
    title: 'Luxury Wallpaper & 3D Wall Coverings',
    shortDesc: 'High-end embossed vinyl, textured textile wall coverings, metallic accents, and moisture-resistant feature walls.',
    fullDesc: 'Transform plain walls into tactile focal points. We handle pattern-matched installation of imported European and luxury Asian wallpapers with seamless edge joints, anti-bubble application, and peel-proof industrial primers.',
    tagline: 'Rich textures and captivating patterns that infuse walls with depth.',
    deliveryTime: '1 - 2 Days per room',
    imageUrl: ASSETS.wallpaper2,
    features: [
      'Precision pattern alignment with invisible vertical seams',
      'Moisture-resistant & washable vinyl substrates',
      '3D geometric relief walls and acoustic panels',
      'Custom luxury accent walls for bedrooms, living lounges & VIP offices',
      'Specialized mildew-inhibiting wallpaper adhesives'
    ]
  },
  {
    id: 'painting-screeding',
    title: 'Interior & Exterior Luxury Painting',
    shortDesc: 'Premium satin, silk, matte velvet, and weather-shield coating applications with laser-straight cutting-in.',
    fullDesc: 'Masterful paint execution that brings out the true warmth and brilliance of your property. We only use certified top-tier brands like Dulux, Berger, and customized architectural tintings with high scrub resistance and zero patchy blotches.',
    tagline: 'Vibrant color chemistry, uniform coats, and mirror-straight edges.',
    deliveryTime: '2 - 5 Days dependent on property size',
    badge: 'High Demand',
    imageUrl: ASSETS.housePainting,
    features: [
      'Premium Silk, Satin, Matt, and Gloss coat formulations',
      'Anti-fungal, damp-proof sealers and alkaline-resistant basecoats',
      'Expert color matching and complementary palette consultations',
      'Exterior weather-shield protection against intense tropical sun & rain',
      'Dust-free masking tape protection on floors, doors, and sockets'
    ]
  },
  {
    id: 'wall-screeding',
    title: 'Mirror-Smooth Wall Screeding',
    shortDesc: 'Multi-layer POP screeding eliminating surface undulations for baby-smooth plaster perfection.',
    fullDesc: 'A flawless paint job is 90% preparation. Our screeding team coats concrete walls with multi-tier high-adhesion POP putty, hand-sanding with fine-grit papers to eliminate trowel marks, waves, and pinholes before primer application.',
    tagline: 'The indispensable foundation for runway-smooth, flawless walls.',
    deliveryTime: '2 - 4 Days per apartment',
    imageUrl: ASSETS.wallSketting,
    features: [
      'High-grade bonding agents to prevent future hollow popping',
      'Double to triple micro-coat screed application',
      'Precision hand & orbital machine sanding for mirror finish',
      'Crack bridge mesh installation along structural joints',
      'Complete remediation of rough bricklayer plaster imperfections'
    ]
  },
  {
    id: 'taroline-finishing',
    title: 'Taroline / Tyrolean Exterior Finishes',
    shortDesc: 'Heavy-duty textured plastering, weather-resistant stucco, and architectural facade shielding.',
    fullDesc: 'Protect and beautify your exterior building envelope against harsh weather conditions. Our Tyrolean / Taroline textured finishes offer superior water shedding, algae resistance, and textured acoustic dampening with a timeless stately look.',
    tagline: 'Rugged exterior durability meets sophisticated architectural texture.',
    deliveryTime: '4 - 10 Days',
    imageUrl: ASSETS.tarolyne,
    features: [
      'Sprayed & hand-troweled granular textured finishes',
      'Heavy-duty all-weather protection against rain seepage',
      'UV-resistant color pigments that resist sun fading',
      'Hides exterior masonry irregularities and hairline settlement cracks',
      'Ideal for residential mansions, perimeter fences, and commercial complexes'
    ]
  },
  {
    id: 'renovations',
    title: 'Turnkey Luxury Interior Renovations',
    shortDesc: 'Comprehensive residential and corporate office space transformations from bare shell to luxury handover.',
    fullDesc: 'From old tired spaces to breathtaking executive suites. Ogunwale Raphael and our dedicated multidisciplinary crew take charge of demolition, electrical lighting rewiring, ceiling reconstruction, wall treatment, and final styling.',
    tagline: 'Complete spatial renewal that multiplies property value and prestige.',
    deliveryTime: '1 - 3 Weeks turnkey delivery',
    badge: 'VIP Full Service',
    imageUrl: ASSETS.fullInterior,
    features: [
      'Full architectural spatial consultation and conceptual 3D planning',
      'Integrated lighting engineering (chandeliers, spotlights, LED strips)',
      'Acoustic wall paneling, bespoke TV consoles & fluted profiles',
      'Fast-track execution with minimal client stress',
      'Dedicated project manager and daily photographic progress reports'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // --- P.O.P CEILINGS ---
  {
    id: 'p1',
    title: 'Executive Duplex Floating P.O.P Ceiling Design',
    category: 'pop',
    categoryLabel: 'P.O.P Ceiling',
    location: 'Lekki Phase 1, Lagos',
    imageUrl: ASSETS.popCeiling,
    summary: 'Multi-tiered floating ceiling with concealed perimeter warm 3000K LED illumination and recessed downlight spots.',
    details: [
      'Multi-drop central bulkhead with recessed square trimless spotlights',
      'Acoustic dampening virgin plaster of Paris casting',
      'Seamless mirror-finish jointing without visible seams'
    ],
    materials: ['Virgin P.O.P Plaster', 'Galvanized Structural Framework', 'Warm White LED Cove Strips', 'Dulux Silk White']
  },
  {
    id: 'p2',
    title: 'Contemporary Geometric P.O.P Ceiling & Recessed Drops',
    category: 'pop',
    categoryLabel: 'P.O.P Ceiling',
    location: 'Maitama, Abuja',
    imageUrl: ASSETS.popCeiling2,
    summary: 'Artisanal geometric coffered ceiling grid creating spacious vertical height and clean modern lines.',
    details: [
      'Dual color recessed coves with alternating warm amber and neutral day lights',
      'Reinforced anchor brackets for large bespoke suspension chandeliers',
      'Fire-retardant virgin plaster formulation'
    ],
    materials: ['Rigid Ceiling Framing', 'Plaster of Paris Casting', 'Recessed Downlights', 'Anti-Humidity Primer']
  },
  {
    id: 'p3',
    title: 'Radial Circular Medallion P.O.P Drop Ceiling',
    category: 'pop',
    categoryLabel: 'P.O.P Ceiling',
    location: 'Victoria Island, Lagos',
    imageUrl: ASSETS.popCeiling3,
    summary: 'Sculpted concentric circular drop ceiling with golden ambient cove illumination and grand chandelier centerpiece.',
    details: [
      'Precision curved drywall moulding casting with zero undulations',
      'Concealed halo cove lighting channel with dimmable driver support',
      'High-grade ceiling rose reinforcement for heavy crystal fixtures'
    ],
    materials: ['Fine Cast Gypsum Plaster', 'Flexible Metal Perimeter Tracks', 'Warm Amber LED Ribbon', 'Satin Finish Coat']
  },
  {
    id: 'p4',
    title: 'Bespoke Royal Dome P.O.P Ceiling & Chandelier Niche',
    category: 'pop',
    categoryLabel: 'P.O.P Ceiling',
    location: 'Ikeja GRA, Lagos',
    imageUrl: ASSETS.popCeiling4,
    summary: 'Classical circular cove ceiling niche engineered to anchor luxury crystal chandelier with 360-degree indirect halo glow.',
    details: [
      'Multi-tiered stepped ring profile with hidden perimeter lighting',
      'Acoustic balance dampening for high-ceiling living halls',
      'Flawless skim coat finishing prior to chandelier mount'
    ],
    materials: ['Virgin P.O.P Compound', 'Reinforced Suspension Rods', '3000K Warm LED Channels', 'Berger Velvet White']
  },
  {
    id: 'p5',
    title: 'Modern Organic Curved P.O.P Ceiling with Dual Lighting',
    category: 'pop',
    categoryLabel: 'P.O.P Ceiling',
    location: 'Chevron, Lekki, Lagos',
    imageUrl: ASSETS.popCeiling5,
    summary: 'Fluid curving architectural bulkhead with dynamic dual-tone perimeter LED troughs and central pendant accent.',
    details: [
      'Freeform architectural curves sculpted with specialized plaster forms',
      'Integrated dual-circuit lighting (calming blue accent + warm cove glow)',
      'Reinforced corner joints to prevent settlement hairline cracks'
    ],
    materials: ['Premium Gypsum Casting', 'Heavy Gauge Steel Channels', 'RGB/Dual-Tone Strip Lights', 'Dulux Silk Emulsion']
  },

  // --- WALL SKIRTING & MOULDINGS ---
  {
    id: 'p6',
    title: 'Modern Fluted Skirting & Picture Frame Wainscoting',
    category: 'moulding',
    categoryLabel: 'Wall Skirting & Mouldings',
    location: 'Ikoyi, Lagos',
    imageUrl: ASSETS.wallSketting,
    summary: 'Handcrafted floor-to-ceiling box mouldings paired with precision vertical fluted wainscoting panel strips.',
    details: [
      'Geometric symmetry aligned with room switch points and air conditioning vents',
      'Multi-pass mirror screeding inside all recessed frame cavities',
      'Durable moisture-resistant high-density polymer and plaster mouldings'
    ],
    materials: ['High-Density Wainscoting Profiles', 'Super-Bond Adhesive Compound', 'Mirror Screed Plaster', 'Velvet Off-White Paint']
  },
  {
    id: 'p7',
    title: 'Royal Classical Wall Mouldings with Gold Leaf Embellishments',
    category: 'moulding',
    categoryLabel: 'Wall Skirting & Mouldings',
    location: 'Asokoro, Abuja',
    imageUrl: ASSETS.wallSketting1,
    summary: 'Intricate baroque-style wall moulding frames highlighted with hand-gilded gold leaf acanthus crests and smooth screeded backdrop.',
    details: [
      'Hand-crafted corner cartouches and ornamental floral appliques',
      'Gilded gold highlighting along moulding profile contours',
      'Textured stucco backdrop framed inside satin border panels'
    ],
    materials: ['Classical Polyurethane Mouldings', 'Italian Gold Leaf Foil', 'Texture Stucco Compound', 'Protective Clear Polycoat']
  },
  {
    id: 'p8',
    title: 'Executive Dining Hall Fluted Wall Pillars & Wainscot Trim',
    category: 'moulding',
    categoryLabel: 'Wall Skirting & Mouldings',
    location: 'Banana Island, Lagos',
    imageUrl: ASSETS.wallSketting3,
    summary: 'Integrated vertical fluted wall pillars framing fine art, paired with warm sconce lighting and ceiling perimeter mouldings.',
    details: [
      'Floor-to-ceiling vertical fluting serving as architectural wall dividers',
      'Concealed conduit integration for vertical ambient sconces',
      'Seamless transition into recessed ceiling bulkhead and cornice'
    ],
    materials: ['Precision Fluted Composite Panels', 'Architectural Bonding Mastic', 'Silk White Wall Finish', 'Warm Sconce Fixtures']
  },
  {
    id: 'p9',
    title: 'Velvet Charcoal Geometric Wall Mouldings & Chandelier Backdrop',
    category: 'moulding',
    categoryLabel: 'Wall Skirting & Mouldings',
    location: 'Magodo Phase 2, Lagos',
    imageUrl: ASSETS.wallSketting4,
    summary: 'Crisp white geometric panel mouldings contrasting against luxury velvet charcoal screeded walls beneath a cascading gold chandelier.',
    details: [
      'Laser-aligned rectangular grid frames creating an imposing feature focal wall',
      'Double baseboard wainscoting concealing floor skirting perimeter',
      'Ultra-smooth deep charcoal matte paint application'
    ],
    materials: ['Architectural Skirting Mouldings', 'Laser-Level Sizing System', 'Matte Charcoal Velvet Paint', 'Dulux Silk White Trim']
  },

  // --- WALLPAPERS & 3D WALL PANELS ---
  {
    id: 'p10',
    title: 'Luxury Marble & Gold Vein Feature Wall Panels',
    category: 'wallpaper',
    categoryLabel: 'Wallpapers & 3D Panels',
    location: 'Lekki Phase 2, Lagos',
    imageUrl: ASSETS.wallpaper2,
    summary: 'Seamless high-gloss Italian marble wallpaper panels with inlaid brass strips and custom metallic art installations.',
    details: [
      'Seamless vertical pattern matching across multiple continuous panels',
      'Inlaid brushed gold metal T-bar divider trims',
      'Waterproof, scratch-resistant heavy vinyl surface with easy wipe-clean durability'
    ],
    materials: ['Heavyweight Vinyl Marble Wallpaper', 'Brass Divider Strips', 'Anti-Fungal Wallpaper Adhesive', 'Surface Primer']
  },
  {
    id: 'p11',
    title: 'Regal Gold Damask Embossed Feature Wallpaper',
    category: 'wallpaper',
    categoryLabel: 'Wallpapers & 3D Panels',
    location: 'GRA, Ikeja, Lagos',
    imageUrl: ASSETS.wallpaper3,
    summary: 'Heavy-gauge vinyl damask wallpaper with tactile metallic gold filigree on jet-black textured backdrop for executive lounge.',
    details: [
      'Flawless repeat pattern alignment across vertical seams with zero overlap visibility',
      'Non-woven backing breathable against wall moisture',
      'Custom framed wooden credenza accenting'
    ],
    materials: ['Embossed Damask Vinyl', 'Industrial German Wallpaper Paste', 'Moisture Sealer Undercoat']
  },
  {
    id: 'p12',
    title: 'Sculpted Dune Wave 3D Wall Panelling & Media Unit',
    category: 'wallpaper',
    categoryLabel: 'Wallpapers & 3D Panels',
    location: 'Victoria Garden City (VGC), Lagos',
    imageUrl: ASSETS.wallpanel3d1,
    summary: 'Fluid 3D wave relief panels creating captivating acoustic texture with integrated warm overhead downlight accents.',
    details: [
      'Sculpted dune relief panels with shadow-play depth under directional lighting',
      'Reinforced wall mounting backing large screen TV installations',
      'Acoustic sound dampening for home theater rooms'
    ],
    materials: ['Plant Fiber Composite 3D Panels', 'Heavy Duty Acrylic Wall Mastic', 'Warm Downlight Fixtures', 'Matte Earth Pigment']
  },
  {
    id: 'p13',
    title: 'Architectural Ripple 3D Accent Wall Panels',
    category: 'wallpaper',
    categoryLabel: 'Wallpapers & 3D Panels',
    location: 'Gwarinpa, Abuja',
    imageUrl: ASSETS.wallpanel3d2,
    summary: 'Symmetrical high-definition ripple 3D wall panels in matte white, creating sculptural depth in modern dining suite.',
    details: [
      'Centrally centered diamond wave convergence with unbroken panel seams',
      'Micro-caulked panel joints sanded to a monolithic single-piece finish',
      'Directional overhead spotlight integration to enhance 3D shadow geometry'
    ],
    materials: ['High-Density Gypsum 3D Tiles', 'Joint Filler & Smoother', 'Spotlight Track Bar', 'Dulux Velvet Matt White']
  },
  {
    id: 'p14',
    title: 'Commercial Hall Full-Length Acoustic 3D Wave Cladding',
    category: 'wallpaper',
    categoryLabel: 'Wallpapers & 3D Panels',
    location: 'Marina, Lagos Island',
    imageUrl: ASSETS.wallpanel3d3,
    summary: 'Continuous unbroken 3D acoustic wave panel wall covering for corporate reception and VIP walkway.',
    details: [
      'High-traffic impact-resistant 3D modular tile layout',
      'Concealed cable pathways behind wall frame',
      'Monolithic jointless aesthetic achieved through precision seam finishing'
    ],
    materials: ['Impact-Modified 3D Polymer Panels', 'Industrial Structural Adhesive', 'Acoustic Backing Underlay', 'Satin Finish Topcoat']
  },

  // --- PAINTING & SCREEDING ---
  {
    id: 'p15',
    title: 'Luxury Villa Exterior & Interior Premium Painting',
    category: 'painting',
    categoryLabel: 'Painting & Screeding',
    location: 'Banana Island, Lagos',
    imageUrl: ASSETS.housePainting,
    summary: 'Multi-coat screeded wall preparation followed by satin velvet finish coatings with extreme edge precision.',
    details: [
      'Triple-pass screeding resolving previous uneven bricklayer plaster',
      'Zero glare velvety satin finish with high washability rating',
      'Precise laser line cutting against skirting boards and mouldings'
    ],
    materials: ['High-Adhesion POP Putty', 'Berger Premium Silk Coat', 'Alkaline Sealer Base', 'Masking Tape Precision']
  },
  {
    id: 'p16',
    title: 'Architectural Granular Textured Coating & Mirror Screeding',
    category: 'painting',
    categoryLabel: 'Painting & Screeding',
    location: 'Ajah, Lagos',
    imageUrl: ASSETS.painting,
    summary: 'High-durability granular quartz textured architectural coating offering supreme scrub resistance and rich visual warmth.',
    details: [
      'Weather-resistant textured quartz formulation masking masonry settlement irregularities',
      'Uniform granule distribution with zero clumping or patchy areas',
      'Alkaline-resistant base coat preventing efflorescence and peeling'
    ],
    materials: ['Quartz Textured Plaster Paint', 'Anti-Damp Alkali Primer', 'Acrylic Bonding Polymer', 'UV-Stabilized Pigments']
  },

  // --- TAROLINE / TYROLEAN ---
  {
    id: 'p17',
    title: 'Stately Residence Tyrolean / Taroline Textured Facade',
    category: 'taroline',
    categoryLabel: 'Taroline / Tyrolean',
    location: 'Bodija, Ibadan, Oyo State',
    imageUrl: ASSETS.tarolyne,
    summary: 'Heavy-duty textured Taroline plaster coating engineered to withstand high humidity and tropical rainfall.',
    details: [
      'Granular mechanical projection providing uniform textured grain',
      'Waterproof silicone topcoat resisting algae, mildew, and grime stains',
      'Contrasting smooth painted architraves and plinths'
    ],
    materials: ['High-Strength Quartz Plaster', 'Siliconized Exterior Shield', 'Anti-Algae Additives', 'Cement Binder']
  },

  // --- FULL RENOVATIONS, HOME BARS & TV CONSOLES ---
  {
    id: 'p18',
    title: 'Grand Palace Hallway & Turnkey Interior Renovation',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Guzape, Abuja',
    imageUrl: ASSETS.fullInterior,
    summary: 'Turnkey interior transformation featuring bespoke ceiling trays, illuminated wall mouldings, marble-sheen tiles, and mood lighting.',
    details: [
      'Complete spatial overhaul from bare walls to luxury handover',
      'Dual-circuit blue and warm white lighting scheme with floor-wash spotlights',
      'Floor-to-ceiling classical mouldings framing curated artworks'
    ],
    materials: ['Virgin Gypsum Ceilings', 'Polyurethane Box Mouldings', 'Concealed LED Cove Lighting', 'Ultra-Gloss Porcelain Tiles']
  },
  {
    id: 'p19',
    title: 'Luxury Backlit Grid P.O.P Home Bar & Display Showcase',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Lekki Phase 1, Lagos',
    imageUrl: ASSETS.bar,
    summary: 'Flush-wall cast P.O.P wine and spirits display unit featuring 12 individually illuminated warm LED display cubbies.',
    details: [
      'Precision grid framing with hidden internal wire channels',
      'Warm LED puck spotlights highlighting individual wine bottles and decor',
      'Heavy-duty internal steel reinforcement supporting significant shelving weight'
    ],
    materials: ['Structural Gypsum Plaster', 'Galvanized Metal Framework', 'Warm White LED Recessed Mini-Pucks', 'Satin White Topcoat']
  },
  {
    id: 'p20',
    title: 'Recessed P.O.P Bar Niche with Multi-Color Mood Lighting',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Ogudu GRA, Lagos',
    imageUrl: ASSETS.bar1,
    summary: 'Architectural display wall with integrated accent downlights, contrasting wallpaper back-panel, and lower decorative skirt.',
    details: [
      'Multi-level niche layout with central violet accent focal box',
      'Patterned wallpaper backing framed inside lower wall moulding',
      'Integrated switches controlling independent lighting zones'
    ],
    materials: ['Cast P.O.P Shelving', 'Recessed Downlights', 'Designer Wallpaper Backing', 'Lower Box Mouldings']
  },
  {
    id: 'p21',
    title: 'Curated Executive Lounge Curio & Mini-Bar Installation',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Victoria Island, Lagos',
    imageUrl: ASSETS.bar2,
    summary: 'Finished and illuminated luxury display gallery showcase integrated into executive reception lounge.',
    details: [
      'Full curio shelving unit populated with artifacts, decanters, and sculptures',
      'Flanking tall vertical light boxes creating architectural framing',
      'Seamless joint integration with polished dark marble wainscoting'
    ],
    materials: ['Reinforced Gypsum Plasterwork', 'Integrated LED Spotlights', 'Polished Marble Base Trim', 'Satin Wall Paint']
  },
  {
    id: 'p22',
    title: 'Custom Fluted Timber & Marble Floating TV Console',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Ikoyi Crescent, Lagos',
    imageUrl: ASSETS.tvShelf1,
    summary: 'Minimalist contemporary media wall combining vertical fluted oak acoustics, marble TV backing slab, and concealed floating storage.',
    details: [
      'Concealed cable chase for 75-inch TV with zero visible wires',
      'Integrated soft-close floating drawers in matching light oak tone',
      'Subtle warm perimeter halo backlighting around marble panel'
    ],
    materials: ['Fluted Timber Acoustic Panels', 'Sintered Stone Marble Slab', 'Floating Storage Credenza', 'Concealed LED Strip']
  },
  {
    id: 'p23',
    title: 'Ambient Recessed P.O.P Media Wall & Floating TV Shelving',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Magodo Phase 2, Lagos',
    imageUrl: ASSETS.tvShelf2,
    summary: 'Sculpted gypsum media console with cobalt blue halo perimeter lighting, warm interior alcoves, and hidden conduit routing.',
    details: [
      'Architectural recessed niche designed for large screen displays with side display cubbies',
      'Dual-hue lighting system: dramatic perimeter cobalt blue + warm alcove downlights',
      'Heavy-duty TV bracket anchoring directly into reinforced structural studs'
    ],
    materials: ['Cast P.O.P Media Unit', 'Dual-Color LED Illumination', 'Conduit Cable Conduits', 'Berger Velvet Silk Paint']
  },
  {
    id: 'p24',
    title: 'Integrated P.O.P Entertainment Center & TV Shelving',
    category: 'renovation',
    categoryLabel: 'Full Renovation',
    location: 'Osapa London, Lekki, Lagos',
    imageUrl: ASSETS.tvShelf,
    summary: 'Integrated entertainment center with cast P.O.P floating shelves, ambient backlight, and concealed cable channels.',
    details: [
      'Reinforced wall mounting capable of supporting large 85-inch screens',
      'Concealed conduit routing for sound systems and decoders',
      'Smooth screeded finish with contrasting luxury dark and gold tones'
    ],
    materials: ['Virgin Gypsum Plaster', 'Reinforced Metal Subframe', 'Hidden LED Channels', 'Custom Satin Topcoat']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Engr. Babatunde Alabi',
    role: 'Managing Director, Horizon Properties',
    location: 'Lekki, Lagos',
    rating: 5,
    comment: 'Ogunwale Raphael and the Raph2 Interior team are exceptional craftsmen. They delivered P.O.P ceiling designs and full screeding for our 4-unit luxury terrace in Lekki ahead of schedule. The smoothness of their wall finishing is unrivaled in this market.',
    serviceRendered: 'P.O.P Ceiling & Wall Screeding'
  },
  {
    id: 't2',
    clientName: 'Mrs. Folake Adeyemi',
    role: 'Homeowner',
    location: 'Magodo Phase 2, Lagos',
    rating: 5,
    comment: 'I was hesitant about contractors because of past disappointments, but Raphael restored my faith completely. Transparent pricing, no sudden budget surprises, and the wallpaper installation in my living room is flawless. Everyone that visits asks for his contact!',
    serviceRendered: 'Wallpaper & Interior Painting'
  },
  {
    id: 't3',
    clientName: 'Arch. Chukwuemeka Okonkwo',
    role: 'Principal Architect, Studio Bauhaus',
    location: 'Maitama, Abuja',
    rating: 5,
    comment: 'As an architect, I am extremely particular about ceiling alignment and shadow lines. Raph2 Interior executed our complex curved P.O.P ceiling design down to the exact millimeter. Raphael’s attention to detail is pure artistry.',
    serviceRendered: 'Architectural P.O.P Ceiling Design'
  },
  {
    id: 't4',
    clientName: 'Chief Olumide Adeleke',
    role: 'Private Estate Owner',
    location: 'Bodija, Ibadan',
    rating: 5,
    comment: 'The Taroline textured finishing on my country home exterior in Ibadan has survived two severe rainy seasons without a single crack or discoloration. Outstanding value and true professional integrity from Ogunwale Raphael.',
    serviceRendered: 'Tyrolean / Taroline Exterior Finishing'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'pricing',
    question: 'How do you charge for P.O.P ceiling designs and painting in Nigeria?',
    answer: 'We calculate our pricing transparently based on square meters (sqm) of the surface area, the intricacy of the architectural design (e.g. flat drop vs multi-tier curved coffering), and the selected grade of materials (virgin gypsum plaster, premium Dulux/Berger paints). We provide a detailed Bill of Quantities (BOQ) with zero hidden fees before starting work.'
  },
  {
    id: 'f2',
    category: 'technical',
    question: 'Why is wall screeding essential before applying paint?',
    answer: 'Standard masonry and cement plastering in buildings inevitably contains waviness, trowel bumps, pores, and uneven moisture suction. Screeding applies a specialized micro-fine plaster putty compound over the wall, sanded to a mirror-flat finish. Without screeding, even the most expensive paint will look dull and show rough imperfections in glancing light.'
  },
  {
    id: 'f3',
    category: 'timeline',
    question: 'How long does a standard room or 3-bedroom apartment take to complete?',
    answer: 'For a typical 3-bedroom apartment: P.O.P ceiling framing, casting, and finishing takes approximately 4 to 7 working days. Wall screeding and luxury painting typically takes another 3 to 5 days. We deploy coordinated crews to avoid unnecessary downtime and deliver on time.'
  },
  {
    id: 'f4',
    category: 'process',
    question: 'Do you take on projects outside Lagos State?',
    answer: 'Yes! While our central operations are based in Lagos and the South-West, Ogunwale Raphael and our mobile specialist crews handle high-end residential, hotel, and commercial projects across Ogun, Oyo (Ibadan), Osun, Abuja FCT, and other states across Nigeria upon arrangement.'
  },
  {
    id: 'f5',
    category: 'technical',
    question: 'What is Taroline / Tyrolean finish and how does it protect my exterior walls?',
    answer: 'Taroline (also known as Tyrolean) is a specialized cementitious textured wall coating applied mechanically to exterior building facades. It creates a durable, weather-shielding barrier that withstands intense tropical heat, torrential rainfall, and fungal growth while camouflaging minor masonry settlement cracks.'
  },
  {
    id: 'f6',
    category: 'process',
    question: 'How do I start a project with Raph2 Interior Expert?',
    answer: 'Getting started is simple! (1) Call or WhatsApp us at 09061402498 or 07088085470, or submit the quote form below. (2) We conduct a quick phone or on-site spatial assessment. (3) You receive a transparent breakdown of materials, design options, and labor costs. (4) Once approved, we schedule our expert crew and begin transformation!'
  }
];
