
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/user/home');

const TechList = () => import(/* webpackChunkName: "Tech" */ '@/views/user/tech/techList');
const TecBlog = () => import(/* webpackChunkName: "Tech" */ '@/views/user/tech/techBlog');

const CultureList = () => import(/* webpackChunkName: "Culture" */ '@/views/user/culture/cultureList');
const CultureBlog = () => import(/* webpackChunkName: "Culture" */ '@/views/user/culture/cultureBlog');

const SerialList = () => import(/* webpackChunkName: "Serial" */ '@/views/user/serial/serialList');
const SerialDetail = () => import(/* webpackChunkName: "Serial" */ '@/views/user/serial/serialDetail');
const SerialBlog = () => import(/* webpackChunkName: "Serial" */ '@/views/user/serial/serialBlog');

const TagList = () => import(/* webpackChunkName: "Tag" */ '@/views/user/tag/tagList');
const TagDetail = () => import(/* webpackChunkName: "Tag" */ '@/views/user/tag/tagDetail');

const Archives = () => import(/* webpackChunkName: "Archives" */ '@/views/user/archives');

const About = () => import(/* webpackChunkName: "About" */ '@/views/user/about');

const Search = () => import(/* webpackChunkName: "Search" */ '@/views/user/search');

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
        path: '/search', name: 'search',
        meta: { title: '搜索' },
        component: Search
    },
    {
        path: '/about', name: 'about',
        meta: { title: '关于我' },
        component: About
    }
];

export default userRoutes;