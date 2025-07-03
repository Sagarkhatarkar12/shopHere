import { createRouter, createWebHistory } from 'vue-router';

// Import page components (not App.vue!)
import HomeView from '../components/CardContainer.vue';
import Product from '../components/SingleProduct.vue'
import Categories from "../components/product_cate.vue"
import cardProduct from "../components/cateProduct.vue"
import account from '../components/account/account.vue'; 

// import AboutView from '../views/AboutView.vue'; // example
import Login from '../components/account/Login.vue'; // example
// import { c } from 'vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf';
import { useAuthStore } from '../store/auth'; // 🟡 Import inside guard to avoid circular dependency
import { storeToRefs } from 'pinia';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path:'/product/:id', component:Product},
  { path:'/Categories',component:Categories},
  { path:'/account', name:'Account', component:account,
      meta: { requiresAuth: true }, 
  },
  { path:'/Login', name:'Login',component:Login },
  , { path: '/categories/:categoryName', name: 'CategoryProducts', component:cardProduct }
  // { path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Global Navigation Guard

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);
 if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login');
  }  if (to.path === '/login' && isAuthenticated.value) {
    next('/account'); 
  }
  else {
    next(); // ✅ Always call next()
  }
    return true
});
export default router;
