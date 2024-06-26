import {
  _ as d,
  d as r,
  a2 as l,
  a5 as c,
  o as m,
  f as u,
  g as t,
  k as f,
  t as E,
  F as n,
} from "./75bbe58a.js";
import { A as v } from "./index.js";
const A = r({
    name: "EleCodeMed",
    props: {
      appEdit: { type: Boolean, default: !1 },
      app: {
        type: Object,
        default: () => ({ icon: null, name: null, appName: null, url: null }),
      },
    },
    setup(e) {
      return {
        onOpen: () => {
          window.appStorage.emit(n.onOpen, { keyName: v.EleCode, data: e.app });
        },
        onAppEdit: (a) => {
          window.appStorage.emit(n.onAppEdit, a);
        },
      };
    },
  }),
  _ = t(
    "img",
    { src: "https://bst.icons8.com/wp-content/uploads/2023/03/avatar.gif" },
    null,
    -1
  ),
  b = [_],
  g = { class: "etab-app-box_name" };
function w(e, p, s, a, O, k) {
  const i = l("edit");
  return c(
    (m(),
    u(
      "div",
      {
        class: "etab-app-box",
        onOnAppEdit:
          p[1] || (p[1] = (...o) => e.onAppEdit && e.onAppEdit(...o)),
      },
      [
        t(
          "div",
          {
            class: "etab-app-box_icon",
            onClick:
              p[0] ||
              (p[0] = f((...o) => e.onOpen && e.onOpen(...o), ["stop"])),
          },
          b
        ),
        t("div", g, E(e.app.appName), 1),
      ],
      32
    )),
    [[i, e.appEdit]]
  );
}
var B = d(A, [["render", w]]);
export { B as default };
