export interface CatalogItem {
  id: number;
  name: string;
  category: 'herramientas' | 'artefactos';
  subcategory: string;
  description: string;
  material: string;
  origin: string;
  year: string;
  condition: string;
  image: string;
  featured?: boolean;
}

export const catalogItems: CatalogItem[] = [
  {
    id: 1,
    name: "Martillo de Bronce Antiguo",
    category: "herramientas",
    subcategory: "Golpe",
    description: "Martillo artesanal de bronce con mango de madera de roble. Pieza de gran valor histórico utilizada en talleres de herrería del siglo XVIII.",
    material: "Bronce y madera de roble",
    origin: "España, Andalucía",
    year: "c. 1780",
    condition: "Excelente",
    image: "🔨",
    featured: true
  },
  {
    id: 2,
    name: "Compás de Navegación",
    category: "artefactos",
    subcategory: "Instrumentos",
    description: "Compás de navegación marítima en latón pulido. Instrumento esencial para la orientación en alta mar durante los siglos de exploración.",
    material: "Latón y cristal",
    origin: "Portugal, Lisboa",
    year: "c. 1820",
    condition: "Muy bueno",
    image: "🧭",
    featured: true
  },
  {
    id: 3,
    name: "Serrucho de Ebanista",
    category: "herramientas",
    subcategory: "Corte",
    description: "Serrucho fino de dientes cerrados para trabajos de ebanistería. Hoja de acero templado con mango ergonómico de cerezo.",
    material: "Acero y madera de cerezo",
    origin: "Francia, París",
    year: "c. 1850",
    condition: "Bueno",
    image: "🪚"
  },
  {
    id: 4,
    name: "Astrolabio Decorativo",
    category: "artefactos",
    subcategory: "Instrumentos",
    description: "Réplica funcional de astrolabio medieval. Utilizado para determinar la posición de los astros y calcular la hora según la altura del sol.",
    material: "Latón grabado",
    origin: "Al-Ándalus",
    year: "c. 1200",
    condition: "Restaurado",
    image: "🔭",
    featured: true
  },
  {
    id: 5,
    name: "Yunque de Forja",
    category: "herramientas",
    subcategory: "Soporte",
    description: "Yunque de hierro fundido con dos puntas y agujeros de sujeción. Base sólida para trabajos de forja y conformado de metales.",
    material: "Hierro fundido",
    origin: "España, País Vasco",
    year: "c. 1870",
    condition: "Bueno",
    image: "⚒️"
  },
  {
    id: 6,
    name: "Reloj de Sol Portátil",
    category: "artefactos",
    subcategory: "Instrumentos",
    description: "Reloj solar pocket con gnomon ajustable. Permitía conocer la hora solar en cualquier lugar mediante la proyección de sombras.",
    material: "Marfil y latón",
    origin: "Italia, Florencia",
    year: "c. 1650",
    condition: "Muy bueno",
    image: "☀️"
  },
  {
    id: 7,
    name: "Gubia de Escultor",
    category: "herramientas",
    subcategory: "Tallado",
    description: "Gubia curva para tallado en madera. Filo de acero al carbono con mango torneado a mano. Herramienta esencial para escultores.",
    material: "Acero al carbono y boj",
    origin: "Alemania, Baviera",
    year: "c. 1890",
    condition: "Excelente",
    image: "🪵"
  },
  {
    id: 8,
    name: "Balanza de Precisión",
    category: "artefactos",
    subcategory: "Medición",
    description: "Balanza analítica de precisión para farmacia. Capaz de medir hasta 0.01 gramos. Utilizada en boticas para dosificación de medicamentos.",
    material: "Latón y mármol",
    origin: "España, Madrid",
    year: "c. 1830",
    condition: "Funcional",
    image: "⚖️",
    featured: true
  },
  {
    id: 9,
    name: "Tenazas de Herrero",
    category: "herramientas",
    subcategory: "Sujeción",
    description: "Tenazas de boca plana para manipular piezas calientes en la forja. Brazos largos para mantener distancia del calor.",
    material: "Hierro forjado",
    origin: "España, Toledo",
    year: "c. 1860",
    condition: "Bueno",
    image: "🔧"
  },
  {
    id: 10,
    name: "Cálculo de Napier",
    category: "artefactos",
    subcategory: "Cálculo",
    description: "Juego de varillas de Napier para multiplicación y división. Sistema de cálculo mecánico anterior al ábaco moderno.",
    material: "Marfil y estuche de caoba",
    origin: "Escocia",
    year: "c. 1617",
    condition: "Museístico",
    image: "🧮"
  },
  {
    id: 11,
    name: "Lima de Herrero",
    category: "herramientas",
    subcategory: "Acabado",
    description: "Lima bastarda de sección plana para desbaste y acabado de metales. Dientes cruzados para mayor eficacia en el limado.",
    material: "Acero templado",
    origin: "Chequia, Brno",
    year: "c. 1880",
    condition: "Bueno",
    image: "📐"
  },
  {
    id: 12,
    name: "Sextante de Navegación",
    category: "artefactos",
    subcategory: "Instrumentos",
    description: "Sextante con arco graduado de 60° para medir ángulos celestes. Instrumento fundamental para la navegación astronómica.",
    material: "Latón, espejo y cristal ahumado",
    origin: "Inglaterra, Londres",
    year: "c. 1790",
    condition: "Restaurado",
    image: "📏",
    featured: true
  },
  {
    id: 13,
    name: "Formón de Carpintero",
    category: "herramientas",
    subcategory: "Tallado",
    description: "Formón de 25mm para hacer cajas y espigas en carpintería tradicional. Hoja gruesa que soporta golpes de mazo.",
    material: "Acero y mango de fresno",
    origin: "España, Cataluña",
    year: "c. 1900",
    condition: "Excelente",
    image: "🪓"
  },
  {
    id: 14,
    name: "Lámpara de Aceite Romana",
    category: "artefactos",
    subcategory: "Iluminación",
    description: "Lucerna de terracota con decoración de motivos vegetales. Utilizada para iluminación doméstica en el Imperio Romano.",
    material: "Terracota vidriada",
    origin: "Imperio Romano, Hispania",
    year: "c. 150 d.C.",
    condition: "Fragmento restaurado",
    image: "🪔"
  },
  {
    id: 15,
    name: "Berbiquí de Arco",
    category: "herramientas",
    subcategory: "Perforación",
    description: "Berbiquí accionado por arco con cuerda. Sistema de perforación rotativa utilizado desde la antigüedad para hacer agujeros en madera y piedra.",
    material: "Madera, cuerda y punta de hierro",
    origin: "Egipto / Mediterráneo",
    year: "c. 1500 a.C. (réplica)",
    condition: "Funcional",
    image: "🔩"
  },
  {
    id: 16,
    name: "Microscopio Óptico",
    category: "artefactos",
    subcategory: "Observación",
    description: "Microscopio monocular de latón con sistema de tornillo micrométrico. Base trípode y espejo cóncavo para iluminación natural.",
    material: "Latón, cristal óptico y caoba",
    origin: "Alemania, Jena",
    year: "c. 1870",
    condition: "Funcional",
    image: "🔬",
    featured: true
  }
];

export const categories = [
  { id: 'todos', name: 'Todos', icon: '📋' },
  { id: 'herramientas', name: 'Herramientas', icon: '🔧' },
  { id: 'artefactos', name: 'Artefactos', icon: '🏺' }
];

export const conditions = [
  'Excelente',
  'Muy bueno',
  'Bueno',
  'Funcional',
  'Restaurado',
  'Fragmento restaurado',
  'Museístico'
];
