// Project Data
const projects = [
  {
    id: 1,
    title: "BioModelos Portal",
    category: "ux",
    thumbnail: "images/projects/biomodelos-thumb.jpg",
    images: [
      "images/projects/biomodelos-1.jpg",
      "images/projects/biomodelos-2.jpg",
      "images/projects/biomodelos-3.jpg",
      "images/projects/biomodelos-4.jpg",
    ],
    description:
      "A collaborative online system to map species distributions in Colombia.",
    fullDescription:
      "BioModelos is a web application that enables scientists and researchers to collaborate on mapping the distribution of biodiversity in Colombia. I led the UX/UI design process and coordinated with development teams to create an intuitive interface for complex scientific data visualization. The platform allows users to explore, edit, and validate species distribution models through interactive maps and data visualization tools.",
    year: "2013-Present",
    client: "Instituto Alexander von Humboldt",
    technologies: "Adobe Illustrator, HTML/CSS, Ruby, Rails",
    link: "https://biomodelos.humboldt.org.co/en",
  },
  {
    id: 2,
    title: "BioTablero Platform",
    category: "ux",
    thumbnail: "images/projects/biotablero-thumb.jpg",
    images: [
      "images/projects/biotablero-1.jpg",
      "images/projects/biotablero-2.jpg",
      "images/projects/biotablero-3.jpg",
      "images/projects/biotablero-4.jpg",
    ],
    description:
      "A modular dashboard for biodiversity data visualization and analysis.",
    fullDescription:
      "BioTablero is a modular platform designed to help decision-makers and researchers access, visualize, and analyze biodiversity data in Colombia. As Product Owner and UX Designer, I led the development of this intuitive dashboard that transforms complex scientific data into actionable insights. The modular architecture allows users to explore different biodiversity indicators through interactive maps, charts, and data visualization components tailored to various user needs.",
    year: "2016-Present",
    client: "Instituto Alexander von Humboldt",
    technologies: "Adobe Illustrator, HTML/CSS, JavaScript, React",
    link: "https://biotablero.humboldt.org.co/",
  },
  {
    id: 3,
    title: "Living Data / Datos Vivos",
    category: "brand",
    categories: ["brand", "ux"],
    thumbnail: "images/projects/livingdata-thumb.jpg",
    images: [
      "images/projects/livingdata-1.jpg",
      "images/projects/livingdata-2.jpg",
      "images/projects/livingdata-3.jpg",
      "images/projects/livingdata-4.jpg",
    ],
    description:
      "Complete brand identity and bilingual web platform for an international biodiversity data conference.",
    fullDescription:
      "Living Data (Datos Vivos) required a comprehensive brand identity and digital ecosystem to support this international biodiversity data conference. I designed the complete visual identity and developed the event website experience through multiple phases. The design challenge included creating a bilingual (English/Spanish) system that would work seamlessly across all touchpoints.\n\nThe brand identity reflected the event's focus on data visualization and biodiversity informatics, using a modern visual language that conveyed both scientific rigor and innovation. The website experience included the initial event announcement, call for sessions, searchable catalog of selected presentations, registration system, and event materials. All content needed to function equally well in both languages while maintaining visual consistency.",
    year: "2024-2025",
    client: "Instituto Alexander von Humboldt",
    technologies:
      "Adobe Illustrator, Figma, HTML/CSS, JavaScript, Bilingual Content Management",
    link: "https://www.livingdata2025.com/index.html",
  },
  {
    id: 4,
    title: "Reto Naturalista Urbano Campaign",
    category: "social",
    thumbnail: "images/projects/naturalista-thumb.jpg",
    images: [
      "images/projects/naturalista-1.jpg",
      "images/projects/naturalista-2.jpg",
      "images/projects/naturalista-3.jpg",
      "images/projects/naturalista-4.jpg",
    ],
    description:
      "Visual identity and promotional materials for a citizen science initiative documenting urban biodiversity across Colombian cities.",
    fullDescription:
      "The 'Reto Naturalista Urbano' (Urban Naturalist Challenge) is an annual citizen science initiative that engages thousands of Colombians in documenting urban biodiversity using the iNaturalist platform. I designed the complete visual communication system for this campaign, which has grown to include 177+ cities across the world, with 2 in Colombia.\n\nThe design challenge was creating a cohesive visual identity that would appeal to both scientific and general audiences while effectively communicating the participatory nature of the project. I developed a distinctive visual language featuring line illustrations of urban naturalists, organic shapes representing biodiversity, and a fresh turquoise and mint color palette that contrasted with the campaign's signature green circular logo.",
    year: "2018-2019",
    client: "Instituto Alexander von Humboldt",
    technologies: "Adobe Illustrator, Campaign Design, Social Media Graphics",
  },
  {
    id: 5,
    title: "Amazounds",
    category: "ux",
    thumbnail: "images/projects/amazounds-thumb.jpg",
    images: [
      "images/projects/amazounds-1.jpg",
      "images/projects/amazounds-2.jpg",
    ],
    description:
      "An interactive portal to discover and listen to the sounds of Amazonian species.",
    fullDescription:
      "Amazounds was developed in 2019 as a specialized portal to showcase the rich biodiversity of the Amazon through audio. Working with Instituto Alexander von Humboldt, I designed this interface within a tight timeline to create an intuitive search experience that allows users to explore and listen to sounds from the institution's collection of Amazonian species recordings. The portal featured species search functionality, audio playback capabilities, and informational content about each species. The design needed to balance scientific accuracy with an engaging user experience, making the sounds of the Amazon accessible to researchers and the general public alike.",
    year: "2019",
    client: "Instituto Alexander von Humboldt",
    technologies: "Adobe XD, HTML/CSS, JavaScript, Audio Integration",
  },
  {
    id: 6,
    title: "SOLOCI Brand & Website",
    categories: ["brand", "ux"],
    thumbnail: "images/projects/soloci-thumb.jpg",
    images: [
      "images/projects/soloci-1.jpg",
      "images/projects/soloci-2.jpg",
      "images/projects/soloci-3.jpg",
      "images/projects/soloci-4.jpg",
    ],
    description:
      "Brand identity and e-commerce website for a slow fashion clothing brand.",
    fullDescription:
      "SOLOCI is a slow fashion clothing brand that needed a complete brand identity and online store presence. I developed a cohesive visual identity reflecting the brand's commitment to sustainable, thoughtfully crafted clothing. The project encompassed logo design, color palette development, typography selection, and brand guidelines. \n\nFollowing the brand creation, I designed and implemented a custom WordPress e-commerce website that embodied the brand's aesthetic while providing an intuitive shopping experience. The design focused on showcasing the clothing's craftsmanship through clean layouts, thoughtful product photography presentation, and an emphasis on the brand's sustainable practices. The WordPress implementation included custom theme development to ensure the website perfectly aligned with the brand identity while providing the client with an easy-to-manage content system.",
    year: "2024",
    client: "SOLOCI",
    technologies:
      "Adobe Illustrator, Adobe Photoshop, WordPress, WooCommerce, Custom CSS",
    link: "https://soloci.com/",
  },
  {
    id: 7,
    title: "ADAO Brand Identity",
    category: "brand",
    thumbnail: "images/projects/adao-thumb.jpg",
    images: [
      "images/projects/adao-1.jpg",
      "images/projects/adao-2.jpg",
      "images/projects/adao-3.jpg",
    ],
    description:
      "Brand identity system for an advanced diagnostics analytics company and its sub-brands.",
    fullDescription:
      "ADAO (Advanced Diagnostics Analytics and Optimization) required a comprehensive brand identity system that would also support its sub-products ICO and TYKE. I designed a visual identity that communicated the company's focus on advanced analytics and technological innovation while maintaining visual consistency across the brand family. The project involved creating distinctive logos, a cohesive color system, typography guidelines, and various applications of the identity. The design approach balanced technological sophistication with clarity and professionalism, creating visual differentiation between the parent brand and its sub-products while maintaining a recognizable brand architecture.",
    year: "2020",
    client: "ADAO",
    technologies: "Adobe Illustrator, Brand Guidelines",
  },
  {
    id: 8,
    title: "Colombian Society of Mammalogy",
    category: "brand",
    thumbnail: "images/projects/mastozoologia-thumb.jpg",
    images: [
      "images/projects/mastozoologia-1.jpg",
      "images/projects/mastozoologia-2.jpg",
      "images/projects/mastozoologia-3.jpg",
    ],
    description:
      "Brand identity redesign for the Colombian Society of Mammalogy.",
    fullDescription:
      "The Colombian Society of Mammalogy (Sociedad Colombiana de Mastozoología) needed a complete rebrand to better represent their scientific mission and connection to Colombia's mammal diversity. I redesigned their identity system with a focus on creating a professional yet approachable brand that would resonate with both the scientific community and conservation audiences. The project included developing a new logo, color palette, typography system, and comprehensive visual language guidelines. The visual identity needed to balance scientific credibility with a modern, distinctive character that could be applied consistently across both digital and print materials. The resulting brand system successfully positioned the organization as a contemporary scientific authority while celebrating Colombia's rich mammalian biodiversity.",
    year: "2022",
    client: "Sociedad Colombiana de Mastozoología",
    technologies: "Adobe Illustrator, Brand Guidelines, Visual Identity System",
  },
  {
    id: 9,
    title: "I4S Brand Identity System",
    category: "brand",
    thumbnail: "images/projects/i4s-thumb.jpg",
    images: [
      "images/projects/i4s-1.jpg", // Logo/main identity
      "images/projects/i4s-2.jpg", // Brand applications
      "images/projects/i4s-3.jpg", // Brand manual pages
      "images/projects/i4s-4.jpg", // Visual system examples
    ],
    description:
      "Brand identity and comprehensive guideline system for Latin American Sustainability Think Tank.",
    fullDescription:
      "I4S (Innovation for Sustainability) is a Latin American Think Tank focused on transforming innovative ideas into sustainable impact actions across the region. I developed a complete brand identity system that reflected their mission of connecting innovation with sustainability principles while promoting the adoption of Sustainable Development Goals (SDGs). \n\nThe brand development process involved creating a visual identity that communicated both forward-thinking innovation and environmental consciousness. The comprehensive brand manual included logo specifications, color system, typography guidelines, photographic style, and various applications across digital and print media. \n\nThe design challenge was to create a versatile system that would resonate with diverse stakeholders including government organizations, private sector, academia, citizens, and communities. The resulting brand identity successfully positioned I4S as a collaborative hub for sustainability thinking while maintaining a professional and contemporary visual language that could be consistently applied across all communications.",
    year: "2024",
    client: "I4S - Latin American Laboratory for Sustainability Thinking",
    technologies:
      "Adobe Illustrator, Adobe Photoshop, Brand Guidelines, Visual Identity System",
  },
  {
    id: 10,
    title: "Los trabajadores colombianos del cine internacional",
    category: "editorial",
    thumbnail: "images/projects/cine-internacional-thumb.jpg",
    images: [
      "images/projects/cine-internacional-1.jpg", // Cover or front pages
      "images/projects/cine-internacional-2.jpg", // Table of contents spreads
      "images/projects/cine-internacional-3.jpg", // Chapter opening pages
      "images/projects/cine-internacional-4.jpg", // Interior layout examples
    ],
    description:
      "Editorial design for a comprehensive academic study on Colombian workers in international film productions.",
    fullDescription:
      "This editorial project involved designing a research book titled 'Los trabajadores colombianos del cine internacional' (Colombian Workers in International Cinema), analyzing the impact of Colombia's Law 1556 of 2012 on local audiovisual workers in international film productions. The design challenge was to create a structured, academic publication that remained visually engaging while organizing complex information including research findings, interviews, survey data, and policy analysis.",
    year: "2020",
    client: "Research Team on Colombian Audiovisual Industry",
    technologies:
      "Adobe InDesign, Adobe Illustrator, Typography, Editorial Systems",
  },
  {
    id: 11,
    title: "Atlas de la Biodiversidad de Colombia",
    categories: ["editorial", "scientific"],
    thumbnail: "images/projects/atlas-biodiversidad-thumb.jpg",
    images: [
      "images/projects/atlas-biodiversidad-1.jpg", // Cover design
      "images/projects/atlas-biodiversidad-2.jpg", // Scientific data visualizations
      "images/projects/atlas-biodiversidad-3.jpg", // Species information sheets
      "images/projects/atlas-biodiversidad-4.jpg", // Layout examples from different editions
    ],
    description:
      "Annual scientific publication showcasing Colombia's biodiversity research with data visualizations and species profiles.",
    fullDescription:
      "The 'Atlas de la Biodiversidad de Colombia' is an annual publication that transforms complex scientific research from BioModelos into accessible visual knowledge. I designed this editorial series to showcase research findings on various taxonomic groups including zamias, primates, anoles, large rodents, endemic birds, and carnivorous mammals (upcoming in 2025).\n\nThe design challenge was creating a system that could effectively communicate scientific data to both researchers and broader audiences while maintaining consistency across different annual editions. Each atlas features custom scientific data visualizations, detailed species profiles, distribution maps, and conservation status information.\n\nI developed a flexible yet cohesive design system that balances scientific rigor with visual accessibility. The layout creates clear information hierarchies, using typography, color, and spatial organization to guide readers through complex ecological data. The species profile sheets were designed as modular components that maintain consistency while adapting to the specific information needs of each taxonomic group.\n\nThis ongoing editorial project demonstrates the successful integration of scientific visualization principles with editorial design, creating a valuable resource for conservation efforts in Colombia that effectively bridges the gap between research data and knowledge dissemination.",
    year: "2018-Present",
    client: "Instituto Alexander von Humboldt",
    technologies:
      "Adobe InDesign, Adobe Illustrator, Scientific Data Visualization, Editorial Design, Information Architecture",
  },
  {
    id: 12,
    title: "Tissue Sampling Manual for Biodiversity",
    categories: ["editorial", "scientific"],
    thumbnail: "images/projects/tissue-sampling-thumb.jpg",
    images: [
      "images/projects/tissue-sampling-1.jpg", // Cover design
      "images/projects/tissue-sampling-2.jpg", // Vector illustrations of sampling methods
      "images/projects/tissue-sampling-3.jpg", // Chapter layouts with technical information
      "images/projects/tissue-sampling-4.jpg", // Detailed procedure illustrations
    ],
    description:
      "Comprehensive manual with detailed vector illustrations on tissue sampling methods for diverse taxonomic groups.",
    fullDescription:
      "This specialized manual provides detailed protocols for collecting tissue samples across a wide range of taxonomic groups including zooplankton, aquatic macroinvertebrates, crustaceans, mollusks, insects, cartilaginous fish, aquatic mammals, bony fish, amphibians, reptiles, birds, and mammals. I designed the publication combining scientific accuracy with clear visual instruction through detailed vector illustrations.\n\nThe design challenge was creating a practical field reference that could effectively communicate precise scientific procedures while remaining accessible and usable in field conditions. I developed a system that organized complex protocols into clear, sequential steps, supported by meticulously crafted vector illustrations that demonstrated proper sampling techniques for each organism group.",
    year: "2017",
    client: "Instituto Alexander von Humboldt",
    technologies:
      "Adobe Illustrator, Adobe InDesign, Vector Illustration, Scientific Visualization, Technical Diagrams",
  },
  {
    id: 13,
    title: "Functional Ecology Protocols Manual",
    category: "editorial",
    categories: ["editorial", "scientific"],
    thumbnail: "images/projects/ecologia-funcional-thumb.jpg",
    images: [
      "images/projects/ecologia-funcional-1.jpg", // Cover design
      "images/projects/ecologia-funcional-2.jpg", // Protocol layouts for birds
      "images/projects/ecologia-funcional-3.jpg", // Protocol layouts for amphibians or fish
      "images/projects/ecologia-funcional-4.jpg", // Diagrams or illustrations of methods
    ],
    description:
      "Editorial design for an essential manual on functional ecology protocols covering birds, amphibians, fish, and plants.",
    fullDescription:
      "This editorial project focused on creating a comprehensive manual titled 'La Ecología Funcional como aproximación al estudio, manejo y conservación de la biodiversidad: protocolos y aplicaciones' (Functional Ecology as an Approach to the Study, Management and Conservation of Biodiversity: Protocols and Applications). The publication presents standardized protocols for functional ecology research across four major taxonomic groups: birds, amphibians, fish, and plants.\n\nThe design challenge was organizing complex scientific methodologies into a usable reference that would serve both as a learning tool and a practical field guide. I developed a layout system that balanced scientific detail with visual clarity, using consistent structural elements while adapting to the specific requirements of each taxonomic group.\n\nThe manual features instructional diagrams, methodological illustrations, and carefully structured information hierarchies that guide researchers through proper data collection procedures.",
    year: "2016",
    client: "Instituto Alexander von Humboldt",
    technologies:
      "Adobe InDesign, Adobe Illustrator, Information Design, Scientific Diagrams, Editorial Systems",
  },
  {
    id: 14,
    title: "Biodiversity Scientific Infographics",
    category: "scientific",
    thumbnail: "images/projects/infographics-thumb.jpg",
    images: [
      "images/projects/infographics-1.jpg", // Venomous snakes infographic
      "images/projects/infographics-2.jpg", // Biodiversity baseline infographic
      "images/projects/infographics-3.jpg", // Red list of Colombian mammals infographic
    ],
    description:
      "Educational scientific infographics visualizing complex biodiversity data for researchers and conservation efforts.",
    fullDescription:
      "These scientific infographics were developed to communicate complex biodiversity information in visually compelling and accessible formats. The series includes three distinct visualizations:\n\nThe first infographic provides crucial information about venomous snakes in Colombia, including species richness (270+ species with 49 venomous), dentition patterns for identification, distribution across ecological regions, and snake bite statistics. It employs detailed anatomical illustrations to help differentiate between venomous and non-venomous snakes.\n\nThe second infographic explains the concept of biodiversity baseline studies, illustrating the progression from initial inventory to characterization, intervention, and monitoring. Using an isometric pathway visualization, it clearly defines each stage of the biodiversity assessment process.\n\nThe third infographic visualizes the 2021 Red List status of Colombian mammals, breaking down conservation status across taxonomic orders. It presents critical data on endangered species with clear visual hierarchies showing the 62 threatened species (5 critically endangered, 21 endangered, and 36 vulnerable) across different mammal groups. The design also highlights data deficient species and encourages further research participation.\n\nAll three infographics translate complex scientific concepts into visually structured information using carefully selected color palettes, consistent iconography, and clear visual hierarchies. They balance technical accuracy with visual accessibility, making specialized scientific knowledge more approachable for researchers, conservationists, and the public.",
    year: "2019-2021",
    client: "Instituto Alexander von Humboldt",
    technologies:
      "Adobe Illustrator, Information Design, Data Visualization, Scientific Illustration",
  },
  {
    id: 15,
    title: "Scientific Event Posters & Promotional Materials",
    category: "social",
    thumbnail: "images/projects/event-posters-thumb.jpg",
    images: [
      "images/projects/event-posters-1.jpg", // Red List of Mammals event
      "images/projects/event-posters-2.jpg", // Biodiversity Cartography symposium
      "images/projects/event-posters-3.jpg", // Mammal Distribution Symposium
      "images/projects/event-posters-4.jpg", // Bioacoustics Course
      "images/projects/event-posters-5.jpg", // SiB Colombia promotional materials
    ],
    description:
      "Visual communication design for scientific events, symposiums, and biodiversity data platforms.",
    fullDescription:
      "This collection showcases promotional materials and event graphics created for various scientific institutions including the Colombian Society of Mammalogy, Alexander von Humboldt Institute, and SiB Colombia (Colombian Biodiversity Information System). The designs range from event posters and promotional banners to informational materials for scientific symposiums and biodiversity data platforms.\n\nEach design balances scientific content with compelling visuals using a combination of typography, wildlife photography, and graphic elements to communicate complex scientific topics to both specialized and general audiences. For scientific events like symposiums on biodiversity mapping, mammal distribution modeling, and bioacoustics courses, the designs needed to reflect the academic nature of the events while remaining visually engaging.\n\nThe SiB Colombia promotional materials demonstrate a cohesive brand approach across different applications, promoting open biodiversity data through consistent visual language and clear information hierarchies.\n\nAll pieces were designed with careful attention to typography, color theory, and visual composition to create memorable, informative materials that effectively communicate scientific events and initiatives to their target audiences.",
    year: "2014-2021",
    client: "Instituto Alexander von Humboldt",
    technologies:
      "Adobe Illustrator, Adobe Photoshop, Event Graphics, Brand Application",
  },
  {
    id: 16,
    title: "Bon in a Box Projects Finder",
    category: "ux",
    thumbnail: "images/projects/geobon-thumb.jpg",
    images: [
      "images/projects/geobon-1.jpg", // Main search interface
      "images/projects/geobon-2.jpg", // Results view
      "images/projects/geobon-3.jpg", // Project details page
      "images/projects/geobon-4.jpg", // Filter functionality
    ],
    description:
      "UX/UI design and project leadership for a global biodiversity monitoring projects search platform.",
    fullDescription:
      "As project leader for the GeoBon 'Biodiversity Projects Finder,' I coordinated a multidisciplinary team to create a platform that connects biodiversity monitoring initiatives worldwide. This search tool allows researchers and conservationists to discover who is doing what and where in the field of biodiversity monitoring.\n\nI led the UX/UI design process, creating an intuitive interface that balances powerful search functionality with ease of use. The platform features an open query system with multiple filtering options including geographic location, biological groups, project status, and date ranges. The responsive design ensures accessibility across devices, while the clear information architecture helps users quickly find relevant monitoring projects.\n\nThe project required close collaboration with biodiversity data specialists, developers, and stakeholders to ensure the interface would meet the needs of the scientific community while remaining accessible to conservation practitioners, policymakers, and the public. The result is an effective tool that facilitates collaboration and knowledge sharing in the global biodiversity monitoring community, housed within the 'BON in a Box' initiative.\n\nMy responsibilities included stakeholder interviews, user journey mapping, wireframing, UI design, navigation system development, usability testing, and team coordination throughout the implementation process.",
    year: "2023",
    client:
      "GeoBon (Group on Earth Observations Biodiversity Observation Network)",
    technologies:
      "Figma, User Research, Information Architecture, Wireframing, Prototyping, Project Management",
    link: "https://boninabox.geobon.org/projects",
  },
  {
    id: 17,
    title: "BioModelos Visual Communication System",
    category: "social",
    thumbnail: "images/projects/biomodelos-comms-thumb.jpg",
    images: [
      "images/projects/biomodelos-comms-1.jpg",
      "images/projects/biomodelos-comms-2.jpg",
      "images/projects/biomodelos-comms-3.jpg",
      "images/projects/biomodelos-comms-4.jpg",
      "images/projects/biomodelos-comms-5.jpg",
    ],
    description:
      "Comprehensive visual communication strategy for Colombia's collaborative species distribution modeling platform.",
    fullDescription:
      "BioModelos is Colombia's collaborative platform for species distribution modeling, requiring a consistent and scientifically accurate visual communication system. I developed a comprehensive visual identity that maintains brand recognition across various applications while effectively communicating complex biodiversity data concepts.\n\nThe design system features a distinctive red and blue stereoscopic effect applied to wildlife photography, creating a modern visual signature that stands out in scientific communications. This technique was applied across various materials including species curation event announcements for endemic birds and mammals, expert acknowledgment graphics, educational materials, and seasonal communications.\n\nA key challenge was balancing scientific rigor with visual appeal while maintaining consistency across diverse applications and taxonomic groups. The system needed to work effectively for specialized events like Red List updates, curation workshops, and general platform promotion while reinforcing BioModelos as a collaborative scientific initiative.\n\nThe visual communication strategy successfully supported BioModelos' mission of engaging expert scientists in improving species distribution models through a recognizable, cohesive design language that works across digital and print media.",
    year: "2019-2025",
    client: "Instituto Alexander von Humboldt",
    technologies: "Adobe Illustrator, Adobe Photoshop, Brand Applications",
    link: "https://biomodelos.humboldt.org.co/",
  },
  {
    id: 18,
    title: "Cartografía Viajera",
    category: "social",
    thumbnail: "images/projects/cartografia-viajera-thumb.jpg",
    images: [
      "images/projects/cartografia-viajera-1.png",
      "images/projects/cartografia-viajera-2.png",
      "images/projects/cartografia-viajera-3.png",
      "images/projects/cartografia-viajera-4.png",
      "images/projects/cartografia-viajera-5.png",
      "images/projects/cartografia-viajera-6.png",
    ],
    description:
      "Visual communication design for a participatory mapping project documenting pandemic experiences in Bogotá.",
    fullDescription:
      "Cartografía Viajera was a participatory cultural project created in response to the COVID-19 pandemic, designed to collect citizens' experiences and memories of Bogotá during mandatory quarantine. I developed the complete visual communication system for this community initiative led by Bogotá's District Institute of Arts (IDARTES).\n\nThe design challenge was creating a cohesive visual identity that would invite participation while respecting the serious nature of the pandemic context. I created a nostalgic yet contemporary aesthetic that combined historical maps of Bogotá with collage elements, botanical illustrations, and a warm color palette dominated by pink accents against vintage map backgrounds.\n\nThe communication materials included social media graphics, participation guidelines, informational posts, and registration materials. The visual system had to effectively communicate the project's unique methodology, which involved sending mapping materials to participants' homes to avoid gatherings during lockdown restrictions.\n\nThe design successfully balanced the institutional requirements of a government-sponsored project with an approachable, artistic aesthetic that encouraged citizen participation. The resulting visual identity helped gather diverse personal experiences that were eventually transformed into a collective cartography of the city during an unprecedented historical moment, documenting how the pandemic transformed citizens' relationship with urban space and community.",
    year: "2020",
    client: "Ana Puerto for Instituto Distrital de las Artes (IDARTES)",
    technologies:
      "Adobe Illustrator, Adobe Photoshop, Social Media Design, Collage Techniques",
  },
  {
    id: 19,
    title: "Parque Bicentenario Wayfinding System",
    category: "wayfinding",
    thumbnail: "images/projects/parque-centenario-thumb.jpg",
    images: [
      "images/projects/parque-centenario-1.jpg",
      "images/projects/parque-centenario-2.jpg",
      "images/projects/parque-centenario-3.jpg",
      "images/projects/parque-centenario-4.jpg",
    ],
    description:
      "Comprehensive wayfinding and signage system for a new public park in Cartagena de Indias.",
    fullDescription:
      "Parque Bicentenario in Cartagena de Indias required a comprehensive wayfinding and signage system to establish clear navigation in this new community space. I developed a geometric visual language that creates a distinctive identity for the park while providing intuitive orientation for visitors.\n\nThe system features a cohesive hexagonal iconography set representing different amenities and facilities throughout the park, including children's areas, rest zones, sports facilities, oasis areas, community spaces, and essential services. The map design balanced simplicity with accurate spatial representation, using the custom iconography system to mark key locations throughout the space. The isometric geometric patterns used as background elements provide visual continuity across different signage applications, creating a contemporary design language that defines the park's identity.\n\nThe wayfinding system successfully establishes intuitive visitor orientation and accessibility in this new public space, enhancing the park experience through thoughtful environmental graphics that serve both functional and aesthetic purposes.",
    year: "2022",
    client: "igNEO Colombia for Alcaldía de Cartagena",
    technologies:
      "Adobe Illustrator, Wayfinding Design, Iconography, Environmental Graphics",
  },
  {
    id: 20,
    title: "Buenavista Town Branding & Signage",
    category: "wayfinding",
    thumbnail: "images/projects/buenavista-thumb.jpg",
    images: [
      "images/projects/buenavista-1.jpg",
      "images/projects/buenavista-2.jpg",
      "images/projects/buenavista-3.jpg",
    ],
    description:
      "Visual identity and environmental graphics for a Colombian coastal town celebrating its cultural heritage and natural beauty.",
    fullDescription:
      "Buenavista needed a cohesive visual identity and signage system that would celebrate the town's cultural heritage while enhancing tourism experiences. I developed a comprehensive brand system rooted in the town's natural landscape, musical traditions, and coastal character.\n\nThe centerpiece of the identity is a typographic treatment for the town name that integrates stylized maps of the region rendered in vibrant blues, greens, and yellows representing the sea, land, and sun. This cartographic typography creates a distinctive visual signature that captures Buenavista's geographic and cultural essence. \n\nThis project successfully positions Buenavista as a distinctive destination with a clear visual identity that honors its cultural heritage while providing functional environmental graphics that enhance the visitor experience.",
    year: "2023",
    client: "igNEO Colombia for Municipio de Buenavista",
    technologies:
      "Adobe Illustrator, Environmental Graphics, Sign Design, Cartographic Typography",
  },
  {
    id: 21,
    title: "SURCA - Magdalena River Navigation Platform",
    category: "ux",
    thumbnail: "images/projects/surca-thumb.jpg",
    images: [
      "images/projects/surca-1.jpg", // Community profile page
      "images/projects/surca-2.jpg", // Spatial domain indicators dashboard
      "images/projects/surca-3.jpg", // Platform information with interactive map
      "images/projects/surca-4.jpg", // Satellite imagery comparison view
      "images/projects/surca-5.jpg", // Geographic indicators with interactive map
      "images/projects/surca-6.jpg", // Data visualization with methodology tab
    ],
    description:
      "UX/UI design for a comprehensive biodiversity and ecosystem services monitoring platform for Colombia's Magdalena River.",
    fullDescription:
      "SURCA is a specialized platform designed to monitor biodiversity and ecosystem services along Colombia's Magdalena River, supporting navigation recovery initiatives while identifying potential socio-environmental conflicts. I designed the complete user experience and interface for this data-rich environmental monitoring system.",
    year: "2020",
    client: "Instituto Alexander von Humboldt & CORMAGDALENA",
    technologies:
      "Adobe XD, UI/UX Design, Information Architecture, Data Visualization, Interactive Maps",
  },
];

// DOM Elements
const projectsGrid = document.querySelector(".projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.querySelector(".close-modal");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Load projects
  loadProjects("all");

  // Mobile Navigation Toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
    });
  });

  // Project Filtering
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects
      loadProjects(filter);
    });
  });

  // Close modal when clicking X
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// Load Projects based on filter
function loadProjects(filter) {
  projectsGrid.innerHTML = "";

  // Filter projects
  let filteredProjects =
    filter === "all"
      ? [...projects]
      : projects.filter((project) => {
          // Check if project has a single category or multiple categories
          if (Array.isArray(project.categories)) {
            return project.categories.includes(filter);
          } else {
            return project.category === filter;
          }
        });

  // Shuffle the filtered projects
  filteredProjects = shuffleArray(filteredProjects);

  // Limit to 9 projects only for "All" category
  if (filter === "all") {
    filteredProjects = filteredProjects.slice(0, 9);
  }

  // Render the projects
  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.setAttribute("data-id", project.id);

    // Get the primary category for display
    const displayCategory = Array.isArray(project.categories)
      ? project.categories[0]
      : project.category;

    projectCard.innerHTML = `
      <div class="project-img">
          <img src="${project.thumbnail}" alt="${project.title}">
      </div>
      <div class="project-info">
          <span class="project-category">${getCategoryName(
            displayCategory
          )}</span>
          <h3>${project.title}</h3>
          <p>${truncateText(project.description, 100)}</p>
          ${
            project.link
              ? `<a href="${project.link}" class="project-link" target="_blank">View Project <i class="fas fa-external-link-alt"></i></a>`
              : ""
          }
      </div>
  `;

    projectCard.addEventListener("click", () => openProjectModal(project.id));

    projectsGrid.appendChild(projectCard);
  });
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) return;

  // Handle multiple categories
  let categoryDisplay = "";
  if (Array.isArray(project.categories)) {
    categoryDisplay = project.categories
      .map((cat) => getCategoryName(cat))
      .join(", ");
  } else {
    categoryDisplay = getCategoryName(project.category);
  }

  modalContent.innerHTML = `
        <div class="project-detail">
            <div class="project-detail-images">
                ${project.images
                  .map((img) => `<img src="${img}" alt="${project.title}">`)
                  .join("")}
            </div>
            <div class="project-detail-info">
                <h2>${project.title}</h2>
                <div class="project-detail-meta">
                    <div class="meta-item">
                        <span class="meta-title">Category</span>
                        <span class="meta-value">${categoryDisplay}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-title">Client</span>
                        <span class="meta-value">${
                          project.client || "N/A"
                        }</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-title">Year</span>
                        <span class="meta-value">${project.year}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-title">Technologies</span>
                        <span class="meta-value">${project.technologies}</span>
                    </div>
                </div>
                <div class="project-full-description">
                    <p>${project.fullDescription || project.description}</p>
                </div>
                ${
                  project.link
                    ? `<div class="project-detail-link">
                    <a href="${project.link}" target="_blank" class="btn">Visit Project Website <i class="fas fa-external-link-alt"></i></a>
                </div>`
                    : ""
                }
            </div>
        </div>
    `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Helper Functions
function getCategoryName(categoryCode) {
  const categories = {
    ux: "UX/UI Design",
    brand: "Brand Identity",
    editorial: "Editorial Design",
    scientific: "Scientific Communication",
    wayfinding: "Wayfinding & Signage",
    social: "Social Media Campaigns",
  };

  return categories[categoryCode] || categoryCode;
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
