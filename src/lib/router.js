import { render as renderLogin } from './loginView';
import { render as renderHome } from './homeView';

const routes = {
  '/': renderLogin,
  '/login': renderLogin,
  '/home': renderHome,
};

export const navigate = (route) => {
  routes[route](document.querySelector('main'));
};

export const getPath = (path) => {
  const publicUrlPath = /social-network-vite(.*)/;
  const match = (publicUrlPath).exec(path);
  // in preview mode, we are in prod build, but previewing locally so url is localhost
  return (import.meta.env.PROD && match && match.length === 2) ? match[1] : path;
}
