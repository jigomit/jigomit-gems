<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    currentSlug: string;
}>();

const allArticles = [
    {
        slug: 'how-to-choose-perfect-engagement-ring-diamond',
        title: 'How to Choose the Perfect Engagement Ring Diamond',
        category: 'Engagement Rings',
    },
    {
        slug: 'difference-between-round-cut-oval-cut-diamonds',
        title: 'Round Cut vs Oval Cut Diamonds',
        category: 'Diamond Education',
    },
    {
        slug: 'how-much-spend-engagement-ring-diamond',
        title: 'How Much Should You Spend on an Engagement Ring Diamond?',
        category: 'Buying Guide',
    },
    {
        slug: 'gia-certified-diamonds-vs-non-certified',
        title: 'GIA Certified Diamonds vs Non-Certified',
        category: 'Diamond Education',
    },
];

const relatedArticles = computed(() => {
    return allArticles.filter((article) => article.slug !== props.currentSlug).slice(0, 3);
});
</script>

<template>
    <section class="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] py-16">
        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 class="mb-8 font-serif text-2xl font-light text-white sm:text-3xl">
                Related <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Articles</span>
            </h2>
            <div class="grid gap-6 md:grid-cols-3">
                <article
                    v-for="article in relatedArticles"
                    :key="article.slug"
                    class="group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                >
                    <RouterLink :to="`/blog/${article.slug}`" class="block p-6">
                        <span class="mb-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                            {{ article.category }}
                        </span>
                        <h3 class="mt-3 font-serif text-lg text-white transition-colors group-hover:text-cyan-300">
                            {{ article.title }}
                        </h3>
                        <div class="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                            Read Article
                            <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </RouterLink>
                </article>
            </div>
        </div>
    </section>
</template>
