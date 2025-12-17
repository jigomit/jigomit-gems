<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isVisible = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
const videoRef = ref<HTMLVideoElement | null>(null);
const shouldLoadVideo = ref(false);

const handleMouseMove = (e: MouseEvent) => {
    mouseX.value = (e.clientX / window.innerWidth - 0.5) * 30;
    mouseY.value = (e.clientY / window.innerHeight - 0.5) * 30;
};

const scrollToCollection = () => {
    if (route.name === 'Home') {
        const element = document.getElementById('collection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        router.push({ name: 'Collection' });
    }
};

const watchStory = () => {
    if (route.name === 'Home') {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        router.push({ name: 'Craftsmanship' });
    }
};

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 1500);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Lazy load video when it comes into view
    nextTick(() => {
        if (videoRef.value) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !shouldLoadVideo.value) {
                            shouldLoadVideo.value = true;
                            if (videoRef.value) {
                                videoRef.value.load();
                            }
                            observer.disconnect();
                        }
                    });
                },
                { rootMargin: '50px' }
            );
            observer.observe(videoRef.value);
        }
    });
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
    <section class="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f]">
        <!-- Animated Gradient Mesh Background -->
        <div class="absolute inset-0">
            <!-- Primary gradient orbs -->
            <div
                class="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl transition-transform duration-1000"
                :style="{ transform: `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)` }"
            ></div>
            <div
                class="absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-purple-500/20 via-pink-500/10 to-transparent blur-3xl transition-transform duration-1000"
                :style="{ transform: `translate(${mouseX * -0.3}px, ${mouseY * -0.3}px)` }"
            ></div>
            <div
                class="absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-sky-500/15 to-transparent blur-3xl transition-transform duration-1000"
                :style="{ transform: `translate(${mouseX * 0.2}px, ${mouseY * 0.2}px)` }"
            ></div>

            <!-- Sparkle particles -->
            <div class="absolute inset-0">
                <div class="absolute left-[10%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-white/60"></div>
                <div class="absolute left-[20%] top-[60%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300/60" style="animation-delay: 0.5s"></div>
                <div class="absolute left-[80%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-purple-300/60" style="animation-delay: 1s"></div>
                <div class="absolute left-[70%] top-[70%] h-1.5 w-1.5 animate-pulse rounded-full bg-pink-300/60" style="animation-delay: 1.5s"></div>
                <div class="absolute left-[40%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-sky-300/60" style="animation-delay: 2s"></div>
                <div class="absolute left-[60%] top-[85%] h-1 w-1 animate-pulse rounded-full bg-white/60" style="animation-delay: 0.3s"></div>
                <div class="absolute left-[90%] top-[50%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300/60" style="animation-delay: 0.8s"></div>
                <div class="absolute left-[5%] top-[80%] h-1 w-1 animate-pulse rounded-full bg-purple-300/60" style="animation-delay: 1.3s"></div>
            </div>

            <!-- Grid pattern overlay -->
            <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-50"></div>
        </div>

        <!-- Main Content -->
        <div class="relative flex min-h-screen items-center px-4 pt-20 sm:px-6 lg:px-8">
            <div class="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <!-- Left Content -->
                <div class="order-2 text-center lg:order-1 lg:text-left">
                    <!-- Luxury Badge -->
                    <div
                        :class="[
                            'mb-6 inline-flex items-center gap-3 transition-all duration-1000 sm:mb-8',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        ]"
                    >
                        <span class="relative flex h-2 w-2">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                            <span class="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                        </span>
                        <span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-xs font-medium tracking-[0.25em] text-transparent sm:text-sm">
                            WORLD'S FINEST DIAMONDS
                        </span>
                    </div>

                    <!-- Main Headline -->
                    <h1
                        :class="[
                            'mb-6 font-serif transition-all duration-1000 delay-200 sm:mb-8',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        ]"
                    >
                        <span class="block text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Where Light
                        </span>
                        <span class="mt-2 block text-4xl font-light leading-tight sm:mt-3 sm:text-5xl md:text-6xl lg:text-7xl">
                            Meets
                            <span class="relative inline-block">
                                <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                    Perfection
                                </span>
                                <!-- Underline animation -->
                                <span
                                    :class="[
                                        'absolute -bottom-2 left-0 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-1000 delay-700',
                                        isVisible ? 'w-full' : 'w-0'
                                    ]"
                                ></span>
                            </span>
                        </span>
                    </h1>

                    <!-- Tagline -->
                    <p
                        :class="[
                            'mx-auto mb-8 max-w-md text-base font-light leading-relaxed text-gray-400 transition-all duration-1000 delay-400 sm:mb-10 sm:text-lg lg:mx-0 lg:max-w-lg',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        ]"
                    >
                        Discover exceptional GIA certified diamonds and luxury engagement rings at our Fifth Avenue New York showroom. Expert diamond education guides help you choose the perfect engagement ring diamond. Explore our collections of round cut, oval cut, pear cut, and emerald cut diamonds.
                    </p>

                    <!-- CTA Buttons -->
                    <div
                        :class="[
                            'mb-10 flex flex-col items-center gap-4 transition-all duration-1000 delay-500 sm:mb-12 sm:flex-row sm:gap-5 lg:justify-start',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        ]"
                    >
                        <button 
                            @click="scrollToCollection" 
                            aria-label="Explore our diamond collection"
                            class="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-medium tracking-wider text-white shadow-lg shadow-purple-500/25 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:w-auto sm:px-10"
                        >
                            <span class="relative z-10">EXPLORE COLLECTION</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </button>
                        <button 
                            @click="watchStory" 
                            aria-label="Watch our story about craftsmanship"
                            class="group flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:w-auto sm:px-10"
                        >
                            <svg class="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                            </svg>
                            WATCH STORY
                        </button>
                    </div>

                    <!-- Trust Indicators -->
                    <div
                        :class="[
                            'flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 delay-700 sm:gap-8 lg:justify-start',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        ]"
                    >
                        <div class="flex items-center gap-2">
                            <svg class="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-xs text-gray-400 sm:text-sm">GIA Certified</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span class="text-xs text-gray-400 sm:text-sm">5-Star Reviews</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="h-5 w-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-xs text-gray-400 sm:text-sm">Secure & Insured</span>
                        </div>
                    </div>
                </div>

                <!-- Right Content - Diamond Visual -->
                <div
                    :class="[
                        'relative order-1 transition-all duration-1000 delay-300 lg:order-2',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    ]"
                >
                    <div class="relative mx-auto aspect-square max-w-md lg:max-w-none">
                        <!-- Outer glow rings -->
                        <div class="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-cyan-500/20" style="will-change: transform;"></div>
                        <div class="absolute inset-4 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-purple-500/20" style="will-change: transform;"></div>
                        <div class="absolute inset-8 animate-[spin_20s_linear_infinite] rounded-full border border-pink-500/20" style="will-change: transform;"></div>

                        <!-- Main diamond image container -->
                        <div
                            class="absolute inset-0 flex items-center justify-center transition-transform duration-700"
                            style="will-change: transform;"
                            :style="{ transform: `perspective(1000px) rotateX(${mouseY * 0.1}deg) rotateY(${mouseX * 0.1}deg)` }"
                        >
                            <!-- Diamond glow effect -->
                            <div class="absolute h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/30 via-purple-400/20 to-pink-400/30 blur-3xl sm:h-80 sm:w-80"></div>

                            <!-- Diamond video -->
                            <div class="relative">
                                <video
                                    ref="videoRef"
                                    :src="shouldLoadVideo ? '/gems_360.mp4' : null"
                                    autoplay
                                    loop
                                    muted
                                    playsinline
                                    preload="none"
                                    poster="/diamond-logo.png"
                                    class="relative h-56 w-56 rounded-full object-cover shadow-2xl shadow-purple-500/20 ring-1 ring-white/10 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                                    aria-label="360 degree view of luxury GIA certified diamond engagement ring"
                                    style="will-change: opacity;"
                                />
                                <!-- Overlay shine effect -->
                                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                            </div>
                        </div>

                        <!-- Decorative sparkles -->
                        <div class="absolute right-1/4 top-0 h-3 w-3 animate-ping rounded-full bg-cyan-400/60"></div>
                        <div class="absolute bottom-1/4 left-0 h-2 w-2 animate-ping rounded-full bg-purple-400/60" style="animation-delay: 0.5s"></div>
                        <div class="absolute right-0 top-1/2 h-2 w-2 animate-ping rounded-full bg-pink-400/60" style="animation-delay: 1s"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
