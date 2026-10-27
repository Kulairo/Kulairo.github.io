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
    cover: {
      src: "/images/thin-layer-physics-cover.webp",
      width: 600,
      height: 848,
    },
  },
];
