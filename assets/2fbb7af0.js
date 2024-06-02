import {
  _ as l,
  d as m,
  r as u,
  a2 as c,
  a5 as f,
  o as b,
  f as E,
  g as a,
  j as v,
  k as t,
  t as g,
  F as s,
} from "./75bbe58a.js";
import { A as k } from "./index.js";
const A = m({
    name: "BooksMin",
    props: {
      appEdit: { type: Boolean, default: !1 },
      app: {
        type: Object,
        default: () => ({ icon: null, name: null, appName: null, url: null }),
      },
    },
    setup(o) {
      return {
        onOpen: () => {
          window.appStorage.emit(s.onOpen, { keyName: k.Books, data: o.app });
        },
        onAppEdit: (n) => {
          window.appStorage.emit(s.onAppEdit, n);
        },
      };
    },
  }),
  O = { class: "etab-app-box_name" };
function w(o, p, i, n, B, N) {
  const r = u("EtabImg"),
    d = c("edit");
  return f(
    (b(),
    E(
      "div",
      {
        class: "etab-app-box bg-white",
        onOnAppEdit:
          p[1] || (p[1] = (...e) => o.onAppEdit && o.onAppEdit(...e)),
        onClick:
          p[2] || (p[2] = t((...e) => o.onOpen && o.onOpen(...e), ["stop"])),
      },
      [
        a(
          "div",
          {
            class: "etab-app-box_icon",
            onClick:
              p[0] ||
              (p[0] = t((...e) => o.onOpen && o.onOpen(...e), ["stop"])),
          },
          [
            v(r, { src: o.app.icon, class: "etab-app-box_img" }, null, 8, [
              "src",
            ]),
          ]
        ),
        a("div", O, g(o.app.appName), 1),
      ],
      32
    )),
    [[d, o.appEdit]]
  );
}
var D = l(A, [["render", w]]);
export { D as default };
