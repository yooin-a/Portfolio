<template>
  <main>
    <SiteHeader class="absolute top-0 left-0 w-full z-50"/>
  
    <NavMenu ref="navMenu" @scrollToSection="handleScrollToSection" :active-id="activeSectionId"/>

    <section id="parallax-container">
      <!-- section1 -->
      <section id="intro" class="parallax-item flex w-full h-[90vh] p-8" ref="introSection">
        <div id="intro-caption" class="font-PlayfairDisplay flex flex-col justify-center items-center text-[4vw] w-full leading-[5.5vw]">
          <p>Responsive and <span class="image-hover-trigger font-GreatVibes text-[7vw]" data-images="/Portfolio/images/thumb_26_challenge.png,/Portfolio/images/thumb_ggd.png,/Portfolio/images/thumb_goodfund.png">accessible</span>,</p>
          <p><span class="text-stroke">I deliver</span> pixel-perfect</p>
          <p><span class="image-hover-trigger font-GreatVibes text-[7vw]" data-images="/Portfolio/images/thumb_infinitie.png,/Portfolio/images/thumb_LG_mycup.png,/Portfolio/images/thumb_LG.png">web experiences</span> with <span class="text-stroke">clean</span>,</p>
          <p class="flex items-center justify-center">scalable code<span id="hand-pointer-container" class="flex items-center justify-center w-[5vw] h-[5vw] rounded-full bg-[#FFEA47] shadow-lg ml-4"><font-awesome-icon icon="hand-pointer" id="hand-pointer-icon" class="rotate-180 text-[2.5vw] leading-[2vw]"/></span></p>
        </div>
        <div id="accessible-images" class="absolute flex opacity-0 invisible pointer-events-none"></div>
      </section>

      <!-- section2 -->
      <section id="about" class="parallax-item p-8" ref="aboutSection">
        <div id="video-container" class="flex w-max gap-8 flex-shrink-0 mb-8">
          <div v-for="(video, index) in videos" :key="index" class="relative">
            <video :src="video.src" class="portfolio-video" muted playsinline loop></video>
            <div class="video-text-overlay font-ContrailOne">{{ video.text }}</div>
          </div>
        </div>

        <div id="about-content" class="bg-[#dd2f20] w-[100%] m-auto rounded-[2rem] pb-16 overflow-hidden">
          <div class="p-16 pb-24">
            <div id="about-text-en" class="font-ContrailOne text-6xl mb-20 leading-[1.4]">
              <p>Hello!</p>
              <p>I’m yooina, a web publisher who creates delightful web experiences with clean design and attention to detail.</p>
              <p>I build responsive and accessible websites with clean, scalable code for a perfect user experience.</p>
            </div>
            <div id="about-text-ko" class="font-NotoSans text-5xl font-extrabold leading-[1.4]">
              <p>안녕하세요!</p>
              <p>깔끔함 속에 디테일을 담아, 즐거운 웹 경험을 만드는 "웹 퍼블리셔 유인아" 입니다.</p>
              <p>반응형과 접근성을 갖춘, 퍼펙트한 웹 경험을 깔끔하고 확장성 있는 코드로 구현합니다.</p>
            </div>
          </div>
          <ul class="flex flex-nowrap gap-8 text-3xl opacity-40 font-ContrailOne">
            <li v-for="skill in skillList" :key="skill.id" class="list-item">
              {{ skill.skill }}
            </li>
            <li v-for="skill in skillList" :key="skill.id + '-clone'" class="list-item" aria-hidden="true">
              {{ skill.skill }}
            </li>
          </ul>
        </div>        
      </section>

      <div id="works">
        <section id="works-intro" class="parallax-item text-white text-9xl w-full h-[100vh] px-10 flex justify-center items-center text-center">
            <h2 id="works-intro-title" class="font-ContrailOne">
              <span><span>T</span><span>h</span><span>i</span><span>n</span><span>g</span><span>s</span></span> 
              <span><span class="ml-4">I</span><span>’</span><span>v</span><span>e</span></span> 
              <span><span class="ml-4">B</span><span>u</span><span>i</span><span>l</span><span>t</span></span>
              <span class="block text-stroke-white mt-10">
                <span><span>M</span><span>y</span></span> 
                <span><span class="ml-4">W</span><span>o</span><span>r</span><span>k</span><span>s</span></span>
              </span>
            </h2>
        </section>

      <!-- works -->
      <section id="works-list" class="parallax-item">
        <div class=" bg-gradient-to-b from-black to-white text-white/80 relative z-20 px-[10%] py-20 ">
          <div class="grid grid-cols-2 gap-x-[10%] portfolio-grid">
            <Card v-for="item in portfolioList" :key="item.id" :item="item" />
          </div>
          <ul class="w-full grid grid-cols-2" ref="worksUlRef">
            <List v-for="item in oldPortfolio" :key="item.id" :item="item"/>
          </ul>          
        </div>
      </section>
    </div>

      <!-- section5 -->
      <section id="contact" class="parallax-item bg-[#333] text-white flex flex-col justify-center items-center">
        <div class="text-9xl font-PlayfairDisplay text-center p-20 flex flex-col items-center">
          <div class="reveal-container">
            <p class="text-7xl opacity-60 mb-4">WANT TO</p>
          </div>
          <div class="reveal-container mb-20">
            <p>
              <a href="mailto:yooina91@gmail.com" class="contact-link-swap">
                <span>WORK</span> <span>TOGETHER?</span>
              </a>
            </p>
          </div>
          <button @click="scrollToTop" class="text-base block mx-auto border border-white/60 px-6 py-2 rounded-full back-to-top-btn mb-4">Back to the top</button>
          <div class="reveal-container">
            <span class="text-base font-NotoSans">©2025 2NA . Designed & Developed by Me.</span>
          </div>
        </div>
      </section>      

    </section>
  </main>
</template>

<script>
  import SiteHeader from '../components/SiteHeader.vue';
  import Card from '../components/card.vue';
  import List from '../components/List.vue';
  import portfolioList from '../js/data.js';
  import oldPortfolio from '../js/data2.js';
  import rawSkillList from '../js/skill.js';
  import NavMenu from '../components/NavMenu.vue';
  import { ref } from 'vue';

  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { TextPlugin } from 'gsap/TextPlugin';

  gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  name: 'HomeView',
  components: {
    SiteHeader,
    NavMenu,
    Card,
    List
  },
  data() {
    return {
      portfolioList: portfolioList,
      oldPortfolio: oldPortfolio,
      skillList: rawSkillList.filter(skill => skill.id !== undefined),
      videos: [
        { src: '/Portfolio/videos/portfolio_video_1.mp4', text: 'Interactive' },
        { src: '/Portfolio/videos/portfolio_video_2.mp4', text: 'Performant' },
        { src: '/Portfolio/videos/portfolio_video_3.mp4', text: 'Accessible' }
      ],
      sectionIds: ['intro', 'about', 'works', 'contact'],
    }
  },
  setup() {
    const activeSectionId = ref('intro');
    const worksUlRef = ref(null);
    const introSection = ref(null);
    const aboutSection = ref(null);
    const contactSection = ref(null);
  return {
    introSection,
    aboutSection,
    contactSection,
    worksUlRef,
    activeSectionId
  };
},
  mounted() {
    this.ctx = gsap.context(() => {
this.sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top center+=100",
                    end: "bottom center+=100",
                    
                    onEnter: () => {
                        this.activeSectionId = id; 
                        console.log(`Active (Enter): ${id}`);
                    },
                    
                    onLeaveBack: () => {
                        const currentIndex = this.sectionIds.indexOf(id);
                        if (currentIndex > 0) {
                            this.activeSectionId = this.sectionIds[currentIndex - 1];
                            console.log(`Active (LeaveBack): ${this.sectionIds[currentIndex - 1]}`);
                        } else {
                            this.activeSectionId = 'intro';
                        }
                    }
                });
            }
        });

      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#intro",
          start: "top center",
          toggleActions: "play none none none"
        }
      });

      mainTimeline.from("#intro-caption p", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
      })
      .from("#video-container video", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3
      }, "-=0.5");

      let mouseX = 0;
      let mouseY = 0;
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      const imageHoverTriggers = document.querySelectorAll('.image-hover-trigger');
      const accessibleImages = document.getElementById('accessible-images');
      let hideTimeout;
      imageHoverTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
          clearTimeout(hideTimeout);
          const imageUrls = trigger.dataset.images.split(',');
          accessibleImages.innerHTML = '';
          imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url.trim();
            img.className = 'w-32 h-40 object-cover rounded-lg shadow-lg';
            accessibleImages.appendChild(img);
          });
          gsap.to(accessibleImages, { opacity: 1, visibility: 'visible', duration: 0.5, ease: 'power3.out', x: mouseX + 0, y: mouseY + 0 });
          gsap.fromTo("#accessible-images img", { opacity: 0, x: (i) => (i * 0), y: (i) => (i * 0) }, { opacity: 1, x: (i) => (i * -30), y: (i) => (i * 20), duration: 0.5, stagger: 0.15, ease: 'power3.out' });
        });
        trigger.addEventListener('mouseleave', () => {
          clearTimeout(hideTimeout);
          hideTimeout = setTimeout(() => {
            gsap.to(accessibleImages, { opacity: 0, duration: 0.5, ease: "power3.in", onComplete: () => { gsap.set(accessibleImages, { visibility: 'hidden' }); accessibleImages.innerHTML = ''; } });
          }, 150);
        });
      });
      gsap.ticker.add(() => {
        if (accessibleImages.style.visibility === 'visible') {
          gsap.to(accessibleImages, { x: mouseX + 0, y: mouseY + 0, duration: 0.1, ease: 'power1.out' });
        }
      });

      gsap.to("#hand-pointer-icon", {
        rotation: 225,
        scrollTrigger: {
          trigger: "#intro",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
      const handPointer = document.getElementById("hand-pointer-container");
      let pulseAnimation;
      handPointer.addEventListener("mouseenter", () => {
        pulseAnimation = gsap.to(handPointer, { scale: 1.2, duration: 0.5, ease: "power1.inOut", yoyo: true, repeat: -1 });
      });
      handPointer.addEventListener("mouseleave", () => {
        if (pulseAnimation) {
          pulseAnimation.kill();
        }
        gsap.to(handPointer, { scale: 1, duration: 0.3 });
      });

      const aboutTextAnim = gsap.timeline({ paused: true })
        .from(["#about-text-en p", "#about-text-ko p"], {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
        });

      const videoContainer = document.getElementById('video-container');
      gsap.to(videoContainer, {
        x: () => -(videoContainer.scrollWidth - (document.documentElement.clientWidth - 64)),
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          pin: true,
          scrub: 1,
          end: () => `+=${videoContainer.scrollWidth - (document.documentElement.clientWidth - 64)}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const videos = gsap.utils.toArray('#video-container video');
            const center = window.innerWidth / 2;
            let activeVideo = null;
            let minDistance = Infinity;

            videos.forEach(video => {
              const videoCenter = video.getBoundingClientRect().left + video.offsetWidth / 2;
              const distance = Math.abs(center - videoCenter);
              if (distance < minDistance) {
                minDistance = distance;
                activeVideo = video;
              }
            });

            videos.forEach(video => {
              const textOverlay = video.nextElementSibling;
              if (video === activeVideo) {
                video.play();
                gsap.to(textOverlay, { opacity: 1, y: 0, duration: 0.3 });
              } else {
                video.pause();
                gsap.to(textOverlay, { opacity: 0, y: 20, duration: 0.3 });
              }
            });
          },
          onLeave: () => aboutTextAnim.play(),
          onEnterBack: () => aboutTextAnim.reverse(),
        }
      });

      const skillList = document.querySelector('#about .flex.flex-nowrap');
      this.$nextTick(() => {
        const skillItems = gsap.utils.toArray('#about .list-item');
        if (skillItems.length === 0) return;
        let totalWidth = 0;
        for (let i = 0; i < skillItems.length / 2; i++) {
            totalWidth += skillItems[i].offsetWidth;
        }
        const gap = 32;
        totalWidth += gap * (skillItems.length / 2);
        gsap.set(skillList.parentElement, { overflow: 'hidden' });
        gsap.to(skillList, {
          x: -totalWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      });

      ScrollTrigger.create({
        trigger: "#works-intro",
        start: "top top",
        end: "+=3000",
        pin: true,
      });

      const section3MasterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#works-intro",
          start: "top center",
          end: "+=3000",
          scrub: 1,
        }
      });

      section3MasterTimeline.fromTo("#works-intro", {
        scale: 0.6,
        borderRadius: "50px",
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        borderRadius: "0px",
        ease: "power1.inOut",
      }, 0);


      section3MasterTimeline.from("#works-intro-title span > span", {
        opacity: 0,
        y: -100,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1
      }, ">-0.5");

      gsap.utils.toArray(".portfolio-grid .card-item").forEach((item, i) => {
        const isRightColumn = (i % 2 !== 0);
        const startOffset = isRightColumn ? "top 80%" : "top bottom";
        const endOffset = isRightColumn ? "center 30%" : "center center";

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: startOffset,
            end: endOffset,
            scrub: 1,
          }
        });

        cardTimeline.from(item, {
          opacity: 0,
          y: 150,
          ease: "power2.out",
          duration: 1,
        })
        .from(item.querySelector(".card-info"), {
          opacity: 0,
          y: 50,
          ease: "power2.out",
          duration: 0.8,
        }, "+=0.4");
      });

      if (this.worksUlRef) {
        gsap.from(this.worksUlRef.querySelectorAll('li'), {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: this.worksUlRef,
            start: "top bottom-=50",
            scrub: true,
            scroller: window,
          }
        });
      }

      // Animate text color in #works-list
      gsap.to("#works-list > div", {
        color: '#000000',
        '--pseudo-color': 'rgba(0, 0, 0, 0.5)',
        ease: "power2.in",
        scrollTrigger: {
          trigger: "#works-list",
          start: "center 60%",
          end: "center 40%",
          scrub: true,
        }
      });

            const contactMasterTl = gsap.timeline({
              scrollTrigger: {
                trigger: "#contact",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1
              }
            });

            contactMasterTl.from("#contact", {
              scale: 0.85,
              borderRadius: '50px',
              opacity: 0.5,
              ease: "power1.inOut"
            }, 0);

            contactMasterTl.from("#contact .reveal-container > *", {
                y: "110%",
                opacity: 0,
                ease: "power4.out",
                stagger: 0.3
            }, 0.3);

      gsap.utils.toArray(".animate-on-hover-icon").forEach((icon) => {
        const hoverTrigger = icon.closest('.card-item') ? icon.closest('a') : icon.closest('li');

        if (hoverTrigger) {
          const iconTween = gsap.to(icon, {
            rotate: -45,
            ease: "power2.out",
            duration: 0.3,
            paused: true
          });

          hoverTrigger.addEventListener('mouseenter', () => iconTween.play());
          hoverTrigger.addEventListener('mouseleave', () => iconTween.reverse());
        }
      });

      const darkSections = gsap.utils.toArray("#works, #contact");
      darkSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom-=100px",
          end: "bottom bottom-=100px",
          onEnter: () => this.$refs.navMenu.setDarkSection(true),
          onLeave: () => this.$refs.navMenu.setDarkSection(false),
          onEnterBack: () => this.$refs.navMenu.setDarkSection(true),
          onLeaveBack: () => this.$refs.navMenu.setDarkSection(false),
        });
      });
    });
  },
  unmounted() {
    this.ctx.revert();
  },
  methods: {
    handleScrollToSection(sectionName) {
      console.log('App.vue: Scrolling to', sectionName);
      let targetElement = null;

   switch (sectionName) {
    case 'intro':
     targetElement = document.getElementById('intro')
     break;
    case 'about':
     targetElement = document.getElementById('about')
     break;
    case 'works':
     targetElement = document.getElementById('works');
     break;
    case 'contact':
     targetElement = document.getElementById('contact')
     break;
    default:
     return;
   }

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.error(`Section ref/ID not found for: ${sectionName}`);
      }
  },

  scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
 }
}
</script>

<style lang="scss">
  .parallax-item {
    @apply relative w-[100%]
  }
  .text-stroke {
    color: transparent;
    -webkit-text-stroke: 1px var(--color-black);
  }
  .text-stroke-white {
    color: transparent;
    -webkit-text-stroke: 1px var(--color-white);
  }
  .list-item {
    @apply flex-shrink-0 break-words;
  }
  .card-item:nth-child(even){
      @apply mt-60
    }
  .portfolio-video {
    @apply rounded-[2rem] w-[72vw];
  }
  .video-text-overlay {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl opacity-0;
    pointer-events: none;
  }
  .feature-item {
    @apply mb-20;

    &:last-child {
      margin-bottom: 0
    }
  }
  .feature-title {
    @apply text-6xl border-b border-black;
  }
  .feature-description {
    @apply text-4xl pt-10 leading-snug;
  }
  #works-intro-title span > span {
    display: inline-block;
  }
#works {
  position: relative;
  overflow: hidden;
}
#works-intro {
  position: relative;
  z-index: 2;
  background:url('/Portfolio/images/works_intro_bg.jpg') top center no-repeat #000000;
  background-size: 100%;
}
    #works-list > div {
      --pseudo-color: rgba(255, 255, 255, 0.5);
    }
    .contact-link-swap {
      text-decoration: none;
    }
    .contact-link-swap span {
      transition: color 0.3s ease;
    }

    .contact-link-swap span:first-child {
      color: transparent;
      -webkit-text-stroke: 1px white;
    }
    .contact-link-swap span:last-child {
      color: white;
      -webkit-text-stroke: 0;
    }

    .contact-link-swap:hover span:first-child {
      color: white;
      -webkit-text-stroke: 0;
    }
    .contact-link-swap:hover span:last-child {
      color: transparent;
      -webkit-text-stroke: 1px white;
    }

    .back-to-top-btn {
      transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    }
    .back-to-top-btn:hover {
      background-color: white;
      color: #333;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.4);
    }
    .reveal-container {
      overflow: hidden;
    }
    #contact::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: url(#grainy-filter);
      opacity: 0.15;
      pointer-events: none;
    }
    ::selection {
      background-color: #222;
      color: #fff;
    }
    ::-moz-selection {
      background-color: #222;
      color: #fff;
    }
</style>