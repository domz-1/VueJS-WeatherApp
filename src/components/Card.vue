<script setup>
import Sunny from '../../public/sun.png';
import Cloudy from '../../public/pcloudy.png';
import Rainy from '../../public/Tshower.png';
import Shadow from '../../public/Shadow.png';
import { ref, computed } from 'vue';
import { useMouse, useElementHover } from '@vueuse/core';

const props = defineProps({
    // Weather data props
    town: String,
    degrees: Number,
    windSpeed: Number,
    DateOfWeather: String,
    weather: String,

    // Animation control props
    maxRotation: {
        type: Number,
        default: 15,
        description: 'Maximum rotation angle in degrees'
    },
    sensitivity: {
        type: Number,
        default: 1,
        description: 'Mouse movement sensitivity multiplier'
    },
    transitionSpeed: {
        type: Number,
        default: 0.5,
        description: 'Animation transition speed in seconds'
    },
    depth: {
        type: Number,
        default: 1,
        description: 'Depth intensity multiplier for 3D effect'
    },
    smoothing: {
        type: Number,
        default: 0.15,
        description: 'Smoothing factor for mouse movement (0-1)'
    }
});

const cardRef = ref(null);
const { x, y } = useMouse();
const isHovering = useElementHover(cardRef);

// Current rotation values with smoothing
const currentRotation = ref({ x: 0, y: 0 });

// Target rotation based on mouse position
const targetRotation = computed(() => {
    if (!cardRef.value || !isHovering.value) return { x: 0, y: 0 };

    const rect = cardRef.value.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate relative mouse position from center (-1 to 1)
    const mouseX = (x.value - centerX) / (rect.width / 2);
    const mouseY = (y.value - centerY) / (rect.height / 2);

    return {
        x: -mouseY * props.maxRotation * props.sensitivity,
        y: mouseX * props.maxRotation * props.sensitivity
    };
});

// Smooth rotation animation
function updateRotation() {
    if (!isHovering.value) {
        // Return to neutral position when not hovering
        currentRotation.value = {
            x: currentRotation.value.x * (1 - props.smoothing),
            y: currentRotation.value.y * (1 - props.smoothing)
        };
    } else {
        // Smooth transition to target rotation
        currentRotation.value = {
            x: currentRotation.value.x + (targetRotation.value.x - currentRotation.value.x) * props.smoothing,
            y: currentRotation.value.y + (targetRotation.value.y - currentRotation.value.y) * props.smoothing
        };
    }

    requestAnimationFrame(updateRotation);
}

// Start animation loop
updateRotation();

// Computed styles
const transformStyle = computed(() => ({
    transform: `
        perspective(1000px) 
        rotateX(${currentRotation.value.x}deg) 
        rotateY(${currentRotation.value.y}deg)
    `,
    transition: isHovering.value ? 'none' : `transform ${props.transitionSpeed}s ease-out`
}));

const weatherIcons = {
    Sunny,
    Cloudy,
    Rainy,
};
</script>

<template>
    <div ref="cardRef"
        class="card flex flex-col justify-end items-center w-[355px] h-[486px] bg-[#24343D] rounded-[20px] relative px-[52px] pb-[20px]"
        :style="transformStyle">
        <div class="status w-full flex justify-center">
            <img :src="Shadow" alt="shadow" class="absolute top-[-64px] right-[-67px]">

            <img :src="weatherIcons[weather]" alt="Weather Icon"
                class="absolute top-[-50px] right-[-12px] h-auto cardImage" :style="{
                    width: weather === 'Rainy' ? '265px' : '232px',
                    transform: `
                        ${weather === 'Sunny' ? 'scale(.88)' : 'scale(1)'}
                        translateZ(${20 * depth}px)
                    `,
                }" />
        </div>
        <div class="text mt-6 flex flex-col gap-[14px]" :style="{ transform: `translateZ(${10 * depth}px)` }">
            <p class="text-white text-[40px] font-medium">
                <span class="font-bold">{{ town }}</span>
                <span>{{ degrees }}°C</span>
            </p>
            <p class="text-white text-[25px] font-normal">Wind Speed: {{ windSpeed }} km/h</p>
            <p class="text-white text-[25px] font-normal">{{ DateOfWeather }}</p>
            <p class="text-white text-[25px] font-normal">{{ weather }}</p>
        </div>
    </div>
</template>

<style scoped>
.cardImage {
    filter: drop-shadow(0px -1px 5px #fee3c5);
    transition: transform 0.3s ease;
}

.card {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    transform-style: preserve-3d;
    will-change: transform;
}

.card:hover .cardImage {
    transform: translateZ(20px) scale(1.05);
}

.text {
    transform: translateZ(10px);
}
</style>