const interviewData = {
  hr: {
    label: "HR AI",
    intro: "Hello, I am your HR interviewer. I will focus on behavioral readiness, communication, and how you handle real workplace situations.",
    questions: [
      "Tell me about a time you handled pressure while working toward an important goal.",
      "How would you respond if a teammate disagreed with your approach during a project?",
      "Describe a situation where you had to learn something quickly to meet expectations.",
      "What motivates you when the job search feels overwhelming?",
      "How do you stay organized when you have multiple deadlines?",
      "How would you introduce yourself in a confident but natural way during an interview?"
    ],
    keywords: ["team", "collaborate", "resolve", "support", "adapt", "learn", "communicate", "organized"],
    praises: [
      "That sounds thoughtful and people-focused.",
      "Good. You are showing emotional awareness and workplace maturity.",
      "That answer feels more human and realistic."
    ],
    improvements: [
      "Try to include a clearer example from school, teamwork, or an internship.",
      "I want to hear more about the action you personally took.",
      "Add the result so the answer feels more complete."
    ]
  },
  technical: {
    label: "Technical AI",
    intro: "Hi, I am your Technical interviewer. I will focus on skills, practical thinking, and how you explain technical decisions clearly.",
    questions: [
      "Can you explain the difference between responsive design and adaptive design?",
      "How would you debug a slow-loading website?",
      "What steps would you take to improve code readability in a team project?",
      "How do HTML, CSS, and JavaScript work together in a front-end application?",
      "Describe a project where you solved a technical problem creatively.",
      "How would you explain a technical concept to a non-technical client or manager?"
    ],
    keywords: ["code", "debug", "performance", "html", "css", "javascript", "system", "test", "project"],
    praises: [
      "Nice. That sounds technically grounded.",
      "You are showing useful technical thinking there.",
      "That explanation feels closer to what an interviewer wants to hear."
    ],
    improvements: [
      "Add one concrete example or technical step to strengthen the answer.",
      "Mention tools, methods, or trade-offs so the answer sounds more practical.",
      "Try to explain both the problem and the result more clearly."
    ]
  },
  manager: {
    label: "Manager AI",
    intro: "Welcome, I am your Manager interviewer. I will focus on prioritization, ownership, and decision making in real working environments.",
    questions: [
      "Tell me about yourself and the kind of role you want to grow into.",
      "How would you prioritize tasks if a project deadline moved earlier than expected?",
      "Describe a time you made a decision with limited information.",
      "How would you balance quality and speed in a hackathon or startup environment?",
      "If a project started going off track, what would you do first?",
      "How do you handle responsibility when several stakeholders expect different outcomes?"
    ],
    keywords: ["priority", "decision", "impact", "result", "stakeholder", "plan", "risk", "deadline"],
    praises: [
      "That answer shows leadership potential.",
      "Good. I can hear decision-making and ownership in your response.",
      "That sounds more strategic and mature."
    ],
    improvements: [
      "Explain your decision process step by step so it feels more convincing.",
      "Add how you would communicate with others while solving the issue.",
      "Mention risk, trade-offs, or final impact to make it stronger."
    ]
  }
};

const wellbeingGuidance = {
  1: {
    status: "Excellent",
    message: "You seem calm and steady today. This is a good time to do deep work, practice interviews, and build momentum.",
    tips: [
      "Use your energy for one high-value task",
      "Capture your wins so you can revisit them later",
      "Practice one interview question to stay sharp",
      "Keep a balanced routine even on productive days"
    ]
  },
  2: {
    status: "Good",
    message: "You look fairly balanced. Keep your pace steady and avoid turning small stress into pressure.",
    tips: [
      "Break tasks into short focused sessions",
      "Take a quick walk between study blocks",
      "Review your resume one section at a time",
      "Celebrate progress, not just outcomes"
    ]
  },
  3: {
    status: "Good",
    message: "It is normal to feel this way sometimes. Take small breaks, stay positive, and focus on one step at a time.",
    tips: [
      "Take short breaks and breathe",
      "Stay active and drink water",
      "Talk to someone you trust",
      "Focus on progress, not perfection"
    ]
  },
  4: {
    status: "Needs Support",
    message: "You may be carrying a heavier mental load today. Reduce pressure by simplifying your next step and pacing yourself.",
    tips: [
      "Choose one priority instead of many",
      "Practice easier interview questions first",
      "Step away from the screen for a few minutes",
      "Reach out to a friend, teammate, or mentor"
    ]
  },
  5: {
    status: "Take It Easy",
    message: "Today sounds especially stressful. Be kind to yourself and focus on recovery before pushing harder.",
    tips: [
      "Pause and take slow breaths before continuing",
      "Avoid comparing your journey with others",
      "Ask for guidance from a mentor or peer",
      "If stress feels overwhelming, take a proper break and seek personal support"
    ]
  }
};

const careerCatalog = [
  {
    name: "Front End Developer",
    skills: ["javascript", "html", "css", "react", "ui", "frontend", "figma"],
    interests: ["web", "design", "website", "interface", "creative", "product"],
    study: ["computer science", "software", "it", "multimedia"],
    personalities: ["creative", "analytical"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "solo"],
    stress: ["medium", "high"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["medium", "high"],
    dataComfort: ["low", "medium"],
    tips: ["Learn React.js", "Improve UI/UX skills", "Build more projects"],
    summary: "A strong choice for someone who likes building interfaces, solving user-facing problems, and combining design with code."
  },
  {
    name: "Software Developer",
    skills: ["java", "python", "javascript", "problem", "algorithm", "git", "sql"],
    interests: ["software", "coding", "systems", "product", "technology"],
    study: ["computer science", "software", "it", "engineering"],
    personalities: ["analytical", "creative"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["solo", "balanced"],
    stress: ["medium", "high"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["medium", "high"],
    dataComfort: ["medium", "high"],
    tips: ["Practice problem solving", "Strengthen Git and testing habits", "Build real software projects"],
    summary: "A versatile path for people who enjoy logic, building systems, and solving technical challenges."
  },
  {
    name: "UI/UX Designer",
    skills: ["design", "figma", "prototype", "research", "wireframe", "css"],
    interests: ["design", "creative", "user", "brand", "interface", "experience"],
    study: ["design", "multimedia", "computer science", "creative"],
    personalities: ["creative", "supportive"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "collaborative"],
    stress: ["low", "medium"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["high"],
    dataComfort: ["low", "medium"],
    tips: ["Create case studies", "Practice user research", "Build a visual portfolio"],
    summary: "Great for people who enjoy visual thinking, empathy, and designing better digital experiences."
  },
  {
    name: "Data Analyst",
    skills: ["sql", "excel", "python", "analysis", "dashboard", "data", "statistics"],
    interests: ["data", "insight", "research", "numbers", "business"],
    study: ["data", "computer science", "statistics", "business", "math"],
    personalities: ["analytical"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["solo", "balanced"],
    stress: ["medium"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["low", "medium"],
    dataComfort: ["high"],
    tips: ["Practice SQL regularly", "Learn Power BI or Tableau", "Work on real datasets"],
    summary: "A good fit for people who like patterns, metrics, evidence, and turning raw data into decisions."
  },
  {
    name: "IT Support Specialist",
    skills: ["troubleshooting", "support", "network", "hardware", "system", "communication"],
    interests: ["helping", "systems", "operations", "problem solving"],
    study: ["it", "computer science", "network", "technology"],
    personalities: ["supportive", "analytical"],
    environments: ["office", "field", "hybrid"],
    workStyle: ["collaborative", "balanced"],
    stress: ["medium", "high"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["low", "medium"],
    dataComfort: ["medium"],
    tips: ["Learn ticketing workflows", "Practice troubleshooting logic", "Study operating systems and networking basics"],
    summary: "Ideal for someone who enjoys helping users and solving practical day-to-day technology issues."
  },
  {
    name: "Project Coordinator",
    skills: ["organization", "communication", "planning", "documentation", "leadership", "schedule"],
    interests: ["planning", "teamwork", "operations", "delivery"],
    study: ["business", "management", "it", "computer science"],
    personalities: ["leader", "supportive"],
    environments: ["office", "hybrid"],
    workStyle: ["collaborative"],
    stress: ["medium", "high"],
    leadership: ["medium", "high"],
    communication: ["strong"],
    creativity: ["medium"],
    dataComfort: ["medium"],
    tips: ["Learn agile basics", "Improve meeting facilitation", "Track deliverables and risks clearly"],
    summary: "A solid path for organized communicators who like helping teams stay on track and aligned."
  },
  {
    name: "Digital Marketer",
    skills: ["content", "seo", "social", "analytics", "branding", "copywriting", "campaign"],
    interests: ["marketing", "content", "creative", "campaign", "brand", "social"],
    study: ["marketing", "business", "multimedia", "communication"],
    personalities: ["creative", "leader"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "collaborative"],
    stress: ["low", "medium"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["high"],
    dataComfort: ["medium"],
    tips: ["Learn analytics tools", "Study SEO basics", "Run sample campaigns"],
    summary: "A strong match for creative communicators who enjoy campaigns, branding, and audience engagement."
  },
  {
    name: "Cybersecurity Analyst",
    skills: ["security", "network", "risk", "system", "linux", "incident", "monitoring"],
    interests: ["security", "systems", "investigation", "technology"],
    study: ["computer science", "cybersecurity", "network", "it"],
    personalities: ["analytical"],
    environments: ["office", "hybrid", "remote"],
    workStyle: ["solo", "balanced"],
    stress: ["medium", "high"],
    leadership: ["low", "medium"],
    communication: ["good"],
    creativity: ["medium"],
    dataComfort: ["high"],
    tips: ["Study networking deeply", "Practice labs and simulations", "Learn security tools and frameworks"],
    summary: "Best for detail-oriented people who enjoy protecting systems and investigating digital risks."
  },
  {
    name: "Business Analyst",
    skills: ["analysis", "communication", "documentation", "process", "requirements", "excel"],
    interests: ["business", "strategy", "research", "improvement", "operations"],
    study: ["business", "computer science", "it", "management"],
    personalities: ["analytical", "supportive"],
    environments: ["office", "hybrid"],
    workStyle: ["balanced", "collaborative"],
    stress: ["medium"],
    leadership: ["medium"],
    communication: ["strong"],
    creativity: ["medium"],
    dataComfort: ["medium", "high"],
    tips: ["Practice requirement gathering", "Improve stakeholder communication", "Learn process mapping"],
    summary: "Good for people who enjoy translating business needs into practical digital solutions."
  },
  {
    name: "QA Engineer",
    skills: ["test", "automation", "bug", "quality", "detail", "javascript", "python"],
    interests: ["quality", "systems", "product", "testing", "problem solving"],
    study: ["computer science", "software", "it"],
    personalities: ["analytical", "supportive"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "solo"],
    stress: ["medium"],
    leadership: ["low", "medium"],
    communication: ["good"],
    creativity: ["medium"],
    dataComfort: ["medium", "high"],
    tips: ["Learn testing frameworks", "Practice writing test cases", "Understand product flows deeply"],
    summary: "A smart fit for people who notice details and care about reliability, quality, and user experience."
  },
  {
    name: "Product Designer",
    skills: ["design", "prototype", "research", "product", "figma", "ux"],
    interests: ["product", "design", "user", "strategy", "creative"],
    study: ["design", "multimedia", "computer science", "creative"],
    personalities: ["creative", "leader"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "collaborative"],
    stress: ["medium"],
    leadership: ["medium"],
    communication: ["strong"],
    creativity: ["high"],
    dataComfort: ["medium"],
    tips: ["Create product case studies", "Understand user journeys", "Work closely with developers"],
    summary: "A strong path for people who love design thinking but also enjoy solving product-level problems."
  },
  {
    name: "DevOps Engineer",
    skills: ["cloud", "linux", "automation", "ci", "deployment", "docker", "system"],
    interests: ["systems", "automation", "infrastructure", "technology"],
    study: ["computer science", "software", "it", "engineering"],
    personalities: ["analytical"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["solo", "balanced"],
    stress: ["high"],
    leadership: ["low", "medium"],
    communication: ["good"],
    creativity: ["medium"],
    dataComfort: ["high"],
    tips: ["Learn Linux and cloud tools", "Practice CI/CD basics", "Understand deployment pipelines"],
    summary: "Best for technically curious people who enjoy systems, automation, and engineering efficiency."
  },
  {
    name: "Network Administrator",
    skills: ["network", "system", "hardware", "support", "security", "infrastructure"],
    interests: ["systems", "network", "operations", "problem solving"],
    study: ["network", "it", "computer science", "technology"],
    personalities: ["analytical", "supportive"],
    environments: ["office", "field", "hybrid"],
    workStyle: ["solo", "balanced"],
    stress: ["medium", "high"],
    leadership: ["low"],
    communication: ["good"],
    creativity: ["low", "medium"],
    dataComfort: ["medium", "high"],
    tips: ["Study networking fundamentals", "Practice configuration labs", "Learn troubleshooting and monitoring"],
    summary: "Great for people who like infrastructure, connectivity, and keeping systems stable."
  },
  {
    name: "Content Strategist",
    skills: ["content", "writing", "research", "strategy", "branding", "communication"],
    interests: ["content", "storytelling", "brand", "creative", "marketing"],
    study: ["communication", "marketing", "business", "multimedia"],
    personalities: ["creative", "supportive"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "collaborative"],
    stress: ["low", "medium"],
    leadership: ["low", "medium"],
    communication: ["strong"],
    creativity: ["high"],
    dataComfort: ["low", "medium"],
    tips: ["Study messaging and brand voice", "Build writing samples", "Learn content analytics"],
    summary: "A good fit for people who enjoy writing, planning content, and shaping how ideas are communicated."
  },
  {
    name: "Human Resource Executive",
    skills: ["communication", "people", "organization", "support", "documentation", "coordination"],
    interests: ["people", "guidance", "operations", "support", "teamwork"],
    study: ["business", "management", "psychology", "communication"],
    personalities: ["supportive", "leader"],
    environments: ["office", "hybrid"],
    workStyle: ["collaborative"],
    stress: ["medium"],
    leadership: ["medium", "high"],
    communication: ["strong"],
    creativity: ["medium"],
    dataComfort: ["low", "medium"],
    tips: ["Strengthen people skills", "Practice interview communication", "Learn recruitment workflows"],
    summary: "Well suited to empathetic, organized people who enjoy supporting growth and workplace culture."
  },
  {
    name: "Mobile App Developer",
    skills: ["flutter", "kotlin", "swift", "javascript", "ui", "app", "mobile"],
    interests: ["mobile", "product", "technology", "interface", "creative"],
    study: ["computer science", "software", "it"],
    personalities: ["creative", "analytical"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["balanced", "solo"],
    stress: ["medium", "high"],
    leadership: ["low", "medium"],
    communication: ["good", "strong"],
    creativity: ["medium", "high"],
    dataComfort: ["medium"],
    tips: ["Build mobile projects", "Learn app performance basics", "Practice UI responsiveness"],
    summary: "Great for people who want to build interactive mobile products and polished user experiences."
  },
  {
    name: "Cloud Engineer",
    skills: ["cloud", "deployment", "linux", "system", "automation", "network"],
    interests: ["infrastructure", "systems", "technology", "automation"],
    study: ["computer science", "software", "it", "engineering"],
    personalities: ["analytical"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["solo", "balanced"],
    stress: ["medium", "high"],
    leadership: ["low", "medium"],
    communication: ["good"],
    creativity: ["medium"],
    dataComfort: ["high"],
    tips: ["Learn AWS or Azure basics", "Practice deployments", "Study Linux and networking"],
    summary: "A strong fit for people who enjoy infrastructure, reliability, and systems at scale."
  },
  {
    name: "Product Manager",
    skills: ["communication", "planning", "research", "product", "leadership", "strategy"],
    interests: ["product", "business", "users", "strategy", "teamwork"],
    study: ["business", "management", "computer science", "it"],
    personalities: ["leader", "supportive"],
    environments: ["hybrid", "office", "remote"],
    workStyle: ["collaborative", "balanced"],
    stress: ["medium", "high"],
    leadership: ["medium", "high"],
    communication: ["strong"],
    creativity: ["medium", "high"],
    dataComfort: ["medium", "high"],
    tips: ["Practice product thinking", "Improve stakeholder communication", "Learn roadmap planning"],
    summary: "Ideal for people who enjoy connecting users, business needs, and product direction."
  },
  {
    name: "Machine Learning Assistant",
    skills: ["python", "data", "analysis", "model", "statistics", "research"],
    interests: ["ai", "data", "research", "technology", "innovation"],
    study: ["computer science", "data", "math", "statistics"],
    personalities: ["analytical"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["solo", "balanced"],
    stress: ["medium"],
    leadership: ["low"],
    communication: ["good"],
    creativity: ["medium"],
    dataComfort: ["high"],
    tips: ["Build small ML projects", "Strengthen Python and math", "Practice with datasets"],
    summary: "Suitable for data-focused learners interested in AI, experimentation, and applied research."
  },
  {
    name: "Systems Analyst",
    skills: ["analysis", "documentation", "system", "requirements", "process", "communication"],
    interests: ["systems", "business", "operations", "improvement"],
    study: ["computer science", "it", "business", "management"],
    personalities: ["analytical", "supportive"],
    environments: ["office", "hybrid"],
    workStyle: ["balanced", "collaborative"],
    stress: ["medium"],
    leadership: ["medium"],
    communication: ["strong"],
    creativity: ["medium"],
    dataComfort: ["medium", "high"],
    tips: ["Practice requirement analysis", "Learn system mapping", "Improve documentation clarity"],
    summary: "Best for problem-solvers who like understanding workflows and improving systems."
  },
  {
    name: "DevRel Specialist",
    skills: ["communication", "writing", "javascript", "community", "presentation", "product"],
    interests: ["technology", "community", "education", "content", "developer tools"],
    study: ["computer science", "it", "communication", "multimedia"],
    personalities: ["creative", "supportive", "leader"],
    environments: ["remote", "hybrid", "office"],
    workStyle: ["collaborative", "balanced"],
    stress: ["medium"],
    leadership: ["medium"],
    communication: ["strong"],
    creativity: ["high"],
    dataComfort: ["medium"],
    tips: ["Practice technical writing", "Build public demos", "Improve presentation skills"],
    summary: "A good match for technical people who also enjoy teaching, community, and communication."
  }
];

const speakerButtons = document.querySelectorAll(".speaker-card");
const styleChips = document.querySelectorAll(".style-chip");
const videoStage = document.getElementById("videoStage");
const questionRoleLabel = document.getElementById("questionRoleLabel");
const questionText = document.getElementById("questionText");
const questionCounter = document.getElementById("questionCounter");
const answerInput = document.getElementById("answerInput");
const feedbackHeadline = document.getElementById("feedbackHeadline");
const feedbackTone = document.getElementById("feedbackTone");
const feedbackTip = document.getElementById("feedbackTip");
const confidenceFill = document.getElementById("confidenceFill");
const clarityFill = document.getElementById("clarityFill");
const relevanceFill = document.getElementById("relevanceFill");
const confidenceScore = document.getElementById("confidenceScore");
const clarityScore = document.getElementById("clarityScore");
const relevanceScore = document.getElementById("relevanceScore");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const startInterviewBtn = document.getElementById("startInterviewBtn");
const replayQuestionBtn = document.getElementById("replayQuestionBtn");
const voiceAnswerBtn = document.getElementById("voiceAnswerBtn");
const finishInterviewBtn = document.getElementById("finishInterviewBtn");
const sessionStatus = document.getElementById("sessionStatus");
const voiceSupportNote = document.getElementById("voiceSupportNote");
const aiResponseText = document.getElementById("aiResponseText");
const openCameraBtn = document.getElementById("openCameraBtn");
const closeCameraBtn = document.getElementById("closeCameraBtn");
const cameraStatus = document.getElementById("cameraStatus");
const micStatus = document.getElementById("micStatus");
const cameraIndicator = document.getElementById("cameraIndicator");
const userVideo = document.getElementById("userVideo");
const userVideoPlaceholder = document.getElementById("userVideoPlaceholder");

const sessionReport = document.getElementById("sessionReport");
const reportRoleTitle = document.getElementById("reportRoleTitle");
const reportVerdict = document.getElementById("reportVerdict");
const reportOverallScore = document.getElementById("reportOverallScore");
const reportPros = document.getElementById("reportPros");
const reportCons = document.getElementById("reportCons");
const reportNextSteps = document.getElementById("reportNextSteps");
const reportBreakdown = document.getElementById("reportBreakdown");
const downloadReportBtn = document.getElementById("downloadReportBtn");

const resumeForm = document.getElementById("resumeForm");
const resumeName = document.getElementById("resumeName");
const resumeEmail = document.getElementById("resumeEmail");
const resumePhone = document.getElementById("resumePhone");
const resumeLocation = document.getElementById("resumeLocation");
const resumePortfolio = document.getElementById("resumePortfolio");
const resumeUniversity = document.getElementById("resumeUniversity");
const resumeEducation = document.getElementById("resumeEducation");
const resumeSummary = document.getElementById("resumeSummary");
const resumeSkills = document.getElementById("resumeSkills");
const resumeExperience = document.getElementById("resumeExperience");
const resumeProjects = document.getElementById("resumeProjects");
const resumeCertifications = document.getElementById("resumeCertifications");
const resumeAchievements = document.getElementById("resumeAchievements");
const resumeTargetRole = document.getElementById("resumeTargetRole");
const generateResumeBtn = document.getElementById("generateResumeBtn");
const downloadResumePdfBtn = document.getElementById("downloadResumePdfBtn");
const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const previewContact = document.getElementById("previewContact");
const previewUniversity = document.getElementById("previewUniversity");
const previewEducation = document.getElementById("previewEducation");
const previewSummary = document.getElementById("previewSummary");
const previewSkills = document.getElementById("previewSkills");
const previewExperience = document.getElementById("previewExperience");
const previewProjects = document.getElementById("previewProjects");
const previewCertifications = document.getElementById("previewCertifications");
const previewAchievements = document.getElementById("previewAchievements");

const careerSkills = document.getElementById("careerSkills");
const careerInterests = document.getElementById("careerInterests");
const careerUniversity = document.getElementById("careerUniversity");
const careerFieldOfStudy = document.getElementById("careerFieldOfStudy");
const careerPersonality = document.getElementById("careerPersonality");
const stressTolerance = document.getElementById("stressTolerance");
const workStyle = document.getElementById("workStyle");
const careerEnvironment = document.getElementById("careerEnvironment");
const careerLeadership = document.getElementById("careerLeadership");
const careerCommunication = document.getElementById("careerCommunication");
const careerCreativity = document.getElementById("careerCreativity");
const careerDataComfort = document.getElementById("careerDataComfort");
const careerResults = document.getElementById("careerResults");
const topCareerName = document.getElementById("topCareerName");
const careerFitMeta = document.getElementById("careerFitMeta");
const careerReason = document.getElementById("careerReason");
const careerTips = document.getElementById("careerTips");
const recommendCareerBtn = document.getElementById("recommendCareerBtn");

const stressButtons = document.querySelectorAll(".stress-btn");
const wellbeingMessage = document.getElementById("wellbeingMessage");
const wellbeingTips = document.getElementById("wellbeingTips");

const dashboardInterviewScore = document.getElementById("dashboardInterviewScore");
const dashboardResumeScore = document.getElementById("dashboardResumeScore");
const dashboardCareerScore = document.getElementById("dashboardCareerScore");
const dashboardWellbeingStatus = document.getElementById("dashboardWellbeingStatus");
const dashboardInterviewBar = document.getElementById("dashboardInterviewBar");
const dashboardResumeBar = document.getElementById("dashboardResumeBar");
const dashboardCareerBar = document.getElementById("dashboardCareerBar");
const dashboardWellbeingBar = document.getElementById("dashboardWellbeingBar");
const stageClock = document.getElementById("stageClock");

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const jumpButtons = document.querySelectorAll(".jump-btn");
const loginTriggerBtn = document.getElementById("loginTriggerBtn");
const authModal = document.getElementById("authModal");
const authBackdrop = document.getElementById("authBackdrop");
const authCloseBtn = document.getElementById("authCloseBtn");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSubtitle = document.getElementById("authSubtitle");
const authEmail = document.getElementById("authEmail");
const authFullName = document.getElementById("authFullName");
const authPassword = document.getElementById("authPassword");
const authConfirmPassword = document.getElementById("authConfirmPassword");
const authFullnameField = document.getElementById("authFullnameField");
const authPasswordField = document.getElementById("authPasswordField");
const authConfirmField = document.getElementById("authConfirmField");
const authMessage = document.getElementById("authMessage");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const authBackBtn = document.getElementById("authBackBtn");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let clockSeconds = 84;
let availableVoices = [];
let recognition = null;
let isRecording = false;
let cameraStream = null;
let sessionAdvanceTimeout = null;
let typeTimer = null;

const interviewState = {
  role: "manager",
  started: false,
  questions: [],
  index: 0,
  results: [],
  avatarStyle: "friendly"
};

const AUTH_STORAGE_KEYS = {
  accounts: "pathwiseAiAccounts",
  currentUser: "pathwiseAiCurrentUser",
  rememberedEmail: "pathwiseAiRememberedEmail"
};

const authState = {
  mode: "email"
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function toWords(value) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9+#]+/)
    .filter(Boolean);
}

function listFromTextarea(value) {
  return value
    .split(/\n+/)
    .map((item) => item.replace(/^[\-\u2022]\s*/, "").trim())
    .filter(Boolean);
}

function getStoredAccounts() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEYS.accounts) || "[]");
  } catch (error) {
    return [];
  }
}

function saveStoredAccounts(accounts) {
  localStorage.setItem(AUTH_STORAGE_KEYS.accounts, JSON.stringify(accounts.slice(0, 5)));
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEYS.currentUser) || "null");
  } catch (error) {
    return null;
  }
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(AUTH_STORAGE_KEYS.currentUser, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEYS.currentUser);
  }
}

function findAccountByEmail(email) {
  return getStoredAccounts().find((account) => account.email === email.toLowerCase());
}

function updateLoginButton() {
  const currentUser = getCurrentUser();
  loginTriggerBtn.textContent = currentUser ? `Hi, ${currentUser.fullName.split(" ")[0]}` : "Login";
}

function setAuthNote(message = "") {
  authMessage.textContent = message;
  authMessage.classList.toggle("hidden", !message);
}

function setAuthMode(mode, account = null) {
  authState.mode = mode;

  authEmail.readOnly = mode !== "email";
  authFullnameField.classList.toggle("hidden", mode !== "signup");
  authPasswordField.classList.toggle("hidden", mode === "email");
  authConfirmField.classList.toggle("hidden", mode !== "signup");
  setAuthNote("");

  if (mode === "email") {
    authTitle.textContent = "Continue to Login";
    authSubtitle.textContent = "Enter your email first. If the account exists, you can sign in. If not, you can register a new local demo account.";
    authSubmitBtn.textContent = "OK";
    authPassword.value = "";
    authConfirmPassword.value = "";
    authFullName.value = "";
    const rememberedEmail = localStorage.getItem(AUTH_STORAGE_KEYS.rememberedEmail) || "";
    if (!authEmail.value && rememberedEmail) {
      authEmail.value = rememberedEmail;
    }
    return;
  }

  if (mode === "signin") {
    authTitle.textContent = "Sign In";
    authSubtitle.textContent = "Welcome back. Enter your password to continue to the demo account.";
    authSubmitBtn.textContent = "OK";
    authPassword.value = "";
    authConfirmPassword.value = "";
    if (account) {
      setAuthNote(`Account found for ${account.fullName}.`);
    }
    return;
  }

  authTitle.textContent = "Create Local Demo Account";
  authSubtitle.textContent = "No existing account was found for this email. Register a new local demo account below.";
  authSubmitBtn.textContent = "OK";
  authPassword.value = "";
  authConfirmPassword.value = "";
  setAuthNote("Complete the details below to register.");
}

function openAuthModal() {
  authModal.classList.remove("hidden");
  authModal.setAttribute("aria-hidden", "false");
  setAuthMode("email");
  authEmail.focus();
}

function closeAuthModal() {
  authModal.classList.add("hidden");
  authModal.setAttribute("aria-hidden", "true");
  authEmail.value = "";
  authFullName.value = "";
  authPassword.value = "";
  authConfirmPassword.value = "";
  setAuthMode("email");
  window.location.hash = "home";
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function signInAccount(account) {
  setCurrentUser({ email: account.email, fullName: account.fullName });
  localStorage.setItem(AUTH_STORAGE_KEYS.rememberedEmail, account.email);
  updateLoginButton();
  setAuthNote(`Signed in successfully as ${account.fullName}.`);
  window.setTimeout(closeAuthModal, 500);
}

function registerAccount() {
  const email = authEmail.value.trim().toLowerCase();
  const fullName = authFullName.value.trim();
  const password = authPassword.value.trim();
  const confirmPassword = authConfirmPassword.value.trim();
  const accounts = getStoredAccounts();

  if (!fullName) {
    setAuthNote("Please enter your full name.");
    return;
  }
  if (accounts.length >= 5) {
    setAuthNote("This demo allows up to 5 local accounts only.");
    return;
  }
  if (password.length < 4) {
    setAuthNote("Use a password with at least 4 characters for this demo.");
    return;
  }
  if (password !== confirmPassword) {
    setAuthNote("Passwords do not match. Please check and try again.");
    return;
  }

  const account = { email, fullName, password };
  accounts.push(account);
  saveStoredAccounts(accounts);
  signInAccount(account);
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const email = authEmail.value.trim().toLowerCase();

  if (!email) {
    setAuthNote("Please enter your email first.");
    return;
  }

  if (authState.mode === "email") {
    const existingAccount = findAccountByEmail(email);
    if (existingAccount) {
      authEmail.value = existingAccount.email;
      setAuthMode("signin", existingAccount);
    } else {
      authEmail.value = email;
      setAuthMode("signup");
      authFullName.focus();
    }
    return;
  }

  if (authState.mode === "signin") {
    const existingAccount = findAccountByEmail(email);
    if (!existingAccount) {
      setAuthNote("No account was found with that email. Please register first.");
      setAuthMode("signup");
      return;
    }
    if (existingAccount.password !== authPassword.value.trim()) {
      setAuthNote("Incorrect password. Please try again.");
      return;
    }
    signInAccount(existingAccount);
    return;
  }

  registerAccount();
}

function logoutCurrentUser() {
  setCurrentUser(null);
  updateLoginButton();
  setAuthMode("email");
}

function updateSessionStatus(text) {
  sessionStatus.textContent = text;
}

function typeIntoElement(element, text, speed = 18) {
  window.clearTimeout(typeTimer);
  element.textContent = "";
  let index = 0;

  function step() {
    element.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      typeTimer = window.setTimeout(step, speed);
    }
  }

  step();
}

function getCurrentQuestion() {
  return interviewState.questions[interviewState.index] || interviewData[interviewState.role].questions[0];
}

function resetFeedback() {
  feedbackHeadline.textContent = "Ready when you are";
  feedbackTone.textContent = "Waiting for answer";
  feedbackTone.className = "feedback-tone neutral";
  feedbackTip.textContent = "Tip: Use a specific example and explain the result you achieved.";
  updateFeedbackMetric(confidenceFill, confidenceScore, 0);
  updateFeedbackMetric(clarityFill, clarityScore, 0);
  updateFeedbackMetric(relevanceFill, relevanceScore, 0);
}

function buildSessionQuestions(role) {
  return interviewData[role].questions.slice(0, 4);
}

function updateQuestionDisplay() {
  questionRoleLabel.textContent = interviewData[interviewState.role].label;
  questionText.textContent = getCurrentQuestion();
  questionCounter.textContent = `Question ${interviewState.index + 1} of ${interviewState.questions.length || 4}`;
}

function setAvatarStyle(style) {
  interviewState.avatarStyle = style;
  videoStage.classList.remove("avatar-style-professional", "avatar-style-friendly", "avatar-style-executive");
  videoStage.classList.add(`avatar-style-${style}`);
  styleChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.avatarStyle === style));
}

function setActiveRole(role, options = {}) {
  const { restartIfRunning = true } = options;
  interviewState.role = role;
  interviewState.questions = buildSessionQuestions(role);
  interviewState.index = 0;

  speakerButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
    button.classList.remove("speaking");
  });

  updateQuestionDisplay();

  const idleMessage = `${interviewData[role].label} is selected. I can ask role-specific questions, respond with voice, and give end-of-session feedback.`;
  typeIntoElement(aiResponseText, idleMessage, 14);

  if (interviewState.started && restartIfRunning) {
    updateSessionStatus(`${interviewData[role].label} selected. Session restarted.`);
    startInterviewSession(false);
  } else if (!interviewState.started) {
    updateSessionStatus(`${interviewData[role].label} selected. Press start to begin.`);
  }
}

function updateFeedbackMetric(fillEl, scoreEl, value) {
  fillEl.style.width = `${value}%`;
  scoreEl.textContent = `${value}%`;
}

function analyzeAnswer(answer, role) {
  const trimmed = answer.trim();
  const lower = trimmed.toLowerCase();
  const words = toWords(trimmed);
  const wordCount = words.length;
  const sentences = trimmed.split(/[.!?]+/).filter((part) => part.trim().length > 0);
  const keywords = interviewData[role].keywords;
  const keywordMatches = keywords.filter((keyword) => lower.includes(keyword)).length;
  const assertiveMatches = ["led", "built", "solved", "improved", "delivered", "created", "organized", "achieved", "designed"]
    .filter((keyword) => lower.includes(keyword))
    .length;
  const exampleMarkers = ["for example", "for instance", "such as", "when", "during", "in my", "at my", "one time"];
  const structuredMarkers = ["first", "then", "finally", "because", "result", "outcome", "after that"];
  const resultMarkers = ["result", "improved", "increased", "reduced", "completed", "delivered", "success", "impact"];

  const hasExample = exampleMarkers.some((marker) => lower.includes(marker));
  const hasStructure = structuredMarkers.some((marker) => lower.includes(marker));
  const hasOutcome = resultMarkers.some((marker) => lower.includes(marker)) || /\d/.test(trimmed);

  const confidence = clamp(Math.round(40 + wordCount * 0.52 + assertiveMatches * 5), 36, 96);
  const clarity = clamp(
    Math.round(
      46 +
        Math.min(sentences.length, 4) * 8 +
        (trimmed.includes(",") ? 4 : 0) +
        (hasStructure ? 10 : 0)
    ),
    35,
    96
  );
  const relevance = clamp(Math.round(44 + keywordMatches * 10 + Math.min(wordCount, 90) * 0.2), 38, 97);
  const average = Math.round((confidence + clarity + relevance) / 3);

  const tips = [];
  if (wordCount < 35) {
    tips.push("Add more detail so your answer feels complete and convincing.");
  }
  if (!hasExample) {
    tips.push("Include a specific example from a project, class, or challenge.");
  }
  if (!hasOutcome) {
    tips.push("Mention the result, impact, or what changed because of your actions.");
  }
  if (!hasStructure) {
    tips.push("Use a STAR-style flow: situation, task, action, result.");
  }

  let headline = "Promising start";
  let tone = "needs-work";
  if (average >= 82) {
    headline = "Good answer!";
    tone = "good";
  } else if (average >= 70) {
    headline = "Strong foundation";
    tone = "good";
  }

  return {
    confidence,
    clarity,
    relevance,
    average,
    headline,
    tone,
    tip: tips[0] || "Nice balance. Keep answers specific, structured, and focused on impact.",
    wordCount,
    hasExample,
    hasOutcome,
    hasStructure
  };
}

function buildAvatarResponse(result, role) {
  const roleConfig = interviewData[role];
  const praise = roleConfig.praises[result.average % roleConfig.praises.length];
  const improvement = roleConfig.improvements[result.average % roleConfig.improvements.length];

  if (result.average >= 82) {
    return `${praise} Your answer sounds confident and relevant. Keep using that structure, because it makes you sound interview-ready.`;
  }
  if (result.average >= 70) {
    return `${praise} To level it up, ${improvement.toLowerCase()}`;
  }
  return `You have a workable idea here, but ${improvement.toLowerCase()} ${result.tip}`;
}

function animateNumber(element, target, suffix = "%") {
  const rawCurrent = Number(element.dataset.current || element.textContent.replace(/[^\d]/g, "")) || 0;
  const start = rawCurrent;
  const duration = 650;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(start + (target - start) * progress);
    element.textContent = `${value}${suffix}`;
    element.dataset.current = value;
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function updateDashboardBar(bar, value) {
  bar.style.width = `${value}%`;
}

function updateInterviewDashboard(score) {
  animateNumber(dashboardInterviewScore, score);
  updateDashboardBar(dashboardInterviewBar, score);
}

function updateResumeDashboard(score) {
  animateNumber(dashboardResumeScore, score);
  updateDashboardBar(dashboardResumeBar, score);
}

function updateCareerDashboard(score) {
  animateNumber(dashboardCareerScore, score);
  updateDashboardBar(dashboardCareerBar, score);
}

function updateWellbeingDashboard(level) {
  const config = wellbeingGuidance[level];
  dashboardWellbeingStatus.textContent = config.status;
  const barLevel = 100 - (level - 1) * 18;
  updateDashboardBar(dashboardWellbeingBar, clamp(barLevel, 28, 100));
}

function loadVoices() {
  if ("speechSynthesis" in window) {
    availableVoices = window.speechSynthesis.getVoices();
  }
}

function pickVoice(role) {
  if (!availableVoices.length) {
    return null;
  }

  const englishVoices = availableVoices.filter((voice) => /en/i.test(voice.lang));
  const pool = englishVoices.length ? englishVoices : availableVoices;
  const voicePreferences = {
    hr: [/female/i, /zira/i, /aria/i, /samantha/i, /victoria/i, /ava/i, /google uk english female/i],
    technical: [/male/i, /david/i, /daniel/i, /alex/i, /guy/i, /google us english/i],
    manager: [/male/i, /mark/i, /thomas/i, /james/i, /david/i, /george/i]
  };

  for (const pattern of voicePreferences[role]) {
    const match = pool.find((voice) => pattern.test(voice.name));
    if (match) {
      return match;
    }
  }

  return pool[0];
}

function stopSpeaking() {
  speakerButtons.forEach((button) => button.classList.remove("speaking"));
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakText(text, role) {
  if (!("speechSynthesis" in window)) {
    voiceSupportNote.textContent = "Voice playback is not available in this browser, but all interview interactions still work.";
    return Promise.resolve();
  }

  stopSpeaking();
  const activeSpeaker = document.querySelector(`.speaker-card[data-role="${role}"]`);
  if (activeSpeaker) {
    activeSpeaker.classList.add("speaking");
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickVoice(role);
  if (voice) {
    utterance.voice = voice;
  }

  const voiceStyle = {
    hr: { pitch: 1.06, rate: 0.98 },
    technical: { pitch: 0.96, rate: 1.0 },
    manager: { pitch: 0.9, rate: 0.95 }
  };

  utterance.pitch = voiceStyle[role].pitch;
  utterance.rate = voiceStyle[role].rate;

  return new Promise((resolve) => {
    utterance.onend = () => {
      if (activeSpeaker) {
        activeSpeaker.classList.remove("speaking");
      }
      resolve();
    };
    utterance.onerror = () => {
      if (activeSpeaker) {
        activeSpeaker.classList.remove("speaking");
      }
      resolve();
    };
    window.speechSynthesis.speak(utterance);
  });
}

function setMicState(text) {
  micStatus.textContent = text;
}

function initRecognition() {
  if (!SpeechRecognition) {
    voiceSupportNote.textContent = "Mic input is not supported here. You can still type answers and use avatar voice playback.";
    setMicState("Mic Text Only");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.continuous = false;

  recognition.onstart = () => {
    isRecording = true;
    voiceAnswerBtn.classList.add("recording");
    voiceSupportNote.textContent = "Listening... speak your answer and it will fill the response box.";
    setMicState("Mic Listening");
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(" ");
    answerInput.value = transcript.trim();
  };

  recognition.onend = () => {
    isRecording = false;
    voiceAnswerBtn.classList.remove("recording");
    voiceSupportNote.textContent = "Microphone capture finished. You can edit the answer before submitting.";
    setMicState("Mic Ready");
  };

  recognition.onerror = () => {
    isRecording = false;
    voiceAnswerBtn.classList.remove("recording");
    voiceSupportNote.textContent = "Microphone access was unavailable. You can still type your answer manually.";
    setMicState("Mic Unavailable");
  };
}

async function openCamera() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    cameraStatus.textContent = "Camera Unsupported";
    cameraIndicator.textContent = "Unavailable";
    voiceSupportNote.textContent = "Camera access is not supported in this browser.";
    return;
  }

  try {
    if (!cameraStream) {
      cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    }

    userVideo.srcObject = cameraStream;
    userVideo.classList.add("active");
    userVideoPlaceholder.classList.add("hidden");
    cameraStatus.textContent = "Camera On";
    cameraIndicator.textContent = "Live";
    cameraIndicator.classList.add("on");
    updateSessionStatus("Camera connected. You can now simulate a full interview call.");
  } catch (error) {
    cameraStatus.textContent = "Camera Blocked";
    cameraIndicator.textContent = "Permission Needed";
    cameraIndicator.classList.remove("on");
    voiceSupportNote.textContent = "Camera access was denied or unavailable. The demo still works without video.";
  }
}

function closeCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }

  userVideo.srcObject = null;
  userVideo.classList.remove("active");
  userVideoPlaceholder.classList.remove("hidden");
  cameraStatus.textContent = "Camera Off";
  cameraIndicator.textContent = "Offline";
  cameraIndicator.classList.remove("on");
  updateSessionStatus("Camera closed. You can continue the interview with voice or text answers.");
}

function startInterviewSession(announce = true) {
  window.clearTimeout(sessionAdvanceTimeout);
  interviewState.started = true;
  interviewState.questions = buildSessionQuestions(interviewState.role);
  interviewState.index = 0;
  interviewState.results = [];
  answerInput.value = "";
  resetFeedback();
  sessionReport.classList.add("hidden");
  updateQuestionDisplay();
  updateSessionStatus(`${interviewData[interviewState.role].label} session in progress`);
  nextQuestionBtn.textContent = "Skip Question";

  const opener = announce
    ? `${interviewData[interviewState.role].intro} Question 1. ${getCurrentQuestion()}`
    : getCurrentQuestion();

  typeIntoElement(aiResponseText, `${interviewData[interviewState.role].label}: ${getCurrentQuestion()}`, 14);
  speakText(opener, interviewState.role);
}

function summarizeAverageScore() {
  if (!interviewState.results.length) {
    return 78;
  }
  const total = interviewState.results.reduce((sum, item) => sum + item.average, 0);
  return Math.round(total / interviewState.results.length);
}

function createReportList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function buildReport() {
  const totalAnswers = interviewState.results.length;
  if (!totalAnswers) {
    return null;
  }

  const avgConfidence = Math.round(
    interviewState.results.reduce((sum, item) => sum + item.confidence, 0) / totalAnswers
  );
  const avgClarity = Math.round(
    interviewState.results.reduce((sum, item) => sum + item.clarity, 0) / totalAnswers
  );
  const avgRelevance = Math.round(
    interviewState.results.reduce((sum, item) => sum + item.relevance, 0) / totalAnswers
  );
  const overall = Math.round((avgConfidence + avgClarity + avgRelevance) / 3);

  const pros = [];
  const improvements = [];
  const nextSteps = [];

  if (avgConfidence >= 76) {
    pros.push("You show decent confidence and ownership in the way you answer.");
  } else {
    improvements.push("Use stronger action verbs and say more clearly what you personally did.");
  }

  if (avgClarity >= 74) {
    pros.push("Your responses are generally understandable and reasonably structured.");
  } else {
    improvements.push("Organize answers more clearly with a beginning, action, and result.");
  }

  if (avgRelevance >= 78) {
    pros.push("You stay relevant to the role and the question more often than not.");
  } else {
    improvements.push("Answer the exact question first before adding extra details.");
  }

  if (interviewState.results.some((item) => item.hasExample)) {
    pros.push("You use examples, which helps your answers feel more believable.");
  } else {
    improvements.push("Add a real example from a project, class, internship, or team experience.");
  }

  if (interviewState.results.some((item) => item.hasOutcome)) {
    pros.push("You mention impact or outcomes, which strengthens your credibility.");
  } else {
    improvements.push("Include outcomes, impact, or numbers to make your value more visible.");
  }

  nextSteps.push("Practice answering in STAR format for each role.");
  nextSteps.push(`Repeat the ${interviewData[interviewState.role].label} session and compare your score.`);
  nextSteps.push("Turn short answers into 4 to 6 sentence responses with one example and one result.");

  return {
    overall,
    avgConfidence,
    avgClarity,
    avgRelevance,
    pros: pros.slice(0, 4),
    improvements: improvements.slice(0, 4),
    nextSteps: nextSteps.slice(0, 3)
  };
}

function renderReport() {
  const report = buildReport();
  if (!report) {
    return;
  }

  reportRoleTitle.textContent = `${interviewData[interviewState.role].label} Session Summary`;
  reportOverallScore.textContent = `${report.overall}%`;

  if (report.overall >= 82) {
    reportVerdict.textContent = "You show strong interview potential. Keep sharpening examples and outcomes to sound even more convincing.";
  } else if (report.overall >= 72) {
    reportVerdict.textContent = "You have a solid base. More structure, depth, and role-specific detail will improve your performance.";
  } else {
    reportVerdict.textContent = "You have a workable starting point. Focus on structure, examples, and confidence to improve quickly.";
  }

  createReportList(reportPros, report.pros.length ? report.pros : ["You completed the full interview flow and generated useful practice data."]);
  createReportList(reportCons, report.improvements.length ? report.improvements : ["Keep practicing and turning short answers into stronger stories."]);
  createReportList(reportNextSteps, report.nextSteps);

  reportBreakdown.innerHTML = "";
  interviewState.results.forEach((result, index) => {
    const block = document.createElement("div");
    block.className = "report-breakdown-item";
    block.innerHTML = `
      <strong>Question ${index + 1}</strong>
      <p>${result.question}</p>
      <p><strong>Score:</strong> ${result.average}% | Confidence ${result.confidence}% | Clarity ${result.clarity}% | Relevance ${result.relevance}%</p>
      <p><strong>Improvement note:</strong> ${result.tip}</p>
    `;
    reportBreakdown.appendChild(block);
  });

  sessionReport.classList.remove("hidden");
}

function endInterviewSession(announceSummary = true) {
  window.clearTimeout(sessionAdvanceTimeout);
  interviewState.started = false;
  updateSessionStatus("Interview finished. Report ready.");
  nextQuestionBtn.textContent = "Load another question";
  renderReport();

  const report = buildReport();
  if (announceSummary && report) {
    const summaryText = `Session complete. Your overall score is ${report.overall} percent. Review the report for strengths, weak points, and next steps.`;
    typeIntoElement(aiResponseText, summaryText, 14);
    speakText(summaryText, interviewState.role);
  }
}

function submitAnswer() {
  if (!interviewState.started) {
    startInterviewSession();
  }

  const answer = answerInput.value.trim();
  if (!answer) {
    feedbackHeadline.textContent = "Type or record an answer first";
    feedbackTone.textContent = "Need input";
    feedbackTone.className = "feedback-tone needs-work";
    feedbackTip.textContent = "Tip: Add at least 2 to 4 sentences so the system can assess confidence, clarity, and relevance.";
    return;
  }

  const result = analyzeAnswer(answer, interviewState.role);
  interviewState.results.push({
    ...result,
    question: getCurrentQuestion(),
    answer
  });

  updateFeedbackMetric(confidenceFill, confidenceScore, result.confidence);
  updateFeedbackMetric(clarityFill, clarityScore, result.clarity);
  updateFeedbackMetric(relevanceFill, relevanceScore, result.relevance);
  feedbackHeadline.textContent = result.headline;
  feedbackTone.textContent = result.average >= 82 ? "High potential" : result.average >= 70 ? "Good effort" : "Keep improving";
  feedbackTone.className = `feedback-tone ${result.tone}`;
  feedbackTip.textContent = `Tip: ${result.tip}`;
  updateInterviewDashboard(summarizeAverageScore());

  const avatarResponse = buildAvatarResponse(result, interviewState.role);
  typeIntoElement(aiResponseText, avatarResponse, 14);
  speakText(avatarResponse, interviewState.role);

  const isLastQuestion = interviewState.index >= interviewState.questions.length - 1;
  if (isLastQuestion) {
    window.setTimeout(() => endInterviewSession(false), 1800);
    return;
  }

  updateSessionStatus(`Answer captured. Moving to question ${interviewState.index + 2}.`);
  answerInput.value = "";
  submitAnswerBtn.disabled = true;

  sessionAdvanceTimeout = window.setTimeout(() => {
    interviewState.index += 1;
    updateQuestionDisplay();
    submitAnswerBtn.disabled = false;
    const nextPrompt = `Next question. ${getCurrentQuestion()}`;
    typeIntoElement(aiResponseText, nextPrompt, 14);
    speakText(nextPrompt, interviewState.role);
  }, 2400);
}

function cycleQuestionManually() {
  if (interviewState.started) {
    if (interviewState.index >= interviewState.questions.length - 1) {
      endInterviewSession(false);
      return;
    }

    window.clearTimeout(sessionAdvanceTimeout);
    interviewState.index += 1;
    answerInput.value = "";
    updateQuestionDisplay();
    updateSessionStatus(`Skipped ahead to question ${interviewState.index + 1}.`);
    const skipMessage = `Skipping ahead. ${getCurrentQuestion()}`;
    typeIntoElement(aiResponseText, skipMessage, 14);
    speakText(skipMessage, interviewState.role);
    return;
  }

  interviewState.questions = buildSessionQuestions(interviewState.role);
  interviewState.index = (interviewState.index + 1) % interviewState.questions.length;
  updateQuestionDisplay();
}

function renderSkillTags(skillsText) {
  const skills = skillsText
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  previewSkills.innerHTML = "";
  skills.forEach((skill) => {
    const tag = document.createElement("span");
    tag.textContent = skill;
    previewSkills.appendChild(tag);
  });
}

function calculateResumeCompletion() {
  const fields = [
    resumeName.value,
    resumeEmail.value,
    resumePhone.value,
    resumeLocation.value,
    resumePortfolio.value,
    resumeUniversity.value,
    resumeEducation.value,
    resumeSummary.value,
    resumeSkills.value,
    resumeExperience.value,
    resumeProjects.value,
    resumeCertifications.value,
    resumeAchievements.value,
    resumeTargetRole.value
  ];

  const filled = fields.filter((field) => field.trim()).length;
  const skillCount = resumeSkills.value.split(",").map((item) => item.trim()).filter(Boolean).length;
  const projectCount = listFromTextarea(resumeProjects.value).length;

  return clamp(25 + filled * 4 + Math.min(skillCount, 6) * 2 + Math.min(projectCount, 3) * 2, 30, 98);
}

function updateResumePreview() {
  previewName.textContent = resumeName.value.trim() || "Your Name";
  previewRole.textContent = resumeTargetRole.value.trim() || "Target Role";
  previewContact.textContent = [
    resumeEmail.value.trim(),
    resumePhone.value.trim(),
    resumeLocation.value.trim(),
    resumePortfolio.value.trim()
  ]
    .filter(Boolean)
    .join(" • ");
  previewUniversity.textContent = resumeUniversity.value.trim() || "Add your university";
  previewEducation.textContent = resumeEducation.value.trim() || "Add your education";
  previewSummary.textContent = resumeSummary.value.trim() || "Add your professional summary";
  previewExperience.textContent = listFromTextarea(resumeExperience.value).join(" • ") || "Add your experience";
  previewProjects.textContent = listFromTextarea(resumeProjects.value).join(" • ") || "Add your projects";
  previewCertifications.textContent = listFromTextarea(resumeCertifications.value).join(" • ") || "Add certifications";
  previewAchievements.textContent = listFromTextarea(resumeAchievements.value).join(" • ") || "Add achievements";
  renderSkillTags(resumeSkills.value);
  updateResumeDashboard(calculateResumeCompletion());
}

function buildPrintableCvMarkup() {
  const skills = resumeSkills.value
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean)
    .map((skill) => `<span style="display:inline-block;margin:0 8px 8px 0;padding:6px 10px;border-radius:999px;background:#f1ebff;color:#4d25c2;font-weight:700;font-size:12px;">${skill}</span>`)
    .join("");

  const printList = (title, value) => {
    const items = listFromTextarea(value);
    const rendered = items.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "<p>-</p>";
    return `<section><h3>${title}</h3>${rendered}</section>`;
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${resumeName.value.trim() || "Candidate"} CV</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 38px; color: #241c4e; }
          .page { max-width: 840px; margin: 0 auto; }
          .hero { border-bottom: 3px solid #6b3ff2; padding-bottom: 18px; margin-bottom: 22px; }
          h1 { margin: 0 0 8px; font-size: 34px; }
          h2 { margin: 0; color: #5d557d; font-size: 18px; font-weight: 600; }
          .contact { margin-top: 12px; color: #5d557d; line-height: 1.7; }
          h3 { margin: 20px 0 10px; font-size: 17px; color: #4d25c2; }
          p, li { line-height: 1.65; font-size: 14px; }
          ul { margin: 0; padding-left: 20px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          @media print { body { padding: 22px; } }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="hero">
            <h1>${resumeName.value.trim() || "Your Name"}</h1>
            <h2>${resumeTargetRole.value.trim() || "Target Role"}</h2>
            <div class="contact">
              ${[resumeEmail.value.trim(), resumePhone.value.trim(), resumeLocation.value.trim(), resumePortfolio.value.trim()].filter(Boolean).join(" • ")}
            </div>
          </div>
          <section>
            <h3>Professional Summary</h3>
            <p>${resumeSummary.value.trim() || "-"}</p>
          </section>
          <div class="grid">
            <section>
              <h3>Education</h3>
              <p><strong>${resumeEducation.value.trim() || "-"}</strong><br />${resumeUniversity.value.trim() || ""}</p>
            </section>
            <section>
              <h3>Skills</h3>
              <div>${skills || "-"}</div>
            </section>
          </div>
          ${printList("Work Experience", resumeExperience.value)}
          ${printList("Projects", resumeProjects.value)}
          <div class="grid">
            ${printList("Certifications", resumeCertifications.value)}
            ${printList("Achievements", resumeAchievements.value)}
          </div>
        </div>
      </body>
    </html>
  `;
}

function downloadResumePdf() {
  const printWindow = window.open("", "_blank", "width=900,height=1200");
  if (!printWindow) {
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildPrintableCvMarkup());
  printWindow.document.close();
  printWindow.focus();

  window.setTimeout(() => {
    printWindow.print();
  }, 350);
}

function buildCareerProfile() {
  return {
    skillWords: toWords(careerSkills.value),
    interestWords: toWords(careerInterests.value),
    universityWords: toWords(careerUniversity.value),
    studyWords: toWords(careerFieldOfStudy.value),
    personality: careerPersonality.value,
    stress: stressTolerance.value,
    workStyle: workStyle.value,
    environment: careerEnvironment.value,
    leadership: careerLeadership.value,
    communication: careerCommunication.value,
    creativity: careerCreativity.value,
    dataComfort: careerDataComfort.value
  };
}

function scoreCareer(role, profile) {
  let score = 38;

  role.skills.forEach((term) => {
    if (profile.skillWords.some((word) => word.includes(term) || term.includes(word))) {
      score += 6;
    }
  });

  role.interests.forEach((term) => {
    if (profile.interestWords.some((word) => word.includes(term) || term.includes(word))) {
      score += 4;
    }
  });

  role.study.forEach((term) => {
    if (
      profile.studyWords.some((word) => word.includes(term) || term.includes(word)) ||
      profile.universityWords.some((word) => word.includes(term) || term.includes(word))
    ) {
      score += 5;
    }
  });

  if (role.personalities.includes(profile.personality)) {
    score += 8;
  }
  if (role.environments.includes(profile.environment)) {
    score += 5;
  }
  if (role.workStyle.includes(profile.workStyle)) {
    score += 7;
  }
  if (role.stress.includes(profile.stress)) {
    score += 5;
  }
  if (role.leadership.includes(profile.leadership)) {
    score += 4;
  }
  if (role.communication.includes(profile.communication)) {
    score += 4;
  }
  if (role.creativity.includes(profile.creativity)) {
    score += 4;
  }
  if (role.dataComfort.includes(profile.dataComfort)) {
    score += 4;
  }

  return clamp(score, 50, 97);
}

function buildCareerReason(role, profile) {
  const matchedSkills = role.skills.filter((term) =>
    profile.skillWords.some((word) => word.includes(term) || term.includes(word))
  );
  const matchedInterests = role.interests.filter((term) =>
    profile.interestWords.some((word) => word.includes(term) || term.includes(word))
  );
  const skillSummary = matchedSkills.slice(0, 3).join(", ") || "your current strengths";
  const interestSummary = matchedInterests.slice(0, 2).join(", ") || "your preferred interests";
  const studySummary = careerFieldOfStudy.value.trim() || "your study background";
  const stressSummary = profile.stress === "low" ? "a lower-stress path" : profile.stress === "high" ? "a high-pressure environment" : "a balanced level of challenge";

  return `This role aligns with ${skillSummary}, your interest in ${interestSummary}, and your ${studySummary} background. It also fits your ${profile.personality} personality style, ${profile.workStyle} work preference, and preference for ${stressSummary}.`;
}

function renderCareerResults() {
  const profile = buildCareerProfile();

  const scoredRoles = careerCatalog
    .map((role) => ({
      ...role,
      score: scoreCareer(role, profile)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  careerResults.innerHTML = "";

  if (!scoredRoles.length) {
    topCareerName.textContent = "No strong match yet";
    careerFitMeta.textContent = "Add more profile details to generate better recommendations.";
    careerReason.textContent = "The system needs more information about your skills, interests, and preferences before recommending a career path.";
    careerTips.innerHTML = "<li>Add more specific skills and interests</li><li>Choose your work preferences</li><li>Refresh the career match</li>";
    return;
  }

  scoredRoles.forEach((role, index) => {
    const row = document.createElement("div");
    row.className = "career-row";
    row.innerHTML = `
      <div class="career-row-head">
        <span class="career-rank">${index + 1}</span>
        <span class="career-score">${role.score}% Match</span>
      </div>
      <div class="career-row-copy">
        <strong>${role.name}</strong>
        <p>${role.summary}</p>
        <div class="career-bar-wrap">
          <div class="career-bar" style="width: ${role.score}%"></div>
        </div>
      </div>
      <p class="career-mini-tip"><strong>Improve:</strong> ${role.tips.slice(0, 2).join(", ")}</p>
    `;
    careerResults.appendChild(row);
  });

  const topRole = scoredRoles[0];
  topCareerName.textContent = topRole.name;
  careerFitMeta.textContent = `Best fit based on your skills, study background, ${profile.personality} personality, and ${profile.workStyle} work preference.`;
  careerReason.textContent = buildCareerReason(topRole, profile);

  careerTips.innerHTML = "";
  topRole.tips.forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    careerTips.appendChild(item);
  });

  updateCareerDashboard(topRole.score);
}

function updateWellbeing(level) {
  const config = wellbeingGuidance[level];

  stressButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.level) === level);
  });

  wellbeingMessage.textContent = config.message;
  wellbeingTips.innerHTML = "";
  config.tips.forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    wellbeingTips.appendChild(item);
  });

  updateWellbeingDashboard(level);
}

function tickClock() {
  clockSeconds += 1;
  const minutes = String(Math.floor(clockSeconds / 60)).padStart(2, "0");
  const seconds = String(clockSeconds % 60).padStart(2, "0");
  stageClock.textContent = `${minutes}:${seconds}`;
}

function downloadReport() {
  const report = buildReport();
  if (!report) {
    return;
  }

  const lines = [
    `${interviewData[interviewState.role].label} Session Report`,
    `Overall Score: ${report.overall}%`,
    "",
    "Pros:",
    ...report.pros.map((item) => `- ${item}`),
    "",
    "What to Improve:",
    ...report.improvements.map((item) => `- ${item}`),
    "",
    "Next Steps:",
    ...report.nextSteps.map((item) => `- ${item}`),
    "",
    "Question Breakdown:"
  ];

  interviewState.results.forEach((result, index) => {
    lines.push(`Q${index + 1}: ${result.question}`);
    lines.push(`Score: ${result.average}%`);
    lines.push(`Tip: ${result.tip}`);
    lines.push("");
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `pathwise-ai-${interviewState.role}-report.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

speakerButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveRole(button.dataset.role));
});

styleChips.forEach((chip) => {
  chip.addEventListener("click", () => setAvatarStyle(chip.dataset.avatarStyle));
});

startInterviewBtn.addEventListener("click", () => startInterviewSession());
replayQuestionBtn.addEventListener("click", () => speakText(getCurrentQuestion(), interviewState.role));
voiceAnswerBtn.addEventListener("click", () => {
  if (!recognition) {
    voiceSupportNote.textContent = "Mic input is not supported in this browser, so please type your answer.";
    return;
  }

  if (isRecording) {
    recognition.stop();
  } else {
    recognition.start();
  }
});
openCameraBtn.addEventListener("click", openCamera);
closeCameraBtn.addEventListener("click", closeCamera);
finishInterviewBtn.addEventListener("click", () => endInterviewSession(true));
nextQuestionBtn.addEventListener("click", cycleQuestionManually);
submitAnswerBtn.addEventListener("click", submitAnswer);
downloadReportBtn.addEventListener("click", downloadReport);

resumeForm.addEventListener("input", updateResumePreview);
generateResumeBtn.addEventListener("click", () => {
  updateResumePreview();
  generateResumeBtn.textContent = "Resume Updated";
  window.setTimeout(() => {
    generateResumeBtn.textContent = "Generate Resume";
  }, 1200);
});
downloadResumePdfBtn.addEventListener("click", downloadResumePdf);

[
  careerSkills,
  careerInterests,
  careerUniversity,
  careerFieldOfStudy,
  careerPersonality,
  stressTolerance,
  workStyle,
  careerEnvironment,
  careerLeadership,
  careerCommunication,
  careerCreativity,
  careerDataComfort
].forEach((element) => {
  element.addEventListener(element.tagName === "SELECT" ? "change" : "input", renderCareerResults);
});
recommendCareerBtn.addEventListener("click", renderCareerResults);

stressButtons.forEach((button) => {
  button.addEventListener("click", () => updateWellbeing(Number(button.dataset.level)));
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

loginTriggerBtn.addEventListener("click", openAuthModal);
authBackdrop.addEventListener("click", (event) => {
  event.preventDefault();
  closeAuthModal();
});
authCloseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeAuthModal();
});
authBackBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeAuthModal();
});
authForm.addEventListener("submit", handleAuthSubmit);

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.jump);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
} else {
  voiceSupportNote.textContent = "Voice playback is not available in this browser, but the demo still works.";
}

initRecognition();
window.setInterval(tickClock, 1000);
setAvatarStyle("friendly");
setActiveRole("manager", { restartIfRunning: false });
resetFeedback();
updateResumePreview();
renderCareerResults();
updateWellbeing(3);
updateDashboardBar(dashboardInterviewBar, 78);
updateLoginButton();
