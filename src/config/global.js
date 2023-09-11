export default {
  global: {
    componenteFormativo: 'Diseño y construcción de <em>Frontend</em>',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación, entornos de desarrollo, lenguajes entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Análisis de requerimiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño gráfico: herramientas de prototipado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Figma',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sketch',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Adobe XD',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Conceptos de Material Desing',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios básicos de usabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Componentes de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Licenciamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Serguridad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'APIs, Firebase',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Herramientas',
            hash: 't_4_4',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '2. Diseño gráfico: herramientas de prototipado',
      referencia:
        'FalconMasters. (2018). Curso de Adobe XD | 1. Introducción y que Aprenderemos en el Curso',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/5HfqCSm9k3Y',
    },
    {
      tema: '2. Diseño gráfico: herramientas de prototipado',
      referencia:
        'EDteam. (2017). Minicurso de Balsamiq Mockups (1) - Los <em>wireframes</em> y la interfaz.',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/4WqfxF1QjTM',
    },
    {
      tema: '2. Diseño gráfico: herramientas de prototipado',
      referencia:
        'Aprende, G. (2020).  COMO USAR CANVA: Canva tutorial - Aprende a diseñar FÁCIL y de manera PROFESIONAL.',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/kdE6ZmT_5MI',
    },
    {
      tema: '2. Diseño gráfico: herramientas de prototipado',
      referencia:
        'Conde, J. (2016). 01.- Material Design con Android Studio. ¿Qué es Material Design?',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/wt0Jzc9UHNw',
    },
    {
      tema: '4. Componentes de <i>software</i>',
      referencia: 'Novato, P. (2019). Firebase 01.- Qué es Firebase?. ',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/0Bhrwc8VfGw',
    },
  ],
  glosario: [
    {
      termino: '<i>Wearable</i>',
      significado:
        'Dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
    {
      termino: '<i>Wireframing<i>',
      significado:
        'Es un esquema de página o plano de pantalla, como guía visual que representa el esqueleto o estructura visual de una interfaz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Lázaro, G. (2015). Efecto Ripple de Material Design [HTML+CSS+JS]. ',
      link:
        'https://gersonlazaro.com/tutorial-efecto-ripple-de-material-design-html-css-js ',
    },
    {
      referencia: 'Material.io. (2021). Material Design.',
      link:
        ' https://material.io/design/color/the-color-system.html#color-usage-and-palettes',
    },
    {
      referencia:
        'Aula formativa. (2019, julio 29). ¿Qué es el Material Design?. [Web log post].  blog.aulaformativa.com. ',
      link: ' https://blog.aulaformativa.com/que-es-el-material-design',
    },
    {
      referencia: 'Beust, C. (2019).  TestNG. ',
      link: 'https://testng.org/doc',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de gestión industrial - Regional Bogotá',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de gestión industrial - Regional Bogotá',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la industria y la comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la industria y la comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
