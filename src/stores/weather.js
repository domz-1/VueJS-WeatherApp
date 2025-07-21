import { defineStore } from 'pinia';
import { ref } from 'vue';

const apiKey = '34176c17ebe0442f8c9175852252406';

export const useWeatherStore = defineStore('weather', () => {
    const searchInput = ref('');
    const weatherData = ref([]);
    const isLoading = ref(false);
    const error = ref('');

    const fetchWeatherData = async (location) => {
        try {
            console.log(`Fetching weather for: ${location}`);
            const response = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no`
            );

            if (!response.ok) {
                const errorData = await response.text();
                console.error('API Error:', response.status, errorData);
                throw new Error(`Weather API error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Weather data received:', data);

            const forecastData = [];

            // Today's weather
            forecastData.push({
                town: data.location.name,
                degrees: Math.round(data.current.temp_c),
                windSpeed: Math.round(data.current.wind_kph),
                DateOfWeather: 'Today',
                weather: data.current.condition.text,
            });

            // Tomorrow's weather
            if (data.forecast?.forecastday[1]) {
                const tomorrow = data.forecast.forecastday[1];
                forecastData.push({
                    town: data.location.name,
                    degrees: Math.round(tomorrow.day.avgtemp_c),
                    windSpeed: Math.round(tomorrow.day.maxwind_kph),
                    DateOfWeather: 'Tomorrow',
                    weather: tomorrow.day.condition.text,
                });
            }

            // Day after tomorrow's weather
            if (data.forecast?.forecastday[2]) {
                const dayAfterTomorrow = data.forecast.forecastday[2];
                forecastData.push({
                    town: data.location.name,
                    degrees: Math.round(dayAfterTomorrow.day.avgtemp_c),
                    windSpeed: Math.round(dayAfterTomorrow.day.maxwind_kph),
                    DateOfWeather: 'Day After Tomorrow',
                    weather: dayAfterTomorrow.day.condition.text,
                });
            }

            return forecastData;
        } catch (err) {
            console.error(`Error fetching weather data for ${location}:`, err);
            throw err;
        }
    };

    const searchWeather = async () => {
        const searchTerm = searchInput.value.trim();

        if (!searchTerm) {
            weatherData.value = [];
            error.value = '';
            return;
        }

        if (searchTerm.length < 2) return;

        try {
            isLoading.value = true;
            error.value = '';
            const weather = await fetchWeatherData(searchTerm);
            weatherData.value = weather || [];
        } catch (err) {
            console.error('Error searching weather:', err);
            weatherData.value = [];
            error.value = err.message || 'Failed to get weather data';
        } finally {
            isLoading.value = false;
        }
    };

    const clearSearch = () => {
        searchInput.value = '';
        weatherData.value = [];
        error.value = '';
    };

    return {
        searchInput,
        weatherData,
        isLoading,
        error,
        searchWeather,
        clearSearch,
    };
});
