<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
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
    console.log('Master Craftsmanship consultation booking submitted:', data);
    // Handle booking form submission
    closeBookingModal();
};

const viewCollection = () => {
    // Check if we're on the home page
    const currentRoute = router.currentRoute.value.name;
    
    if (currentRoute === 'Home') {
        // We're already on home, scroll to the collection section
        nextTick(() => {
            const element = document.getElementById('collection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } else {
        // We're on a different page, navigate to home with hash
        router.push({ name: 'Home', hash: '#collection' }).then(() => {
            nextTick(() => {
                setTimeout(() => {
                    const element = document.getElementById('collection');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            });
        });
    }
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
    document.title = 'Master Craftsmanship - 150 Years of Diamond Expertise | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Service schema
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Diamond Cutting and Craftsmanship',
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
        description: 'Master craftsmanship in diamond cutting and jewelry creation. Over 150 years of combined expertise from our master artisans, creating exceptional diamonds and fine jewelry.',
        areaServed: 'US',
    };
    
    addStructuredData(serviceSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Master Craftsmanship - 150 Years of Diamond Expertise | GEMS"
        description="Discover our master craftsmanship in diamond cutting and jewelry creation. Over 150 years of combined expertise from our master artisans, creating exceptional diamonds and fine jewelry."
        keywords="master craftsmanship, diamond cutting, expert artisans, diamond expertise, fine jewelry craftsmanship, master diamond cutters, luxury jewelry creation"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-pink-500/5 blur-3xl"></div>
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
                    <span class="mb-4 inline-block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                        MASTER CRAFTSMANSHIP
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Where Art Meets <span class="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">Precision</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Our master artisans bring over 150 years of combined expertise to every cut, every setting, and every piece of jewelry we create. Each diamond is transformed through time-honored techniques passed down through generations.
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
                            <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">A Legacy of Excellence</h2>
                            <p class="mb-4 leading-relaxed">
                                At GEMS, craftsmanship is not just a skill—it's an art form perfected over generations. Our master artisans combine traditional techniques with modern precision to create diamonds and jewelry that are truly exceptional. With over 150 years of combined expertise, our craftsmen understand that every cut, every facet, and every detail matters.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                Each piece that leaves our workshop represents countless hours of meticulous work, unwavering attention to detail, and an uncompromising commitment to perfection. We believe that true luxury lies in the invisible details—the perfect symmetry, the precise angles, the flawless finish that only master craftsmanship can achieve.
                            </p>
                        </div>

                        <!-- Craftsmanship Process -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">The Art of Diamond Cutting</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Precision Planning</h4>
                                    <p class="leading-relaxed">
                                        Before a single cut is made, our master cutters spend hours analyzing each rough diamond. Using advanced technology combined with generations of experience, they determine the optimal cut that will maximize brilliance, fire, and scintillation while preserving as much carat weight as possible.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Masterful Execution</h4>
                                    <p class="leading-relaxed">
                                        Our artisans employ time-honored cutting techniques, refined over decades of practice. Each facet is cut with precision measured in microns, ensuring perfect symmetry and optimal light performance. The process requires steady hands, keen eyes, and years of experience.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">Meticulous Polishing</h4>
                                    <p class="leading-relaxed">
                                        After cutting, each facet undergoes meticulous polishing to achieve a mirror-like finish. This final step is crucial—it's what transforms a well-cut diamond into a masterpiece that captures and reflects light in ways that take your breath away.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Quality Assurance</h4>
                                    <p class="leading-relaxed">
                                        Every diamond undergoes rigorous quality inspection by our master craftsmen. We measure proportions, check symmetry, verify polish quality, and assess overall light performance. Only diamonds that meet our exacting standards receive the GEMS certification of excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Expertise Areas -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Areas of Expertise</h3>
                            <div class="mb-4 space-y-4">
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-purple-300">Round Brilliant Cut</h4>
                                    <p class="leading-relaxed">
                                        Our mastery of the round brilliant cut represents the pinnacle of diamond cutting. We achieve perfect proportions and symmetry that maximize the diamond's natural fire and brilliance, creating stones that sparkle with unmatched intensity.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-pink-300">Fancy Cuts</h4>
                                    <p class="leading-relaxed">
                                        From elegant ovals to sophisticated emerald cuts, our artisans excel at creating fancy cut diamonds. Each shape requires specialized knowledge and techniques, and our craftsmen have mastered them all, ensuring every fancy cut diamond meets our exacting standards.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="mb-2 text-xl font-medium text-cyan-300">Custom Settings</h4>
                                    <p class="leading-relaxed">
                                        Beyond cutting, our master craftsmen create exquisite settings that showcase each diamond's unique beauty. From classic solitaires to intricate vintage-inspired designs, every setting is handcrafted with precision and care.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Tradition & Innovation -->
                        <div>
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Tradition Meets Innovation</h3>
                            <p class="mb-4 leading-relaxed">
                                While we honor traditional craftsmanship techniques passed down through generations, we also embrace modern technology and innovation. Our workshop combines the best of both worlds—time-tested methods refined over decades with cutting-edge tools that allow for unprecedented precision.
                            </p>
                            <p class="mb-4 leading-relaxed">
                                This fusion of tradition and innovation enables us to create diamonds and jewelry that are not only beautiful but also technically superior. Every piece reflects our commitment to pushing the boundaries of what's possible while maintaining the artistry that makes each creation unique.
                            </p>
                        </div>

                        <!-- Call to Action -->
                        <div class="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Experience Master Craftsmanship</h3>
                            <p class="mb-6 leading-relaxed">
                                Visit our Fifth Avenue showroom to see our master craftsmanship firsthand. Our artisans are available to discuss your vision and create a piece that reflects your unique style and preferences.
                            </p>
                            <div class="flex flex-col gap-4 sm:flex-row">
                                <button
                                    @click="openBookingModal"
                                    class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-3 text-sm font-medium tracking-wider text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
                                >
                                    Schedule a Consultation
                                </button>
                                <button
                                    @click="viewCollection"
                                    class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                                >
                                    View Our Collection
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

