/** General JEPA explanation, separate from the privately configured FINDEP model.
 * Reference architecture details must not be attributed to the trained model.
 * The public case study intentionally remains broad, as requested by Jeremy.
 */
export const jepa = {
  introduction:
    "JEPA learns by predicting a target’s representation from a context representation. The comparison happens in a learned feature space, rather than requiring the model to reconstruct every raw input value.",
  scope:
    "Conceptual JEPA schematic and learning objective, not the internal FINDEP model specification.",
  context: [
    {
      title: "Context input",
      symbol: "x_c",
      detail: "Information available to the model",
    },
    {
      title: "Context encoder",
      symbol: "f_θ",
      detail: "Learn a feature representation",
    },
    {
      title: "Predictor",
      symbol: "g_ϕ",
      detail: "Predict the target representation",
    },
    { title: "Prediction", symbol: "ẑ_t", detail: "An output in latent space" },
  ],
  target: [
    {
      title: "Target input",
      symbol: "x_t",
      detail: "The signal to be represented",
    },
    {
      title: "Target encoder",
      symbol: "f_ξ",
      detail: "Encode the target signal",
    },
    {
      title: "Target representation",
      symbol: "z_t",
      detail: "The reference for comparison",
    },
  ],
  reference: {
    explanation: "https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/",
  },
  representationIntro:
    "An account embedding is a learned numerical description. The encoder maps financial inputs into a vector shaped by the training objective, offering a different way to explore relationships between accounts.",
  investigation:
    "After TPU training, we explored the representations and whether they retained topographical information: structure in how accounts were organised within the latent space. The focus was understanding what the model had learned.",
  readingGuide: [
    {
      title: "Neighbourhoods",
      text: "Nearby points suggest relationships to investigate; proximity alone does not establish a financial interpretation.",
    },
    {
      title: "Structure",
      text: "The question is what information the embedding retains. A two-dimensional view cannot show the whole representation.",
    },
    {
      title: "Validation",
      text: "Learned structure is a starting point for analysis. Any downstream use would require its own evaluation.",
    },
  ],
};
