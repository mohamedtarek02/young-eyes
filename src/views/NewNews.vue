<template>
  <div class="home">
    <v-container>
      <v-row no-gutters flex-wrap>
        <v-col cols="0" sm="0" md="1"> </v-col>
        <v-col sm="12" md="5">
          <v-card
            class="mx-auto pa-2 ma-4"
            max-width="344"
            min-height="360px"
            elevation="3"
            route
            to="/monorail"
          >
            <v-img src="../assets/train.jpg"></v-img>
            <h2 class="mt-3">
              المونوريل من القاهرة والجيزة إلى العاصمة الإدارية
            </h2>
          </v-card>
        </v-col>
        <v-col sm="12" md="5" class="">
          <v-card
            class="mx-auto pa-2 mx-4 mt-4 mb-12"
            max-width="344"
            min-height="355px"
            elevation="3"
            route
            to="/student-trips"
          >
            <v-img src="../assets/trip1.jpg" height="185px"></v-img>
            <h2 class="mt-3">تحقيق الرحلات الطلابية</h2>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
