import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home';
import AdminPages from '../components/admin/AdminPages';
import ArticlesByCategory from '../components/article/ArticlesByCategory';
import ArticleById from '../components/article/ArticleById';

Vue.use(VueRouter)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'AdminPages',
        path: '/admin',
        component: AdminPages
    },
    {
        name: 'ArticlesByCategory',
        path: '/categories/:id/articles',
        component: ArticlesByCategory
    },
    {
        name: 'ArticlesById',
        path: '/articles/:id',
        component: ArticleById
    }
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});