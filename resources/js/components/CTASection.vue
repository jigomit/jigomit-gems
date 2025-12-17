<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import BookingModal from './BookingModal.vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const isModalOpen = ref(false);

let observer: IntersectionObserver | null = null;

const bookConsultation = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const handleFormSubmit = (data: any) => {
    // Handle form submission here
    // In production, you would send this data to your backend API
    console.log('Booking request submitted:', data);
};

const callUs = () => {
    // Open phone dialer
    window.location.href = 'tel:+12125550123';
};

onMounted(() => {
    // Show content immediately
    setTimeout(() => {
        isVisible.value = true;
    }, 100);

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                }
            });
        },
        { threshold: 0.2 }
    );

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<template>
    <section ref="sectionRef" class="relative overflow-hidden bg-[#0a0a0f] py-20 sm:py-32">
        <!-- Background Elements -->
        <div class="absolute inset-0">
            <!-- Animated gradient orbs -->
            <div class="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 animate-pulse rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96"></div>
            <div class="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 animate-pulse rounded-full bg-purple-500/10 blur-3xl sm:h-96 sm:w-96" style="animation-delay: 1s"></div>
            <div class="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 animate-pulse rounded-full bg-pink-500/10 blur-3xl" style="animation-delay: 0.5s"></div>

            <!-- Diamond pattern -->
            <div class="absolute inset-0 opacity-5">
                <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="diamondPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <polygon points="10,0 20,10 10,20 0,10" fill="none" stroke="url(#patternGradient)" stroke-width="0.5" />
                        </pattern>
                        <linearGradient id="patternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#06b6d4" />
                            <stop offset="50%" style="stop-color:#a855f7" />
                            <stop offset="100%" style="stop-color:#ec4899" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diamondPattern)" />
                </svg>
            </div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/20 via-purple-950/20 to-pink-950/20 p-8 backdrop-blur-sm sm:p-12 md:p-16 lg:p-20">
                <!-- Corner Decorations -->
                <div class="absolute left-0 top-0 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-cyan-500/40 sm:h-32 sm:w-32"></div>
                <div class="absolute bottom-0 right-0 h-20 w-20 rounded-br-3xl border-b-2 border-r-2 border-pink-500/40 sm:h-32 sm:w-32"></div>

                <div class="relative text-center">
                    <!-- Badge -->
                    <div
                        :class="[
                            'mb-6 transition-all duration-700 sm:mb-8',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        <span class="inline-flex items-center gap-2 text-xs tracking-[0.2em] sm:gap-3 sm:text-sm">
                            <span class="h-px w-6 bg-gradient-to-r from-cyan-500 to-purple-500 sm:w-8"></span>
                            <span class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">EXCLUSIVE INVITATION</span>
                            <span class="h-px w-6 bg-gradient-to-r from-purple-500 to-pink-500 sm:w-8"></span>
                        </span>
                    </div>

                    <!-- Headline -->
                    <h2
                        :class="[
                            'mb-4 font-serif text-3xl font-light text-white transition-all duration-700 delay-100 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        Begin Your
                        <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>

                    <!-- Subtext -->
                    <p
                        :class="[
                            'mx-auto mb-8 max-w-2xl px-4 text-base text-gray-400 transition-all duration-700 delay-200 sm:mb-10 sm:text-lg',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        Schedule a private consultation with our diamond experts and discover
                        the perfect stone that captures your unique story.
                    </p>

                    <!-- CTA Buttons -->
                    <div
                        :class="[
                            'flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row sm:gap-6',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        <button 
                            @click="bookConsultation" 
                            aria-label="Book a private consultation"
                            class="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-medium tracking-[0.15em] text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:w-auto sm:px-12"
                        >
                            <span class="relative z-10">BOOK CONSULTATION</span>
                            <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                        </button>
                        <button 
                            @click="callUs" 
                            aria-label="Call us at +1-212-555-0123"
                            class="group w-full rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-medium tracking-[0.15em] text-white transition-all duration-500 hover:border-purple-500/50 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:w-auto sm:px-12"
                        >
                            <span class="flex items-center justify-center gap-3">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                CALL US
                            </span>
                        </button>
                    </div>

                    <!-- Contact Info -->
                    <div
                        :class="[
                            'mt-10 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-10 transition-all duration-700 delay-500 sm:mt-12 sm:flex-row sm:gap-12 sm:pt-12',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        <div class="flex items-center gap-3">
                            <svg class="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-sm text-gray-400">Fifth Avenue, New York</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="text-sm text-gray-400">concierge@gems.com</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="h-5 w-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-sm text-gray-400">Mon - Sat, 10AM - 7PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Booking Modal -->
    <BookingModal :is-open="isModalOpen" @close="closeModal" @submit="handleFormSubmit" />
</template>
