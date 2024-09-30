import { $db } from '@/fireBaseApp'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsuariosStore = defineStore('usuarios', () => {
  const usuarios = ref([])

  async function fetchUsuarios() {
    try {
      const usuariosRef = collection($db, 'usuarios')

      onSnapshot(usuariosRef, (snapshot) => {
        usuarios.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function addUsuarios(data, email) {
    try {
      const usuariosRef = collection($db, 'usuarios')
      await addDoc(usuariosRef, { nombre: data, correo: email })
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteUsuarios(id) {
    try {
      const usuariosRef = doc($db, 'usuarios', id)

      await deleteDoc(usuariosRef)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    usuarios,
    fetchUsuarios,
    addUsuarios,
    deleteUsuarios
  }
})
