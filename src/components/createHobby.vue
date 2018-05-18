<template>
    <div class="row">
        <div class="col"></div>
        <div class="col-5">
            <div  v-if="errorString != ''" class="alert alert-warning" role="alert" style="text-align: center">
                Please try again, {{errorString}}
            </div>
            <div v-if="successMessage != ''" class="alert alert-success" role="alert">
                {{successMessage}}
            </div>
            <form>
                <div class="form-group">
                    <label>Hobby Name</label>
                    <input type="text" class="form-control" placeholder="Enter Hobby Name" v-model="name">
                </div>

                <div id="submitHobbyButton"><button type="submit" class="btn btn-primary" @click.prevent="createNewHobby">Submit</button></div>
            </form>
        </div>
        <div class="col"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            successMessage: '',
            errorString: ''
        }
    },
    methods: {
        createNewHobby(){
            this.$http.post('https://hobstopbackend.herokuapp.com/hobby/createNewHobby', {name: this.name, userId: this.$session.get('userId')})
            .then(response => {
                console.log(response);
                this.successMessage = "Hobby created successfully!";
            }, error => {
                console.log(error);
                this.errorString =  error.bodyText;
            });
        
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
     #newHobbyHeader{
        text-align: center;
    }
    button{
        color: white;
        background-color: #2c3a49;
        border: 1px solid white;
    }
    #submitHobbyButton{
        text-align: center;
    }
    .col-5{
        margin-top: 5%;
        color: white;
        font: 'Arizonia'
    }
</style>
