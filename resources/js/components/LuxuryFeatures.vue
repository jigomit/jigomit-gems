<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const features = [
    {
        icon: 'certificate',
        title: 'GIA Certified',
        description: 'Every diamond comes with official certification from the Gemological Institute of America.',
        color: 'cyan',
        dateTime: 'December 20, 2024, 10:30 AM',
    },
    {
        icon: 'diamond',
        title: 'Conflict-Free',
        description: 'We source exclusively through the Kimberley Process, guaranteeing ethical origins. All our diamonds are conflict-free and sourced from ethical, responsible suppliers.',
        color: 'purple',
    },
    {
        icon: 'craft',
        title: 'Master Craftsmanship',
        description: 'Our master artisans bring over 150 years of combined expertise to every cut, creating diamonds of exceptional brilliance through time-honored techniques and precision craftsmanship.',
        color: 'pink',
    },
    {
        icon: 'guarantee',
        title: 'Lifetime Guarantee',
        description: 'Your investment is protected with our comprehensive lifetime warranty, covering repairs, maintenance, and protection against manufacturing defects for all GEMS jewelry.',
        color: 'emerald',
    },
    {
        icon: 'shipping',
        title: 'Secure Delivery',
        description: 'Fully insured worldwide shipping with white-glove delivery service. Every piece is carefully packaged, fully tracked, and insured from our showroom to your door.',
        color: 'amber',
    },
    {
        icon: 'support',
        title: '24/7 Concierge',
        description: 'Personal diamond experts available around the clock for your needs. Get expert guidance, assistance, and support whenever you need it, day or night, anywhere in the world.',
        color: 'rose',
    },
];

const colorClasses = {
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'group-hover:shadow-cyan-500/20' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'group-hover:shadow-purple-500/20' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'group-hover:shadow-pink-500/20' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'group-hover:shadow-emerald-500/20' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', glow: 'group-hover:shadow-amber-500/20' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', glow: 'group-hover:shadow-rose-500/20' },
};

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

const handleLearnMore = (featureTitle: string) => {
    switch (featureTitle) {
        case 'GIA Certified':
            router.push({ name: 'GIACertifiedDiamondsVsNonCertified' });
            break;
        case 'Conflict-Free':
            router.push({ name: 'ConflictFree' });
            break;
        case 'Master Craftsmanship':
            router.push({ name: 'MasterCraftsmanship' });
            break;
        case 'Lifetime Guarantee':
            router.push({ name: 'LifetimeGuarantee' });
            break;
        case 'Secure Delivery':
            router.push({ name: 'SecureDelivery' });
            break;
        case '24/7 Concierge':
            router.push({ name: 'Concierge' });
            break;
        default:
            break;
    }
};
</script>

<template>
    <section ref="sectionRef" class="relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0915] to-[#0a0a0f] py-20 sm:py-32">
        <!-- Decorative Elements -->
        <div class="absolute inset-0">
            <div class="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl"></div>
            <div class="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="mb-12 text-center sm:mb-16">
                <span
                    :class="[
                        'mb-3 inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent transition-all duration-700 sm:text-sm',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    WHY GEMS
                </span>
                <h2
                    :class="[
                        'mx-auto max-w-2xl font-serif text-3xl font-light text-white transition-all duration-700 delay-100 sm:text-4xl md:text-5xl',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    Excellence in Every <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Detail</span>
                </h2>
            </div>

            <!-- Features Grid -->
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                <div
                    v-for="(feature, index) in features"
                    :key="feature.title"
                    :class="[
                        'group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-700 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-xl sm:p-8',
                        colorClasses[feature.color as keyof typeof colorClasses].glow,
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    ]"
                    :style="{ transitionDelay: `${200 + index * 100}ms` }"
                >
                    <!-- Icon -->
                    <div
                        :class="[
                            'mb-5 flex h-12 w-12 items-center justify-center rounded-xl border sm:h-14 sm:w-14',
                            colorClasses[feature.color as keyof typeof colorClasses].bg,
                            colorClasses[feature.color as keyof typeof colorClasses].border
                        ]"
                    >
                        <!-- Certificate -->
                        <svg v-if="feature.icon === 'certificate'" :class="['h-6 w-6 sm:h-7 sm:w-7', colorClasses[feature.color as keyof typeof colorClasses].text]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <!-- Diamond -->
                        <svg v-if="feature.icon === 'diamond'" :class="['h-6 w-6 sm:h-7 sm:w-7', colorClasses[feature.color as keyof typeof colorClasses].text]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3L2 9l10 12 10-12-10-6zM2 9h20M12 21V9m0 0L6 5m6 4l6-4" />
                        </svg>
                        <!-- Craft -->
                        <svg v-if="feature.icon === 'craft'" :class="['h-6 w-6 sm:h-7 sm:w-7', colorClasses[feature.color as keyof typeof colorClasses].text]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <!-- Guarantee -->
                        <svg v-if="feature.icon === 'guarantee'" :class="['h-6 w-6 sm:h-7 sm:w-7', colorClasses[feature.color as keyof typeof colorClasses].text]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <!-- Shipping -->
                        <svg v-if="feature.icon === 'shipping'" :class="['h-6 w-6 sm:h-7 sm:w-7', colorClasses[feature.color as keyof typeof colorClasses].text]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <!-- Support -->
                        <svg v-if="feature.icon === 'support'" :class="['h-6 w-6 sm:h-7 sm:w-7', colorClasses[feature.color as keyof typeof colorClasses].text]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>

                    <!-- Content -->
                    <h3 class="mb-2 text-lg font-medium text-white sm:text-xl">{{ feature.title }}</h3>
                    <p class="text-sm leading-relaxed text-gray-400 sm:text-base">{{ feature.description }}</p>
                    
                    <!-- Date/Time for GIA Certified -->
                    <div v-if="feature.dateTime" class="mt-3 text-xs text-gray-500">
                        <span class="inline-flex items-center gap-1">
                            <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ feature.dateTime }}
                        </span>
                    </div>

                    <!-- Hover arrow -->
                    <div 
                        @click="handleLearnMore(feature.title)"
                        class="mt-4 flex cursor-pointer items-center text-sm text-gray-500 transition-colors duration-300 group-hover:text-white"
                    >
                        <span class="mr-2">Learn more</span>
                        <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
