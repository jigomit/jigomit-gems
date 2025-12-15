<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';
import BookingModal from '@/components/BookingModal.vue';

const isVisible = ref(false);
const isBookingModalOpen = ref(false);

const openBookingModal = () => {
    isBookingModalOpen.value = true;
};

const closeBookingModal = () => {
    isBookingModalOpen.value = false;
};

const handleBookingSubmit = (data: any) => {
    console.log('Insurance Appraisal booking submitted:', data);
    // Handle booking form submission
};

const addStructuredData = (data: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = `structured-data-${Date.now()}`;
    document.head.appendChild(script);
};

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 100);
    document.title = 'Insurance Appraisals - Professional Diamond Valuation | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Insurance Appraisal',
        provider: {
            '@type': 'JewelryStore',
            name: 'GEMS',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '725 Fifth Avenue',
                addressLocality: 'New York',
                addressRegion: 'NY',
                postalCode: '10022',
                addressCountry: 'US',
            },
            telephone: '+1-212-555-0123',
        },
        description: 'Professional insurance appraisals for diamonds and fine jewelry. Certified gemologists provide detailed documentation for insurance purposes.',
        areaServed: 'US',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Insurance Appraisals - Professional Diamond Valuation | GEMS"
        description="Professional insurance appraisals for diamonds and fine jewelry. Our certified gemologists provide detailed documentation for insurance purposes. Schedule your appraisal at our Fifth Avenue showroom."
        keywords="insurance appraisal, diamond appraisal, jewelry appraisal, GIA certified appraisal, professional valuation, insurance documentation, diamond valuation"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
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
                        INSURANCE APPRAISALS
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Professional <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Valuation</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Protect your investment with certified insurance appraisals from our expert gemologists. Detailed documentation for insurance coverage and peace of mind.
                    </p>
                </div>

                <!-- Content -->
                <div
                    :class="[
                        'prose prose-invert prose-lg max-w-none transition-all duration-1000',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <div class="space-y-8 text-gray-300">
                        <!-- Overview -->
                        <div>
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Why Insurance Appraisals Matter</h2>
                            <p class="mb-4 leading-relaxed">
                                Insurance appraisals are essential documents that provide an accurate assessment of your diamond's or jewelry's value for insurance purposes. At GEMS, our certified gemologists conduct thorough evaluations using industry-standard methodologies and state-of-the-art equipment to ensure your precious pieces are properly documented and protected.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                Whether you're insuring a new purchase, updating an existing policy, or documenting a family heirloom, our professional appraisals provide the detailed information insurance companies require. Our appraisals are recognized by major insurance providers and include comprehensive documentation of your jewelry's characteristics, condition, and current market value.
                            </p>
                        </div>

                        <!-- What's Included -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">What's Included in Your Appraisal</h3>
                            <ul class="mb-4 space-y-3 leading-relaxed">
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Detailed Description:</strong> Complete documentation of your diamond or jewelry piece, including measurements, weight, and physical characteristics.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Quality Assessment:</strong> Professional evaluation of the 4Cs (Cut, Color, Clarity, Carat Weight) for diamonds, or quality grades for other gemstones.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Certification Verification:</strong> Confirmation of any existing GIA or other laboratory certifications.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Current Market Valuation:</strong> Accurate assessment of replacement value based on current market conditions.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">High-Resolution Photography:</strong> Professional images documenting your piece's condition and appearance.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Insurance-Ready Documentation:</strong> Formatted report accepted by major insurance providers.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Process -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Our Appraisal Process</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">1. Initial Consultation</h4>
                                    <p class="leading-relaxed">
                                        Schedule an appointment with our certified gemologists. During this consultation, we'll discuss your appraisal needs, review your jewelry, and explain the process in detail.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">2. Comprehensive Examination</h4>
                                    <p class="leading-relaxed">
                                        Our experts conduct a thorough examination using professional gemological equipment, including microscopes, loupes, and advanced testing instruments. We document every detail of your piece, from the quality of the stones to the craftsmanship of the setting.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">3. Market Research & Valuation</h4>
                                    <p class="leading-relaxed">
                                        We research current market values, considering factors such as rarity, quality, and current market trends. Our valuations reflect the replacement cost, which is what insurance companies need to properly cover your jewelry.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">4. Documentation & Report</h4>
                                    <p class="leading-relaxed">
                                        You'll receive a comprehensive, professionally formatted appraisal report that includes all findings, photographs, and the certified valuation. This document is ready to submit to your insurance provider.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- When to Get an Appraisal -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">When to Get an Appraisal</h3>
                            <p class="mb-4 leading-relaxed">
                                It's recommended to have your jewelry appraised in the following situations:
                            </p>
                            <ul class="mb-4 space-y-2 leading-relaxed">
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">•</span>
                                    <span>When purchasing new jewelry or diamonds</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">•</span>
                                    <span>Every 3-5 years to update values (market conditions change)</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">•</span>
                                    <span>After significant repairs or modifications</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">•</span>
                                    <span>When updating or obtaining insurance coverage</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">•</span>
                                    <span>For estate planning or inheritance documentation</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">•</span>
                                    <span>After receiving jewelry as a gift or inheritance</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Pricing -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Appraisal Services & Pricing</h3>
                            <p class="mb-4 leading-relaxed">
                                Our appraisal fees are based on the complexity and value of the piece being appraised. We offer competitive rates and transparent pricing. Contact us for a personalized quote based on your specific needs.
                            </p>
                            <div class="mb-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <p class="mb-2 text-sm text-gray-400">Starting at</p>
                                <p class="text-3xl font-light text-white">$150</p>
                                <p class="mt-2 text-sm text-gray-400">per piece</p>
                            </div>
                        </div>

                        <!-- CTA Section -->
                        <div class="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/30 via-purple-950/30 to-pink-950/30 p-8 backdrop-blur-sm sm:p-12">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Schedule Your Appraisal</h3>
                            <p class="mb-6 text-gray-300">
                                Ready to protect your investment? Contact us to schedule your professional insurance appraisal. Our expert gemologists are available by appointment at our Fifth Avenue showroom.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <a href="tel:+12125550123" class="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-medium tracking-wider text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Us: +1 (212) 555-0123
                                </a>
                                <button
                                    @click="openBookingModal"
                                    class="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-medium tracking-wider text-white transition-all duration-500 hover:border-purple-500/50 hover:bg-white/5"
                                >
                                    Schedule Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Booking Modal -->
        <BookingModal :is-open="isBookingModalOpen" @close="closeBookingModal" @submit="handleBookingSubmit" />
    </DiamondLayout>
</template>

<style scoped>
.prose {
    color: #d1d5db;
}

.prose h2 {
    color: #ffffff;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.875rem;
    font-weight: 300;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.prose h3 {
    color: #e5e7eb;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.prose h4 {
    color: #f3f4f6;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

.prose p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
}

.prose ul {
    margin-bottom: 1.25rem;
    padding-left: 0;
}

.prose li {
    margin-bottom: 0.5rem;
}

.prose strong {
    color: #ffffff;
    font-weight: 500;
}
</style>

