<template>
    <div class="row">
        <div class="col"></div>
        <div class="col-5">
            <!-- <div v-if="errorString != '' " class="alert alert-warning" role="alert" style="text-align: center">
                Please try again, {{errorString}}
            </div> -->
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Edit Hobby" v-model="name">
                </div>

                <div><button type="submit" class="btn btn-primary" @click="editHobby">Submit</button></div>
                
            </form>
            
        </div>
        <div class="col"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hobbiesArray: [],
            name: '',
            errorString: ''
        }
    },
    methods: {
        editHobby(){
            this.$http.put('https://hobstopbackend.herokuapp.com//hobby/editHobby?id='+ this.$route.query.id + '&name=' + this.name)
                .then(response => {
                    console.log(response);
                    this.$router.push('/userProfile')
                }, error => {
                    console.log(error);
                    this.errorString =  error.bodyText;
                });
        }
    },
    beforeCreate(){
        if (!this.$session.exists()) {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    form{
        text-align: center;
        margin-top: 10%;
    }
    button{
        color: white;
        background-color: #2c3a49;
        border: 1px solid white;
    }
</style>
