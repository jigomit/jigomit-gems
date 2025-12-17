<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const hoveredIndex = ref<number | null>(null);

const collections = [
    {
        image: '/round_cut-removebg-preview.png',
        alt: 'Round Cut Diamond',
        title: 'Round Cut',
        detail: 'Classic brilliance with 58 facets',
    },
    {
        image: '/oval_cut-removebg-preview.png',
        alt: 'Oval Cut Diamond',
        title: 'Oval Cut',
        detail: 'Elegant elongated shape',
    },
    {
        image: '/pear_cut-removebg-preview.png',
        alt: 'Pear Cut Diamond',
        title: 'Pear Cut',
        detail: 'Unique teardrop elegance',
    },
    {
        image: '/emerald-cut-removebg-preview.png',
        alt: 'Emerald Cut Diamond',
        title: 'Emerald Cut',
        detail: 'Sophisticated step-cut facets',
    },
];

let observer: IntersectionObserver | null = null;

const viewAllCollections = () => {
    if (route.name === 'Home') {
        const element = document.getElementById('collection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        router.push({ name: 'Collection' });
    }
};

const viewCollection = (collection: typeof collections[0]) => {
    if (route.name === 'Home') {
        const element = document.getElementById('collection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        router.push({ name: 'Collection' });
    }
};

const startDesign = () => {
    if (route.name === 'Home') {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
        { threshold: 0.1 }
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
        <!-- Background -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05),transparent_50%)]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05),transparent_50%)]"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-12 flex flex-col items-center justify-between gap-6 sm:mb-16 md:flex-row">
                <div>
                    <span
                        :class="[
                            'mb-3 inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent transition-all duration-700 sm:text-sm',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        EXPLORE
                    </span>
                    <h2
                        :class="[
                            'font-serif text-3xl font-light text-white transition-all duration-700 delay-100 sm:text-4xl md:text-5xl',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        ]"
                    >
                        Our Collections
                    </h2>
                </div>
                <button
                    @click="viewAllCollections"
                    aria-label="View all diamond collections"
                    :class="[
                        'group flex items-center gap-2 text-sm tracking-wider text-gray-400 transition-all duration-700 delay-200 hover:text-white focus:outline-none focus:text-white focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    VIEW ALL COLLECTIONS
                    <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>

            <!-- Collection Grid -->
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                <div
                    v-for="(collection, index) in collections"
                    :key="collection.alt"
                    :data-collection-title="collection.title"
                    :class="[
                        'group relative min-h-[280px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] transition-all duration-700 sm:min-h-[320px]',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    ]"
                    :style="{ transitionDelay: `${300 + index * 100}ms` }"
                    @mouseenter="hoveredIndex = index"
                    @mouseleave="hoveredIndex = null"
                    @click="viewCollection(collection)"
                >
                    <!-- Background gradient -->
                    <div
                        :class="[
                            'absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent transition-all duration-500',
                            hoveredIndex === index ? 'from-white/10 via-white/5' : ''
                        ]"
                    ></div>

                    <!-- Gradient border effect on hover -->
                    <div
                        :class="[
                            'absolute inset-0 rounded-2xl border-2 transition-all duration-500',
                            hoveredIndex === index ? 'border-transparent bg-gradient-to-br from-cyan-500/50 via-purple-500/50 to-pink-500/50 opacity-100' : 'border-white/10 opacity-0'
                        ]"
                        style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; padding: 2px;"
                    ></div>

                    <!-- Diamond Image -->
                    <div class="relative flex h-full flex-col items-center justify-center p-4 sm:p-6">
                        <div class="relative flex h-[140px] w-full items-center justify-center sm:h-[160px]">
                            <img
                                :src="collection.image"
                                :alt="collection.alt"
                                class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                                width="280"
                                height="280"
                                decoding="async"
                                fetchpriority="low"
                            />
                        </div>
                        
                        <!-- Short Details -->
                        <div class="mt-4 text-center">
                            <h3 class="mb-1 font-serif text-lg text-white sm:text-xl">
                                {{ collection.title }}
                            </h3>
                            <p class="text-xs text-gray-400 sm:text-sm">
                                {{ collection.detail }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Featured Banner -->
            <div
                :class="[
                    'relative mt-12 overflow-hidden rounded-3xl transition-all duration-1000 delay-700 sm:mt-16',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                ]"
            >
                <div class="relative overflow-hidden bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f] p-6 sm:p-12 lg:p-16">
                <div class="flex items-center">
                    <div class="max-w-lg">
                        <span class="mb-2 inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.2em] text-transparent sm:mb-3 sm:text-sm">
                            BESPOKE SERVICE
                        </span>
                        <h3 class="mb-3 font-serif text-2xl text-white sm:mb-4 sm:text-3xl md:text-4xl">
                            Create Your <span class="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Masterpiece</span>
                        </h3>
                        <p class="mb-4 text-sm text-gray-400 sm:mb-6 sm:text-base">
                            Work with our master craftsmen to design a one-of-a-kind piece that tells your unique story.
                        </p>
                        <button 
                            @click="startDesign" 
                            aria-label="Start your custom diamond design"
                            class="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-medium tracking-wider text-black transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:px-6 sm:py-3 sm:text-sm"
                        >
                            START YOUR DESIGN
                            <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
