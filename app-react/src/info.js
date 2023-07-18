import { Link } from '../annexes/router.js';

const info = {
  tag: 'main',
  props: {
    className: 'info',
  },
  children: [
    {
      tag: 'h1',
      children: ['Informations personnelles'],
    },
    { tag: 'h2', children: ['Voir les autres pages:'] },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [Link('accueil', '/accueil')],
        },
        {
          tag: 'li',
          children: [Link('Profil', '/profil')],
        },
      ],
    },
  ],
};

export default info;
