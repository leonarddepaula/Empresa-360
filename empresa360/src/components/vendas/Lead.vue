<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h3>Detalhes do Lead</h3>
        <h5>{{ dados.id }} - {{ dados.nome }} </h5>
       
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text"  class="form-control" :value="dados.telefone">
            </div>
        </div>

        <div class="col-auto">
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Lead',
    data: () => ({
        dados: {}

    }),
    methods: {
        getDadosApi() {
            fetch(`http://localhost:3000/leads/${this.$route.params.id}`)
                .then(response => response.json())
                .then(response => {
                    this.dados = response
                    console.log(this.dados);
                })

        },
    },
    created() {
        this.getDadosApi()
    }
}
</script>

