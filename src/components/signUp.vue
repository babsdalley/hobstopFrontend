<template>
  <div class="row">
      <div class="col"></div>
      <div class="col-5">
        <h2 id="signUpHeader">Sign Up</h2>
        <div v-if="errorString != '' " class="alert alert-warning" role="alert" style="text-align: center">
            Please try again, {{errorString}}
        </div>
        <form >
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="Enter First Name" v-model="user.firstName">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Enter Last Name" v-model="user.lastName">
            </div>
            <div class="form-group">
                <label>Phone Number</label>
                <input type="text" class="form-control" placeholder="Enter Phone Number" v-model="user.phoneNumber">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="user.password">
            </div>
            <div id="signUpButton"><button type="submit" class="btn btn-primary" @click.prevent="submitNewUser">Submit</button></div>
            
        </form>
      </div>
        <div class="col"></div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          errorString: '',
          user:{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: ''
          }
      }
  },
  methods:{
      submitNewUser(){
        this.$http.post('https://hobstopbackend.herokuapp.com//user/signup', this.user)
            .then(response => {
                console.log(response);
                this.$session.start();
                this.$session.set('userId', response.bodyText);
                this.$router.push('/userProfile');
            }, error => {
                console.log(error);
                this.errorString =  error.bodyText;
            });
        
      }
  },
    beforeCreate: function () {
        if (this.$session.exists()) {
            this.$router.push('/userProfile');
        }
    }
}
</script>

<style scoped>
     #signUpHeader{
        text-align: center;
    }
    button{
        color: white;
        background-color: #2c3a49;
        border: 1px solid white;
    }
    #signUpButton{
        text-align: center;
    }
    .col-5{
        margin-top: 5%;
        color: white;
        font: 'Arizonia'
    }
</style>


