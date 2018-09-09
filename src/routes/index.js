import userRoutes from './user';
import adminRoutes from './admin';

import UserWrapper from '@/components/UserWrapper';
import Admin from '@/views/admin/admin';

import Index from '@/views/index';
import Error404 from '@/views/404';

export const routes = [
    {
        path: '/', name: 'index',
        meta: { title: '欢迎页' },
        component: Index
    },
    {
        path: '/', name: 'index',
        meta: { title: 'user' },
        component: UserWrapper,
        children: [
            ...userRoutes
        ]
    }, 
    {
        path: '/admin', name: 'admin',
        meta: { title: '后台' },
        component: Admin,
        children: [
            ...adminRoutes
        ]
    },
    {
        path: '*',
        component: Error404
    }
];
