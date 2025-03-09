// language-init.js
import { translations, languageFlags } from './language-config.js';
import { updateLanguage } from './language-utils.js';
import './language-events.js';

window.translations = translations;
window.languageFlags = languageFlags;