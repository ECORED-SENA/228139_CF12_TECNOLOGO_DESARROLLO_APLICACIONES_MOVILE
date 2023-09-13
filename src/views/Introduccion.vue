<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade") Aquí comienza el estudio del componente formativo #[strong “Diseño y construcción de #[em Front-end]”]; explore la información del video que se muestra enseguida, la cual le contextualiza sobre los aspectos más importantes de los temas por desarrollar. #[strong ¡Adelante!]

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/11eAGCTwixQ?si=Beu_UK1JlEhVToXy" title="Diseño y construcción de Front-end" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Diseño y construcción de #[em Front-end]
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
