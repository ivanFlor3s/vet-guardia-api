<script setup>
import { computed, ref } from 'vue'
import { postVeterinaria } from '../utils/proxy-service'
// import Swal from 'sweetalert2';
import { validateEmail } from '../utils/check-email'

const nombreVeterinaria = ref('')
const email = ref('')
const direccion = ref('')
const telefono = ref('')

let submitted = ref(false)

let mostrarErrorRequiredNombre = computed(() => {
  return submitted.value && nombreVeterinaria.value == ''
})

let mostrarErrorRequiredEmail = computed(() => {
  return submitted.value && email.value == ''
})

let mostrarErrorPatternEmail = computed(() => {
  return submitted.value && !validateEmail(email.value)
})

let mostrarErrorRequiredDireccion = computed(() => {
  return submitted.value && direccion.value == ''
})

let mostrarErrorRequiredTelefono = computed(() => {
  return submitted.value && telefono.value == ''
})

const mostrarErrorPatternTelefono = computed(() => {
  return submitted.value && !/^\d{10}$/.test(telefono.value)
})

function registrar(e) {
  e.preventDefault()
  submitted.value = true

  if (checkFormulario()) {
    postVeterinaria({
      nombreVeterinaria: nombreVeterinaria.value,
      telefono: telefono.value,
      email: email.value,
      direccion: direccion.value
    }).then(() => {
      resetFormulario()
    })
  }
}

function resetFormulario() {
  nombreVeterinaria.value = ''
  email.value = ''
  direccion.value = ''
  telefono.value = ''
  submitted.value = false
}

function checkFormulario() {
  return (
    !mostrarErrorPatternEmail.value &&
    !mostrarErrorPatternTelefono.value &&
    !mostrarErrorRequiredNombre.value &&
    !mostrarErrorRequiredEmail.value &&
    !mostrarErrorRequiredDireccion.value &&
    !mostrarErrorRequiredTelefono.value
  )
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
        :class="{ 'is-invalid': mostrarErrorRequiredNombre }"
      />
      <div class="invalid-feedback" v-if="mostrarErrorRequiredNombre">Campo requerido.</div>
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="inputEmail4"
        :class="{ 'is-invalid': mostrarErrorRequiredEmail || mostrarErrorPatternEmail }"
      />
      <div class="invalid-feedback" v-if="mostrarErrorRequiredEmail">Campo requerido.</div>
      <div class="invalid-feedback" v-if="mostrarErrorPatternEmail">No es un email valido.</div>
    </div>
    <div class="col-md-6">
      <label for="direccion" class="form-label">Direccion</label>
      <input
        v-model="direccion"
        type="text"
        class="form-control"
        id="direccion"
        :class="{ 'is-invalid': mostrarErrorRequiredDireccion }"
      />
      <div class="invalid-feedback" v-if="mostrarErrorRequiredDireccion">Campo requerido.</div>
    </div>
    <div class="col-12">
      <label for="telefono" class="form-label">Telefono</label>
      <input
        v-model="telefono"
        type="tel"
        class="form-control"
        id="telefono"
        :class="{ 'is-invalid': mostrarErrorRequiredTelefono || mostrarErrorPatternTelefono }"
      />
      <div class="invalid-feedback" v-if="mostrarErrorRequiredTelefono">Campo requerido.</div>
      <div class="invalid-feedback" v-if="mostrarErrorPatternTelefono">Debe tener 10 digitos.</div>
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
