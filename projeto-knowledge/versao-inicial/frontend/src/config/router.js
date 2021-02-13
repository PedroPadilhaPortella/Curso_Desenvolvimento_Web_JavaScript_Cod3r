import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home';
import AdminPages from '../components/admin/AdminPages';
import ArticlesByCategory from '../components/article/ArticlesByCategory';
import ArticleById from '../components/article/ArticleById';
import Auth from '../components/auth/Auth';
import NotFound from '../components/template/NotFound';

import { baseApiUrl, userKey } from '@/global';
import axios from 'axios';

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
        component: AdminPages,
        meta: { requiresAdmin: true }
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
    },
    {
        name: 'Auth',
        path: '/auth',
        component: Auth
    },
    {
        name: 'NotFound',
        path: '**',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// Validando se o usuário logado é admin ou não, para ver se ele pode acessar a area admin
router.beforeEach( async(to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        const admin = await axios.post(`${baseApiUrl}/validateAdmin`, user)

        user && admin.data ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router