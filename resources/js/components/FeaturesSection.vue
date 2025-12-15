<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const features = [
    {
        icon: 'lightning',
        title: 'Lightning Fast',
        description: 'Experience blazing-fast performance with our optimized infrastructure. Deploy in seconds, not minutes.',
        gradient: 'from-yellow-500 to-orange-500',
    },
    {
        icon: 'shield',
        title: 'Enterprise Security',
        description: 'Bank-grade encryption and compliance. Your data is protected with SOC 2 Type II certification.',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        icon: 'puzzle',
        title: 'Seamless Integrations',
        description: 'Connect with 50+ tools you already use. From Slack to GitHub, we\'ve got you covered.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: 'chart',
        title: 'Advanced Analytics',
        description: 'Gain deep insights with real-time analytics. Make data-driven decisions with confidence.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: 'users',
        title: 'Team Collaboration',
        description: 'Work together seamlessly. Real-time collaboration features keep your team in sync.',
        gradient: 'from-indigo-500 to-violet-500',
    },
    {
        icon: 'cloud',
        title: 'Cloud Native',
        description: 'Built for the cloud from day one. Scale automatically based on your needs.',
        gradient: 'from-sky-500 to-blue-500',
    },
];

let observer: IntersectionObserver | null = null;

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
    <section id="features" ref="sectionRef" class="relative py-32">
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>

        <div class="relative mx-auto max-w-7xl px-6">
            <!-- Section Header -->
            <div class="mx-auto mb-20 max-w-3xl text-center">
                <span
                    :class="[
                        'mb-4 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-400 transition-all duration-700',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    Features
                </span>
                <h2
                    :class="[
                        'mb-6 text-4xl font-bold tracking-tight transition-all duration-700 delay-100 md:text-5xl',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    Everything you need to
                    <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">succeed</span>
                </h2>
                <p
                    :class="[
                        'text-lg text-gray-400 transition-all duration-700 delay-200',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    Powerful features designed to help your team work smarter, not harder.
                    Built with modern teams in mind.
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(feature, index) in features"
                    :key="feature.title"
                    :class="[
                        'group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-700 hover:border-white/10 hover:bg-white/[0.05]',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                    :style="{ transitionDelay: `${300 + index * 100}ms` }"
                >
                    <!-- Hover Glow Effect -->
                    <div :class="['absolute -inset-px rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20', feature.gradient]"></div>

                    <!-- Icon -->
                    <div :class="['mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br', feature.gradient]">
                        <!-- Lightning -->
                        <svg v-if="feature.icon === 'lightning'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <!-- Shield -->
                        <svg v-if="feature.icon === 'shield'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <!-- Puzzle -->
                        <svg v-if="feature.icon === 'puzzle'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                        <!-- Chart -->
                        <svg v-if="feature.icon === 'chart'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <!-- Users -->
                        <svg v-if="feature.icon === 'users'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <!-- Cloud -->
                        <svg v-if="feature.icon === 'cloud'" class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>

                    <!-- Content -->
                    <h3 class="mb-3 text-xl font-semibold">{{ feature.title }}</h3>
                    <p class="text-gray-400">{{ feature.description }}</p>

                    <!-- Arrow Icon -->
                    <div class="mt-6 flex items-center text-sm font-medium text-gray-500 transition-colors group-hover:text-white">
                        <span>Learn more</span>
                        <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- CTA Banner -->
            <div
                :class="[
                    'relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 p-12 text-center transition-all duration-700 delay-700',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                <!-- Background Pattern -->
                <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                <div class="relative">
                    <h3 class="mb-4 text-3xl font-bold md:text-4xl">Ready to get started?</h3>
                    <p class="mx-auto mb-8 max-w-xl text-gray-400">
                        Join thousands of teams already using GEMS to build better products faster.
                    </p>
                    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button class="rounded-full bg-white px-8 py-3.5 font-medium text-black transition-all hover:bg-gray-200 hover:shadow-lg hover:shadow-white/10">
                            Start Free Trial
                        </button>
                        <button class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-medium backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                            Schedule Demo
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
