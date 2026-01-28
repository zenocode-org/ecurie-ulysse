import installs01 from "./assets/installs_01.jpg";
import installs02 from "./assets/installs_02.jpg";
import installs03 from "./assets/installs_03.jpg";
import installs04 from "./assets/installs_04.jpg";
import installs05 from "./assets/installs_05.jpg";
import installs06 from "./assets/installs_06.jpg";
import installs07 from "./assets/installs_07.jpg";
import installs08 from "./assets/installs_08.jpg";

import locationSalle01 from "./assets/locationSalle01.jpeg";
import locationSalle02 from "./assets/locationSalle02.jpeg";
import locationSalle03 from "./assets/locationSalle03.jpeg";
import locationSalle04 from "./assets/locationSalle04.jpeg";

import studioCarriereCso from "./assets/studioCarriereCso.jpg";
import studioGene from "./assets/studioGene.jpg";
import studioCouchage from "./assets/studioCouchage.jpg";

export const installationsData = {
  carousel: {
    images: [installs01, installs02, installs03, installs04, installs05],
  },
  features: [
    "Carrière CSO 70 x 70 Toubin Clément",
    "Écurie intérieure avec boxes de 3m x 3m",
    "Club House chic et cosy avec vue sur la carrière",
    "Manège éclairé et arrosé avec tribune intérieure",
    "Prés et paddocks de grande taille",
  ],
  technicalDetails: [
    "2 carrières en parallèle",
    "Carrière 70m X 70m Toubin-Clément (éclairée, arrosage, sonorisation)",
    "Carrière 70m X 25m (arrosage, sonorisation)",
    "Manège 30m X 20m (éclairé, arrosage, miroirs, tribune)",
    "Rond de longe 20m",
    "Domaine de 100 hectares (50 de bois)",
  ],
  fullWidthImages: [installs08, installs07, installs06],
  roomRental: {
    title: "Location de salle",
    description: "Nous louons notre salle pour toutes vos réceptions.",
    images: [installs01, installs02, installs03, installs04, locationSalle01, locationSalle02, locationSalle03, locationSalle04],
  },
  studioRental: {
    title: "Location d'un grand studio cosy",
    description:
      "Découvrez notre studio disponible sur Airbnb avec vue imprenable sur les installations équestres.",
    images: [studioCarriereCso, studioGene, studioCouchage],
    airbnbLink: "#",
  },
  hours: {
    title: "Horaires d'ouverture",
    content: [
      {
        label: "Du mardi au dimanche",
        value: "9H00 à 20H00",
      },
      {
        label: "Balade en famille Baby-poney",
        value: "(sur RDV)",
      },
      {
        label: "Éveil aux poneys",
        value: "Pour les enfants de 2 à 4 ans (cours de 45 minutes)",
      },
    ],
  },
};
