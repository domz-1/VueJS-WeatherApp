<script setup>
import { watch } from 'vue';
import { useWeatherStore } from '@/stores/weather.js';

const weatherStore = useWeatherStore();

watch(() => weatherStore.searchInput, () => {
    weatherStore.searchWeather();
});
</script>

<template>
    <div class="search-section flex justify-center items-center mt-[50px] px-[15px] w-full">
        <div class="search flex flex-col gap-[10px] relative w-full max-w-[400px]">
            <div class="relative">
                <input v-model="weatherStore.searchInput" type="search" placeholder="Search for any city or country..."
                    class="rounded-[12px] px-[30px] py-[10px] outline-none w-full h-[85px] bg-[#24343D] text-white placeholder:text-[18px] placeholder:font-extralight" />
                <button v-if="weatherStore.searchInput" @click="weatherStore.clearSearch"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-xl">
                    ×
                </button>
            </div>
        </div>
    </div>
</template>