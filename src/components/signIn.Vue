<template>
  <div class="row">
      <div class="col"></div>
      <div class="col-5">
        <h2 id="signInHeader">Sign In</h2>
        <div v-if="errorString != '' " class="alert alert-warning" role="alert" style="text-align: center">
            Please try again, {{errorString}}
        </div>
        <form>
            <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" v-model="user.password" placeholder="Password">
            </div>

            <div id="signInButton"><button type="submit" class="btn btn-primary" @click.prevent="signInUser">Submit</button></div>
            
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
            userId: '',
            user:{
                email: '',
                password: ''
            }
        }
    },
    methods:{
        signInUser(){
            this.$http.put('https://hobstopbackend.herokuapp.com/user/signin', this.user)
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
     #signInHeader{
        text-align: center;
    }
    button{
        color: white;
        background-color: #2c3a49;
        border: 1px solid white;
    }
    #signInButton{
        text-align: center;
    }
    .col-5{
        margin-top: 12%;
        color: white;
        font: 'Arizonia'
    }
</style>


