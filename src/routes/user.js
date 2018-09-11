
import Home from '@/views/user/home';

import TechList from '@/views/user/tech/techList';
import TecBlog from '@/views/user/tech/techBlog';

import CultureList from '@/views/user/culture/cultureList';
import CultureBlog from '@/views/user/culture/cultureBlog';

import TagList from '@/views/user/tag/tagList';
import TagDetail from '@/views/user/tag/tagDetail';

import Archives from '@/views/user/archives';

import About from '@/views/user/about';


const userRoutes = [
    {
        path: '/home', name: 'home',
        meta: { title: '首页' },
        component: Home
    },
    {
        path: '/tech', name: 'techList',
        meta: { title: '技术博客' },
        component: TechList
    },
    {
        path: '/tech/:name', name: 'techBlog',
        meta: { title: '技术博客' },
        component: TecBlog
    },
    {
        path: '/culture', name: 'culture',
        meta: { title: '文艺青年' },
        component: CultureList
    },
    {
        path: '/culture/:name', name: 'cultureBlog',
        meta: { title: '文艺青年' },
        component: CultureBlog
    },
    {
        path: '/archives', name: 'archives',
        meta: { title: '归档' },
        component: Archives
    },
    {
        path: '/tag', name: 'tag',
        meta: { title: '标签' },
        component: TagList
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