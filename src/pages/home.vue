<template>
  <Slider></Slider>
  <Aboutus></Aboutus>
  <Education></Education>
  <Skills></Skills>
  <Experience></Experience>
  <Profiles></Profiles>
  <Clients></Clients>
  <Contacts></Contacts>
  </template>
  
  <script>
  import Aboutus from '@/components/aboutus.vue';
  import Clients from '@/components/clients.vue';
  import Contacts from '@/components/contacts.vue';
  import Education from '@/components/education.vue';
  import Experience from '@/components/experience.vue';
  import Profiles from '@/components/profiles.vue';
  import Skills from '@/components/skills.vue';
  import Slider from '@/components/slider.vue';
  
  export default {
    name: 'App',
    components: {
      Slider,
      Aboutus,
      Education,
      Skills,
      Experience,
      Profiles,
      Clients,
      Contacts,
    }
  }
  </script>