<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const hasAnimated = ref(false);

const stats = ref([
    { value: 0, target: 50000, suffix: '+', label: 'Diamonds Sold', color: 'cyan' },
    { value: 0, target: 135, suffix: '', label: 'Years of Excellence', color: 'purple' },
    { value: 0, target: 98, suffix: '%', label: 'Client Satisfaction', color: 'pink' },
    { value: 0, target: 42, suffix: '', label: 'Countries Served', color: 'emerald' },
]);

const colorClasses = {
    cyan: 'from-cyan-400 to-cyan-300',
    purple: 'from-purple-400 to-purple-300',
    pink: 'from-pink-400 to-pink-300',
    emerald: 'from-emerald-400 to-emerald-300',
};

const animateValue = (index: number, start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        stats.value[index].value = Math.floor(start + (end - start) * easeOutQuart);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};

let observer: IntersectionObserver | null = null;

watch(isVisible, (newValue) => {
    if (newValue && !hasAnimated.value) {
        hasAnimated.value = true;
        stats.value.forEach((stat, index) => {
            setTimeout(() => {
                animateValue(index, 0, stat.target, 2000);
            }, index * 200);
        });
    }
});

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
        { threshold: 0.3 }
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
    <section ref="sectionRef" class="relative overflow-hidden bg-[#0a0a0f] py-16 sm:py-24">
        <!-- Background -->
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div class="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
                <div
                    v-for="(stat, index) in stats"
                    :key="stat.label"
                    :class="[
                        'text-center transition-all duration-700 lg:px-8',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                    :style="{ transitionDelay: `${index * 150}ms` }"
                >
                    <!-- Value -->
                    <div
                        :class="[
                            'mb-2 bg-gradient-to-r bg-clip-text font-serif text-4xl font-light text-transparent sm:text-5xl md:text-6xl',
                            colorClasses[stat.color as keyof typeof colorClasses]
                        ]"
                    >
                        {{ stat.value.toLocaleString() }}{{ stat.suffix }}
                    </div>

                    <!-- Label -->
                    <div class="text-xs tracking-[0.15em] text-gray-400 sm:text-sm">
                        {{ stat.label }}
                    </div>

                    <!-- Underline -->
                    <div
                        :class="[
                            'mx-auto mt-3 h-px w-8 bg-gradient-to-r transition-all duration-1000 sm:mt-4 sm:w-12',
                            colorClasses[stat.color as keyof typeof colorClasses],
                            isVisible ? 'scale-x-100' : 'scale-x-0'
                        ]"
                        :style="{ transitionDelay: `${500 + index * 150}ms` }"
                    ></div>
                </div>
            </div>
        </div>
    </section>
</template>
