<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h5>Component Indicador</h5>
    <p>Poderíamaos recuperar os indicadores do serviço id {{ id }} </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Indicadores',
  props: ['id'],
  created() {
    // console.log('Indicadores - por props: ', this.id);

  }
}
</script>

