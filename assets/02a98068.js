import { u as i } from "./6da42bf6.js";
import {
  _ as n,
  d as r,
  r as d,
  a2 as c,
  a5 as _,
  o as m,
  f as l,
  g as t,
  j as v,
  t as f,
  k as b,
} from "./75bbe58a.js";
import "./a437c2e6.js";
import "./index.js";
import "./28945d09.js";
const u = r({ name: "NewsMin", ...i }),
  g = { class: "app-icon_warp bg-filter" },
  w = { class: "etab-app-box_name" };
function E(e, s, N, k, M, $) {
  const a = d("EtabImg"),
    p = c("edit");
  return _(
    (m(),
    l(
      "div",
      {
        class: "etab-app-box news-icon",
        onOnAppEdit:
          s[0] || (s[0] = (...o) => e.onAppEdit && e.onAppEdit(...o)),
        onClick:
          s[1] || (s[1] = b((...o) => e.onOpen && e.onOpen(...o), ["stop"])),
      },
      [
        t("div", g, [
          v(a, {
            src: "https://files.codelife.cc/icons/topsearch.svg",
            class: "etab-app-box_img",
          }),
        ]),
        t("div", w, f(e.app.appName), 1),
      ],
      32
    )),
    [[p, e.appEdit]]
  );
}
var D = n(u, [
  ["render", E],
  ["__scopeId", "data-v-17778ee4"],
]);
export { D as default };
