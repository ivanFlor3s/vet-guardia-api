<script setup>


</script>


<template>
<form class="row g-3">
  <div class="col-md-6">
    <label for="veterinaria" class="form-label">Nombre de veterinaria</label>
    <input type="text" class="form-control" id="veterinaria">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="direccion" class="form-label">Direccion</label>
    <input type="text" class="form-control" id="direccion">
  </div>
  <div class="col-12">
    <label for="telefono" class="form-label">Telefono</label>
    <input type="tel" class="form-control" id="telefono">
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Constancia de veterinaria</label>
  <input class="form-control" type="file" id="formFile">
</div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Registrar</button>
  </div>
</form>

</template>