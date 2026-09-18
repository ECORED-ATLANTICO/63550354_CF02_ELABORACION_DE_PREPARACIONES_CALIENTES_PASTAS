<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-2 El componente formativo Salsas para pastas y gestión de residuos proporciona los fundamentos técnicos para la elaboración de diferentes tipos de salsas, mediante la aplicación de recetas estándar, técnicas de preparación y criterios de calidad. A lo largo de su desarrollo, el aprendiz reconoce las características y clasificación de las salsas, su relación con diferentes tipos de pasta y los aspectos que determinan su calidad, como la textura, el sabor, el color y la temperatura.

    p.mb-2 Asimismo, el componente aborda la interpretación y aplicación de la receta estándar como herramienta para organizar la preparación, ajustar cantidades y controlar porciones y rendimientos. Estos conocimientos se articulan con las prácticas de gestión de los residuos generados durante la elaboración de alimentos, considerando su separación en la fuente, almacenamiento temporal, aprovechamiento y disposición final, de acuerdo con el código de colores y la normativa colombiana aplicable.

    p.mb-4 Finalmente, se integran procedimientos relacionados con el registro de la gestión de residuos, el cierre de jornada, la limpieza y desinfección de las áreas y las medidas de bioseguridad. De esta manera, el componente articula la elaboración técnica de salsas con prácticas de higiene y manejo responsable de residuos, favoreciendo procesos gastronómicos orientados a la calidad, la inocuidad y la sostenibilidad

  
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Diagrama jerárquico del SENA titulado “Salsas para pastas y gestión de residuos”, organizado en cinco módulos: Salsas: generalidades, clasificación y clases; Formulación y elaboración de salsas; Interpretación y aplicación de la receta estándar; Clasificación de residuos; y Gestión y disposición de residuos. Cada módulo presenta los temas y subtemas correspondientes, incluyendo definición, clasificación, técnicas de preparación, receta estándar, manejo de residuos, almacenamiento, disposición final, limpieza y medidas de bioseguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
