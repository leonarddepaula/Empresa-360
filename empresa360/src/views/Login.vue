<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Voltar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha">
                        </div>
                        <button class="btn btn-primary" @click="navegarPara">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    methods: {
        navegarPara(){
             this.$router.push('/home')
             
            //  this.$router.replace('/home')
           //   this.$router.forward() // permite avançar no histórico de rotas do navegador
          //    this.$router.back() //retornar no histórico de rotas do navegador
         //    this.$router.go(2) //avançar ou retroceder no histórico de rotas do navegador
        }
    }
}
</script>

