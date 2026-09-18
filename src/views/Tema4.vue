<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.bg-color-13
        span(style="color: #12263F !important") 4
      h1 Clasificación de residuos 

    img(src="@/assets/curso/tema4/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-right")
        p.banner-text La gestión adecuada de los residuos sólidos es un aspecto fundamental en la operación de cualquier establecimiento gastronómico. Este capítulo aborda la definición y tipos de residuos sólidos, el código de colores establecido por la normatividad colombiana y la identificación de residuos generados en la elaboración de pastas y salsas.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Definición y tipos de residuos sólidos

    .bloque-texto-g.bg-color-08.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según el Decreto 2981 de 2013 del Ministerio de Vivienda de Colombia, los residuos sólidos son aquellos materiales, sustancias u objetos en estado sólido o semisólido de los que su generador dispone o está obligado a disponer, en virtud de lo establecido en la normatividad vigente. En el contexto de un establecimiento gastronómico, los residuos sólidos se clasifican en:
   
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Residuos aprovechables").align-content-center
            p.mb-0 Son aquellos que pueden ser sometidos a un proceso de aprovechamiento, como el reciclaje. Incluyen papel, cartón, plásticos (botellas, envases), vidrio (botellas, frascos), metales (latas) y algunos textiles.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Residuos no aprovechables").align-content-center
            p.mb-0 Son aquellos que no pueden ser reciclados o reutilizados. Incluyen papeles y cartones contaminados con alimentos (servilletas usadas, envases de comida rápida), plásticos de un solo uso no reciclables, icopor, residuos sanitarios (toallas húmedas, papel higiénico, pañuelos desechables).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Residuos orgánicos").align-content-center
            p.mb-0 Son aquellos que se descomponen naturalmente por acción biológica. Incluyen restos de alimentos (cáscaras de verduras y frutas, restos de comidas, cáscaras de huevo), residuos de jardinería (hojas, ramas), restos de café y té.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Residuos peligrosos").align-content-center
            p.mb-0 Son aquellos que por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables o infecciosas representan un riesgo para la salud humana o el medio ambiente. En cocina, incluyen aceites de cocina usados, pilas, bombillas, envases de productos de limpieza (cloro, desengrasantes, detergentes fuertes).

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Código de colores para la clasificación de residuos

    .row.mb-5.mb-lg-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img04.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 El Ministerio de Ambiente y Desarrollo Sostenible, mediante la Resolución 2184 de 2019, estableció en Colombia el código de colores para la separación de residuos sólidos en la fuente, implementado a partir del 1 de enero de 2021.  
        .bg-color-09.p-4.br-15.mb-0
          p.mb-0(data-aos="fade-right") Este sistema establece el color blanco para los residuos aprovechables, el negro para los no aprovechables y el verde para los residuos orgánicos aprovechables. Su aplicación comprende entidades públicas y privadas y, por tanto, constituye un referente para la adecuada separación de los residuos generados en establecimientos gastronómicos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 5.
          span Código de colores para la clasificación de residuos sólidos en Colombia
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. Adaptado de la Resolución 2184 de 2019 (Ministerio de Ambiente y Desarrollo Sostenible).
            thead
              tr
                th Color
                th Tipo de residuo
                th Ejemplos en establecimientos gastronómicos
            tbody
              tr
                td Blanco
                td Residuos aprovechables (plásticos, vidrio, metales, papel, cartón) limpios y secos
                td Botellas de plástico (gaseosas, agua, aceite), frascos de vidrio (salsas, conservas), latas de conservas (tomate, atún), envases de cartón (leche, crema de leche), periódicos y revistas (si se usan).
              tr
                td Negro
                td Residuos no aprovechables
                td Servilletas de papel usadas, papel film, papel encerado, icopor, envases de plástico de un solo uso sucios, residuos sanitarios (pañuelos desechables).
              tr
                td Verde
                td Residuos orgánicos (aprovechables para compostaje o biogás)
                td Cáscaras de verduras y frutas, restos de alimentos, cáscaras de huevo, filtros de café con posos, residuos de jardinería (hojas, ramas pequeñas), servilletas de papel sin tintas ni químicos.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Identificación de residuos generados en la elaboración de pastas y salsas

    p.mb-4 En la elaboración de pastas y salsas se generan diversos tipos de residuos. Es importante identificarlos correctamente para clasificarlos en el contenedor correspondiente.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-0 Tabla 6.
          span Residuos generados en la elaboración de pastas y salsas
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption(style="font-weight: normal;") Nota. SENA (2026).
            thead
              tr
                th Etapa del proceso
                th Residuos generados
                th Clasificación (color)
            tbody
              tr
                td Preparación de ingredientes para pasta
                td Cáscaras de huevo, restos de harina, envolturas de harina (papel o plástico)
                td Verde (cáscaras), Blanco (envolturas limpias), Negro (envolturas sucias)
              tr
                td Elaboración de salsas de tomate
                td Envases de tomate en lata o vidrio, restos de vegetales (cáscaras de cebolla, zanahoria, apio), hojas de albahaca marchitas
                td Blanco (envases limpios), Verde (restos de vegetales)
              tr
                td Elaboración de salsas con carne
                td Envolturas de carne (plástico), restos de grasa y huesos (si se usan cortes con hueso), envases de vino (vidrio)
                td Blanco (envases limpios de vidrio), Verde (restos de grasa? No, la grasa no es orgánica compostable en pequeñas cantidades; consultar normativa local)
              tr
                td Elaboración de <em>pesto</em>
                td Envases de aceite (vidrio o plástico), frascos de queso rallado, restos de albahaca (tallos)
                td Blanco (envases limpios), Verde (tallos de albahaca)
              tr
                td Limpieza de equipos
                td Paños y servilletas de papel usados, restos de alimentos en filtros o coladores
                td Negro (servilletas usadas), Verde (pequeños restos de alimentos)
              tr
                td Envases y embalajes
                td Cajas de cartón, plásticos de burbuja, film transparente, papel film
                td Blanco (cajas de cartón limpias, plásticos limpios), Negro (plásticos sucios)



</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
