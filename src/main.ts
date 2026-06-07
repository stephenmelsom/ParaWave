import { mount } from 'svelte';

import './app.css';
import App from './ui/App.svelte';

const target = document.getElementById('app');

if (!target) {
  throw new Error('ParaWave mount target not found.');
}

mount(App, { target });
