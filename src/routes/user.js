import Index from '@/views/user/index';
import Home from '@/views/user/home';
import Blog from '@/views/user/blog';


export const userRoutes = [
    {
        path: '/', name: 'index',
        meta: { title: '欢迎页' },
        component: Index
    },
    {
        path: '/home', name: 'home',
        meta: { title: '首页' },
        component: Home
    },
    {
        path: '/blog', name: 'blog',
        meta: { title: '博客' },
        component: Blog
    }
];