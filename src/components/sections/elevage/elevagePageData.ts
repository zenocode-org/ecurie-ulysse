import jMmonShetlad from "./assets/jMmonShetlad.jpg";
import cartesIlesShetland from "./assets/cartes-Iles-Shetland.jpg";
import bacchusDeBoileau from "./assets/Elevage/BacchusDeBoileau.png";
import bacchusDeBoileauEtColinCrumliebank from "./assets/Elevage/BacchusDeBoileauEtColinCrumliebank.png";
import colinCumliebank from "./assets/Elevage/ColinCumliebank.png";
import crumbleDeBoileau from "./assets/Elevage/CrumbleDeBoileau.png";
import crusaderOfBrygarth from "./assets/Elevage/CrusaderOfBrygarth_.png";
import emberOfTyrieCirceDeBoileau from "./assets/Elevage/EmberOfTyrie-CirceDeBoileau.png";
import emberOfTyrieEmeraudeDeBoileau from "./assets/Elevage/EmberOfTyrie-EmeraudeDeBoileau.png";
import emeraudeDeBoileauEpsiloneDeBoileau from "./assets/Elevage/EmeraudeDeBoileau-EpsiloneDeBoileau.png";
import epsiloneDeBoileauJosieMillOfTowi from "./assets/Elevage/EpsiloneDeBoileau-JosieMillOfTowi.png";
import epsiloneDeBoileauJosieMillOfTowi02 from "./assets/Elevage/Epsilone_de_Boileau-JosieMillOfTowi02.png";
import hanathemeDeBoileau from "./assets/Elevage/HanathemeDeBoileau.png";
import jockCumliebank from "./assets/Elevage/JockCumliebank.png";
import jokeCumliebankChristieCumliebank from "./assets/Elevage/JokeCumliebank-ChristieCumliebank.png";
import josieEmeraudeEpsiloneEmber from "./assets/Elevage/JosieEmeraudeEpsiloneEmber.png";
import voltaireAramisBismuth from "./assets/Elevage/VoltaireAramisBismuth.png";
import macadamDeCaunes from "./assets/Elevage/macadamDeCaunes.png";
import macadamDeCaunesChampion from "./assets/Elevage/macadamDeCaunesChampion.png";
import crumble01 from "../../../images/elevage/crumble/crumble01.jpg";
import crumble02 from "../../../images/elevage/crumble/crumble02.jpg";
import crumble03 from "../../../images/elevage/crumble/crumble03.jpg";
import crumble04 from "../../../images/elevage/crumble/crumble04.jpg";
import crumble05 from "../../../images/elevage/crumble/crumble05.jpg";
import crumble06 from "../../../images/elevage/crumble/crumble06.jpg";
import mueslineEtChance from "../../../images/elevage/filles/mueslineEtChance.jpg";
import muesline from "../../../images/elevage/filles/muesline.jpg";
import mayaneEtNoela from "../../../images/elevage/filles/mayaneEtNoela.png";
import maliceEtCircee from "../../../images/elevage/filles/maliceEtCircee.jpg";
import hinnie from "../../../images/elevage/filles/hinnie.jpg";
import hanatheme from "../../../images/elevage/filles/hanatheme.jpg";

export const elevagePageData = {
  title: "Élevage de Boileau",
  introduction: {
    paragraphs: [
      "Directement importées des îles Shetland avec le plus grand soin, les souches de l'élevage ont été sélectionnées pour leur mental et la beauté de leurs modèles.",
      "Plein papiers, du mini au standard, les poneys sont vendus au sevrage, débourrés ou avec une expérience du concours d'Elevage.",
    ],
    image: jMmonShetlad,
  },
  births2022: {
    title: "Naissances 2022",
    ponies: [
      {
        name: "MUESLINE de BOILEAU",
        parents: "par CRUMBLE de BOILEAU (SHET) et CHANCE (ONCP)",
        birthDate: "née le 8 mai 2022",
        images: [mueslineEtChance, muesline],
      },
      {
        name: "MAYANE de BOILEAU",
        parents: "par CRUMBLE de BOILEAU (SHET) et NOELA D'ICI (ONCP)",
        birthDate: "née le 8 mai 2022",
        images: [mayaneEtNoela],
      },
      {
        name: "MALICE de BOILEAU",
        parents: "par CRUMBLE de BOILEAU (SHET) et CIRCÉ DE BOILEAU (SHET)",
        birthDate: "née le 16 mai 2022",
        images: [maliceEtCircee],
      },
    ],
  },
  poniesForSale: {
    title: "Nos poneys à vendre",
    ponies: [
      {
        name: "HINNIE DE BOILEAU",
        description: "Jument née le 13/05/2017, par EMBER OF TYRIE (SHE) et JOCK CUMLIEBANK (SHE).",
        price: "950 € HT VENDUE",
        sold: true,
        image: hinnie,
      },
      {
        name: "HANATHEME DE BOILEAU",
        description: "Jument née le 22/11/2017, par CRYSTALINE CUMLIEBANK (SHE).",
        price: "950 € HT VENDUE",
        sold: true,
        image: hanatheme,
      },
    ],
  },
  breeding2023: {
    title: "SAILLIES 2023",
    images: [crumble01, crumble02, crumble03, crumble04, crumble05, crumble06],
    stallions: [
      {
        name: "ISPAHAN DE BOILEAU",
        description:
          "Nous proposons pour vos saillies (en liberté) ISPAHAN DE BOILEAU, étalon SHETLAND PP de 4 ans alezan crins lavés.",
      },
      {
        name: "CRUMBLE DE BOILEAU",
        description:
          "Et CRUMBLE DE BOILAU, étalon SHETLAND PP de 9 ans alezan crins lavés. Père de Mayane de Boileau par Noela d'Ici, Muesline de Boileau par Chance et Malice de Boileau par Ember of Tyrie.",
      },
    ],
    requirements: "Test métrite obligatoire et vaccins à jour pour vos juments.",
    price: "150 € HT",
  },
  stallions: {
    title: "NOS ÉTALONS",
    list: [
      {
        name: "CRUMBLE DE BOILEAU",
        description:
          "Étalon alezan crins lavés de taille standard. Vice-champion de France des poulains de 1 an de taille standard 2013. Père de Mayane de Boileau par Noela d'Ici, Muesline de Boileau par Chance et Malice de Boileau par Ember of Tyrie",
      },
      {
        name: "CRUSADER OF BRYGARTH",
        description:
          "Étalon pie tobiano de taille mini. Vice-champion de France mini 2013. Père d'EPSILONE DE BOILEAU (vendue).",
      },
      {
        name: "BACCHUS DE BOILEAU",
        description:
          "Étalon noir pangaré de taille standard. 3ème au Championnat de France des poulains de 2 ans de taille standard 2013.",
      },
      {
        name: "COLIN CUMLIEBANK",
        description:
          "Étalon gris de taille standard. Père de CRUMBLE DE BOILEAU, d'EMERAUDE DE BOILEAU et d'EXELLENTE DE BOILEAU.",
      },
      {
        name: "JOCK CUMLIEBANK",
        description: "Étalon noir pangaré de taille standard.",
      },
      {
        name: "CHRISTIE CUMLIEBANK",
        description: "Étalon noir pangaré de taille standard.",
      },
      {
        name: "JUKE CUMLIEBANK",
        description: "Étalon noir pangaré de taille standard.",
      },
      {
        name: "ISPAHAN DE BOILEAU",
        description: "Mâle alezan par MACADAM DE CAUNES et EMBER OF TYRIE, né en 2018",
      },
      {
        name: "IPOTEC DE BOILEAU",
        description:
          "mâle alezan crin lavés par BACCHUS DE BOILEAU et CIRCÉ DE BOILEAU, né en 2018",
      },
    ],
  },
  mares: {
    title: "NOS POULINIÈRES",
    list: [
      {
        name: "EMBER OF TYRIE",
        description:
          "Qualifiée TRES EXCELLENT aux épreuves qualificatives du Championnat de France, elle remporte le titre de Championne de France intermédiaire en 2013. Mère d'ARAMIS DE BOILEAU, de BACCHUS DE BOILEAU, de CIRCÉ DE BOILEAU, d'ÉMERAUDE DE BOILEAU et de HINNIE DE BOILEAU.",
      },
      {
        name: "JOSIE MILL OF TOWIE",
        description:
          "Jument pie alezane de taille intermédiaire. 5ème au Championnat de France des 3 ans intermédiaire 2013. Mère d'EPSILONE DE BOILEAU (vendue).",
      },
      {
        name: "UDINE DE BOILEAU",
        description:
          "Jument noire pangarée de taille standard. Mère de CRUMBLE DE BOILEAU et d'EXCELLENTE DE BOILEAU.",
      },
      {
        name: "CIRCÉ DE BOILEAU",
        description: "Mère de MALICE DE BOILEAU.",
      },
      {
        name: "CHANCE",
        description: "Mère de MUESLINE DE BOILEAU.",
      },
      {
        name: "NOELA D'ICI",
        description: "Mère de MAYANE DE BOILEAU.",
      },
    ],
  },
  video: {
    title: "Élevage de Boileau",
    videoId: "UI_4xgCsA2w",
  },
  gallery: {
    images: [
      { src: bacchusDeBoileau, alt: "Bacchus de Boileau" },
      { src: bacchusDeBoileauEtColinCrumliebank, alt: "Bacchus de Boileau et Colin Crumliebank" },
      { src: colinCumliebank, alt: "Colin Cumliebank" },
      { src: crumbleDeBoileau, alt: "Crumble de Boileau" },
      { src: crusaderOfBrygarth, alt: "Crusader of Brygarth" },
      { src: emberOfTyrieCirceDeBoileau, alt: "Ember of Tyrie et Circé de Boileau" },
      { src: emberOfTyrieEmeraudeDeBoileau, alt: "Ember of Tyrie et Emeraude de Boileau" },
      { src: emeraudeDeBoileauEpsiloneDeBoileau, alt: "Emeraude de Boileau et Epsilone de Boileau" },
      { src: epsiloneDeBoileauJosieMillOfTowi, alt: "Epsilone de Boileau et Josie Mill of Towi" },
      { src: epsiloneDeBoileauJosieMillOfTowi02, alt: "Epsilone de Boileau et Josie Mill of Towi 02" },
      { src: hanathemeDeBoileau, alt: "Hanatheme de Boileau" },
      { src: jockCumliebank, alt: "Jock Cumliebank" },
      { src: jokeCumliebankChristieCumliebank, alt: "Joke Cumliebank et Christie Cumliebank" },
      { src: josieEmeraudeEpsiloneEmber, alt: "Josie, Emeraude, Epsilone et Ember" },
      { src: voltaireAramisBismuth, alt: "Voltaire, Aramis et Bismuth" },
      { src: macadamDeCaunes, alt: "Macadam de Caunes" },
      { src: macadamDeCaunesChampion, alt: "Macadam de Caunes Champion" },
    ],
  },
  shetlandsInfo: {
    title: "Un mot sur les Shetlands",
    intro:
      "Le Shetland, ce poney mythique venu des îles écossaises, possède une histoire fascinante et des qualités qui en font un équidé hors pair.",
    mapImage: cartesIlesShetland,
    sections: [
      {
        subtitle: "Origines & histoire",
        paragraphs: [
          "Le Shetland est originaire de l'archipel écossais qui porte son nom, au large de l'Écosse et de la Norvège. Présent depuis l'âge de bronze, il broute l'herbe des îles sauvages, balayées par les vents glacés.",
          "Plusieurs théories expliquent son arrivée : chevaux des steppes eurasiennes lors de l'ère glaciaire, ou navires espagnols et arabes ayant fait naufrage lors des croisades — ce qui expliquerait la présence de poneys gris. Les échanges commerciaux avec la Norvège au Moyen Âge ont également façonné le Shetland que nous connaissons.",
        ],
      },
      {
        subtitle: "Une taille adaptée à son milieu",
        paragraphs: [
          "Sa petite taille s'explique par un climat et un environnement hostiles. L'organisme des poneys s'est réduit pour résister à la nourriture pauvre et aux conditions de vie difficiles.",
        ],
      },
      {
        subtitle: "Un équidé complet",
        paragraphs: [
          "Rusticité, docilité et robustesse : le Shetland répond à de nombreux besoins. Son caractère enjoué et son centre de gravité bas en font un excellent partenaire pour l'équitation d'apprentissage ou la compétition. En attelage, sa maniabilité et sa puissance lui permettent d'exceller.",
          "Monture idéale pour les enfants, sa taille favorise une vraie complicité avec le cavalier. Sous la selle, à l'obstacle, en pony-games ou en attelage — seul, à deux ou à quatre — tout lui convient. Même les mini sont excellents !",
        ],
      },
      {
        subtitle: "Compagnon & partenaire au quotidien",
        paragraphs: [
          "Sociable et facile d'entretien, le Shetland fait un super poney de compagnie. Grégaire, il ne doit jamais vivre seul. Il s'adapte bien à la présence d'autres animaux si quelques règles sanitaires et alimentaires sont respectées.",
          "Moins connue mais évidente : sa valorisation des espaces verts. Parfois surnommé « tondeuse à gazon », il s'inscrit dans une démarche de développement durable — et quel plaisir d'avoir un troupeau qui broute plutôt que des tondeuses bruyantes !",
        ],
      },
      {
        subtitle: "Qualité à la française",
        paragraphs: [
          "Les élevages français démontrent aujourd'hui la grande qualité de nos poneys, en concours « modèles et allures », dans les activités équestres ou simplement au quotidien. Un Shetland apporte beaucoup à ceux qui en font le meilleur usage.",
        ],
      },
    ],
  },
};






