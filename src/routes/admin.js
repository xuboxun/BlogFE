import Dashboard from '@/views/admin/dashboard';
import Write from '@/views/admin/write';
import Blog from '@/views/admin/blog';
import Tag from '@/views/admin/tag';
import System from '@/views/admin/system';
import Subscribe from '@/views/admin/subscribe';

const adminRoutes = [
    {
        path: 'dashboard', name: 'admin/dashboard',
        meta: { title: 'admin首页' },
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
        component: Blog
    },
    {
        path: 'tag', name: 'admin/tag',
        meta: { title: '标签管理' },
        component: Tag
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