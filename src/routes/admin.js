import Admin from '@/views/admin/admin';

const adminRoutes = [
    {
        path: '/admin', name: 'admin',
        meta: { title: '后台' },
        component: Admin,
        children: [

        ]
    },
];

export default adminRoutes;