import { Link } from '../annexes/router.js';
import { Link } from './profil.css ' ;


<main class="profil">
  <h1>Notre profil!</h1>
  <p>Vous êtes sur la page profil</p>
  <h3>Ouvrir:</h3>
  <ul>
    <li><a href="/accueil">accueil</a></li>
    <li><a href="/info">Informations personnelles</a></li>
  </ul>
</main>


const profil = {
  tag: 'main',
  props: {
    className: 'profil',
  },
  children: [
    {
      tag: 'h1',
      children: [' Votre profil'],
    },
    {
      tag: 'p',
      children: ['Vous êtes sur la page profil'],
    },
    { tag: 'h3', children: ['Cliquez pour ouvrir les pages:'] },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [Link('accueil', '/accueil')],
        },
        {
          tag: 'li',
          children: [Link('Info', '/info')],
        },
      ],
    },
  ],
};

export default profil;
