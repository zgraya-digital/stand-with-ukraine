import widget from './widget.html'
import './scss/style.scss';

const content = {
  en: {
    title: 'STAND WITH UKRAINE',
    text: 'Ukraine is fighting for its freedom and independence right now. Only by united efforts can we stop the aggressor. To give your support to Ukraine, <a href="https://standforukraine.com/" target="_blank" rel="noopener">visit this page</a>.'
  },
  ru: {
    title: 'Поддержи Украину',
    text: 'Украина сейчас борется за свою свободу и независимость. Только совместными усилиями мы сможем остановить агрессора. Чтобы поддержать Украину, <a href="https://standforukraine.com/" target="_blank" rel="noopener">посети эту страницу</a>.'
  },
  ua: {
    title: 'Підтримуй Україну',
    text: 'Україна зараз бореться за свою свободу та незалежність.Тільки спільними зусиллями ми зможемо зупинити агресора.Щоб підтримати Україну, <a href="https://standforukraine.com/" target="_blank" rel="noopener">перейди на цю сторінку</a>.'
  },
}

/**
 * Get a template from a string
 * https://stackoverflow.com/a/41015840
 * @param  {String} str    The string to interpolate
 * @param  {Object} params The parameters
 * @return {String}        The interpolated string
 */
function interpolate(str, params) {
  let names = Object.keys(params);
  let vals = Object.values(params);
  return new Function(...names, `return \`${str}\`;`)(...vals);
}

function standWithUkraine(lang = 'en', theme = 'zg-dark') {
  const html = interpolate(widget, { title: content[lang].title, text: content[lang].text, theme : theme });
  document.body.insertAdjacentHTML('beforeend', html);
}

function app(window) {
  console.log('JS-Widget starting');

  // all methods that were called till now and stored in queue
  // needs to be called now 
  let globalObject = window[window['Zgraya-Ukraine']];
  let queue = globalObject.q;
  if (queue) {    
    standWithUkraine(queue[0][0], queue[0][1]);
  }
}

app(window);