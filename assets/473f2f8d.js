import { A as n } from "./index.js";
import { u as o } from "./ef422e2a.js";
import {
  _ as r,
  d as v,
  a2 as c,
  a5 as m,
  o as _,
  f as l,
  g as b,
  t as k,
  k as f,
  F as t,
  ae as u,
} from "./75bbe58a.js";
const A = v({
    name: "TaskMin",
    ...o,
    setup(a) {
      return {
        onOpen: () => {
          window.appStorage.emit(t.onOpen, { keyName: n.Task, data: a.app });
        },
        onAppEdit: (d) => {
          window.appStorage.emit(t.onAppEdit, d);
        },
      };
    },
  }),
  E = u(
    '<div class="app-icon_warp bg-cover" data-v-0d1de38b><div class="body" data-v-0d1de38b><div class="item1" data-v-0d1de38b><span data-v-0d1de38b></span></div><div class="item2" data-v-0d1de38b><span data-v-0d1de38b></span></div><div class="item3" data-v-0d1de38b><span data-v-0d1de38b></span></div></div></div>',
    1
  ),
  g = { class: "etab-app-box_name" };
function w(a, e, p, d, O, y) {
  const i = c("edit");
  return m(
    (_(),
    l(
      "div",
      {
        class: "etab-app-box task-icon task-icon-min",
        onOnAppEdit:
          e[0] || (e[0] = (...s) => a.onAppEdit && a.onAppEdit(...s)),
        onClick:
          e[1] || (e[1] = f((...s) => a.onOpen && a.onOpen(...s), ["stop"])),
      },
      [E, b("div", g, k(a.app.appName), 1)],
      32
    )),
    [[i, a.appEdit]]
  );
}
var N = r(A, [
  ["render", w],
  ["__scopeId", "data-v-0d1de38b"],
]);
export { N as default };
