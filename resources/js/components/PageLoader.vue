<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const progress = ref(0);

onMounted(() => {
    const interval = setInterval(() => {
        progress.value += Math.random() * 15;
        if (progress.value >= 100) {
            progress.value = 100;
            clearInterval(interval);
            setTimeout(() => {
                isLoading.value = false;
            }, 500);
        }
    }, 100);
});
</script>

<template>
    <Transition
        leave-active-class="transition-all duration-1000 ease-in-out"
        leave-to-class="opacity-0 scale-105"
    >
        <div
            v-if="isLoading"
            class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
        >
            <!-- Animated Background -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-3xl"></div>
                <div class="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/10 blur-3xl" style="animation-delay: 0.5s"></div>
            </div>

            <!-- Diamond Animation -->
            <div class="relative mb-10 sm:mb-12">
                <!-- Outer rotating ring -->
                <div class="absolute inset-0 animate-[spin_4s_linear_infinite]">
                    <svg class="h-32 w-32 sm:h-40 sm:w-40" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient1)" stroke-width="0.5" stroke-dasharray="10 5" />
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#06b6d4" />
                                <stop offset="50%" style="stop-color:#a855f7" />
                                <stop offset="100%" style="stop-color:#ec4899" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <!-- Diamond Shape -->
                <div class="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                    <svg viewBox="0 0 100 100" class="h-20 w-20 animate-pulse drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] sm:h-24 sm:w-24">
                        <defs>
                            <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#06b6d4" />
                                <stop offset="50%" style="stop-color:#a855f7" />
                                <stop offset="100%" style="stop-color:#ec4899" />
                            </linearGradient>
                        </defs>
                        <!-- Diamond facets -->
                        <polygon points="50,5 80,35 50,95 20,35" fill="url(#diamondGradient)" opacity="0.9" />
                        <polygon points="50,5 80,35 50,45 20,35" fill="white" opacity="0.2" />
                        <line x1="20" y1="35" x2="80" y2="35" stroke="white" stroke-width="0.5" opacity="0.3" />
                    </svg>

                    <!-- Sparkles -->
                    <div class="absolute -left-2 top-1/4 h-1.5 w-1.5 animate-ping rounded-full bg-cyan-400"></div>
                    <div class="absolute -right-1 top-1/3 h-1 w-1 animate-ping rounded-full bg-purple-400" style="animation-delay: 0.3s"></div>
                    <div class="absolute -bottom-1 left-1/3 h-1 w-1 animate-ping rounded-full bg-pink-400" style="animation-delay: 0.6s"></div>
                </div>
            </div>

            <!-- Brand Name -->
            <div class="mb-8 overflow-hidden">
                <h1 class="animate-[slideUp_0.8s_ease-out_forwards] bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text font-serif text-3xl tracking-[0.3em] text-transparent sm:text-4xl">
                    GEMS
                </h1>
            </div>

            <!-- Progress Bar -->
            <div class="w-40 overflow-hidden rounded-full bg-white/10 sm:w-48">
                <div
                    class="h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-300 ease-out"
                    :style="{ width: `${progress}%` }"
                ></div>
            </div>

            <!-- Loading Text -->
            <p class="mt-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-light tracking-[0.2em] text-transparent">
                LOADING BRILLIANCE
            </p>
        </div>
    </Transition>
</template>

<style scoped>
@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
