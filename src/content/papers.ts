/** Add an entry and its explicitly approved public PDF to extend the collection. */
export type Paper = {
  slug: string;
  title: string;
  type: string;
  institution: string;
  date: string;
  dateLabel: string;
  authors: string[];
  summary: string;
  scope: string;
  methods: string[];
  pdf: string;
  pages: number;
  fileSize: string;
  language: string;
  pdfLocale: "en" | "fr";
  collection: "laboratory" | "numerical";
  cover: { src: string; width: number; height: number };
};

export const papers: Paper[] = [
  {
    slug: "thin-layer-physics",
    title: "Thin layer physics",
    type: "Laboratory report",
    institution: "EPFL",
    date: "2025-10-17",
    dateLabel: "17 October 2025",
    authors: [
      "Juan Prieto Alejandro",
      "Jeremy Kull Jaeggli",
      "Yago Viada de Soto",
    ],
    summary:
      "An experimental study of zinc-oxide thin films deposited on glass by magnetron sputtering. We investigated how deposition time, substrate heating and annealing relate to surface roughness, electrical resistivity, optical properties and crystal structure.",
    scope:
      "The report brings together complementary measurements and uncertainty analysis, including a discussion of reflectance calibration and sample uniformity that limit interpretation of the results.",
    methods: [
      "Magnetron sputtering",
      "Profilometry",
      "Van der Pauw measurements",
      "Optical spectroscopy",
      "X-ray diffraction",
    ],
    pdf: "/papers/thin-layer-physics-2025.pdf",
    pages: 22,
    fileSize: "9.6 MB",
    language: "English",
    pdfLocale: "en",
    collection: "laboratory",
    cover: {
      src: "/images/thin-layer-physics-cover.webp",
      width: 600,
      height: 848,
    },
  },
  {
    "slug": "dynamique-satellite-terre-lune",
    "title": "Satellite dynamics in the Earth–Moon system: comparison of Euler schemes",
    "type": "Numerical physics report",
    "institution": "EPFL",
    "date": "2025-02",
    "dateLabel": "February 2025",
    "authors": [
      "Jeremy Kull",
      "Ludovic Brenier"
    ],
    "summary": "Study of satellite motion in the rotating Earth–Moon frame, accounting for inertial forces and comparing three numerical integration schemes.",
    "scope": "Analysis of numerical convergence, energy evolution and satellite trajectories.",
    "methods": [
      "Euler methods",
      "Rotating reference frame",
      "Numerical convergence"
    ],
    "pdf": "/papers/dynamique-satellite-terre-lune-2025.pdf",
    "pages": 13,
    "fileSize": "1.2 MB",
    "language": "French",
    "pdfLocale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/dynamique-satellite-terre-lune-cover.webp",
      "width": 600,
      "height": 848
    }
  },
  {
    "slug": "chaos-aiguille-aimantee",
    "title": "Nonlinear dynamics and chaos of a magnetic needle in an oscillating field",
    "type": "Numerical physics report",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 November 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Simulation of a magnetic needle in a time-varying magnetic field with damping, from small oscillations to chaotic regimes.",
    "scope": "Investigation of parametric excitation, sensitivity to initial conditions and attractors.",
    "methods": [
      "Verlet scheme",
      "Poincaré sections",
      "Lyapunov exponents"
    ],
    "pdf": "/papers/chaos-aiguille-aimantee-2025.pdf",
    "pages": 13,
    "fileSize": "1.5 MB",
    "language": "French",
    "pdfLocale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/chaos-aiguille-aimantee-cover.webp",
      "width": 600,
      "height": 848
    }
  },
  {
    "slug": "dynamique-asteroide-soleil-jupiter",
    "title": "Asteroid dynamics in the Sun–Jupiter system: adaptive time-step integration",
    "type": "Numerical physics report",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 November 2025",
    "authors": [
      "Jeremy Kull",
      "Ludovic Brenier"
    ],
    "summary": "Modelling an asteroid’s trajectory and Jupiter’s gravitational perturbations using fourth-order Runge–Kutta integration.",
    "scope": "Comparison of fixed and adaptive time steps, energy conservation and motion near the Lagrange points.",
    "methods": [
      "Runge–Kutta 4",
      "Adaptive time stepping",
      "Celestial mechanics"
    ],
    "pdf": "/papers/dynamique-asteroide-soleil-jupiter-2025.pdf",
    "pages": 13,
    "fileSize": "1.4 MB",
    "language": "French",
    "pdfLocale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/dynamique-asteroide-soleil-jupiter-cover.webp",
      "width": 600,
      "height": 848
    }
  },
  {
    "slug": "electrostatique-cylindre-dielectrique",
    "title": "Finite element modelling of electrostatics in a dielectric cylinder",
    "type": "Numerical physics report",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 November 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Solving for the electric potential and field in a cylinder containing free charges, with variable permittivity and charge density.",
    "scope": "Validation against an analytical solution and analysis of polarisation charges at interfaces.",
    "methods": [
      "Finite elements",
      "Variational formulation",
      "Polarisation"
    ],
    "pdf": "/papers/electrostatique-cylindre-dielectrique-2025.pdf",
    "pages": 14,
    "fileSize": "2.2 MB",
    "language": "French",
    "pdfLocale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/electrostatique-cylindre-dielectrique-cover.webp",
      "width": 600,
      "height": 848
    }
  },
  {
    "slug": "propagation-ondes-ocean-profondeur-variable",
    "title": "Wave propagation in an ocean of variable depth: analysis and numerical simulation",
    "type": "Numerical physics report",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 November 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Comparison of three wave equations to study wave propagation, reflection and amplification as a wave approaches the coast.",
    "scope": "Analysis of normal modes, numerical stability and the influence of the seabed profile.",
    "methods": [
      "WKB approximation",
      "Finite differences",
      "Variable bathymetry"
    ],
    "pdf": "/papers/propagation-ondes-ocean-profondeur-variable-2025.pdf",
    "pages": 20,
    "fileSize": "1.9 MB",
    "language": "French",
    "pdfLocale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/propagation-ondes-ocean-profondeur-variable-cover.webp",
      "width": 600,
      "height": 848
    }
  },
  {
    "slug": "dynamique-quantique-effet-tunnel",
    "title": "Quantum dynamics and tunnelling: numerical solution of the Schrödinger equation",
    "type": "Numerical physics report",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 November 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Simulation of wave-packet evolution in a harmonic potential and in the presence of a barrier using the Crank–Nicolson scheme.",
    "scope": "Investigation of transmission, interference and convergence, with comparisons to classical behaviour.",
    "methods": [
      "Crank–Nicolson",
      "Wave packets",
      "Quantum tunnelling"
    ],
    "pdf": "/papers/dynamique-quantique-effet-tunnel-2025.pdf",
    "pages": 13,
    "fileSize": "1.2 MB",
    "language": "French",
    "pdfLocale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/dynamique-quantique-effet-tunnel-cover.webp",
      "width": 600,
      "height": 848
    }
  },
];
