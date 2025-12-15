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
    console.log('Secure Delivery inquiry submitted:', data);
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
    document.title = 'Secure Delivery - Fully Insured Worldwide Shipping | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Secure Delivery and Shipping',
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
        description: 'Fully insured worldwide shipping with white-glove delivery service. Secure, tracked, and insured delivery for your precious diamonds and fine jewelry.',
        areaServed: 'Worldwide',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Secure Delivery - Fully Insured Worldwide Shipping | GEMS"
        description="Fully insured worldwide shipping with white-glove delivery service. Secure, tracked, and insured delivery for your precious diamonds and fine jewelry. Professional handling from our Fifth Avenue showroom to your door."
        keywords="secure delivery, insured shipping, white-glove delivery, diamond shipping, jewelry delivery, worldwide shipping, secure packaging, tracked delivery"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div
                    :class="[
                        'mb-12 text-center transition-all duration-1000 sm:mb-16',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <span class="mb-4 inline-block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                        SECURE DELIVERY
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Safe Passage for <span class="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">Your Treasures</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Fully insured worldwide shipping with white-glove delivery service. Every piece is carefully packaged, fully insured, and tracked from our Fifth Avenue showroom to your door with the utmost care and security.
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
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Professional Shipping Services</h2>
                            <p class="mb-4 leading-relaxed">
                                At GEMS, we understand that your diamond or piece of fine jewelry is not just a purchase—it's a valuable investment and often holds deep sentimental significance. That's why we've developed a comprehensive secure delivery system that ensures your precious items arrive safely, no matter where in the world you are.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                Our white-glove delivery service combines state-of-the-art security measures with personalized attention to detail. From the moment your jewelry leaves our Fifth Avenue showroom until it reaches your hands, every step is carefully monitored and fully insured.
                            </p>
                        </div>

                        <!-- Shipping Options -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Shipping Options</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-amber-300">White-Glove Delivery</h4>
                                    <p class="leading-relaxed">
                                        Our premium white-glove service includes hand-delivery by a professional courier, signature confirmation, and personal presentation of your jewelry. Available in major metropolitan areas, this service ensures your jewelry is delivered directly to you with the care and attention it deserves.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-orange-300">Express Secure Shipping</h4>
                                    <p class="leading-relaxed">
                                        For time-sensitive deliveries, we offer express secure shipping with full tracking and insurance. Your jewelry is packaged in our tamper-evident security boxes and shipped via trusted carriers with signature-required delivery.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-yellow-300">International Shipping</h4>
                                    <p class="leading-relaxed">
                                        We ship worldwide with full insurance coverage and customs documentation. All international shipments are fully tracked and require signature confirmation upon delivery. We handle all customs paperwork to ensure smooth international transit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Security Features -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Security Features</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-amber-300">Fully Insured</h4>
                                    <p class="leading-relaxed">
                                        Every shipment is fully insured for its full retail value. In the unlikely event of loss or damage during transit, you're completely protected. Our insurance coverage begins the moment your jewelry leaves our showroom and continues until it's safely in your hands.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-orange-300">Tamper-Evident Packaging</h4>
                                    <p class="leading-relaxed">
                                        Your jewelry is packaged in our custom-designed security boxes with tamper-evident seals. These specialized containers are designed to protect against damage and provide clear evidence if the package has been opened or compromised.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-yellow-300">Real-Time Tracking</h4>
                                    <p class="leading-relaxed">
                                        Every shipment includes real-time tracking so you can monitor your package's journey from our showroom to your door. You'll receive tracking information and updates at every step of the delivery process.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-amber-300">Signature Required</h4>
                                    <p class="leading-relaxed">
                                        All deliveries require signature confirmation to ensure your jewelry is received only by authorized recipients. You can specify delivery instructions and authorize alternative recipients if needed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Packaging Process -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Our Packaging Process</h3>
                            <p class="mb-4 leading-relaxed">
                                Before shipping, each piece of jewelry undergoes a thorough inspection and is carefully packaged by our expert team. We use multiple layers of protection, including:
                            </p>
                            <ul class="mb-4 ml-6 list-disc space-y-2">
                                <li>Custom-fitted jewelry boxes with secure closures</li>
                                <li>Protective padding and cushioning materials</li>
                                <li>Tamper-evident security seals</li>
                                <li>Discrete outer packaging that doesn't reveal contents</li>
                                <li>Insurance documentation and certificates</li>
                            </ul>
                            <p class="mb-4 leading-relaxed">
                                Our packaging is designed to protect your jewelry from impact, temperature changes, and other potential hazards during transit while maintaining complete discretion about the package contents.
                            </p>
                        </div>

                        <!-- Delivery Timeline -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Delivery Timeline</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-orange-300">Domestic Shipping</h4>
                                    <p class="leading-relaxed">
                                        Standard domestic deliveries typically arrive within 3-5 business days. Express options are available for 1-2 business day delivery. White-glove service is scheduled based on your availability and location.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-amber-300">International Shipping</h4>
                                    <p class="leading-relaxed">
                                        International deliveries typically take 7-14 business days, depending on destination and customs processing. Express international options are available for faster delivery. All international shipments include full customs documentation and tracking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Call to Action -->
                        <div class="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Ready to Ship?</h3>
                            <p class="mb-6 leading-relaxed">
                                Our team is here to help you choose the best shipping option for your needs. Visit our Fifth Avenue showroom or contact us to discuss your delivery preferences and schedule your shipment.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    @click="openBookingModal"
                                    class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:shadow-lg hover:shadow-amber-500/25"
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

