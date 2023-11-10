import {createRouter, createWebHistory} from "vue-router";
import HomePage from '../pages/HomePage.vue';
import LibraryPage from '../pages/LibraryPage.vue';

const router = createRouter({
 // aggiungi history
 history : createWebHistory(),
 // aggiungi routes
 routes:[
    {
        name : 'home',
        path: '/',
        component: HomePage
    }, 
    {
        name : 'library',
        path: '/library',
        component: LibraryPage
    }, 
 ],
});

export {router}