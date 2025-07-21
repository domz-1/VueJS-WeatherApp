<script setup>
import { useWeatherStore } from '@/stores/weather';

const weatherStore = useWeatherStore();
</script>

<template>
    <!-- Error Display -->
    <div v-if="weatherStore.error"
        class="error-message bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg mt-4">
        {{ weatherStore.error }}
        <button @click="weatherStore.error = ''" class="ml-2 text-red-400 hover:text-red-200">×</button>
    </div>

    <!-- Loading Indicator -->
    <div v-if="weatherStore.isLoading" class="loading text-white text-center mt-4">
        <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        <span class="ml-2">Loading...</span>
    </div>

    <!-- Empty State Messages -->
    <div v-if="weatherStore.weatherData.length === 0 && !weatherStore.isLoading && !weatherStore.searchInput.trim()"
        class="text-white text-center">
        <p class="text-xl">Search for a city to see its weather</p>
        <p class="text-gray-400 mt-2">Enter a city name or country in the search box above</p>
    </div>

    <div v-else-if="weatherStore.weatherData.length === 0 && !weatherStore.isLoading && weatherStore.searchInput.trim()"
        class="text-white text-center">
        <p class="text-xl">No weather data found</p>
        <p class="text-gray-400 mt-2">Try searching for a different location</p>
    </div>
</template>

<style scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
}

.error-message {
    max-width: 600px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
