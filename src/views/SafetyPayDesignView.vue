<template>
  <div class="min-h-screen bg-[#f8f8f8] font-NotoSans">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 py-10 sticky top-0 z-10">
      <div class="max-w-[1400px] mx-auto flex justify-between items-end">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-2">스마트안전결제 (Safety Pay)</h1>
          <p class="text-lg text-gray-500">VP Service UX/UI Design</p>
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
            안전하고 간편한 결제를 지원하는 '스마트안전결제' 서비스의 통합 디자인 프로젝트입니다. 
            웹사이트 리뉴얼부터 모바일 앱 UI, 프로모션 이벤트 페이지, 그리고 다양한 배너 광고까지 
            브랜드 아이덴티티를 일관되게 적용하여 사용자 신뢰도를 높이는 데 주력했습니다.
          </p>
        </div>
        <div class="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Role</h3>
            <p class="text-lg font-medium">Web & App Design, Promotion Design</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Tools</h3>
            <p class="text-lg font-medium">Adobe XD, Photoshop, Illustrator</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Period</h3>
            <p class="text-lg font-medium">2022.01 - 2022.12</p>
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
                    :class="design.imageSize ? design.imageSize : 'w-[300px] md:w-[400px]'">
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
  name: 'SafetyPayDesignView',
  data() {
    return {
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      designItems: [
        {
          title: '공식 웹사이트 리뉴얼',
          category: 'WEB UI',
          layout: 'slider',
          imageSize: 'w-[800px]',
          images: [
            '/Portfolio/design/vp/safetypay/homepage-main-img01.png',
            '/Portfolio/design/vp/safetypay/homepage-main-img02.png',
            '/Portfolio/design/vp/safetypay/homepage-sub-img.png'
          ],
          description: '신뢰감을 주는 블루 톤과 깔끔한 타이포그래피를 사용하여 서비스의 가치를 명확히 전달했습니다.'
        },
        {
          title: '모바일 서비스 스크린샷',
          category: 'APP UI',
          layout: 'slider',
          imageSize: 'w-[280px]',
          images: [
            '/Portfolio/design/vp/safetypay/iOS_screenshot_img01.png',
            '/Portfolio/design/vp/safetypay/iOS_screenshot_img02.png',
            '/Portfolio/design/vp/safetypay/iOS_screenshot_img03.png',
            '/Portfolio/design/vp/safetypay/iOS_screenshot_img04.png',
            '/Portfolio/design/vp/safetypay/iOS_screenshot_img05.png'
          ],
          description: '사용자가 서비스를 쉽게 이해하고 가입할 수 있도록 핵심 기능을 강조한 스토어용 스크린샷 디자인입니다.'
        },
        {
          title: '프로모션 및 이벤트 페이지',
          category: 'PROMOTION',
          layout: 'slider',
          imageSize: 'w-[600px]',
          images: [
            '/Portfolio/design/vp/safetypay/eventpage_img01.png',
            '/Portfolio/design/vp/safetypay/eventpage_img02.png',
            '/Portfolio/design/vp/safetypay/eventpageView_img.png'
          ],
          description: '시즌별 혜택을 강조하기 위한 다채로운 디자인 요소가 적용된 이벤트 페이지입니다.'
        },
        {
          title: '결제 솔루션 연동 UI',
          category: 'SERVICE UI',
          layout: 'slider',
          imageSize: 'w-[400px]',
          images: [
            '/Portfolio/design/vp/safetypay/ISP-BCcard-img01.png',
            '/Portfolio/design/vp/safetypay/ISP-KBbank-img01.png'
          ],
          description: '국내 주요 카드사의 결제 모듈과 자연스럽게 어우러지는 서비스 가입 UI입니다.'
        },
        {
          title: '네이버 밴드 광고 배너',
          category: 'AD BANNER',
          layout: 'slider',
          imageSize: 'w-[320px]',
          images: [
            '/Portfolio/design/vp/safetypay/NAVER-BAND-banner01.png',
            '/Portfolio/design/vp/safetypay/NAVER-BAND-banner02.png',
            '/Portfolio/design/vp/safetypay/NAVER-BAND-banner03.png',
            '/Portfolio/design/vp/safetypay/NAVER-BAND-banner04.png'
          ],
          description: '타겟 고객층이 집중된 플랫폼의 특성에 맞춘 퍼포먼스 마케팅용 배너 세트입니다.'
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
