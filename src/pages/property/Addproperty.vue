


<template>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstName">firstName</label>
      <input type="text" class="form-control" id="f_name" v-model="landlord.f_name">
    </div>
    <div class="form-group col-md-6">
      <label for="l_name">LastName</label>
      <input type="text" class="form-control" id="l_name" v-model="landlord.password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Email</label>
    <input type="email" class="form-control" id="email" placeholder="example@gmail.com" v-model="landlord.f_name">
  </div>
  <div class="form-group">
    <label for="inputAddress2">lastName</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="LastName" v-model="landlord.l_name">
  </div>
  <div class="form-group">
  </div>
  <button type="submit" class="btn btn-primary" @click="saveAdmin">ADD</button>
</form>
</template>
<script>
import LandlordDataservice from "../../services/LandlordDataservice";


export default {
    name:'landlord-new',
    data () {
    return {
      landlord: {
        id: null,
        f_name: '',
        l_name: '',
        email: '',
        contact:'',
        gender:'',
        city:'',
        password:'',
        message:''

      }
    }
  },

   methods: {
    saveLandlord() {
      var data = {
    f_name:this.landlord.f_name,
		l_name:this.landlord.l_name,
    email:this.landlord.email,
    contact:this.landlord.contact,
    gender:this.landlord.gender,
    city:this.landlord.city,
		pwd:this.landlord.pwd,
      };
      LandlordDataservice.create(data)
        .then(response => {
          this.landlord.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.message='success'
        })
        .catch(e => {
          console.log(e);
        });
	},
    newstaff() {
      this.submitted = false;
      this.landlord = {};
    }
  }
}

</script>



