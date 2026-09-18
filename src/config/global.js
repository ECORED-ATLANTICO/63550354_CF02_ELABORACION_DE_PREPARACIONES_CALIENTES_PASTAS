export default {
  global: {
    Name: 'Salsas para pastas y gestión de residuos',
    Description:
      'Este componente formativo desarrolla los fundamentos de las salsas para pastas: su clasificación, formulación, características y preparación según la receta estándar. Así mismo, aborda la gestión de residuos sólidos en establecimientos gastronómicos, la normatividad ambiental vigente y los procedimientos para la correcta disposición de residuos al final de la jornada laboral.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Salsas: generalidades, clasificación y clases',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición e importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de las salsas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clases de salsas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Formulación y elaboración de salsas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura y componentes de una receta estándar',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de preparación según el tipo de salsa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Control de calidad: textura, sabor, color y temperatura',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Maridaje de salsas con tipos de pasta',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interpretación y aplicación de la receta estándar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Lectura y comprensión de la receta estándar',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Factores de conversión y escalado para salsas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estandarización de porciones y rendimientos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición y tipos de residuos sólidos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Código de colores para la clasificación de residuos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Identificación de residuos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión y disposición de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Marco normativo colombiano',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimientos de separación y almacenamiento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Disposición final y aprovechamiento',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Registros y documentación (bitácora ambiental)',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Procedimiento estandarizado de cierre de jornada',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Limpieza y desinfección de áreas',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Medidas de bioseguridad',
            hash: 't_5_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63550354_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aprovechamiento de residuos',
      significado:
        'Conjunto de acciones cuyo objetivo es recuperar el valor económico de los residuos mediante su reciclaje, reutilización o valorización energética.',
    },
    {
      termino: 'Bitácora ambiental',
      significado:
        'Registro documental donde se anotan las cantidades y tipos de residuos generados, su almacenamiento y disposición final en un establecimiento.',
    },
    {
      termino: 'Carbonara',
      significado:
        'Salsa italiana originaria de roma a base de huevos, queso (pecorino o parmesano), panceta o guanciale y pimienta negra. No lleva nata en su versión original.',
    },
    {
      termino: 'Clasificación en la fuente',
      significado:
        'Separación de los residuos sólidos en el lugar donde se generan, según su tipo (orgánicos, aprovechables, no aprovechables).',
    },
    {
      termino: 'Código de colores (residuos)',
      significado:
        'Sistema establecido por la resolución 2184 de 2019 que asigna colores específicos (blanco, negro, verde) a los diferentes tipos de residuos para facilitar su clasificación.',
    },
    {
      termino: 'Compostaje',
      significado:
        'Proceso biológico de descomposición controlada de residuos orgánicos para producir abono orgánico (compost).',
    },
    {
      termino: 'Gestión de residuos',
      significado:
        'Conjunto de operaciones y disposiciones para dar a los residuos el destino más adecuado desde el punto de vista ambiental, económico y sanitario.',
    },
    {
      termino: 'Maridaje',
      significado:
        'Arte de combinar armoniosamente una salsa con un tipo específico de pasta o vino con un plato, para realzar sus cualidades.',
    },
    {
      termino: 'Pesto',
      significado:
        'Salsa italiana originaria de liguria a base de albahaca, piñones, ajo, queso parmesano y aceite de oliva.',
    },
    {
      termino: 'Ragú',
      significado:
        'Salsa de carne de cocción lenta, típica de la cocina italiana. La palabra proviene del francés "ragoût".',
    },
    {
      termino: 'Receta estándar',
      significado:
        'Documento técnico que contiene información detallada y precisa sobre ingredientes, cantidades, procedimientos, tiempos de cocción, rendimiento y costos de una preparación específica.',
    },
    {
      termino: 'Residuos aprovechables',
      significado:
        'Materiales que pueden ser sometidos a un proceso de aprovechamiento (reciclaje, compostaje, etc.), como plásticos, vidrio, metales, papel, cartón y residuos orgánicos.',
    },
    {
      termino: 'Residuos orgánicos',
      significado:
        'Residuos de origen biológico que se descomponen naturally, como restos de alimentos, cáscaras de frutas y verduras, y residuos de jardinería.',
    },
    {
      termino: 'Residuos peligrosos',
      significado:
        'Residuos que por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables o infecciosas representan un riesgo para la salud humana o el medio ambiente.',
    },
    {
      termino: 'Separación en la fuente',
      significado:
        'Acción de clasificar los residuos en el lugar de generación (cocina, áreas de preparación) según su tipo, para facilitar su gestión posterior.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernasconi, y Teubner, C. (2002). <em>El Gran Libro de la Cocina Italiana</em>.',
      link: 'https://mayrasandy.wordpress.com/wp-content/uploads/2012/08/el-gran-libro-de-la-cocina-italiana.pdf',
    },
    {
      referencia:
        'de Gastronomía IAG., I. A. (2022). <em>Pastas y Salsas</em>.',
      link: 'https://pdfcoffee.com/pastas-y-salsas-manual-de-teoria-1-pdf-free.html',
    },
    {
      referencia:
        'Grupo Editorial Taquina Editaquina Cia. Ltda. (2013). <em>Italia al dente</em> (Grupo Editorial Taquina Editaquina Cía. Ltda., Ed.).',
      link: 'https://kookinglab.com/libros-cocina-gratis/italia-al-dente/',
    },
    {
      referencia: 'L., D. R. S. (2025). <em>Recetas de cocina italiana</em>.',
      link: 'https://cdn.recetasderechupete.com/wp-content/uploads/2013/05/recetas-cocina-italiana-web.pdf',
    },
    {
      referencia: 'Pastas y salsas italianas. (2022).',
      link: 'https://pdfcoffee.com/pastas-y-salsas-italianas-3-pdf-free.html',
    },
    {
      referencia:
        'Productos Alimenticios La Moderna, S. A. de C. V. (2005). <em>Pasta es salud. Tomo uno</em> (M. de la C. de la Fuente, Ed.).',
      link: 'https://kookinglab.com/libros-cocina-gratis/pasta-es-salud-1/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2019, diciembre 26). <em>Resolución 2184 de 2019</em>. Gov.co.',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/resolucion-2184-de-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio Fondo Nacional de Vivienda. (2020, septiembre 17). <em>Resolución 2210 - 2020</em>. Gov.co.',
      link: 'https://minvivienda.gov.co/sites/default/files/normativa/2210%20-%202020.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1997, diciembre 23). <em>DECRETO 3075 DE 1997</em>. Gov.co.',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/decreto%203075%20DE%201997.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2013, diciembre 20). <em>Decreto 2981 de 2013 - Gestor Normativo</em>. Gov.co.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56035',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
