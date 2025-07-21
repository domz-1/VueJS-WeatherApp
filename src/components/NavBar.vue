<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <div class="navbar-wrapper m-4 rounded-3xl">
        <div class="navbar container px-4 md:px-[40px] py-4 md:py-[20px] max-w-[1400px]">
            <div class="flex justify-between items-center">
                <div class="logo text-xl md:text-[40px] font-semibold text-white">
                    <RouterLink to="/" class="text-white">
                        Dark Weather
                    </RouterLink>
                </div>

                <!-- Mobile menu button -->
                <button @click="toggleMenu" class="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-[50px]">
                    <div class="links flex flex-row text-white text-lg md:text-[25px] gap-4 md:gap-[50px]">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/download">Download App</RouterLink>
                        <RouterLink to="/contact">Contact us</RouterLink>
                    </div>
                    <div class="signup">
                        <RouterLink to="/signup"
                            class="text-white bg-[#416a80] text-lg md:text-[25px] rounded-lg px-4 md:px-[20px] py-2 md:py-[10px]">
                            Sign Up
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div v-if="isMenuOpen" class="md:hidden mt-4">
                <div class="flex flex-col text-white text-lg gap-4">
                    <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
                    <RouterLink to="/download" @click="toggleMenu">Download App</RouterLink>
                    <RouterLink to="/contact" @click="toggleMenu">Contact us</RouterLink>
                    <RouterLink to="/signup" @click="toggleMenu" class="bg-[#416a80] text-center rounded-lg px-4 py-2">
                        Sign Up
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.navbar-wrapper {
    position: sticky;
    top: 0;
    z-index: 50;
    width: 90%;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem
}

.navbar {
    position: relative;
}

@media (max-width: 768px) {
    .navbar {
        width: 95%;
    }
}

/* Add glass effect to mobile menu */
.md\:hidden {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Improve link hover effects */
.router-link-active {
    font-weight: bold;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.router-link-exact-active {
    position: relative;
}

.router-link-exact-active:not(.logo a):after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 2px;
}
</style>