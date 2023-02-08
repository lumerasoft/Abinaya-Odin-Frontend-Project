import ListPosts from './components/ListPosts.vue'
import CreatePost from './components/CreatePost.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'ListPosts',
        component: ListPosts,
        path: '/'
    },   
    {
        name: 'CreatePost',
        component: CreatePost,
        path: '/create-post'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;