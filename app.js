import { h } from 'snabbdom'; 
import { init } from 'snabbdom';
import { eventListenersModule } from 'snabbdom/./build/modules/eventlisteners.js';
import { header } from './components/Header.js';

const patch = init([eventListenersModule]);

let count = 0;
let vnode;

function render() {
  newVnode = h('div', {}, [
    header(),
    h('p', {}, `Count: ${count}`),
    h('button', { on: { click: inc } }, "Click me")
  ]);

  vnode = patch(vnode, newVnode);
}

function inc() {
  count++;
  render();
}

const app = document.getElementById('app');
vnode = patch(app, h('div', {}));
render();
