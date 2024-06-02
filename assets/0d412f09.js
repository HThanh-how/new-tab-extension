import {
  d as v,
  E,
  o,
  f as n,
  g as e,
  _ as B,
  r,
  W as m,
  a8 as S,
  H as g,
  k as w,
  j as t,
  I as l,
  t as x,
  J as I,
  K as b,
} from "./75bbe58a.js";
import { s as A, t as R } from "./index.js";
const D = v({ name: "Bottom" }),
  L = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  z = e(
    "path",
    {
      fill: "currentColor",
      d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z",
    },
    null,
    -1
  ),
  O = [z];
function Q(s, a, u, d, i, c) {
  return o(), n("svg", L, O);
}
var q = E(D, [["render", Q]]);
const F = v({
    name: "SearchResults",
    emits: ["onAdd", "onOpenQuery", "onRemove"],
    props: {
      selectIndex: { type: Number, default: -1 },
      queryList: { type: Array, default: [] },
      searchEngines: { type: Array, default: [] },
    },
    components: { Search: A, Bottom: q, Top: R },
    setup(s, a) {
      return {
        onRemove: (c) => {
          a.emit("onRemove", c);
        },
        onAdd: () => {
          a.emit("onAdd");
        },
        onOpenQuery: (c) => {
          a.emit("onOpenQuery", c);
        },
      };
    },
  }),
  f = (s) => (I("data-v-1f230cea"), (s = s()), b(), s),
  N = { class: "search-result" },
  T = { class: "search-result_warp" },
  V = ["onClick"],
  M = { class: "ml-10" },
  j = { class: "search-result_shortcut" },
  H = { class: "hotkey flex-c" },
  J = { class: "ml-10 flex-c mr-10" },
  K = { class: "svelte" },
  W = { class: "svelte" },
  G = f(() =>
    e(
      "span",
      { class: "svelte-text" },
      "Move up and down to select search results",
      -1
    )
  ),
  P = { class: "ml-10 flex-c" },
  U = { class: "svelte" },
  X = f(() =>
    e(
      "span",
      { class: "svelte-text" },
      "Switch search engine",
      -1
    )
  ),
  Y = { key: 1, class: "search-result_null" };
function Z(s, a, u, d, i, c) {
  const y = r("Search"),
    _ = r("el-icon"),
    $ = r("Top"),
    C = r("Bottom"),
    k = r("EtabIcon");
  return (
    o(),
    n("div", N, [
      e("div", T, [
        s.queryList.length > 0
          ? (o(),
            n(
              m,
              { key: 0 },
              [
                (o(!0),
                n(
                  m,
                  null,
                  S(
                    s.queryList,
                    (p, h) => (
                      o(),
                      n(
                        "div",
                        {
                          key: h,
                          class: g([
                            { "search-result_hover": h == s.selectIndex },
                            "search-result_item",
                          ]),
                          onClick: w((ee) => s.onOpenQuery(p), ["stop"]),
                        },
                        [
                          t(_, null, { default: l(() => [t(y)]), _: 1 }),
                          e("div", M, x(p), 1),
                        ],
                        10,
                        V
                      )
                    )
                  ),
                  128
                )),
                e("div", j, [
                  e("div", H, [
                    e("div", J, [
                      e("kbd", K, [
                        t(_, { size: 12 }, { default: l(() => [t($)]), _: 1 }),
                      ]),
                      e("kbd", W, [
                        t(_, { size: 12 }, { default: l(() => [t(C)]), _: 1 }),
                      ]),
                      G,
                    ]),
                    e("div", P, [
                      e("kbd", U, [t(k, { size: 16, name: "apps-tab" })]),
                      X,
                    ]),
                  ]),
                ]),
              ],
              64
            ))
          : (o(), n("div", Y, "No search results")),
      ]),
    ])
  );
}
var oe = B(F, [
  ["render", Z],
  ["__scopeId", "data-v-1f230cea"],
]);
export { oe as default };
