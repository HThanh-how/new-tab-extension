import { u as m } from "./6da42bf6.js";
import {
  _ as f,
  d as v,
  r as b,
  a2 as w,
  a5 as k,
  o as t,
  f as r,
  g as a,
  k as p,
  W as l,
  a8 as d,
  H as u,
  t as i,
  j as y,
} from "./75bbe58a.js";
import "./a437c2e6.js";
import "./index.js";
import "./28945d09.js";
const E = v({ name: "NewsMed", ...m }),
  N = { class: "app-icon_warp bg-filter" },
  O = ["onMouseenter"],
  g = { class: "news-icon_ul" },
  C = ["href"],
  M = { class: "etab-app-box_name" };
function h(e, o, $, R, A, B) {
  const c = b("EtabReload"),
    _ = w("edit");
  return k(
    (t(),
    r(
      "div",
      {
        class: "etab-app-box news-icon",
        onOnAppEdit:
          o[1] || (o[1] = (...s) => e.onAppEdit && e.onAppEdit(...s)),
        onClick:
          o[2] || (o[2] = p((...s) => e.onOpen && e.onOpen(...s), ["stop"])),
      },
      [
        a("div", N, [
          a(
            "div",
            {
              class: "news-icon_tabs mb-10 mb-border",
              onClick:
                o[0] ||
                (o[0] = p((...s) => e.onOpen && e.onOpen(...s), ["stop"])),
            },
            [
              (t(!0),
              r(
                l,
                null,
                d(
                  e.menList,
                  (s, n) => (
                    t(),
                    r(
                      "span",
                      {
                        key: n,
                        class: u(["tab", { active: e.tabIndex == n }]),
                        onMouseenter: (D) => e.onClickItem(s.type),
                      },
                      i(s.name),
                      43,
                      O
                    )
                  )
                ),
                128
              )),
              y(c, { class: "reload-bt", onOnReload: e.onQuery }, null, 8, [
                "onOnReload",
              ]),
            ]
          ),
          a("ul", g, [
            (t(!0),
            r(
              l,
              null,
              d(
                e.newsList,
                (s, n) => (
                  t(),
                  r("li", { key: n, class: "news-icon_li flex-c" }, [
                    a(
                      "span",
                      { class: u(["news-icon_num", ["hot" + n]]) },
                      i(n + 1),
                      3
                    ),
                    a(
                      "a",
                      { class: "flex1", target: "_blank row-1", href: s.url },
                      i(s.title),
                      9,
                      C
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ]),
        a("div", M, i(e.app.appName), 1),
      ],
      32
    )),
    [[_, e.appEdit]]
  );
}
var F = f(E, [
  ["render", h],
  ["__scopeId", "data-v-3f6a0792"],
]);
export { F as default };
