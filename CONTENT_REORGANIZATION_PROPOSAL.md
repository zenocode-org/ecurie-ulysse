# Content Reorganization Proposal
## Les Écuries d'Ulysse - Modern Website Structure

### Executive Summary

This document proposes a modern reorganization of the Les Écuries d'Ulysse website content, transforming the current single-page layout into a structured, component-based architecture using Astro and preparing for PageCMS integration.

---

## Current Content Analysis

### Existing Content Blocks Identified:

1. **Hero Section** - Image carousel with 5 slides (Passion, Competition, Horse Comfort, Installation, Breeding)
2. **Facility Overview** - Key statistics (100 hectares, 26 boxes, 1 covered arena, 2 outdoor arenas, 1 lunge ring)
3. **Welcome Message** - Personal greeting from Caroline Orsini
4. **Certifications & Labels** - Multiple logos (Occitanie, FFE, EquuRES, BEA, AB certification)
5. **Services Overview** - Four main service areas displayed as cards
6. **Summer Camps** - Two camp programs with dates and descriptions
7. **Open House Event** - September 10th event information
8. **Downloads** - Brochure, registration form, pricing
9. **Opening Hours** - Schedule information
10. **Contact Information** - Phone number and location

---

## Proposed Modern Structure

### 1. Hero Section (Full-width with Carousel)

**Component**: Enhanced `Hero.astro` with carousel functionality

**Content Structure**:
```markdown
hero:
  slides:
    - image: sliderPassion.jpg
      title: "Passion"
      alt: "Passion équestre"
    - image: sliderCompet.jpg
      title: "Compétition"
      alt: "Compétition équestre"
    - image: sliderConfortChevaux.jpg
      title: "Confort des Chevaux"
      alt: "Confort des chevaux"
    - image: sliderInstal.jpg
      title: "Installations"
      alt: "Installations modernes"
    - image: sliderElevage.jpg
      title: "Élevage"
      alt: "Élevage de qualité"
  headline: "Les Écuries d'Ulysse"
  subheading: "Écurie de propriétaires affiliée à la FFE et labellisée EquuRES"
  location: "Bouloc (Nord Toulouse)"
  cta: "Découvrir nos prestations"
```

**Modern Improvements**:
- Replace static carousel with modern swipe/touch-enabled slider
- Add lazy loading for images
- Include accessibility features (ARIA labels, keyboard navigation)
- Mobile-optimized touch gestures

---

### 2. Quick Stats Section (New Component)

**Component**: Create `Stats.astro` section

**Content Structure**:
```markdown
stats:
  title: "Notre Domaine"
  items:
    - value: "100"
      unit: "hectares"
      description: "de domaine"
    - value: "26"
      unit: "boxes"
      description: "pour vos chevaux"
    - value: "1"
      unit: "manège couvert"
      description: "pour toutes saisons"
    - value: "2"
      unit: "carrières"
      description: "extérieures"
    - value: "1"
      unit: "rond de longe"
      description: "pour l'entraînement"
```

**Modern Improvements**:
- Animated counters on scroll
- Icon-based visual representation
- Responsive grid layout
- Card-based design matching template style

---

### 3. Welcome Section

**Component**: Enhanced `Featured.astro` or new `Welcome.astro`

**Content Structure**:
```markdown
welcome:
  image: sliderBienvenue.jpg
  title: "Bienvenue !"
  message: |
    Vous trouverez sur ce site les informations relatives aux écuries
    ainsi que les rendez-vous à ne pas manquer. Je vous souhaite une bonne
    visite et j'espère vous rencontrer prochainement sur notre magnifique
    exploitation.
  closing: "Bonne visite !"
  signature: "Caroline Orsini, Dirigeante des Écuries"
```

**Modern Improvements**:
- Split layout (image left, text right on desktop)
- Better typography hierarchy
- Personal touch with signature styling
- Responsive stacking on mobile

---

### 4. Services Section

**Component**: Adapt existing `KeyServices.astro`

**Content Structure**:
```markdown
services:
  title: "Nos Prestations"
  subheading: "Des prestations sur-mesure pour le confort de votre équidé"
  items:
    - title: "Pension"
      description: "Hébergement de qualité pour vos chevaux et poneys"
      icon: "horse"
      link: "/services/pension"
    - title: "Centre Équestre"
      description: "Cours et formations pour tous niveaux"
      icon: "riding"
      link: "/services/centre-equestre"
    - title: "Poney-Club"
      description: "Initiation et activités pour les plus jeunes"
      icon: "pony"
      link: "/services/poney-club"
    - title: "Centre de Compétitions"
      description: "Organisation et accueil de compétitions"
      icon: "competition"
      link: "/services/competitions"
    - title: "Élevage de Boileau"
      description: "Shetlands dans la plus pure tradition du mini au standard"
      icon: "breeding"
      link: "/services/elevage"
```

**Modern Improvements**:
- Card-based grid layout (3-4 columns on desktop)
- Hover effects and transitions
- Clear call-to-action buttons
- Service detail pages (future expansion)

---

### 5. Certifications & Labels Section

**Component**: New `Certifications.astro` section

**Content Structure**:
```markdown
certifications:
  title: "Nos Labels et Certifications"
  groups:
    - title: "Écurie affiliée FFE, Labellisée EquuRES et BEA"
      logos:
        - name: "Occitanie"
          image: blason_occitanie.png
          link: "#"
        - name: "FFE"
          image: ffe.png
          link: "#"
        - name: "EquuRES"
          image: equuRes.png
          link: "#"
        - name: "Bien-Être Animal"
          image: LabelBien-EtreAnimalFFE.png
          link: "#"
        - name: "Agriculture Biologique"
          image: AB_cert_HD.jpg
          link: "#"
    - title: "FFE - Cheval Club de France"
      logos:
        - name: "FFE Logo"
          image: FFE-Logo-Cheval-Club-de-France.png
        - name: "FFE Flot"
          image: ffe_flot.png
        - name: "Poney Club de France"
          image: FFE-poneyClubDeFrance.png
```

**Modern Improvements**:
- Organized into logical groups
- Hover effects showing certification details
- Tooltip on hover with certification information
- Grid layout with consistent sizing

---

### 6. Summer Camps Section

**Component**: New `Camps.astro` or adapt `FeaturedProjects.astro`

**Content Structure**:
```markdown
camps:
  title: "Stages d'été"
  subtitle: "Les dates de stage sont réservables en ligne!"
  programs:
    - level: "Du Galop 3 au Galop 6"
      dates: "du 10 au 14 juillet"
      image: training122022.jpg
      description: |
        Au programme : Parcours en terrain varié | randonnée, travail à pied,
        apprentissage du débourrage, toilettage, dressage, obstacle, jeux,
        présentation en concours d'élevage, voltige
      cta: "Réserver en ligne"
      ctaLink: "/camps/galop-3-6"
    - level: "Du débutant au Galop 2"
      dates: "du 17 au 21 juillet"
      image: null
      description: |
        Poney dans la forêt, pony game, soins aux poneys, apprentissage des
        bases sur le plat et sur les barres, voltige, tir à l'arc
      cta: "Réserver en ligne"
      ctaLink: "/camps/debutant-galop-2"
    - level: "Du débutant au Galop 2"
      dates: "du 20 au 23 août"
      image: null
      description: |
        Poney dans la forêt, pony game, soins aux poneys, apprentissage des
        bases sur le plat et sur les barres, voltige, tir à l'arc
      cta: "Réserver en ligne"
      ctaLink: "/camps/debutant-galop-2-aout"
```

**Modern Improvements**:
- Card-based layout with featured image
- Clear date highlighting
- Online booking integration ready
- Responsive design for mobile

---

### 7. Promotional Section

**Component**: New `Promotion.astro` section

**Content Structure**:
```markdown
promotions:
  - type: "event"
    title: "Journée Portes Ouvertes"
    date: "Le 10 Septembre de 14h à 17h00"
    image: portesOuvertes_trans.png
    description: |
      Visite, baptêmes à poney et cheval, renseignements et inscriptions
    cta: "En savoir plus"
  - type: "offer"
    title: "Cette année c'est poney !"
    subtitle: "Opération promotionnelle du CRE pour la rentrée"
    banner: cPoney_banner.jpg
    details: |
      Réduction de 15 € pour les primo-licenciés enfants et adultes :
      - 11 € pour les enfants
      - 22 € pour les adultes
      LE PASS SPORT est reconduit pour 2024 : 50 € de réduction sur le tarif de votre adhésion !
    image: operationPoney.webp
    cta: "Découvrir l'offre"
  - type: "announcement"
    title: "Rentrée 2024"
    image: rentree_affiche2024.png
    cta: "Voir l'affiche"
```

**Modern Improvements**:
- Time-sensitive highlighting
- Clear visual hierarchy
- Call-to-action buttons
- Mobile-friendly image display

---

### 8. Resources & Downloads Section

**Component**: New `Resources.astro` section

**Content Structure**:
```markdown
resources:
  title: "Documents à télécharger"
  items:
    - type: "brochure"
      title: "Télécharger notre brochure"
      description: "Découvrez notre établissement en détail"
      image: UlysseA4_1ereDeCouv.jpg
      file: UlysseA4.pdf
      icon: "download"
    - type: "form"
      title: "Dossier d'inscription"
      description: "Inscriptions ouvertes toute l'année !"
      image: 1ereDeCouvEqPourTous.png
      file: DossierInscriptionUlysse2024.pdf
      icon: "form"
    - type: "pricing"
      title: "Consulter nos tarifs"
      description: "Tarifs 2024 disponibles"
      file: tarifsUlysse2024.pdf
      icon: "pricing"
  notes:
    - "Inscriptions ouvertes toute l'année !"
    - "Cours dispensés toute l'année, vacances scolaires incluses !"
```

**Modern Improvements**:
- Card-based download section
- File size and format indicators
- Preview thumbnails
- Download tracking ready (for analytics)

---

### 9. Opening Hours & Contact Section

**Component**: New `ContactInfo.astro` or adapt `GetInvolved.astro`

**Content Structure**:
```markdown
contact:
  hours:
    title: "Les horaires d'ouverture"
    schedule:
      - days: "Du mardi au dimanche"
        hours: "9h00 à 20h00"
      - service: "Balade en famille Baby-poney"
        note: "(sur RDV)"
      - service: "Éveil aux poneys"
        note: "Pour les enfants de 2 à 4 ans (cours de 45 minutes)"
  location:
    address: "Bouloc (Nord Toulouse)"
    phone: "06 75 86 21 93"
    email: null  # To be added if available
  map: null  # To be added if available
```

**Modern Improvements**:
- Clear, scannable schedule layout
- Click-to-call phone number
- Future: Embedded map
- Future: Contact form integration

---

### 10. Footer Section

**Component**: Enhance existing footer or create `SiteFooter.astro`

**Content Structure**:
```markdown
footer:
  description: |
    Écurie de propriétaires, pension pour poneys et chevaux.
    Centre équestre et Poney-club à Bouloc (Nord de Toulouse).
  quickLinks:
    - label: "Services"
      links:
        - "Pension"
        - "Centre Équestre"
        - "Poney-Club"
        - "Compétitions"
        - "Élevage"
    - label: "Informations"
      links:
        - "Tarifs"
        - "Horaires"
        - "Contact"
        - "Brochure"
    - label: "Actualités"
      links:
        - "Stages d'été"
        - "Portes Ouvertes"
        - "Promotions"
  social:
    facebook: null  # To be added
    instagram: null  # To be added
  copyright: "© 2024 Les Écuries d'Ulysse. Tous droits réservés."
```

---

## Page Structure Proposal

### Homepage (`/` or `/index.astro`)

**Sections in order**:
1. Hero (with carousel)
2. Quick Stats
3. Welcome Message
4. Services Overview
5. Certifications & Labels
6. Summer Camps
7. Promotions (Portes Ouvertes, Offers)
8. Resources & Downloads
9. Opening Hours & Contact
10. Footer

### Future Pages (for PageCMS)

- `/services/pension`
- `/services/centre-equestre`
- `/services/poney-club`
- `/services/competitions`
- `/services/elevage`
- `/camps` (listing page)
- `/camps/[slug]` (individual camp pages)
- `/contact`
- `/about` (more detailed about page)
- `/tarifs` (pricing page)

---

## Content Migration Strategy

### Phase 1: Core Structure
1. Extract all content from HTML into markdown/data files
2. Create new section components
3. Build homepage with new structure
4. Test responsive design

### Phase 2: Component Enhancement
1. Add carousel functionality to Hero
2. Create Stats component
3. Build Certifications component
4. Create Resources/Downloads component

### Phase 3: PageCMS Integration
1. Convert markdown files to PageCMS schema
2. Set up content editing interface
3. Configure image uploads
4. Test content management workflow

### Phase 4: Additional Features
1. Add contact form
2. Integrate booking system for camps
3. Add blog/news section
4. Implement search functionality

---

## Design Recommendations

### Visual Improvements:
1. **Color Scheme**: Maintain earthy, natural tones (greens, browns) reflecting the equestrian theme
2. **Typography**: Use clear, readable fonts with good hierarchy
3. **Spacing**: Generous whitespace for modern, clean look
4. **Images**: High-quality, optimized images with proper alt text
5. **Icons**: Consistent icon set for services and features

### UX Improvements:
1. **Navigation**: Sticky header with smooth scroll to sections
2. **Loading**: Progressive image loading with placeholders
3. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
4. **Performance**: Lazy loading, code splitting, optimized assets
5. **Mobile**: Touch-friendly, responsive design

---

## Technical Considerations for PageCMS

### Content Schema Suggestions:

```typescript
// Example schema structure
interface HomePageContent {
  hero: HeroSection;
  stats: StatsSection;
  welcome: WelcomeSection;
  services: ServicesSection;
  certifications: CertificationsSection;
  camps: CampsSection;
  promotions: PromotionsSection;
  resources: ResourcesSection;
  contact: ContactSection;
}
```

### Image Management:
- Use PageCMS media library for all images
- Implement responsive image sizes
- Add image optimization pipeline
- Support for WebP/AVIF formats

### Content Versioning:
- Track content changes
- Support draft/published states
- Enable content preview before publishing

---

## Next Steps

1. **Review this proposal** with stakeholders
2. **Prioritize sections** for initial development
3. **Create component mockups** for key sections
4. **Set up data structure** (TypeScript interfaces)
5. **Begin component development** starting with Hero and Stats
6. **Content migration** from HTML to structured data
7. **PageCMS integration** planning

---

## Questions to Consider

1. Do you want to keep all content on a single page or split into multiple pages?
2. Should the carousel auto-play or be manual only?
3. Do you have social media accounts to link in the footer?
4. Do you want an embedded map for location?
5. Should there be a contact form or just phone/email?
6. Do you want online booking for camps now or later?
7. Are there additional services or content not in the current site?

---

*This proposal serves as a starting point and can be adjusted based on your specific needs and preferences.*

