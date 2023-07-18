import { Link } from '../annexes/router.js';
import { Link } from './accueil.css ' ;

const accueil = {
  tag: 'main',
  props: {
    className: 'accueil',
  },
  children: [
    {
      tag: 'h1',
      children: ['accueil'],
      props: {
        style: 'color: purple;'
      }
    },
    {
      tag: 'p',
      children: ["Vous êtes sur la page d'accueil" ],
    },
    { tag: 'h2', children: ['Voir les autres pages'] },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [Link('Info', '/info')],
        },
        {
          tag: 'li',
          children: [Link('Profil', '/profil')],
        },
      ],
    },
  ],
};

export default accueil;
