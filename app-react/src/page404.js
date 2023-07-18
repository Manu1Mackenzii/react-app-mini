import { Link } from '../annexes/router.js';

const page404 = {
  tag: 'main',
  props: {
    className: 'page404',
  },
  children: [
    {
      tag: 'h1',
      children: ['404'],
    },
    {
      tag: 'p',
      children: ['Page not found'],
    },
    Link("Aller à l'accueil " , '/accueil'),
  ],
};

export default page404;
