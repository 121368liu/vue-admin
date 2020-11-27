import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //路由重定向
    redirect:'login'
  }, {
    path: "/login",
    name: "Login",
    //使用箭头函数将文件指向组件
    component: ()=>import("../views/Login/index.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
