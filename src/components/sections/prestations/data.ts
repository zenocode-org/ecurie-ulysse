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
    title: "L'espace dédié aux cavaliers",
    subtitle: "Plateforme Cavasoft",
    description:
      "Une plateforme entièrement dédiée aux clients est disponible à l'adresse lesecuriesdulysse.cavasoft.fr. À partir du moment où vous avez lié votre compte à l'aide du code envoyé par mail, vous pourrez visualiser les informations se trouvant dans votre fiche cavalier Cavasoft.",
    features: [
      "Informations personnelles, crédits, avances et statut licence/adhésion",
      "Reprises et activités (à venir et passées, tous membres confondus)",
      "Forfaits et panier",
      "Dashboard, factures et paiement en ligne",
    ],
    link: "https://lesecuriesdulysse.cavasoft.fr/connexion",
    linkText: "Accéder à Cavasoft",
  },
  pension: {
    title: "Pension - Valorisation du cheval",
    description: `Nos pensionnaires sont mis au pré tous les matins s'il ne pleut pas, après leur ration de foin et de grains, et retrouvent en fin de journée leur box curé tous les jours avec une litière de paille et une ration de foin (copeaux en option). Une ration de grain est distribuée le midi ainsi que le soir. Nous proposons des forfaits pension-cours ainsi que pension-travail et assurons le coaching en concours.`,
    image: prestations01,
  },
  toubinClement: {
    title: "Les Écuries d'Ulysse font peau neuve",
    subtitle: "PISTE TOUBIN - CLÉMENT 70 X 70 pour vos saisons de Concours !",
  },
  services: [
    {
      title: "Services",
      description:
        "Un service de lavage pour vos couvertures, tapis, bandes, cotons, etc. vous est proposé sur place. Nous nous occupons de tout !",
    },
  ],
  club: {
    title: "Le Club",
    description:
      "Les cours groupés et particuliers s'adressent aux cavaliers de tous niveaux à partir de 4 ans. Les horaires sont répartis du mardi au dimanche.",
    logos: [
      "/images/accueil/footer/FFE-Logo-Cheval-Club-de-France.png",
      "/images/accueil/footer/FFE-poneyClubDeFrance.png",
      "/images/accueil/footer/equuRes.png",
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
        { time: "De 9h00 à 12h00", type: "Cours particuliers", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "De 13h00 à 17h00", type: "Cours particuliers", note: "dressage et obstacle, préparation du cheval et du cavalier" },
      ],
    },
    {
      day: "Mercredi",
      schedule: [
        { time: "9h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "10h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "11h00", type: "Cours adultes", note: "dressage et obstacle" },
        { time: "12h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "13h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "14h00", type: "\"Les pitchouns\" - Débutants - Galops poneys", note: "4 à 6 ans" },
        { time: "15h00", type: "Débutants | Galop 1", note: "7 ans et plus" },
        { time: "16h00", type: "Galop 2 - 3", note: "" },
        { time: "17h00", type: "Galop 4 à 7 - Préparation compétition", note: "Dressage et obstacle" },
      ],
    },
    {
      day: "Jeudi",
      schedule: [
        { time: "9h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "10h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "11h00", type: "Cours adultes", note: "dressage et obstacle" },
        { time: "12h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
      ],
    },
    {
      day: "Vendredi",
      schedule: [
        { time: "9h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "10h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
        { time: "11h00", type: "Cours adultes", note: "dressage et obstacle" },
        { time: "12h00", type: "Cours particulier", note: "dressage et obstacle, préparation du cheval et du cavalier" },
      ],
    },
    {
      day: "Samedi",
      schedule: [
        { time: "9h00", type: "Cours adultes", note: "dressage et obstacle" },
        { time: "10h00", type: "\"Les pitchouns - Débutants\" - Galops poneys", note: "4 à 6 ans" },
        { time: "11h00", type: "Débutants | Galop 1", note: "7 ans et plus" },
        { time: "12h00 à 12h45", type: "Éveil aux poneys", note: "2 à 4 ans" },
        { time: "14h00", type: "Débutants | Galop 1", note: "10 ans et plus" },
        { time: "15h00", type: "Galop 1 - 2", note: "" },
        { time: "16h00", type: "Galop 2 - 3", note: "" },
        { time: "17h00", type: "Galop 4 à 7 - Préparation compétition", note: "Dressage et obstacle" },
      ],
    },
    {
      day: "Dimanche",
      schedule: [
        { time: "De 9h00 à 17h00", type: "Concours ou Cours particulier", note: "Entraînement et compétition" },
      ],
    },
  ],
  scheduleNote: "Les cours particuliers sont sur rdv uniquement en fonction de nos disponibilités.",
  scheduleSeason: "Planning des cours saison 2024 (du 1er septembre 2023 au 31 août 2024)",
  galops: {
    images: [galopsTarifs, galops, poneys],
    conseilsParents: conseilsParents,
  },
  poneyClub: {
    title: "Découverte du Poney-Club et des Poneys Shetland (Écoles, centres de loisirs, ALAE)",
    subtitle: "NOUVEAU ! Les Écuries viennent d'obtenir l'agrément ÉDUCATION NATIONALE",
    description:
      "Offrez aux écoliers une activité au grand air, au contact de la nature et des poneys ! Toute l'année ou pour les sorties de fin d'année, nous accueillons vos groupes d'enfants dans un écrin de verdure.",
    program: [
      "Arrivée aux écuries - visite des écuries, de l'élevage de poneys Shetland et de leur milieu de vie",
      "Familiarisation avec les poneys : par binôme ou trinôme, chacun pourra brosser et s'occuper de son poney",
      "Promenade à poney (les poneys sont tenus en main)",
      "Jeux à poney, maniabilité, voltige",
      "Photo souvenir - départ des écuries",
    ],
    note: "Nous nous adaptons à vos demandes, à vos horaires et à vos contraintes, n'hésitez pas à nous contacter pour une demande de devis!",
    images: [scolaire01, scolaire02],
  },
  baladeInitiation: {
    title: "Balade et Initiation",
    description:
      "Les shetlands de l'élevage sont mis à disposition pour les balades des petits cavaliers à partir de 3 ans ou pour les cours d'initiation à partir de 4 ans.",
  },
  anniversaire: {
    title: "Anniversaire avec les poneys",
    description:
      "Venez fêter l'anniversaire de votre enfant autour des poneys ! Fournissez le goûter (gâteau, boissons et friandises...), on s'occupe de tout!",
    images: [anniversaire01, anniversaire02, anniversaire03],
  },
  openingHours: {
    title: "Ouvert au public",
    schedule: [
      "Du mardi au dimanche de 9H00 à 20H00",
      "Balade en famille Baby-poney (sur RDV)",
      "Éveil aux poneys pour les enfants de 2 à 4 ans (cours de 45 minutes)",
    ],
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
