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
    props: ['id'],
    mixins: [ApiMixin],
    created() {
        // console.log('Servico: ',this.$route.params.id)
        // console.log('Via Props: ',this.$props);
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
    },
    beforeRouteUpdate(to, from, next) {
    
            
            if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        next()
    }
}
</script>

