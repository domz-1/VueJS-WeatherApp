<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const contactForm = reactive({
    name: '',
    email: '',
    message: ''
})

const errors = reactive({
    name: '',
    email: '',
    message: ''
})

const isSubmitted = ref(false)

const validateForm = () => {
    let isValid = true

    // Reset errors
    errors.name = ''
    errors.email = ''
    errors.message = ''

    // Name validation
    if (!contactForm.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
    }

    // Email validation
    if (!contactForm.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
        errors.email = 'Please enter a valid email'
        isValid = false
    }

    // Message validation
    if (!contactForm.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
    }

    return isValid
}

const handleSubmit = () => {
    isSubmitted.value = true

    if (validateForm()) {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', contactForm)
        router.push('/')
    }
}
</script>

<template>
    <form action="" method="get" class="flex flex-col gap-4 relative mt-4 w-full max-w-md mx-auto scale-75 sm:scale-100">
        <h1 class="text-4xl text-white font-bold text-center mb-4">Contact Us</h1>

        <div class="relative">
            <input v-model="contactForm.name" type="text" placeholder="Enter your name"
                class="rounded-xl px-8 py-6 outline-none w-full bg-[#24343D] text-white placeholder:text-xl placeholder:font-extralight"
                :class="{ 'border border-red-500': isSubmitted && errors.name }" />
            <span v-if="isSubmitted && errors.name" class="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                {{ errors.name }}
            </span>
        </div>

        <div class="relative mt-2">
            <input v-model="contactForm.email" type="email" placeholder="Enter your email"
                class="rounded-xl px-8 py-6 outline-none w-full bg-[#24343D] text-white placeholder:text-xl placeholder:font-extralight"
                :class="{ 'border border-red-500': isSubmitted && errors.email }" />
            <span v-if="isSubmitted && errors.email" class="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                {{ errors.email }}
            </span>
        </div>

        <div class="relative mt-2">
            <textarea v-model="contactForm.message" placeholder="Enter your message"
                class="rounded-xl px-8 py-6 outline-none w-full bg-[#24343D] text-white placeholder:text-xl placeholder:font-extralight min-h-[150px]"
                :class="{ 'border border-red-500': isSubmitted && errors.message }"></textarea>
            <span v-if="isSubmitted && errors.message" class="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                {{ errors.message }}
            </span>
        </div>

        <button type="submit" @click.prevent="handleSubmit"
            class="rounded-xl px-8 py-6 outline-none w-full bg-[#416a80] text-white mt-8 hover:bg-[#385c70] transition-colors">
            Send Message
        </button>
    </form>
</template>

<style scoped>
/* Add any additional styles here */
</style>