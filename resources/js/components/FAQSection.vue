<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const openIndex = ref<number | null>(null);

const faqs = [
    {
        question: 'How to choose the perfect engagement ring diamond?',
        answer: 'Choosing the perfect engagement ring diamond involves understanding the 4Cs (Cut, Color, Clarity, Carat), setting a budget, and considering your partner\'s style. Our expert diamond consultants at GEMS Fifth Avenue can guide you through the selection process, helping you find a diamond that balances quality, size, and value.',
    },
    {
        question: 'What is the best diamond cut for engagement rings in 2025?',
        answer: 'The best diamond cut for engagement rings depends on personal preference, but popular choices include round brilliant for maximum sparkle, oval cut for a modern elongated look, princess cut for contemporary elegance, and emerald cut for vintage sophistication. Each cut offers unique characteristics and brilliance.',
    },
    {
        question: 'What is the difference between round cut and oval cut diamonds?',
        answer: 'Round cut diamonds offer maximum brilliance and timeless appeal, while oval cut diamonds provide a modern elongated shape that appears larger and flatters the finger. Round cuts typically cost 20-30% more, while oval cuts offer better value and a unique contemporary look.',
    },
    {
        question: 'How much should you spend on an engagement ring diamond?',
        answer: 'There\'s no fixed rule, but modern couples typically spend $5,000-$7,500 on engagement rings. The key is finding the right balance between quality and budget. Prioritize cut quality over carat size, and consider G-H color and VS2-SI1 clarity for excellent value without compromising beauty.',
    },
    {
        question: 'Why are GIA certified diamonds important?',
        answer: 'GIA certified diamonds provide verified quality assessment, protect against overpayment, maintain better resale value, and make insurance easier. Certification ensures you know exactly what you\'re buying and protects your investment with independent, trusted grading.',
    },
    {
        question: 'Where can I find luxury diamond jewelry in New York?',
        answer: 'GEMS is located at 725 Fifth Avenue, New York, NY 10022. We offer luxury diamond jewelry, engagement rings, and expert consultation services. Visit our showroom for private consultations with our diamond experts.',
    },
];

const toggleFAQ = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
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
        { threshold: 0.2 }
    );

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
    
    // Add FAQPage structured data
    const baseUrl = window.location.origin;
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    script.id = 'structured-data-faq';
    document.head.appendChild(script);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
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

        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div
                :class="[
                    'mb-12 text-center transition-all duration-1000 sm:mb-16',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                <span class="mb-4 inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                    EXPERT ANSWERS
                </span>
                <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
                    Frequently Asked <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Questions</span>
                </h2>
                <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                    Get expert answers to common questions about choosing diamonds, engagement rings, and luxury jewelry.
                </p>
            </div>

            <!-- FAQ Items -->
            <div class="space-y-4">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    :class="[
                        'group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
                        openIndex === index ? 'border-white/20 bg-white/10' : 'hover:border-white/15'
                    ]"
                    :style="{ transitionDelay: `${200 + index * 100}ms` }"
                >
                    <button
                        @click="toggleFAQ(index)"
                        :aria-expanded="openIndex === index"
                        :aria-controls="`faq-answer-${index}`"
                        :aria-label="`${openIndex === index ? 'Hide' : 'Show'} answer for: ${faq.question}`"
                        class="flex w-full items-center justify-between p-6 text-left transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] sm:p-8"
                    >
                        <h3 class="pr-8 font-serif text-lg text-white sm:text-xl">
                            {{ faq.question }}
                        </h3>
                        <svg
                            :class="[
                                'h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300',
                                openIndex === index ? 'rotate-180 text-cyan-400' : 'group-hover:text-cyan-300'
                            ]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <Transition
                        enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 max-h-0"
                        enter-to-class="opacity-100 max-h-96"
                        leave-active-class="transition-all duration-300 ease-in"
                        leave-from-class="opacity-100 max-h-96"
                        leave-to-class="opacity-0 max-h-0"
                    >
                        <div v-if="openIndex === index" :id="`faq-answer-${index}`" class="px-6 pb-6 sm:px-8 sm:pb-8">
                            <p class="text-base leading-relaxed text-gray-400 sm:text-lg">
                                {{ faq.answer }}
                            </p>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </section>
</template>

