<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificando los fundamentos de las salsas para pastas y la gestión de residuos',
      titulo: 'Cuestionario Didáctico',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos adquiridos sobre clasificación de salsas, técnicas de preparación, interpretación de receta estándar, clasificación de residuos, normatividad ambiental y procedimientos de disposición de residuos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de una salsa en la cocina italiana?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aportar humedad y textura al plato.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser el plato principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Endulzar la pasta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar a la proteína.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Así es, las salsas en la cocina italiana tienen como función realzar el sabor, aportar humedad y mejorar la textura y presentación de la pasta.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una salsa de tomate originaria de Roma, conocida por su sabor picante?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Carbonara</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Pesto alla genovese</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Arrabbiata</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ragú napoletano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La salsa <em>Arrabbiata</em>, cuyo nombre significa "enojada" en italiano, es originaria de Roma y se caracteriza por su sabor picante gracias a la guindilla o <em>peperoncino</em>.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal diferencia entre el Ragú a la boloñesa y el Ragú napolitano?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El boloñés lleva pescado y el napolitano lleva carne.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El boloñés usa carne picada y el napolitano usa trozos de carne.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El boloñés se sirve frío y el napolitano caliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El boloñés lleva salsa de tomate y el napolitano no.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El ragú a la boloñesa se elabora tradicionalmente con carne picada, mientras que el ragú napolitano se caracteriza por usar trozos irregulares de carne de buey, jamón y embutidos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes ingredientes NO pertenece a la receta tradicional de la salsa <em>Carbonara</em>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Huevos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Queso Pecorino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crema de leche (nata).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Panceta o <em>guanciale</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. La receta original de la <em>carbonara</em> no lleva crema de leche. Su textura cremosa se logra únicamente con huevos, queso y un poco del agua de cocción de la pasta.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el método de preparación tradicional y el más recomendado para elaborar una salsa <em>Pesto alla genovese</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cocción lenta en una olla de barro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Machacar los ingredientes en un mortero.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hervir todos los ingredientes juntos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Freír la albahaca en abundante aceite.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El término "<em>pesto</em>" proviene del genovés "<em>pestare</em>", que significa machacar. El método tradicional en mortero es el preferido para obtener la textura y el sabor característicos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'En el contexto de la receta estándar, ¿qué es el "factor de conversión" (fc)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La temperatura a la que se debe cocinar la salsa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El número que se multiplica por cada ingrediente para escalar una receta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tiempo total de preparación de la salsa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El costo total de los ingredientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El factor de conversión se calcula dividiendo las porciones deseadas entre las porciones originales de la receta, y se usa para ajustar la cantidad de cada ingrediente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función principal de la "Mise en place" en la preparación de una salsa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limpiar la cocina al finalizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y preparar todos los ingredientes y herramientas antes de empezar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cocinar la salsa a fuego lento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Emplatar la pasta con la salsa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Así es! La "Mise en place", que significa "poner en su lugar", es una filosofía de trabajo que garantiza eficiencia y orden, consistente en dejar todo listo antes de cocinar.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Según la Resolución 2184 de 2019, ¿de qué color es el contenedor para los residuos orgánicos aprovechables?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Blanco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rojo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verde.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Azul.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El código de colores establece el contenedor verde para los residuos orgánicos aprovechables, como cáscaras de verduras y restos de alimentos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la consecuencia de verter aceite de cocina usado por el desagüe?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una práctica recomendada para lubricar las tuberías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No tiene ningún impacto ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ayuda a limpiar la cocina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contamina el agua, el suelo y obstruye las tuberías.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. Verter aceite por el desagüe es una grave falta ambiental que causa contaminación del agua y del suelo, además de obstrucciones en el sistema de alcantarillado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Además de eliminar grumos, ¿cuál es la otra función principal de tamizar la harina para una preparación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oxigenar la mezcla para lograr una textura más ligera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Endulzar la harina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar su contenido de gluten.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el color de la preparación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. Tamizar no solo rompe los grumos, sino que también incorpora aire (oxigena) a la harina, lo que contribuye a una textura final más esponjosa y ligera.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal del procedimiento de cierre de jornada en cuanto a la gestión de residuos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acumular la mayor cantidad de residuos posible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dejar los residuos en las estaciones de trabajo para el día siguiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar la correcta disposición de residuos y la limpieza para evitar plagas y contaminación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ocultar los residuos en lugares inapropiados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El cierre de jornada es un procedimiento crítico que asegura la higiene y seguridad, evitando la proliferación de plagas, malos olores y contaminación cruzada.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el primer paso ante una salpicadura de aceite caliente en la piel?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar mantequilla o crema en la quemadura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Enfriar la zona afectada con agua corriente fría durante 10-15 minutos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Romper las ampollas que se formen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar hielo directamente sobre la piel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Ante una quemadura por aceite, lo primero es enfriar la zona con agua corriente fría. No se debe aplicar hielo, cremas ni romper las ampollas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Según el componente formativo, ¿cuál es el origen de la palabra "<em>pesto</em>"?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Del francés "ragoût", que significa estofado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Del genovés "<em>pestare</em>", que significa machacar o moler en un mortero.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Del latín "pasta", que significa masa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Del italiano "arrabbiato", que significa enojado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. La palabra <em>pesto</em> proviene del genovés "<em>pestare</em>", que significa machacar o moler en un mortero, que es la forma tradicional de preparar esta salsa.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la temperatura de servicio recomendada para las salsas calientes como el ragú o la salsa de tomate?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura ambiente (20-25 °C).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Temperatura de refrigeración (4-8 °C).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Temperatura alta (65-75 °C).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Temperatura de ebullición (100 °C).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las salsas calientes como ragú, tomate o crema deben servirse a temperatura alta, específicamente entre 65 °C y 75 °C, para garantizar su sabor e inocuidad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la función del "soffritto" en la preparación de salsas cocidas italianas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Endulzar la salsa para equilibrar la acidez del tomate.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Espesar la salsa mediante la adición de harina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Rehogar verduras picadas finamente como base aromática de la salsa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfriar rápidamente la salsa para detener la cocción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El soffritto es el primer paso de muchas salsas cocidas y consiste en rehogar verduras aromáticas (cebolla, zanahoria, apio, ajo) en aceite o mantequilla a fuego lento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Según la Resolución 2184 de 2019, ¿en qué contenedor se deben depositar los residuos no aprovechables?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contenedor blanco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contenedor verde.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contenedor negro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contenedor azul.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El código de colores establece el contenedor negro para los residuos no aprovechables, como las servilletas de papel usadas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el maridaje tradicional recomendado para los ravioli o tortellini (pastas rellenas)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ragú boloñés espeso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Salsa <em>carbonara</em> con panceta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salsa de mantequilla y salvia o salsa de tomate ligera.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Salsa <em>arrabbiata</em> picante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Las pastas rellenas requieren salsas ligeras que no opaque el sabor del relleno. La mantequilla con salvia es la combinación clásica para los ravioli.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el procedimiento correcto ante un derrame de aceite de cocina en el piso del área de residuos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limpiar inmediatamente con material absorbente y desechar en el contenedor correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dejarlo para que se seque al aire.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empujarlo hacia el desagüe con agua a presión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cubrirlo con papel periódico y olvidarlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Ante un derrame de aceite, se debe limpiar inmediatamente con material absorbente (arena, tierra de diatomeas, paños) y desechar en el contenedor correspondiente, nunca por el desagüe.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué elemento debe contener la bitácora ambiental según el componente formativo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las recetas estándar de todas las salsas elaboradas en el día.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El horario de entrada y salida de cada empleado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La fecha, tipo y cantidad de residuos generados, y firma del responsable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El menú del día y los precios de cada plato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La bitácora ambiental debe registrar al menos: fecha, tipo de residuo, cantidad generada, forma de almacenamiento, gestor responsable y firma del encargado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la concentración recomendada de cloro (hipoclorito de sodio) para la desinfección de pisos en el área de residuos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '50 ppm durante 5 minutos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '200 ppm durante 10 minutos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '500 ppm durante 30 minutos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1000 ppm durante 1 minuto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La concentración recomendada de cloro para la desinfección de pisos en el área de residuos es de 200 ppm durante 10 minutos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
