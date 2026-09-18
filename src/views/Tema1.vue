<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 1
      h1 Salsas: generalidades, clasificación y clases


    img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las salsas son preparaciones líquidas o semilíquidas que acompañan a los alimentos para realzar su sabor, aportar humedad, mejorar la textura y enriquecer su presentación. En la cocina italiana, las salsas para pastas ocupan un lugar central, transformando un plato de pasta simple en una experiencia culinaria completa y memorable. 


    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Definición e importancia 


    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una salsa puede definirse como una preparación culinaria líquida o semilíquida que se sirve junto con los alimentos para realzar sus características organolépticas. Según el libro pastas y salsas italianas (instituto gastronómico cuisine art, 2020), las pastas una vez cocidas requieren siempre un condimento que les añada color y sabor.

    p.mb-4 Cualquiera sea el tipo de salsa elegida, debe verterse sobre la pasta recién escurrida para que se amalgame perfectamente con ella. La salsa para una pasta debe relevar el sabor de la misma con su perfume y no taparla.

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img03.png") 
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-2
        .p-3.br-15.h-100.mb-3(style="background-color: #E8F5D5;")
          p.mb-0 <b>Realzan el sabor:</b> las salsas aportan notas complementarias (dulces, ácidas, saladas, picantes, umami) que potencian el sabor neutro de la pasta.

        .p-3.br-15.h-100.mb-3(style="background-color: #E8F5D5;")
          p.mb-0 <b>Aportan humedad y textura:</b> una salsa bien elaborada envuelve la pasta, evitando que esta se seque y aportando una sensación en boca agradable y cremosa.

        .p-3.br-15.h-100.mb-3(style="background-color: #E8F5D5;")
          p.mb-0 <b>Mejoran la presentación:</b> el color y la consistencia de la salsa hacen que el plato sea visualmente atractivo, lo que influye en la percepción del comensal.

        .p-3.br-15.h-100(style="background-color: #E8F5D5;")
          p.mb-0 <b>Permiten la variedad y la creatividad:</b> con una misma base de pasta, se pueden crear innumerables platos diferentes simplemente variando la salsa y los ingredientes de acompañamiento.

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 En Italia, la pasta se consume tradicionalmente como primo piatto (primer plato), antes del plato principal de carne o pescado. La salsa es la protagonista que define el carácter del plato. 
        .bg-color-01.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Según Bernasconi y Teubner (2004), en el norte de Italia las salsas suelen ser más ligeras, a base de mantequilla, queso y hierbas, mientras que en el sur predominan las salsas de tomate con sabores intensos y contundentes. Esta diversidad regional refleja la riqueza de la gastronomía italiana y la importancia de las salsas como expresión de la identidad culinaria local.


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Clasificación de las salsas 


    img(src="@/assets/curso/tema1/img05.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las salsas para pastas se pueden clasificar según diversos criterios: por su base principal (tomate, crema, aceite, carne, mariscos), por su método de elaboración (cocidas o crudas), por su textura (espesas o líquidas) o por su origen regional (norte o sur de Italia). A continuación, se presenta una clasificación general de las salsas más representativas de la cocina italiana. 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 1.
          span Clasificación de salsas para pastas por base principal
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004); Instituto Gastronómico Cuisine Art (2020); Recetas de Rechupete (2025).
            thead
              tr
                th Categoría
                th Ejemplos representativos
                th Base principal
                th Región de origen
            tbody
              tr
                td Salsas de tomate
                td Sugo di pomodoro, Marinara, Napolitana, Arrabbiata, Amatriciana
                td Tomate, ajo, cebolla, albahaca, aceite de oliva
                td Centro y sur de Italia (Lazio, Campania, Sicilia)
              tr
                td Salsas a base de crema y queso
                td Carbonara, Alfredo, Quattro formaggi, Gorgonzola
                td Huevo, queso (pecorino, parmesano, mozzarella), crema de leche, mantequilla
                td Centro y norte de Italia (Lazio, Emilia-Romaña, Lombardía)
              tr
                td Salsas a base de aceite y hierbas
                td Pesto alla genovese, Pesto alla trapanese, Agliata
                td Albahaca, piñones, ajo, aceite de oliva, queso
                td Liguria (noroeste de Italia), Sicilia
              tr
                td Salsas a base de carne (ragú)
                td Ragù alla bolognese, Ragù napoletano
                td Carne molida o troceada (ternera, cerdo), tomate, zanahoria, apio, cebolla, vino
                td Emilia-Romaña (Bolonia), Campania (Nápoles)
              tr
                td Salsas a base de mariscos y pescados
                td Vongole (almejas), Gamberi (camarones), Pescatore (mariscos mixtos)
                td Almejas, camarones, calamares, mejillones, tomate o aceite, ajo, perejil, vino blanco
                td Zonas costeras (Liguria, Campania, Sicilia, Venecia)
              tr
                td Salsas a base de verduras y hongos
                td Funghi porcini, Melanzane (berenjena), Zucchine (calabacín)
                td Hongos porcini, berenjenas, calabacines, tomate, ajo, aceite de oliva
                td Toscana, Umbría, Piamonte


    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Clases de salsas


    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La diversidad de salsas en la cocina italiana es inmensa. Cada región, cada familia, incluso cada cocinero tiene su propia versión de las salsas clásicas. Este capítulo presenta las principales clases de salsas, sus ingredientes característicos y las técnicas básicas de preparación.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas de tomate


    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 El tomate es, sin duda, el ingrediente estrella de las salsas italianas. Introducido en europa desde américa en el siglo XVI, el tomate tardó varios siglos en integrarse plenamente en la cocina italiana, pero hoy es difícil concebir la gastronomía de este país sin él. 
        .bg-color-02.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Como señala el libro recetas de cocina italiana (recetas de rechupete, 2025), la salsa napolitana es quizás una de las más sencillas y sabrosas que se pueden encontrar en el inmenso repertorio de la cocina italiana clásica. Tomates de calidad, ajo y/o cebolla y albahaca fresca son todo lo que se necesita para preparar una deliciosa salsa napolitana casera.


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-06")
          div(titulo="Salsa de tomate simple (sugo di pomodoro)")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-3.ms-0.ms-lg-5 Es una preparación básica de la cocina italiana y sirve como punto de partida para diferentes salsas. Se elabora principalmente con tomate, ajo, cebolla, albahaca y aceite de oliva. Su cocción permite integrar los sabores y obtener una consistencia adecuada para acompañar distintas preparaciones.
                p.mb-2.ms-0.ms-lg-5 <b>Ingredientes principales:</b> tomate, ajo, cebolla, albahaca y aceite de oliva.
                p.mb-2.ms-0.ms-lg-5 <b>Tiempo de cocción:</b> 15 a 30 minutos.
                p.mb-0.ms-0.ms-lg-5 <b>Usos:</b> pastas, pizzas y otras preparaciones que requieran una base de tomate.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img08.png", data-aos="zoom-in")

          div(titulo="Salsa arrabbiata")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-3.ms-0.ms-lg-5 Salsa tradicional italiana caracterizada por su sabor picante, asociado al uso de guindilla o peperoncino. Se prepara a partir de tomate, ajo y aceite de oliva, ingredientes que conforman una salsa sencilla pero de sabor intenso. Se utiliza principalmente para acompañar pastas cortas.
                p.mb-2.ms-0.ms-lg-5 <b>Ingredientes principales:</b> tomate, ajo, guindilla o peperoncino, perejil y aceite de oliva.
                p.mb-2.ms-0.ms-lg-5 <b>Tiempo de cocción:</b> 15 a 20 minutos.
                p.mb-0.ms-0.ms-lg-5 <b>Usos:</b> especialmente penne y rigatoni.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in")

          div(titulo="Salsa amatriciana")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-3.ms-0.ms-lg-5 Preparación originaria de Amatrice, Italia, reconocida por combinar tomate con guanciale, producto elaborado a partir de papada de cerdo curada. El queso pecorino aporta intensidad y complementa el sabor característico de esta salsa. Su preparación requiere controlar la cocción para integrar adecuadamente sus ingredientes.
                p.mb-2.ms-0.ms-lg-5 <b>Ingredientes principales:</b> guanciale —o panceta como alternativa—, tomate, guindilla, queso pecorino y aceite de oliva.
                p.mb-2.ms-0.ms-lg-5 <b>Tiempo de cocción:</b> aproximadamente 15 minutos.
                p.mb-0.ms-0.ms-lg-5 <b>Usos:</b> tradicionalmente acompaña bucatini y spaghetti.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img10.png", data-aos="zoom-in")

          div(titulo="Salsa napolitana")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-3.ms-0.ms-lg-5 Salsa a base de tomate caracterizada por la incorporación de hierbas aromáticas que aportan aroma y sabor a la preparación. Su elaboración es sencilla y permite obtener una salsa versátil para acompañar diferentes tipos de pasta y otras preparaciones de inspiración italiana.
                p.mb-2.ms-0.ms-lg-5 <b>Ingredientes principales:</b> tomate, ajo, cebolla, albahaca, orégano y aceite de oliva.
                p.mb-2.ms-0.ms-lg-5 <b>Tiempo de cocción:</b> 10 a 15 minutos.
                p.mb-0.ms-0.ms-lg-5 <b>Usos:</b> pastas largas, como spaghetti y linguine, y preparaciones a base de tomate.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in")


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas a base de crema y queso 

    img(src="@/assets/curso/tema1/img12.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Italia cuenta con una amplia tradición quesera, reflejada también en su gastronomía. Quesos como parmesano, pecorino, mozzarella, gorgonzola, ricotta y provolone se emplean en diferentes preparaciones y aportan sabor, textura y cremosidad a las salsas para pasta. Entre las preparaciones más representativas en las que el queso desempeña un papel fundamental se encuentran la carbonara, la Alfredo y la salsa cuatro quesos.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img13.png", alt="Salsa carbonara")
          .crd_hover_txt--body
            h4.mb-3 <b>Salsa carbonara</b>
            p.mb-0 Es una preparación tradicional italiana cuya receta se caracteriza por no incorporar nata ni crema de leche. Se elabora principalmente con huevo, queso pecorino romano —o parmesano en algunas versiones—, guanciale y pimienta negra. Para obtener su característica textura cremosa, la mezcla de huevo y queso se integra con la pasta caliente fuera del fuego, evitando que el huevo se coagule en exceso. Se utiliza tradicionalmente con spaghetti y otras pastas largas.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img14.png", alt="Salsa Alfredo")
          .crd_hover_txt--body
            h4.mb-3 <b>Salsa Alfredo</b>
            p.mb-0 Originaria de Roma, en su versión tradicional se prepara con mantequilla y queso parmesano, que se integran con la pasta y parte del agua de cocción hasta obtener una textura cremosa. Algunas adaptaciones contemporáneas incorporan crema de leche para aumentar su cremosidad. Se emplea principalmente con fettuccine, preparación conocida como fettuccine Alfredo.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img15.png", alt="Salsa cuatro quesos")
          .crd_hover_txt--body
            h4.mb-3 <b>Salsa cuatro quesos (quattro formaggi)</b>
            p.mb-0 Se caracteriza por combinar cuatro variedades de queso para obtener una preparación cremosa y de sabor intenso. Puede elaborarse con mozzarella, gorgonzola, parmesano y un queso de sabor más suave, como fontina o ricotta. La combinación debe procurar un equilibrio entre sabor, aroma y textura. Esta salsa puede acompañar pastas cortas, como penne y rigatoni, así como ñoquis.

    .container
      .row.align-items-center.bg-color-02.p-4.mb-5.br-15
        .col-lg-auto.d-none.d-lg-flex.order-2.mb-0
          img(src="@/assets/curso/tema1/img16.png", style="max-width: 90px").mx-auto
        .col-lg.order-1.mb-0
          p.mb-0 Para complementar las características de las salsas anteriores, es importante reconocer las propiedades de los quesos empleados en su elaboración, ya que su sabor, textura y capacidad de fundirse influyen en el resultado final de la preparación. La siguiente tabla, presenta algunos de los quesos italianos más utilizados, sus principales características y sus aplicaciones en diferentes tipos de salsas.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 2.
          span Quesos italianos comúnmente utilizados en salsas
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004).
            thead
              tr
                th Queso
                th Tipo
                th Sabor
                th Textura
                th Uso en salsas
            tbody
              tr
                td Parmigiano-Reggiano
                td Duro, curado
                td Intenso, salado, umami
                td Granulado, se ralla fácilmente
                td Espolvorear sobre pastas, salsas Alfredo, pesto
              tr
                td Pecorino Romano
                td Duro, curado (leche de oveja)
                td Salado, picante, intenso
                td Granulado
                td Carbonara, Amatriciana, pesto
              tr
                td Mozzarella
                td Pasta filata, fresco
                td Suave, lácteo
                td Elástico, se funde bien
                td Salsas gratinadas, quattro formaggi
              tr
                td Gorgonzola
                td Azul, semiblando
                td Fuerte, picante, aromático
                td Cremoso
                td Salsas cremosas, quattro formaggi
              tr
                td Ricotta
                td Fresco
                td Suave, ligeramente dulce
                td Cremoso, granuloso
                td Rellenos, salsas ligeras
              tr
                td Fontina
                td Semiblando
                td Suave, mantecoso
                td Excelente fundido
                td Salsas de queso, fondue




    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas a base de aceite y hierbas (pesto)

    p.mb-4 El pesto es una de las salsas más emblemáticas de la cocina italiana, originaria de La Liguria. La palabra pesto viene del genovés pestare, que significa machacar o moler en un mortero, que es la forma en que tradicionalmente se prepara esta salsa (instituto gastronómico cuisine art, 2020).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in")

      .col-lg-7.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-4
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              p.mb-0 <b>Pesto alla genovese (pesto verde):</b> sus ingredientes principales son albahaca fresca (hojas tiernas), piñones, ajo, queso parmesano y/o pecorino, y aceite de oliva virgen extra. Se prepara tradicionalmente en un mortero, majando los ajos con sal, luego añadiendo las hojas de albahaca poco a poco con movimientos circulares, luego los piñones, y finalmente los quesos y el aceite. Si no se tiene mortero, se puede usar una batidora o procesador de alimentos, aunque el resultado no es exactamente igual.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Pesto rosso (pesto rojo o siciliano):</b> variante del pesto que se elabora con tomates secos. Este pesto tiene como ingrediente principal el tomate seco, aunque también puede incluir pimientos asados, queso pecorino, sal, aceite de oliva y, en algunas versiones, almendras en lugar de piñones.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Pesto alla trapanese:</b> originario de Trapani, Sicilia. Se trata de una salsa cruda cuyos ingredientes principales son albahaca, tomate y almendra. Se supone que los barcos genoveses que se detenían en el Puerto de Trapani dejaron la tradición del pesto ligur, que los marineros de Trapani elaboraron con los productos de su tierra: tomates y almendras.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Agliata:</b> salsa típica de la ciudad de Bosa, en Cerdeña. Se prepara con ajo triturado que se sofríe en aceite de oliva con tomate seco, condimentando con abundante vinagre de vino. Con la mezcla así obtenida se aliñan principalmente pescados marinos, pero también se usa para pastas.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas a base de carne (ragú)

    p.mb-4 El ragú es una salsa de carne de cocción lenta, típica de la cocina italiana. La palabra ragú es una deformación del francés "ragoût". Se caracteriza por su larga cocción a fuego lento, que permite que los sabores se concentren y la carne se vuelva tierna y jugosa.


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-06")
          div(titulo="Ragù alla bolognese")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-3.ms-0.ms-lg-5 Originario de Bolonia, en la región de Emilia-Romaña, se prepara con carne de res picada o cortada finamente, panceta, zanahoria, cebolla, apio, tomate, vino y leche. Su cocción lenta permite integrar los ingredientes hasta obtener una salsa espesa y de textura uniforme.
                p.mb-2.ms-0.ms-lg-5 <b>Carne:</b> picada o cortada finamente.
                p.mb-2.ms-0.ms-lg-5 <b>Cocción:</b> lenta y prolongada.
                p.mb-2.ms-0.ms-lg-5 <b>Textura:</b> espesa y uniforme.
                p.mb-0.ms-0.ms-lg-5 <b>Acompañamiento:</b> tagliatelle y lasaña.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img19.png", data-aos="zoom-in")

          div(titulo="Ragù napoletano")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-3.ms-0.ms-lg-5 Originario de Nápoles, en la región de Campania, se caracteriza por utilizar trozos de carne de res, jamón y embutidos, acompañados de un sofrito de verduras, tomate y fondo de carne. Su cocción prolongada permite concentrar los sabores y conservar trozos de carne claramente identificables.
                p.mb-2.ms-0.ms-lg-5 <b>Carne:</b> en trozos, con jamón y embutidos.
                p.mb-2.ms-0.ms-lg-5 <b>Cocción:</b> muy lenta y prolongada.
                p.mb-2.ms-0.ms-lg-5 <b>Textura:</b> espesa, con trozos de carne.
                p.mb-0.ms-0.ms-lg-5 <b>Acompañamiento:</b> ziti, rigatoni y pastas al horno.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in")


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas a base de mariscos y pescados


    p.mb-4.mb-lg-5 La tradición gastronómica de las regiones costeras de Italia incorpora una amplia variedad de preparaciones con pescados y mariscos. En las salsas para pasta, estos ingredientes suelen combinarse con aceite de oliva, ajo, vino blanco, perejil y, en algunas preparaciones, tomate. El resultado son salsas de sabor definido y textura generalmente ligera, adecuadas para acompañar principalmente pastas largas.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img21.png", alt="Salsa vongole")
          .crd_hover_txt--body
            h4.mb-3 <b>Salsa vongole</b>
            p.mb-0 Se prepara principalmente con almejas, aunque algunas versiones pueden incorporar otros moluscos. Al cocinarse, estos aportan el sabor característico de la preparación. Existen dos variantes principales: <em>vongole in bianco</em>, elaborada con aceite de oliva, ajo, vino blanco y perejil, y <em>vongole rosso</em>, que incorpora tomate. Se sirve tradicionalmente con linguine o spaghetti.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img22.png", alt="Salsa de mariscos mixtos (pescatore)")
          .crd_hover_txt--body
            h4.mb-3 <b>Salsa de mariscos mixtos (pescatore)</b>
            p.mb-0 Se caracteriza por combinar diferentes productos del mar, como camarones, calamares, mejillones, almejas y pulpo. Puede prepararse con una base de tomate o mediante una combinación de aceite de oliva, ajo y vino blanco. La variedad de mariscos aporta intensidad de sabor y diferentes texturas a la preparación.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img23.png", alt="Salsa gamberi")
          .crd_hover_txt--body
            h4.mb-3 <b>Salsa gamberi</b>
            p.mb-0 Tiene como ingrediente principal el camarón, acompañado generalmente de ajo, vino blanco, aceite de oliva y perejil. Puede elaborarse con o sin tomate, según la variante seleccionada. Se utiliza principalmente para acompañar pastas largas, como spaghetti y linguine.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas a base de verduras y hongos

    p.mb-4.mb-lg-5 Las verduras y los hongos constituyen ingredientes relevantes en la elaboración de salsas para pasta y permiten obtener preparaciones con diferentes sabores, aromas y texturas. Su uso está asociado a la disponibilidad de productos locales y a las tradiciones gastronómicas de distintas regiones italianas. Entre las preparaciones representativas se encuentran las salsas a base de hongos porcini, berenjena y calabacín.
    

    .bg-full-width.bg-fondo-01.p-5.mb-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema1/img24.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2.fw-bold Salsa funghi porcini (hongos porcini)
              p.mb-0 Tiene como ingrediente principal el hongo porcini, que puede utilizarse fresco o deshidratado. Cuando no está disponible, puede sustituirse por otros tipos de hongos o champiñones. Se prepara generalmente con cebolla, ajo, crema de leche, queso parmesano y perejil, obteniendo una salsa de textura cremosa y sabor característico.

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema1/img25.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2.fw-bold Salsa melanzane (berenjena)
              p.mb-0 Utiliza la berenjena como ingrediente principal, ampliamente empleado en la gastronomía del sur de Italia, especialmente en Sicilia. Una preparación representativa es la <em>pasta alla Norma</em>, en la que la berenjena se combina con tomate, aceite de oliva, albahaca y <em>ricotta salata</em>, logrando una salsa de sabores y texturas contrastantes.

        .tarjeta.p-4.h-100
          .row.align-items-center.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema1/img26.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-2.fw-bold Salsa zucchine (calabacín)
              p.mb-0 Se caracteriza por su textura ligera y sabor suave. Se prepara con calabacín salteado en aceite de oliva, ajo y hierbas aromáticas, como albahaca o menta. Algunas variantes incorporan ricotta o crema de leche para aportar mayor cremosidad. Puede acompañar diferentes tipos de pasta, especialmente pastas cortas y largas.




    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 3.
          span Maridaje de salsas con tipos de pasta
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de Bernasconi y Teubner (2004); Recetas de Rechupete (2025).
            thead
              tr
                th Tipo de pasta
                th Salsas recomendadas
                th Justificación
            tbody
              tr
                td Spaghetti (larga, fina, redonda)
                td Carbonara, Amatriciana, Arrabbiata, Vongole, Puttanesca
                td La superficie lisa permite que la salsa se adhiera bien; el grosor fino se complementa con salsas de textura media.
              tr
                td Fettuccine / Tagliatelle (larga, plana, ancha)
                td Alfredo, Ragù bolognese, Funghi porcini, Quattro formaggi
                td La superficie ancha y plana captura salsas espesas y cremosas; ideal para salsas contundentes.
              tr
                td Penne / Rigatoni (corta, tubular)
                td Arrabbiata, Ragú napoletano, Salsas con trozos (verduras, carne)
                td La forma tubular y el corte oblicuo atrapan la salsa en el interior; perfectas para salsas con trozos.
              tr
                td Fusilli / Farfalle (corta, con formas)
                td Pesto, Salsas ligeras de verduras, Ensaladas de pasta
                td Las formas irregulares capturan la salsa en sus hendiduras; ideales para salsas frías o ligeras.
              tr
                td Pappardelle (larga, muy ancha)
                td Ragù di cinghiale (jabalí), Salsas de caza, Ragús contundentes
                td La anchura soporta salsas muy pesadas; cada tira ancha permite una generosa cantidad de salsa.
              tr
                td Ravioli / Tortellini (rellenas)
                td Salsa de mantequilla y salvia, Salsa de tomate ligera, Crema de queso
                td Las salsas ligeras no opacan el sabor del relleno; la mantequilla y salvia realzan sin abrumar.
              tr
                td Ñoquis
                td Pesto, Salsa de gorgonzola, Salsa de tomate
                td La textura esponjosa absorbe bien las salsas; combinan con salsas suaves o intensas.
              tr
                td Lasaña
                td Ragù bolognese (para lasaña boloñesa), Ragú napolitano (para lasaña napolitana), Bechamel
                td La estructura en capas permite intercalar la salsa y la bechamel; ideal para cocciones al horno.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
