import Vue from 'vue'
import Router from 'vue-router'
import TaskList from 'components/Task/List'
import DashBoard from 'components/Dashboard'
import TaskCreate from 'components/Task/Create'
import TaskDetails from 'components/Task/Details'
import ErrorNotFound from 'components/errors/NotFound'

Vue.use(Router);

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'dashboard',
         component: DashBoard
      },
      {
         path: '/tareas',
         component: TaskList,
         children: [
            {
               path: '',
               name: 'tasks',
               component: {
                  template: '<h3>Por favor selecciona una tarea</h3>'
               }
            },
            {
               path: ':id',
               name: 'task.details',
               component: TaskDetails,
               props: true
            },
            {
               path: 'create',
               name: 'tasks.create',
               component: TaskCreate
            }
         ]
      },
      {
         path: '/404',
         component: ErrorNotFound
      },
      {
         path: '*',
         redirect: '/404'
      }
   ]
});

export default router


