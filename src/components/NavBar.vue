<script>
import { RouterLink, RouterView } from 'vue-router'
    export default {
        name: 'NavBar',
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class=" navbar flex justify-between items-center container px-[40px] py-[20px] max-w-[1400px]">
        <div class="logo text-[40px] font-semibold text-white" >
            <RouterLink to="/" class="text-white">
                Dark Weather
            </RouterLink>
            </div>
        <div class="links flex flex-row text-white text-[25px] gap-[50px]">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/download">Download App</RouterLink>
            <RouterLink to="/contact">Contact us</RouterLink>
        </div>
        <div class="signup">
            <RouterLink to="/signup" class="text-white bg-[#416a80] text-[25px] rounded-lg px-[20px] py-[10px] w-[150px] h-[70px]">
                Sign Up
            </RouterLink>
        </div>
        
    </div>
</template>

<style>
    
</style>