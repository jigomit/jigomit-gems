<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import DiamondLayout from '@/layouts/DiamondLayout.vue';

const isVisible = ref(false);

const blogPosts: Array<{
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}> = [];

const diamondEducationPosts = computed(() => {
    return blogPosts.filter((post) => post.category === 'Diamond Education');
});

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
    document.title = 'Diamond Education - Expert Guides & Tips | GEMS';
    
    const baseUrl = window.location.origin;
    
    // Add Blog schema for Diamond Education
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'GEMS Diamond Education',
        description: 'Comprehensive diamond education guides. Learn about diamond cuts, GIA certification, and expert tips to make informed diamond purchasing decisions.',
        url: `${baseUrl}/diamond-education`,
        publisher: {
            '@type': 'Organization',
            name: 'GEMS',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/favicon.svg`,
            },
        },
        blogPost: diamondEducationPosts.value.map((post) => ({
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
        title="Diamond Education - Expert Guides & Tips | GEMS"
        description="Comprehensive diamond education guides. Learn about diamond cuts, GIA certification, and expert tips to make informed diamond purchasing decisions."
        keywords="diamond education, diamond cut guide, GIA certification, diamond buying tips, diamond knowledge, diamond cuts explained, diamond certification guide"
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
                        Learn About <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Diamonds</span>
                    </h1>
                    <p class="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
                        Comprehensive guides and expert knowledge to help you understand diamonds, their characteristics, and make informed purchasing decisions.
                    </p>
                </div>

                <!-- Diamond Image and Content -->
                <div
                    :class="[
                        'mx-auto max-w-4xl transition-all duration-1000',
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    ]"
                >
                    <!-- Diamond Image -->
                    <div class="mb-12 flex justify-center">
                        <div class="relative">
                            <img
                                src="/round_cut-removebg-preview.png"
                                alt="Brilliant round cut diamond showcasing exceptional clarity and brilliance"
                                class="h-auto w-full max-w-md object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <!-- Diamond Education Content -->
                    <div class="prose prose-invert prose-lg max-w-none">
                        <div class="space-y-8 text-gray-300">
                            <div>
                                <h2 class="mb-4 font-serif text-3xl font-light text-white sm:text-4xl">Understanding Diamonds</h2>
                                <p class="mb-4 leading-relaxed">
                                    Diamonds are among nature's most extraordinary creations, formed deep within the Earth's mantle under extreme pressure and temperature conditions over billions of years. These precious gemstones are composed of pure carbon atoms arranged in a crystal structure, making them the hardest naturally occurring substance known to humanity.
                                </p>
                                <p class="mb-4 leading-relaxed">
                                    The journey of a diamond from its formation to becoming a cherished piece of jewelry is remarkable. Volcanic eruptions brought these gems to the Earth's surface millions of years ago, where they were eventually discovered and transformed into symbols of eternal love, commitment, and luxury.
                                </p>
                            </div>

                            <div>
                                <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">The 4Cs: The Foundation of Diamond Quality</h3>
                                <p class="mb-4 leading-relaxed">
                                    Understanding diamond quality requires knowledge of the 4Cs: Cut, Color, Clarity, and Carat Weight. These four characteristics determine a diamond's beauty, value, and overall appeal.
                                </p>

                                <div class="mb-6 space-y-4">
                                    <div>
                                        <h4 class="mb-2 text-xl font-medium text-cyan-300">Cut</h4>
                                        <p class="leading-relaxed">
                                            The cut of a diamond is perhaps the most important factor affecting its brilliance and fire. A well-cut diamond reflects light internally from one mirror-like facet to another and disperses it through the top of the stone, creating that mesmerizing sparkle. The cut grade ranges from Excellent to Poor, with proportions, symmetry, and polish all playing crucial roles. A diamond with an Excellent cut will display maximum brilliance, fire, and scintillation, while a Poor cut will appear dull and lifeless, regardless of its other qualities.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 class="mb-2 text-xl font-medium text-purple-300">Color</h4>
                                        <p class="leading-relaxed">
                                            Diamond color is graded on a scale from D (completely colorless) to Z (light yellow or brown). The most valuable diamonds are those with no color, as they allow maximum light to pass through and reflect back as brilliance. Colorless diamonds (D-F) are extremely rare and command premium prices. Near-colorless diamonds (G-J) offer excellent value while appearing colorless to the untrained eye. As you move down the scale, subtle tints become more noticeable, though some fancy colored diamonds (yellow, pink, blue) are highly prized for their unique beauty.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 class="mb-2 text-xl font-medium text-pink-300">Clarity</h4>
                                        <p class="leading-relaxed">
                                            Clarity refers to the absence of internal characteristics (inclusions) and external blemishes. The clarity scale ranges from Flawless (FL) to Included (I3). Flawless diamonds are extremely rare and have no visible inclusions or blemishes under 10x magnification. Internally Flawless (IF) diamonds have no inclusions but may have minor surface blemishes. Very Slightly Included (VVS1-VVS2) and Slightly Included (VS1-VS2) diamonds contain inclusions that are difficult to see even under magnification. Most diamonds fall into the Slightly Included category, offering excellent value while appearing eye-clean.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 class="mb-2 text-xl font-medium text-cyan-300">Carat Weight</h4>
                                        <p class="leading-relaxed">
                                            Carat weight measures a diamond's size, with one carat equaling 200 milligrams. While larger diamonds are generally more valuable, the relationship between carat weight and price is not linear. A 2-carat diamond typically costs significantly more than twice a 1-carat diamond of similar quality due to rarity. It's important to remember that carat weight alone doesn't determine a diamond's beauty—the combination of all 4Cs creates the overall appearance and value.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Diamond Shapes and Cuts</h3>
                                <p class="mb-4 leading-relaxed">
                                    The shape of a diamond refers to its outline when viewed from above, while the cut refers to how well the facets are proportioned. Popular shapes include Round Brilliant, Princess, Emerald, Oval, Pear, Marquise, Cushion, and Asscher. Each shape has unique characteristics and appeals to different personal styles.
                                </p>
                                <p class="mb-4 leading-relaxed">
                                    Round Brilliant cuts are the most popular, offering maximum brilliance and fire. Princess cuts provide a modern, geometric look with excellent sparkle. Emerald cuts feature step-cut facets that create a hall-of-mirrors effect, emphasizing clarity. Oval and Pear cuts create an illusion of greater size while maintaining elegance. The choice of shape is deeply personal and should reflect the wearer's style and preferences.
                                </p>
                            </div>

                            <div>
                                <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Diamond Certification</h3>
                                <p class="mb-4 leading-relaxed">
                                    Certification by a reputable laboratory, such as the Gemological Institute of America (GIA), provides an independent assessment of a diamond's quality. A GIA certificate documents the 4Cs and includes a unique identification number laser-inscribed on the diamond's girdle. This certification ensures you're getting exactly what you're paying for and protects your investment. Always purchase certified diamonds from trusted sources to guarantee authenticity and quality.
                                </p>
                            </div>

                            <div>
                                <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">Caring for Your Diamond</h3>
                                <p class="mb-4 leading-relaxed">
                                    While diamonds are incredibly durable, proper care ensures they maintain their brilliance for generations. Regular cleaning with warm soapy water and a soft brush removes oils and dirt that can dull a diamond's sparkle. Professional cleaning and inspection every six months helps maintain settings and ensures stones remain secure. Store diamonds separately to prevent scratching other jewelry, and consider insurance to protect your valuable investment.
                                </p>
                            </div>

                            <div>
                                <h3 class="mb-4 font-serif text-2xl font-light text-white sm:text-3xl">The Symbolism of Diamonds</h3>
                                <p class="mb-4 leading-relaxed">
                                    Throughout history, diamonds have symbolized strength, eternal love, and invincibility. Their unmatched hardness represents unbreakable bonds, making them the perfect choice for engagement rings and anniversary gifts. The ancient Greeks believed diamonds were tears of the gods, while Romans thought they were splinters from falling stars. Today, diamonds continue to represent commitment, achievement, and the celebration of life's most precious moments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DiamondLayout>
</template>

