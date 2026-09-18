<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4.mb-lg-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img01.png")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La elaboración de pastas comprende no solo su adecuada preparación y cocción, sino también la selección y elaboración de salsas que complementen sus características y aporten equilibrio en sabor, textura, color y presentación. En este contexto, el componente formativo Salsas para pastas y gestión de residuos aborda los conocimientos y procedimientos necesarios para reconocer, formular y elaborar diferentes tipos de salsas mediante la aplicación de recetas estándar y criterios de calidad.
        
        .bg-color-02.p-4.br-15.mb-3
          p.mb-0(data-aos="fade-right") El componente inicia con las generalidades, clasificación y clases de salsas, para posteriormente abordar su formulación y elaboración, las técnicas de preparación, el control de calidad y el maridaje con diferentes tipos de pasta. Asimismo, profundiza en la interpretación y aplicación de la receta estándar, considerando factores de conversión y escalado, así como la estandarización de porciones y rendimientos.
        
    p.mb-0 Finalmente, se desarrollan los principios y procedimientos para la clasificación, gestión y disposición de los residuos sólidos generados en establecimientos gastronómicos, de acuerdo con la normativa colombiana aplicable. Se incluyen aspectos relacionados con la separación, almacenamiento, aprovechamiento y disposición final de residuos, así como los registros ambientales, el cierre de jornada, la limpieza y desinfección de áreas y las medidas de bioseguridad.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
