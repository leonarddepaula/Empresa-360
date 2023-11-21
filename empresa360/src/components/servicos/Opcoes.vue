<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h5>Component Opções</h5>
    <p>Poderíamaos recuperar as opções do serviço id {{ id }} </p>
  </div>
</template>
  
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Opcoes',
  props: ['id'],
  created() {
    // console.log('indicadores: ', this.$route.params.id);
  },
  beforeRouteUpdate(){
    console.log('Guarda de componente beforeRouteUpdate')
  },
}
</script>
