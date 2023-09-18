<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de requerimiento

    figure
      img(src="@/assets/curso/temas/tema-1-1.png", alt="")
    .row.mt-5
      .col-12.col-lg-9
        p El desarrollo de aplicaciones móviles no implica únicamente la codificación o programación, también requiere de analizar y entender las necesidades del cliente, crear modelos que hagan más fácil el proceso de desarrollo, la planeación del proyecto, y otras actividades involucradas.
        p.mt-3 La aplicación de las técnicas de elicitar (transferir información) requisitos, conducen a identificar las fuentes de los mismos con los interesados en el sistema (<i>stakeholders</i>). Estas actividades sin embargo pueden derivar en que el cliente o los usuarios excedan lo que realmente necesitan, o tal vez sin considerar las limitantes a nivel de <i>hardware</i>, <i>software</i>, presupuesto, tiempo o requisitos, por lo tanto es necesario conocer con todo nivel de detalle lo que se requiere alcanzar y las necesidades reales a cubrir. De esta forma se deben detallar y modificar los requerimientos básicos elicitados, lo cual se logra en un consenso de las partes involucradas como lo indica la siguiente figura 1 y da como resultados la elaboración de un documento en el cual se debe responder:
        p ¿Qué es lo prioritario?, ¿qué es lo esencial? y ¿para cuándo se requiere? Esto se especifica de algún modo y luego se revisa o válida para garantizar la coincidencia en la comprensión que tiene el analista del problema y los demás participantes.
      .col-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/curso/temas/tema-1-2.svg", alt="")

    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Esquema de acuerdos

    .row.mb-5
      .col-8.col-lg-6.offset-2.offset-lg-3
        figure.mb-4
          img(src="@/assets/curso/temas/tema-1-3.svg", alt="Ilustración que establece un esquema básico de acuerdos que ayudan a establecer los requerimientos en el desarrollo de una aplicación." style="max-width: 500px")
        figcaption Nota. Esquema de acuerdos, SENA (2021).

    p.mb-5 Cuando los sistemas no son tan complejos en su alcance, como lo es en la mayoría de los casos para aplicaciones móviles, se recomienda el empleo de historia de usuario, sin embargo, se propone revisar algunos aspectos que no son fáciles de identificar en un proceso de licitación de requisitos y que se mencionan a continuación ya que está enmarcados en el contexto de aplicaciones móviles, ver tabla 1.

    .titulo-sexto.color-acento-botones
      h5.mb-0 Tabla 1
      span Preguntas de análisis de requisitos para aplicaciones móviles.
    .tabla-b.color-acento-botones.mb-5
      table
        caption Nota. Preguntas modeladoras, SENA (2021).
        tr.text-center
          th.bg-acento-botones Aspecto
          td.bg-acento-botones.font-weight-bold Pregunta modeladora
        tr
          th Aspecto físico o de <i>hardware</i>
          td
            p ¿En qué tipo de dispositivos la <i>app</i> debe funcionar? Móvil, <i>Tablet</i>, <i>Smart watch</i>, etc.
            p ¿Qué tipo de <i>app</i> es una mejor solución?: nativa, web o híbrida.
            p En las <i>app</i>s nativas, ¿qué sistema operativo se empleará? Android, IOS, Windows Phone, etc.
            p En las Web <i>app</i>, ¿qué navegadores y versiones deberán soportar las funcionalidades?
            p ¿A cuántos usuarios simultáneamente debe atender el sistema?
            p ¿Hay restricciones de nivel de acceso a Internet (ancho de banda o consumo) o aspectos de seguridad?
        tr
          th Interface de usuario
          td
            p ¿Las entradas de información es proveída por los usuarios o existen otras fuentes, cuáles?
            p ¿La salida o consumo de información intervienen a uno o a más sistemas?
            p ¿Hay alguna forma preestablecida en que deben formatearse los datos?
            p ¿Existe alguna aplicación similar que sirva de referencia para su proyecto?
        tr
          th Aspectos humanos
          td
            p ¿Qué tipo de población usará la <i>app</i>?
            p ¿Existen varios tipos de usuario?
            p ¿Qué tipo de entrenamiento necesitará cada tipo de usuario?
    figure.mt-5
      img(src="@/assets/curso/temas/tema-1-4.png", alt="")
    p.mt-5 Cuando un requisito o conjunto de ellos hace parte de todo un ecosistema tecnológico donde intervienen diferentes tipos de aplicaciones (web, de escritorio, móvil, interacción con otros sistemas de proveedores, clientes o asociados), como, por ejemplo, los sistemas bancarios, que tienen <i>app</i> móvil, aplicación web, aplicación de terminal escritorio, aplicaciones portales para asociados etc. En un escenario así, las historias de usuario no siempre dan una visión completa de la complejidad del problema.
    .row.mt-4
      .col-11
        p Estos sistemas generalmente tienen lo que denominaban “Las Reglas del Negocio” o “Conjunto de Reglas de Negocio” las cuales describe las políticas, operaciones, normas, definiciones y restricciones presentes en una organización y que los sistemas de información o aplicación deben considerar porque son las que permiten alcanzar los objetivos misionales del cliente. En ocasiones hasta se requiere un glosario de términos propios del negocio para poder especificarlos.
      .col-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema-1-5.svg", alt="")
    .row.mt-5.justify-content-center
      .col-xl-10
        .cajon.color-acento-botones.p-4.bg-acento-botones-op30
          p Este es un ejemplo de regla de negocio: un cliente al que se factura más de 10.000 al año es un cliente de tipo A. Para los clientes de tipo A se aplican descuentos del 10% en pedidos superiores a 3.000.
    .row.my-5
      .col-12
          p Pero las #[strong reglas] de negocio pueden ser tan complejas como lo sean las operaciones del cliente, en casos como tal se propone emplear artefactos como los casos de uso para definir al detalle la especificación del sistema.
          p.mb-0 En un caso tal se proponen algunos artefactos a elaborar que guiarán el proceso:

    h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Documento de especificación de requisitos

    .row.mb-5
      .col-lg-4.col-12
        figure.mb-4
          img(src="@/assets/curso/temas/tema-1-7.png", alt="")
      .col-lg-8
        p Permite identificar el objetivo general de cada requerimiento sin abordar demasiados detalles técnicos ni de reglas de negocio que se presenten en la operación, es una base para estimar costos y tiempos.
        p Se puede encontrar un formato de ejemplo, que es a su vez, una guía de cómo crear o adaptar.
        a.px-4.boton.color-acento-botones(:href="obtenerLink('/downloads/FS-DOC-LevantamientoRequerimientos.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download


    h3.mb-4 #[i.fas.fa-angle-double-right.txt--color-acento-contenido] Plantilla de casos de uso

    .row.mb-5
      .col-lg-4.col-12
        figure.mb-4
          img(src="@/assets/curso/temas/tema-1-8.png", alt="")
      .col-lg-8
        p Alguno de los requerimientos especificados definidos en el documento de especificación de requisitos puede necesitar un nivel de detalle técnico superior, por ejemplo, al definir procesos síncronos o asíncronos de operación del sistema informático o casos particulares de operación, donde pueden intervenir reglas de negocio.  A continuación se puede encontrar un ejemplo o guía, para que se pueda adaptar a las necesidades del proyecto.
        p Se puede encontrar un formato de ejemplo, que es a su vez, una guía de cómo crear o adaptar.
        a.px-4.boton.color-acento-botones(:href="obtenerLink('/downloads/FS-DOC-PLANTILLA-CASOS-USO.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download


    //.tabla-a.color-primario.mt-5
      table
        thead
          tr
            th Documento de especificación de requisitos
            th Plantilla de casos de uso
        tbody
          tr
            td.p-0.position-relative
              figure
                img(src="@/assets/curso/temas/tema-1-7.png", alt="")
              figure.image-cover
                img(src="@/assets/curso/temas/tema-1-6.svg", alt="")

            td.p-0.position-relative
              figure
                img(src="@/assets/curso/temas/tema-1-8.png", alt="")
              figure.image-cover
                img(src="@/assets/curso/temas/tema-1-9.svg", alt="")
          tr
            td
              p.px-4 Permite identificar el objetivo general de cada requerimiento sin abordar demasiados detalles técnicos ni de reglas de negocio que se presenten en la operación, es una base para estimar costos y tiempos.
              p.mt-3.px-4 Se puede encontrar un formato de ejemplo, que es a su vez, una guía de cómo crear o adaptar.
              a.px-4.boton.color-primario.mx-4(:href="obtenerLink('/downloads/FS-DOC-LevantamientoRequerimientos.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
            td
              p.mt-2.px-4 Alguno de los requerimientos especificados definidos en el documento de especificación de requisitos puede necesitar un nivel de detalle técnico superior, por ejemplo, al definir procesos síncronos o asíncronos de operación del sistema informático o casos particulares de operación, donde pueden intervenir reglas de negocio.  A continuación se puede encontrar un ejemplo o guía, para que se pueda adaptar a las necesidades del proyecto.
              a.px-4.boton.color-primario.mx-4(:href="obtenerLink('/downloads/FS-DOC-PLANTILLA-CASOS-USO.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

    .row.justify-content-center.mt-5
      .col-xl-10.align-items-center
        .cajon.color-acento-botones.p-4.bg-acento-botones-op30
          .row
            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema-1-10.svg", alt="").w-75.margin-0-auto
            .col
              p Los requerimientos de una aplicación móvil para la mayoría de los casos están cubiertos por técnica como la elaboración de historias de usuario, sin embargo, cuando la aplicación móvil pertenece a un ecosistemas de solución tecnológica más compleja, el proceso requiere algún artefacto que ayude a identificar y validar los requisitos.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
