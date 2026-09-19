<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 2
      h1 Formulación y elaboración de salsas

    img(src="@/assets/curso/tema2/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La preparación de una salsa profesional requiere no solo buenos ingredientes, sino también una comprensión clara de la receta estándar, las técnicas adecuadas y los criterios de calidad. Este capítulo aborda la estructura y componentes de una receta estándar de salsa, las técnicas de preparación según el tipo de salsa, el control de calidad y el maridaje con pastas.
  
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Estructura y componentes de una receta estándar
  
    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una receta estándar de salsa es un documento técnico que contiene información detallada y precisa sobre los ingredientes, cantidades, procedimiento, tiempos de cocción, rendimiento y costos de una preparación específica. Según el manual de pastas y salsas (instituto argentino de gastronomía, 2015), para lograr un buen resultado es fundamental que la cocción sea la adecuada y que los ingredientes se incorporen en el orden correcto.
   
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 4.
          span Componentes esenciales de una receta estándar de salsa
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA, (2026).
            thead
              tr
                th Componente
                th Descripción
                th Ejemplo
            tbody
              tr
                td Nombre de la salsa
                td Denominación comercial
                td Pesto <em>alla genovese</em>
              tr
                td Número de porciones
                td Cantidad de porciones que produce la receta
                td 4 porciones
              tr
                td Tamaño de la porción
                td Cantidad de salsa por porción de pasta
                td 60-80 ml por porción (aprox. 4-6 cucharadas)
              tr
                td Ingredientes
                td Lista completa de materias primas
                td Albahaca fresca, piñones, ajo, queso parmesano, aceite de oliva, sal
              tr
                td Cantidades
                td Peso (gramos) o volumen (mililitros) exacto
                td 50 g de hojas de albahaca, 15 g de piñones
              tr
                td Procedimiento
                td Pasos secuenciales para la elaboración
                td 1. Lavar y secar la albahaca... 2. Machacar en mortero...
              tr
                td Tiempo de cocción
                td Duración de cada etapa
                td 5 minutos de preparación, sin cocción (salsa cruda)
              tr
                td Temperatura
                td Temperatura de cocción (si aplica)
                td Temperatura ambiente (salsa cruda)
              tr
                td Rendimiento
                td Cantidad total producida
                td Aproximadamente 200 ml de pesto
              tr
                td Costo por porción
                td Sumatoria de costos de ingredientes por porción
                td $1.800 COP por porción
  
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Técnicas de preparación según el tipo de salsa

    .bg-color-01.p-4.br-15.mb-5
      p.mb-0 Las salsas para pastas se pueden clasificar según su método de preparación en salsas cocidas y salsas crudas (o en frío). Cada tipo requiere técnicas específicas.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas cocidas (como ragú, tomate, crema)
  
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Sofrito (battuto)").align-content-center
            p.mb-0 Es el primer paso de muchas salsas cocidas. Consiste en picar finamente verduras aromáticas (cebolla, zanahoria, apio, ajo) y rehogarlas en aceite de oliva o mantequilla a fuego lento hasta que estén tiernas y transparentes, sin que lleguen a dorarse. Según el manual de pastas y salsas (Instituto Argentino de Gastronomía, 2015), el <em>soffritto</em> es el punto de partida de numerosos estofados italianos, desde el sugo y el ragú para acompañar la pasta hasta los platos de carne como el ossobuco o el brasato.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Dorado de carnes o embutidos").align-content-center
            p.mb-0 En salsas como el ragú, después del sofrito se añade la carne (picada o en trozos) y se dora a fuego medio-alto para sellar los jugos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Deglaseado con vino").align-content-center
            p.mb-0 Después de dorar la carne, se añade vino (tinto o blanco, según la receta) y se deja evaporar el alcohol, raspando el fondo de la cacerola para incorporar los sabores caramelizados.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Cocción lenta (soffritto, stracotto)").align-content-center
            p.mb-0 Una vez añadidos el tomate, el caldo y los condimentos, la salsa se cocina a fuego muy lento (a veces durante horas) para que los sabores se concentren y las carnes se ablanden. El ragú napolitano puede cocinarse hasta 4 horas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Espesado").align-content-center
            p.mb-0 Algunas salsas requieren espesamiento con harina, maicena o reducción prolongada. La salsa Alfredo, por ejemplo, puede llevar <em>roux</em> (mezcla de harina y mantequilla) o crema de leche.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Salsas crudas o en frío (como pesto, algunas salsas de tomate fresco)
  
  
    .row.mb-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img05.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Preparación de ingredientes
            p.text-center.mb-0 Las hierbas (albahaca, perejil) se lavan y secan cuidadosamente. Los frutos secos (piñones, almendras, nueces) se pueden tostar ligeramente para potenciar su sabor.

          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Triturado o machacado
            p.text-center.mb-0 Tradicionalmente, el pesto se prepara en un mortero de mármol (el método preferido por los puristas) machacando los ingredientes con movimientos circulares. Actualmente también se usa la batidora o el procesador de alimentos, aunque el resultado varía ligeramente en textura.

          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img07.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Emulsión
            p.text-center.mb-0 Se añade el aceite de oliva en forma de hilo mientras se continúa machacando o procesando, para lograr una emulsión homogénea.

          .tarjeta.tarjeta--blanca.shadow-sm.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img08.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
            h4.text-center Incorporación de quesos (opcional)
            p.text-center.mb-0 En salsas como el pesto, los quesos rallados se incorporan al final, mezclando suavemente.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Control de calidad: textura, sabor, color y temperatura
  
    .bg-color-01.p-4.br-15.mb-5
      p.mb-0 Para garantizar que una salsa cumpla con los estándares de calidad, se deben evaluar los siguientes parámetros sensoriales:
      
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-06")
          div(titulo="Textura")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 La salsa debe tener la consistencia adecuada para el tipo de pasta con la que se sirve. Las salsas para pastas largas (<em>spaghetti</em>, <em>linguine</em>) deben ser fluidas pero no aguadas, para que recubran la pasta sin escurrirse. Las salsas para pastas cortas (<em>penne</em>, <em>rigatoni</em>) pueden ser más espesas o con trozos, ya que la forma de la pasta ayuda a retener la salsa. Según el libro recetas de cocina italiana (Recetas de Rechupete, 2025), una salsa <em>carbonara</em> debe tener una textura cremosa y no debe cuajar el huevo.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in")

          div(titulo="Sabor")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 La salsa debe tener un perfil de sabores equilibrado. En salsas de tomate, se debe evitar la acidez excesiva (se puede corregir con azúcar). En salsas saladas, se debe controlar la cantidad de sal, especialmente si se utilizan ingredientes ya salados como panceta, anchoas o quesos curados.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in")

          div(titulo="Color")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 El color debe ser atractivo y corresponder a los ingredientes utilizados. El pesto debe tener un color verde brillante; para evitar que la albahaca se oscurezca, se puede escaldar muy rápidamente (5 segundos) en agua hirviendo y luego enfriar en agua con hielo.
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img11.png", data-aos="zoom-in")

          div(titulo="Temperatura de servicio")
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-1
                p.mb-0.ms-0.ms-lg-5 Las salsas calientes (ragú, tomate, crema) deben servirse a temperatura alta (65-75 °C). Las salsas frías o a temperatura ambiente (pesto) no deben calentarse (el calor degrada el color y sabor de la albahaca).
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-01.p-5.mb-5
      SlyderA(tipo="b").bg-color-white.p-4.tarjeta
        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-3.fw-bold Antes de preparar la salsa:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Se han verificado las fechas de vencimiento de los ingredientes?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Se han pesado y medido todos los ingredientes según la receta estándar?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Los ingredientes perecederos (crema, huevos, quesos) están a temperatura adecuada?

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-3.fw-bold Durante la preparación:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Se ha seguido el procedimiento paso a paso?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Se han respetado los tiempos de cocción?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Se ha corregido la sazón (sal, pimienta, acidez) antes de finalizar?

        .tarjeta.p-4.h-100
          .row.align-items-center.mb-0.justify-content-center
            .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in")
            .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-3.fw-bold Al finalizar la salsa:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿La textura es la adecuada (ni muy líquida ni muy espesa)?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿El color es atractivo y corresponde a la receta?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿El sabor es equilibrado (salado, ácido, dulce, umami)?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿La temperatura de servicio es la correcta?
                li.d-flex
                  i.fas.fa-check-circle.fa-xs(style="color: #FE9800;")
                  p.mb-0 ¿Se ha registrado el rendimiento real para comparar con el rendimiento estándar?

  
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4. Maridaje de salsas con tipos de pasta

    p.mb-4 El maridaje entre la pasta y la salsa responde a características como la forma, el tamaño, la superficie y la capacidad de la pasta para retener la preparación. 
  
    .bg-color-02.px-4.py-3.br-15.mb-5
      p.mb-0.text-center De acuerdo con Bernasconi y Teubner (2004), una selección adecuada favorece la distribución de la salsa y el equilibrio de sabores y texturas. Algunos criterios para orientar esta combinación son los siguientes:
      
  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in")

      .col-lg-7.order-2.order-lg-2.col-md-12.mb-0
        .bg-fondo-01.p-5
          SlyderA(tipo="b").bg-color-white.p-4.tarjeta
            .tarjeta.p-4.h-100
              p.mb-0 <b>Pastas largas (<em>spaghetti</em>, <em>linguine</em>, <em>fettuccine</em>):</b> combinan especialmente con salsas fluidas o cremosas que pueden distribuirse a lo largo de la pasta. Entre ellas se encuentran preparaciones a base de aceite de oliva, tomate, queso o mariscos.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Pastas cortas y tubulares (<em>penne</em>, <em>rigatoni</em>, <em>ziti</em>):</b> su forma, cavidades y, en algunos casos, superficie estriada facilitan la retención de salsas espesas y de ingredientes en trozos. Son apropiadas para ragús y salsas de verduras, carnes o quesos.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Pastas con formas (fusilli, farfalle, orecchiette):</b> sus pliegues, curvas y cavidades permiten retener salsas de consistencia media y pequeños ingredientes. Pueden acompañarse con pesto, salsas de verduras y otras preparaciones de textura similar.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Pastas rellenas (ravioli, tortellini, agnolotti):</b> requieren acompañamientos que complementen el sabor del relleno sin predominar sobre él. Pueden servirse con mantequilla y hierbas, salsas ligeras o caldos, según el tipo de pasta y relleno.

            .tarjeta.p-4.h-100
              p.mb-0 <b>Pastas para hornear (lasaña y canelones):</b> requieren salsas con suficiente consistencia para mantener la estructura y humedad de la preparación durante el horneado. Entre las combinaciones tradicionales se encuentran el ragú y la salsa bechamel.


    
    .bg-color-02.px-4.py-3.br-15.mb-5
      p.mb-0.text-center Para ampliar sus conocimientos sobre la clasificación, las técnicas de elaboración y el maridaje de las salsas para pastas, consulte el pódcast “Salsas para pastas: clasificación, técnicas de elaboración y maridaje”.
      
  
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
          img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in")

  
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
