import {
  _ as d,
  d as m,
  e as c,
  r as u,
  a2 as b,
  a5 as f,
  o as A,
  f as E,
  g as t,
  j as g,
  ad as v,
  t as O,
  k as w,
  F as n,
} from "./75bbe58a.js";
import { A as N } from "./index.js";
const S = m({
    name: "AppStoreMin",
    props: {
      appEdit: { type: Boolean, default: !1 },
      app: {
        type: Object,
        default: () => ({ icon: null, name: null, appName: null, url: null }),
      },
    },
    setup(e) {
      return {
        comObj: c({ comName: "", title: "", width: "", className: "" }),
        onOpen: () => {
          window.appStorage.emit(n.onOpen, {
            keyName: N.AppStore,
            data: e.app,
          });
        },
        onAppEdit: (a) => {
          window.appStorage.emit(n.onAppEdit, a);
        },
      };
    },
  }),
  k = { class: "etab-app-box_name" };
function y(e, p, s, i, a, _) {
  const r = u("EtabImg"),
    l = b("edit");
  return f(
    (A(),
    E(
      "div",
      {
        class: "etab-app-box",
        onOnAppEdit:
          p[0] || (p[0] = (...o) => e.onAppEdit && e.onAppEdit(...o)),
        onClick:
          p[1] || (p[1] = w((...o) => e.onOpen && e.onOpen(...o), ["stop"])),
      },
      [
        t(
          "div",
          {
            class: "etab-app-box_icon",
            style: v({ "background-color": e.app.bg }),
          },
          [
            g(r, { src: e.app.icon, class: "etab-app-box_img" }, null, 8, [
              "src",
            ]),
          ],
          4
        ),
        t("div", k, O(e.app.appName), 1),
      ],
      32
    )),
    [[l, e.appEdit]]
  );
}
var D = d(S, [["render", y]]);
export { D as default };
