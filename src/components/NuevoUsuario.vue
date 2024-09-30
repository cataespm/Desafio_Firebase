<script setup>
import { ref } from 'vue'
import { useUsuariosStore } from '@/stores/usuarios'

const nombreUsuario = ref('')
const nombreCorreo = ref('')

const usuariosStore = useUsuariosStore()

function handleAddUsuarios() {
  usuariosStore.addUsuarios(nombreUsuario.value, nombreCorreo.value)

  nombreUsuario.value = ''
  nombreCorreo.value = ''
}
</script>
<template>
  <form class="text-center mt-5" @submit.prevent="handleAddUsuarios">
    <label for="nombre-Usuario">Nombre</label>
    <input required type="text" id="nombre-Usuario" v-model="nombreUsuario" />

    <label for="nombre-Correo">Correo</label>
    <input required type="text" id="nombre-Correo" v-model="nombreCorreo" />

    <button type="submit">Agregar</button>
  </form>
</template>
<style scoped></style>
