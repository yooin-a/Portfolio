<template>
    <div class="card-item group w-full relative overflow-hidden" ref="cardItemRef">
        <component 
            :is="isExternalLink(item.link) ? 'a' : 'router-link'"
            :href="isExternalLink(item.link) ? item.link : undefined"
            :to="!isExternalLink(item.link) ? item.link : undefined"
            :target="isExternalLink(item.link) ? '_blank' : undefined"
        >
            <div class="img-container mb-8">
                <img :src="item.image" :alt="item.title" class=" w-full object-cover aspect-square rounded-lg group-hover:shadow-xl transition-all duration-300">
            </div>
            <div class="card-info px-10 font-NotoSans flex justify-between items-center">
                <div>
                    <p class="mb-6">
                        <span class="bg-transparent text-3xl block mb-2">{{ item.client }}</span>
                        <b class="text-4xl">{{ item.title }}</b>
                    </p>
                    <ul class="flex gap-1">
                        <li class="bg-underline" ref="underlineRef"><span>참여 비중 {{ item.rate }}</span></li>
                        <li v-for="skill in item.skills" :key="skill" class="skill-tag">{{ skill }}</li>
                    </ul>
                </div>
                <font-awesome-icon icon="arrow-right-long" class="text-4xl animate-on-hover-icon" />
            </div>
        </component>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
    item: Object,
});

const isExternalLink = (link) => {
    return link && (link.startsWith('http') || link.startsWith('www'));
};

const underlineRef = ref(null);
let observer = null;

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    if (underlineRef.value) {
        observer.observe(underlineRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<style lang="scss">
.card-item {
    @apply mb-20;
}
.card-info li{
    &::before {
        @apply content-[''] inline-block w-[1px] h-1/2 align-middle mr-[.4rem];
        background-color: var(--pseudo-color);
    }
    &:first-child {
        &::before {
            @apply hidden;
        }
    }
}
.skill-tag {
@apply text-lg opacity-50;
}
.bg-underline span{
    display: block;
    position: relative;
    text-decoration: none;
    &::before{
        @apply content-[''] block w-0 h-[8px] absolute bottom-[4px] left-0 bg-[#f9fd0061] -z-10 rounded-lg;
        transition: width .5s ease-in-out;
    }
}
.bg-underline.is-visible span{
    &::before{
        @apply w-full;
    }
}
</style>