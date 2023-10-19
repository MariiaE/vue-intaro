<template>
  <div id="app">
    <h2>Перевод единиц измерения</h2>
    <div class="input-group mb-3" style="margin-top: 30px; width: 32%;">
      <input type="number" class="form-control" placeholder="0" min=0 aria-label="Recipient's username"
        v-model="fut" aria-describedby="basic-addon2" @change="metrs = fut * 0.3">
      <span class="input-group-text" id="basic-addon2">фут</span>



      <input type="number" class="form-control" placeholder="0" min=0 aria-label="Recipient's username"
        v-model="metrs" aria-describedby="basic-addon2" @change="fut = metrs / 0.3">
     <!---- <span type="text" class="form-control" placeholder="Username" aria-label="Username">{{ 0.3 * fut }}</span>--->
      <span class="input-group-text">м</span>

     
    </div>

    <div class="input-group mb-3" style="margin-top: 20px; width: 32%;">
      <input type="number" class="form-control" placeholder="0" min=0 aria-label="Recipient's username"
        v-model="mili" aria-describedby="basic-addon2" @change="km = 1.852 * mili">
      <span class="input-group-text" id="basic-addon2">м.мили</span>

      <input type="number" class="form-control" placeholder="0" min=0 aria-label="Recipient's username"
        v-model="km" aria-describedby="basic-addon2" @change="mili = km / 1.852">
      <span class="input-group-text">км</span>
    </div>

    <div class="input-group mb-3" style="margin-top: 20px; width: 32%;">
      <input type="number" class="form-control" placeholder="0" min=0 aria-label="Recipient's username"
        v-model="grad" aria-describedby="basic-addon2" @change="rad = grad *1.75">
      <span class="input-group-text" id="basic-addon2">градусы</span>
      <input type="number" class="form-control" placeholder="0" min=0 aria-label="Recipient's username"
        v-model="rad" aria-describedby="basic-addon2" @change="grad = rad /1.75">
      <span class="input-group-text">рад.</span>
    </div>

    <div class="input-group mb-3" style="margin-top: 20px; width: 32%;">
      <input type="number" class="form-control" placeholder="0" min=-18 aria-label="Recipient's username"
        v-model="cel" aria-describedby="basic-addon2" @change="far = cel*1.8 + 32">
      <span class="input-group-text" id="basic-addon2">°C</span>
      <input type="number" class="form-control" placeholder="0" min=-18 aria-label="Recipient's username"
        v-model="far" aria-describedby="basic-addon2" @change="cel = (far - 32)/1.8">
      <span class="input-group-text">°F</span>
    </div>


  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data() {
    return { fut: ' ', mili: ' ',grad: ' ', cel: ' ', metrs: 0, km: 0, rad:0, far:0}
  }
  
}




</script>


