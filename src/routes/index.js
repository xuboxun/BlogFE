import userRoutes from './user';
import adminRoutes from './admin';

import UserWrapper from '@/components/UserWrapper';
import AdminWrapper from '@/components/AdminWrapper';

import Login from '@/views/admin/login';

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
        component: AdminWrapper,
        redirect: '/admin/dashboard',
        children: [
            ...adminRoutes
        ]
    },
    {
        path: '/admin/login', name: 'admin/login',
        meta: { title: '登录' },
        component: Login
    },
    {
        path: '*',
        component: Error404
    }
];
