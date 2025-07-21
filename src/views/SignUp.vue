<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = reactive({
    username: '',
    password: ''
})

const errors = reactive({
    username: '',
    password: ''
})

const isSubmitted = ref(false)

const validateForm = () => {
    let isValid = true

    // Reset errors
    errors.username = ''
    errors.password = ''

    // Username validation
    if (!user.username.trim()) {
        errors.username = 'Username is required'
        isValid = false
    }

    // Password validation
    if (!user.password) {
        errors.password = 'Password is required'
        isValid = false
    }

    return isValid
}

const handleSubmit = () => {
    isSubmitted.value = true // Set submission flag

    if (validateForm()) {
        router.push('/')
    }
}
</script>

<template>
    <form action="" method="get"
        class="flex flex-col gap-4 relative mt-32 w-full max-w-md mx-auto scale-75 sm:scale-100">
        <h1 class="text-4xl text-white font-bold text-center mb-4">Sign Up</h1>

        <div class="relative">
            <input v-model="user.username" type="text" placeholder="Enter your username"
                class="rounded-xl px-8 py-6 outline-none w-full bg-[#24343D] text-white placeholder:text-xl placeholder:font-extralight"
                :class="{ 'border border-red-500': isSubmitted && errors.username }" />
            <span v-if="isSubmitted && errors.username" class="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                {{ errors.username }}
            </span>
        </div>

        <div class="relative mt-2">
            <input v-model="user.password" type="password" placeholder="Enter your password"
                class="rounded-xl px-8 py-6 outline-none w-full bg-[#24343D] text-white placeholder:text-xl placeholder:font-extralight"
                :class="{ 'border border-red-500': isSubmitted && errors.password }" />
            <span v-if="isSubmitted && errors.password" class="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                {{ errors.password }}
            </span>
        </div>

        <button type="submit" @click.prevent="handleSubmit"
            class="rounded-xl px-8 py-6 outline-none w-full bg-[#416a80] text-white mt-4 hover:bg-[#385c70] transition-colors">
            Sign Up
        </button>
    </form>
</template>

<style scoped>
/* Add any additional styles here */
</style>