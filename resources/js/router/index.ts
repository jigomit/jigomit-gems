import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Welcome from '../pages/Welcome.vue';
import Blog from '../pages/Blog.vue';
import DiamondEducation from '../pages/DiamondEducation.vue';
import InsuranceAppraisals from '../pages/InsuranceAppraisals.vue';
import CleaningCare from '../pages/CleaningCare.vue';
import SignIn from '../pages/SignIn.vue';
import HowToChoosePerfectEngagementRingDiamond from '../pages/blog/HowToChoosePerfectEngagementRingDiamond.vue';
import BestDiamondCutEngagementRings2025 from '../pages/blog/BestDiamondCutEngagementRings2025.vue';
import RoundCutVsOvalCutDiamonds from '../pages/blog/RoundCutVsOvalCutDiamonds.vue';
import HowMuchSpendEngagementRingDiamond from '../pages/blog/HowMuchSpendEngagementRingDiamond.vue';
import GIACertifiedDiamondsVsNonCertified from '../pages/blog/GIACertifiedDiamondsVsNonCertified.vue';
import MasterCraftsmanship from '../pages/MasterCraftsmanship.vue';
import LifetimeGuarantee from '../pages/LifetimeGuarantee.vue';
import SecureDelivery from '../pages/SecureDelivery.vue';
import Concierge from '../pages/Concierge.vue';
import ConflictFree from '../pages/ConflictFree.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'GEMS' },
    },
    {
        path: '/collection',
        name: 'Collection',
        component: Home,
        meta: { title: 'GEMS - COLLECTION' },
    },
    {
        path: '/craftsmanship',
        name: 'Craftsmanship',
        component: Home,
        meta: { title: 'GEMS - CRAFTSMANSHIP' },
    },
    {
        path: '/testimonials',
        name: 'Testimonials',
        component: Home,
        meta: { title: 'GEMS - TESTIMONIALS' },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Home,
        meta: { title: 'GEMS - CONTACT' },
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
        meta: { title: 'GEMS - Welcome' },
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
        meta: { title: 'GEMS - SIGN IN' },
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        meta: { title: 'GEMS - Blog' },
    },
    {
        path: '/diamond-education',
        name: 'DiamondEducation',
        component: DiamondEducation,
        meta: { title: 'GEMS - Diamond Education' },
    },
    {
        path: '/insurance-appraisals',
        name: 'InsuranceAppraisals',
        component: InsuranceAppraisals,
        meta: { title: 'GEMS - Insurance & Appraisals' },
    },
    {
        path: '/cleaning-care',
        name: 'CleaningCare',
        component: CleaningCare,
        meta: { title: 'GEMS - Cleaning & Care' },
    },
    {
        path: '/blog/how-to-choose-perfect-engagement-ring-diamond',
        name: 'HowToChoosePerfectEngagementRingDiamond',
        component: HowToChoosePerfectEngagementRingDiamond,
        meta: { title: 'GEMS - How to Choose Perfect Engagement Ring Diamond' },
    },
    {
        path: '/blog/best-diamond-cut-engagement-rings-2025',
        name: 'BestDiamondCutEngagementRings2025',
        component: BestDiamondCutEngagementRings2025,
        meta: { title: 'GEMS - Best Diamond Cut Engagement Rings 2025' },
    },
    {
        path: '/blog/difference-between-round-cut-oval-cut-diamonds',
        name: 'RoundCutVsOvalCutDiamonds',
        component: RoundCutVsOvalCutDiamonds,
        meta: { title: 'GEMS - Round Cut vs Oval Cut Diamonds' },
    },
    {
        path: '/blog/how-much-spend-engagement-ring-diamond',
        name: 'HowMuchSpendEngagementRingDiamond',
        component: HowMuchSpendEngagementRingDiamond,
        meta: { title: 'GEMS - How Much to Spend on Engagement Ring Diamond' },
    },
    {
        path: '/blog/gia-certified-diamonds-vs-non-certified',
        name: 'GIACertifiedDiamondsVsNonCertified',
        component: GIACertifiedDiamondsVsNonCertified,
        meta: { title: 'GEMS - GIA Certified Diamonds vs Non-Certified' },
    },
    {
        path: '/master-craftsmanship',
        name: 'MasterCraftsmanship',
        component: MasterCraftsmanship,
        meta: { title: 'GEMS - Master Craftsmanship' },
    },
    {
        path: '/lifetime-guarantee',
        name: 'LifetimeGuarantee',
        component: LifetimeGuarantee,
        meta: { title: 'GEMS - Lifetime Guarantee' },
    },
    {
        path: '/secure-delivery',
        name: 'SecureDelivery',
        component: SecureDelivery,
        meta: { title: 'GEMS - Secure Delivery' },
    },
    {
        path: '/concierge',
        name: 'Concierge',
        component: Concierge,
        meta: { title: 'GEMS - 24/7 Concierge' },
    },
    {
        path: '/conflict-free',
        name: 'ConflictFree',
        component: ConflictFree,
        meta: { title: 'GEMS - Conflict-Free Diamonds' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return { top: 0 };
        }
    },
});

export default router;

