// src/i18n.js
import { createI18n } from 'vue-i18n';

// Define messages for each locale
const messages = {
  en: {
    home: 'HOME',
    about: 'ABOUT SOTHEA',
    experience: 'Experience',
    blog: 'BLOG',
    contact: 'CONTACT',
    thynasotheasothea: 'THYNASOTHEA'
    // course: 'COURSE',
    // repository: 'REPOSITORY',
    // register: 'REGISTER',
  },
  khm: {
    home: 'ទំព័រដើម',
    about: 'អំពីយើងសុធា',
    experience: 'បទពិសោធន៍',
    blog: 'ប្លុក',
    contact: 'ទំនាក់ទំនង',
    thynasothea: 'ធីណាសុធា',
    // course: 'វគ្គសិក្សា',
    // repository: 'កន្លែងផ្ទុក',
    // register: 'ចុះឈ្មោះ',
  },
};

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;