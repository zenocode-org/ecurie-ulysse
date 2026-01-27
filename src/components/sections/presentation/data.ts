import ecurieUlysseToulouse from "./assets/ecurieUlysseToulouse.jpg";
import brochureCover from "./assets/1ereDeCouvEqPourTous.jpg";

export const presentationData = {
  history: {
    image: ecurieUlysseToulouse,
    title: "Notre Histoire",
    content: `Les Écuries d'Ulysse ont été créées en 2005 avec la passion de l'équitation et le désir de créer un lieu d'exception pour les chevaux et leurs propriétaires.

Situées au cœur des vignes du Frontonnais dans le Nord Toulousain, nos écuries ont évolué au fil des années pour devenir un établissement reconnu et labellisé.

En 2019, nous avons obtenu plusieurs labels prestigieux qui témoignent de notre engagement envers le bien-être animal et l'environnement :
- Label EquuRES
- Label Bien-Être Animal FFE
- Certification Agriculture Biologique

Ces reconnaissances récompensent notre travail quotidien pour offrir à nos pensionnaires un environnement de qualité, respectueux de leur bien-être et de la nature.`,
  },
  team: {
    title: "Notre Équipe",
    members: [
      {
        role: "Palefrenier-soigneur",
        count: 1,
        description: "Soins quotidiens et entretien des installations",
      },
      {
        role: "Enseignants",
        count: 1,
        description: "Cours et formations pour tous niveaux",
      },
      {
        role: "Dirigeant",
        count: 1,
        description: "Caroline Orsini, à la direction de l'établissement",
      },
    ],
  },
  videos: [
    {
      title: "Visite guidée",
      videoId: "0qJyxsReXZc",
    },
    {
      title: "Des cours pour tous les âges",
      videoId: "8ofiTOIGXJw",
    },
  ],
  brochure: {
    title: "Télécharger notre brochure",
    description: "Découvrez notre établissement en détail",
    image: brochureCover,
    file: "/documents/UlysseA4.pdf",
  },
};
