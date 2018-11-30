import Vue from 'vue';
import Router from 'vue-router';
import Home from "@@/views/Home";
import List from "@@/views/List";

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
