import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Font Awesome 라이브러리 설정
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faArrowDown, 
  faHeart, 
  faPlus, 
  faEnvelope,
  faChevronRight, 
  faHandPointer,
  faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'

// 사용할 아이콘을 라이브러리에 추가
library.add(
  faArrowDown, 
  faHeart, 
  faPlus, 
  faEnvelope,
  faChevronRight,
  faHandPointer,
  faArrowRightLong
)

const app = createApp(App)

// 'font-awesome-icon' 컴포넌트를 전역으로 등록
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
