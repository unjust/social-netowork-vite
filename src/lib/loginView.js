/* eslint-disable no-alert */
import { signIn } from './auth';

const template = `<div>
  <form id="loginForm">
    <input type="email" />
    <input type="password" />
    <button type="submit">Login</button>
  </form></div>`;

const addEvents = (rootEl) => {
  rootEl.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = rootEl.querySelector('input[type="email"]').value;
    const pass = rootEl.querySelector('input[type="password"]').value;
    signIn(email, pass).then((user) => {
      alert(`Welcome ${user.displayName}`);
      window.location.hash = '#home';
    }).catch(({ message }) => {
      alert(message);
    });
  });
};

export const render = (rootEl) => {
  rootEl.innerHTML = template;
  addEvents(rootEl);
  console.log(template, rootEl);
};
