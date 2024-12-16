import { h } from 'snabbdom'; 
import { init } from 'snabbdom';
import { eventListenersModule } from 'snabbdom/./build/modules/eventlisteners.js';

const patch = init([eventListenersModule]);

let vnode;

function header() {
  return ( h('div', {}, [
    h('h1', {}, "Home"),
    h('h1', {}, "About"),
    h('h1', {}, "Contact")
  ]));
}

export { header };
