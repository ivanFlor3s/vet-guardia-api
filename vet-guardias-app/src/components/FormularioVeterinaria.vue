<script setup>
import { ref } from 'vue'
import { postVeterinaria } from '../utils/proxy-service'
// import Swal from 'sweetalert2';

const nombreVeterinaria = ref('')
const email = ref('')
const direccion = ref('')
const telefono = ref('')
let mostrarErrorNombre = ref(false)

function registrar(e) {
  e.preventDefault()
  checkFormulario()

  //ENVIAR POST A BACKEND

  // Swal.fire({
  // title: 'Error!',
  // text: 'Do you want to continue',
  // icon: 'success',
  // confirmButtonText: 'Cool'
  // })
  postVeterinaria({
    nombreVeterinaria: nombreVeterinaria.value ,
    telefono: telefono.value,
    email: email.value,
    direccion: direccion.value
  })
}

function checkFormulario() {
  mostrarErrorNombre.value = nombreVeterinaria.value == ''
}
</script>

<template>
  <form class="row g-3" novalidate>
    <div class="col-md-6">
      <label for="veterinaria" class="form-label">Nombre de veterinaria</label>
      <input
        v-model="nombreVeterinaria"
        type="text"
        class="form-control"
        id="veterinaria"
        :class="{ 'is-invalid': mostrarErrorNombre }"
      />
      <div class="invalid-feedback" v-if="mostrarErrorNombre">Campo requerido.</div>
    </div>
    <div v-if="mostrarErrorNombre">no tiene valor</div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input v-model="email" type="email" class="form-control" id="inputEmail4" />
    </div>
    <div class="col-md-6">
      <label for="direccion" class="form-label">Direccion</label>
      <input v-model="direccion" type="text" class="form-control" id="direccion" />
    </div>
    <div class="col-12">
      <label for="telefono" class="form-label">Telefono</label>
      <input v-model="telefono" type="tel" class="form-control" id="telefono" />
    </div>
    <div class="mb-3">
      <label for="formFile" class="form-label">Constancia de veterinaria</label>
      <input class="form-control" type="file" id="formFile" />
    </div>

    <div class="col-12">
      <button @click="registrar($event)" type="submit" class="btn btn-primary">Registrar</button>
    </div>
  </form>
</template>
