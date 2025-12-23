export const translations = {
  en: {
    search: {
      placeholder: 'Search Docs',
      noResults: 'No results found for',
      searching: 'Searching...'
    },
    navigation: {
      home: 'Home',
      docs: 'Documentation',
      allDocs: 'All Docs',
      features: 'Features',
      about: 'About'
    },
    categories: {
      all: 'All',
      installation: 'Installation',
      devops: 'DevOps',
      frontend: 'Frontend',
      system: 'System',
      development: 'Development',
      general: 'General'
    },
    common: {
      readMore: 'Read More',
      backToTop: 'Back to Top',
      lastUpdated: 'Last Updated',
      contributors: 'Contributors'
    }
  },
  es: {
    search: {
      placeholder: 'Buscar documentación...',
      noResults: 'No se encontraron resultados para',
      searching: 'Buscando...'
    },
    navigation: {
      home: 'Inicio',
      docs: 'Documentación',
      allDocs: 'Todos los Docs',
      features: 'Características',
      about: 'Acerca de'
    },
    categories: {
      all: 'Todos',
      installation: 'Instalación',
      devops: 'DevOps',
      frontend: 'Frontend',
      system: 'Sistema',
      development: 'Desarrollo',
      general: 'General'
    },
    common: {
      readMore: 'Leer Más',
      backToTop: 'Volver Arriba',
      lastUpdated: 'Última Actualización',
      contributors: 'Colaboradores'
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
