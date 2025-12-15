<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import BookingModal from '@/components/BookingModal.vue';

const props = defineProps<{
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
}>();

const router = useRouter();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isBookingModalOpen = ref(false);

const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const updateMetaProperty = (property: string, content: string) => {
    updateMetaTag(property, content, 'property');
};

const updateLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
};

const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    
    // Check if we're on the home page
    const currentRoute = router.currentRoute.value.name;
    
    if (currentRoute === 'Home') {
        // Update URL hash to trigger title update via router handler
        router.push({ hash: `#${sectionId}` }).then(() => {
            // Scroll to the section
            nextTick(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    } else {
        // We're on a different page, navigate to home with hash
        router.push({ name: 'Home', hash: `#${sectionId}` }).then(() => {
            // Wait for the page to load and DOM to be ready, then scroll
            nextTick(() => {
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            });
        });
    }
};

const signIn = () => {
    // Close mobile menu if open
    closeMobileMenu();
    // Navigate to sign in page (title handled by router handler)
    router.push({ name: 'SignIn' });
};

const openSocialMedia = (platform: string) => {
    const urls: Record<string, string> = {
        twitter: 'https://twitter.com/gems',
        instagram: 'https://instagram.com/gems',
        youtube: 'https://youtube.com/@gems',
        pinterest: 'https://pinterest.com/gems',
    };
    const url = urls[platform.toLowerCase()];
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
};

const viewCollection = (cutName: string) => {
    closeMobileMenu();
    
    // Check if we're on the home page
    const currentRoute = router.currentRoute.value.name;
    
    const scrollAndHighlight = () => {
        const element = document.getElementById('collection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // After scrolling, try to highlight the specific collection item
            setTimeout(() => {
                const collectionItems = document.querySelectorAll('[data-collection-title]');
                const cutNameLower = cutName.toLowerCase().replace(' cut', '');
                collectionItems.forEach((item) => {
                    const title = item.getAttribute('data-collection-title');
                    if (title && title.toLowerCase().replace(' cut', '') === cutNameLower) {
                        // Scroll the item into view within the collection section
                        item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
                        // Add a highlight effect
                        const originalBorder = item.classList.contains('border-white/10') ? 'border-white/10' : '';
                        item.classList.add('ring-2', 'ring-cyan-400', 'ring-opacity-75', 'scale-105');
                        setTimeout(() => {
                            item.classList.remove('ring-2', 'ring-cyan-400', 'ring-opacity-75', 'scale-105');
                        }, 2000);
                    }
                });
            }, 500);
        }
    };
    
    if (currentRoute === 'Home') {
        // We're already on home, scroll to the collection section
        nextTick(() => {
            scrollAndHighlight();
        });
    } else {
        // We're on a different page, navigate to home with hash
        router.push({ name: 'Home', hash: '#collection' }).then(() => {
            nextTick(() => {
                setTimeout(() => {
                    scrollAndHighlight();
                }, 300);
            });
        });
    }
};

const viewService = (serviceName: string) => {
    // Close mobile menu if open
    closeMobileMenu();
    
    // Handle different services
    switch (serviceName) {
        case 'Private Consultations':
            // Open booking modal
            isBookingModalOpen.value = true;
            break;
        case 'Diamond Education':
            // Navigate to Diamond Education page
            router.push({ name: 'DiamondEducation' }).catch(() => {
                // Fallback to path if name doesn't work
                router.push('/diamond-education');
            });
            break;
        case 'Cleaning & Care':
            // Navigate to Cleaning & Care page
            router.push({ name: 'CleaningCare' }).catch(() => {
                // Fallback to path if name doesn't work
                router.push('/cleaning-care');
            });
            break;
        case 'Insurance Appraisals':
            // Navigate to Insurance Appraisals page
            router.push({ name: 'InsuranceAppraisals' }).catch(() => {
                // Fallback to path if name doesn't work
                router.push('/insurance-appraisals');
            });
            break;
        default:
            // Scroll to contact section for other services
            scrollToSection('contact');
            break;
    }
};

const closeBookingModal = () => {
    isBookingModalOpen.value = false;
};

const handleBookingSubmit = (data: any) => {
    // Handle booking form submission
    console.log('Booking request submitted:', data);
};

const viewPolicy = (policyName: string) => {
    closeMobileMenu();
    // Scroll to contact section for policy inquiries
    scrollToSection('contact');
};

const addStructuredData = (data: object) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = `structured-data-${Date.now()}`;
    document.head.appendChild(script);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Get current URL for canonical and OG tags
    const currentUrl = window.location.origin + router.currentRoute.value.fullPath;
    const baseUrl = window.location.origin;
    
    // Update document title (router handler will override on navigation)
    const pageTitle = props.title || 'GEMS';
    document.title = pageTitle;
    
    // Update meta description
    const metaDescription = props.description || 'Discover exceptional diamonds and luxury jewelry at GEMS. Expert guides on choosing engagement rings, diamond education, GIA certified diamonds. Visit our Fifth Avenue showroom in New York.';
    updateMetaTag('description', metaDescription);
    
    // Update meta keywords
    const metaKeywords = props.keywords || 'luxury diamond jewelry, engagement rings New York, diamond education guide, GIA certified diamonds, best diamond cuts 2025, how to choose engagement ring diamond, Fifth Avenue diamond store, expert diamond consultation';
    updateMetaTag('keywords', metaKeywords);
    
    // Update Open Graph tags
    updateMetaProperty('og:title', pageTitle);
    updateMetaProperty('og:description', metaDescription);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('og:image', props.ogImage || `${baseUrl}/og-image.jpg`);
    updateMetaProperty('og:type', 'website');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', props.ogImage || `${baseUrl}/twitter-image.jpg`);
    
    // Update canonical URL
    updateLinkTag('canonical', props.canonicalUrl || currentUrl);
    
    // Add Organization structured data
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GEMS',
        url: baseUrl,
        logo: `${baseUrl}/favicon.svg`,
        description: 'Luxury diamond jewelry and engagement rings. Expert diamond education and consultation services at our Fifth Avenue showroom in New York.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '725 Fifth Avenue',
            addressLocality: 'New York',
            addressRegion: 'NY',
            postalCode: '10022',
            addressCountry: 'US',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-212-555-0123',
            contactType: 'Customer Service',
            email: 'concierge@gems.com',
            areaServed: 'US',
            availableLanguage: 'English',
        },
        sameAs: [
            'https://twitter.com/gems',
            'https://instagram.com/gems',
            'https://youtube.com/@gems',
            'https://pinterest.com/gems',
        ],
    };
    
    // Add LocalBusiness structured data
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'JewelryStore',
        name: 'GEMS',
        image: `${baseUrl}/og-image.jpg`,
        '@id': `${baseUrl}/#organization`,
        url: baseUrl,
        telephone: '+1-212-555-0123',
        email: 'concierge@gems.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '725 Fifth Avenue',
            addressLocality: 'New York',
            addressRegion: 'NY',
            postalCode: '10022',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '40.7631',
            longitude: '-73.9712',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '10:00',
                closes: '19:00',
            },
        ],
        priceRange: '$$$',
    };
    
    // Add WebSite schema with search action
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'GEMS',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
    
    addStructuredData(organizationSchema);
    addStructuredData(localBusinessSchema);
    addStructuredData(websiteSchema);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.body.style.overflow = '';
});
</script>

<template>

    <div class="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <!-- Navigation -->
        <nav
            :class="[
                'fixed top-0 z-50 w-full transition-all duration-500',
                isScrolled ? 'bg-[#0a0a0a]/95 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:py-4' : 'bg-transparent py-4 sm:py-6'
            ]"
        >
            <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <!-- Logo -->
                <RouterLink to="/" class="group flex items-center gap-2 sm:gap-3">
                    <!-- Diamond Icon -->
                    <div class="relative">
                        <svg class="h-8 w-8 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" viewBox="0 0 40 40" fill="none">
                            <defs>
                                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#06b6d4" />
                                    <stop offset="50%" style="stop-color:#a855f7" />
                                    <stop offset="100%" style="stop-color:#ec4899" />
                                </linearGradient>
                            </defs>
                            <polygon points="20,2 35,15 20,38 5,15" fill="url(#logoGradient)" opacity="0.9" />
                            <polygon points="20,2 35,15 20,20 5,15" fill="white" opacity="0.2" />
                            <line x1="5" y1="15" x2="35" y2="15" stroke="white" stroke-width="0.5" opacity="0.3" />
                        </svg>
                        <!-- Sparkle -->
                        <div class="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-cyan-300"></div>
                    </div>
                    <span class="font-serif text-xl tracking-[0.2em] text-white sm:text-2xl">GEMS</span>
                </RouterLink>

                <!-- Desktop Navigation -->
                <div class="hidden items-center gap-6 lg:flex lg:gap-10">
                    <a @click.prevent="scrollToSection('collection')" href="#collection" class="cursor-pointer text-sm tracking-wider text-gray-300 transition-colors hover:text-cyan-400">COLLECTION</a>
                    <a @click.prevent="scrollToSection('features')" href="#features" class="cursor-pointer text-sm tracking-wider text-gray-300 transition-colors hover:text-purple-400">CRAFTSMANSHIP</a>
                    <a @click.prevent="scrollToSection('testimonials')" href="#testimonials" class="cursor-pointer text-sm tracking-wider text-gray-300 transition-colors hover:text-pink-400">TESTIMONIALS</a>
                    <a @click.prevent="scrollToSection('contact')" href="#contact" class="cursor-pointer text-sm tracking-wider text-gray-300 transition-colors hover:text-cyan-400">CONTACT</a>
                </div>

                <!-- Desktop CTA -->
                <div class="hidden items-center gap-4 lg:flex lg:gap-6">
                    <button @click="signIn" class="text-sm tracking-wider text-gray-300 transition-colors hover:text-purple-400">
                        SIGN IN
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button
                    @click="toggleMobileMenu"
                    class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-all active:scale-95 lg:hidden sm:h-11 sm:w-11"
                    aria-label="Toggle mobile menu"
                >
                    <span
                        :class="[
                            'h-0.5 w-6 bg-white transition-all duration-300 sm:w-7',
                            isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                        ]"
                    ></span>
                    <span
                        :class="[
                            'h-0.5 w-6 bg-white transition-all duration-300 sm:w-7',
                            isMobileMenuOpen ? 'opacity-0' : ''
                        ]"
                    ></span>
                    <span
                        :class="[
                            'h-0.5 w-6 bg-white transition-all duration-300 sm:w-7',
                            isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                        ]"
                    ></span>
                </button>
            </div>

            <!-- Mobile Menu -->
            <Transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="isMobileMenuOpen"
                    class="fixed inset-0 top-0 z-40 flex flex-col bg-[#0a0a0f] backdrop-blur-xl lg:hidden"
                    @click.self="closeMobileMenu"
                    style="min-height: 100vh; min-height: 100dvh;"
                >
                    <!-- Background Pattern -->
                    <div class="absolute inset-0 opacity-5">
                        <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="mobileMenuPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <polygon points="10,0 20,10 10,20 0,10" fill="none" stroke="url(#mobileMenuGradient)" stroke-width="0.5" />
                                </pattern>
                                <linearGradient id="mobileMenuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#06b6d4" />
                                    <stop offset="50%" style="stop-color:#a855f7" />
                                    <stop offset="100%" style="stop-color:#ec4899" />
                                </linearGradient>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#mobileMenuPattern)" />
                        </svg>
                    </div>

                    <!-- Scrollable Content Container -->
                    <div class="relative z-10 flex flex-1 flex-col overflow-y-auto overscroll-contain">
                        <!-- Menu Items Container -->
                        <div class="flex min-h-full flex-col items-center justify-center gap-3 px-4 py-6 sm:gap-4 sm:px-6 sm:py-8 md:gap-5 md:py-10">
                            <!-- Navigation Links -->
                            <a
                                href="#collection"
                                @click.prevent="scrollToSection('collection')"
                                class="mobile-menu-link w-full max-w-[280px] min-h-[44px] flex items-center justify-center text-center font-serif text-base tracking-wider text-white transition-all duration-300 hover:text-cyan-400 active:scale-95 sm:max-w-sm sm:text-xl md:max-w-md md:text-2xl"
                            >
                                COLLECTION
                            </a>
                            <a
                                href="#features"
                                @click.prevent="scrollToSection('features')"
                                class="mobile-menu-link w-full max-w-[280px] min-h-[44px] flex items-center justify-center text-center font-serif text-base tracking-wider text-white transition-all duration-300 hover:text-purple-400 active:scale-95 sm:max-w-sm sm:text-xl md:max-w-md md:text-2xl"
                            >
                                CRAFTSMANSHIP
                            </a>
                            <a
                                href="#testimonials"
                                @click.prevent="scrollToSection('testimonials')"
                                class="mobile-menu-link w-full max-w-[280px] min-h-[44px] flex items-center justify-center text-center font-serif text-base tracking-wider text-white transition-all duration-300 hover:text-pink-400 active:scale-95 sm:max-w-sm sm:text-xl md:max-w-md md:text-2xl"
                            >
                                TESTIMONIALS
                            </a>
                            <a
                                href="#contact"
                                @click.prevent="scrollToSection('contact')"
                                class="mobile-menu-link w-full max-w-[280px] min-h-[44px] flex items-center justify-center text-center font-serif text-base tracking-wider text-white transition-all duration-300 hover:text-cyan-400 active:scale-95 sm:max-w-sm sm:text-xl md:max-w-md md:text-2xl"
                            >
                                CONTACT
                            </a>

                            <!-- Sign In Button -->
                            <div class="mt-2 flex w-full max-w-[280px] flex-col items-center gap-3 sm:mt-4 sm:max-w-sm md:mt-6 md:max-w-md">
                                <button 
                                    @click="signIn" 
                                    class="w-full min-h-[44px] rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs tracking-wider text-white transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 active:scale-95 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-3.5 md:text-base"
                                >
                                    SIGN IN
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Menu Footer -->
                    <div class="relative z-10 shrink-0 border-t border-white/10 bg-[#0a0a0a]/90 p-3 text-center backdrop-blur-sm sm:p-4 md:p-6">
                        <p class="text-[10px] tracking-wider text-gray-400 sm:text-xs md:text-sm">FIFTH AVENUE, NEW YORK</p>
                        <p class="mt-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs text-transparent sm:text-sm md:text-base">+1 (212) 555-0123</p>
                    </div>
                </div>
            </Transition>
        </nav>

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="border-t border-white/5 bg-[#050508]">
            <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <!-- Footer Grid -->
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    <!-- Brand -->
                    <div class="sm:col-span-2 lg:col-span-1">
                        <RouterLink to="/" class="group mb-4 flex items-center gap-2 transition-opacity hover:opacity-80 sm:mb-6">
                            <svg class="h-8 w-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 40 40" fill="none">
                                <defs>
                                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#06b6d4" />
                                        <stop offset="50%" style="stop-color:#a855f7" />
                                        <stop offset="100%" style="stop-color:#ec4899" />
                                    </linearGradient>
                                </defs>
                                <polygon points="20,2 35,15 20,38 5,15" fill="url(#footerLogoGradient)" opacity="0.9" />
                                <polygon points="20,2 35,15 20,20 5,15" fill="white" opacity="0.2" />
                            </svg>
                            <span class="font-serif text-xl tracking-[0.2em]">GEMS</span>
                        </RouterLink>
                        <p class="mb-4 text-sm leading-relaxed text-gray-500 sm:mb-6">
                            Crafting timeless brilliance since 1889. Each diamond tells a story of excellence.
                        </p>
                        <div class="flex gap-4">
                            <a @click.prevent="openSocialMedia('Twitter')" href="https://twitter.com/gems" target="_blank" rel="noopener noreferrer" class="cursor-pointer text-gray-500 transition-colors hover:text-cyan-400" aria-label="Follow us on Twitter">
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a @click.prevent="openSocialMedia('Instagram')" href="https://instagram.com/gems" target="_blank" rel="noopener noreferrer" class="cursor-pointer text-gray-500 transition-colors hover:text-purple-400" aria-label="Follow us on Instagram">
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a @click.prevent="openSocialMedia('YouTube')" href="https://youtube.com/@gems" target="_blank" rel="noopener noreferrer" class="cursor-pointer text-gray-500 transition-colors hover:text-pink-400" aria-label="Subscribe to our YouTube channel">
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </a>
                            <a @click.prevent="openSocialMedia('Pinterest')" href="https://pinterest.com/gems" target="_blank" rel="noopener noreferrer" class="cursor-pointer text-gray-500 transition-colors hover:text-cyan-400" aria-label="Follow us on Pinterest">
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Collections -->
                    <div>
                        <h4 class="mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xs tracking-[0.2em] text-transparent sm:mb-6">COLLECTIONS</h4>
                        <ul class="space-y-2 text-sm text-gray-500 sm:space-y-3">
                            <li><a @click.prevent="viewCollection('Round Cut')" href="#collection" class="cursor-pointer transition-colors hover:text-white">Round Cut</a></li>
                            <li><a @click.prevent="viewCollection('Pear Cut')" href="#collection" class="cursor-pointer transition-colors hover:text-white">Pear Cut</a></li>
                            <li><a @click.prevent="viewCollection('Oval Cut')" href="#collection" class="cursor-pointer transition-colors hover:text-white">Oval Cut</a></li>
                            <li><a @click.prevent="viewCollection('Emerald Cut')" href="#collection" class="cursor-pointer transition-colors hover:text-white">Emerald Cut</a></li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div>
                        <h4 class="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xs tracking-[0.2em] text-transparent sm:mb-6">SERVICES</h4>
                        <ul class="space-y-2 text-sm text-gray-500 sm:space-y-3">
                            <li><a @click.prevent="viewService('Private Consultations')" href="#contact" class="cursor-pointer transition-colors hover:text-white">Private Consultations</a></li>
                            <li><a @click.prevent="viewService('Diamond Education')" href="/blog" class="cursor-pointer transition-colors hover:text-white">Diamond Education</a></li>
                            <li><a @click.prevent="viewService('Cleaning & Care')" href="#contact" class="cursor-pointer transition-colors hover:text-white">Cleaning & Care</a></li>
                            <li><a @click.prevent="viewService('Insurance Appraisals')" href="#contact" class="cursor-pointer transition-colors hover:text-white">Insurance Appraisals</a></li>
                            <li><RouterLink to="/blog" class="transition-colors hover:text-white">Blog</RouterLink></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h4 class="mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-xs tracking-[0.2em] text-transparent sm:mb-6">VISIT US</h4>
                        <address class="space-y-2 text-sm not-italic text-gray-500 sm:space-y-3">
                            <a href="https://www.google.com/maps/search/?api=1&query=725+Fifth+Avenue+New+York+NY+10022" target="_blank" rel="noopener noreferrer" class="block cursor-pointer transition-colors hover:text-white">
                                <p>725 Fifth Avenue</p>
                                <p>New York, NY 10022</p>
                            </a>
                            <p class="pt-2">Mon - Sat: 10AM - 7PM</p>
                            <p>Sun: By Appointment</p>
                            <p class="pt-2">
                                <a href="tel:+12125550123" class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-colors">+1 (212) 555-0123</a>
                            </p>
                        </address>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:mt-12 sm:flex-row">
                    <p class="text-xs text-gray-600">&copy; 2025 GEMS. All rights reserved.</p>
                    <div class="flex flex-wrap justify-center gap-4 text-xs text-gray-600 sm:gap-6">
                        <a @click.prevent="viewPolicy('Privacy Policy')" href="#contact" class="cursor-pointer transition-colors hover:text-white">Privacy Policy</a>
                        <a @click.prevent="viewPolicy('Terms of Service')" href="#contact" class="cursor-pointer transition-colors hover:text-white">Terms of Service</a>
                        <a @click.prevent="viewPolicy('Cookie Policy')" href="#contact" class="cursor-pointer transition-colors hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Booking Modal -->
        <BookingModal :is-open="isBookingModalOpen" @close="closeBookingModal" @submit="handleBookingSubmit" />
    </div>
</template>

<style scoped>
.font-serif {
    font-family: 'Cormorant Garamond', serif;
}
</style>



