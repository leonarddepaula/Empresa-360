<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
          <div class="row">
              <div class="col-6">
                  <label class="form-label">ID Contrato:</label>
                  <input type="text" class="form-control">
              </div>
              <div class="col-6">
                  <label class="form-label">Data início:</label>
                  <div class="input-group">
                      <input type="date" class="form-control">
                      <input type="date" class="form-control">
                  </div>
              </div>
          </div>
      </div>
      <div class="card-footer">
          <button type="button" class="btn btn-primary">Pesquisar</button>
      </div>
  </div>


    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">LEAD</th>
          <th scope="col">SERVICO</th>
          <th scope="col">DATA INICIO</th>
          <th scope="col">DATA FIM</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.lead.nome }}</td>
          <td>{{ d.servico.servico }}</td>
          <td>{{ d.data_inicio }}</td>
          <td>{{ d.data_fim }}</td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contratos',
  mixins: [ApiMixin],
  data: () => ({
    parametrosDeRelacionamento: '_expand=lead&_expand=servico'
  }),
  created() {
    const queryParams = new URLSearchParams(this.$route.quey).toString()
    const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
    this.getDadosApi(url)
  },

  beforeRouteUpdate(to, from, next) {
    
    // console.log(to.query) // objeto => URLSearchParams
    const queryParams = new URLSearchParams(to.query).toString();
    console.log(to.query)
    console.log(queryParams)
    const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
    console.log(url);
    this.getDadosApi(url)
    next()
  }

}
</script>


