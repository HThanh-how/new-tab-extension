import { u as n } from "./0f2d0a42.js";
import {
  _ as p,
  d as r,
  r as d,
  a2 as c,
  a5 as _,
  o as m,
  f as l,
  g as a,
  j as g,
  t as v,
  k as f,
} from "./75bbe58a.js";
import "./c46363a2.js";
import "./index.js";
const u = r({ name: "MsgMin", ...n }),
  b = { class: "app-icon_warp msg-icon_warp msg-icon_warp" },
  M = { class: "etab-app-box_name" };
function E(e, s, w, y, k, $) {
  const t = d("EtabImg"),
    i = c("edit");
  return _(
    (m(),
    l(
      "div",
      {
        class: "etab-app-box msg-icon",
        onOnAppEdit:
          s[0] || (s[0] = (...o) => e.onAppEdit && e.onAppEdit(...o)),
        onClick:
          s[1] || (s[1] = f((...o) => e.onOpen && e.onOpen(...o), ["stop"])),
      },
      [
        a("div", b, [
          g(t, {
            class: "img",
            src: "https://files.codelife.cc/icons/yiyan.svg",
          }),
        ]),
        a("div", M, v(e.app.appName), 1),
      ],
      32
    )),
    [[i, e.appEdit]]
  );
}
var I = p(u, [
  ["render", E],
  ["__scopeId", "data-v-0d782bbe"],
]);
export { I as default };
