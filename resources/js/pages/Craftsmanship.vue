<script setup lang="ts">
import LuxuryFeatures from '@/components/LuxuryFeatures.vue';
import PageLoader from '@/components/PageLoader.vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';
</script>

<template>
    <DiamondLayout 
        title="Master Craftsmanship | GEMS Diamonds"
        description="Discover the excellence behind every GEMS diamond. Our master craftsmen bring over 150 years of combined expertise, creating diamonds of exceptional brilliance through time-honored techniques and precision craftsmanship."
        keywords="master craftsmanship, diamond cutting, expert artisans, precision craftsmanship, luxury diamond jewelry, GIA certified"
    >
        <!-- Page Loader -->
        <PageLoader />

        <!-- Features Section -->
        <LuxuryFeatures />
    </DiamondLayout>
</template>

