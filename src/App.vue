<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Home from '../public/Home.png'

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>

<template>
    <div class="min-h-screen w-full  bg-center bg-no-repeat bg-cover">
        <div class="flex flex-col  min-h-screen  items-center">
            <NavBar />
            <RouterView />
        </div>
    </div>
</template>

<style>
body{
    background-image: url(../public/Home.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-x:hidden
}

</style>