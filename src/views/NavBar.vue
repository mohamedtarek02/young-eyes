<template>
  <header>
    <nav>
      <div class="d-flex justify-center">
        <span class="mt-4">Media</span>

        <img src="../logo.gif" alt="" />

        <span class="mt-4">Cross</span>
      </div>
    </nav>
    <!-- <li>
      <router-link to="/news"> الأخبار </router-link>
    </li> -->
  </header>
</template>

<script>
export default {
  computed: {},
  methods: {},
};
</script>
<style scoped>
header {
  width: 100% !important;
  height: 4rem;
  background-color: #000000;
}
span {
  color: white;
  font-size: 25px;
  font-family: fantasy;
}

img {
  width: 77px;
  height: 77px;
}
</style>
