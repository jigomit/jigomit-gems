<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import DiamondLayout from '@/layouts/DiamondLayout.vue';
import BookingModal from '@/components/BookingModal.vue';

const router = useRouter();
const isVisible = ref(false);
const isBookingModalOpen = ref(false);

const openBookingModal = () => {
    isBookingModalOpen.value = true;
};

const closeBookingModal = () => {
    isBookingModalOpen.value = false;
};

const handleBookingSubmit = (data: any) => {
    console.log('Cleaning & Care booking submitted:', data);
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
    document.title = 'Cleaning & Care - Professional Diamond Maintenance | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Jewelry Cleaning and Care',
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
        description: 'Professional cleaning and care services for diamonds and fine jewelry. Expert maintenance to keep your precious pieces looking their absolute best.',
        areaServed: 'US',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Cleaning & Care - Professional Diamond Maintenance | GEMS"
        description="Professional cleaning and care services for diamonds and fine jewelry. Expert maintenance, inspection, and restoration to keep your precious pieces looking their absolute best."
        keywords="diamond cleaning, jewelry cleaning, jewelry care, diamond maintenance, professional jewelry cleaning, jewelry restoration, diamond polishing"
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
                        CLEANING & CARE
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Professional <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Maintenance</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Keep your diamonds and fine jewelry looking their absolute best with our expert cleaning and care services. Professional maintenance to preserve brilliance and protect your investment.
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
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Why Professional Cleaning Matters</h2>
                            <p class="mb-4 leading-relaxed">
                                Regular professional cleaning is essential to maintain the brilliance and beauty of your diamonds and fine jewelry. Over time, oils from your skin, lotions, soaps, and everyday dirt can accumulate on your jewelry, dulling its sparkle and reducing its visual appeal. Our expert cleaning services use specialized techniques and solutions designed specifically for precious metals and gemstones.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                At GEMS, our certified jewelers use professional-grade cleaning equipment and safe, effective cleaning solutions that restore your jewelry's original luster without damaging delicate settings or stones. We also conduct thorough inspections during cleaning to identify any potential issues before they become costly problems.
                            </p>
                        </div>

                        <!-- Services Offered -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Our Cleaning & Care Services</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">Professional Ultrasonic Cleaning</h4>
                                    <p class="leading-relaxed">
                                        Our ultrasonic cleaning process uses high-frequency sound waves to remove dirt, oils, and debris from hard-to-reach areas. This deep-cleaning method is safe for most jewelry types and effectively restores brilliance to diamonds and gemstones.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Steam Cleaning</h4>
                                    <p class="leading-relaxed">
                                        Steam cleaning provides a gentle yet effective method for removing surface grime and restoring shine. This process is particularly effective for delicate pieces and jewelry with sensitive settings.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Hand Polishing & Buffing</h4>
                                    <p class="leading-relaxed">
                                        Our skilled craftsmen provide meticulous hand polishing to restore the original finish of your precious metals. This service is ideal for pieces requiring special attention or those with intricate details.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">Comprehensive Inspection</h4>
                                    <p class="leading-relaxed">
                                        During every cleaning service, we conduct a thorough inspection of your jewelry, checking prongs, settings, clasps, and overall condition. We'll identify any loose stones, worn prongs, or other issues that need attention.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Restoration & Repair</h4>
                                    <p class="leading-relaxed">
                                        If we discover any issues during inspection, we can provide professional repair and restoration services. From tightening loose stones to replacing worn prongs, we ensure your jewelry is both beautiful and secure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Care Tips -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">At-Home Care Tips</h3>
                            <p class="mb-4 leading-relaxed">
                                While professional cleaning is recommended every 6-12 months, proper at-home care helps maintain your jewelry between visits:
                            </p>
                            <ul class="mb-4 space-y-3 leading-relaxed">
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Regular Gentle Cleaning:</strong> Use a soft-bristled brush and mild soapy water to gently clean your jewelry. Avoid harsh chemicals or abrasive cleaners.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Proper Storage:</strong> Store each piece separately in soft pouches or lined jewelry boxes to prevent scratching and tangling.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Avoid Chemicals:</strong> Remove jewelry before swimming, cleaning, or applying lotions and perfumes. Chemicals can damage metals and dull gemstones.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Regular Inspections:</strong> Check your jewelry regularly for loose stones, worn prongs, or damaged clasps. Address issues promptly to prevent loss or further damage.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="mt-1 text-cyan-400">✓</span>
                                    <span><strong class="text-white">Professional Maintenance:</strong> Schedule professional cleanings every 6-12 months to maintain optimal condition and catch potential issues early.</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Pricing -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Service Pricing</h3>
                            <p class="mb-4 leading-relaxed">
                                Our cleaning and care services are competitively priced. Basic cleaning starts at $50, with comprehensive services including inspection and minor adjustments available. Contact us for a personalized quote based on your specific needs.
                            </p>
                            <div class="mb-4 grid gap-4 sm:grid-cols-2">
                                <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                    <p class="mb-2 text-sm text-gray-400">Basic Cleaning</p>
                                    <p class="text-2xl font-light text-white">$50</p>
                                    <p class="mt-2 text-sm text-gray-400">per piece</p>
                                </div>
                                <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                    <p class="mb-2 text-sm text-gray-400">Comprehensive Service</p>
                                    <p class="text-2xl font-light text-white">$100</p>
                                    <p class="mt-2 text-sm text-gray-400">cleaning + inspection</p>
                                </div>
                            </div>
                        </div>

                        <!-- CTA Section -->
                        <div class="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/30 via-purple-950/30 to-pink-950/30 p-8 backdrop-blur-sm sm:p-12">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Schedule Your Cleaning Service</h3>
                            <p class="mb-6 text-gray-300">
                                Ready to restore your jewelry's brilliance? Schedule a professional cleaning and care service. Our expert jewelers are available by appointment at our Fifth Avenue showroom.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    @click="openBookingModal"
                                    class="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-medium tracking-wider text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25"
                                >
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Select Day & Time
                                </button>
                                <a href="tel:+12125550123" class="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-medium tracking-wider text-white transition-all duration-500 hover:border-purple-500/50 hover:bg-white/5">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call: +1 (212) 555-0123
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

