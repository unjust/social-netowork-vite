// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { navigate } from './lib/router.js';

myFunction();

window.onload = () => navigate(`${window.location.pathname}`);
window.onhashchange = () => {
  const path = `/${window.location.hash.substring(1)}`;
  navigate(path);
  window.history.pushState({}, '', `${window.location.href}${path}`);
};
