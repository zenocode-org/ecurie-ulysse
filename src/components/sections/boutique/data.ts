import tshirtBlanc from "./assets/tshirtBlanc.jpg";
import poloBlanc from "./assets/poloBlanc.jpg";
import poloBleu from "./assets/poloBleu.jpg";
import poloBleu02 from "./assets/poloBleu02.jpg";
import poloGris from "./assets/poloGris.jpg";
import chequesKdo from "./assets/chequesKdo.jpg";

export const boutiqueData = {
  title: "La boutique des Écuries",
  subtitle: "Ulysse vous propose sa gamme textile",
  products: [
    {
      title: "T-shirts coton blanc à manches courtes",
      price: 18,
      images: [tshirtBlanc],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      title: "Polos coton à manches courtes",
      price: 25,
      images: [poloBlanc, poloBleu, poloBleu02, poloGris],
      sizes: ["8 ans", "10 ans", "12 ans", "14 ans", "S", "M", "L", "XL"],
      colors: [
        { name: "Blanc", value: "#ffffff" },
        { name: "Gris perle", value: "#d3d3d3" },
        { name: "Bleu ciel", value: "#87ceeb" },
        { name: "Bleu azur", value: "#007fff" },
      ],
    },
  ],
  giftCards: {
    title: "Chèques cadeaux",
    description: "Offrez un chèque cadeau pour un cours ou une prestation",
    image: chequesKdo,
    file: "/documents/Planche_cheques.pdf",
  },
};
