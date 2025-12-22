<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const activeIndex = ref(0);

const diamonds = [
    {
        name: 'Round Cut',
        carat: '5.2',
        cut: 'Brilliant Round',
        color: 'D',
        clarity: 'FL',
        price: '$285,000',
        description: 'A masterpiece of precision cutting, this flawless diamond represents the pinnacle of nature\'s artistry.',
        gradient: 'from-cyan-500 to-blue-500',
        image: '/round_cut-removebg-preview.png',
    },
    {
        name: 'Pear Cut',
        carat: '4.8',
        cut: 'Princess',
        color: 'E',
        clarity: 'VVS1',
        price: '$198,000',
        description: 'Bold geometric lines meet exceptional brilliance in this contemporary classic.',
        gradient: 'from-purple-500 to-pink-500',
        image: '/pear_cut-removebg-preview.png',
    },
    {
        name: 'Oval Cut',
        carat: '6.1',
        cut: 'Oval',
        color: 'D',
        clarity: 'IF',
        price: '$342,000',
        description: 'An elongated silhouette that maximizes fire and creates an illusion of greater size.',
        gradient: 'from-pink-500 to-rose-500',
        image: '/oval_cut-removebg-preview.png',
    },
    {
        name: 'Emerald Cut',
        carat: '3.9',
        cut: 'Emerald',
        color: 'F',
        clarity: 'VVS2',
        price: '$156,000',
        description: 'Step-cut facets create a hall of mirrors effect, showcasing exceptional clarity.',
        gradient: 'from-emerald-500 to-teal-500',
        image: '/emerald-cut--removebg-preview.png',
    },
];

let observer: IntersectionObserver | null = null;
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const requestViewing = () => {
    if (route.name === 'Home') {
        // Use requestAnimationFrame to batch DOM operations and prevent forced reflow
        requestAnimationFrame(() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } else {
        router.push({ name: 'Contact' });
    }
};

onMounted(() => {
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

    autoPlayInterval = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % diamonds.length;
    }, 5000);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
});
</script>

<template>
    <section ref="sectionRef" class="relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] py-20 sm:py-32">
        <!-- Background Effects -->
        <div class="absolute inset-0">
            <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-12 text-center sm:mb-16">
                <span
                    :class="[
                        'mb-4 inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent transition-all duration-700 sm:text-sm',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    SIGNATURE COLLECTION
                </span>
                <h2
                    :class="[
                        'font-serif text-3xl font-light text-white transition-all duration-700 delay-100 sm:text-4xl md:text-5xl lg:text-6xl',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    Exceptional <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Diamonds</span>
                </h2>
            </div>

            <!-- Showcase Grid -->
            <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <!-- Diamond Visual -->
                <div
                    :class="[
                        'relative transition-all duration-1000 delay-200',
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    ]"
                >
                    <div class="relative h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-[500px]">
                        <!-- Background glow based on active diamond -->
                        <div
                            :class="[
                                'absolute inset-0 bg-gradient-to-br opacity-20 blur-3xl transition-all duration-700',
                                diamonds[activeIndex].gradient
                            ]"
                        ></div>

                        <!-- Content container -->
                        <div class="relative flex h-full flex-col items-center justify-center p-8 sm:p-12">
                            <!-- Corner decorations -->
                            <div class="absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-white/20 sm:h-20 sm:w-20"></div>
                            <div class="absolute bottom-4 right-4 h-16 w-16 border-b-2 border-r-2 border-white/20 sm:h-20 sm:w-20"></div>

                            <!-- Diamond Image -->
                            <Transition
                                mode="out-in"
                                enter-active-class="transition-all duration-500"
                                enter-from-class="opacity-0 scale-95"
                                enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition-all duration-300"
                                leave-from-class="opacity-100 scale-100"
                                leave-to-class="opacity-0 scale-95"
                            >
                                <div :key="activeIndex" class="absolute inset-0 flex items-center justify-center">
                                    <img 
                                        :src="diamonds[activeIndex].image" 
                                        :alt="`${diamonds[activeIndex].name} diamond - GIA certified luxury engagement ring diamond, ${diamonds[activeIndex].carat} carat ${diamonds[activeIndex].cut} cut, ${diamonds[activeIndex].color} color ${diamonds[activeIndex].clarity} clarity`" 
                                        class="h-[280px] w-[280px] object-contain opacity-90 sm:h-[360px] sm:w-[360px]"
                                        :loading="activeIndex === 0 ? 'eager' : 'lazy'"
                                        :fetchpriority="activeIndex === 0 ? 'high' : 'low'"
                                        width="360"
                                        height="360"
                                        decoding="async"
                                    />
                                </div>
                            </Transition>

                            <!-- Diamond specs display -->
                            <div class="relative z-10 flex w-full items-end justify-between">
                                <div>
                                    <p class="text-xs tracking-wider text-gray-400">CARAT WEIGHT</p>
                                    <p class="text-2xl font-light text-white sm:text-3xl">{{ diamonds[activeIndex].carat }} ct</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs tracking-wider text-gray-400">CERTIFICATION</p>
                                    <p class="text-lg text-white">GIA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation Dots -->
                    <div class="mt-4 flex justify-center gap-3 sm:mt-6 sm:gap-4" role="tablist" aria-label="Diamond selection">
                        <button
                            v-for="(diamond, index) in diamonds"
                            :key="diamond.name"
                            @click="activeIndex = index"
                            :aria-label="`View ${diamond.name} diamond, ${diamond.carat} carat, position ${index + 1} of ${diamonds.length}`"
                            :title="`View ${diamond.name} diamond, ${diamond.carat} carat`"
                            :aria-selected="activeIndex === index"
                            :aria-controls="`diamond-panel-${index}`"
                            role="tab"
                            :id="`diamond-tab-${index}`"
                            type="button"
                            :class="[
                                'h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:h-4 sm:w-4',
                                activeIndex === index ? 'bg-cyan-400 ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#0a0a0f]' : 'bg-white/30 hover:bg-white/50'
                            ]"
                        >
                            <span class="sr-only">View {{ diamond.name }} diamond, {{ diamond.carat }} carat, position {{ index + 1 }} of {{ diamonds.length }}</span>
                        </button>
                    </div>
                </div>

                <!-- Diamond Info -->
                <div
                    :class="[
                        'transition-all duration-1000 delay-400',
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    ]"
                >
                    <Transition
                        mode="out-in"
                        enter-active-class="transition-all duration-500"
                        enter-from-class="opacity-0 translate-y-4"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition-all duration-300"
                        leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 -translate-y-4"
                    >
                        <div :key="activeIndex">
                            <!-- Diamond Name -->
                            <h2 class="mb-4 font-serif text-3xl text-white sm:mb-6 sm:text-4xl md:text-5xl">
                                {{ diamonds[activeIndex].name }} Diamond
                            </h2>

                            <!-- Description -->
                            <p class="mb-6 text-base leading-relaxed text-gray-400 sm:mb-8 sm:text-lg">
                                {{ diamonds[activeIndex].description }}
                            </p>

                            <!-- Specs Grid -->
                            <div class="mb-6 grid grid-cols-2 gap-4 sm:mb-8 sm:gap-6">
                                <div class="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                    <span class="text-xs tracking-wider text-gray-500">CARAT</span>
                                    <p class="mt-1 text-xl font-light text-white sm:text-2xl">{{ diamonds[activeIndex].carat }}</p>
                                </div>
                                <div class="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                    <span class="text-xs tracking-wider text-gray-500">CUT</span>
                                    <p class="mt-1 text-xl font-light text-white sm:text-2xl">{{ diamonds[activeIndex].cut }}</p>
                                </div>
                                <div class="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                    <span class="text-xs tracking-wider text-gray-500">COLOR</span>
                                    <p class="mt-1 text-xl font-light text-white sm:text-2xl">{{ diamonds[activeIndex].color }}</p>
                                </div>
                                <div class="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                    <span class="text-xs tracking-wider text-gray-500">CLARITY</span>
                                    <p class="mt-1 text-xl font-light text-white sm:text-2xl">{{ diamonds[activeIndex].clarity }}</p>
                                </div>
                            </div>

                            <!-- Price & CTA -->
                            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <span class="text-xs tracking-wider text-gray-500">STARTING FROM</span>
                                    <p class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-2xl text-transparent sm:text-3xl">
                                        {{ diamonds[activeIndex].price }}
                                    </p>
                                </div>
                                <button 
                                    @click="requestViewing" 
                                    aria-label="Request viewing for this diamond"
                                    class="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 px-7 py-3.5 text-sm font-bold tracking-wider text-white shadow-lg shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/50 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:px-9 sm:py-4"
                                >
                                    <span class="relative z-10 flex items-center gap-2.5">
                                        REQUEST VIEWING
                                        <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                </button>
                            </div>
                        </div>
                    </Transition>

                    <!-- Progress Indicators -->
                    <div class="mt-8 flex gap-2 sm:mt-10" role="tablist" aria-label="Diamond progress indicators">
                        <button
                            v-for="(_, index) in diamonds"
                            :key="index"
                            @click="activeIndex = index"
                            :aria-label="`Select ${diamonds[index].name} diamond, position ${index + 1} of ${diamonds.length}`"
                            :title="`Select ${diamonds[index].name} diamond, position ${index + 1} of ${diamonds.length}`"
                            :aria-selected="activeIndex === index"
                            :aria-controls="`diamond-panel-${index}`"
                            role="tab"
                            :id="`diamond-progress-tab-${index}`"
                            type="button"
                            class="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
                        >
                            <span class="sr-only">Select {{ diamonds[index].name }} diamond, position {{ index + 1 }} of {{ diamonds.length }}</span>
                            <div
                                :class="[
                                    'h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300',
                                    activeIndex === index ? 'w-full' : 'w-0 group-hover:w-1/3'
                                ]"
                                aria-hidden="true"
                            ></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
