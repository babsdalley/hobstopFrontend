<template>
  <div class="row">
      <div class="col"></div>
      <div class="col-5">
        <h1 id="welcomeText"> Welcome to Hobstop!</h1>
        <div id="buttons">
            <router-link to='/signIn' tag="button" class="btn btn-primary"  exact><a>Sign In</a></router-link>
            <router-link to='/signUp' tag="button" class="btn btn-primary" exact><a>Sign Up</a></router-link>
        </div>
        
      </div>
        <div class="col"></div>
  </div>
</template>

<script>
export default {
  beforeCreate: function () {
    if (this.$session.exists()) {
      this.$router.push('/userProfile');
    }
  }
}
</script>

<style scoped>
    #welcomeText{
        text-align: center;
    }
    #buttons{
        text-align: center;
    }
    button{
        color: white;
        background-color: #2c3a49;
        border: 1px solid white;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .col-5{
        margin-top: 20%;
        color: white;
        font: 'Arizonia'
    }
</style>


