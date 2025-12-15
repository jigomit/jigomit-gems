<script setup lang="ts">
import { onMounted } from 'vue';
import CollectionGallery from '@/components/CollectionGallery.vue';
import CTASection from '@/components/CTASection.vue';
import DiamondHero from '@/components/DiamondHero.vue';
import DiamondShowcase from '@/components/DiamondShowcase.vue';
import FAQSection from '@/components/FAQSection.vue';
import LuxuryFeatures from '@/components/LuxuryFeatures.vue';
import PageLoader from '@/components/PageLoader.vue';
import StatsSection from '@/components/StatsSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';

const addStructuredData = (data: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = `structured-data-${Date.now()}`;
    document.head.appendChild(script);
};

onMounted(() => {
    const baseUrl = window.location.origin;
    
    // Add CollectionPage schema
    const collectionPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'GEMS Diamond Collections',
        description: 'Explore our exceptional diamond collections including round cut, pear cut, oval cut, and emerald cut diamonds. Each piece is GIA certified and represents the pinnacle of nature\'s artistry.',
        url: `${baseUrl}/#collection`,
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Round Cut Diamonds',
                    description: 'A masterpiece of precision cutting, this flawless diamond represents the pinnacle of nature\'s artistry.',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Pear Cut Diamonds',
                    description: 'Bold geometric lines meet exceptional brilliance in this contemporary classic.',
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Oval Cut Diamonds',
                    description: 'An elongated silhouette that maximizes fire and creates an illusion of greater size.',
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'Emerald Cut Diamonds',
                    description: 'Step-cut facets create a hall of mirrors effect, showcasing exceptional clarity.',
                },
            ],
        },
    };
    
    // Add Product schemas for featured diamonds
    const productSchemas = [
        {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Round Cut Diamond',
            description: 'A masterpiece of precision cutting, this flawless diamond represents the pinnacle of nature\'s artistry.',
            image: `${baseUrl}/round_cut-removebg-preview.png`,
            brand: {
                '@type': 'Brand',
                name: 'GEMS',
            },
            offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '285000',
                availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '150',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Oval Cut Diamond',
            description: 'An elongated silhouette that maximizes fire and creates an illusion of greater size.',
            image: `${baseUrl}/oval_cut-removebg-preview.png`,
            brand: {
                '@type': 'Brand',
                name: 'GEMS',
            },
            offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '342000',
                availability: 'https://schema.org/InStock',
            },
        },
    ];
    
    addStructuredData(collectionPageSchema);
    productSchemas.forEach((schema) => {
        addStructuredData(schema);
    });
});
</script>

<template>
    <DiamondLayout 
        title="Where Light Meets Perfection | GEMS Diamonds"
        description="Discover exceptional diamonds and luxury jewelry at GEMS Fifth Avenue New York. Expert guides on choosing engagement rings, diamond education, GIA certified diamonds. Explore our collections of round cut, pear cut, oval cut, and emerald cut diamonds."
        keywords="luxury diamond jewelry, engagement rings New York, diamond education guide, GIA certified diamonds, best diamond cuts 2025, how to choose engagement ring diamond, Fifth Avenue diamond store, expert diamond consultation, round cut vs oval cut diamonds, engagement ring budget guide"
    >
        <!-- Page Loader -->
        <PageLoader />

        <!-- Hero Section -->
        <DiamondHero />

        <!-- Diamond Showcase -->
        <div id="collection">
            <DiamondShowcase />
        </div>

        <!-- Collection Gallery -->
        <CollectionGallery />

        <!-- Stats Section -->
        <StatsSection />

        <!-- Features Section -->
        <div id="features">
            <LuxuryFeatures />
        </div>

        <!-- Testimonials Section -->
        <div id="testimonials">
            <TestimonialsSection />
        </div>

        <!-- FAQ Section -->
        <FAQSection />

        <!-- CTA Section -->
        <div id="contact">
            <CTASection />
        </div>
    </DiamondLayout>
</template>
