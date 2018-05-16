<template>
    <div>
        <headerView></headerView>
        <router-view></router-view>
    </div>
</template>

<script>
import header from './navigation.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components:{
      headerView : header
  },
    beforeCreate: function () {
        if (!this.$session.exists()) {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
