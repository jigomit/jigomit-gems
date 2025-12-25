import '../css/app.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Global title handler - updates document.title on route change
// Handles hash fragments for section navigation on home page
const sectionNames: Record<string, string> = {
    collection: 'COLLECTION',
    features: 'CRAFTSMANSHIP',
    testimonials: 'TESTIMONIALS',
    contact: 'CONTACT',
};

const updateTitle = (to: any) => {
    // Check if route has hash fragment (section navigation)
    if (to.hash) {
        const sectionId = to.hash.replace('#', '');
        const sectionName = sectionNames[sectionId];
        if (sectionName) {
            document.title = `GEMS - ${sectionName}`;
            return;
        }
    }
    
    // Use meta title from route, fallback to route name
    const title = to.meta.title as string || `GEMS - ${to.name as string}`;
    document.title = title;
};

// Update title on every navigation (including initial load, refresh, back/forward)
router.afterEach((to) => {
    updateTitle(to);
});

// Handle initial page load with hash
router.isReady().then(() => {
    updateTitle(router.currentRoute.value);
});

const app = createApp(App);

app.use(router);

// Mount immediately without waiting for router to be ready
// The initial HTML in index.html ensures LCP element is visible before Vue mounts
app.mount('#app');

// Mark body as loaded to prevent FOUC
document.body.classList.add('loaded');

