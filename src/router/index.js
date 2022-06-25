import Vue from "vue";
import VueRouter from "vue-router";
import NewNews from "../views/NewNews.vue";
import MonorialTrain from "../views/MonorialTrain.vue";
import StudentsTrip from "../views/StudentsTrip.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/news",
    name: "News",
    component: NewNews,
  },

  {
    path: "/monorail",
    name: "train",
    component: MonorialTrain,
  },
  {
    path: "/student-trips",
    name: "trips",
    component: StudentsTrip,
  },
  { path: "/:notFound(.*)", component: NewNews },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
