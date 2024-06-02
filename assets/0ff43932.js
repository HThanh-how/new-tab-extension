import { a2 as _ } from "./index.js";
import {
  _ as u,
  r as d,
  o as h,
  f as g,
  g as o,
  j as n,
  t as r,
  J as f,
  K as v,
} from "./75bbe58a.js";
import { E as b } from "./ff33dcc6.js";
import { E as y } from "./4c16f6bc.js";
import "./8e76c846.js";
import "./e06f0b8d.js";
const C = {
    name: "AppQuery",
    components: { ElSwitch: b, ElSlider: y },
    setup() {
      const { onSaveTheme: s, theme: a } = _();
      return {
        theme: a,
        onChange: () => {
          s(a.value);
        },
        formatTooltip: (m) => `${m}px`,
      };
    },
  },
  l = (s) => (f("data-v-b3881dba"), (s = s()), v(), s),
  V = { class: "app-bg" },
  x = { class: "group etab-theme" },
  T = { class: "flex-c" },
  q = l(() =>
    o("span", { class: "flex1" }, "Show search bar", -1)
  ),
  E = { class: "group etab-theme item" },
  A = l(() => o("p", { class: "gtitle" }, "Search bar", -1)),
  S = { class: "gitem flex-c" },
  D = l(() => o("span", { class: "glable" }, "Height", -1)),
  Q = { class: "ml-10" },
  w = { class: "gitem flex-c" },
  I = l(() => o("span", { class: "glable" }, "Rounded corners", -1)),
  U = { class: "ml-10" },
  B = { class: "gitem flex-c" },
  F = l(() => o("span", { class: "glable" }, "Transparency", -1)),
  H = { class: "ml-10" };
function O(s, a, p, e, m, R) {
  const c = d("el-switch"),
    i = d("el-slider");
  return (
    h(),
    g("section", V, [
      o("div", x, [
        o("p", T, [
          q,
          n(
            c,
            {
              modelValue: e.theme.variables.isQuery,
              "onUpdate:modelValue":
                a[0] || (a[0] = (t) => (e.theme.variables.isQuery = t)),
              activeValue: !0,
              inactiveValue: !1,
              onChange: e.onChange,
            },
            null,
            8,
            ["modelValue", "onChange"]
          ),
        ]),
      ]),
      o("div", E, [
        A,
        o("p", S, [
          D,
          n(
            i,
            {
              modelValue: e.theme.variables.queryHeight,
              "onUpdate:modelValue":
                a[1] || (a[1] = (t) => (e.theme.variables.queryHeight = t)),
              formatTooltip: e.formatTooltip,
              min: 30,
              max: 100,
              onChange: e.onChange,
            },
            null,
            8,
            ["modelValue", "formatTooltip", "onChange"]
          ),
          o("span", Q, r(e.theme.variables.queryHeight) + "px", 1),
        ]),
        o("p", w, [
          I,
          n(
            i,
            {
              modelValue: e.theme.variables.queryRadius,
              "onUpdate:modelValue":
                a[2] || (a[2] = (t) => (e.theme.variables.queryRadius = t)),
              formatTooltip: e.formatTooltip,
              min: 0,
              max: 100,
              onChange: e.onChange,
            },
            null,
            8,
            ["modelValue", "formatTooltip", "onChange"]
          ),
          o("span", U, r(e.theme.variables.queryRadius) + "px", 1),
        ]),
        o("p", B, [
          F,
          n(
            i,
            {
              modelValue: e.theme.variables.queryOpacity,
              "onUpdate:modelValue":
                a[3] || (a[3] = (t) => (e.theme.variables.queryOpacity = t)),
              formatTooltip: e.formatTooltip,
              min: 0,
              max: 1,
              step: 0.1,
              onChange: e.onChange,
            },
            null,
            8,
            ["modelValue", "formatTooltip", "step", "onChange"]
          ),
          o("span", H, r(e.theme.variables.queryOpacity) + "%", 1),
        ]),
      ]),
    ])
  );
}
var G = u(C, [
  ["render", O],
  ["__scopeId", "data-v-b3881dba"],
]);
export { G as default };
