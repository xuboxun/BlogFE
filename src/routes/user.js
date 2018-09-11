
import Home from '@/views/user/home';

import TechList from '@/views/user/tech/techList';
import TecBlog from '@/views/user/tech/techBlog';

import CultureList from '@/views/user/culture/cultureList';
import CultureBlog from '@/views/user/culture/cultureBlog';

import SerialList from '@/views/user/serial/serialList';
import SerialDetail from '@/views/user/serial/serialDetail';
import SerialBlog from '@/views/user/serial/serialBlog';

import TagList from '@/views/user/tag/tagList';
import TagDetail from '@/views/user/tag/tagDetail';

import Archives from '@/views/user/archives';

import About from '@/views/user/about';

import Content from '@/components/Content';


const userRoutes = [
    {
        path: '/home', name: 'home',
        meta: { title: '首页' },
        component: Home
    },
    {
        path: '/tech', name: 'tech',
        component: Content,
        redirect: '/tech/list',
        children: [
            {
                path: 'list', name: 'techList',
                meta: { title: '技术博客' },
                component: TechList,
            },
            {
                path: 'blog/:name', name: 'techBlog',
                meta: { title: '技术博客' },
                component: TecBlog
            },
        ]
    },
    {
        path: '/culture', name: 'culture',
        component: Content,
        redirect: '/culture/list',
        children: [
            {
                path: 'list', name: 'cultureList',
                meta: { title: '文艺青年' },
                component: CultureList,
            },
            {
                path: 'blog/:name', name: 'cultureBlog',
                meta: { title: '文艺青年' },
                component: CultureBlog
            },
        ]
    },
    {
        path: '/serial', name: 'serial',
        component: Content,
        redirect: '/serial/list',
        children: [
            {
                path: 'list', name: 'serialList',
                meta: { title: '专栏列表' },
                component: SerialList,
            },
            {
                path: 'detail/:name', name: 'serialDetail',
                meta: { title: '专栏详情' },
                component: SerialDetail
            },
            {
                path: 'blog/:name', name: 'serialBlog',
                meta: { title: '专栏博客' },
                component: SerialBlog
            },
        ]
    },
    {
        path: '/tag', name: 'tag',
        component: Content,
        redirect: '/tag/list',
        children: [
            {
                path: 'list', name: 'tagList',
                meta: { title: '标签' },
                component: TagList,
            },
            {
                path: 'detail/:name', name: 'tagDetail',
                meta: { title: '标签详情' },
                component: TagDetail
            },
        ]
    },
    {
        path: '/archives', name: 'archives',
        meta: { title: '归档' },
        component: Archives
    },
    {
        path: '/about', name: 'about',
        meta: { title: '关于我' },
        component: About
    }
];

export default userRoutes;