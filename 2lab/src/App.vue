<template>
  <h2>Резюме</h2>
  <div style="display: flex;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  margin-top: 10px;">
  <div style=" width: 30%; ">

  <div class="form-group" style=" width: 90%; margin-top: 0px;">
    <label for="exampleFormControlInput1">Профессия</label>
    <input type="text" class="form-control" placeholder="Профессия" aria-label="Recipient's username" v-model="profession"
      aria-describedby="basic-addon2">
  </div>

  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Город</label>
    <input type="text" class="form-control" placeholder="Город" aria-label="Recipient's username" v-model="city"
      aria-describedby="basic-addon2">
  </div>
  
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">ФИО</label>
    <input type="text" class="form-control" placeholder="ФИО" aria-label="Recipient's username" v-model="name"
      aria-describedby="basic-addon2">
  </div>
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Телефон</label>
    <input type="text" class="form-control input-medium bfh-phone" placeholder="9005007030" data-format="+7 (ddd) ddd-dd-dd" v-model="number"
      aria-describedby="basic-addon2" maxlength=10 minlength=6 @keypress="onlyNumbers($event),validatePhoneNumber()"  :class="{valid: isValidPhoneNumber, invalid: !isValidPhoneNumber}" >
 
    </div>
    <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" placeholder="name@example.com" aria-label="Recipient's username"
      v-model="email" aria-describedby="basic-addon2">
  </div>

  <label for="exampleFormControlInput1 " style=" width: 90%; margin-top: 20px;">Статус</label>
      <select class="form-select" aria-label="Default select example" v-model="status" style=" width: 90%; ">
        <option>Новый</option>
        <option>Назначено собеседование</option>
        <option>Принят</option>
        <option>Отказ</option>

    </select>

 <!-----:class="{valid: isValidPhoneNumber, invalid: !isValidPhoneNumber}"   @click="validatePhoneNumber"---->

</div>

<div style=" width: 30%; ">
  
  <div class="form-group"  style=" width: 90%; margin-top: 0px;">
    <label for="exampleFormControlInput1">Дата рождения</label>
    <input type="date" class="form-control" placeholder="Дата рождения" aria-label="Recipient's username"
      v-model="birtday" aria-describedby="basic-addon2">
  </div>
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">О себе</label>
    <input type="text" class="form-control" placeholder="О себе" aria-label="Recipient's username" v-model="myself"
      aria-describedby="basic-addon2">
  </div>

  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Желаемая зарплата</label>
    <div class="input-group mb-3">
    <input type="number" class="form-control" placeholder="Желаемая зарплата" aria-label="Recipient's username"
      v-model="cash" aria-describedby="basic-addon2">
      <span class="input-group-text" id="basic-addon2">руб.</span>
     </div> 
  </div>

  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Ключевые навыки</label>
    <input type="text" class="form-control" placeholder="Ключевые навыки" aria-label="Recipient's username"
      v-model="skills" aria-describedby="basic-addon2">
  </div>

  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Ссылка на фото</label>
    <input type="text" class="form-control" placeholder="Ссылка на фото" aria-label="Recipient's username"
      v-model="photo" aria-describedby="basic-addon2">
  </div>

  </div >





  
  <div style=" width: 30%; "> 
    
 
     
  
 
  <div class="form-group" style=" width: 90%; margin-top: 0px;">
    <label for="exampleFormControlInput1">Образование</label>
      <select class="form-select" aria-label="Default select example" v-model="edu" @click="see">
        <option disabled value="">Уровень</option>
        <option>Среднее</option>
        <option>Среднее специальное</option>
        <option>Неоконченное высшее</option>
        <option>Высшее</option>

    </select>
  </div>

  <div v-show="visible">
    <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Учебное заведение</label>
    <input type="text" class="form-control" placeholder="Учебное заведение" aria-label="Recipient's username"
      v-model="place" aria-describedby="basic-addon2">
  </div>
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Факультет</label>
    <input type="text" class="form-control" placeholder="Факультет" aria-label="Recipient's username"
      v-model="facultet" aria-describedby="basic-addon2">
  </div>
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Специализация</label>
    <input type="text" class="form-control" placeholder="Специализацияо" aria-label="Recipient's username"
      v-model="specifical" aria-describedby="basic-addon2">
  </div>

  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Год окончания</label>
    <input type="text" @keydown.space.prevent class="form-control" maxlength=4 placeholder="YYYY" @keypress="onlyNumbers($event)" aria-label="Recipient's username"
      v-model="yaer_edu_end" aria-describedby="basic-addon2">
  </div>

  </div>
  <a href="#" @click="visible_add=!visible_add" >{{visible_add?'Скрыть ✕':'Указать еще одно место обучения'}}</a>

  <div v-show="visible_add">
    <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Учебное заведение</label>
    <input type="text" class="form-control" placeholder="Учебное заведение" aria-label="Recipient's username"
      v-model="place" aria-describedby="basic-addon2">
  </div> aa
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Факультет</label>
    <input type="text" class="form-control" placeholder="Факультет" aria-label="Recipient's username"
      v-model="facultet" aria-describedby="basic-addon2">
  </div>
  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Специализация</label>
    <input type="text" class="form-control" placeholder="Специализацияо" aria-label="Recipient's username"
      v-model="specifical" aria-describedby="basic-addon2">
  </div>

  <div class="form-group" style=" width: 90%; margin-top: 20px;">
    <label for="exampleFormControlInput1">Год окончания</label>
    <input type="text" @keydown.space.prevent class="form-control" maxlength=4 placeholder="YYYY" @keypress="onlyNumbers($event)" aria-label="Recipient's username"
      v-model="yaer_edu_end" aria-describedby="basic-addon2">
  </div>

  

  </div>
  
 
  </div>
</div>


<div style="display: flex;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  margin-top: 10px;">
  <div style=" width: 30%; ">
    <button v-on:click="create" class="btn btn-light">Создать резюме</button>
  </div>
</div>


<div class="card mb-3" style="max-width: 100%;" v-show="but">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="photo" alt="..." style="width: 100%;">
      
      
    </div>
    <div class="col-md-8">

        <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h7 class="card-title">{{ profession }}</h7>
      <p class="card-text">{{ myself }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Телефон: {{ number }}</li>
      <li class="list-group-item">Email: {{ email }}</li>
      <li class="list-group-item">Дата рождения: {{ birtday }}</li>
      <li class="list-group-item">Город: {{ city }}</li>
      <li class="list-group-item">Образование: {{ edu }}</li>
        <li v-show="visible" class="list-group-item">Учебное заведение: {{  place }}</li>
        <li v-show="visible" class="list-group-item">Факультет: {{ facultet }}</li>
        <li v-show="visible" class="list-group-item">Специализация: {{ specifical }}</li>
        <li v-show="visible" class="list-group-item">Год окончания: {{ yaer_edu_end }}</li>

      <li class="list-group-item">Желаемая зарплата: {{ cash }} руб.</li>
      <li class="list-group-item">Ключевые навыки: {{ skills }}</li>
      <li class="list-group-item">Статус: {{ status }}</li>
      
    </ul>
       
    </div>
  </div>
</div>

  


  <p style="margin-top: 30px;"></p>
</template>

<script>
/**  ../photo/20230921_090202-02.jpeg
 * v-bind:src='require("../photo/20230921_090202-02.jpeg")'
*/

export default {

  name: 'App',
  components: {

  },
  computed:{
       
    },
  data() {
    return {
      profession: ' ', city: ' ', photo:' ', name: ' ', number: ' ',
      email: ' ', birtday: ' ', edu: ' ', cash: ' ', skills: ' ', 
      myself: ' ', place:' ', visible: false, yaer_edu_end:' ', facultet:' ', 
      specifical:' ',but:false, status: 'Новый',visible_add:false
    }
  },
  methods:{
    onlyNumbers(event){
      let keyCode =event.keyCode ? event.keyCode: event.which;
      if(keyCode<48 || keyCode>57){
        event.preventDefault();
      }},

      validatePhoneNumber(){
      if(this.number.length>5){
        this.isValidPhoneNumber = true;
      }
      else{
        this.isValidPhoneNumber = false;
      }
      
    },

    see(){
   
      if(this.edu=="Среднее специальное"||this.edu=="Неоконченное высшее"||this.edu=="Высшее"){
        this.visible = true;
      }
      else{
        this.visible = false;
      }
      return this.visible;
    },

    create(){
      this.but=true

    },
    add(){
      this.visible_add=true

    }

  }
  
 
}

</script>

<style>
.invalid{
  border: 2px solid red;
}

.valid{
  border: 2px solid green;
}
</style>


