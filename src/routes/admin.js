import Dashboard from '@/views/admin/dashboard';
import Write from '@/views/admin/write';
import BlogList from '@/views/admin/blog/list';
import BlogDetail from '@/views/admin/blog/detail';
import TagList from '@/views/admin/tag/list';
import TagDetail from '@/views/admin/tag/detail';
import SerialList from '@/views/admin/serial/list';
import SerialDetail from '@/views/admin/serial/detail';
import System from '@/views/admin/system';
import Subscribe from '@/views/admin/subscribe';

import Content from '@/components/Content';

const adminRoutes = [
    {
        path: 'dashboard',
        name: 'admin/dashboard',
        meta: { title: '控制台' },
        component: Dashboard
    },
    {
        path: 'write',
        name: 'admin/write',
        meta: { title: '写博客' },
        component: Write
    },
    {
        path: 'blog',
        name: 'admin/blog',
        meta: { title: '博客管理' },
        component: Content,
        redirect: 'blog/list',
        children: [
            {
                path: 'list',
                name: 'admin/blog/list',
                meta: { title: '博客列表' },
                component: BlogList
            },
            {
                path: 'detail/:name',
                name: 'admin/blog/detail',
                meta: { title: '博客详情' },
                component: BlogDetail
            }
        ]
    },
    {
        path: 'tag',
        name: 'admin/tag',
        meta: { title: '标签管理' },
        component: Content,
        redirect: 'tag/list',
        children: [
            {
                path: 'list',
                name: 'admin/tag/list',
                meta: { title: '标签列表' },
                component: TagList
            },
            {
                path: 'detail/:name',
                name: 'admin/tag/detail',
                meta: { title: '标签详情' },
                component: TagDetail
            },
        ]
    },
    {
        path: 'serial',
        name: 'admin/serial',
        meta: { title: '专栏管理' },
        component: Content,
        redirect: 'serial/list',
        children: [
            {
                path: 'list',
                name: 'admin/serial/list',
                meta: { title: '专栏列表' },
                component: SerialList
            },
            {
                path: 'detail/:name',
                name: 'admin/serial/detail',
                meta: { title: '专栏详情' },
                component: SerialDetail
            },
        ]
    },
    {
        path: 'subscribe',
        name: 'admin/subscribe',
        meta: { title: '订阅管理' },
        component: Subscribe
    },
    {
        path: 'system',
        name: 'admin/system',
        meta: { title: '系统管理' },
        component: System
    },
];

export default adminRoutes;