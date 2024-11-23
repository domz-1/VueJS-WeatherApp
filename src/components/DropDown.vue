<script>
export default {
    name: 'DropDown',
    data() {
        return {
            selectedTitle: this.title, // Changed from titleOfDropdown
            active: false
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        buttonClass: {
            type: String,
            default: 'text-white bg-[#213139] text-[23px] border border-gray-600'
        }
    },
    methods: {
        toggleDropdown() {  // Removed item parameter
            this.active = !this.active;
        },
        selectItem(item) {  // New method to handle item selection
            this.selectedTitle = item;
            this.active = false;
            this.$emit('item-selected', item);
        },
        closeDropdown(e) {
            if (!this.$el.contains(e.target)) {
                this.active = false;
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.closeDropdown);
    },
    beforeUnmount() {  // Changed from beforeDestroy to beforeUnmount for Vue 3
        document.removeEventListener('click', this.closeDropdown);
    }
}
</script>

<template>
    <div class="relative inline-block text-left z-[10]">
        <button @click="toggleDropdown" type="button" :class="[
            buttonClass,
            'font-medium rounded-[15px] text-sm px-5 py-7 text-center',
            'inline-flex items-center justify-center gap-3'
        ]" :aria-expanded="active" aria-haspopup="true">
            {{ selectedTitle }}
            <svg class="w-2.5 h-2.5 ms-3" :class="{ 'transform rotate-180': active }" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <div v-show="active"
            class="absolute right-0 mt-2 w-[194px] rounded-lg shadow-lg bg-[#213139] ring-1 ring-black ring-opacity-5"
            role="menu" aria-orientation="vertical">
            <ul class="py-2">
                <li v-for="(item, index) in items" :key="index" role="menuitem">
                    <a href="#"
                        class="block px-4 py-2 text-sm text-white hover:bg-[#2f4552] transition-colors duration-200"
                        @click.prevent="selectItem(item)">
                        {{ item }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.transform {
    transition: transform 0.2s ease-in-out;
}
</style>