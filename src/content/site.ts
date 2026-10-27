/** All public biographical facts, project narratives and asset choices live here.
 * The original CV and source selfies must never be imported by the app.
 */
export const site = {
  name: "Jeremy Kull Jaeggli",
  email: "jeremykulljaeggli@gmail.com",
  location: "London, UK",
  title: "Jeremy Kull Jaeggli — Physics, AI & Engineering",
  description:
    "Physics graduate from EPFL, studying advanced aeronautical engineering at Imperial College London. Practical machine learning, representation learning and scientific computing.",
  // Current user-selected profile photograph. Earlier portraits are not public assets.
  portrait: {
    src: "/images/jeremy-profile.webp",
    alt: "Portrait of Jeremy Kull Jaeggli in a navy jacket and tie",
    width: 362,
    height: 475,
  },
  role: "I build machine-learning systems and scientific software.",
  introduction:
    "I’m a physics graduate from EPFL, now studying advanced aeronautical engineering at Imperial College London. My work spans data pipelines, representation-learning models, practical AI tools and spacecraft simulation.",
  direction:
    "I’m looking for London-based AI/ML engineering and scientific-computing opportunities for 2027, with a particular interest in representation learning and machine learning for dynamical systems.",
  teamPhoto: {
    src: "/images/epfl-spacecraft-team-2025-2026.webp",
    alt: "EPFL Spacecraft Team 2025–2026 gathered outside the SwissTech Convention Center",
    width: 2000,
    height: 1030,
    caption: "EPFL Spacecraft Team · 2025–2026 · Lausanne",
  },
  // Add only verified URLs. No résumé until a separately redacted PDF is reviewed.
  links: [] as { label: string; url: string }[],
  resume: null as { url: string; label: string } | null,
  interests: [
    "Scientific machine learning",
    "Dynamical systems & turbulence",
    "Representation learning",
    "Optimisation & control",
  ],
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  organization: string;
  year: string;
  status: string;
  visual: "embedding" | "pipeline" | "orbit" | "chaos";
  summary: string;
  tools: string[];
  role: string;
  question: string;
  introduction: string;
  contributions: string[];
  methods: { title: string; description: string }[];
  outcome: string;
  boundary: string;
  visualCaption: string;
  reflection: string;
  highlights: { label: string; text: string }[];
  image?: typeof site.teamPhoto;
  disclosure?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    highlights: [
      {
        label: "My contribution",
        text: "Cleaning and preparing a large historical financial dataset on Google Cloud; end-to-end JEPA pipeline design.",
      },
      {
        label: "What we produced",
        text: "A JEPA model trained on Google TPUs and an exploration of learned account representations.",
      },
    ],
    slug: "jepa-representation-learning",
    title: "Learning credit-account representations with JEPA",
    shortTitle: "JEPA for financial representations.",
    category: "Representation learning",
    organization: "Financiera Independencia",
    year: "2026",
    status: "Research & experimentation",
    visual: "embedding",
    summary:
      "From a large historical financial dataset to learned account representations: data preparation on Google Cloud, JEPA pipeline design and model training on Google TPUs.",
    tools: ["Python", "SQL", "Google Cloud", "TPUs", "JEPA"],
    disclosure: "Financial data cannot be disclosed under NDA.",
    role: "Data Science and AI Analyst · Jun–Sep 2026",
    question:
      "What structure can a model learn about an account without reducing it to a single prediction?",
    introduction:
      "At Financiera Independencia in Mexico City, I worked across the path from historical financial records to a trained representation-learning model. A substantial part of the work was cleaning and preparing a large historical dataset covering customers, loans, accounts and payment histories. Using Google Cloud infrastructure, I developed the data and modelling pipeline; we trained the JEPA model on Google TPUs and explored the resulting account representations.",
    contributions: [
      "Cleaned and prepared a large historical financial dataset using Python and SQL on Google Cloud infrastructure.",
      "Designed the end-to-end JEPA pipeline and contributed to model development and training on Google TPUs.",
      "Explored the structure and information retained in the resulting latent space.",
    ],
    methods: [
      {
        title: "Prepare historical data",
        description:
          "Clean and prepare historical customer, loan, account and payment records using Python and SQL within Google Cloud. The aim was to turn a large, heterogeneous financial dataset into inputs suitable for representation learning.",
      },
      {
        title: "Develop and train on TPUs",
        description:
          "Develop the JEPA modelling pipeline and train on Google TPUs. The model learned representations of financial accounts, with the investigation focused on the structure encoded in that learned space.",
      },
      {
        title: "Inspect the learned structure",
        description:
          "Explore whether the embeddings retain meaningful topographical information. The emphasis is on understanding the latent space, rather than claiming a validated downstream business result.",
      },
    ],
    outcome:
      "A cloud-based workflow spanning large historical dataset preparation, JEPA model development and TPU training, followed by exploration of learned account representations. This was representation-learning research and experimentation; downstream credit-scoring performance and production deployment were outside its scope.",
    boundary:
      "The architecture diagram is conceptual and all plotted points are synthetic. They illustrate the learning problem without reproducing internal model details or financial records.",
    visualCaption:
      "Synthetic embedding-space illustration. Point positions are decorative, not learned account embeddings.",
    reflection:
      "A useful representation should be understood as well as learned. This work sharpened my interest in what a latent space preserves, and how to interrogate it before building decisions on top of it.",
  },
  {
    number: "02",
    highlights: [
      {
        label: "My contribution",
        text: "Ownership from data acquisition and cleaning through modelling and local deployment.",
      },
      {
        label: "What I built",
        text: "Compact machine-learning models, internal analytics and practical tooling.",
      },
    ],
    slug: "practical-ai-small-business",
    title: "Practical AI for small businesses",
    shortTitle: "Small models. Useful systems.",
    category: "Applied ML & data systems",
    organization: "KAMex",
    year: "2026–present",
    status: "Ongoing entrepreneurial work",
    visual: "pipeline",
    summary:
      "Building the path from messy operational data to compact models and practical, locally deployed tools for Mexican SMEs.",
    tools: ["Python", "Data pipelines", "Tabular ML"],
    role: "Founder · Applied AI & Data Science · Jul 2026–present",
    question:
      "What is the smallest useful system that can turn operational data into something a business can use?",
    introduction:
      "I founded KAMex — Key Analytics & Metrics Mexico — to work directly on practical data problems for Mexican small and medium-sized businesses. My work spans acquisition, cleaning, modelling and delivery, with an emphasis on compact systems that fit the data and the context.",
    contributions: [
      "Built end-to-end acquisition and preparation pipelines for internal operational data.",
      "Developed decision-tree and other small-scale machine-learning models tailored to the available data and needs.",
      "Developed internal analytics and tooling, and deployed models locally.",
    ],
    methods: [
      {
        title: "Start with the data",
        description:
          "Turn company records into modelling datasets. Acquisition and cleaning come before model selection; a more complicated model cannot repair an ill-defined input.",
      },
      {
        title: "Choose a proportionate model",
        description:
          "Use compact, tailored methods for tabular problems. The aim is a useful system suited to the task, without assuming a large model is necessary.",
      },
      {
        title: "Own the path to delivery",
        description:
          "Connect data preparation, model development and local deployment. Treat the surrounding tooling as part of the work, rather than ending at an isolated model.",
      },
    ],
    outcome:
      "Data pipelines, tailored small-scale models and locally deployed tools, built through hands-on ownership of the path from acquisition to delivery. The work continues as KAMex develops.",
    boundary:
      "Client names, internal datasets and commercial details remain private. The pipeline shown here is a conceptual illustration of the workflow.",
    visualCaption:
      "Illustrative workflow. No customer data or live business metrics are shown.",
    reflection:
      "The interesting engineering decision is often how much complexity to leave out. I value systems that can be understood, maintained and used in the setting they were built for.",
  },
  {
    number: "03",
    highlights: [
      {
        label: "My contribution",
        text: "Ground-system interfaces, attitude and battery simulations, and telemetry support.",
      },
      {
        label: "How I worked",
        text: "Across mission-design, flight-software and X-band teams within CHESS.",
      },
    ],
    slug: "spacecraft-mission-systems",
    title: "Spacecraft mission and ground systems",
    shortTitle: "Connecting orbit to operations.",
    category: "Aerospace & simulation",
    organization: "EPFL Spacecraft Team",
    year: "2025–2026",
    status: "Team engineering project",
    visual: "orbit",
    image: site.teamPhoto,
    summary:
      "Ground interfaces, spacecraft attitude and battery simulations, and telemetry tools for the CHESS student mission.",
    tools: ["Simulation", "Ground systems", "Telemetry"],
    role: "Mission Design Analyst · Lausanne · 2025–2026",
    question:
      "How do you connect a spacecraft’s physical behaviour to the software used to understand it on the ground?",
    introduction:
      "As a member of the EPFL Spacecraft Team, I contributed to CHESS in the context of ESA’s “Build Your Satellite” programme. The work connected mission analysis, software interfaces and telemetry across several parts of a student engineering team.",
    contributions: [
      "Implemented and designed portions of the Ground Data System interface.",
      "Simulated spacecraft attitude and battery behaviour to support mission-performance assessment.",
      "Supported flight-software and X-band team work on F’ mission-control software and telemetry integration.",
    ],
    methods: [
      {
        title: "Represent the physical system",
        description:
          "Simulate attitude and battery behaviour to explore aspects of mission performance. These models connect physical constraints to operational questions.",
      },
      {
        title: "Build the ground interface",
        description:
          "Contribute to the interface through which ground-system information can be accessed and understood. My work covered portions of the system within a wider team effort.",
      },
      {
        title: "Connect across disciplines",
        description:
          "Support telemetry and mission-control software work across teams. The interface between subsystems matters as much as each subsystem in isolation.",
      },
    ],
    outcome:
      "Ground-system interface contributions, attitude and battery simulations, and support for telemetry integration. My work formed part of CHESS’s wider collaborative engineering effort.",
    boundary:
      "The team photograph documents the 2025–2026 EPFL Spacecraft Team. The orbit graphic is conceptual and does not reproduce mission data or the CHESS spacecraft configuration.",
    visualCaption:
      "Conceptual orbit and attitude vectors. Not CHESS mission data or spacecraft geometry.",
    reflection:
      "Working across physics and software makes interfaces tangible: assumptions in a model become constraints in an operation. This is one reason I am continuing into aeronautical engineering.",
  },
  {
    number: "04",
    highlights: [
      {
        label: "My contribution",
        text: "Academic investigation of a driven pendulum / magnetic motor.",
      },
      {
        label: "Methods",
        text: "Frequency analysis, Poincaré sections and Lyapunov analysis.",
      },
    ],
    slug: "deterministic-chaos",
    title: "Exploring deterministic chaos",
    shortTitle: "Simple rules. Complex behaviour.",
    category: "Experimental & computational physics",
    organization: "EPFL · Academic physics work",
    year: "BSc coursework",
    status: "Academic project · Not peer reviewed",
    visual: "chaos",
    summary:
      "Investigating a driven pendulum / magnetic motor through frequency analysis, Poincaré sections and Lyapunov analysis.",
    tools: ["FFT", "Poincaré sections", "Lyapunov analysis"],
    role: "Academic physics project · EPFL",
    question:
      "How can a deterministic physical system produce motion that becomes so difficult to predict?",
    introduction:
      "My academic physics work at EPFL included investigating a driven pendulum / magnetic motor as a nonlinear dynamical system. Frequency-domain and phase-space methods offer different views of the same motion: what repeats, what changes, and how nearby trajectories separate.",
    contributions: [
      "Investigated nonlinear behaviour in a driven pendulum / magnetic motor as academic physics work.",
      "Used FFT and Poincaré sections to examine frequency content and phase-space structure.",
      "Explored sensitivity to initial conditions through Lyapunov analysis.",
    ],
    methods: [
      {
        title: "Look in the frequency domain",
        description:
          "FFT analysis provides a view of the frequencies present in a signal. It complements the time trace when investigating driven motion.",
      },
      {
        title: "Sample the phase space",
        description:
          "Poincaré sections offer a way to inspect a periodically driven system by sampling at a consistent phase of the forcing.",
      },
      {
        title: "Investigate sensitivity",
        description:
          "Lyapunov analysis examines how nearby trajectories separate. It is a tool for studying sensitivity, not a justification for declaring every complicated signal chaotic.",
      },
    ],
    outcome:
      "An academic investigation combining experimental physics and numerical analysis. Original measurements and reviewed project results are not reproduced on this site; the visual is generated separately using synthetic parameters.",
    boundary:
      "This is coursework, not a peer-reviewed publication. The phase-space visual is an illustrative driven-pendulum simulation, not a reconstruction of the experiment or a reported finding.",
    visualCaption:
      "Illustrative driven-pendulum trajectory, numerically integrated with synthetic parameters. Not experimental data.",
    reflection:
      "The bridge to machine learning is a question I am still exploring: how can a model learn a useful description of a changing system while respecting the structure of its dynamics?",
  },
];

export const experience = [
  {
    dates: "JUL 2026 — PRESENT",
    organization: "KAMex",
    role: "Founder · Applied AI & Data Science",
    detail:
      "Data acquisition, compact machine-learning models and practical local deployments for Mexican SMEs.",
  },
  {
    dates: "JUN — SEP 2026",
    organization: "Financiera Independencia",
    role: "Data Science and AI Analyst",
    detail:
      "Historical financial data preparation on Google Cloud, JEPA pipeline design and model training on Google TPUs, followed by representation analysis.",
  },
  {
    dates: "2025 — 2026",
    organization: "EPFL Spacecraft Team",
    role: "Mission Design Analyst",
    detail:
      "CHESS ground-system interfaces, attitude and battery simulations, and telemetry software contributions.",
  },
];
export const education = [
  {
    dates: "SEP 2026 — SEP 2027",
    organization: "Imperial College London",
    role: "MSc Advanced Aeronautical Engineering",
    detail:
      "In progress · Machine learning, fluid mechanics, control and numerical methods.",
    current: true,
  },
  {
    dates: "2023 — 2026",
    organization: "EPFL",
    role: "BSc Physics",
    detail:
      "Mathematical, computational and experimental physics, with a grounding in fluid mechanics.",
    current: false,
  },
];
export const earlierExperience = [
  {
    dates: "2024 — 2025",
    organization: "EPFL",
    role: "Student Mentor",
    detail:
      "Supported around 25 first-semester students in their transition to university.",
  },
  {
    dates: "2024",
    organization: "Av Time SA",
    role: "E-commerce Analyst Intern",
    detail:
      "Built financial models and market-entry plans for an e-commerce platform in Mexico City.",
  },
  {
    dates: "2022 — 2023",
    organization: "EPFL",
    role: "Maths & Physics Tutor",
    detail:
      "Tutored high-school and first-year university students in calculus, mechanics and physics.",
  },
];
export const capabilities = [
  {
    label: "Build",
    text: "Python · SQL · C++ · Data pipelines · Practical ML deployment",
  },
  {
    label: "Model",
    text: "Representation learning · JEPA · Tabular ML · XGBoost",
  },
  {
    label: "Understand",
    text: "Scientific computing · Numerical modelling · Dynamical systems",
  },
];

/** Short routes into the work, for readers assessing different engineering strengths. */
export const workPaths = [
  {
    label: "Machine learning",
    evidence: "Google Cloud → TPU training → embeddings",
    href: "/work/jepa-representation-learning",
  },
  {
    label: "End-to-end engineering",
    evidence: "Data pipelines → models → local tools",
    href: "/work/practical-ai-small-business",
  },
  {
    label: "Scientific computing",
    evidence: "Spacecraft simulation & mission software",
    href: "/work/spacecraft-mission-systems",
  },
];
