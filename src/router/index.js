import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaceDesignView from '../views/PlaceDesignView.vue'
import SafetyPayDesignView from '../views/SafetyPayDesignView.vue'
import SpCareDesignView from '../views/SpCareDesignView.vue'

const router = createRouter({
  // GitHub Pages 배포 시 hash 모드가 안전함 (history 모드는 서버 설정 필요)
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/place-design',
      name: 'place-design',
      component: PlaceDesignView
    },
    {
      path: '/safetypay-design',
      name: 'safetypay-design',
      component: SafetyPayDesignView
    },
    {
      path: '/spcare-design',
      name: 'spcare-design',
      component: SpCareDesignView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
