<template>
  <v-app>
    <div id="app">
      <nav-bar
       
      ></nav-bar>
      <!-- <u-animate-container> -->
      <!-- <u-animate
          name="bounceIn"
          delay="0s"
          duration="1s"
          :iteration="1"
          :offset="0"
          :begin="false"
        > -->
      <router-view />
      <!-- </u-animate> -->
      <!-- </u-animate-container> -->
      <bottom-navbar></bottom-navbar>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./views/NavBar.vue";
import BottomNavbar from "./views/BottomNavbar.vue";
// import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  components: {
    NavBar,
    BottomNavbar,
    // UAnimateContainer,
    // UAnimate,
  },
};
</script>
<style></style>
