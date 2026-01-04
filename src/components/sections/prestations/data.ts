import prestations01 from "./assets/prestations_01.jpg";
import prestation02 from "./assets/prestation_02.jpg";
import prestation03 from "./assets/prestation_03.png";
import galopsTarifs from "./assets/galopsTarifs.jpg";
import galops from "./assets/galops.jpg";
import poneys from "./assets/poneys.jpg";
import conseilsParents from "./assets/conseilsParents.jpg";
import scolaire01 from "./assets/scolaire_01.png";
import scolaire02 from "./assets/scolaire_02.png";
import anniversaire01 from "./assets/anniversaire_01.jpg";
import anniversaire02 from "./assets/anniversaire_02.jpg";
import anniversaire03 from "./assets/anniversaire_03.jpg";
import brochureCover from "./assets/1ereDeCouvEqPourTous.jpg";

export const prestationsData = {
  cavasoft: {
    title: "NOUVEAU - L'espace dédié aux cavaliers",
    subtitle: "Plateforme Cavasoft",
    description:
      "Une plateforme entièrement dédiée aux clients est disponible à l'adresse lesecuriesdulysse.cavasoft.fr. À partir du moment où vous avez lié votre compte à l'aide du code envoyé par mail, vous pourrez visualiser les informations se trouvant dans votre fiche cavalier Cavasoft.",
    features: [
      "Informations personnelles, crédits, avances et statut licence/adhésion",
      "Reprises et activités (à venir et passées, tous membres confondus)",
      "Forfaits et panier",
      "Dashboard, factures et paiement en ligne",
    ],
    link: "https://lesecuriesdulysse.cavasoft.fr",
    linkText: "Accéder à Cavasoft",
  },
  pension: {
    title: "Pension - Valorisation du cheval",
    description: `Notre service de pension offre un hébergement de qualité pour vos chevaux et poneys dans un environnement respectueux de leur bien-être.

Nous proposons :
- Boxes spacieux de 3m x 3m
- Sorties quotidiennes en paddocks
- Alimentation adaptée à chaque cheval
- Soins vétérinaires et maréchalerie
- Suivi personnalisé de chaque pensionnaire`,
    image: prestations01,
  },
  services: [
    {
      title: "Service de lavage",
      description:
        "Lavage professionnel de couvertures, tapis, bandes et cotons",
    },
  ],
  club: {
    title: "Le Club",
    description:
      "Rejoignez notre club équestre et bénéficiez de cours adaptés à tous les niveaux, du débutant au confirmé.",
    logos: [
      "/images/accueil/footer/FFE-Logo-Cheval-Club-de-France.png",
      "/images/accueil/footer/FFE-poneyClubDeFrance.png",
    ],
  },
  eveilPoneys: {
    title: "Éveil aux poneys",
    description:
      "Nouveau : Séances à partir de 2 ans pour initier les tout-petits au monde équestre dans un cadre sécurisé et bienveillant.",
    images: [prestation02, prestation03],
  },
  schedule: [
    {
      day: "Mardi",
      schedule: [
        { time: "14h00", type: "Cours collectif", note: "Tous niveaux" },
        { time: "15h30", type: "Cours collectif", note: "Débutants" },
        { time: "17h00", type: "Cours particulier", note: "Sur RDV" },
      ],
    },
    {
      day: "Mercredi",
      schedule: [
        { time: "14h00", type: "Poney-club", note: "Enfants" },
        { time: "15h30", type: "Cours collectif", note: "Tous niveaux" },
        { time: "17h00", type: "Cours collectif", note: "Confirmés" },
      ],
    },
    {
      day: "Jeudi",
      schedule: [
        { time: "14h00", type: "Cours collectif", note: "Tous niveaux" },
        { time: "15h30", type: "Cours particulier", note: "Sur RDV" },
        { time: "17h00", type: "Cours collectif", note: "Adultes" },
      ],
    },
    {
      day: "Vendredi",
      schedule: [
        { time: "14h00", type: "Cours collectif", note: "Tous niveaux" },
        { time: "15h30", type: "Cours collectif", note: "Débutants" },
        { time: "17h00", type: "Cours particulier", note: "Sur RDV" },
      ],
    },
    {
      day: "Samedi",
      schedule: [
        { time: "9h00", type: "Poney-club", note: "Enfants" },
        { time: "10h30", type: "Cours collectif", note: "Tous niveaux" },
        { time: "14h00", type: "Cours collectif", note: "Confirmés" },
        { time: "15h30", type: "Cours collectif", note: "Adultes" },
      ],
    },
    {
      day: "Dimanche",
      schedule: [
        { time: "9h00", type: "Poney-club", note: "Enfants" },
        { time: "10h30", type: "Cours collectif", note: "Tous niveaux" },
        { time: "14h00", type: "Balade", note: "Sur RDV" },
      ],
    },
  ],
  scheduleNote: "Les cours particuliers sont sur rdv uniquement",
  galops: {
    images: [galopsTarifs, galops, poneys],
    conseilsParents: conseilsParents,
  },
  poneyClub: {
    title: "Découverte du Poney-Club",
    subtitle: "Pour les écoles et centres de loisirs",
    description:
      "Nous proposons des programmes adaptés pour les groupes scolaires et centres de loisirs, avec un agrément ÉDUCATION NATIONALE.",
    images: [scolaire01, scolaire02],
  },
  anniversaire: {
    title: "Anniversaire avec les poneys",
    description:
      "Organisez un anniversaire inoubliable avec nos poneys ! Activités adaptées aux enfants.",
    images: [anniversaire01, anniversaire02, anniversaire03],
  },
  documents: [
    {
      title: "Télécharger notre brochure",
      description: "Découvrez notre établissement en détail",
      image: brochureCover,
      file: "/documents/UlysseA4.pdf",
    },
    {
      title: "Dossier d'inscription",
      description: "Inscriptions ouvertes toute l'année !",
      image: brochureCover,
      file: "/documents/DossierInscriptionUlysse2024.pdf",
    },
    {
      title: "Consulter nos tarifs",
      description: "Tarifs 2024 disponibles",
      image: brochureCover,
      file: "/documents/tarifsUlysse2024.pdf",
    },
  ],
};
