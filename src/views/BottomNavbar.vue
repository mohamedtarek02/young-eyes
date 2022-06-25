<template>
  <footer>
    <div class="d-flex justify-center">
      <v-btn :href="icon.link" text v-for="icon in icons" :key="icon.name">
        <v-icon class="white--text" :class="icon.hover">{{ icon.name }}</v-icon>
      </v-btn>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: "mdi-apple",
          link: " https://apps.apple.com/eg/app/young-eyes/id1618728317",
          hover: "appstore-icon",
        },
        {
          name: "mdi-google-play ",
          link: " https://play.google.com/store/apps/details?id=com.enterp.youngeyes",
          hover: "playstore-icon",
        },
        {
          name: "mdi-instagram ",
          link: "https://instagram.com/youngeyes_?",
          hover: "instgram-icon ",
        },
        {
          name: "mdi-facebook ",
          link: "https://www.facebook.com/profile.php?id=100076240734570",
          hover: "face-icon",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
footer {
  width: 100% !important;
  height: 3rem;
  background-color: #000000;
  position: fixed;
  bottom: 0;
}

li {
  list-style: none;
  display: inline-block;
}
i {
  font-size: 20px;
  color: white;
  margin: 0 7px;
}

.face-icon:hover {
  color: #4267b2 !important;
}

.instgram-icon:hover {
  color: #c80035 !important;
}

.playstore-icon:hover {
  color: green !important;
}

.appstore-icon:hover {
  color: #4267b2 !important;
}
</style>
