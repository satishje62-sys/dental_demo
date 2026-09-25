export const HOSPITAL_INFO = {
  name: "SmileCare Dental Hospital",
  tagline: "Advanced Dental Care. Gentle Treatment. Confident Smiles.",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+919876543210",
  whatsappText: "Hello SmileCare Dental Hospital, I would like to book a dental consultation.",
  email: "care@smilecare.com",
  address: "123 Dental Avenue, Near Gandhi Maidan, Patna, Bihar 800001, India",
  googleMapsUrl: "https://maps.google.com/?q=Patna+Dental+Hospital",
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM",
    sunday: "Sunday: 10:00 AM – 2:00 PM",
    emergency: "24/7 On-Call Emergency Support",
  },
  ratings: {
    score: 4.9,
    reviewsCount: "1,850+",
    source: "Google & Practo Verified Reviews",
  },
  stats: [
    { label: "Years Experience", value: "10+", icon: "Award" },
    { label: "Patients Treated", value: "10,000+", icon: "Users" },
    { label: "Dental Services", value: "15+", icon: "Stethoscope" },
    { label: "Patient Rating", value: "4.9/5", icon: "Star" },
  ]
};

export const SERVICES = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    tagline: "Preventive Care & Regular Oral Health Maintenance",
    shortDesc: "Routine checkups, ultrasonic cleaning, tartar removal, and preventive dental care for long-lasting oral wellness.",
    icon: "ShieldCheck",
    badge: "Essential Care",
    duration: "30 – 45 Minutes",
    recovery: "Immediate / Zero downtime",
    whyNeeded: [
      "Prevent cavities, gum bleeding, and persistent bad breath (halitosis)",
      "Remove stubborn plaque and calculus deposits that brushing cannot clear",
      "Early detection of micro-fractures, enamel erosion, and oral diseases",
      "Maintain sparkling clean teeth and healthy pink gums"
    ],
    procedure: [
      { step: "01", title: "Comprehensive Examination", desc: "Detailed intraoral inspection with high-definition digital intraoral cameras." },
      { step: "02", title: "Ultrasonic Scaling", desc: "Gentle removal of tartar and hardened plaque using ultrasonic vibrations and purified water spray." },
      { step: "03", title: "Polishing & Fluoride Therapy", desc: "Smooth enamel polishing to eliminate surface stains and application of protective fluoride shield." },
      { step: "04", title: "Personalized Home Care Plan", desc: "Doctor advice on proper flossing, brushing techniques, and preventative diet." }
    ],
    faqs: [
      { q: "How often should I get my teeth cleaned?", a: "Dental associations recommend professional cleaning every 6 months to maintain optimal gum health." },
      { q: "Does teeth cleaning hurt or damage enamel?", a: "No, our modern ultrasonic scaling is gentle, painless, and preserves 100% of your natural enamel." }
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    tagline: "Painless Microscopic Pulp Therapy to Save Your Natural Tooth",
    shortDesc: "Advanced treatment for infected or damaged teeth with digital rotary files and single-sitting painless technology.",
    icon: "Activity",
    badge: "Painless Protocol",
    duration: "45 – 60 Minutes (Single or 2 Sittings)",
    recovery: "1 – 2 Days (Mild tenderness managed with medication)",
    whyNeeded: [
      "Severe or throbbing toothache when chewing or lying down",
      "Prolonged sensitivity to hot or cold foods and beverages",
      "Gum swelling, tenderness, or pimple-like bumps near the infected tooth root",
      "Deep tooth decay reaching the nerve, or trauma resulting from sports or accidents"
    ],
    procedure: [
      { step: "01", title: "Painless Anesthesia", desc: "Computer-controlled gentle local numbing so you feel zero discomfort throughout." },
      { step: "02", title: "Infection Removal", desc: "Precision microscopic access and clearance of infected pulp tissues using flexible rotary titanium files." },
      { step: "03", title: "Bio-Compatible Sealing", desc: "Disinfection and hermetic 3D sealing of the root canals with gutta-percha to prevent reinfection." },
      { step: "04", title: "Crown Restoration", desc: "Placement of a durable, natural-colored Zirconia or ceramic crown for full chewing strength." }
    ],
    faqs: [
      { q: "Is root canal treatment painful?", a: "Not at SmileCare. With advanced local anesthesia and rotary tools, patients report feeling no pain—just like a standard filling." },
      { q: "Can a root canal be done in one sitting?", a: "Yes, more than 80% of our root canals are successfully completed in a single 50-minute appointment." }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    tagline: "Permanent, Natural-Looking Titanium Tooth Replacement",
    shortDesc: "Modern tooth replacement solutions that look, feel, and function just like your natural healthy teeth.",
    icon: "Anchor",
    badge: "Lifetime Durability",
    duration: "45 Minutes per implant",
    recovery: "3 – 5 Days normal routine",
    whyNeeded: [
      "Replace one, several, or all missing teeth without cutting adjacent healthy teeth",
      "Restore 100% natural chewing strength and bite stability",
      "Prevent jawbone loss and premature facial sagging caused by missing teeth",
      "Permanent alternative to loose, uncomfortable removable dentures"
    ],
    procedure: [
      { step: "01", title: "3D CBCT Bone Scan", desc: "High-resolution 3D digital imaging to map nerve positions and measure jawbone density." },
      { step: "02", title: "Guided Implant Placement", desc: "Minimally invasive placement of medical-grade titanium fixture into the jawbone." },
      { step: "03", title: "Osseointegration", desc: "Natural fusion of the implant with your jawbone over a few weeks for unmatched stability." },
      { step: "04", title: "Custom Ceramic Crown", desc: "Artisan-crafted ceramic tooth matched exactly to the shade and shape of adjacent teeth." }
    ],
    faqs: [
      { q: "How long do dental implants last?", a: "With good oral hygiene and regular checkups, dental implants are designed to last a lifetime." },
      { q: "Am I a candidate for implants if I have bone loss?", a: "Yes, our implant specialists perform gentle bone grafting and sinus lifts to restore candidacy for almost any patient." }
    ]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "Safe Clinical Laser Brightening for an Instant Sparkle",
    shortDesc: "Professional teeth whitening for a brighter smile up to 6–8 shades lighter in just 45 minutes.",
    icon: "Sparkles",
    badge: "Instant Results",
    duration: "45 Minutes",
    recovery: "Immediate (Avoid staining foods for 48 hours)",
    whyNeeded: [
      "Stains caused by tea, coffee, smoking, red wine, or colorful spices",
      "Age-related dullness and natural yellowing of enamel",
      "Upcoming weddings, interviews, milestones, or photographic occasions",
      "Boost personal self-confidence when smiling and communicating"
    ],
    procedure: [
      { step: "01", title: "Shade Analysis & Gum Barrier", desc: "Recording starting tooth shade and applying gentle liquid dam to protect delicate gum margins." },
      { step: "02", title: "Medical Whitening Gel", desc: "Application of pH-balanced, enamel-safe hydrogen peroxide gel." },
      { step: "03", title: "LED Light Activation", desc: "Cold-light LED accelerator activates the gel to break down deep organic stains gently." },
      { step: "04", title: "Post-Whitening Mineral Seal", desc: "Application of anti-sensitivity paste for silky, smooth enamel and lasting comfort." }
    ],
    faqs: [
      { q: "Does professional whitening weaken my teeth?", a: "No, clinical whitening under doctor supervision does not harm the enamel structure and is FDA-approved safe." },
      { q: "How long do the whitening results last?", a: "Results typically last 1 to 3 years depending on dietary habits and oral hygiene routine." }
    ]
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Clear Aligners",
    tagline: "Precision Alignment for Straight Teeth & Harmonic Bite",
    shortDesc: "Braces and nearly invisible clear aligners for properly aligned teeth and perfect jaw harmony.",
    icon: "Smile",
    badge: "Discreet Options",
    duration: "6 – 18 Months treatment plan",
    recovery: "Immediate adaptation within 2–3 days",
    whyNeeded: [
      "Crowded, overlapping, or rotated teeth difficult to brush",
      "Noticeable gaps and spacing between front teeth",
      "Overbite, underbite, crossbite, or open bite affecting chewing and speech",
      "Desire for discreet, removable invisible aligners (like Invisalign)"
    ],
    procedure: [
      { step: "01", title: "Digital 3D Intraoral Scanning", desc: "No messy plaster molds; we capture thousands of optical frames per second in 3D." },
      { step: "02", title: "Virtual Smile Simulation", desc: "View your teeth moving to their final straight position on our screen before starting." },
      { step: "03", title: "Custom Aligner / Bracket Fitting", desc: "Delivery of precision aligners or low-profile ceramic self-ligating brackets." },
      { step: "04", title: "Progress Monitoring", desc: "Comfortable follow-ups every 6–8 weeks to ensure smooth, predictable teeth movement." }
    ],
    faqs: [
      { q: "Are clear aligners really invisible?", a: "Yes, clear aligners are made of crystal-clear medical grade thermoplastic and are virtually undetectable from normal conversational distance." },
      { q: "Is orthodontic treatment only for teenagers?", a: "Not at all! Over 45% of our orthodontic patients are working adults choosing clear aligners." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    tagline: "Smile Enhancement & Aesthetic Dental Transformations",
    shortDesc: "Veneers, composite bonding, and digital smile design tailored to your facial proportions.",
    icon: "Gem",
    badge: "Aesthetic Excellence",
    duration: "1 – 2 Sessions",
    recovery: "Immediate",
    whyNeeded: [
      "Chipped, worn-down, or uneven tooth edges",
      "Persistent intrinsic stains that resist standard bleaching",
      "Gummy smile or irregular gum contours",
      "Desire for a symmetrical, photogenic Hollywood or natural smile makeover"
    ],
    procedure: [
      { step: "01", title: "Facial Aesthetics Analysis", desc: "Evaluation of lip line, tooth visibility, and facial symmetry for bespoke smile design." },
      { step: "02", title: "Digital Mockup", desc: "Try on your prospective smile directly in your mouth with reversible temporary resin." },
      { step: "03", title: "Ultra-Thin Veneer Fabrication", desc: "Master ceramist crafts wafer-thin porcelain veneers measuring just 0.3mm." },
      { step: "04", title: "Precision Bonding", desc: "Adhesive micro-bonding under dental loupes for seamless, stain-resistant durability." }
    ],
    faqs: [
      { q: "How long do porcelain veneers last?", a: "Porcelain veneers are extremely durable and typically last 15 to 20 years with proper dental care." },
      { q: "Will my smile look artificial?", a: "Never. We specialize in natural translucency, custom texture, and organic enamel gradients that blend seamlessly." }
    ]
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    tagline: "Gentle, Fear-Free Dental Care for Growing Smiles",
    shortDesc: "Child-friendly dental care in a playful, comforting environment to cultivate positive dental habits for life.",
    icon: "HeartHandshake",
    badge: "Child Friendly",
    duration: "20 – 30 Minutes",
    recovery: "Immediate",
    whyNeeded: [
      "Childhood tooth decay (milk teeth cavity management and prevention)",
      "Dental pit and fissure sealants to shield deep grooves from food trapping",
      "Habit breaking appliances (thumb sucking, tongue thrusting, mouth breathing)",
      "Gentle space maintainers for prematurely lost baby teeth"
    ],
    procedure: [
      { step: "01", title: "Tell-Show-Do Approach", desc: "Friendly explanation and play demonstration so children feel zero anxiety." },
      { step: "02", title: "Gentle Cleaning & Polish", desc: "Playful cleaning with bubblegum-flavored polishing paste." },
      { step: "03", title: "Protective Fluoride Varnish", desc: "Quick 2-minute application of protective mineral varnish to strengthen young enamel." },
      { step: "04", title: "Brave Patient Certificate", desc: "Positive reinforcement with stickers and bravery certificates to build lifetime confidence." }
    ],
    faqs: [
      { q: "Why treat baby teeth if they will fall out anyway?", a: "Baby teeth guide permanent adult teeth into correct positions and are crucial for proper speech development and chewing nutrition." },
      { q: "At what age should a child first visit the dentist?", a: "The first dental visit is recommended when the first tooth erupts or by the child's first birthday." }
    ]
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Treatment",
    tagline: "Gentle Removal of Impacted & Painful Third Molars",
    shortDesc: "Diagnosis and minimally invasive treatment of wisdom tooth impactions, pain, swelling, and crowding.",
    icon: "Cpu",
    badge: "Surgical Precision",
    duration: "30 – 45 Minutes",
    recovery: "3 – 5 Days normal soft food diet",
    whyNeeded: [
      "Jaw ache, recurring swelling, or difficulty opening mouth around rear jaw",
      "Impacted wisdom tooth pushing adjacent molars and causing crowding",
      "Repeated food trapping and infection beneath the gum flap (pericoronitis)",
      "Cysts or bone damage detected on panoramic dental X-rays"
    ],
    procedure: [
      { step: "01", title: "Panoramic 3D X-Ray", desc: "Exact mapping of tooth roots relative to the inferior alveolar nerve." },
      { step: "02", title: "Profound Local Numbing", desc: "Complete nerve desensitization for a 100% painless procedure." },
      { step: "03", title: "Minimally Invasive Sectioning", desc: "Gentle sectioning of the tooth for effortless extraction without jaw strain." },
      { step: "04", title: "Dissolvable Sutures & Gel", desc: "Placement of healing collagen and dissolvable stitches that require no manual removal." }
    ],
    faqs: [
      { q: "Does every wisdom tooth need extraction?", a: "No! Only wisdom teeth that are impacted, infected, crowding other teeth, or difficult to clean need treatment." },
      { q: "Will I need to stay overnight in the hospital?", a: "No, wisdom tooth removal is a walk-in, walk-out daycare procedure with same-day return home." }
    ]
  }
];

export const FACILITIES = [
  {
    id: "treatment-rooms",
    title: "Advanced Dental Treatment Rooms",
    shortDesc: "Ergonomically designed operatory suites equipped with HEPA filtration, noise reduction, and soothing ambient lighting.",
    icon: "LayoutGrid",
    badge: "Sterile Operatory",
    image: "/images/hero-dentist.jpg",
    features: ["HEPA-14 air purifiers", "Acoustic sound-proofing", "Patient entertainment ceiling monitors"]
  },
  {
    id: "digital-xray",
    title: "Digital Dental X-Ray & 3D CBCT",
    shortDesc: "Ultra-low radiation 3D cone-beam computed tomography and high-resolution panoramic imaging for millimeter precision.",
    icon: "Scan",
    badge: "Low Radiation",
    image: "/images/facility-xray.jpg",
    features: ["80% lower radiation than traditional film", "Instant 3D bone visualization", "Zero chemical development"]
  },
  {
    id: "modern-chairs",
    title: "Modern Ergonomic Dental Chairs",
    shortDesc: "Memory foam hydraulic chairs with built-in lumbar support, zero-fatigue positioning, and contactless sensor controls.",
    icon: "Armchair",
    badge: "Patient Comfort",
    image: "/images/hero-dentist.jpg",
    features: ["Multi-density memory foam", "Integrated intraoral cameras", "Smooth silent hydraulic movement"]
  },
  {
    id: "sterilization",
    title: "Sterilization & Hygiene Center",
    shortDesc: "Hospital-grade 6-step sterilization protocol featuring European Class-B autoclaves and sterile pouch packaging.",
    icon: "ShieldAlert",
    badge: "100% Sterile",
    image: "/images/facility-sterilize.jpg",
    features: ["European Class-B vacuum autoclaves", "Biological spore testing", "Color-coded instrument zones"]
  },
  {
    id: "waiting-lounge",
    title: "Comfortable Waiting Area & Lounge",
    shortDesc: "Calm, welcoming reception space with high-speed WiFi, complimentary refreshments, and comfortable designer seating.",
    icon: "Coffee",
    badge: "Warm Hospitality",
    image: "/images/clinic-interior.jpg",
    features: ["Complimentary tea & infused water", "Quiet reading space", "Zero hospital odor ambiance"]
  },
  {
    id: "private-consultation",
    title: "Private Consultation Rooms",
    shortDesc: "Dedicated confidential rooms where doctors discuss treatment plans, digital smile simulations, and transparent estimates.",
    icon: "Lock",
    badge: "100% Privacy",
    image: "/images/clinic-interior.jpg",
    features: ["Confidential medical discussions", "Large 4K diagnostic monitors", "One-on-one doctor time"]
  },
  {
    id: "modern-equipment",
    title: "Modern Dental Equipment",
    shortDesc: "Equipped with cordless rotary endo motors, soft tissue dental lasers, apex locators, and ultrasonic piezotome units.",
    icon: "Cpu",
    badge: "Next-Gen Tech",
    image: "/images/hero-dentist.jpg",
    features: ["Dental diode lasers", "Electronic apex locators", "Rotary endodontics"]
  },
  {
    id: "emergency-support",
    title: "Emergency Dental Support",
    shortDesc: "Rapid-response priority care for severe toothaches, fractured teeth, sports dental injuries, and acute infections.",
    icon: "AlertCircle",
    badge: "Priority Access",
    image: "/images/hero-dentist.jpg",
    features: ["Dedicated on-call specialist", "Fast-track emergency slot", "Instant pain relief therapy"]
  },
  {
    id: "pharmacy",
    title: "Pharmacy & Medication Support",
    shortDesc: "In-house dispensary for prescribed dental medications, post-op mouthwashes, specialized toothpastes, and oral care kits.",
    icon: "Pill",
    badge: "In-House",
    image: "/images/clinic-interior.jpg",
    features: ["Genuine prescribed antibiotics", "Post-procedure pain relief kits", "Specialist sensitive brushes"]
  },
  {
    id: "wheelchair",
    title: "Wheelchair Accessibility",
    shortDesc: "Barrier-free hospital architecture with wide entrances, automated ramps, spacious elevators, and accessible restrooms.",
    icon: "Accessibility",
    badge: "Accessible",
    image: "/images/clinic-interior.jpg",
    features: ["Step-free ramp entrances", "Wide doorway operatory access", "Assisted wheelchair service"]
  },
  {
    id: "parking",
    title: "Valet & Dedicated Parking",
    shortDesc: "Stress-free secure parking facility right in front of the hospital with complimentary valet assistance for patients.",
    icon: "Car",
    badge: "Complimentary",
    image: "/images/clinic-interior.jpg",
    features: ["Dedicated visitor parking spots", "Security camera monitored", "Valet driver assistance"]
  },
  {
    id: "clean-hygiene",
    title: "Clean & Hygienic Environment",
    shortDesc: "Rigorous surface sanitization between every patient visit, medical grade air scrubbers, and touchless sanitizers.",
    icon: "Sparkles",
    badge: "Sanitized",
    image: "/images/facility-sterilize.jpg",
    features: ["Surface disinfection after each patient", "Medical waste segregation", "Touchless sanitizer stations"]
  }
];

export const DOCTORS = [
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    role: "Senior Dental Surgeon & Clinical Director",
    specialty: "General & Restorative Dental Surgery",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experience: "12+ Years Experience",
    photo: "/images/doctor-ananya.jpg",
    rating: "4.98",
    reviewsCount: "820+ Patients",
    bio: "Dr. Ananya Sharma is a renowned Senior Dental Surgeon with over a decade of clinical experience in comprehensive dental rehabilitation, painless wisdom tooth extractions, and restorative surgery. Known for her gentle demeanor and patient-centric approach.",
    treatmentsHandled: [
      "Painless Root Canal Treatments",
      "Wisdom Tooth Impactions & Extractions",
      "Full Mouth Rehabilitation",
      "Restorative Cosmetic Dentistry",
      "Preventive Dental Care & Screenings"
    ],
    timings: "Mon – Fri: 09:30 AM – 04:00 PM | Sat: 10:00 AM – 02:00 PM",
    room: "Consultation Suite 01",
    languages: "English, Hindi"
  },
  {
    id: "dr-rahul-verma",
    name: "Dr. Rahul Verma",
    role: "Chief Implantologist & Prosthodontist",
    specialty: "Implantology & Prosthodontics",
    qualification: "BDS, MDS (Prosthodontics & Implantology)",
    experience: "10+ Years Experience",
    photo: "/images/doctor-rahul.jpg",
    rating: "4.96",
    reviewsCount: "640+ Implants Placed",
    bio: "Dr. Rahul Verma is an expert in fixed tooth replacements, 3D guided dental implants, and aesthetic ceramic crowns. He holds specialized fellowship certifications in advanced bone grafting and full-arch immediate loading implants.",
    treatmentsHandled: [
      "Single & Multiple Dental Implants",
      "All-on-4 / All-on-6 Full Arch Implants",
      "Zirconia & Ceramic Dental Crowns & Bridges",
      "Bone Grafting & Sinus Lift Procedures",
      "Precision Bite Reconstruction"
    ],
    timings: "Mon – Sat: 11:00 AM – 07:00 PM",
    room: "Implant Suite 02",
    languages: "English, Hindi"
  },
  {
    id: "dr-priya-singh",
    name: "Dr. Priya Singh",
    role: "Lead Orthodontist & Aligner Specialist",
    specialty: "Orthodontics & Dentofacial Orthopedics",
    qualification: "BDS, MDS (Orthodontics)",
    experience: "8+ Years Experience",
    photo: "/images/doctor-priya.jpg",
    rating: "4.99",
    reviewsCount: "510+ Smiles Aligned",
    bio: "Dr. Priya Singh specializes in modern orthodontic treatment for children, teenagers, and working adults. She is a certified Clear Aligner provider with a deep passion for non-extraction facial balance and smile aesthetics.",
    treatmentsHandled: [
      "Invisible Clear Aligners (Invisalign certified)",
      "Ceramic & Metal Self-Ligating Braces",
      "Bite Correction (Overbite, Crossbite)",
      "Pediatric Early Interceptive Orthodontics",
      "Digital Smile Design"
    ],
    timings: "Mon – Sat: 02:00 PM – 08:00 PM | Sun: 10:00 AM – 01:00 PM",
    room: "Orthodontic Suite 03",
    languages: "English, Hindi"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "experienced-specialists",
    title: "Experienced Specialists",
    desc: "MDS qualified surgeons, implantologists, and orthodontists with over 10+ years of dedicated clinical hospital experience.",
    icon: "Award"
  },
  {
    id: "modern-technology",
    title: "Modern Technology",
    desc: "Digital 3D CBCT scans, intraoral cameras, painless rotary tools, and LED whitening systems for predictable, precise outcomes.",
    icon: "Cpu"
  },
  {
    id: "strict-hygiene",
    title: "Strict Hygiene Standards",
    desc: "Hospital-grade European Class-B sterilization, disposable barrier covers, and certified medical air filtration in every room.",
    icon: "ShieldCheck"
  },
  {
    id: "personalized-care",
    title: "Personalized Care",
    desc: "No rushed consultations. We listen carefully, explain options in plain language, and tailor treatment plans to your comfort.",
    icon: "Heart"
  },
  {
    id: "transparent-communication",
    title: "Transparent Communication",
    desc: "Clear upfront treatment estimates before procedure start. Zero hidden costs, no unnecessary procedures, 100% honesty.",
    icon: "FileCheck"
  },
  {
    id: "comfortable-environment",
    title: "Comfortable Environment",
    desc: "Soothing private treatment suites, memory-foam dental chairs, gentle anesthesia, and a stress-free healthcare experience.",
    icon: "Smile"
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book Appointment",
    desc: "Select your preferred treatment, specialist doctor, date, and convenient time slot in under 60 seconds online or via call.",
    icon: "CalendarCheck"
  },
  {
    step: "02",
    title: "Visit & Consultation",
    desc: "Arrive at our hospital, enjoy our relaxing reception lounge, and undergo an initial gentle intraoral checkup with our doctor.",
    icon: "UserCheck"
  },
  {
    step: "03",
    title: "Diagnosis & Treatment Plan",
    desc: "We review digital X-rays together on-screen, discuss all available options, timelines, and provide a transparent written cost breakdown.",
    icon: "FileSearch"
  },
  {
    step: "04",
    title: "Begin Your Treatment",
    desc: "Experience gentle, painless dental therapy in a sterile operatory room followed by caring post-treatment follow-up and guidance.",
    icon: "Sparkles"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    treatment: "Dental Implants",
    rating: 5,
    date: "2 weeks ago",
    review: "I had two dental implants placed by Dr. Rahul Verma. I was terrified of surgery, but the experience was completely painless. The hospital is as clean as any top international hospital, and the implant feels 100% natural.",
    avatar: "RK",
    verified: true,
    city: "Patna"
  },
  {
    id: 2,
    name: "Sneha Mukherjee",
    treatment: "Root Canal & Ceramic Crown",
    rating: 5,
    date: "1 month ago",
    review: "Dr. Ananya Sharma is exceptional! My root canal was finished in a single sitting without an ounce of pain. The staff explained every step before touching a tooth. Truly patient-first care.",
    avatar: "SM",
    verified: true,
    city: "Danapur"
  },
  {
    id: 3,
    name: "Amitabh Sen",
    treatment: "Clear Aligners",
    rating: 5,
    date: "3 weeks ago",
    review: "Consulted Dr. Priya Singh for my crooked front teeth. She showed me a 3D digital simulation of my smile on day one. After 8 months with clear aligners, my smile is completely transformed. Highly recommended!",
    avatar: "AS",
    verified: true,
    city: "Patna"
  },
  {
    id: 4,
    name: "Pooja Vardhan",
    treatment: "Teeth Whitening & Cleaning",
    rating: 5,
    date: "Just recently",
    review: "Had professional teeth whitening done before my brother's wedding. The difference was immediate and natural, not chalky white. The lounge is calm, staff is polite, and hygiene is top notch.",
    avatar: "PV",
    verified: true,
    city: "Kankarbagh"
  }
];

export const FAQS = [
  {
    id: "faq-1",
    question: "How can I book an appointment?",
    answer: "You can book easily through our website using the 'Book Appointment' form by picking your preferred date, time, and doctor. You can also call us directly at +91 98765 43210 or message us on WhatsApp for instant confirmation."
  },
  {
    id: "faq-2",
    question: "Can I choose a specific doctor?",
    answer: "Yes, absolutely! On our booking form and doctor profiles, you can directly select Dr. Ananya Sharma (Surgery & RCT), Dr. Rahul Verma (Implants & Prosthodontics), or Dr. Priya Singh (Orthodontics & Aligners)."
  },
  {
    id: "faq-3",
    question: "What dental treatments are available?",
    answer: "SmileCare Dental Hospital provides end-to-end dental care: General Preventive Dentistry, Painless Root Canals, Dental Implants, Teeth Whitening, Braces & Clear Aligners, Cosmetic Dentistry & Veneers, Pediatric Dentistry, and Wisdom Tooth Extractions."
  },
  {
    id: "faq-4",
    question: "Do you provide children's dental care?",
    answer: "Yes! Our Pediatric Dentistry wing provides child-friendly dental checkups, cavity sealants, fluoride treatments, and habit counseling in a warm, gentle environment designed to eliminate fear."
  },
  {
    id: "faq-5",
    question: "Do you provide dental implants?",
    answer: "Yes, we specialize in advanced 3D CBCT guided titanium and zirconia dental implants, single-tooth replacements, and full-arch restorations with lifetime warranty options."
  },
  {
    id: "faq-6",
    question: "How long does a dental consultation take?",
    answer: "A standard initial consultation takes approximately 30 to 45 minutes. This includes your intraoral examination, any required digital X-rays, discussion of findings, and a personalized treatment roadmap."
  },
  {
    id: "faq-7",
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid photo ID, any prior dental records or X-rays you might have, and a list of your current medications or medical history. First-time registration takes just 2 minutes."
  },
  {
    id: "faq-8",
    question: "Can I reschedule my appointment?",
    answer: "Yes, you can easily reschedule or cancel your appointment free of charge by calling us or messaging our WhatsApp line at least 2 hours before your scheduled slot."
  },
  {
    id: "faq-9",
    question: "Do you provide emergency dental support?",
    answer: "Yes. For acute dental emergencies like severe unbearable toothache, a knocked-out tooth, heavy bleeding, or broken restorations, call our hospital helpline at +91 98765 43210 for prompt priority assistance."
  }
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: "smile-makeover",
    category: "Smile Makeover",
    title: "Diastema Closure & Porcelain Alignment",
    caseInfo: "32-Year-Old Patient • Full Aesthetic Harmony",
    description: "Correction of midline spacing, tooth shape proportions, and yellow undertones with conservative ceramic veneers.",
    image: "/images/smile-makeover.jpg",
    treatmentDuration: "2 Appointments over 10 Days"
  },
  {
    id: "teeth-whitening",
    category: "Teeth Whitening",
    title: "Clinical Laser Brightening",
    caseInfo: "28-Year-Old Patient • 7 Shades Brighter",
    description: "Elimination of deep coffee and dietary enamel stains using safe in-clinic cold-LED whitening gel therapy.",
    image: "/images/smile-makeover.jpg",
    treatmentDuration: "Single 45-Minute Session"
  },
  {
    id: "dental-restoration",
    category: "Dental Restoration",
    title: "Crown & Bite Rehabilitation",
    caseInfo: "45-Year-Old Patient • Chewing Strength Restored",
    description: "Restoration of worn chipped anterior enamel with high-strength biomimetic Zirconia restorations.",
    image: "/images/smile-makeover.jpg",
    treatmentDuration: "2 Appointments"
  }
];
