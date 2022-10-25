import { myFunction } from './lib/index.js';
import { navigate, getPath } from './lib/router.js';

myFunction();

window.onload = () => navigate(getPath(window.location.pathname));
window.onhashchange = () => {
  const path = `/${window.location.hash.substring(1)}`;
  navigate(path);
  window.history.replaceState({}, '', `${window.location.origin}${path}`);
};
window.onpopstate = () => console.log('pop state');
