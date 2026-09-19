<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 5
      h1 Gestión y disposición de residuos

    img(src="@/assets/curso/tema5/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text La gestión de residuos es un proceso integral que incluye la separación en la fuente, el almacenamiento, la recolección, el transporte, el tratamiento y la disposición final de los residuos. Este capítulo aborda el marco normativo colombiano aplicable, los procedimientos de separación y almacenamiento, la disposición final y aprovechamiento, y los registros necesarios para una gestión ambientalmente responsable.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Marco normativo colombiano 

    .bg-color-02.px-4.py-3.br-15.mb-5
      p.mb-0 El marco legal colombiano para la gestión de residuos sólidos se fundamenta en varias normas que todo establecimiento gastronómico debe conocer y cumplir.

    .row.justify-content-center.mb-5
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 7.
          span Normatividad colombiana aplicable a la gestión de residuos sólidos
        .tabla-a.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Norma
                th Entidad emisora
                th Disposiciones clave para establecimientos gastronómicos
            tbody
              tr
                td Decreto 2981 de 2013
                td Ministerio de Vivienda, Ciudad y Territorio
                td Reglamenta el servicio público de aseo. Los grandes generadores de residuos (incluyendo restaurantes) deben implementar programas de separación en la fuente y almacenar los residuos adecuadamente.
              tr
                td Resolución 2184 de 2019
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Establece el código de colores (blanco, negro, verde) para la clasificación de residuos sólidos en la fuente.
              tr
                td Resolución 2210 de 2020
                td Ministerio de Ambiente y Desarrollo Sostenible
                td Actualiza aspectos técnicos de la Resolución 2184 de 2019.
              tr
                td Ley 9 de 1979 (Código Sanitario Nacional)
                td Congreso de Colombia
                td Establece normas generales para la protección del medio ambiente y la salud pública, incluyendo disposiciones sobre manejo de residuos.
              tr
                td CONPES 3874 de 2016
                td CONPES
                td Política Nacional de Gestión Integral de Residuos Sólidos.


    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 En Colombia, la gestión de residuos sólidos en los establecimientos gastronómicos se encuentra orientada por disposiciones que promueven su manejo adecuado desde la generación hasta la recolección y aprovechamiento. 
        .bg-color-02.px-4.py-3.br-15.mb-0
          p.mb-0(data-aos="fade-right") El Decreto 2981 de 2013, posteriormente compilado en el Decreto 1077 de 2015, reglamenta la prestación del servicio público de aseo y establece disposiciones relacionadas con la gestión integral, almacenamiento y presentación de los residuos sólidos. 


    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img03.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Por su parte, la Resolución 2184 de 2019 unificó el código de colores para la separación en la fuente: blanco para residuos aprovechables, como plástico, vidrio, metales, papel y cartón; negro para residuos no aprovechables; y verde para residuos orgánicos aprovechables.  
        .bg-color-10.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") La aplicación de estas disposiciones en los establecimientos gastronómicos facilita la correcta separación de los residuos generados durante la preparación de alimentos y contribuye a su aprovechamiento y adecuada gestión.



    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Procedimientos de separación y almacenamiento 

    .row.mb-5.mb-lg-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 En los establecimientos gastronómicos dedicados a la elaboración de pastas y salsas, la gestión de los residuos comienza con su separación en la fuente, es decir, en el lugar donde se generan. Para ello, se deben identificar los principales puntos de generación, como las áreas de preparación, lavado, cocción, despacho y limpieza, y disponer recipientes diferenciados de acuerdo con el código de colores establecido: blanco para residuos aprovechables, negro para no aprovechables y verde para orgánicos aprovechables. 
        .bg-color-02.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Los residuos deben depositarse en el recipiente correspondiente inmediatamente después de su generación y el personal debe conocer los criterios para realizar correctamente esta separación. 

    p.mb-4 Posteriormente, los residuos se trasladan al área destinada para su almacenamiento temporal, donde deben mantenerse condiciones adecuadas de limpieza, ventilación y control de plagas hasta su recolección o entrega para aprovechamiento o disposición final.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in")

      .col-lg-7.order-2.order-lg-1.col-md-12.mb-0
        .bg-fondo-01.p-3.p-lg-5
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              h4.mb-2 Enjuagar envases antes de reciclar
              p.mb-0 Los envases de tomate, leche, crema, aceite deben enjuagarse con agua para eliminar residuos de alimentos antes de depositarlos en el contenedor blanco. Esto evita olores y contaminación de otros materiales reciclables.
            .tarjeta.p-4.h-100
              h4.mb-2 No mezclar residuos orgánicos con plásticos
              p.mb-0 Las cáscaras de verduras y frutas deben ir al contenedor verde; los plásticos (envolturas, botellas) al contenedor blanco.
            .tarjeta.p-4.h-100
              h4.mb-2 Aceite de cocina usado
              p.mb-0 Aceite de cocina usado: no verterlo por el desagüe. Almacenarlo en botellas plásticas cerradas y entregarlo a un gestor autorizado para su aprovechamiento (biodiésel, jabones).
            .tarjeta.p-4.h-100
              h4.mb-2 Papel y cartón contaminado
              p.mb-0 Papel y cartón contaminado: las servilletas usadas, los paños de papel con restos de grasa o alimentos no son reciclables; van al contenedor negro.
            .tarjeta.p-4.h-100
              h4.mb-2 Vidrio
              p.mb-0 Los frascos de vidrio (salsas, conservas) van al contenedor blanco. Asegurarse de que estén vacíos y, si es posible, enjuagados.
            .tarjeta.p-4.h-100
              h4.mb-2 Posos de café y filtros de papel
              p.mb-0 Los pozos de café son residuos orgánicos (contenedor verde). Los filtros de papel de café, si no están plastificados, también pueden ir al contenedor verde para compostaje.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Recomendaciones para el almacenamiento temporal de residuos

    p.mb-4 El almacenamiento temporal de residuos debe realizarse de manera adecuada para evitar riesgos para la salud, el ambiente y la seguridad. Por ello, es importante contar con espacios y condiciones que permitan mantener los residuos organizados, protegidos y separados hasta su recolección o disposición final.
  
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Residuos orgánicos").align-content-center
            h4 Residuos orgánicos aprovechables
            p.mb-0 Deben depositarse en recipientes con tapa y retirarse con la frecuencia necesaria para evitar la generación de olores y la proliferación de plagas. Los recipientes deben mantenerse limpios y someterse a lavado y desinfección después de su vaciado.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Residuos aprovechables").align-content-center
            h4 Residuos aprovechables
            p.mb-0 Materiales como plástico, vidrio, metales, papel y cartón deben conservarse limpios y secos para facilitar su posterior aprovechamiento. Cuando corresponda, los envases deben estar libres de restos de alimentos y pueden reducirse de volumen, por ejemplo, mediante el plegado de cajas o la compactación de envases, sin comprometer las condiciones de seguridad.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo diferenciado").align-content-center
            h4 Residuos de manejo diferenciado
            p.mb-0 El aceite de cocina usado debe almacenarse en recipientes resistentes, cerrados y debidamente identificados, evitando mezclarlo con otros residuos o verterlo en lavaplatos, sifones o sistemas de alcantarillado. Otros residuos que requieran manejo especial, como pilas, bombillas o determinados envases de productos químicos, deben separarse y gestionarse de acuerdo con las disposiciones aplicables y mediante los sistemas de recolección o gestores autorizados correspondientes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Área de almacenamiento").align-content-center
            h4 Área de almacenamiento temporal
            p.mb-0 Debe estar separada de las zonas de preparación y almacenamiento de alimentos y mantenerse en condiciones que faciliten la limpieza, ventilación, control de plagas y protección de los residuos. Asimismo, su ubicación debe permitir el traslado y la recolección de los residuos sin interferir con las actividades de elaboración de alimentos.

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Disposición final y aprovechamiento

    p.mb-4 La disposición final es la última etapa de la gestión de residuos. El objetivo es minimizar la cantidad de residuos enviados a rellenos sanitarios mediante estrategias de aprovechamiento (reciclaje, compostaje, valorización energética).

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 8.
          span Opciones de aprovechamiento para residuos generados en la elaboración de pastas y salsas
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Tipo de residuo
                th Opciones de aprovechamiento
                th Beneficios
            tbody
              tr
                td Residuos orgánicos (cáscaras de verduras, restos de alimentos, cáscaras de huevo, posos de café)
                td Compostaje, lombricultura (vermicompostaje), producción de biogás
                td Reduce la cantidad de residuos enviados a rellenos sanitarios; produce abono orgánico de alta calidad para huertos y jardines; reduce las emisiones de gases de efecto invernadero.
              tr
                td Aceite de cocina usado
                td Producción de biodiésel, producción de jabones y productos de limpieza, materia prima para la industria de cosméticos
                td Evita la contaminación del agua y el suelo; genera un combustible renovable; crea empleo en la cadena de aprovechamiento.
              tr
                td Envases de vidrio (frascos de salsas, conservas, aceite)
                td Reciclaje (fundición y fabricación de nuevos envases)
                td El vidrio es 100 % reciclable infinitamente; ahorra energía y materias primas.
              tr
                td Envases de plástico (botellas de gaseosa, agua, aceite, envases de crema de leche)
                td Reciclaje mecánico (triturado, lavado, peletizado, fabricación de nuevos productos)
                td Reduce la contaminación por plásticos; ahorra recursos no renovables (petróleo).
              tr
                td Envases de cartón y papel (cajas de pasta, envases de leche, harina)
                td Reciclaje (pasta de papel, fabricación de nuevos productos de papel y cartón)
                td Reduce la tala de árboles; ahorra agua y energía en comparación con la producción de papel virgen.
              tr
                td Latas de metal (conservas de tomate, atún)
                td Reciclaje (fundición, fabricación de nuevos productos metálicos)
                td Ahorra energía y materias primas; reduce la minería.


    .row.mb-5.mb-lg-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img07.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La gestión integral de residuos comprende una secuencia de acciones que inicia desde el momento en que estos se generan y continúa con su separación, almacenamiento y recolección, hasta determinar su aprovechamiento o disposición final. 
        .bg-color-04.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") En los establecimientos gastronómicos, comprender este proceso permite aplicar prácticas adecuadas para el manejo de los residuos derivados de la elaboración de alimentos. A continuación, se presentan las principales etapas que conforman este ciclo y la relación existente entre ellas.

    .row.justify-content-center.mb-4
      .col-lg-12.col-xl-10
        PasosA.color-primario.mb-0(tipo="n")
          .row.align-items-center.mb-0.justify-content-center
            .col-md-12.col-lg-8.mb-2.mb-lg-0
              h3 Etapa 1. Generación
              p.mb-0 Los residuos se originan durante la preparación, cocción, servicio y limpieza en la elaboración de pastas y salsas.
            .col-md-8.col-lg-3
              figure
                img(src='@/assets/curso/tema5/img08.png', alt='', data-aos="zoom-in").mx-auto

          .row.align-items-center.mb-0.justify-content-center
            .col-md-8.col-lg-3.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/tema5/img09.png', alt='', data-aos="zoom-in").mx-auto
            .col-md-12.col-lg-8.order-1.order-lg-2
              h3 Etapa 2. Separación en la fuente
              p.mb-0 Los residuos se clasifican desde el lugar donde se generan utilizando recipientes diferenciados: blanco para aprovechables, negro para no aprovechables y verde para orgánicos aprovechables.

          .row.align-items-center.mb-0.justify-content-center
            .col-md-12.col-lg-8.mb-0.mb-lg-0
              h3 Etapa 3. Almacenamiento temporal
              p.mb-0 Los residuos separados se trasladan al área destinada para su almacenamiento, manteniendo condiciones adecuadas de higiene, ventilación y control de plagas.
            .col-md-8.col-lg-3
              figure
                img(src='@/assets/curso/tema5/img10.png', alt='', data-aos="zoom-in").mx-auto

          .row.align-items-center.mb-0.justify-content-center
            .col-md-8.col-lg-3.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/tema5/img11.png', alt='', data-aos="zoom-in").mx-auto
            .col-md-12.col-lg-8.order-1.order-lg-2
              h3 Etapa 4. Recolección
              p.mb-0 Los residuos son entregados al servicio público de aseo, recicladores de oficio u otros gestores autorizados, según su naturaleza y posibilidad de aprovechamiento.

          .row.align-items-center.mb-0.justify-content-center
            .col-md-12.col-lg-8.mb-0.mb-lg-0
              h3 Etapa 5. Aprovechamiento
              p.mb-0 Los residuos aprovechables pueden reincorporarse a procesos productivos mediante reciclaje, compostaje u otras alternativas de valorización. Los aceites de cocina usados requieren gestión diferenciada y pueden destinarse, mediante gestores autorizados, a procesos de aprovechamiento como la producción de biocombustibles.
            .col-md-8.col-lg-3
              figure
                img(src='@/assets/curso/tema5/img12.png', alt='', data-aos="zoom-in").mx-auto

          .row.align-items-center.mb-0.justify-content-center
            .col-md-8.col-lg-3.mb-0.mb-lg-0.order-2.order-lg-1
              figure
                img(src='@/assets/curso/tema5/img13.png', alt='', data-aos="zoom-in").mx-auto
            .col-md-12.col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
              h3 Etapa 6. Disposición final
              p.mb-0 Los residuos que no pueden ser aprovechados se destinan a los sistemas autorizados de disposición final, como los rellenos sanitarios.

    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Registros y documentación (bitácora ambiental)

    p.mb-4 Para cumplir con la normatividad y facilitar la gestión de residuos, los establecimientos gastronómicos deben llevar registros de la generación, separación, almacenamiento y disposición de residuos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 9.
          span Bitácora ambiental: elementos mínimos que debe contener
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Campo
                th Descripción
                th Frecuencia de registro
            tbody
              tr
                td Fecha
                td Día de la generación o disposición de residuos
                td Diario
              tr
                td Tipo de residuo
                td Orgánico, aprovechable (blanco), no aprovechable (negro), aceite usado, peligroso
                td Por evento de generación
              tr
                td Cantidad generada
                td Peso (kg) o volumen (litros) estimado
                td Diario o semanal
              tr
                td Forma de almacenamiento
                td Recipiente utilizado, ubicación, condiciones
                td Diario
              tr
                td Gestor responsable
                td Nombre de la empresa que recoge los residuos (servicio de aseo, reciclador, gestor de aceites)
                td Por recolección
              tr
                td Firma del responsable
                td Nombre y firma del personal a cargo del registro
                td Diario

  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .bg-color-02.p-3.br-15.mb-0
          p.mb-0.text-center Recomendaciones para la implementación de la bitácora ambiental:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img14.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-lg-4.p-3
          SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Designar un responsable ambiental en el establecimiento.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img15.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Realizar una caracterización inicial de los residuos generados: pesar y clasificar los residuos durante una semana para conocer los volúmenes y tipos.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img16.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Establecer metas de reducción y aprovechamiento: por ejemplo, reducir en 20 % los residuos enviados al relleno sanitario en 6 meses.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img17.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Capacitar al personal en el diligenciamiento de la bitácora.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img18.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 Revisar periódicamente los registros para identificar oportunidades de mejora.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img19.svg", style="max-width: 90px").mx-auto



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Disposición de residuos al final de la jornada


    .row.mb-5.mb-lg-4.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img20.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 La disposición de residuos al final de la jornada es una actividad crítica para mantener la higiene y seguridad en el establecimiento gastronómico. Un cierre de jornada inadecuado puede generar contaminación cruzada, proliferación de plagas, malos olores y riesgos para la salud del personal y los comensales. 
        .bg-color-02.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Este capítulo presenta el procedimiento estandarizado de cierre de jornada, la limpieza y desinfección de áreas de residuos, y las medidas de bioseguridad en el manejo de residuos.

    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Procedimiento estandarizado de cierre de jornada 

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img21.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Al finalizar la jornada laboral, todo el personal de cocina debe seguir un procedimiento estandarizado para garantizar la correcta disposición de los residuos y la limpieza de las áreas de trabajo.  
        .bg-color-02.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Este procedimiento consta de ocho pasos secuenciales que deben ser ejecutados por el personal asignado, bajo la supervisión del chef o encargado.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 10.
          span Procedimiento de cierre de jornada para disposición de residuos
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th(style="width: 10%;") Paso
                th Actividad
                th Responsable
                th Tiempo estimado
            tbody
              tr
                td(style="text-align-last: center;") 1
                td Retirar todos los residuos de las estaciones de trabajo (área de preparación de verduras, área de cocción, área de lavado) y depositarlos en los contenedores de colores correspondientes (blanco, negro, verde).
                td Todo el personal de cocina
                td 5-10 minutos
              tr
                td(style="text-align-last: center;") 2
                td Cerrar herméticamente las bolsas de residuos orgánicos (verde) y depositarlas en el contenedor grande del área de almacenamiento temporal. Las bolsas deben estar bien cerradas para evitar derrames y olores.
                td Ayudante de cocina
                td 5 minutos
              tr
                td(style="text-align-last: center;") 3
                td Vaciar los contenedores blancos (aprovechables) en los sacos o recipientes de almacenamiento designados. Asegurarse de que los materiales estén limpios y secos.
                td Ayudante de cocina
                td 5 minutos
              tr
                td(style="text-align-last: center;") 4
                td Verificar que no haya residuos en las áreas de preparación de alimentos. Limpiar cualquier derrame o residuo visible.
                td Cocinero o chef de partida
                td 5 minutos
              tr
                td(style="text-align-last: center;") 5
                td Trasladar todos los residuos al área de almacenamiento temporal externa (cuarto de residuos).
                td Ayudante de cocina
                td 5-10 minutos
              tr
                td(style="text-align-last: center;") 6
                td Limpiar y desinfectar los contenedores de residuos de las estaciones de trabajo (contenedores pequeños de colores).
                td Ayudante de cocina
                td 10-15 minutos
              tr
                td(style="text-align-last: center;") 7
                td Registrar en la bitácora ambiental las cantidades aproximadas de residuos generados y la disposición realizada.
                td Responsable ambiental o chef
                td 5 minutos
              tr
                td(style="text-align-last: center;") 8
                td Verificar que las áreas de almacenamiento de residuos estén limpias, ordenadas y libres de plagas.
                td Chef o supervisor
                td 5 minutos

                
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 1.]
          span Lista de verificación de residuos 
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema5/img22.png", alt="La figura 1, describe una lista de verificación para el cierre de jornada y manejo de residuos. Incluye diez controles relacionados con retiro y clasificación de residuos, cierre de bolsas, condiciones de los materiales aprovechables, traslado al almacenamiento temporal, lavado y desinfección de contenedores, limpieza del área, diligenciamiento de la bitácora ambiental, ausencia de residuos de alimentos en superficies y almacenamiento adecuado del aceite de cocina usado. Contiene espacios para observaciones, firma del responsable y fecha.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema5/img23.png", alt="La figura 1, describe una lista de verificación para el cierre de jornada y manejo de residuos. Incluye diez controles relacionados con retiro y clasificación de residuos, cierre de bolsas, condiciones de los materiales aprovechables, traslado al almacenamiento temporal, lavado y desinfección de contenedores, limpieza del área, diligenciamiento de la bitácora ambiental, ausencia de residuos de alimentos en superficies y almacenamiento adecuado del aceite de cocina usado. Contiene espacios para observaciones, firma del responsable y fecha.")
        figcaption Nota. SENA, (2026).
    separador
    
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Limpieza y desinfección de áreas

    p.mb-4(data-aos="fade-right") Las áreas de almacenamiento temporal de residuos deben someterse a procedimientos de limpieza y desinfección periódicos para evitar la contaminación y la proliferación de microorganismos patógenos y plagas.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 11.
          span Procedimiento de limpieza y desinfección para áreas de residuos
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Etapa
                th Actividad
                th Frecuencia
                th Productos recomendados
            tbody
              tr
                td Prelavado
                td Retirar residuos sólidos visibles y desecharlos en los contenedores correspondientes.
                td Diario
                td Agua a presión, cepillo de cerdas duras
              tr
                td Lavado
                td Aplicar detergente desengrasante y frotar todas las superficies (pisos, paredes, contenedores grandes).
                td Diario
                td Detergente desengrasante biodegradable
              tr
                td Enjuague
                td Enjuagar con agua limpia para eliminar residuos de detergente.
                td Diario
                td Agua potable
              tr
                td Desinfección
                td Aplicar solución desinfectante (cloro 200 ppm o amonio cuaternario) y dejar actuar durante 10-15 minutos.
                td Diario (al final de la jornada)
                td Cloro (hipoclorito de sodio) 200 ppm, amonio cuaternario
              tr
                td Enjuague final
                td Enjuagar con agua limpia (opcional, según indicaciones del desinfectante).
                td Diario
                td Agua potable
              tr
                td Secado
                td Dejar secar al aire o secar con paños desechables.
                td Diario
                td Paños de papel desechables


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") Una vez establecidas las etapas del procedimiento de limpieza y desinfección, es necesario considerar que la eficacia de este proceso depende también del uso adecuado de los agentes desinfectantes, especialmente de su concentración y tiempo de contacto.
        .bg-color-04.p-4.br-15
          p.mb-0(data-aos="fade-right") Estos parámetros deben ajustarse al tipo de superficie o elemento y a las indicaciones del fabricante. La tabla a continuación, presenta las concentraciones y tiempos de contacto considerados para las diferentes áreas y elementos asociados al manejo de residuos.
      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema5/img24.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 12.
          span Concentraciones de desinfectantes para áreas de residuos
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Superficie o elemento
                th Agente desinfectante
                th Concentración
                th Tiempo de contacto
            tbody
              tr
                td Pisos del área de residuos
                td Cloro (hipoclorito de sodio)
                td 200 ppm
                td 10 minutos
              tr
                td Paredes del área de residuos
                td Cloro
                td 200 ppm
                td 10 minutos
              tr
                td Contenedores grandes de residuos (exterior)
                td Cloro
                td 200 ppm
                td 15 minutos
              tr
                td Contenedores pequeños de estaciones de trabajo
                td Cloro o amonio cuaternario
                td 100 ppm / 200 ppm
                td 5-10 minutos
              tr
                td Áreas con derrames de aceite
                td Detergente desengrasante + agua caliente
                td Según fabricante
                td Según fabricante

    separador
    
    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.7. Medidas de bioseguridad

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img25.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .bg-color-15.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Las medidas de bioseguridad asociadas al manejo de residuos contribuyen a prevenir la contaminación de los alimentos, reducir la exposición del personal a agentes contaminantes y mantener condiciones higiénicas en las áreas de trabajo. Su aplicación comprende prácticas relacionadas con la protección personal, la higiene de manos, la organización de las áreas, la capacitación, la señalización y el control de situaciones que puedan representar un riesgo durante la manipulación de residuos.


    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img26.png", data-aos="zoom-in")
      .col-lg-7.order-1.order-lg-1
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Elementos de protección personal") Utilizar los elementos de protección definidos según la actividad y el nivel de riesgo durante la manipulación, traslado y almacenamiento de residuos.
          p(numero="2" titulo="Higiene de manos") Realizar el lavado de manos después de manipular residuos y retirar los guantes, especialmente antes de retomar actividades relacionadas con alimentos.
          p(numero="3" titulo="Separación de áreas") Mantener las zonas destinadas a residuos separadas de las áreas de preparación y almacenamiento de alimentos, evitando posibles fuentes de contaminación cruzada.
          p(numero="4" titulo="Capacitación del personal") Fortalecer periódicamente los conocimientos sobre separación de residuos, uso de elementos de protección, limpieza, desinfección y prácticas de bioseguridad.
          p(numero="5" titulo="Señalización") Identificar las áreas y recipientes destinados al manejo de residuos mediante información clara que facilite su correcta separación y almacenamiento.
          p(numero="6" titulo="Control de plagas") Mantener medidas preventivas y de control integrado de plagas en las áreas de almacenamiento de residuos, de acuerdo con el programa de saneamiento del establecimiento.
          p(numero="7" titulo="Manejo de derrames") Atender los derrames de manera inmediata, utilizando los elementos y procedimientos establecidos según el tipo de sustancia, y realizar posteriormente la limpieza y desinfección del área afectada.
        


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Elementos de Protección Personal (EPP) para manejo de residuos

    .row.align-items-center.bg-color-03.p-4.mb-5.br-15
      .col-lg-auto.d-none.d-lg-block.order-2
        img.d-none.d-lg-flex(src="@/assets/curso/tema5/img27.svg", style="max-width: 90px").mx-auto
      .col-lg.order-1
        p.mb-0 Los Elementos de Protección Personal (EPP) son equipos y accesorios destinados a proteger a los trabajadores durante la manipulación, recolección, almacenamiento y transporte de residuos, reduciendo el riesgo de contacto con sustancias peligrosas, agentes biológicos, objetos cortopunzantes y otros elementos que puedan afectar su salud y seguridad.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img35.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-3.p-lg-5
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Guantes de nitrilo o caucho:] protegen las manos del contacto directo con residuos orgánicos, químicos o cortantes. Cambiar los guantes después de cada uso y lavarse las manos.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img27.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Traje o delantal:] protege el uniforme y la piel de salpicaduras de residuos líquidos, aceites y productos de limpieza.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img28.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Gorro o malla para el cabello:] evita que el cabello caiga en los residuos y que los residuos se adhieran al cabello.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img29.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Tapabocas común o para químicos:] protege las vías respiratorias de partículas, olores y aerosoles que puedan generarse al manipular residuos orgánicos.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img30.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Calzado cerrado antideslizante:] protege los pies de caídas de objetos pesados y evita resbalones en pisos mojados o grasosos.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img31.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Gafas de seguridad (para residuos peligrosos):] protegen los ojos de salpicaduras de aceites calientes, productos químicos de limpieza o líquidos corrosivos.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img32.svg", style="max-width: 90px").mx-auto
            .tarjeta.p-4.h-100
              .row.align-items-center.mb-0
                .col-lg
                  p.mb-0 #[b Productos de desinfección:] los productos de desinfección sirven para prevenir infecciones por el contacto con alimentos en descomposición y para mantener una buena higiene dentro de la cocina.
                .col-lg-auto.d-none.d-lg-block
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/img33.svg", style="max-width: 90px").mx-auto

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 13.
          span Procedimiento en caso de accidente con residuos (cortes, exposición a químicos)
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Tipo de accidente
                th Acción inmediata
                th Acción posterior
            tbody
              tr
                td Corte con vidrio o metal contaminado con residuos
                td Lavar la herida con agua y jabón. Aplicar presión con gasa estéril. Cubrir con apósito impermeable de color detectable (azul).
                td Acudir al botiquín. Reportar al supervisor. Diligenciar el reporte de incidente de trabajo. Verificar estado de vacunación contra tétanos.
              tr
                td Salpicadura de aceite caliente
                td Enfriar la zona afectada con agua corriente fría durante 10-15 minutos. No aplicar hielo, cremas, mantequilla o aceite. Cubrir con gasa estéril.
                td Acudir a urgencias si la quemadura es de segundo grado (ampollas) o mayor. Reportar al supervisor.
              tr
                td Contacto de productos químicos (cloro, desinfectantes) con piel u ojos
                td Piel: lavar con abundante agua durante 15 minutos. Ojos: lavar con agua o solución salina durante 15-20 minutos, manteniendo los párpados abiertos.
                td Acudir a urgencias. Llevar el envase del producto químico para identificación. Reportar al supervisor.
              tr
                td Inhalación de gases o vapores de residuos en descomposición
                td Retirar a la persona afectada al aire libre. Aflojar la ropa ajustada. Administrar oxígeno si está disponible y hay personal capacitado.
                td Acudir a urgencias. Evaluar la ventilación del área de residuos. Reportar al supervisor.



    
    .bg-color-02.px-4.py-3.br-15.mb-5
      p.mb-0 Para reforzar sus conocimientos sobre clasificación, manejo de residuos y cierre de jornada, consulte el pódcast “Gestión de residuos en establecimientos gastronómicos: clasificación, normatividad y cierre de jornada”.
      
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-md-12.order-2.order-lg-1
        .bg-fondo-11.tarjeta.px-5.py-4
          .row.align-items-center.justify-content-center
            .col-md-6.col-lg-4.mb-3.mb-lg-0.order-2.order-lg-1
              figure
                img(src="@/assets/curso/tema2/img19.png", data-aos="zoom-in").w-md-50.mx-auto
            .col-lg-8.order-1.order-lg-2
              h4 ¿Sabías qué?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Podscat pendiente"
                tiempo
                :audio="require_src('../assets/curso/audio/2.mp3')"
              )
  
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img36.png", data-aos="zoom-in")

  
  



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
