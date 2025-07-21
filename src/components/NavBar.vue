<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="sticky top-0 z-50 w-[90%] m-4 rounded-3xl backdrop-blur-xl bg-black/50 shadow-lg border-b border-white/10 flex justify-between items-center p-4">
        <div class="relative container px-4 md:px-10 py-4 md:py-5 max-w-[1400px]">
            <div class="flex justify-between items-center">
                <div class="text-base md:text-2xl font-semibold">
                    <RouterLink to="/" class="text-white hover:text-white/90">
                        Dark Weather
                    </RouterLink>
                </div>

                <!-- Mobile menu button -->
                <button @click="toggleMenu" class="md:hidden text-white hover:text-white/80">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-10">
                    <div class="flex flex-row text-white text-sm md:text-base gap-4 md:gap-10">
                        <RouterLink to="/" class="hover:font-bold hover:shadow-white/50 transition-all duration-200">Home</RouterLink>
                        <RouterLink to="/download" class="hover:font-bold hover:shadow-white/50 transition-all duration-200">Download App</RouterLink>
                        <RouterLink to="/contact" class="hover:font-bold hover:shadow-white/50 transition-all duration-200">Contact us</RouterLink>
                    </div>
                    <div>
                        <RouterLink to="/signup"
                            class="text-white bg-[#416a80] hover:bg-[#416a80]/90 text-sm md:text-base rounded-lg px-4 md:px-4 py-2 md:py-2">
                            Sign Up
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div v-if="isMenuOpen" class="md:hidden mt-4 backdrop-blur-xl bg-black/50 p-2 rounded-lg border border-white/10">
                <div class="flex flex-col text-white text-sm gap-4 text-center">
                    <RouterLink to="/" @click="toggleMenu" class="hover:font-bold transition-all duration-200">Home</RouterLink>
                    <RouterLink to="/download" @click="toggleMenu" class="hover:font-bold transition-all duration-200">Download App</RouterLink>
                    <RouterLink to="/contact" @click="toggleMenu" class="hover:font-bold transition-all duration-200">Contact us</RouterLink>
                    <RouterLink to="/signup" @click="toggleMenu" class="bg-[#416a80] hover:bg-[#416a80]/90 text-center rounded-lg px-4 py-2">
                        Sign Up
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>