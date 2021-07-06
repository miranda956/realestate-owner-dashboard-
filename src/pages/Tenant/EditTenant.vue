

<template>

	<div class="signup-form">
    <form >
		<h2>Realproperty</h2>
		<p class="hint-text">Update Tenant .</p>
        <div class="form-group">
			<input type="text" class="form-control" name="firstName" placeholder="firstName" v-model="currentstaff.f_name" />
        </div>
		<div class="form-group">
		<input type="text" class="form-control" name="lastName" placeholder="lastName" v-model="currentstaff.l_name"/>
		</div>
        <div class="form-group">
        	<input type="text" class="form-control" name="email" placeholder="Email" v-model="currentstaff.email"/>
        </div>
		<div class="form-group">
            <input type="text" class="form-control" name="contact" placeholder="contact"  v-model="currentstaff.contact">
        </div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" @click="updatestaff" >UpateStaff</button>
        </div>
    </form>
</div>
</template>

<script>
import staffDataService from "../../services/adminDataservice";
export default {

    name:'tenant-edit',
    data () {
    return {

      currenttenant: {},
      message: ''
    }
  },

  methods: {
    gettenant(id) {
      staffDataService.get(id)
        .then(response => {
          this.currentstaff = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateprofile() {
      var data = {
        id: this.currentstaff.id,
        f_name: this.currentstaff.f_name,
        l_name: this.currentstaff.l_name,
        email: this.currentrstaff.email,
        contact:this.currentstaff.contact,
      };

      staffDataService.update(this.currentstaff.id, data)
        .then(response => {

          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatestaff() {
      staffDataService.update(this.currentstaff.id, this.currentstaff)
        .then(response => {
          console.log(response.data);
          this.message = ' updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
}
</script>


