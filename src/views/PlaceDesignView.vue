<template>
  <div class="min-h-screen bg-[#f8f8f8] font-NotoSans">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 py-10 sticky top-0 z-10">
      <div class="max-w-[1400px] mx-auto flex justify-between items-end">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-2">Android - 플레이스 화면 디자인</h1>
          <p class="text-lg text-gray-500">VP UI/UX Design Project</p>
        </div>
        <router-link to="/" class="text-gray-900 font-bold hover:text-[#dd2f20] transition-colors flex items-center gap-2">
          <font-awesome-icon icon="chevron-right" class="rotate-180 text-sm"/>
          Back to Portfolio
        </router-link>
      </div>
    </header>

    <!-- Project Info -->
    <section class="max-w-[1400px] mx-auto py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold mb-6 inline-block">Overview</h2>
          <p class="text-2xl leading-relaxed text-gray-700">
            안드로이드 기반의 '플레이스' 서비스 고도화를 위한 UI/UX 디자인 시안입니다. 
            사용자 편의성을 최우선으로 고려하여 직관적인 인터페이스와 깔끔한 레이아웃을 적용하였습니다. 
            관리자 페이지와 앱 내 주요 서비스 화면을 포함한 통합 디자인 가이드를 구축했습니다.
          </p>
        </div>
        <div class="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Role</h3>
            <p class="text-lg font-medium">UI/UX Design, App Design</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Tools</h3>
            <p class="text-lg font-medium">Adobe XD, Photoshop</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Period</h3>
            <p class="text-lg font-medium">2023.08 - 2023.10</p>
          </div>
        </div>
      </div>

      <!-- Design Items -->
      <div class="space-y-64">
        <div v-for="(design, index) in designItems" :key="index" class="design-item">
          <div class="mb-12 text-center">
            <span class="text-[#dd2f20] font-bold text-sm tracking-widest uppercase mb-4 block">0{{ index + 1 }}. {{ design.category }}</span>
            <h3 class="text-4xl font-bold mb-6">{{ design.title }}</h3>
            <p class="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
              {{ design.description }}
            </p>
          </div>

          <!-- Slider Layout -->
          <div v-if="design.layout === 'slider'" class="relative group">
            <div 
              class="flex overflow-x-auto gap-8 pb-8 px-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none items-start" 
              style="scroll-padding-left: 2rem; scroll-padding-right: 2rem;"
              @mousedown="startDragging"
              @mouseleave="stopDragging"
              @mouseup="stopDragging"
              @mousemove="onDrag"
            >
               <div v-for="(img, imgIndex) in design.images" :key="imgIndex" 
                    class="snap-center flex-shrink-0 bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 pointer-events-none"
                    :class="design.imageSize ? design.imageSize : 'w-[400px] md:w-[600px]'">
                  <img :src="img" :alt="design.title" class="w-full h-auto block">
               </div>
            </div>
          </div>

          <!-- Default (Single/Column) Layout -->
          <div v-else class="flex flex-col items-center gap-20">
            <div v-for="(img, imgIndex) in design.images" :key="imgIndex" class="w-[70%] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 transition-transform duration-500 hover:scale-[1.01]">
              <img :src="img" :alt="design.title" class="w-full h-auto block">
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PlaceDesignView',
  data() {
    return {
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      designItems: [
        {
          title: '앱 서비스 인터페이스',
          category: 'APP UI',
          layout: 'slider',
          images: [
            '/Portfolio/design/vp/place/place-img01.png',
            '/Portfolio/design/vp/place/place-img02.png',
            '/Portfolio/design/vp/place/place-img03.png',
            '/Portfolio/design/vp/place/place-img04.png'
          ],
          description: '메인 대시보드부터 상세 서비스, 검색 필터링까지 이어지는 일관된 사용자 경험을 설계했습니다.'
        },
        {
          title: '통합 관리자 웹 대시보드',
          category: 'WEB ADMIN',
          layout: 'slider',
          imageSize: 'w-[800px]',
          images: [
            '/Portfolio/design/vp/place/place-admin-img.png'
          ],
          description: '앱 서비스의 데이터를 효율적으로 관리하기 위한 웹 기반 어드민 패널입니다.'
        }
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    startDragging(e) {
      this.isDown = true;
      const slider = e.currentTarget;
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    },
    stopDragging() {
      this.isDown = false;
    },
    onDrag(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const slider = e.currentTarget;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) * 2; // 스크롤 속도 조절
      slider.scrollLeft = this.scrollLeft - walk;
    }
  }
}
</script>

<style scoped>
.design-item {
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>