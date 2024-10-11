import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n';

import Home from '@/pages/home.vue'
import Aboutus from '@/pages/aboutus.vue';
import Education from '@/components/education.vue';
import Skills from '@/components/skills.vue';
import Experience from '@/components/experience.vue';
import Profiles from '@/components/profiles.vue';
import Clients from '@/components/clients.vue';
import Contacts from '@/components/contacts.vue';
import Blogapi from './components/blogapi.vue';

// Define routes for each component
const routes = [
  { path: '/', component: Home },  
  { path: '/aboutus', component: Aboutus },
  { path: '/education', component: Education },
  { path: '/skills', component: Skills },
  { path: '/experience', component: Experience },
  { path: '/profiles',  component: Profiles },
  { path: '/clients', component: Clients },
  { path: '/contacts', component: Contacts },
  { path: '/blog', component: Blogapi},

];

// Create the router instance and pass the routes
const router = createRouter({
  history: createWebHistory(),
  routes
});



const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");

