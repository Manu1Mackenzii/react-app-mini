import accueil from './src/accueil.js';
import info from './src/info.js';
import profil from './src/profil.js';
import page404 from './src/page404.js';

export default {
  '/accueil': accueil,
  '/info': info,
  '/profil': profil,
  '*': page404,
};
