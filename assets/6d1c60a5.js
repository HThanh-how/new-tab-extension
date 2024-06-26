import { a2 as C } from "./index.js";
import {
  _ as u,
  r as m,
  o as g,
  f as w,
  g as a,
  j as d,
  H as s,
  a5 as l,
  bJ as i,
  t as x,
  aa as h,
  J as V,
  K as S,
} from "./75bbe58a.js";
import { E as k } from "./ff33dcc6.js";
import { E as D } from "./4c16f6bc.js";
import E from "./c5fde6e9.js";
import "./8e76c846.js";
import "./e06f0b8d.js";
import "./3f4c5204.js";
import "./04ee1aa4.js";
import "./ceaf704c.js";
const y = {
    name: "AppDate",
    components: { ElSwitch: k, ElSlider: D, EtabColor: E },
    setup() {
      const { onSaveTheme: t, theme: o } = C();
      return {
        onChange: () => {
          t(o.value);
        },
        formatTooltip: (c) => `${c}px`,
        theme: o,
        onSizeFont: () => {
          t(o.value);
        },
      };
    },
  },
  r = (t) => (V("data-v-411828ff"), (t = t()), S(), t),
  T = { class: "app-bg" },
  U = { class: "group etab-theme" },
  z = { class: "item" },
  F = { class: "flex-c" },
  B = r(() => a("span", { class: "flex1" }, "Show", -1)),
  M = { class: "times" },
  A = h(" Month Day "),
  I = h("Week "),
  L = h("Lunar Calendar "),
  W = h("Second "),
  N = h("Rough "),
  J = { class: "item" },
  O = { class: "flex-c" },
  j = r(() => a("span", { class: "span" }, "Font Size", -1)),
  H = { class: "flex-cc flex1" },
  K = { class: "ml-10" },
  q = { class: "item" },
  G = { class: "flex-c" },
  P = r(() => a("span", { class: "span" }, "Font Color", -1)),
  Q = { class: "flex-cc flex1" };
function R(t, o, v, e, _, c) {
  const p = m("el-switch"),
    b = m("el-slider"),
    f = m("EtabColor");
  return (
    g(),
    w("section", T, [
      a("div", U, [
        a("div", z, [
          a("p", F, [
            B,
            d(
              p,
              {
                modelValue: e.theme.variables.isDate,
                "onUpdate:modelValue":
                  o[0] || (o[0] = (n) => (e.theme.variables.isDate = n)),
                activeValue: !0,
                inactiveValue: !1,
                onChange: e.onChange,
              },
              null,
              8,
              ["modelValue", "onChange"]
            ),
          ]),
          a("div", M, [
            a(
              "div",
              { class: s(["time", { checked: e.theme.variables.showMonth }]) },
              [
                l(
                  a(
                    "input",
                    {
                      type: "checkbox",
                      name: "showMonth",
                      "onUpdate:modelValue":
                        o[1] ||
                        (o[1] = (n) => (e.theme.variables.showMonth = n)),
                    },
                    null,
                    512
                  ),
                  [[i, e.theme.variables.showMonth]]
                ),
                A,
              ],
              2
            ),
            a(
              "div",
              { class: s(["time", { checked: e.theme.variables.showDate }]) },
              [
                l(
                  a(
                    "input",
                    {
                      onChange:
                        o[2] ||
                        (o[2] = (...n) => e.onChange && e.onChange(...n)),
                      type: "checkbox",
                      name: "showDate",
                      "onUpdate:modelValue":
                        o[3] ||
                        (o[3] = (n) => (e.theme.variables.showDate = n)),
                    },
                    null,
                    544
                  ),
                  [[i, e.theme.variables.showDate]]
                ),
                I,
              ],
              2
            ),
            a(
              "div",
              { class: s(["time", { checked: e.theme.variables.showLunar }]) },
              [
                l(
                  a(
                    "input",
                    {
                      onChange:
                        o[4] ||
                        (o[4] = (...n) => e.onChange && e.onChange(...n)),
                      type: "checkbox",
                      name: "showLunar",
                      "onUpdate:modelValue":
                        o[5] ||
                        (o[5] = (n) => (e.theme.variables.showLunar = n)),
                    },
                    null,
                    544
                  ),
                  [[i, e.theme.variables.showLunar]]
                ),
                L,
              ],
              2
            ),
            a(
              "div",
              { class: s(["time", { checked: e.theme.variables.showSecond }]) },
              [
                l(
                  a(
                    "input",
                    {
                      onChange:
                        o[6] ||
                        (o[6] = (...n) => e.onChange && e.onChange(...n)),
                      type: "checkbox",
                      name: "showSecond",
                      "onUpdate:modelValue":
                        o[7] ||
                        (o[7] = (n) => (e.theme.variables.showSecond = n)),
                    },
                    null,
                    544
                  ),
                  [[i, e.theme.variables.showSecond]]
                ),
                W,
              ],
              2
            ),
            a(
              "div",
              { class: s(["time", { checked: e.theme.variables.showWeight }]) },
              [
                l(
                  a(
                    "input",
                    {
                      onChange:
                        o[8] ||
                        (o[8] = (...n) => e.onChange && e.onChange(...n)),
                      type: "checkbox",
                      name: "showWeight",
                      "onUpdate:modelValue":
                        o[9] ||
                        (o[9] = (n) => (e.theme.variables.showWeight = n)),
                    },
                    null,
                    544
                  ),
                  [[i, e.theme.variables.showWeight]]
                ),
                N,
              ],
              2
            ),
          ]),
        ]),
        a("div", J, [
          a("p", O, [
            j,
            a("span", H, [
              d(
                b,
                {
                  modelValue: e.theme.variables.fontSize,
                  "onUpdate:modelValue":
                    o[10] || (o[10] = (n) => (e.theme.variables.fontSize = n)),
                  formatTooltip: e.formatTooltip,
                  min: 50,
                  max: 150,
                  onChange: e.onChange,
                },
                null,
                8,
                ["modelValue", "formatTooltip", "onChange"]
              ),
              a("span", K, x(e.theme.variables.fontSize) + "px", 1),
            ]),
          ]),
        ]),
        a("div", q, [
          a("p", G, [
            P,
            a("span", Q, [
              d(
                f,
                {
                  modelValue: e.theme.variables.fontColor,
                  "onUpdate:modelValue":
                    o[11] || (o[11] = (n) => (e.theme.variables.fontColor = n)),
                  onOnChange: e.onSizeFont,
                },
                null,
                8,
                ["modelValue", "onOnChange"]
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  );
}
var le = u(y, [
  ["render", R],
  ["__scopeId", "data-v-411828ff"],
]);
export { le as default };
