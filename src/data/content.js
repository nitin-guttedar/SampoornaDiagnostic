import { ASSETS } from './assets';

export const HERO_CONTENT = {
  heading: "Sampoorna Diagnostic Center",
  kannadaHeading: "ಸಂಪೂರ್ಣ ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಸೆಂಟರ್",
  highlight: "Accurate Diagnosis, Better Care",
  subheading: "Advanced CT, Ultrasound, X-Ray and Laboratory services in Madhugiri, Tumkur district – all under one roof.",
  intro: "Sampoorna Diagnostic Center is a modern, patient-focused diagnostic facility located on K.H. Road near Doomlight Circle in Madhugiri, Tumkur district. We offer a comprehensive range of imaging and laboratory services supported by experienced radiologists, pathologists and superspeciality consultants, so that patients and referring doctors receive accurate reports and timely clinical support.",
  badge: "16-Slice CT Scan • 1st Time in Madhugiri",
  kpmeBadge: "KPME Reg: TMK01236ALCDS",
};

export const KEY_BENEFITS = [
  {
    id: "accuracy",
    icon: "Target",
    title: "Accurate Results",
    kannadaTitle: "ನಿಖರ ಫಲಿತಾಂಶಗಳು",
    desc: "Advanced equipment for high-quality imaging and lab reports with multi-level clinical validation.",
    highlight: "Double-checked Quality",
    color: "#00a859"
  },
  {
    id: "timely",
    icon: "Clock",
    title: "Timely Reports",
    kannadaTitle: "ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ವರದಿಗಳು",
    desc: "Streamlined digital workflows to deliver reports quickly via WhatsApp & Portal for faster clinical decisions.",
    highlight: "Fast Turnaround",
    color: "#0b58ca"
  },
  {
    id: "expert",
    icon: "UserCheck",
    title: "Expert Consultation",
    kannadaTitle: "ತಜ್ಞ ವೈದ್ಯರ ಸಮಾಲೋಚನೆ",
    desc: "Experienced radiologists, cardiology specialists and visiting superspeciality consultants headed by Dr. Somashekhar M.B.",
    highlight: "Renowned Specialists",
    color: "#f59e0b"
  },
  {
    id: "trusted",
    icon: "ShieldCheck",
    title: "Trusted Care",
    kannadaTitle: "ವಿಶ್ವಾಸಾರ್ಹ ಆರೈಕೆ",
    desc: "Transparent procedures, clear communication, compassionate staff and sanitized clinical environments.",
    highlight: "Ethical & Transparent",
    color: "#10b981"
  }
];

export const SERVICES = [
  {
    id: "ct-scan",
    title: "Multislice CT Scan",
    badge: "16-Slice GE Technology",
    shortDesc: "High-resolution CT for brain, chest, abdomen, spine and trauma evaluation.",
    fullDesc: "Our high-speed 16-slice CT scanner provides volumetric, ultra-thin cross-sectional imaging with low-radiation protocols. Essential for rapid acute trauma assessment, stroke detection, chest pathologies, high-resolution abdominal evaluations, and spine imaging.",
    tests: [
      "CT Brain / Stroke Imaging",
      "HRCT Chest & Lungs",
      "CT Abdomen & Pelvis (Triple Phase)",
      "CT Spine (Cervical / Lumbar / Dorsal)",
      "CT Angiography & Vascular Studies",
      "CT Guided Biopsies & Fine Needle Procedures"
    ],
    features: [
      "Sub-millimeter slice reconstruction",
      "Smart dose radiation reduction",
      "Fast 3D multiplanar reconstructions",
      "Available for emergency trauma cases"
    ],
    modelKey: "ctScan",
    image: ASSETS.folderPortfolio
  },
  {
    id: "ultrasound",
    title: "Ultrasound & Doppler",
    badge: "High-Resolution 3D/4D",
    shortDesc: "Obstetric, abdominal, small-parts and vascular colour Doppler studies.",
    fullDesc: "Equipped with advanced multi-frequency acoustic probes and high-definition color Doppler imaging. Ideal for pregnancy scans, anomaly detection, fetal well-being, liver and gall bladder assessment, thyroid, breast, scrotum, and vascular circulation.",
    tests: [
      "Obstetric / Pregnancy 3D/4D Scans",
      "Fetal Anomaly & NT Scan",
      "Abdomen & Pelvis Ultrasonography",
      "Arterial & Venous Color Doppler (Limbs)",
      "Carotid & Renal Doppler Studies",
      "Small Parts: Thyroid, Scrotum, Musculoskeletal"
    ],
    features: [
      "Real-time hemodynamic blood flow mapping",
      "Non-invasive and completely radiation-free",
      "Gentle compassionate maternal care",
      "Instant high-definition thermal printouts"
    ],
    modelKey: "ultrasound",
    image: ASSETS.folderPortfolio
  },
  {
    id: "x-ray",
    title: "Digital X-Ray",
    badge: "High-Frequency Low Dose",
    shortDesc: "Fast, low-dose digital X-ray for bones, chest, joints and routine imaging.",
    fullDesc: "Equipped with advanced digital flat-panel radiography that dramatically minimizes patient radiation exposure while providing razor-sharp diagnostic clarity for fractures, orthopedic injuries, chest infections, and joint evaluations.",
    tests: [
      "Chest X-Ray (PA / AP / Lateral View)",
      "Orthopedic Bone & Joint Radiographs",
      "Spine Series (Cervical, Thoracic, Lumbar)",
      "Abdomen Erect & Supine X-Ray",
      "PNS (Para-Nasal Sinuses) & Skull",
      "Pre-operative Fitness Chest Radiography"
    ],
    features: [
      "Up to 70% lower radiation dosage",
      "Instant digital plate acquisition",
      "Crystal-clear bone trabecular visualization",
      "Digital film and high-res WhatsApp copies"
    ],
    modelKey: "xray",
    image: ASSETS.folderPortfolio
  },
  {
    id: "laboratory",
    title: "Hi-Tech Laboratory",
    badge: "Automated Analyzers",
    shortDesc: "Biochemistry, hematology, clinical pathology, hormones and immunology.",
    fullDesc: "Fully automated, temperature-controlled laboratory platform with internal and external quality assurance. Featuring computerized 5-part hematology counters, automated biochemistry analyzers, and chemiluminescence immunoassay testing.",
    tests: [
      "Complete Blood Count (CBC) with ESR & Indices",
      "Liver Function Test (LFT) & Kidney Profile (KFT)",
      "Lipid Profile & Cardiac Biomarkers (Troponin)",
      "Thyroid Profile (T3, T4, TSH)",
      "HbA1c Glycated Hemoglobin & Blood Sugar Profiles",
      "Urine Analysis, Stool Examination & Electrolytes",
      "Vitamin D, Vitamin B12, Calcium & Iron Studies"
    ],
    features: [
      "Barcoded sample identification",
      "Zero manual transcription errors",
      "Temperature-controlled sample preservation",
      "Routine results in 90 to 120 minutes"
    ],
    modelKey: "microscope",
    image: ASSETS.bannerFacility
  },
  {
    id: "cardiology",
    title: "Echo, TMT & Cardiology",
    badge: "Heart & Vascular Health",
    shortDesc: "Cardiac imaging, 2D Echo, and stress tests for comprehensive heart evaluation.",
    fullDesc: "Non-invasive cardiac diagnostic suite designed to detect early ischemic heart disease, coronary artery insufficiency, valvular conditions, and hypertension impacts under experienced cardiologist guidance.",
    tests: [
      "2D Echocardiography with Color Doppler",
      "Treadmill Test (TMT / Exercise Stress Test)",
      "12-Lead Computerized High-Precision ECG",
      "Peripheral Vascular Cardiac Health Check",
      "Post-Infarction Cardiac Monitoring"
    ],
    features: [
      "Computerized treadmill with graded protocols",
      "Real-time continuous ST segment monitoring",
      "Emergency resuscitation equipment standby",
      "Detailed cardiologist report"
    ],
    modelKey: "ctScan",
    image: ASSETS.folderPortfolio
  },
  {
    id: "consultations",
    title: "Superspeciality Consultations",
    badge: "Specialist OPD Clinics",
    shortDesc: "Referral-based scheduled clinics for integrated clinical opinions.",
    fullDesc: "Bridge the gap between diagnostics and targeted therapeutic care. Scheduled consultation clinics with visiting superspecialists including cardiologists, neurologists, nephrologists, orthopedicians, and general physicians.",
    tests: [
      "Cardiology OPD Consultation",
      "Neurology & Stroke Follow-Up",
      "Orthopedic & Joint Consultation",
      "Diabetic & Endocrine Consultation",
      "Second Opinion on CT & Imaging Studies"
    ],
    features: [
      "Integrated diagnostics + clinical advice",
      "Prior appointment scheduling",
      "Patient-centric holistic guidance",
      "Collaboration with local family physicians"
    ],
    modelKey: "dna",
    image: ASSETS.bannerFacility
  }
];

export const ABOUT_CONTENT = {
  heading: "About Sampoorna Diagnostic Center",
  subheading: "Reliable, Evidence-Based Diagnostics Close to Home",
  lead: "Sampoorna Diagnostic Center was established to provide reliable, evidence-based diagnostic services close to home for the people of Madhugiri and Tumkur district. By combining advanced imaging technology with a high-standard laboratory and experienced consultants, we help clinicians arrive at accurate diagnoses and treatment plans.",
  registration: "KPME Reg: TMK01236ALCDS",
  director: "Dr. Somashekhar M.B.",
  mission: "To deliver accurate, timely and ethically reported diagnostic results that support better clinical outcomes.",
  vision: "To be the most trusted diagnostic center in the Madhugiri–Tumkur region, recognized for professional standards, patient comfort and collaboration with the medical community.",
  values: [
    { title: "Accuracy", desc: "Uncompromising precision in every test, scan, and pathological report." },
    { title: "Compassion", desc: "Empathetic patient care that puts comfort, safety, and respect first." },
    { title: "Transparency", desc: "Clear reporting, upfront honest pricing, and transparent procedural explanations." },
    { title: "Ethics", desc: "Unwavering commitment to medical ethics, patient confidentiality, and genuine healthcare." }
  ],
  infrastructure: [
    "16-Slice Multislice CT Scanner with low-radiation protocols",
    "Digital Radiography (X-Ray) suite with instant digital capture",
    "High-resolution Color Doppler Ultrasound systems",
    "Fully automated biochemistry, hematology & immunology laboratory platform",
    "Dedicated 100% power backup generators to ensure uninterrupted scanning",
    "Strict temperature-controlled environment for diagnostic equipment and sample preservation"
  ]
};

export const BLOG_POSTS = [
  {
    id: "ct-scan-indications",
    title: "When Should You Get a CT Scan? Common Indications Explained",
    category: "Radiology Guide",
    readTime: "4 min read",
    excerpt: "Learn how multislice CT scans help detect head trauma, strokes, pulmonary infections, and abdominal emergencies with pinpoint accuracy.",
    content: "Computed Tomography (CT) uses advanced X-ray beams rotating around the body to create cross-sectional slices. Common indications include sudden acute headaches or head trauma to rule out brain hemorrhage, chest symptoms where HRCT chest reveals subtle pulmonary changes, abdominal pain (such as appendicitis or kidney stones), and multi-trauma evaluation. At Sampoorna Diagnostic in Madhugiri, our 16-slice scanner enables rapid exams with low radiation protocols."
  },
  {
    id: "ultrasound-vs-ct",
    title: "Ultrasound vs CT Scan: Which Test Is Right for You?",
    category: "Comparative Imaging",
    readTime: "5 min read",
    excerpt: "Understand the medical difference between acoustic sound waves (Ultrasound) and X-ray tomography (CT) and when doctors recommend each.",
    content: "Ultrasound uses high-frequency sound waves with zero radiation, making it the gold standard for pregnancy, pelvic organs, gallbladder stones, and soft tissue Doppler. In contrast, CT scans provide exceptional detail of dense bones, lungs, deep abdominal retroperitoneal structures, and emergency neurological conditions. Your doctor chooses the modality based on the target organ, patient age, and diagnostic urgency."
  },
  {
    id: "tmt-preparation",
    title: "How to Prepare for a TMT (Treadmill Test)",
    category: "Cardiac Health",
    readTime: "3 min read",
    excerpt: "Essential steps to take before your exercise stress test, from fasting windows to clothing choices and medication advice.",
    content: "A Treadmill Test (TMT) evaluates how your heart responds under exertion. Preparation tips: 1) Wear loose, comfortable clothing and supportive walking shoes. 2) Avoid heavy meals 2 to 3 hours prior to the test. 3) Avoid caffeine, tobacco, or stimulants on the day of the test. 4) Always inform our cardiologist if you are taking blood pressure or heart rate control medications (beta blockers)."
  },
  {
    id: "regular-checkups-tumkur",
    title: "Importance of Regular Health Check-Ups in Tumkur District",
    category: "Preventive Care",
    readTime: "4 min read",
    excerpt: "Why early screening for diabetes, hypertension, and thyroid disorders prevents life-threatening complications down the line.",
    content: "Many metabolic conditions like type-2 diabetes, hypertension, fatty liver, and chronic kidney disease develop silently with zero initial symptoms. Routine annual profiles (HbA1c, lipid profile, creatinine, liver enzymes, and CBC) enable detection years before irreversible organ damage occurs. Sampoorna brings world-class preventive screening right to Doomlight Circle, Madhugiri."
  },
  {
    id: "understanding-lab-report",
    title: "Understanding Your Lab Report: Basic Tests and What They Mean",
    category: "Lab Diagnostics",
    readTime: "6 min read",
    excerpt: "A simple, patient-friendly guide decoding Hemoglobin, WBC, Platelets, Creatinine, SGPT, and Thyroid levels.",
    content: "Lab reports list your result alongside a reference range. A Complete Blood Count (CBC) examines oxygen-carrying Hemoglobin (RBC), infection-fighting WBCs, and clotting Platelets. Biochemistry panels check Kidney function (Creatinine, BUN) and Liver enzymes (SGOT, SGPT). Remember: isolated abnormal numbers must always be correlated clinically with your symptoms by a certified physician."
  }
];

export const GALLERY_ITEMS = [
  {
    id: "facility-main",
    title: "Main Diagnostic Facility & Service Center",
    category: "Center Overview",
    src: ASSETS.bannerFacility,
    desc: "State-of-the-art facility equipped with Multislice CT, automated laboratory, ultrasound, and digital imaging suites."
  },
  {
    id: "ct-suite",
    title: "16-Slice Multislice CT Scanner Suite",
    category: "Radiology",
    src: ASSETS.folderPortfolio,
    desc: "Advanced CT gantry offering ultra-fast, high-resolution scans for head, chest, spine, and trauma emergencies."
  },
  {
    id: "hitech-lab",
    title: "Automated Clinical Biochemistry & Pathology Lab",
    category: "Laboratory",
    src: ASSETS.bannerMain,
    desc: "Computerized clinical analyzers providing high precision CBC, thyroid profiles, liver, and metabolic panels."
  },
  {
    id: "tmt-cardio",
    title: "Treadmill Test (TMT) & 2D Echo Cardiology Suite",
    category: "Cardiology",
    src: ASSETS.folderPortfolio,
    desc: "Comprehensive non-invasive cardiac evaluation setup for treadmill stress tests and echo doppler examinations."
  },
  {
    id: "official-reg",
    title: "Karnataka Medical Establishment Registration (KPME)",
    category: "Accreditation",
    src: ASSETS.boardRegistration,
    desc: "Official KPME Registration: TMK01236ALCDS under the medical leadership of Dr. Somashekhar M.B."
  },
  {
    id: "brand-emblem",
    title: "Sampoorna Official Brand Identity & Seal",
    category: "Branding",
    src: ASSETS.brandMockup,
    desc: "The symbol of complete healthcare: combining clinical precision cross, caring hand, and radiant sunburst."
  }
];
