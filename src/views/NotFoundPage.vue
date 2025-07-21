<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSubmitted = ref(false)
const errors = ref({
    message: ''
})

const handleReturn = () => {
    isSubmitted.value = true
    router.push('/')
}
</script>

<template>
    <div class="flex flex-col mt-16 min-h-screen bg-[#1a272e] overflow-hidden">
        <div class="text-center">
            <h1 class="text-white text-[80px] font-medium mb-8">
                404
            </h1>
            <p class="text-white text-[40px] font-medium mb-8">
                Page not found
            </p>
            <button 
                @click="handleReturn"
                class="text-white bg-[#416a80] px-8 py-4 rounded-xl hover:bg-[#385c70] transition-colors"
            >
                Return to Homepage
            </button>
        </div>
    </div>
</template>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}
</style>