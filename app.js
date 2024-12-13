import { h } from 'snabbdom'; 
import { init } from 'snabbdom';
import { eventListenersModule } from 'snabbdom/./build/modules/eventlisteners.js';

const patch = init([eventListenersModule]);

let count = 0;
let vnode;

function render() {
  newVnode = h('div', {}, [
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
