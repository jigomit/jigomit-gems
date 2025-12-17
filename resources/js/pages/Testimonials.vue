<script setup lang="ts">
import PageLoader from '@/components/PageLoader.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';
</script>

<template>
    <DiamondLayout 
        title="Customer Testimonials | GEMS Diamonds"
        description="Read what our customers say about their experience with GEMS. From engagement rings to bespoke jewelry, discover why clients worldwide trust us for their most precious moments."
        keywords="diamond testimonials, customer reviews, GEMS reviews, luxury jewelry reviews, engagement ring reviews"
    >
        <!-- Page Loader -->
        <PageLoader />

        <!-- Testimonials Section -->
        <TestimonialsSection />
    </DiamondLayout>
</template>

