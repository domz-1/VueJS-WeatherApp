<script setup>
import { useWeatherStore } from '@/stores/weather.js';
import Card from '@/components/Card.vue';
import WeatherSearch from '@/components/WeatherSearch.vue';
import StatusMessages from '@/components/StatusMessages.vue';

const weatherStore = useWeatherStore();
</script>

<template>
    <div class="home flex flex-col justify-center items-center h-full container max-w-[1400px] mb-10">
        <p class="text-white text-[40px] font-medium text-center mt-[40px]">
            Seeing the weather of the whole world <br />
            with
            <span
                class="bg-gradient-to-br from-[#CAECFF] to-[#78CFFF] inline-block text-transparent bg-clip-text font-bold">
                Dark Weather!
            </span>
        </p>

        <StatusMessages />

        <WeatherSearch />

        <!-- Weather Cards -->
        <div class="cards flex flex-row flex-wrap justify-center items-center gap-[30px] mt-[90px] px-4">
            <Card v-for="(card, index) in weatherStore.weatherData" :key="`${card.town}-${card.DateOfWeather}-${index}`"
                :town="card.town" :degrees="card.degrees" :windSpeed="card.windSpeed"
                :DateOfWeather="card.DateOfWeather" :weather="card.weather" :maxRotation="8" :sensitivity=".5"
                :smoothing="0.2" :depth="1.5" />
        </div>
    </div>
</template>

<style scoped>
.search-section {
    width: 100%;
}

@media (max-width: 768px) {
    .search-section {
        padding: 0 20px;
    }
}
</style>