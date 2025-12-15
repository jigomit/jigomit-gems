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
    console.log('Lifetime Guarantee inquiry submitted:', data);
    // Handle booking form submission
    closeBookingModal();
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
    document.title = 'Lifetime Guarantee - Comprehensive Warranty Protection | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'WarrantyPromise',
        warrantyScope: 'Lifetime Warranty',
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
        description: 'Comprehensive lifetime warranty protection for your diamond and fine jewelry investment. Coverage includes repairs, maintenance, and protection against manufacturing defects.',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Lifetime Guarantee - Comprehensive Warranty Protection | GEMS"
        description="Your investment is protected with our comprehensive lifetime warranty. Coverage includes repairs, maintenance, and protection against manufacturing defects for all GEMS diamonds and fine jewelry."
        keywords="lifetime guarantee, lifetime warranty, diamond warranty, jewelry warranty, warranty protection, comprehensive warranty, diamond guarantee"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div
                    :class="[
                        'mb-12 text-center transition-all duration-1000 sm:mb-16',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <span class="mb-4 inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                        LIFETIME GUARANTEE
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Protection for <span class="bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Life</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Your investment is protected with our comprehensive lifetime warranty. Every GEMS diamond and piece of fine jewelry comes with complete coverage for repairs, maintenance, and protection against manufacturing defects.
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
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Comprehensive Protection</h2>
                            <p class="mb-4 leading-relaxed">
                                At GEMS, we stand behind every piece we create. Our lifetime guarantee ensures that your investment is protected for as long as you own your jewelry. This comprehensive warranty reflects our confidence in the quality of our craftsmanship and the materials we use.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                When you purchase a diamond or piece of fine jewelry from GEMS, you're not just buying a beautiful piece—you're investing in a relationship built on trust, quality, and lasting value. Our lifetime guarantee is our promise that we'll be here to support you and your jewelry for generations to come.
                            </p>
                        </div>

                        <!-- What's Covered -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">What's Covered</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-emerald-300">Manufacturing Defects</h4>
                                    <p class="leading-relaxed">
                                        Any defects in materials or workmanship that existed at the time of purchase are covered for the lifetime of the piece. This includes issues with settings, prongs, clasps, and any other manufacturing-related problems.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">Repairs and Maintenance</h4>
                                    <p class="leading-relaxed">
                                        Normal wear and tear repairs are covered, including prong tightening, stone resetting, chain repairs, and other routine maintenance. Our expert craftsmen will restore your jewelry to its original condition.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-teal-300">Stone Security</h4>
                                    <p class="leading-relaxed">
                                        If a diamond or gemstone becomes loose or falls out due to a manufacturing defect or normal wear, we'll repair or replace it at no additional cost. Regular inspections are recommended to catch potential issues early.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-emerald-300">Professional Cleaning</h4>
                                    <p class="leading-relaxed">
                                        Your lifetime guarantee includes complimentary professional cleaning and inspection services. Regular maintenance helps preserve your jewelry's beauty and allows us to identify potential issues before they become problems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- How It Works -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">How It Works</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">Registration</h4>
                                    <p class="leading-relaxed">
                                        When you purchase your jewelry, it's automatically registered in our system with your lifetime guarantee. You'll receive documentation confirming your coverage, which you should keep for your records.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-emerald-300">Regular Inspections</h4>
                                    <p class="leading-relaxed">
                                        We recommend bringing your jewelry in for a complimentary inspection every six months. Our expert jewelers will check prongs, settings, and overall condition, ensuring everything remains secure and beautiful.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-teal-300">Repair Process</h4>
                                    <p class="leading-relaxed">
                                        If your jewelry needs repair, simply bring it to our Fifth Avenue showroom or contact us to schedule service. Our craftsmen will assess the issue and perform the necessary repairs at no cost under your lifetime guarantee.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Terms and Conditions -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Terms and Conditions</h3>
                            <p class="mb-4 leading-relaxed">
                                The lifetime guarantee covers the original owner and is non-transferable. Coverage applies to manufacturing defects and normal wear and tear, but does not cover loss, theft, damage from accidents, or modifications made by other jewelers. Regular maintenance and proper care are essential to maintain your warranty coverage.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                For repairs covered under warranty, we'll restore your jewelry to its original condition using the same quality materials and craftsmanship standards. If a covered item cannot be repaired, we'll work with you to find an appropriate replacement solution.
                            </p>
                        </div>

                        <!-- Call to Action -->
                        <div class="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Questions About Your Guarantee?</h3>
                            <p class="mb-6 leading-relaxed">
                                Our team is here to help you understand your lifetime guarantee coverage. Visit our Fifth Avenue showroom or contact us to learn more about protecting your investment.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    @click="openBookingModal"
                                    class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                                >
                                    Schedule a Consultation
                                </button>
                                <a
                                    href="tel:+12125550123"
                                    class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                                >
                                    Contact Us
                                </a>
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

