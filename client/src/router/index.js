import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/createQuery',
    name: 'CreateQuery',
    component: () => import('../views/CreateQuery.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/queries',
    name: 'Queries',
    component: () => import('../views/Queries.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/myqueries/:userName',
    name: 'MyQueries',
    component: () => import('../views/MyQueries.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/query/:queryId',
    name: 'Query',
    component: () => import('../views/Query.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/myquery/:queryId',
    name: 'MyQuery',
    component: () => import('../views/MyQuery.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound'),
    meta: {
      requiresAll: true
    }
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// route protection
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isLoggedIn) {
      // Redirect to Home Page
      next('/');
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    if(store.getters.isLoggedIn) {
      // Redirect to Queries page
      next('/queries');
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresAll)) {
      next();
  }
});

export default router;
