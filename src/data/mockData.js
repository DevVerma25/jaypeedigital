// ============================================================
// MOCK DATA — All hardcoded content for the Jaypee Digital prototype
// ============================================================

export const continueReadingData = [
    {
        id: 1,
        type: 'Book',
        typeColor: '#7f2880',
        title: "Gray's Anatomy",
        subtitle: 'Chapter 12: The Thorax',
        author: 'Susan Standring',
        progress: 68,
    },
    {
        id: 2,
        type: 'Video',
        typeColor: '#0ea5e9',
        title: 'Cardiac Pharmacology Masterclass',
        subtitle: 'Part 3: Beta Blockers & CCBs',
        author: 'Dr. K. D. Tripathi',
        progress: 42,
    },
    {
        id: 3,
        type: 'Clinical Case',
        typeColor: '#f59e0b',
        title: 'A 52-year-old with Crushing Chest Pain',
        subtitle: 'STEMI Workup & Management',
        author: 'Jaypee Digital Editorial',
        progress: 85,
    },
    {
        id: 4,
        type: 'Book',
        typeColor: '#7f2880',
        title: "Robbins & Cotran Pathology",
        subtitle: 'Chapter 8: Neoplasia',
        author: 'Vinay Kumar et al.',
        progress: 31,
    },
];

export const clinicalCasesData = [
    {
        id: 1,
        specialty: 'Cardiology',
        specialtyColor: '#ef4444',
        difficulty: 'Hard',
        difficultyColor: '#f97316',
        icon: 'heart',
        title: 'A 58-year-old male with chest pain and progressive dyspnea on exertion',
        description: 'Evaluate a presentation of NSTEMI with comorbid hypertension and T2DM. Workup, risk stratification, and PCI decision-making.',
    },
    {
        id: 2,
        specialty: 'Neurology',
        specialtyColor: '#8b5cf6',
        difficulty: 'Challenging',
        difficultyColor: '#ef4444',
        icon: 'brain',
        title: 'A 34-year-old female with sudden onset severe headache and photophobia',
        description: 'Distinguish between subarachnoid hemorrhage and thunderclap migraine. CSF xanthochromia, LP timing, and aneurysm management.',
    },
    {
        id: 3,
        specialty: 'Pulmonology',
        specialtyColor: '#0ea5e9',
        difficulty: 'Medium',
        difficultyColor: '#f59e0b',
        icon: 'lungs',
        title: 'A 45-year-old smoker with productive cough, weight loss and night sweats',
        description: 'Rule out pulmonary tuberculosis vs. lung carcinoma. Bronchoscopy findings, IGRA, and staging workup discussion.',
    },
];

export const booksData = [
    {
        id: 1,
        title: 'Essentials of Medical Pharmacology (With One Stop Resource for All Your Exam Needs in Pharmacology)',
        author: 'K D Tripathi',
        edition: '',
        color: '#7f2880',
        tag: 'Pharmacology',
        textColor: '#fff',
        image: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/books/9789356962026/9789356962026.png'
    },
    {
        id: 2,
        title: 'Inderbir Singh\'s Human Embryology',
        author: 'Raveendranath Veeramani',
        edition: '',
        color: '#1A1A2E',
        tag: 'Embryology',
        textColor: '#fff',
        image: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/books/9789356967489/9789356967489.png'
    },
    {
        id: 3,
        title: 'Community Medicine Buster',
        author: 'Gautam Sarker, Palash Das',
        edition: '',
        color: '#2D1B4E',
        tag: 'Community Medicine',
        textColor: '#fff',
        image: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/books/9789356969940/9789356969940.png'
    },
    {
        id: 4,
        title: 'Early Clinical Exposure: A Case Based Approach in Clinical Physiology',
        author: 'Manjinder Kaur, Naren Kurmi, Sangita Chauhan',
        edition: '',
        color: '#064e3b',
        tag: 'Physiology',
        textColor: '#fff',
        image: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/books/9789366168265/9789366168265.png'
    },
];

export const journalsData = [
    { id: 1, title: 'NEJM — Empagliflozin in HFrEF: Updated Meta-Analysis', author: 'Solomon et al.', edition: 'Vol. 390, Jan 2025', color: '#1e3a5f', tag: 'Cardiology', textColor: '#fff' },
    { id: 2, title: 'The Lancet — mRNA Vaccine Efficacy in Immunocompromised', author: 'Polack et al.', edition: 'Vol. 405, Feb 2025', color: '#4c1d95', tag: 'Immunology', textColor: '#fff' },
    { id: 3, title: 'BMJ — Point-of-Care Ultrasound for Acute Abdomen', author: 'Heritage et al.', edition: 'Vol. 384, Mar 2025', color: '#1c3e2b', tag: 'Surgery', textColor: '#fff' },
    { id: 4, title: 'JAMA Neurology — Long COVID Cognitive Sequelae', author: 'Morin et al.', edition: 'Vol. 82, Jan 2025', color: '#7f1d1d', tag: 'Neurology', textColor: '#fff' },
    { id: 5, title: 'Nature Medicine — AI in Radiology Diagnostics Review', author: 'Rajpurkar et al.', edition: 'Vol. 31, Feb 2025', color: '#374151', tag: 'Radiology', textColor: '#fff' },
];

export const trendingTopics = [
    { label: 'Cardiology', size: 'lg' },
    { label: 'Pharmacology', size: 'xl' },
    { label: 'Anatomy', size: 'lg' },
    { label: 'USMLE Step 1', size: 'xl' },
    { label: 'Surgery', size: 'base' },
    { label: 'Pediatrics', size: 'base' },
    { label: 'Neurology', size: 'lg' },
    { label: 'Pathology', size: 'xl' },
    { label: 'Biochemistry', size: 'base' },
    { label: 'Obstetrics & Gynecology', size: 'lg' },
    { label: 'Radiology', size: 'base' },
    { label: 'Emergency Medicine', size: 'lg' },
    { label: 'Dermatology', size: 'base' },
    { label: 'Orthopedics', size: 'base' },
    { label: 'Microbiology', size: 'lg' },
    { label: 'Psychiatry', size: 'base' },
    { label: 'Ophthalmology', size: 'base' },
    { label: 'ENT', size: 'base' },
];

export const testimonialsData = [
    {
        id: 1,
        quote: "Jaypee Digital completely changed how I prepare for my university exams. The clinical cases are challenging and mirror real OSCE stations. I recommend it to every PG aspirant.",
        name: 'Priya Mehta',
        role: 'MBBS Final Year',
        institution: 'Grant Medical College, Mumbai',
        initials: 'PM',
        avatarColor: '#7f2880',
    },
    {
        id: 2,
        quote: "The depth of clinical cases available here is unmatched for teaching. I use them weekly in my problem-based learning sessions. My students are more engaged than ever.",
        name: 'Dr. Arun Krishnamurthy',
        role: 'Associate Professor, Internal Medicine',
        institution: 'CMC Vellore',
        initials: 'AK',
        avatarColor: '#2D1B4E',
    },
    {
        id: 3,
        quote: "Onboarding our college was seamless. The analytics dashboard gives us precise insight into which resources students engage with most. An invaluable tool for curriculum mapping.",
        name: 'Dr. Sunita Rao',
        role: 'Dean, Academic Affairs',
        institution: 'Kasturba Medical College, Manipal',
        initials: 'SR',
        avatarColor: '#064e3b',
    },
];

export const contentCounters = [
    { label: 'eBooks', target: 4289, suffix: '', icon: 'book' },
    { label: 'Videos', target: 12769, suffix: '', icon: 'video' },
    { label: 'MCQs', target: 233738, suffix: '', icon: 'edit' },
    { label: 'Clinical Cases', target: 3462, suffix: '', icon: 'stethoscope' },
    { label: 'OSCEs', target: 364, suffix: '', icon: 'users' },
    { label: 'eJournals', target: 145, suffix: '', icon: 'file-text' },
];
