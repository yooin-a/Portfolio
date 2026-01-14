<template>
  <div class="min-h-screen bg-[#f8f8f8] font-NotoSans">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 py-10 sticky top-0 z-10">
      <div class="max-w-[1400px] mx-auto flex justify-between items-end">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-2">SP Care 서비스 디자인</h1>
          <p class="text-lg text-gray-500">VP Affiliate Service Design</p>
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
            주요 카드사 및 금융사와 제휴하여 제공하는 프리미엄 케어 서비스(SP Care) 디자인 프로젝트입니다. 
            KB국민카드, 롯데카드, 신한카드 등 각 제휴사의 브랜드 가이드라인을 준수하면서도 
            SP Care만의 혜택을 명확하게 전달하는 상세 페이지와 가입 프로세스를 구축했습니다.
          </p>
        </div>
        <div class="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Role</h3>
            <p class="text-lg font-medium">Service UI Design, Editorial Design</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Tools</h3>
            <p class="text-lg font-medium">Photoshop, Illustrator</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-400 uppercase text-sm tracking-wider mb-2">Period</h3>
            <p class="text-lg font-medium">2022.05 - 2023.05</p>
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
          <div class="relative group">
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
                    :class="design.imageSize ? design.imageSize : 'w-[400px]'">
                  <img :src="img" :alt="design.title" class="w-full h-auto block">
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SpCareDesignView',
  data() {
    return {
      isDown: false,
      startX: 0,
      scrollLeft: 0,
      designItems: [
        {
          title: 'KB국민카드 제휴 케어 서비스',
          category: 'AFFILIATE UI',
          layout: 'slider',
          images: [
            '/Portfolio/design/vp/spcare/kbCare-img01.png',
            '/Portfolio/design/vp/spcare/kbCare-img02.png',
            '/Portfolio/design/vp/spcare/kbCare-img03.png',
            '/Portfolio/design/vp/spcare/kbCare-img04.png',
            '/Portfolio/design/vp/spcare/kbCare-img05.png',
            '/Portfolio/design/vp/spcare/kbCare-img06.png',
            '/Portfolio/design/vp/spcare/kbCare-img07.png',
            '/Portfolio/design/vp/spcare/kbCare-img08.png',
            '/Portfolio/design/vp/spcare/kbCare-img09.png',
            '/Portfolio/design/vp/spcare/kbCare-img10.png',
            '/Portfolio/design/vp/spcare/kbCare-img11.png',
            '/Portfolio/design/vp/spcare/kbCare-img12.png',
            '/Portfolio/design/vp/spcare/kbCare-img13.png',
            '/Portfolio/design/vp/spcare/kbCare-img14.png',
            '/Portfolio/design/vp/spcare/kbCare-img15.png',
            '/Portfolio/design/vp/spcare/kbCare-img16.png',
            '/Portfolio/design/vp/spcare/kbCare-img17.png',
            '/Portfolio/design/vp/spcare/kbCare-img18.png',
            '/Portfolio/design/vp/spcare/kbCare-img19.png'
          ],
          description: 'KB금융의 정체성을 담은 옐로우 포인트 컬러를 활용하여 신뢰감 있는 금융 케어 서비스 UI를 구현했습니다.'
        },
        {
          title: '신한카드 제휴 케어 서비스',
          category: 'AFFILIATE UI',
          layout: 'slider',
          images: [
            '/Portfolio/design/vp/spcare/shinhanCare-img01.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img02.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img03.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img04.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img05.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img06.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img07.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img08.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img09.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img10.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img11.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img12.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img13.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img14.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img15.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img16.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img17.png',
            '/Portfolio/design/vp/spcare/shinhanCare-img18.png'
          ],
          description: '신한카드의 블루 톤을 기반으로, 모바일 환경에서 가독성이 뛰어난 텍스트 배치와 직관적인 가입 프로세스를 설계했습니다.'
        },
        {
          title: '롯데카드 제휴 케어 서비스',
          category: 'AFFILIATE UI',
          layout: 'slider',
          images: [
            '/Portfolio/design/vp/spcare/lotteCare-img01.png',
            '/Portfolio/design/vp/spcare/lotteCare-img02.png',
            '/Portfolio/design/vp/spcare/lotteCare-img03.png',
            '/Portfolio/design/vp/spcare/lotteCare-img04.png',
            '/Portfolio/design/vp/spcare/lotteCare-img05.png',
            '/Portfolio/design/vp/spcare/lotteCare-img06.png',
            '/Portfolio/design/vp/spcare/lotteCare-img07.png',
            '/Portfolio/design/vp/spcare/lotteCare-img08.png',
            '/Portfolio/design/vp/spcare/lotteCare-img09.png',
            '/Portfolio/design/vp/spcare/lotteCare-img10.png'
          ],
          description: '롯데카드의 정갈한 브랜드 무드에 맞춰, 혜택 정보를 강조하면서도 심플한 레이아웃을 유지했습니다.'
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
