<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
    title: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
    metaDescription?: string;
}>();

const route = useRoute();

const addStructuredData = (data: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = `structured-data-article-${Date.now()}`;
    document.head.appendChild(script);
};

onMounted(() => {
    // Update meta description if provided
    if (props.metaDescription) {
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', props.metaDescription);
    }
    
    const baseUrl = window.location.origin;
    const currentUrl = baseUrl + route.path;
    
    // Add Article schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.title,
        description: props.metaDescription || props.title,
        image: props.image ? `${baseUrl}${props.image}` : `${baseUrl}/og-image.jpg`,
        datePublished: props.date,
        dateModified: props.date,
        author: {
            '@type': 'Organization',
            name: 'GEMS',
            url: baseUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: 'GEMS',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/favicon.svg`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl,
        },
        articleSection: props.category,
    };
    
    // Add BreadcrumbList schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: `${baseUrl}/blog`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: props.title,
                item: currentUrl,
            },
        ],
    };
    
    addStructuredData(articleSchema);
    addStructuredData(breadcrumbSchema);
});
</script>

<template>
    <article class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
        <!-- Background Effects -->
        <div class="absolute inset-0">
            <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <header class="mb-8 text-center sm:mb-12">
                <span class="mb-4 inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                    {{ category }}
                </span>
                <h1 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
                    {{ title }}
                </h1>
                <div class="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <span>{{ date }}</span>
                    <span>•</span>
                    <span>{{ readTime }}</span>
                </div>
            </header>

            <!-- Featured Image -->
            <div v-if="image" class="mb-8 overflow-hidden rounded-2xl sm:mb-12">
                <img 
                    :src="image" 
                    :alt="`${title} - Expert diamond education guide and buying tips for luxury engagement rings`" 
                    class="h-auto w-full object-cover" 
                    loading="lazy"
                    width="800"
                    height="450"
                    decoding="async"
                    fetchpriority="high"
                />
            </div>

            <!-- Content -->
            <div class="prose prose-invert prose-lg max-w-none">
                <slot />
            </div>
        </div>
    </article>
</template>

<style scoped>
.prose {
    color: #d1d5db;
}

.prose h2 {
    color: #ffffff;
    font-family: 'Instrument Sans', serif;
    font-size: 1.875rem;
    font-weight: 300;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.prose h3 {
    color: #e5e7eb;
    font-family: 'Instrument Sans', serif;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.prose p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
}

.prose ul,
.prose ol {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
}

.prose li {
    margin-bottom: 0.5rem;
}

.prose strong {
    color: #ffffff;
    font-weight: 500;
}

.prose a {
    color: #06b6d4;
    text-decoration: underline;
}

.prose a:hover {
    color: #22d3ee;
}
</style>

