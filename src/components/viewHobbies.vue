<template>
  <div>
        <div>
            <template v-if="hobbiesArray.length == 0">
                <div class="row" id="jumbotronDiv" >
                    <div class="col">
                        <div class="jumbotron">
                            <h1 class="display-4">Hello, {{userDetails.firstName}}</h1>
                            <p class="lead">Welcome to your hobby stop.</p>
                            <hr class="my-4">
                            <p>You have not created any hobbies yet. Please click the button below to create one</p>
                            <p class="lead">
                                <a class="btn btn-primary btn-lg" @click="loadCreateHobbyView" role="button">Create New Hobby</a>
                            </p>
                        </div>
                    </div>
                </div>
            </template>
            
            <div class="row" v-if="hobbiesArray.length != 0">
                <div class="col-2"></div>
                <div class="col">
                    <div  v-if="errorString != ''" class="alert alert-warning" role="alert" style="text-align: center">
                        Please try again, {{errorString}}
                    </div>
                    <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hobby Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(hobby, index) in hobbiesArray" :key="index">
                            <th>{{index + 1}}</th>
                            <td >{{hobby.name}}</td>
                            <td><button class="btn" @click=loadEditView(index,hobby.id)>Edit Hobby</button></td>
                            <td><button class="btn" @click=deleteHobby(index,hobby.id)>Delete Hobby</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                
                <div class="col-2"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            hobbiesArray: [],
            userDetails: '',
            errorString: ''
        }
    },
    methods: {
        loadCreateHobbyView(){
            this.$router.push('/userProfile/createHobby');
        },
        deleteHobby(index,hobbyId){
            this.$http.delete('https://hobstopbackend.herokuapp.com/hobby/deleteHobby?id=' + hobbyId)
                .then(response => {
                    console.log(response);
                    this.hobbiesArray.splice(index, 1)
                }, error => {
                    console.log(error);
                    this.errorString =  error.bodyText;
                });
        },
        loadEditView(index,hobbyId){
            this.$router.push('/userProfile/editHobbies?id=' + hobbyId);
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

        this.$http.get('https://hobstopbackend.herokuapp.com/hobby/getUserHobbies?userId=' + this.$session.get('userId'))
            .then(response => {
                console.log(response);
                this.hobbiesArray = response.body;
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
    table{
        text-align: center;
        background-color: white;
        border-radius: 8px;
        margin-top: 5%;
    }
    #jumbotronDiv{
        text-align: center;
    }
    .jumbotron{
        margin-top: 5%;
    }
</style>
