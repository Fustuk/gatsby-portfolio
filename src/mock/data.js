import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA

export const heroData = {
  title: '',
  name: 'Kaloyan Botev',
  subtitle: 'Junior React Front-end Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I started digging into webdevelopment an year ago, and felt inlove with it right away.Since then i`ve came across alot of new and usefull tools to help me get my projects done.',
  paragraphTwo: 'I have no profesional experience but i would love to start asap.',
  paragraphThree: 'I hope you enjoy what you see and you can contact me for more info',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'stocks.jpeg',
    title: 'Stock Website Clone',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Fustuk/Stock-Website-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bitcoin.jpg',
    title: 'Crypto Live Price',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Fustuk/crypto', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather App',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Fustuk/weather-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movie.jpg',
    title: 'Movie Database',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Fustuk/api-testapp', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'webapp.png',
    title: 'Responsive Website',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/Fustuk/react-web-desing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
