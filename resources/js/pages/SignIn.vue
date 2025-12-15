<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import DiamondLayout from '@/layouts/DiamondLayout.vue';

const router = useRouter();
const formData = ref({
    email: '',
    password: '',
    remember: false,
});

const errors = ref<{ email?: string; password?: string }>({});
const isSubmitting = ref(false);

const validateForm = (): boolean => {
    errors.value = {};

    if (!formData.value.email.trim()) {
        errors.value.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
    }

    if (!formData.value.password.trim()) {
        errors.value.password = 'Password is required';
    } else if (formData.value.password.length < 6) {
        errors.value.password = 'Password must be at least 6 characters';
    }

    return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;

    // Simulate form submission
    setTimeout(() => {
        // In production, you would send this to your backend API
        console.log('Sign in attempt:', formData.value);
        alert('Sign in functionality will be connected to your authentication system.\n\nFor now, please contact us at:\nPhone: +1 (212) 555-0123\nEmail: concierge@gems.com');
        isSubmitting.value = false;
    }, 1000);
};

onMounted(() => {
    document.title = 'Sign In - GEMS';
});
</script>

<template>
    <DiamondLayout 
        title="Sign In - GEMS"
        description="Sign in to your GEMS account to access exclusive collections, track orders, and manage your preferences."
        keywords="sign in, login, GEMS account, diamond jewelry account"
    >
        <div class="min-h-screen flex items-center justify-center px-4 py-20 sm:py-24">
            <!-- Background Elements -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute -left-20 top-1/4 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96"></div>
                <div class="absolute -right-20 bottom-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/10 blur-3xl sm:h-96 sm:w-96" style="animation-delay: 1s"></div>
            </div>

            <!-- Sign In Card -->
            <div class="relative z-10 w-full max-w-md">
                <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/20 via-purple-950/20 to-pink-950/20 p-8 backdrop-blur-sm sm:p-10">
                    <!-- Corner Decorations -->
                    <div class="absolute left-0 top-0 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-cyan-500/40"></div>
                    <div class="absolute bottom-0 right-0 h-20 w-20 rounded-br-3xl border-b-2 border-r-2 border-pink-500/40"></div>

                    <!-- Background Pattern -->
                    <div class="absolute inset-0 opacity-5">
                        <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="signInPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <polygon points="10,0 20,10 10,20 0,10" fill="none" stroke="url(#signInGradient)" stroke-width="0.5" />
                                </pattern>
                                <linearGradient id="signInGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#06b6d4" />
                                    <stop offset="50%" style="stop-color:#a855f7" />
                                    <stop offset="100%" style="stop-color:#ec4899" />
                                </linearGradient>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#signInPattern)" />
                        </svg>
                    </div>

                    <div class="relative z-10">
                        <!-- Header -->
                        <div class="mb-8 text-center">
                            <h1 class="mb-2 font-serif text-3xl font-light text-white sm:text-4xl">
                                Welcome
                                <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                    Back
                                </span>
                            </h1>
                            <p class="text-sm text-gray-400 sm:text-base">
                                Sign in to access your account
                            </p>
                        </div>

                        <!-- Sign In Form -->
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <!-- Email -->
                            <div>
                                <label for="email" class="mb-2 block text-sm font-medium text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    required
                                    autocomplete="email"
                                    class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                    placeholder="your@email.com"
                                />
                                <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
                            </div>

                            <!-- Password -->
                            <div>
                                <label for="password" class="mb-2 block text-sm font-medium text-gray-300">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    v-model="formData.password"
                                    type="password"
                                    required
                                    autocomplete="current-password"
                                    class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                    placeholder="••••••••"
                                />
                                <p v-if="errors.password" class="mt-1 text-sm text-red-400">{{ errors.password }}</p>
                            </div>

                            <!-- Remember Me & Forgot Password -->
                            <div class="flex items-center justify-between">
                                <label class="flex items-center gap-2">
                                    <input
                                        v-model="formData.remember"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                                    />
                                    <span class="text-sm text-gray-400">Remember me</span>
                                </label>
                                <a href="#" class="text-sm text-purple-400 transition-colors hover:text-purple-300">
                                    Forgot password?
                                </a>
                            </div>

                            <!-- Submit Button -->
                            <button
                                type="submit"
                                :disabled="isSubmitting"
                                class="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-3 text-sm font-medium tracking-[0.15em] text-white transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span class="relative z-10">
                                    <span v-if="!isSubmitting">SIGN IN</span>
                                    <span v-else class="flex items-center justify-center gap-2">
                                        <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </span>
                                </span>
                                <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                            </button>
                        </form>

                        <!-- Divider -->
                        <div class="my-8 flex items-center gap-4">
                            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <span class="text-xs text-gray-500">OR</span>
                            <div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>

                        <!-- Contact Information -->
                        <div class="text-center">
                            <p class="mb-4 text-sm text-gray-400">
                                Don't have an account?
                            </p>
                            <div class="space-y-2 text-sm text-gray-400">
                                <p>Contact us to create an account:</p>
                                <p>
                                    <a href="tel:+12125550123" class="text-cyan-400 transition-colors hover:text-cyan-300">
                                        +1 (212) 555-0123
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:concierge@gems.com" class="text-purple-400 transition-colors hover:text-purple-300">
                                        concierge@gems.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <!-- Back to Home -->
                        <div class="mt-8 text-center">
                            <button
                                @click="router.push('/')"
                                class="text-sm text-gray-500 transition-colors hover:text-white"
                            >
                                ← Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DiamondLayout>
</template>

