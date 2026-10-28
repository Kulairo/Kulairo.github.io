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
  locale: "en" | "fr";
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
    locale: "en",
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
    "type": "Rapport de physique numérique",
    "institution": "EPFL",
    "date": "2025-02",
    "dateLabel": "Février 2025",
    "authors": [
      "Jeremy Kull",
      "Ludovic Brenier"
    ],
    "summary": "Étude du mouvement d’un satellite dans le référentiel tournant Terre–Lune, avec prise en compte des forces d’inertie et comparaison de trois schémas d’intégration.",
    "scope": "Analyse de la convergence numérique, de l’évolution de l’énergie et des trajectoires du satellite.",
    "methods": [
      "Méthodes d’Euler",
      "Référentiel tournant",
      "Convergence numérique"
    ],
    "pdf": "/papers/dynamique-satellite-terre-lune-2025.pdf",
    "pages": 13,
    "fileSize": "1,2 Mo",
    "language": "Français",
    "locale": "fr",
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
    "type": "Rapport de physique numérique",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 novembre 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Simulation d’une aiguille aimantée soumise à un champ magnétique variable et à un amortissement, des petites oscillations aux régimes chaotiques.",
    "scope": "Étude de l’excitation paramétrique, de la sensibilité aux conditions initiales et des attracteurs.",
    "methods": [
      "Schéma de Verlet",
      "Sections de Poincaré",
      "Exposants de Lyapunov"
    ],
    "pdf": "/papers/chaos-aiguille-aimantee-2025.pdf",
    "pages": 13,
    "fileSize": "1,5 Mo",
    "language": "Français",
    "locale": "fr",
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
    "type": "Rapport de physique numérique",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 novembre 2025",
    "authors": [
      "Jeremy Kull",
      "Ludovic Brenier"
    ],
    "summary": "Modélisation de la trajectoire d’un astéroïde et des perturbations gravitationnelles de Jupiter à l’aide d’une intégration de Runge–Kutta d’ordre 4.",
    "scope": "Comparaison des pas de temps fixe et adaptatif, conservation de l’énergie et exploration du voisinage des points de Lagrange.",
    "methods": [
      "Runge–Kutta 4",
      "Pas adaptatif",
      "Mécanique céleste"
    ],
    "pdf": "/papers/dynamique-asteroide-soleil-jupiter-2025.pdf",
    "pages": 13,
    "fileSize": "1,4 Mo",
    "language": "Français",
    "locale": "fr",
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
    "type": "Rapport de physique numérique",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 novembre 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Résolution du potentiel et du champ électriques dans un cylindre contenant des charges libres, avec une permittivité et une densité de charge variables.",
    "scope": "Validation sur une solution analytique et analyse des charges de polarisation aux interfaces.",
    "methods": [
      "Éléments finis",
      "Formulation variationnelle",
      "Polarisation"
    ],
    "pdf": "/papers/electrostatique-cylindre-dielectrique-2025.pdf",
    "pages": 14,
    "fileSize": "2,2 Mo",
    "language": "Français",
    "locale": "fr",
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
    "type": "Rapport de physique numérique",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 novembre 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Comparaison de trois équations d’onde pour étudier la propagation, la réflexion et l’amplification d’une vague à l’approche d’une côte.",
    "scope": "Analyse des modes propres, de la stabilité numérique et de l’influence du profil bathymétrique.",
    "methods": [
      "Approximation WKB",
      "Différences finies",
      "Bathymétrie variable"
    ],
    "pdf": "/papers/propagation-ondes-ocean-profondeur-variable-2025.pdf",
    "pages": 20,
    "fileSize": "1,9 Mo",
    "language": "Français",
    "locale": "fr",
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
    "type": "Rapport de physique numérique",
    "institution": "EPFL",
    "date": "2025-11-21",
    "dateLabel": "21 novembre 2025",
    "authors": [
      "Jeremy Kull Jaeggli",
      "Ludovic Joseph A. Brenier"
    ],
    "summary": "Simulation de l’évolution d’un paquet d’onde dans un potentiel harmonique et en présence d’une barrière, à l’aide du schéma de Crank–Nicolson.",
    "scope": "Étude de la transmission, des interférences et de la convergence, avec comparaison aux comportements classiques.",
    "methods": [
      "Crank–Nicolson",
      "Paquets d’onde",
      "Effet tunnel"
    ],
    "pdf": "/papers/dynamique-quantique-effet-tunnel-2025.pdf",
    "pages": 13,
    "fileSize": "1,2 Mo",
    "language": "Français",
    "locale": "fr",
    "collection": "numerical",
    "cover": {
      "src": "/images/dynamique-quantique-effet-tunnel-cover.webp",
      "width": 600,
      "height": 848
    }
  },
];
