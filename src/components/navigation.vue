<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1 id="welcomeText">Hobstop</h1>
            </div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark col-12">
                <div class="navbar-header">
                    <span class="navbar-brand">Welcome {{userDetails.firstName}} {{userDetails.lastName}}</span>
                </div>
                <ul class="navbar-nav">
                    <router-link tag="li" to="/userProfile" class="nav-item" active-class="active" exact><a class="nav-link">View Hobbies</a></router-link>
                    <router-link tag="li" to="/userProfile/createHobby" class="nav-item" active-class="active"><a class="nav-link">Create New Hobby</a></router-link>
                    <li class="nav-item"><a class="nav-link" @click="logUserOut">Log Out</a></li>
            </ul>
            </nav>
        </div>  
    </div>
    
</template>

<script>
export default {
  data() {
      return{
          userDetails: ''
      }
  },
  methods: {

      logUserOut(){
          this.$session.destroy();
          this.$router.push('/');
      }
  },
  beforeCreate(){
    this.$http.get('https://hobstopbackend.herokuapp.com/user/getUserDetails?userId=' + this.$session.get('userId'))
    .then(response => {
        console.log(response);
        this.userDetails = response.body;
    })
    .catch(error => {
        console.log(error);
    });
    if (!this.$session.exists()) {
            this.$router.push('/');
    }
  }
}
</script>

<style scoped>
    #welcomeText{
        text-align: center;
        color: white;
        margin: 2%;
        font-size: 35px;
        font: 'Arizonia'
    }
    .bg-dark {
        background-color: #272b30!important;
    }
    li { cursor: pointer; }
</style>


