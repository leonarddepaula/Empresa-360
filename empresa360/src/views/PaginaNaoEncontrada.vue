<template>
    <div class="container d-flex flex-column justify-content-center align-items-center" style="min-height: 100vh;">
        <div class="text-center bg-warning justify-content-center" style="min-width: 100vh; min-height: 2vh;">
            <h5> -_-  opss. Essa página não foi encontrada</h5>
        </div>
        <div class="mt-3">
            <button type="button" class="btn btn-warning" @click="voltarInicio">voltar</button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginaNaoEncontrada',
    methods: {
        voltarInicio() {
            this.$router.push('/')
        }
    }
}
</script>