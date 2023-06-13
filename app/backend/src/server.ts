import { App } from './app';
// inicio
const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);
