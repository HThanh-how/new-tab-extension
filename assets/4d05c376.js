import { p as g, u as v, b as f } from "./index.js";
import {
  _ as S,
  d as A,
  a as h,
  r as c,
  o as i,
  f as r,
  g as o,
  W as k,
  a8 as C,
  H as E,
  j as l,
  t as $,
  I as y,
} from "./75bbe58a.js";
const I = A({
    name: "SearchApps",
    components: { Plus: g },
    emits: ["onAdd", "onSelect"],
    setup(n, t) {
      const { searchEngines: a } = v(),
        d = f(),
        m = h(() =>
          a.value
            .filter((s) => s.checked === !0)
            .sort((s, e) => e.createtime - s.createtime)
            .splice(0, 8)
        ),
        _ = h(() => d.$state.userInfo.searchEngine);
      return {
        onAdd: () => {
          t.emit("onAdd");
        },
        onSelect: (s) => {
          t.emit("onSelect", s);
        },
        searchEngines: a,
        engines: m,
        searchEngine: _,
      };
    },
  }),
  b = { class: "search-engine" },
  B = { class: "search-engine-warp" },
  F = ["onClick"],
  N = { class: "search-engine-item_icon" },
  P = { class: "name" },
  w = o("div", { class: "name" }, "Edit", -1);
function V(n, t, a, d, m, _) {
  const p = c("EtabImg"),
    u = c("Plus"),
    s = c("el-icon");
  return (
    i(),
    r("div", b, [
      o("div", B, [
        (i(!0),
        r(
          k,
          null,
          C(
            n.engines,
            (e) => (
              i(),
              r(
                "div",
                {
                  key: e.name,
                  class: E([
                    "search-engine-item",
                    { "search-engine-item_select": n.searchEngine == e.name },
                  ]),
                  onClick: (j) => n.onSelect(e.name),
                },
                [
                  o("div", N, [
                    l(
                      p,
                      {
                        isNull: !0,
                        class: "search-engine-item_icon",
                        src: e.icon,
                      },
                      null,
                      8,
                      ["src"]
                    ),
                  ]),
                  o("div", P, $(e.name), 1),
                ],
                10,
                F
              )
            )
          ),
          128
        )),
      ]),
      o(
        "div",
        {
          class: "search-engine-item",
          onClick: t[0] || (t[0] = (...e) => n.onAdd && n.onAdd(...e)),
        },
        [
          l(
            s,
            { class: "search-engine-item_icon" },
            { default: y(() => [l(u)]), _: 1 }
          ),
          w,
        ]
      ),
    ])
  );
}
var H = S(I, [["render", V]]);
export { H as default };
