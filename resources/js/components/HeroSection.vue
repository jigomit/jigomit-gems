<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 100);
});
</script>

<template>
    <section class="relative min-h-screen overflow-hidden pt-20">
        <!-- Animated Background -->
        <div class="absolute inset-0">
            <!-- Gradient Orbs -->
            <div class="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-indigo-600/20 blur-3xl"></div>
            <div class="absolute -right-40 top-40 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-3xl" style="animation-delay: 1s"></div>
            <div class="absolute -bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-blue-600/10 blur-3xl" style="animation-delay: 2s"></div>

            <!-- Grid Pattern -->
            <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div class="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center lg:py-40">
            <!-- Badge -->
            <div
                :class="[
                    'mb-8 transform transition-all duration-700',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-sm">
                    <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    Now in Public Beta
                </span>
            </div>

            <!-- Main Heading -->
            <h1
                :class="[
                    'mb-6 max-w-4xl text-5xl font-bold tracking-tight transition-all duration-700 delay-100 md:text-6xl lg:text-7xl',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                Build <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Powerful</span>
                Software Faster
            </h1>

            <!-- Subtitle -->
            <p
                :class="[
                    'mb-10 max-w-2xl text-lg text-gray-400 transition-all duration-700 delay-200 md:text-xl',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                GEMS is the all-in-one platform that helps teams ship better products.
                Streamline your workflow, collaborate seamlessly, and deploy with confidence.
            </p>

            <!-- CTA Buttons -->
            <div
                :class="[
                    'flex flex-col gap-4 transition-all duration-700 delay-300 sm:flex-row',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                <button class="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 font-medium text-black transition-all hover:shadow-2xl hover:shadow-white/20">
                    <span class="relative z-10">Start Free Trial</span>
                    <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 group-hover:translate-x-0"></div>
                    <span class="absolute inset-0 z-10 flex items-center justify-center font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Start Free Trial
                    </span>
                </button>
                <button class="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-medium backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    Watch Demo
                </button>
            </div>

            <!-- Stats -->
            <div
                :class="[
                    'mt-20 grid grid-cols-2 gap-8 transition-all duration-700 delay-500 md:grid-cols-4 md:gap-16',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                ]"
            >
                <div class="text-center">
                    <div class="text-3xl font-bold md:text-4xl">10K+</div>
                    <div class="mt-1 text-sm text-gray-500">Active Users</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold md:text-4xl">99.9%</div>
                    <div class="mt-1 text-sm text-gray-500">Uptime</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold md:text-4xl">50+</div>
                    <div class="mt-1 text-sm text-gray-500">Integrations</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold md:text-4xl">24/7</div>
                    <div class="mt-1 text-sm text-gray-500">Support</div>
                </div>
            </div>

            <!-- Product Preview -->
            <div
                :class="[
                    'relative mt-20 w-full max-w-5xl transition-all duration-1000 delay-700',
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                ]"
            >
                <div class="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
                <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111118] shadow-2xl">
                    <!-- Browser Chrome -->
                    <div class="flex items-center gap-2 border-b border-white/5 bg-[#0d0d12] px-4 py-3">
                        <div class="flex gap-1.5">
                            <div class="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
                            <div class="h-3 w-3 rounded-full bg-[#febc2e]"></div>
                            <div class="h-3 w-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <div class="ml-4 flex-1">
                            <div class="mx-auto max-w-md rounded-md bg-white/5 px-4 py-1.5 text-center text-xs text-gray-500">
                                app.gems.io/dashboard
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard Content -->
                    <div class="aspect-video bg-gradient-to-br from-[#111118] to-[#0d0d12] p-8">
                        <div class="grid h-full grid-cols-12 gap-4">
                            <!-- Sidebar -->
                            <div class="col-span-2 rounded-lg bg-white/5 p-4">
                                <div class="mb-4 h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                                <div class="space-y-2">
                                    <div class="h-2 w-full rounded bg-white/20"></div>
                                    <div class="h-2 w-3/4 rounded bg-white/10"></div>
                                    <div class="h-2 w-3/4 rounded bg-white/10"></div>
                                    <div class="h-2 w-3/4 rounded bg-white/10"></div>
                                </div>
                            </div>

                            <!-- Main Content -->
                            <div class="col-span-10 space-y-4">
                                <!-- Header -->
                                <div class="flex items-center justify-between">
                                    <div class="h-3 w-32 rounded bg-white/20"></div>
                                    <div class="flex gap-2">
                                        <div class="h-8 w-20 rounded-lg bg-white/10"></div>
                                        <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                                    </div>
                                </div>

                                <!-- Cards -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="rounded-xl bg-white/5 p-4">
                                        <div class="mb-2 h-2 w-16 rounded bg-white/20"></div>
                                        <div class="text-2xl font-bold text-white">$24,500</div>
                                        <div class="mt-2 h-16 rounded bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                                    </div>
                                    <div class="rounded-xl bg-white/5 p-4">
                                        <div class="mb-2 h-2 w-16 rounded bg-white/20"></div>
                                        <div class="text-2xl font-bold text-white">1,234</div>
                                        <div class="mt-2 h-16 rounded bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                                    </div>
                                    <div class="rounded-xl bg-white/5 p-4">
                                        <div class="mb-2 h-2 w-16 rounded bg-white/20"></div>
                                        <div class="text-2xl font-bold text-white">98.5%</div>
                                        <div class="mt-2 h-16 rounded bg-gradient-to-t from-green-500/20 to-transparent"></div>
                                    </div>
                                </div>

                                <!-- Chart Area -->
                                <div class="flex-1 rounded-xl bg-white/5 p-4">
                                    <div class="mb-4 flex items-center justify-between">
                                        <div class="h-2 w-24 rounded bg-white/20"></div>
                                        <div class="flex gap-2">
                                            <div class="h-6 w-16 rounded bg-white/10"></div>
                                            <div class="h-6 w-16 rounded bg-white/10"></div>
                                        </div>
                                    </div>
                                    <div class="flex h-32 items-end justify-between gap-2">
                                        <div class="w-full rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/10" style="height: 60%"></div>
                                        <div class="w-full rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/10" style="height: 80%"></div>
                                        <div class="w-full rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/10" style="height: 45%"></div>
                                        <div class="w-full rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/10" style="height: 90%"></div>
                                        <div class="w-full rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/10" style="height: 70%"></div>
                                        <div class="w-full rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-500/10" style="height: 55%"></div>
                                        <div class="w-full rounded-t bg-gradient-to-t from-purple-500/40 to-purple-500/10" style="height: 100%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
