<template>
    <div class="card-item group w-full relative overflow-hidden" ref="cardItemRef">
        <a v-if="item.link" :href="item.link" target="_blank">
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
                        <li v-for="skill in item.skills" :key="skill" class="skill-tag">{{ skill }}</li>
                    </ul>
                </div>
                <font-awesome-icon icon="arrow-right-long" class="text-4xl animate-on-hover-icon" />
            </div>
        </a>
        <div v-else>
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
                        <li v-for="skill in item.skills" :key="skill" class="skill-tag">{{ skill }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: Object,
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
</style>