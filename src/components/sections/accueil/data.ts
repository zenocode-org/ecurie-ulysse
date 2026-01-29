import sliderPassion from "./assets/sliderPassion.jpg";
import sliderCompet from "./assets/sliderCompet.jpg";
import sliderConfortChevaux from "./assets/sliderConfortChevaux.jpg";
import sliderInstal from "./assets/sliderInstal.jpg";
import sliderElevage from "./assets/sliderElevage.jpg";
import sliderBienvenue from "./assets/sliderBienvenue.jpg";
import blasonOccitanie from "./assets/blason_occitanie.png";
import ffe from "./assets/ffe.png";
import equuRes from "./assets/equuRes.png";
import labelBienEtreAnimal from "./assets/LabelBien-EtreAnimalFFE.png";
import abCert from "./assets/AB_cert_HD.jpg";
import ffeChevalClub from "./assets/FFE-Logo-Cheval-Club-de-France.png";
import ffeFlot from "./assets/ffe_flot.png";
import ffePoneyClub from "./assets/FFE-poneyClubDeFrance.png";
import exploitationHauteValeurEnvironnementale from "./assets/logo-hve.png";
import qualitEquidesOccitane from "./assets/label-qualit-équidés-occitanie.png";
import brochureCover from "../../../images/commun/UlysseA4_1ereDeCouv.jpg";
export const accueilData = {
  carousel: {
    slides: [
      {
        image: sliderPassion,
        alt: "Passion équestre",
      },
      {
        image: sliderCompet,
        alt: "Compétition",
      },
      {
        image: sliderConfortChevaux,
        alt: "Confort des chevaux",
      },
      {
        image: sliderInstal,
        alt: "Installations",
      },
      {
        image: sliderElevage,
        alt: "Élevage",
      },
    ],
  },
  headline: "Les Écuries d'Ulysse",
  subheading:
    "Centre Équestre, Poney-Club, Écuries de Propriétaires, Organisateur de Concours et service de Transit pour chevaux.",
  location: "Bouloc (Nord Toulouse)",
  phone: "06 75 86 21 93",
  stats: [
    {
      value: "100",
      unit: "hectares",
      description: "de domaine",
    },
    {
      value: "26",
      unit: "boxes",
      description: "pour vos chevaux",
    },
    {
      value: "1",
      unit: "manège couvert",
      description: "pour toutes saisons",
    },
    {
      value: "2",
      unit: "carrières",
      description: "extérieures",
    },
    {
      value: "1",
      unit: "rond de longe",
      description: "pour l'entraînement",
    },
  ],
  logos: [
    {
      name: "Blason Occitanie",
      image: blasonOccitanie,
    },
    {
      name: "FFE",
      image: ffe,
    },
    {
      name: "EquuRES",
      image: equuRes,
    },
    {
      name: "Label Bien-Être Animal FFE",
      image: labelBienEtreAnimal,
    },
    {
      name: "Agriculture Biologique",
      image: abCert,
    },
    {
      name: "FFE Cheval Club de France",
      image: ffeChevalClub,
    },
    {
      name: "FFE Flot",
      image: ffeFlot,
    },
    {
      name: "FFE Poney Club de France",
      image: ffePoneyClub,
    },
    {
      name: "Exploitation de haute valeur environnementale",
      image: exploitationHauteValeurEnvironnementale,
    },
    {
      name: "Qualit'Équidés Occitanie",
      image: qualitEquidesOccitane,
    },
  ],
  welcome: {
    image: sliderBienvenue,
    title: "Bienvenue !",
    message: `Vous trouverez sur ce site les informations relatives aux écuries
      ainsi que les rendez-vous à ne pas manquer. Je vous souhaite une bonne
      visite et j'espère vous rencontrer prochainement sur notre magnifique
      exploitation.`,
    closing: "Bonne visite !",
    signature: "Caroline Orsini, Dirigeante des Écuries",
  },

  documents: [
    {
      title: "Télécharger notre brochure",
      description: "Découvrez notre établissement en détail",
      image: brochureCover,
      file: "/documents/UlysseA4.pdf",
    },
    {
      title: "Dossier d'inscription 2026",
      description: "Inscriptions ouvertes toute l'année !",
      image: brochureCover,
      file: "/documents/DOSSIER INSCRIPTION saison 2026.pdf",
    },
    {
      title: "Consulter nos tarifs",
      description: "Tarifs 2026 disponibles",
      image: brochureCover,
      file: "/documents/TARIFS SAISON 2026 (du 01 SEPTEMBRE 2025 au 31 AOUT 2026).pdf",
    },
  ],
};
