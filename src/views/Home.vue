<script>
import DropDown from '@/components/DropDown.vue';
import Card from '@/components/Card.vue';

export default {
    name: 'Home',
    components: {
        DropDown,
        Card,
    },
    data() {
        return {
            showResults: true,
            allCountries: [],
            searchInput: '',
            titles: ['Coldest', '10°C - 20°C', 'Rainy'],
            arrayes: [
                ['Tehran', 'Qom', 'Gilan'],
                ['10°C - 15°C', '15°C - 20°C', '20°C - 25°C'],
                ['Rainy Days', 'Cloudy Days', 'Sunny Days'],
            ],
            weatherData: [
                {
                    town: 'Tehran',
                    degrees: 35,
                    windSpeed: 11,
                    DateOfWeather: 'Tuesday : 19:52',
                    weather: 'Cloudy',
                },
                {
                    town: 'Qom',
                    degrees: 41,
                    windSpeed: 5,
                    DateOfWeather: 'Tuesday : 19:52',
                    weather: 'Sunny',
                },
                {
                    town: 'Gilan',
                    degrees: 23,
                    windSpeed: 23,
                    DateOfWeather: 'Tuesday : 19:52',
                    weather: 'Rainy',
                },
            ],
        };
    },
    computed: {
        searchResult() {
            if (!this.searchInput) return [];

            const searchTerm = this.searchInput.toLowerCase();

            return this.allCountries
                .filter(country =>
                    country.name.common.toLowerCase().includes(searchTerm)
                )
                .sort((a, b) =>
                    a.name.common.toLowerCase().indexOf(searchTerm) -
                    b.name.common.toLowerCase().indexOf(searchTerm)
                );
        }
    },
    methods: {
        selectCountry(country) {
            this.showResults = false;
            this.searchInput = country.name.common;
        },
        async fetchCountries() {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                this.allCountries = await response.json();
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }
    },
    async mounted() {
        
        await this.fetchCountries();
    }
};
</script>
<template>
    <div class="home flex flex-col justify-center items-center h-full container max-w-[1400px] mb-10">
        <p class="text-white text-[40px] font-medium text-center mt-[90px]">
            Seeing the weather of the whole world <br />
            with
            <span
                class="bg-gradient-to-br from-[#CAECFF] to-[#78CFFF] inline-block text-transparent bg-clip-text font-bold">
                Dark Weather!
            </span>
        </p>
        <div
            class="filterAndSearch flex flex-row justify-between items-center mt-[50px] gap-[180px] px-[30px] py-[10px]">
            <div class="search flex flex-col gap-[10px] relative">
                <input v-model="searchInput" type="search" placeholder="Search Here" @focus="showResults = true"
                    class="rounded-[12px] px-[30px] py-[10px] outline-none w-[360px] h-[85px] bg-[#24343D] text-white placeholder:text-[23px] placeholder:font-extralight" />
                <div class="result custom-scrollbar absolute w-full bg-[#24343D] flex flex-col top-[94px] rounded-[12px] max-h-[300px] overflow-y-auto"
                    v-if="showResults && searchResult.length">
                    <div v-for="(country, index) in searchResult" :key="index"
                        class="country p-3 hover:bg-[#2f4552] cursor-pointer" @click="selectCountry(country)">
                        <p class="text-white text-[25px] font-medium">{{ country.name.common }}</p>
                    </div>
                </div>
                <div v-else-if="searchInput && !searchResult.length"
                    class="result absolute w-full bg-[#24343D] p-3 rounded-b-[12px]">
                    <p class="text-white text-[16px]">No results found</p>
                </div>
            </div>
            <div
                class="filter bg-[#24343D] rounded-[12px] w-[600px] h-[105px] gap-[15px] flex flex-row justify-center items-center">
                <span class="text-white text-[27px] font-medium">Filter</span>
                <div class="dropDowns flex flex-row gap-[15px]" v-for="(title, index) in titles" :key="index">
                    <DropDown :title="title" :items="arrayes[index]" />
                </div>
            </div>
        </div>

        <div class="cards flex flex-row flex-wrap justify-center items-center gap-[30px] mt-[90px] ">
            <Card v-for="(card, index) in weatherData" :key="index" :town="card.town" :degrees="card.degrees"
                :windSpeed="card.windSpeed" :DateOfWeather="card.DateOfWeather" :weather="card.weather" :maxRotation="8"
                :sensitivity=".5" :smoothing="0.2" :depth="1.5" />
        </div>
    </div>
</template>

<style scoped>
.result{
    z-index: 100;
    transition: opacity 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
/* Modern Webkit browsers (Chrome, Safari, Edge) */
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #1a272e;
    border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #78CFFF;
    border-radius: 8px;
    transition: background 0.2s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #5ab8eb;
}

/* Firefox */
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #78CFFF #1a272e;
}

.custom-scrollbar {
    overflow-y: overlay;
    padding-right: 4px;
}

.custom-scrollbar:not(:hover)::-webkit-scrollbar-thumb {
    background: transparent;
}

.custom-scrollbar:not(:hover) {
    scrollbar-color: transparent transparent;
}
</style>