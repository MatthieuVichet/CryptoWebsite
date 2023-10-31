import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonetizationView from '../views/MonetizationView.vue'
import NewsView from '../views/NewsView.vue'
import GuideView from '../views/GuideView.vue'
import AnalysisView from '../views/AnalysisView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/monetization',
    name: 'monetization',
    component: MonetizationView
  },
  {
    path: '/latestNews',
    name: 'latestNews',
    component: NewsView
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: AnalysisView
  },
  {
    path: '/resources',
    name: 'resources',
    component: ResourcesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
