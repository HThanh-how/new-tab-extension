import { u as E, b as g } from "./index.js";
import {
  _ as v,
  d as C,
  e as F,
  a as S,
  r as d,
  o as l,
  f as i,
  g as s,
  j as c,
  W as b,
  a8 as A,
  t as I,
  I as D,
  C as k,
  J as B,
  K as V,
} from "./75bbe58a.js";
import { E as w } from "./ff33dcc6.js";
import "./8e76c846.js";
const x = C({
    name: "SerachSet",
    components: { ElSwitch: w },
    setup() {
      const { VITE_STATIC_URL: e } = k,
        { userInfo: r, searchEngines: a } = E(),
        _ = g(),
        p = F(!1),
        h = S(() => {
          const { length: o } = a.value.filter((u) => u.checked);
          return o >= 8;
        });
      return {
        VITE_STATIC_URL: e,
        userInfo: r,
        isDisabledAdd: h,
        visible: p,
        searchEngines: a,
        onChange: (o) => {
          _.setSearchEngine(a.value, o);
        },
      };
    },
  }),
  T = (e) => (B("data-v-0c51ad63"), (e = e()), V(), e),
  $ = { class: "etab-serach-set" },
  y = { class: "header flex-c" },
  U = { class: "app-pic-group" },
  L = T(() =>
    s(
      "div",
      { class: "flex1" },
      [
        s(
          "div",
          { class: "app-name" },
          "Set Search Engine,Make Search Faster"
        ),
        s(
          "div",
          { class: "app-msg" },
          "Sorting Order Is，Sort According To The Current Selection Time"
        ),
      ],
      -1
    )
  ),
  N = { class: "card-header flex-c" },
  R = { class: "flex1 flex-c" },
  j = { class: "img-icon" },
  J = { class: "title row-1" },
  K = { class: "card-footer flex-end" };
function W(e, r, a, _, p, h) {
  const n = d("EtabImg"),
    o = d("el-switch"),
    u = d("el-tooltip");
  return (
    l(),
    i("section", $, [
      s("div", y, [
        s("div", U, [
          c(
            n,
            {
              class: "app-pic",
              src: e.VITE_STATIC_URL + "/app/extension_light_nobg.svg",
              alt: "",
            },
            null,
            8,
            ["src"]
          ),
        ]),
        L,
      ]),
      (l(!0),
      i(
        b,
        null,
        A(
          e.searchEngines,
          (t, m) => (
            l(),
            i("section", { key: m, class: "card" }, [
              s("div", N, [
                s("div", R, [
                  s("div", j, [
                    c(n, { class: "img-icon", src: t.icon }, null, 8, ["src"]),
                  ]),
                  s("div", J, I(t.name), 1),
                ]),
                s("div", K, [
                  c(
                    u,
                    {
                      effect: "dark",
                      disabled: !(!t.checked && e.isDisabledAdd),
                      content:
                        "Most Add8Search Engine,Please Turn Off The Excess Search Engine First",
                      placement: "top-start",
                    },
                    {
                      default: D(() => [
                        c(
                          o,
                          {
                            modelValue: t.checked,
                            "onUpdate:modelValue": (f) => (t.checked = f),
                            disabled: !t.checked && e.isDisabledAdd,
                            onChange: (f) => e.onChange(m),
                          },
                          null,
                          8,
                          [
                            "modelValue",
                            "onUpdate:modelValue",
                            "disabled",
                            "onChange",
                          ]
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["disabled"]
                  ),
                ]),
              ]),
            ])
          )
        ),
        128
      )),
    ])
  );
}
var M = v(x, [
  ["render", W],
  ["__scopeId", "data-v-0c51ad63"],
]);
export { M as default };
