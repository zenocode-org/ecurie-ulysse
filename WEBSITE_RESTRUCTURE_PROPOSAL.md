# Proposition de Restructuration du Site Web - Les Écuries d'Ulysse

## Vue d'ensemble

Ce document décrit la nouvelle structure du site web et propose une réorganisation moderne du contenu en utilisant les composants Astro existants du template energy-template.

## Structure Proposée

### 1. Section Accueil

**Objectif**: Première impression, présentation rapide de l'établissement

**Contenu à inclure**:
- **Carousel principal** (5 images du slider actuel):
  - sliderPassion.jpg
  - sliderCompet.jpg
  - sliderConfortChevaux.jpg
  - sliderInstal.jpg
  - sliderElevage.jpg
  
- **Titre principal**: "Les Écuries d'Ulysse"
- **Sous-titre dynamique** (change en même temps que le slide du carousel) :
  - Slide 1 : Un domaine de 100 hectares
  - Slide 2 : 26 boxes
  - Slide 3 : 1 manège couvert
  - Slide 4 : 2 carrières
  - Slide 5 : 1 rond de longe
- **Description courte**: "Écurie de propriétaires affiliée à la FFE et labellisée EquuRES au cœur des vignes du Frontonnais dans le Nord Toulousain"
- **Coordonnées**: Bouloc (Nord Toulouse) | Tél. 06 75 86 21 93

- **Logos partenaires** (2 rangées):
  - Rangée 1: blason_occitanie, ffe, equuRes, LabelBien-EtreAnimalFFE, AB_cert_HD
  - Rangée 2: FFE-Logo-Cheval-Club-de-France, ffe_flot, FFE-poneyClubDeFrance

- **Message de bienvenue** (Caroline Orsini):
  - Image: sliderBienvenue.jpg
  - Texte de bienvenue
  - Signature: "Caroline Orsini, Dirigeante des Écuries"

**Composants à utiliser**:
- `Hero.astro` (modifié pour carousel)
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `SubTitle.astro`
- Nouveau composant: `Carousel.astro` (à créer)
- Nouveau composant: `StatsGrid.astro` (à créer pour les statistiques)
- Nouveau composant: `LogoGrid.astro` (à créer pour les logos partenaires)

**Recommandations modernes**:
- Utiliser un carousel avec navigation par points (dots) et flèches
- Statistiques en grille responsive avec icônes
- Logos en grille avec effet hover
- Section bienvenue avec image et texte côte à côte (responsive)

---

### 2. Section Présentation des Écuries

**Objectif**: Histoire, équipe, et vidéos de présentation

**Contenu à inclure**:

- **Historique**:
  - Image: ecurieUlysseToulouse.jpg
  - Texte historique complet (depuis 2005)
  - Mise en avant des labels obtenus (2019)

- **Équipe**:
  - 1 palefrenier-soigneur
  - 2 enseignants
  - 1 dirigeant

- **Vidéos** (2 vidéos côte à côte):
  - "Visite guidée" (YouTube: 0qJyxsReXZc)
  - "Des cours pour tous les âges" (YouTube: 8ofiTOIGXJw)

- **Brochure téléchargeable**:
  - Lien vers UlysseA4.pdf
  - Image de couverture: UlysseA4_1ereDeCouv.jpg

**Composants à utiliser**:
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `SubTitle.astro`
- `Paragraph.astro`
- `LazyImage.astro`
- Nouveau composant: `VideoEmbed.astro` (pour les vidéos YouTube)
- Nouveau composant: `DownloadCard.astro` (pour la brochure)
- `Button.astro` (pour le téléchargement)

**Recommandations modernes**:
- Layout en 2 colonnes (texte/image) pour l'historique
- Section équipe avec cartes individuelles (future amélioration: photos)
- Vidéos en grille responsive (2 colonnes desktop, 1 colonne mobile)
- Carte de téléchargement avec hover effect

---

### 3. Section Les Installations

**Objectif**: Présenter les équipements et possibilités de location

**Contenu à inclure**:

- **Carousel installations** (5 images):
  - installs_01.jpg à installs_05.jpg

- **Liste des installations**:
  - Carrière CSO 70 x 70 Toubin Clément
  - Écurie intérieure avec boxes de 3m x 3m
  - Club House chic et cosy avec vue sur la carrière
  - Manège éclairé et arrosé avec tribune intérieure
  - Prés et paddocks de grande taille

- **Détails techniques**:
  - 2 carrières en parallèle
  - Carrière 70m X 70m Toubin-Clément (éclairée, arrosage, sonorisation)
  - Carrière 70m X 25m (arrosage intégré)
  - Manège 30m X 20m (éclairé, arrosage, miroirs, tribune)
  - Rond de longe 20m
  - Domaine de 100 hectares (50 de bois)

- **Photos installations** (3 images full-width):
  - installs_08.jpg
  - installs_07.jpg
  - installs_06.jpg

- **Location de salle**:
  - Titre: "Location de salle"
  - Description: "Nous louons notre salle pour toutes vos réceptions."
  - 4 images: locationSalle01 à locationSalle04

- **Location studio**:
  - Titre: "Location d'un grand studio cosy avec vue sur les installations"
  - 4 images: studioVue, studioCarriereCso, studioGene, studioCouchage
  - Description et lien Airbnb

- **Horaires d'ouverture** (sidebar ou section):
  - Du mardi au dimanche de 9H00 à 20H00
  - Balade en famille Baby-poney (sur RDV)
  - Éveil aux poneys pour les enfants de 2 à 4 ans (cours de 45 minutes)

**Composants à utiliser**:
- `Carousel.astro` (réutilisé)
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `LazyImage.astro`
- `Button.astro`
- Nouveau composant: `FeatureList.astro` (pour la liste des installations)
- Nouveau composant: `ImageGallery.astro` (pour les galeries de photos)
- Nouveau composant: `InfoCard.astro` (pour les horaires)

**Recommandations modernes**:
- Carousel avec navigation moderne
- Grille de photos avec effet lightbox
- Section location avec cards cliquables
- Sidebar sticky pour les horaires (desktop)

---

### 4. Section Prestations Services

**Objectif**: Détail des services proposés

**Contenu à inclure**:

- **Espace dédié aux cavaliers (Cavasoft)**:
  - Logo Cavasoft
  - Description de la plateforme
  - Liste des fonctionnalités
  - Lien vers lesecuriesdulysse.cavasoft.fr

- **Pension - Valorisation du cheval**:
  - Description complète du service de pension
  - Image: prestations_01.jpg

- **Services**:
  - Service de lavage (couvertures, tapis, bandes, cotons)

- **Le Club**:
  - Logos partenaires (FFE-Logo-Cheval-Club-de-France, etc.)
  - Description des cours
  - Vidéo: "COURS PARTICULIER ADULTE DÉBUTANT" (cpDebutant.mp4)

- **Éveil aux poneys**:
  - Nouveau: Séances à partir de 2 ans
  - Images: prestation_02.jpg, prestation_03.png

- **Planning des cours** (saison 2024):
  - Planning détaillé par jour (mardi à dimanche)
  - Format: Cards par jour avec horaires et types de cours
  - Note: "Les cours particuliers sont sur rdv uniquement"

- **Les Galops et Galops Poneys**:
  - Images: galopsTarifs.jpg, galops.jpg, poneys.jpg
  - Image: conseilsParents.jpg

- **Découverte du Poney-Club** (écoles, centres de loisirs):
  - Images: scolaire_01.png, scolaire_02.png
  - Description du programme
  - Note: Agrément ÉDUCATION NATIONALE

- **Balade et Initiation**
- **Anniversaire avec les poneys**:
  - 3 images: anniversaire_01.jpg à anniversaire_03.jpg

- **Documents téléchargeables**:
  - Brochure (UlysseA4.pdf)
  - Dossier d'inscription (DossierInscriptionUlysse2024.pdf)
  - Tarifs (tarifsUlysse2024.pdf)

**Composants à utiliser**:
- `KeyServices.astro` (adapté)
- `ServiceCard.astro` (pour les différents services)
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `LazyImage.astro`
- `Button.astro`
- Nouveau composant: `ScheduleCard.astro` (pour le planning)
- Nouveau composant: `ScheduleGrid.astro` (pour la grille de planning)
- `DownloadCard.astro` (réutilisé)

**Recommandations modernes**:
- Section Cavasoft avec card moderne et CTA
- Planning en format cards responsive (1 colonne mobile, 2-3 desktop)
- Galerie d'images pour les activités
- Section téléchargements avec preview des documents

---

### 5. Section Élevage

**Objectif**: Présenter l'élevage de Shetland

**Contenu à inclure**:

- **Titre**: "Élevage de Boileau"

- **Description**:
  - Importation directe des îles Shetland
  - Sélection pour mental et beauté
  - Plein papiers, du mini au standard
  - Vente au sevrage, débourrés ou avec expérience concours

- **Image**: jMmonShetlad.jpg

- **Carousel photos** (à créer avec photos de l'élevage)

- **Bouton CTA**: "Découvrir l'élevage" → lien vers page dédiée

**Composants à utiliser**:
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `Paragraph.astro`
- `LazyImage.astro`
- `Carousel.astro` (réutilisé)
- `Button.astro` ou `CtaButton.astro`

**Recommandations modernes**:
- Layout avec image et texte côte à côte
- Carousel avec photos de qualité
- CTA prominent pour la page dédiée

---

### 6. Section Concours

**Objectif**: Afficher les derniers articles de blog sur les concours

**Contenu à inclure**:

- **Titre**: "Concours"

- **3 derniers articles de blog** (format card):
  - Image
  - Titre
  - Date
  - Extrait
  - Lien vers article complet

- **Bouton**: "Voir tous les concours" → lien vers page/blog dédiée

**Composants à utiliser**:
- `FeaturedProjects.astro` (adapté pour articles de blog)
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `Button.astro`
- Nouveau composant: `BlogCard.astro` (pour les articles)

**Recommandations modernes**:
- Grille de 3 cards responsive
- Format card moderne avec image, titre, date, extrait
- Hover effect sur les cards
- CTA clair pour voir plus

---

### 7. Section Actualités

**Objectif**: Afficher les dernières actualités et newsletters

**Contenu à inclure**:

- **Titre**: "Actualités"

- **3 derniers articles d'actualités** (format card):
  - Image
  - Titre
  - Date
  - Extrait
  - Lien vers article complet

- **Newsletters** (section séparée):
  - Formulaire d'inscription ou lien vers archives
  - Description des newsletters

- **Bouton**: "Voir toutes les actualités" → lien vers page/blog dédiée

**Composants à utiliser**:
- `BlogCard.astro` (réutilisé)
- `EmailForm.astro` (de GetInvolved, adapté)
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `Button.astro`

**Recommandations modernes**:
- Même format que section Concours
- Section newsletter avec formulaire moderne
- Design cohérent avec section Concours

---

### 8. Section Boutique

**Objectif**: Présenter les produits de la boutique

**Contenu à inclure**:

- **Carousel photos** (images de produits)

- **Titre**: "La boutique des Écuries" / "Ulysse vous propose sa gamme textile"

- **Produits**:
  - **T-shirts coton blanc**:
    - Image: tshirtBlanc.jpg
    - Tailles: S au XL
    - Tarif: 18 €
  
  - **Polos coton**:
    - Images: poloBleu.jpg, poloBleu02.jpg, poloGris.jpg, poloBlanc.jpg
    - Tailles: 8 ans au 14 ans et S au XL
    - Tarif: 25 €
    - Couleurs: blanc, gris perle, bleu ciel, bleu azur

- **Chèques cadeaux**:
  - Lien: Planche_cheques.pdf
  - Image: chequesKdo.jpg

- **Brochure téléchargeable** (réutilisé)

**Composants à utiliser**:
- `Carousel.astro` (réutilisé)
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `LazyImage.astro`
- `Button.astro`
- Nouveau composant: `ProductCard.astro` (pour les produits)

**Recommandations modernes**:
- Grille de produits avec images, descriptions, prix
- Galerie de couleurs pour les polos
- Cards de produits avec hover effect
- Section chèques cadeaux avec CTA

---

### 9. Section Contact

**Objectif**: Informations de contact et formulaire

**Contenu à inclure**:

- **Titre**: "Nous joindre"

- **Adresse**:
  - 421 Chemin des Perrous
  - 31620 Bouloc
  - France

- **Téléphone**: 06 75 86 21 93 (lien cliquable)

- **Email**: contact@lesecuriesdulysse.fr (lien cliquable)

- **Site internet**: https://lesecuriesdulysse.fr

- **Carte Google Maps**:
  - Image statique ou iframe
  - Lien vers Google Maps

- **Formulaire de contact**:
  - Email
  - Nom
  - Téléphone
  - Message (max 500 caractères)
  - Bouton "Envoyer"

**Composants à utiliser**:
- `Container.astro`
- `Title.astro` / `Title2.astro`
- `Button.astro`
- Nouveau composant: `ContactForm.astro` (pour le formulaire)
- Nouveau composant: `ContactInfo.astro` (pour les infos de contact)
- Nouveau composant: `MapEmbed.astro` (pour la carte)

**Recommandations modernes**:
- Layout 2 colonnes (infos / formulaire)
- Formulaire avec validation
- Carte interactive ou image cliquable
- Design moderne et accessible

---

## Notes Importantes

### Images avec Texte

**À conserver telles quelles pour l'instant**:
- Images promotionnelles (rentree_affiche2024.png, operationPoney, etc.)
- Images de planning/stages (training122022.jpg)
- Images de galops (galopsTarifs.jpg, galops.jpg, poneys.jpg)
- Images scolaires (scolaire_01.png, scolaire_02.png)
- Autres images contenant du texte intégré

**Recommandation future**: Extraire le texte de ces images pour améliorer l'accessibilité et le SEO, mais pour l'instant, les garder en l'état.

### Composants à Créer

1. `Carousel.astro` - Carousel d'images avec navigation
2. `StatsGrid.astro` - Grille de statistiques avec icônes
3. `LogoGrid.astro` - Grille de logos partenaires
4. `VideoEmbed.astro` - Embed de vidéos YouTube
5. `DownloadCard.astro` - Card pour téléchargements
6. `FeatureList.astro` - Liste de fonctionnalités
7. `ImageGallery.astro` - Galerie d'images
8. `InfoCard.astro` - Card d'information
9. `ScheduleCard.astro` - Card pour planning
10. `ScheduleGrid.astro` - Grille de planning
11. `BlogCard.astro` - Card pour articles de blog
12. `ProductCard.astro` - Card pour produits
13. `ContactForm.astro` - Formulaire de contact
14. `ContactInfo.astro` - Infos de contact
15. `MapEmbed.astro` - Carte Google Maps

### Structure de Fichiers Proposée

```
src/
  components/
    sections/
      accueil/
        Accueil.astro
        components/
          WelcomeMessage.astro
          StatsGrid.astro
          LogoGrid.astro
        data.ts
      presentation/
        Presentation.astro
        components/
          History.astro
          Team.astro
          VideoSection.astro
        data.ts
      installations/
        Installations.astro
        components/
          InstallationCarousel.astro
          LocationCard.astro
        data.ts
      prestations/
        Prestations.astro
        components/
          CavasoftCard.astro
          ScheduleGrid.astro
          ServiceDetail.astro
        data.ts
      elevage/
        Elevage.astro
        components/
          ElevageCarousel.astro
        data.ts
      concours/
        Concours.astro
        components/
          ConcoursCard.astro
        data.ts
      actualites/
        Actualites.astro
        components/
          ActualitesCard.astro
          NewsletterForm.astro
        data.ts
      boutique/
        Boutique.astro
        components/
          ProductCard.astro
          ProductGallery.astro
        data.ts
      contact/
        Contact.astro
        components/
          ContactForm.astro
          ContactInfo.astro
          MapEmbed.astro
        data.ts
    shared/
      Carousel.astro (nouveau)
      VideoEmbed.astro (nouveau)
      DownloadCard.astro (nouveau)
      BlogCard.astro (nouveau)
```

### Améliorations Modernes Recommandées

1. **Performance**:
   - Lazy loading pour toutes les images
   - Optimisation des images (WebP)
   - Code splitting pour les sections

2. **Accessibilité**:
   - Alt text pour toutes les images
   - Navigation au clavier
   - Contraste des couleurs
   - ARIA labels

3. **SEO**:
   - Meta descriptions pour chaque section
   - Structured data (Schema.org)
   - URLs sémantiques

4. **Responsive Design**:
   - Mobile-first approach
   - Breakpoints cohérents
   - Touch-friendly sur mobile

5. **UX Moderne**:
   - Animations subtiles
   - Transitions fluides
   - Feedback visuel sur les interactions
   - Loading states

6. **Content Strategy**:
   - Hiérarchie visuelle claire
   - CTAs bien placés
   - Scannabilité améliorée
   - Espacement généreux

---

## Prochaines Étapes

1. Créer les nouveaux composants de base (Carousel, VideoEmbed, etc.)
2. Créer les sections une par une en commençant par Accueil
3. Migrer le contenu de l'ancien site vers les nouvelles sections
4. Adapter les styles pour correspondre à l'identité visuelle
5. Tester la responsivité
6. Optimiser les performances
7. Ajouter les métadonnées SEO

---

## Questions à Résoudre

1. **Blog/Articles**: Où seront stockés les articles de blog (CMS, markdown, base de données)?
2. **Formulaire de contact**: Quel backend pour traiter les formulaires?
3. **Newsletter**: Intégration avec quel service (Mailchimp, Sendinblue, etc.)?
4. **Cavasoft**: Lien externe ou intégration?
5. **Images**: Où seront stockées les nouvelles images (public/, assets/, CDN)?

---

*Document créé le: [Date]*
*Dernière mise à jour: [Date]*

