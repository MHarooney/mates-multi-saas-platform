import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';
import LMSCourses from '@/views/LMS/Courses.vue';
import HREmployees from '@/views/HR/Employees.vue';
import EcommerceProducts from '@/views/Ecommerce/Products.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/lms/courses', component: LMSCourses },
  { path: '/hr/employees', component: HREmployees },
  { path: '/ecommerce/products', component: EcommerceProducts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
