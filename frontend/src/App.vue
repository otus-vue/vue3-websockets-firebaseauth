<template>
  <Navigation></Navigation>
  <router-view></router-view>
</template>

<script>
import Navigation from "./views/general/Navigation";

export default {
  components: {
    Navigation,
  },
  mounted() {
    console.log(this.$firebase)
  }
};
</script>
