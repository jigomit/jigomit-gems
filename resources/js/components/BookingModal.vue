<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    close: [];
    submit: [data: BookingFormData];
}>();

interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
    message: string;
}

const formData = ref<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
});

const errors = ref<Partial<Record<keyof BookingFormData, string>>>({});
const isSubmitting = ref(false);
const isSubmitted = ref(false);

const validateForm = (): boolean => {
    errors.value = {};

    if (!formData.value.name.trim()) {
        errors.value.name = 'Name is required';
    }

    if (!formData.value.email.trim()) {
        errors.value.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address';
    }

    if (!formData.value.phone.trim()) {
        errors.value.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.value.phone)) {
        errors.value.phone = 'Please enter a valid phone number';
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
        emit('submit', { ...formData.value });
        isSubmitted.value = true;
        isSubmitting.value = false;

        // Reset form after 3 seconds
        setTimeout(() => {
            resetForm();
            emit('close');
        }, 3000);
    }, 1000);
};

const resetForm = () => {
    formData.value = {
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
    };
    errors.value = {};
    isSubmitted.value = false;
};

const handleClose = () => {
    if (!isSubmitting.value) {
        resetForm();
        emit('close');
    }
};

const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget && !isSubmitting.value) {
        handleClose();
    }
};

const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.isOpen && !isSubmitting.value) {
        handleClose();
    }
};

watch(() => props.isOpen, (isOpen) => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        // Focus first input when modal opens
        setTimeout(() => {
            const firstInput = document.querySelector<HTMLInputElement>('#booking-name');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    } else {
        document.body.style.overflow = '';
    }
});

onMounted(() => {
    window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
});
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition-opacity duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isOpen"
                class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                @click="handleBackdropClick"
            >
                <!-- Backdrop -->
                <div class="fixed inset-0 bg-black/80 backdrop-blur-sm"></div>

                <!-- Modal Content -->
                <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="opacity-0 scale-95 translate-y-4"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-95 translate-y-4"
                >
                    <div
                        v-if="isOpen"
                        class="relative z-10 w-full max-w-2xl my-auto max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/30 via-purple-950/30 to-pink-950/30 backdrop-blur-xl shadow-2xl"
                        @click.stop
                    >
                        <!-- Corner Decorations -->
                        <div class="sticky top-0 left-0 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-cyan-500/40 pointer-events-none"></div>
                        <div class="absolute bottom-0 right-0 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-pink-500/40 pointer-events-none"></div>

                        <!-- Background Pattern -->
                        <div class="absolute inset-0 opacity-5 pointer-events-none">
                            <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="modalPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <polygon points="10,0 20,10 10,20 0,10" fill="none" stroke="url(#modalGradient)" stroke-width="0.5" />
                                    </pattern>
                                    <linearGradient id="modalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#06b6d4" />
                                        <stop offset="50%" style="stop-color:#a855f7" />
                                        <stop offset="100%" style="stop-color:#ec4899" />
                                    </linearGradient>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#modalPattern)" />
                            </svg>
                        </div>

                        <div class="relative p-6 sm:p-8 md:p-10">
                            <!-- Header -->
                            <div class="mb-6 flex items-center justify-between sm:mb-8">
                                <div>
                                    <h2 class="font-serif text-2xl font-light text-white sm:text-3xl">
                                        Book Your
                                        <span class="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                            Consultation
                                        </span>
                                    </h2>
                                    <p class="mt-2 text-sm text-gray-400">
                                        Schedule a private consultation with our diamond experts
                                    </p>
                                </div>
                                <button
                                    @click="handleClose"
                                    :disabled="isSubmitting"
                                    class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all hover:border-purple-500/50 hover:text-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <!-- Success Message -->
                            <Transition
                                enter-active-class="transition-all duration-300 ease-out"
                                enter-from-class="opacity-0 scale-95"
                                enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition-all duration-300 ease-in"
                                leave-from-class="opacity-100 scale-100"
                                leave-to-class="opacity-0 scale-95"
                            >
                                <div
                                    v-if="isSubmitted"
                                    class="mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center backdrop-blur-sm"
                                >
                                    <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                                        <svg class="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 class="mb-2 text-lg font-semibold text-green-400">Request Submitted!</h3>
                                    <p class="text-sm text-gray-300">
                                        Our team will contact you shortly to confirm your consultation appointment.
                                    </p>
                                </div>
                            </Transition>

                            <!-- Form -->
                            <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-6">
                                <!-- Name -->
                                <div>
                                    <label for="booking-name" class="mb-2 block text-sm font-medium text-gray-300">
                                        Full Name <span class="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="booking-name"
                                        v-model="formData.name"
                                        type="text"
                                        required
                                        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                        placeholder="John Doe"
                                    />
                                    <p v-if="errors.name" class="mt-1 text-sm text-red-400">{{ errors.name }}</p>
                                </div>

                                <!-- Email -->
                                <div>
                                    <label for="booking-email" class="mb-2 block text-sm font-medium text-gray-300">
                                        Email Address <span class="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="booking-email"
                                        v-model="formData.email"
                                        type="email"
                                        required
                                        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                        placeholder="john@example.com"
                                    />
                                    <p v-if="errors.email" class="mt-1 text-sm text-red-400">{{ errors.email }}</p>
                                </div>

                                <!-- Phone -->
                                <div>
                                    <label for="booking-phone" class="mb-2 block text-sm font-medium text-gray-300">
                                        Phone Number <span class="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="booking-phone"
                                        v-model="formData.phone"
                                        type="tel"
                                        required
                                        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                        placeholder="+1 (212) 555-0123"
                                    />
                                    <p v-if="errors.phone" class="mt-1 text-sm text-red-400">{{ errors.phone }}</p>
                                </div>

                                <!-- Date and Time Row -->
                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <!-- Preferred Date -->
                                    <div>
                                        <label for="booking-date" class="mb-2 block text-sm font-medium text-gray-300">
                                            Preferred Date
                                        </label>
                                        <input
                                            id="booking-date"
                                            v-model="formData.preferredDate"
                                            type="date"
                                            :min="new Date().toISOString().split('T')[0]"
                                            class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                        />
                                    </div>

                                    <!-- Preferred Time -->
                                    <div>
                                        <label for="booking-time" class="mb-2 block text-sm font-medium text-gray-300">
                                            Preferred Time
                                        </label>
                                        <input
                                            id="booking-time"
                                            v-model="formData.preferredTime"
                                            type="time"
                                            class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                        />
                                    </div>
                                </div>

                                <!-- Message -->
                                <div>
                                    <label for="booking-message" class="mb-2 block text-sm font-medium text-gray-300">
                                        Additional Message
                                    </label>
                                    <textarea
                                        id="booking-message"
                                        v-model="formData.message"
                                        rows="4"
                                        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
                                        placeholder="Tell us about your preferences, budget, or any special requests..."
                                    ></textarea>
                                </div>

                                <!-- Submit Button -->
                                <div class="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-end">
                                    <button
                                        type="button"
                                        @click="handleClose"
                                        :disabled="isSubmitting"
                                        class="w-full rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-medium tracking-[0.15em] text-white transition-all hover:border-purple-500/50 hover:text-purple-300 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        :disabled="isSubmitting"
                                        class="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-8 py-3 text-sm font-medium tracking-[0.15em] text-white transition-all hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                                    >
                                        <span class="relative z-10">
                                            <span v-if="!isSubmitting">Submit Request</span>
                                            <span v-else class="flex items-center gap-2">
                                                <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        </span>
                                        <div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

