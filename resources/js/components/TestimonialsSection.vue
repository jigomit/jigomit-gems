<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const activeIndex = ref(0);

const testimonials = [
    {
        name: 'Alexandra Richardson',
        title: 'New York, USA',
        image: 'A',
        quote: 'The moment I saw my engagement ring from GEMS, I knew it was perfect. The brilliance and fire of the diamond exceeded all my expectations. Their attention to detail is unmatched.',
        rating: 5,
    },
    {
        name: 'James Chen',
        title: 'Singapore',
        image: 'J',
        quote: 'As a collector, I\'ve purchased from many prestigious houses. GEMS stands apart with their exceptional curation and personalized service. Each piece tells a story.',
        rating: 5,
    },
    {
        name: 'Victoria Laurent',
        title: 'Paris, France',
        image: 'V',
        quote: 'The bespoke experience at GEMS transformed my vision into a masterpiece. Their master craftsmen created an heirloom that will be treasured for generations.',
        rating: 5,
    },
    {
        name: 'Mohammed Al-Rashid',
        title: 'Dubai, UAE',
        image: 'M',
        quote: 'GEMS delivered an extraordinary 8-carat diamond that surpassed even the most exacting standards. Their expertise in rare stones is truly exceptional.',
        rating: 5,
    },
];

let observer: IntersectionObserver | null = null;
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length;
};

const prevSlide = () => {
    activeIndex.value = activeIndex.value === 0 ? testimonials.length - 1 : activeIndex.value - 1;
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

    autoPlayInterval = setInterval(nextSlide, 6000);
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
    <section ref="sectionRef" class="relative bg-[#0a0a0f] py-20 sm:py-32">
        <!-- Background -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.03),transparent_50%)]"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.03),transparent_50%)]"></div>
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
                    TESTIMONIALS
                </span>
                <h2
                    :class="[
                        'font-serif text-3xl font-light text-white transition-all duration-700 delay-100 sm:text-4xl md:text-5xl',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    Voices of <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Excellence</span>
                </h2>
            </div>

            <!-- Testimonial Carousel -->
            <div
                :class="[
                    'relative transition-all duration-1000 delay-300',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                ]"
            >
                <!-- Quote Icon -->
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 sm:-top-12">
                    <svg class="h-16 w-16 text-purple-500/20 sm:h-24 sm:w-24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                <!-- Cards Container -->
                <div class="relative overflow-hidden">
                    <div
                        class="flex transition-transform duration-700 ease-out"
                        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
                    >
                        <div
                            v-for="(testimonial, index) in testimonials"
                            :key="testimonial.name"
                            class="w-full shrink-0 px-4"
                        >
                            <div class="mx-auto max-w-3xl text-center">
                                <!-- Stars -->
                                <div class="mb-6 flex justify-center gap-1 sm:mb-8">
                                    <svg
                                        v-for="star in testimonial.rating"
                                        :key="star"
                                        class="h-4 w-4 text-purple-400 sm:h-5 sm:w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <!-- Quote -->
                                <blockquote class="mb-8 font-serif text-xl font-light italic leading-relaxed text-gray-300 sm:mb-10 sm:text-2xl md:text-3xl">
                                    "{{ testimonial.quote }}"
                                </blockquote>

                                <!-- Author -->
                                <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                    <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 text-xl font-semibold text-white sm:h-16 sm:w-16 sm:text-2xl">
                                        {{ testimonial.image }}
                                    </div>
                                    <div class="text-center sm:text-left">
                                        <p class="font-medium text-white">{{ testimonial.name }}</p>
                                        <p class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-sm text-transparent">{{ testimonial.title }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation -->
                <div class="mt-10 flex items-center justify-center gap-4 sm:mt-12">
                    <button
                        @click="prevSlide"
                        class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-purple-500 hover:text-purple-400 sm:h-12 sm:w-12"
                    >
                        <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <!-- Dots -->
                    <div class="flex gap-2">
                        <button
                            v-for="(_, index) in testimonials"
                            :key="index"
                            @click="activeIndex = index"
                            :class="[
                                'h-2 rounded-full transition-all duration-300',
                                activeIndex === index ? 'w-6 bg-gradient-to-r from-cyan-400 to-purple-400 sm:w-8' : 'w-2 bg-white/20 hover:bg-white/40'
                            ]"
                        ></button>
                    </div>

                    <button
                        @click="nextSlide"
                        class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-purple-500 hover:text-purple-400 sm:h-12 sm:w-12"
                    >
                        <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
