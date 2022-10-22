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
