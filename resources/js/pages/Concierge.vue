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
    console.log('24/7 Concierge inquiry submitted:', data);
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
    document.title = '24/7 Concierge - Personal Diamond Experts Available Around the Clock | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Concierge Service',
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
        description: 'Personal diamond experts available around the clock for your needs. 24/7 concierge service providing expert guidance, assistance, and support whenever you need it.',
        areaServed: 'Worldwide',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="24/7 Concierge - Personal Diamond Experts Available Around the Clock | GEMS"
        description="Personal diamond experts available around the clock for your needs. Our 24/7 concierge service provides expert guidance, assistance, and support whenever you need it, day or night."
        keywords="24/7 concierge, diamond experts, personal concierge, jewelry consultation, expert guidance, diamond advice, luxury concierge service, round-the-clock support"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-rose-500/5 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-pink-500/5 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div
                    :class="[
                        'mb-12 text-center transition-all duration-1000 sm:mb-16',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <span class="mb-4 inline-block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                        24/7 CONCIERGE
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Expert Support <span class="bg-gradient-to-r from-rose-300 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">Anytime</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Personal diamond experts available around the clock for your needs. Our 24/7 concierge service provides expert guidance, assistance, and support whenever you need it, day or night, anywhere in the world.
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
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Always Here for You</h2>
                            <p class="mb-4 leading-relaxed">
                                At GEMS, we believe that exceptional service shouldn't be limited to business hours. Our 24/7 concierge service ensures that personal diamond experts are available around the clock to assist you with any questions, concerns, or needs you may have.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                Whether you're shopping for an engagement ring at midnight, need advice on diamond care while traveling, or have an urgent question about your jewelry, our team of certified gemologists and diamond experts is always ready to help. We understand that important moments don't always happen during business hours, and neither should expert guidance.
                            </p>
                        </div>

                        <!-- Services Offered -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">What We Offer</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-rose-300">Expert Consultation</h4>
                                    <p class="leading-relaxed">
                                        Get instant access to certified gemologists and diamond experts who can answer your questions about diamond quality, cuts, settings, and more. Whether you're making a purchase decision or simply want to learn more, our experts are here to guide you.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Purchase Assistance</h4>
                                    <p class="leading-relaxed">
                                        Need help choosing the perfect diamond or piece of jewelry? Our concierge team can walk you through options, explain differences between cuts and qualities, and help you make informed decisions that match your preferences and budget.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-fuchsia-300">Care and Maintenance</h4>
                                    <p class="leading-relaxed">
                                        Get immediate advice on cleaning, storing, and maintaining your jewelry. Our experts can guide you through proper care techniques and help troubleshoot any issues you may be experiencing with your pieces.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-rose-300">Emergency Support</h4>
                                    <p class="leading-relaxed">
                                        If you have an urgent concern about your jewelry—whether it's a loose stone, a broken clasp, or any other issue—our concierge team can provide immediate guidance and help you schedule emergency repairs or services.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Appointment Scheduling</h4>
                                    <p class="leading-relaxed">
                                        Schedule visits to our Fifth Avenue showroom, private consultations, or special appointments at any time. Our concierge team can coordinate your visit and ensure you have the personalized attention you deserve.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- How to Reach Us -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">How to Reach Us</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-rose-300">Phone Support</h4>
                                    <p class="leading-relaxed">
                                        Call our dedicated concierge line at any time, day or night. Our team is available 24/7 to answer your calls and provide immediate assistance. Whether you have a quick question or need detailed consultation, we're here to help.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Email Support</h4>
                                    <p class="leading-relaxed">
                                        Send us an email at any time, and our concierge team will respond promptly. For detailed questions or when you need documentation, email allows you to communicate at your convenience while ensuring you receive comprehensive answers.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-fuchsia-300">Live Chat</h4>
                                    <p class="leading-relaxed">
                                        Connect with our experts instantly through our live chat service. Available 24/7, this service allows you to get immediate answers to your questions without picking up the phone.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-rose-300">Video Consultation</h4>
                                    <p class="leading-relaxed">
                                        For more detailed consultations, we offer video calls with our diamond experts. Schedule a video consultation at any time to get personalized guidance, view diamonds remotely, or discuss your specific needs in detail.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Why Choose Our Concierge -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Why Choose Our Concierge Service</h3>
                            <p class="mb-4 leading-relaxed">
                                Our 24/7 concierge service is staffed by certified gemologists and diamond experts with years of experience. Every team member is trained to provide personalized, knowledgeable assistance tailored to your specific needs and preferences.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                We understand that purchasing or caring for fine jewelry can be overwhelming, and questions often arise at unexpected times. Our commitment to being available 24/7 reflects our dedication to providing exceptional service whenever you need it, wherever you are in the world.
                            </p>
                        </div>

                        <!-- Call to Action -->
                        <div class="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Get Started Today</h3>
                            <p class="mb-6 leading-relaxed">
                                Our 24/7 concierge team is ready to assist you. Whether you have questions, need expert guidance, or want to schedule a consultation, we're here for you around the clock.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    @click="openBookingModal"
                                    class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:shadow-lg hover:shadow-rose-500/25"
                                >
                                    Schedule a Consultation
                                </button>
                                <a
                                    href="tel:+12125550123"
                                    class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                                >
                                    Call Us Now
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

