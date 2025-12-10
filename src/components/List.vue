<template>
    <li class="w-full border-b border-black border-opacity-10 rounded-sm">
        <!-- 링크가 있는 경우: a 태그로 전체를 감쌈 -->
        <a v-if="item.link"  :href="item.link" target="_blank" class="flex flex-row-2 p-8 items-center justify-between text-2xl">
            <p>
                <mark class="bg-transparent text-sm block mb-2 opacity-60">{{ item.client }} | 참여 비중 100%</mark>
                <span>{{ item.title }}</span>
            </p>
            <div>
                <span>{{ item.detail }}</span>
                <font-awesome-icon icon="arrow-right-long" class="ml-4 animate-on-hover-icon" />
            </div>
        </a>

        <!-- 링크가 없는 경우: div 태그로 전체를 감쌈 -->
        <div v-else class="flex flex-row-2 p-8 items-center justify-between text-2xl">
            <p>
                <mark class="bg-transparent text-sm block mb-2 text-black/60">{{ item.client }} | 참여 비중 100%</mark>
                <span>{{ item.title }}</span>
            </p>
            <div>
                <span>{{ item.detail }}</span>
            </div>
        </div>
    </li>
</template>

<script setup>
    defineProps({
        item: Object,
    });
</script>

<style>
  .text-stroke {
    color: transparent;
    -webkit-text-stroke: 1px var(--color-black);
  }
</style>