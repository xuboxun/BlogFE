import Dashboard from '@/views/admin/dashboard.vue';

const adminRoutes = [
    {
        path: 'dashboard', name: 'dashboard',
        meta: { title: 'admin首页' },
        component: Dashboard
    },
];

export default adminRoutes;