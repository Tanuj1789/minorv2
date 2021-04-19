import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './firebase';
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Sospage from './components/Sospage.vue'
import Login from './components/Login.vue'
import Booksession from './components/Booksession.vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(firestorePlugin);

const routes=[
  { path: '/',
    component:Home
  },
  { path: '/Login',
    component:Login
  },
  { path: '/Sospage',
    component:Sospage
  },
  { path: '/Booksession',
    component:Booksession
  },
];
const router= new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  data: {loggedin:false},
  router,
  render: h => h(App),
}).$mount('#app')
