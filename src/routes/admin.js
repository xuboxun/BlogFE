import Dashboard from '@/views/admin/dashboard';
import Write from '@/views/admin/write';
import BlogList from '@/views/admin/blog/list';
import TagList from '@/views/admin/tag/list';
import SerialList from '@/views/admin/serial/list';
import System from '@/views/admin/system';
import Subscribe from '@/views/admin/subscribe';

const adminRoutes = [
    {
        path: 'dashboard', name: 'admin/dashboard',
        meta: { title: '控制台' },
        component: Dashboard
    },
    {
        path: 'write', name: 'admin/write',
        meta: { title: '写博客' },
        component: Write
    },
    {
        path: 'blog', name: 'admin/blog',
        meta: { title: '博客管理' },
        component: BlogList
    },
    {
        path: 'tag', name: 'admin/tag',
        meta: { title: '标签管理' },
        component: TagList
    },
    {
        path: 'serial', name: 'admin/serial',
        meta: { title: '专栏管理' },
        component: SerialList
    },
    {
        path: 'subscribe', name: 'admin/subscribe',
        meta: { title: '订阅管理' },
        component: Subscribe
    },
    {
        path: 'system', name: 'admin/system',
        meta: { title: '系统管理' },
        component: System
    },
];

export default adminRoutes;