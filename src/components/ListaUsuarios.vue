<script setup>
import { useUsuariosStore } from '@/stores/usuarios'
import { onMounted } from 'vue'

const usuariosStore = useUsuariosStore()

onMounted(() => {
  usuariosStore.fetchUsuarios()
})

function handleDelete(id) {
  usuariosStore.deleteUsuarios(id)
}
</script>
<template>
  <table class="table table-light table-hover mt-4">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(usuario, idx) in usuariosStore.usuarios" :key="usuario.id">
        <th scope="row">{{ idx + 1 }}</th>
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.correo }}</td>
        <td>
          <button class="btn btn-danger" @click="handleDelete(usuario.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
