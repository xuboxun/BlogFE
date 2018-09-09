
import Home from '@/views/user/home';
import Tech from '@/views/user/tech';
import Culture from '@/views/user/culture';
import Blog from '@/views/user/blog';
import Tag from '@/views/user/tag';
import TagDetail from '@/views/user/tagDetail';
import Archives from '@/views/user/archives';
import About from '@/views/user/about';


const userRoutes = [
    {
        path: '/home', name: 'home',
        meta: { title: '首页' },
        component: Home
    },
    {
        path: '/tech', name: 'tech',
        meta: { title: '技术博客' },
        component: Tech
    },
    {
        path: '/culture', name: 'culture',
        meta: { title: '文艺青年' },
        component: Culture
    },
    {
        path: '/blog', name: 'blog',
        meta: { title: '博客' },
        component: Blog
    },
    {
        path: '/archives', name: 'archives',
        meta: { title: '归档' },
        component: Archives
    },
    {
        path: '/tag', name: 'tag',
        meta: { title: '标签' },
        component: Tag
    },
    {
        path: '/tag/:name', name: 'tagDetail',
        meta: { title: '标签详情' },
        component: TagDetail
    },
    {
        path: '/about', name: 'about',
        meta: { title: '关于我' },
        component: About
    }
];

export default userRoutes;