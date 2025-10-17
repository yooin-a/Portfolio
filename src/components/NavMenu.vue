<template>
  <div>
    <div id="hamburger-container" @click="toggleMenu" :class="{ open: isMenuOpen, 'on-dark-bg': isOverDarkSection || isMenuOpen }" class="fixed bottom-8 right-8 cursor-pointer z-50 bg-black/90 w-14 h-14 rounded-[100%] flex items-center justify-center">
      <button class="w-6 h-4 flex flex-col justify-between">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

      <div v-if="isMenuOpen" class="nav-link fixed top-0 right-0 w-full h-screen backdrop-blur-sm flex flex-col justify-center items-center z-40" @click.self="closeMenu">
        <div class="overflow-hidden">
          <a href="#intro" :class="{ 'active': props.activeId === 'intro' }" @click.prevent="$emit('scrollToSection', 'intro'); closeMenu()">Intro</a>
        </div>
        <div class="overflow-hidden">
          <a href="#about" :class="{ 'active': props.activeId === 'about' }" @click.prevent="$emit('scrollToSection', 'about'); closeMenu()">About</a>
        </div>
        <div class="overflow-hidden">
          <a href="#works" :class="{ 'active': props.activeId === 'works' }" @click.prevent="$emit('scrollToSection', 'works'); closeMenu()">Works</a>
        </div>
        <div class="overflow-hidden">
          <a href="#contact" :class="{ 'active': props.activeId === 'contact' }" @click.prevent="$emit('scrollToSection', 'contact'); closeMenu()">Contact</a>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'; // ref, watch, nextTick을 import 합니다.
import { gsap } from 'gsap';

// 1. emits: ['scrollToSection'] 대신 defineEmits 사용
const emit = defineEmits(['scrollToSection']);

// 2. data() 대신 ref()를 사용하여 반응형 상태 선언
const isMenuOpen = ref(false);
const isOverDarkSection = ref(false); // isOverDarkSection도 ref로 선언

// 3. methods 대신 일반 JavaScript 함수 선언
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // ref의 값을 변경할 때는 .value를 사용
};

const closeMenu = () => {
  isMenuOpen.value = false; // ref의 값을 변경할 때는 .value를 사용
};

// setDarkSection 함수는 부모 컴포넌트에서 호출할 수 있도록 외부에 노출해야 합니다.
const setDarkSection = (isDark) => {
  isOverDarkSection.value = isDark;
  console.log('NavMenu - isOverDarkSection:', isOverDarkSection.value);
};

// 4. watch 대신 import한 watch 함수 사용
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    // nextTick 대신 import한 nextTick 함수 사용
    nextTick(() => {
      gsap.fromTo(".nav-link a", {
        y: "100%",
        opacity: 0.2,
      },{
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        duration: 0.8,
        stagger: 0.2
      });
    });
  }
});

// 5. 부모 컴포넌트(App.vue)에서 setDarkSection 함수를 호출할 수 있도록 노출
// (예: Intersection Observer로 섹션 진입/이탈 감지 시 App.vue에서 이 함수를 호출할 수 있게 됩니다)
defineExpose({
  setDarkSection
});

const props = defineProps({
  activeId: {
    type: String,
    default: 'intro'
  }
});
</script>

<style lang="scss" scoped>
  .hamburger-line {
    @apply w-full h-[2px] bg-white transition-all duration-300 ease-in-out;
  }
  .hamburger-line.invert-color {
    @apply bg-white;
  }
  .open .hamburger-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .open .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  .open .hamburger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  #hamburger-container.on-dark-bg {
    @apply bg-white;
  }
  #hamburger-container.on-dark-bg .hamburger-line {
    @apply bg-black;
  }
  #hamburger-container.open {
    @apply bg-white z-[60];
  }
  #hamburger-container.open .hamburger-line {
    @apply bg-black;
  }
  .nav-link a {
    @apply text-white mb-4 font-ContrailOne inline-block text-6xl hover:text-8xl transition-all duration-300 ease-out hover:text-black [text-shadow:0_4px_10px_rgba(0,0,0,0.6)]
  }
  .nav-link a.active {
    @apply text-8xl text-[#dd2f20] !important; 
  }  
</style>