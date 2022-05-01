import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Teacher from '../views/app/teacher/dashboard.vue';
import Admin from '../views/app/admin/dashboard.vue';
import Student from '../views/app/student/dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/teacher-dashboard',
    name: 'teacher-dashboard',
    component: Teacher,
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: Admin,
  },
  {
    path: '/student-dashboard',
    name: 'student-dashboard',
    component: Student,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
