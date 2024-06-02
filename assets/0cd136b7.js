import {
  _ as l,
  d as m,
  r as u,
  a2 as c,
  a5 as f,
  o as E,
  f as b,
  g as t,
  j as v,
  k as a,
  t as A,
  F as s,
} from "./75bbe58a.js";
import { A as O } from "./index.js";
const g = m({
    name: "HistorysMin",
    props: {
      appEdit: { type: Boolean, default: !1 },
      app: {
        type: Object,
        default: () => ({ icon: null, name: null, appName: null, url: null }),
      },
    },
    emits: ["onAppEdit", "onOpen"],
    setup(p) {
      return {
        onOpen: () => {
          window.appStorage.emit(s.onOpen, {
            keyName: O.Historys,
            data: p.app,
          });
        },
        onAppEdit: (n) => {
          window.appStorage.emit(s.onAppEdit, n);
        },
      };
    },
  }),
  w = { class: "etab-app-box_name" };
function y(p, e, i, n, k, N) {
  const r = u("EtabImg"),
    d = c("edit");
  return f(
    (E(),
    b(
      "div",
      {
        class: "etab-app-box bg-white",
        onOnAppEdit:
          e[1] || (e[1] = (...o) => p.onAppEdit && p.onAppEdit(...o)),
        onClick:
          e[2] || (e[2] = a((...o) => p.onOpen && p.onOpen(...o), ["stop"])),
      },
      [
        t(
          "div",
          {
            class: "etab-app-box_icon",
            onClick:
              e[0] ||
              (e[0] = a((...o) => p.onOpen && p.onOpen(...o), ["stop"])),
          },
          [
            v(r, { src: p.app.icon, class: "etab-app-box_img" }, null, 8, [
              "src",
            ]),
          ]
        ),
        t("div", w, A(p.app.appName), 1),
      ],
      32
    )),
    [[d, p.appEdit]]
  );
}
var D = l(g, [["render", y]]);
export { D as default };
