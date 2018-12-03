import Vue from 'vue';
import Router from 'vue-router';
import Home from "@@/themes/default/pages/Home";
import List from "@@/themes/default/pages/List";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
