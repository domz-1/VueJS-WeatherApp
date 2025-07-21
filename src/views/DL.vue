<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const downloadLinks = ref([
    {
        platform: 'Android',
        link: '#',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="white" fill="none">
    <path d="M6.5 9.5C6.5 6.46243 8.96243 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V16C17.5 17.4142 17.5 18.1213 17.0607 18.5607C16.6213 19 15.9142 19 14.5 19H9.5C8.08579 19 7.37868 19 6.93934 18.5607C6.5 18.1213 6.5 17.4142 6.5 16V9.5Z" stroke="currentColor" stroke-width="1.5"></path>
    <path d="M20 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M9 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M4 11V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10 4L8.5 2M14 4L15.5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M6.5 10H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`
    },
    {
        platform: 'iOS',
        link: '#', 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="white" fill="none">
    <path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
</svg>`
    },
    {
        platform: 'Desktop',
        link: '#',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="white" fill="none"><path d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`
    }
])

const handleDownload = (link) => {
    window.open(link, '_blank')
}
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <p class="text-white text-[40px] font-medium text-center mb-16">
            Download our Application
        </p>
        
        <div class="flex flex-wrap justify-center gap-8">
            <div v-for="(download, index) in downloadLinks" 
                 :key="index"
                 @click="handleDownload(download.link)"
                 class="bg-[#24343D] rounded-xl p-8 cursor-pointer hover:bg-[#2f4552] transition-colors flex flex-col items-center gap-4 w-[280px]">
                <span class="text-6xl text-white" v-html="download.icon"></span>
                <p class="text-white text-2xl font-medium">{{ download.platform }}</p>
                <button class="bg-[#416a80] text-white px-8 py-3 rounded-lg hover:bg-[#385c70] transition-colors">
                    Download
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.min-h-screen {
    min-height: calc(100vh - 100px);
}

</style>