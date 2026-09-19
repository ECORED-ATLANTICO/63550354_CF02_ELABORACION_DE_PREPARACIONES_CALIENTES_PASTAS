<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 3
      h1 Interpretación y aplicación de la receta estándar

       
    img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text La receta estándar es una herramienta fundamental para garantizar la consistencia, calidad y rentabilidad en la producción de salsas. Este capítulo aborda la lectura y comprensión de la receta estándar, los factores de conversión y escalado para salsas, y la estandarización de porciones y rendimientos.
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Lectura y comprensión de la receta estándar

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.order-2.order-lg-1.mb-4.mb-lg-0
        p.mb-0 Para interpretar correctamente una receta estándar antes de iniciar la preparación, es necesario verificar que todos los <b>ingredientes</b> estén disponibles y en buen estado, e identificar aquellos que requieren preparación previa; revisar que las <b>cantidades</b> estén expresadas en unidades comprensibles y precisas, preferiblemente en peso cuando corresponda; leer completamente el <b>procedimiento</b> para reconocer las técnicas requeridas y organizar previamente los utensilios, equipos e ingredientes mediante la <em>mise en place</em>; considerar los <b>tiempos y temperaturas de cocción</b>, evaluando también las características propias de la preparación para determinar el punto adecuado; y comprobar el rendimiento de la receta, con el fin de establecer el número de porciones y planificar las cantidades necesarias.
      .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")

    .row.mb-3.justify-content-center.align-items-center
      .col-xl-10.col-lg-12
        figure
          img(src="@/assets/curso/tema3/img03.png", alt="", data-aos="zoom-in").d-none.d-lg-block
          img(src="@/assets/curso/tema3/img04.png", alt="", data-aos="zoom-in").d-block.d-lg-none


    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Factores de conversión y escalado para salsas

    p.mb-4 En la operación diaria de una cocina, es frecuente que se requiera ajustar las cantidades de una receta de salsa para atender un mayor o menor número de comensales. El escalado se realiza mediante un factor de conversión (fc):

    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-color-12.p-3.br-15.text-center
          p.mb-0 fc = porciones deseadas / porciones originales de la receta

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-14.p-4.br-15.mb-3.text-center
          h4 Ejemplo práctico
          p.mb-3 Si una receta de ragú boloñés está diseñada para 4 porciones y se necesitan 12 porciones.
          p.mb-0.fw-bold.text-center fc = 12 / 4 = 3

        .bg-color-02.p-3.br-15
          p.mb-0 Cada ingrediente debe multiplicarse por 3. Por ejemplo, si la receta original requiere 500 g de carne molida, la nueva cantidad será 500 g × 3 = 1.500 g.

    p.mb-4 Advertencias sobre el escalado de salsas:

    .row.mb-4.justify-content-center
      .col-xl-4.col-lg-6.col-md-6.mb-4.mb-xl-0
        .bg-color-02.p-4.br-15.h-100.align-content-center
          .row.align-items-center
            .col-sm-12.col-lg-9
              p.mb-0 Los tiempos de cocción no se multiplican por el factor de conversión; ollas más grandes pueden requerir más tiempo para alcanzar temperatura, pero la cocción final no se multiplica linealmente.
            .col-sm-3.col-lg-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img06.svg")

      .col-xl-4.col-lg-6.col-md-6.mb-4.mb-xl-0
        .bg-color-02.p-4.br-15.h-100.align-content-center
          .row.align-items-center
            .col-sm-12.col-lg-9
              p.mb-0 Las especias y condimentos fuertes (guindilla, ajo, sal) pueden escalarse en menor proporción para evitar sabores excesivamente intensos. Se recomienda aumentar la cantidad gradualmente y probar.
            .col-sm-3.col-lg-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img06.svg")

      .col-xl-4.col-lg-6.col-md-6.mb-0-lg-0
        .bg-color-02.p-4.br-15.h-100.align-content-center
          .row.align-items-center
            .col-sm-12.col-lg-9
              p.mb-0 Para salsas emulsionadas (como el pesto), el escalado de líquidos y sólidos debe ser proporcional, pero la técnica de emulsión puede requerir ajustes (más tiempo de procesado).
            .col-sm-3.col-lg-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img06.svg")

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Estandarización de porciones y rendimientos

    p.mb-4 La estandarización de porciones de salsa es importante por varias razones:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-09.p-4.br-15.mb-3
          p.mb-0 #[b Control de costos:] conocer el costo exacto de la salsa por porción permite calcular el precio de venta adecuado del plato de pasta.
        .bg-color-09.p-4.br-15.mb-3
          p.mb-0 #[b Consistencia en la presentación:] cada cliente recibe la misma cantidad de salsa, asegurando uniformidad en la experiencia de consumo.
        .bg-color-09.p-4.br-15
          p.mb-0 #[b Gestión de inventarios:] permite calcular con precisión las cantidades de ingredientes necesarias para la producción.

    p.mb-4 Cálculo de costo por porción: costo por porción = (costo total de ingredientes)/(número de porciones)

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        .bg-color-14.p-4.br-15.mb-3.text-center
          h4 Ejemplo práctico
          p.mb-3 Para un ragú boloñés con costo total de ingredientes de $28.000 COP que rinde 8 porciones.
          p.mb-0 Costo por porción = $28.000/8 = $3.500 COP.

        .bg-color-02.p-4.br-15
          p.mb-3 Si se desea que el costo de alimentos no supere el 30 % del precio de venta del plato de pasta:
          p.mb-0 precio de venta sugerido = (costo por porción/30) × 100 = ($3.500/30) × 100 = $11.667 COP.

      .col-lg-5.col-md-8
        figure
          img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in")

    p.mb-4 Rendimiento estándar: es la cantidad de salsa que se obtiene al final del proceso, expresada en peso (gramos) o volumen (mililitros). Es importante medir el rendimiento real y compararlo con el rendimiento estándar de la receta para identificar pérdidas o eficiencias.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
