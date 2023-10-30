<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico}}</div>
        <div class="card-body">
            <p class="card-text"> {{ dados.descricao}}</p>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Servico',
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
    },
    watch: {
        $route(to){ // to para novo valor , from para valor antigo
            // console.log(to.params);
            this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        }
    }
}
</script>

