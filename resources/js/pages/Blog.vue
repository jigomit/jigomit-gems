<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';

const isVisible = ref(false);

const blogPosts = [
    {
        id: 1,
        slug: 'how-to-choose-perfect-engagement-ring-diamond',
        title: 'How to Choose the Perfect Engagement Ring Diamond: A Complete Guide',
        excerpt: 'Discover expert tips on selecting the ideal diamond for your engagement ring. Learn about the 4Cs, budget considerations, and what makes a diamond truly special.',
        date: 'January 15, 2025',
        readTime: '8 min read',
        category: 'Engagement Rings',
        image: '/round_cut-removebg-preview.png',
    },
    {
        id: 3,
        slug: 'difference-between-round-cut-oval-cut-diamonds',
        title: 'Round Cut vs Oval Cut Diamonds: What\'s the Difference and Which is Right for You?',
        excerpt: 'Compare round cut and oval cut diamonds side by side. Understand the unique characteristics, pros and cons, and styling options for each cut.',
        date: 'January 5, 2025',
        readTime: '7 min read',
        category: 'Diamond Education',
        image: '/oval_cut-removebg-preview.png',
    },
    {
        id: 4,
        slug: 'how-much-spend-engagement-ring-diamond',
        title: 'How Much Should You Spend on an Engagement Ring Diamond? Budget Guide 2025',
        excerpt: 'Navigate the often-confusing world of diamond pricing. Learn about the traditional rules, modern trends, and how to get the best value for your budget.',
        date: 'December 28, 2024',
        readTime: '9 min read',
        category: 'Buying Guide',
        image: '/pear_cut-removebg-preview.png',
    },
    {
        id: 5,
        slug: 'gia-certified-diamonds-vs-non-certified',
        title: 'GIA Certified Diamonds vs Non-Certified: Why Certification Matters',
        excerpt: 'Understand the importance of diamond certification. Learn why GIA certification is the gold standard and how it protects your investment.',
        date: 'December 20, 2024',
        readTime: '5 min read',
        category: 'Diamond Education',
        image: '/emerald-cut-removebg-preview.png',
    },
];

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
    document.title = 'Blog - Diamond Education & Buying Guides | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Blog schema
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'GEMS Diamond Education Blog',
        description: 'Expert diamond education articles and buying guides. Learn how to choose the perfect engagement ring diamond, compare diamond cuts, understand GIA certification, and get expert tips on diamond buying.',
        url: `${baseUrl}/blog`,
        publisher: {
            '@type': 'Organization',
            name: 'GEMS',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/favicon.svg`,
            },
        },
        blogPost: blogPosts.map((post, index) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: `${baseUrl}${post.image}`,
            datePublished: post.date,
            author: {
                '@type': 'Organization',
                name: 'GEMS',
            },
            url: `${baseUrl}/blog/${post.slug}`,
        })),
    };
    
    addStructuredData(blogSchema);
});
</script>

<template>
    <DiamondLayout 
        title="Blog - Diamond Education & Buying Guides | GEMS"
        description="Expert diamond education articles and buying guides. Learn how to choose the perfect engagement ring diamond, compare diamond cuts, understand GIA certification, and get expert tips on diamond buying."
        keywords="diamond education, engagement ring buying guide, how to choose diamond, diamond cut comparison, GIA certification guide, diamond buying tips, engagement ring budget, round cut vs oval cut"
    >
        <section class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] pt-32 pb-20">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"></div>
                <div class="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-3xl"></div>
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div
                    :class="[
                        'mb-12 text-center transition-all duration-1000 sm:mb-16',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <span class="mb-4 inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:text-sm">
                        DIAMOND EDUCATION
                    </span>
                    <h1 class="mb-4 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl">
                        Expert <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Insights</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Discover comprehensive guides, expert tips, and insider knowledge to help you make informed decisions about your diamond purchase.
                    </p>
                </div>

                <!-- Blog Posts Grid -->
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article
                        v-for="(post, index) in blogPosts"
                        :key="post.id"
                        :class="[
                            'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700 hover:border-white/20 hover:bg-white/10',
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                        ]"
                        :style="{ transitionDelay: `${200 + index * 100}ms` }"
                    >
                        <RouterLink :to="`/blog/${post.slug}`" class="block">
                            <!-- Image -->
                            <div class="relative h-48 overflow-hidden sm:h-56">
                                <img
                                    :src="post.image"
                                    :alt="`${post.title} - ${post.category} diamond education article with expert buying tips and guides`"
                                    class="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    width="400"
                                    height="300"
                                    decoding="async"
                                    fetchpriority="low"
                                />
                                <div class="absolute bottom-4 left-4">
                                    <span class="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                                        {{ post.category }}
                                    </span>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-6">
                                <div class="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                    <span>{{ post.date }}</span>
                                    <span>•</span>
                                    <span>{{ post.readTime }}</span>
                                </div>
                                <h2 class="mb-3 font-serif text-xl text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                                    {{ post.title }}
                                </h2>
                                <p class="text-sm leading-relaxed text-gray-400 sm:text-base">
                                    {{ post.excerpt }}
                                </p>
                                <div class="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-400">
                                    Read More
                                    <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </RouterLink>
                    </article>
                </div>
            </div>
        </section>
    </DiamondLayout>
</template>

