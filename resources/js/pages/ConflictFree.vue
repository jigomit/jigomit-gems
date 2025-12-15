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
    console.log('Conflict-Free inquiry submitted:', data);
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
    document.title = 'Conflict-Free Diamonds - Ethical Sourcing Through Kimberley Process | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Ethical Diamond Sourcing',
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
        description: 'We source exclusively through the Kimberley Process, guaranteeing ethical origins. All our diamonds are conflict-free and sourced from ethical, responsible suppliers.',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Conflict-Free Diamonds - Ethical Sourcing Through Kimberley Process | GEMS"
        description="We source exclusively through the Kimberley Process, guaranteeing ethical origins. All our diamonds are conflict-free and sourced from ethical, responsible suppliers committed to human rights and environmental protection."
        keywords="conflict-free diamonds, ethical diamonds, Kimberley Process, ethical sourcing, responsible diamonds, ethical jewelry, conflict diamonds, ethical diamond sourcing"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div
                    :class="[
                        'mb-12 text-center transition-all duration-1000 sm:mb-16',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <span class="mb-4 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                        CONFLICT-FREE DIAMONDS
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Ethical Origins, <span class="bg-gradient-to-r from-purple-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">Brilliant Future</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        We source exclusively through the Kimberley Process, guaranteeing ethical origins. All our diamonds are conflict-free and sourced from ethical, responsible suppliers committed to human rights and environmental protection.
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
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Our Commitment to Ethical Sourcing</h2>
                            <p class="mb-4 leading-relaxed">
                                At GEMS, we believe that true luxury comes with responsibility. Every diamond we offer is sourced exclusively through the Kimberley Process, an international certification scheme that ensures diamonds are conflict-free and ethically sourced. This commitment is fundamental to who we are and what we stand for.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                We understand that when you purchase a diamond, you're not just buying a beautiful gem—you're making a statement about your values. That's why we go beyond compliance, working only with suppliers who share our commitment to ethical practices, human rights, and environmental protection.
                            </p>
                        </div>

                        <!-- What is Kimberley Process -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">What is the Kimberley Process?</h3>
                            <p class="mb-4 leading-relaxed">
                                The Kimberley Process Certification Scheme (KPCS) is an international initiative established in 2003 to prevent conflict diamonds from entering the mainstream diamond market. It requires participating countries to certify that shipments of rough diamonds are conflict-free.
                            </p>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Certification Requirements</h4>
                                    <p class="leading-relaxed">
                                        Under the Kimberley Process, all rough diamonds must be accompanied by a certificate guaranteeing they are conflict-free. This certificate must be validated by the exporting country and accepted by the importing country before diamonds can enter the legitimate trade.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-indigo-300">International Participation</h4>
                                    <p class="leading-relaxed">
                                        Over 80 countries participate in the Kimberley Process, representing more than 99% of the global diamond trade. This international cooperation ensures that conflict diamonds cannot be easily traded through legitimate channels.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-violet-300">Ongoing Monitoring</h4>
                                    <p class="leading-relaxed">
                                        The Kimberley Process includes regular reviews, monitoring, and peer review mechanisms to ensure compliance. Countries that fail to meet the standards can be suspended from the process, maintaining the integrity of the certification system.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Our Sourcing Practices -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Our Sourcing Practices</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Verified Suppliers Only</h4>
                                    <p class="leading-relaxed">
                                        We work exclusively with suppliers who are certified under the Kimberley Process and who can provide complete documentation of their diamonds' origins. Every supplier in our network undergoes rigorous vetting to ensure they meet our ethical standards.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-indigo-300">Traceability and Documentation</h4>
                                    <p class="leading-relaxed">
                                        Every diamond we sell comes with complete documentation tracing its journey from mine to market. This traceability ensures that we can verify the ethical origins of every stone and provides you with confidence in your purchase.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-violet-300">Beyond Compliance</h4>
                                    <p class="leading-relaxed">
                                        While Kimberley Process certification is the minimum standard, we go further by working with suppliers who demonstrate commitment to fair labor practices, environmental protection, and community development in diamond-producing regions.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Regular Audits</h4>
                                    <p class="leading-relaxed">
                                        We conduct regular audits of our supply chain to ensure ongoing compliance with ethical standards. This includes verifying certifications, reviewing supplier practices, and staying informed about developments in the diamond industry.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Why It Matters -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Why Conflict-Free Matters</h3>
                            <p class="mb-4 leading-relaxed">
                                Conflict diamonds, also known as blood diamonds, are diamonds mined in war zones and sold to finance armed conflict against governments. The Kimberley Process was established specifically to prevent these diamonds from entering the legitimate market and funding violence.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                By choosing conflict-free diamonds, you're supporting:
                            </p>
                            <ul class="mb-4 ml-6 list-disc space-y-2">
                                <li>Peace and stability in diamond-producing regions</li>
                                <li>Fair labor practices and worker rights</li>
                                <li>Environmental protection and sustainable mining</li>
                                <li>Community development in mining areas</li>
                                <li>Transparency and accountability in the diamond trade</li>
                            </ul>
                            <p class="mb-4 leading-relaxed">
                                Your choice to purchase conflict-free diamonds helps ensure that the diamond industry contributes positively to the communities where diamonds are mined, rather than funding conflict and human rights abuses.
                            </p>
                        </div>

                        <!-- Our Promise -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Our Promise to You</h3>
                            <p class="mb-4 leading-relaxed">
                                When you purchase a diamond from GEMS, you can be confident that it is conflict-free and ethically sourced. We stand behind every diamond we sell with our commitment to ethical sourcing and our participation in the Kimberley Process.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                We believe that luxury and responsibility go hand in hand. Every diamond we offer represents not just exceptional quality and beauty, but also our shared commitment to ethical practices and positive impact in the diamond industry.
                            </p>
                        </div>

                        <!-- Call to Action -->
                        <div class="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Learn More About Our Ethical Practices</h3>
                            <p class="mb-6 leading-relaxed">
                                Our team is available to discuss our ethical sourcing practices and answer any questions you may have about conflict-free diamonds. Visit our Fifth Avenue showroom or contact us to learn more.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    @click="openBookingModal"
                                    class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
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

