<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';

defineProps<{
    title?: string;
}>();

onMounted(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);
    
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = '';
    document.head.appendChild(link2);
    
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(stylesheet);
});
</script>

<template>

    <div class="min-h-screen bg-[#0a0a0f] text-white antialiased">
        <!-- Navigation -->
        <nav class="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <RouterLink to="/" class="flex items-center gap-2">
                    <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                        <span class="text-lg font-bold">J</span>
                    </div>
                    <span class="text-xl font-semibold tracking-tight">GEMS</span>
                </RouterLink>

                <div class="hidden items-center gap-8 md:flex">
                    <a href="#features" class="text-sm text-gray-400 transition-colors hover:text-white">Features</a>
                    <a href="#about" class="text-sm text-gray-400 transition-colors hover:text-white">About</a>
                    <a href="#pricing" class="text-sm text-gray-400 transition-colors hover:text-white">Pricing</a>
                </div>

                <div class="flex items-center gap-4">
                    <button class="text-sm text-gray-400 transition-colors hover:text-white">Sign In</button>
                    <button class="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:bg-gray-200 hover:shadow-lg hover:shadow-white/10">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="border-t border-white/5 bg-[#0a0a0f]">
            <div class="mx-auto max-w-7xl px-6 py-12">
                <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div class="flex items-center gap-2">
                        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                            <span class="text-sm font-bold">J</span>
                        </div>
                        <span class="font-semibold">GEMS</span>
                    </div>

                    <div class="flex gap-6 text-sm text-gray-500">
                        <a href="#" class="transition-colors hover:text-white">Privacy</a>
                        <a href="#" class="transition-colors hover:text-white">Terms</a>
                        <a href="#" class="transition-colors hover:text-white">Contact</a>
                    </div>

                    <p class="text-sm text-gray-500">&copy; 2025 GEMS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>
