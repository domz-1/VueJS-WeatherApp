<script>
export default {
    name: 'SignUp',
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            errors: {
                username: '',
                password: ''
            },
            isSubmitted: false 
        }
    },
    methods: {
        validateForm() {
            let isValid = true;

            // Reset errors
            this.errors.username = '';
            this.errors.password = '';

            // Username validation
            if (!this.user.username.trim()) {
                this.errors.username = 'Username is required';
                isValid = false;
            }

            // Password validation
            if (!this.user.password) {
                this.errors.password = 'Password is required';
                isValid = false;
            }

            return isValid;
        },
        handleSubmit() {
            this.isSubmitted = true; // Set submission flag

            if (this.validateForm()) {
                this.$router.push('/');
            }
        }
    }
}
</script>

<template>
    <form action="" method="get" class="flex flex-col gap-4 relative mt-32 w-full max-w-md mx-auto">
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