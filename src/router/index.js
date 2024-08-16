import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProjectView from '../views/ProjectView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import EducationView from '@/views/EducationView.vue'
// import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
  
    
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
   
    {
      path: '/Education',
      name: 'Education',
      component: EducationView
    },
    // {
    //   path: '/products',
    //   name: 'products',
    //   component: ProductsView
    // },
    // {
    //   path: '/product/:id',
    //   name: 'productsDetail',
    //   component: ProductDetail
    // },
    // {                     
    //   path:'/product/:id',
    //   name: 'Product',
    //   component: Productsdetail
    // }
    // {
    //   path: '/:pathMatch(.*)* ',
    //   component:
    // }
    
  ]
})
// {name: 'prodctDtail', params :{id:el.id};
// <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

// let id = this.$route.params.id
// .get("http://local/api/sd/make/get/" + id)


export default router
