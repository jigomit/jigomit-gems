<script setup lang="ts">
import CTASection from '@/components/CTASection.vue';
import PageLoader from '@/components/PageLoader.vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';
</script>

<template>
    <DiamondLayout 
        title="Contact Us | GEMS Diamonds"
        description="Schedule a private consultation with our diamond experts at GEMS Fifth Avenue New York. Discover the perfect stone that captures your unique story. Book your appointment today."
        keywords="contact GEMS, diamond consultation, Fifth Avenue diamond store, book appointment, private consultation"
    >
        <!-- Page Loader -->
        <PageLoader />

        <!-- CTA Section -->
        <CTASection />
    </DiamondLayout>
</template>

