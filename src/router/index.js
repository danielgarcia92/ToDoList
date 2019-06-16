import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from 'components/Dashboard'
import Tasks from 'components/Task/Tasks'

Vue.use(Router);

const router = new Router({
   routes: [
      {
         path: '/',
         component: DashBoard
      },
      {
         path: '/tasks',
         component: Tasks
      }
   ]
});

export default router

