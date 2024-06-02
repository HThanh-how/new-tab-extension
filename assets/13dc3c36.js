import {
  X as de,
  Y as A,
  B as ze,
  a0 as Ne,
  R as Pe,
  a1 as F,
  s as Re,
  Q as pe,
  u as Ue,
} from "./index.js";
import {
  d as _,
  E as Y,
  o as c,
  f as y,
  g as f,
  i as oe,
  bB as Ge,
  aH as Oe,
  a as E,
  bd as be,
  e as I,
  aV as M,
  be as le,
  bI as Me,
  w as he,
  bg as ke,
  v as ge,
  n as W,
  az as Z,
  ay as x,
  c as B,
  I as k,
  H as S,
  a5 as R,
  bJ as Q,
  a4 as j,
  W as X,
  aa as N,
  t as D,
  l as V,
  U as je,
  ad as qe,
  p as He,
  B as Ke,
  h as Je,
  aJ as We,
  bw as we,
  ax as Qe,
  u as Xe,
  b0 as Ye,
  r as h,
  aG as Ze,
  bm as ye,
  _ as ue,
  j as b,
  a3 as ie,
  O as xe,
  C as et,
  a2 as tt,
  a8 as ce,
  k as me,
  bK as ve,
  J as nt,
  K as ot,
  F as at,
} from "./75bbe58a.js";
import { d as ae, E as st, a as lt, b as it, c as rt } from "./adcee456.js";
import "./04ee1aa4.js";
import { i as Ce } from "./8e76c846.js";
import { s as ut } from "./d5b42a38.js";
import "./9699d909.js";
const dt = _({ name: "CloseBold" }),
  pt = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  ct = f(
    "path",
    {
      fill: "currentColor",
      d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z",
    },
    null,
    -1
  ),
  mt = [ct];
function vt(e, t, n, s, r, d) {
  return c(), y("svg", pt, mt);
}
var ft = Y(dt, [["render", vt]]);
const bt = _({ name: "EditPen" }),
  ht = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  kt = f(
    "path",
    {
      d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  gt = [kt];
function wt(e, t, n, s, r, d) {
  return c(), y("svg", ht, gt);
}
var $e = Y(bt, [["render", wt]]);
const yt = _({ name: "Filter" }),
  Ct = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  $t = f(
    "path",
    {
      fill: "currentColor",
      d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z",
    },
    null,
    -1
  ),
  Lt = [$t];
function Et(e, t, n, s, r, d) {
  return c(), y("svg", Ct, Lt);
}
var St = Y(yt, [["render", Et]]);
const Tt = _({ name: "More" }),
  It = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  _t = f(
    "path",
    {
      fill: "currentColor",
      d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z",
    },
    null,
    -1
  ),
  Bt = [_t];
function Ft(e, t, n, s, r, d) {
  return c(), y("svg", It, Bt);
}
var Dt = Y(Tt, [["render", Ft]]);
const Vt = {
    modelValue: { type: Array, default: () => [] },
    disabled: Boolean,
    min: { type: Number, default: void 0 },
    max: { type: Number, default: void 0 },
    size: { type: String, validator: Ce },
    id: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    fill: { type: String, default: void 0 },
    textColor: { type: String, default: void 0 },
    tag: { type: String, default: "div" },
  },
  Le = {
    modelValue: { type: [Number, String, Boolean], default: () => {} },
    label: { type: [String, Boolean, Number, Object] },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: { type: String, default: void 0 },
    trueLabel: { type: [String, Number], default: void 0 },
    falseLabel: { type: [String, Number], default: void 0 },
    id: { type: String, default: void 0 },
    controls: { type: String, default: void 0 },
    border: Boolean,
    size: { type: String, validator: Ce },
    tabindex: [String, Number],
  },
  U = () => {
    const e = oe(Ge, {}),
      t = oe(Oe, {}),
      n = oe("CheckboxGroup", {}),
      s = E(() => n && (n == null ? void 0 : n.name) === "ElCheckboxGroup"),
      r = E(() => t.size);
    return {
      isGroup: s,
      checkboxGroup: n,
      elForm: e,
      elFormItemSize: r,
      elFormItem: t,
    };
  },
  At = (e, { elFormItem: t }) => {
    const { inputId: n, isLabeledByFormItem: s } = be(e, {
      formItemContext: t,
    });
    return { isLabeledByFormItem: s, groupId: n };
  },
  zt = (e) => {
    const t = I(!1),
      { emit: n } = ge(),
      { isGroup: s, checkboxGroup: r, elFormItem: d } = U(),
      o = I(!1);
    return {
      model: E({
        get() {
          var u, a;
          return s.value
            ? (u = r.modelValue) == null
              ? void 0
              : u.value
            : (a = e.modelValue) != null
            ? a
            : t.value;
        },
        set(u) {
          var a;
          s.value && Array.isArray(u)
            ? ((o.value = r.max !== void 0 && u.length > r.max.value),
              o.value === !1 &&
                ((a = r == null ? void 0 : r.changeEvent) == null ||
                  a.call(r, u)))
            : (n(M, u), (t.value = u));
        },
      }),
      isGroup: s,
      isLimitExceeded: o,
      elFormItem: d,
    };
  },
  Nt = (e, t, { model: n }) => {
    const { isGroup: s, checkboxGroup: r } = U(),
      d = I(!1),
      o = le(r == null ? void 0 : r.checkboxGroupSize, { prop: !0 }),
      p = E(() => {
        const l = n.value;
        return Me(l) === "[object Boolean]"
          ? l
          : Array.isArray(l)
          ? l.includes(e.label)
          : l != null
          ? l === e.trueLabel
          : !!l;
      }),
      u = le(
        E(() => {
          var l;
          return s.value
            ? (l = r == null ? void 0 : r.checkboxGroupSize) == null
              ? void 0
              : l.value
            : void 0;
        })
      ),
      a = E(() => !!(t.default || e.label));
    return { isChecked: p, focus: d, size: o, checkboxSize: u, hasOwnLabel: a };
  },
  Pt = (e, { model: t, isChecked: n }) => {
    const { elForm: s, isGroup: r, checkboxGroup: d } = U(),
      o = E(() => {
        var u, a;
        const l = (u = d.max) == null ? void 0 : u.value,
          C = (a = d.min) == null ? void 0 : a.value;
        return (
          (!!(l || C) && t.value.length >= l && !n.value) ||
          (t.value.length <= C && n.value)
        );
      });
    return {
      isDisabled: E(() => {
        var u, a;
        const l = e.disabled || (s == null ? void 0 : s.disabled);
        return (a = r.value
          ? ((u = d.disabled) == null ? void 0 : u.value) || l || o.value
          : l) != null
          ? a
          : !1;
      }),
      isLimitDisabled: o,
    };
  },
  Rt = (e, { model: t }) => {
    function n() {
      Array.isArray(t.value) && !t.value.includes(e.label)
        ? t.value.push(e.label)
        : (t.value = e.trueLabel || !0);
    }
    e.checked && n();
  },
  Ut = (
    e,
    {
      model: t,
      isLimitExceeded: n,
      hasOwnLabel: s,
      isDisabled: r,
      isLabeledByFormItem: d,
    }
  ) => {
    const { elFormItem: o } = U(),
      { emit: p } = ge();
    function u(m) {
      var w, $;
      return m === e.trueLabel || m === !0
        ? (w = e.trueLabel) != null
          ? w
          : !0
        : ($ = e.falseLabel) != null
        ? $
        : !1;
    }
    function a(m, w) {
      p("change", u(m), w);
    }
    function l(m) {
      if (n.value) return;
      const w = m.target;
      p("change", u(w.checked), m);
    }
    async function C(m) {
      n.value ||
        (!s.value &&
          !r.value &&
          d.value &&
          ((t.value = u([!1, e.falseLabel].includes(t.value))),
          await W(),
          a(t.value, m)));
    }
    return (
      he(
        () => e.modelValue,
        () => {
          var m;
          (m = o == null ? void 0 : o.validate) == null ||
            m.call(o, "change").catch((w) => ke());
        }
      ),
      { handleChange: l, onClickRoot: C }
    );
  },
  Ee = (e, t) => {
    const { model: n, isGroup: s, isLimitExceeded: r, elFormItem: d } = zt(e),
      {
        focus: o,
        size: p,
        isChecked: u,
        checkboxSize: a,
        hasOwnLabel: l,
      } = Nt(e, t, { model: n }),
      { isDisabled: C } = Pt(e, { model: n, isChecked: u }),
      { inputId: m, isLabeledByFormItem: w } = be(e, {
        formItemContext: d,
        disableIdGeneration: l,
        disableIdManagement: s,
      }),
      { handleChange: $, onClickRoot: L } = Ut(e, {
        model: n,
        isLimitExceeded: r,
        hasOwnLabel: l,
        isDisabled: C,
        isLabeledByFormItem: w,
      });
    return (
      Rt(e, { model: n }),
      {
        elFormItem: d,
        inputId: m,
        isLabeledByFormItem: w,
        isChecked: u,
        isDisabled: C,
        isGroup: s,
        checkboxSize: a,
        hasOwnLabel: l,
        model: n,
        handleChange: $,
        onClickRoot: L,
        focus: o,
        size: p,
      }
    );
  },
  Gt = _({
    name: "ElCheckbox",
    props: Le,
    emits: [M, "change"],
    setup(e, { slots: t }) {
      return { ns: Z("checkbox"), ...Ee(e, t) };
    },
  }),
  Ot = ["tabindex", "role", "aria-checked"],
  Mt = [
    "id",
    "aria-hidden",
    "name",
    "tabindex",
    "disabled",
    "true-value",
    "false-value",
  ],
  jt = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
function qt(e, t, n, s, r, d) {
  return (
    c(),
    B(
      je(!e.hasOwnLabel && e.isLabeledByFormItem ? "span" : "label"),
      {
        class: S([
          e.ns.b(),
          e.ns.m(e.checkboxSize),
          e.ns.is("disabled", e.isDisabled),
          e.ns.is("bordered", e.border),
          e.ns.is("checked", e.isChecked),
        ]),
        "aria-controls": e.indeterminate ? e.controls : null,
        onClick: e.onClickRoot,
      },
      {
        default: k(() => [
          f(
            "span",
            {
              class: S([
                e.ns.e("input"),
                e.ns.is("disabled", e.isDisabled),
                e.ns.is("checked", e.isChecked),
                e.ns.is("indeterminate", e.indeterminate),
                e.ns.is("focus", e.focus),
              ]),
              tabindex: e.indeterminate ? 0 : void 0,
              role: e.indeterminate ? "checkbox" : void 0,
              "aria-checked": e.indeterminate ? "mixed" : void 0,
            },
            [
              f("span", { class: S(e.ns.e("inner")) }, null, 2),
              e.trueLabel || e.falseLabel
                ? R(
                    (c(),
                    y(
                      "input",
                      {
                        key: 0,
                        id: e.inputId,
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (o) => (e.model = o)),
                        class: S(e.ns.e("original")),
                        type: "checkbox",
                        "aria-hidden": e.indeterminate ? "true" : "false",
                        name: e.name,
                        tabindex: e.tabindex,
                        disabled: e.isDisabled,
                        "true-value": e.trueLabel,
                        "false-value": e.falseLabel,
                        onChange:
                          t[1] ||
                          (t[1] = (...o) =>
                            e.handleChange && e.handleChange(...o)),
                        onFocus: t[2] || (t[2] = (o) => (e.focus = !0)),
                        onBlur: t[3] || (t[3] = (o) => (e.focus = !1)),
                      },
                      null,
                      42,
                      Mt
                    )),
                    [[Q, e.model]]
                  )
                : R(
                    (c(),
                    y(
                      "input",
                      {
                        key: 1,
                        id: e.inputId,
                        "onUpdate:modelValue":
                          t[4] || (t[4] = (o) => (e.model = o)),
                        class: S(e.ns.e("original")),
                        type: "checkbox",
                        "aria-hidden": e.indeterminate ? "true" : "false",
                        disabled: e.isDisabled,
                        value: e.label,
                        name: e.name,
                        tabindex: e.tabindex,
                        onChange:
                          t[5] ||
                          (t[5] = (...o) =>
                            e.handleChange && e.handleChange(...o)),
                        onFocus: t[6] || (t[6] = (o) => (e.focus = !0)),
                        onBlur: t[7] || (t[7] = (o) => (e.focus = !1)),
                      },
                      null,
                      42,
                      jt
                    )),
                    [[Q, e.model]]
                  ),
            ],
            10,
            Ot
          ),
          e.hasOwnLabel
            ? (c(),
              y(
                "span",
                { key: 0, class: S(e.ns.e("label")) },
                [
                  j(e.$slots, "default"),
                  e.$slots.default
                    ? V("v-if", !0)
                    : (c(), y(X, { key: 0 }, [N(D(e.label), 1)], 2112)),
                ],
                2
              ))
            : V("v-if", !0),
        ]),
        _: 3,
      },
      8,
      ["class", "aria-controls", "onClick"]
    )
  );
}
var Ht = x(Gt, [
  ["render", qt],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue",
  ],
]);
const Kt = _({
    name: "ElCheckboxButton",
    props: Le,
    emits: [M, "change"],
    setup(e, { slots: t }) {
      const {
          focus: n,
          isChecked: s,
          isDisabled: r,
          size: d,
          model: o,
          handleChange: p,
        } = Ee(e, t),
        { checkboxGroup: u } = U(),
        a = Z("checkbox"),
        l = E(() => {
          var C, m, w, $;
          const L =
            (m =
              (C = u == null ? void 0 : u.fill) == null ? void 0 : C.value) !=
            null
              ? m
              : "";
          return {
            backgroundColor: L,
            borderColor: L,
            color:
              ($ =
                (w = u == null ? void 0 : u.textColor) == null
                  ? void 0
                  : w.value) != null
                ? $
                : "",
            boxShadow: L ? `-1px 0 0 0 ${L}` : null,
          };
        });
      return {
        focus: n,
        isChecked: s,
        isDisabled: r,
        model: o,
        handleChange: p,
        activeStyle: l,
        size: d,
        ns: a,
      };
    },
  }),
  Jt = ["name", "tabindex", "disabled", "true-value", "false-value"],
  Wt = ["name", "tabindex", "disabled", "value"];
function Qt(e, t, n, s, r, d) {
  return (
    c(),
    y(
      "label",
      {
        class: S([
          e.ns.b("button"),
          e.ns.bm("button", e.size),
          e.ns.is("disabled", e.isDisabled),
          e.ns.is("checked", e.isChecked),
          e.ns.is("focus", e.focus),
        ]),
      },
      [
        e.trueLabel || e.falseLabel
          ? R(
              (c(),
              y(
                "input",
                {
                  key: 0,
                  "onUpdate:modelValue": t[0] || (t[0] = (o) => (e.model = o)),
                  class: S(e.ns.be("button", "original")),
                  type: "checkbox",
                  name: e.name,
                  tabindex: e.tabindex,
                  disabled: e.isDisabled,
                  "true-value": e.trueLabel,
                  "false-value": e.falseLabel,
                  onChange:
                    t[1] ||
                    (t[1] = (...o) => e.handleChange && e.handleChange(...o)),
                  onFocus: t[2] || (t[2] = (o) => (e.focus = !0)),
                  onBlur: t[3] || (t[3] = (o) => (e.focus = !1)),
                },
                null,
                42,
                Jt
              )),
              [[Q, e.model]]
            )
          : R(
              (c(),
              y(
                "input",
                {
                  key: 1,
                  "onUpdate:modelValue": t[4] || (t[4] = (o) => (e.model = o)),
                  class: S(e.ns.be("button", "original")),
                  type: "checkbox",
                  name: e.name,
                  tabindex: e.tabindex,
                  disabled: e.isDisabled,
                  value: e.label,
                  onChange:
                    t[5] ||
                    (t[5] = (...o) => e.handleChange && e.handleChange(...o)),
                  onFocus: t[6] || (t[6] = (o) => (e.focus = !0)),
                  onBlur: t[7] || (t[7] = (o) => (e.focus = !1)),
                },
                null,
                42,
                Wt
              )),
              [[Q, e.model]]
            ),
        e.$slots.default || e.label
          ? (c(),
            y(
              "span",
              {
                key: 2,
                class: S(e.ns.be("button", "inner")),
                style: qe(e.isChecked ? e.activeStyle : null),
              },
              [j(e.$slots, "default", {}, () => [N(D(e.label), 1)])],
              6
            ))
          : V("v-if", !0),
      ],
      2
    )
  );
}
var Se = x(Kt, [
  ["render", Qt],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue",
  ],
]);
const Xt = _({
  name: "ElCheckboxGroup",
  props: Vt,
  emits: [M, "change"],
  setup(e, { emit: t, slots: n }) {
    const { elFormItem: s } = U(),
      { groupId: r, isLabeledByFormItem: d } = At(e, { elFormItem: s }),
      o = le(),
      p = Z("checkbox"),
      u = (l) => {
        t(M, l),
          W(() => {
            t("change", l);
          });
      },
      a = E({
        get() {
          return e.modelValue;
        },
        set(l) {
          u(l);
        },
      });
    return (
      He("CheckboxGroup", {
        name: "ElCheckboxGroup",
        modelValue: a,
        ...Ke(e),
        checkboxGroupSize: o,
        changeEvent: u,
      }),
      he(
        () => e.modelValue,
        () => {
          var l;
          (l = s.validate) == null || l.call(s, "change").catch((C) => ke());
        }
      ),
      () =>
        Je(
          e.tag,
          {
            id: r.value,
            class: p.b("group"),
            role: "group",
            "aria-label": d.value ? void 0 : e.label || "checkbox-group",
            "aria-labelledby": d.value ? s.labelId : void 0,
          },
          [j(n, "default")]
        )
    );
  },
});
var Te = x(Xt, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue",
  ],
]);
const Yt = We(Ht, { CheckboxButton: Se, CheckboxGroup: Te });
we(Se);
we(Te);
const Zt = Qe({
    trigger: de.trigger,
    placement: ae.placement,
    disabled: de.disabled,
    visible: A.visible,
    transition: A.transition,
    popperOptions: ae.popperOptions,
    tabindex: ae.tabindex,
    content: A.content,
    popperStyle: A.popperStyle,
    popperClass: A.popperClass,
    enterable: { ...A.enterable, default: !0 },
    effect: { ...A.effect, default: "light" },
    teleported: A.teleported,
    title: String,
    width: { type: [String, Number], default: 150 },
    offset: { type: Number, default: void 0 },
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 },
    showArrow: { type: Boolean, default: !0 },
    persistent: { type: Boolean, default: !0 },
  }),
  xt = [
    "update:visible",
    "before-enter",
    "before-leave",
    "after-enter",
    "after-leave",
  ],
  en = "ElPopover",
  tn = _({
    name: en,
    components: { ElTooltip: ze },
    props: Zt,
    emits: xt,
    setup(e, { emit: t }) {
      const n = Z("popover"),
        s = I(null),
        r = E(() => {
          var $;
          return ($ = Xe(s)) == null ? void 0 : $.popperRef;
        }),
        d = E(() => (Ye(e.width) ? e.width : `${e.width}px`)),
        o = E(() => [{ width: d.value }, e.popperStyle]),
        p = E(() => [n.b(), e.popperClass, { [n.m("plain")]: !!e.content }]),
        u = E(() => e.transition === "el-fade-in-linear");
      return {
        ns: n,
        kls: p,
        gpuAcceleration: u,
        style: o,
        tooltipRef: s,
        popperRef: r,
        hide: () => {
          var $;
          ($ = s.value) == null || $.hide();
        },
        beforeEnter: () => {
          t("before-enter");
        },
        beforeLeave: () => {
          t("before-leave");
        },
        afterEnter: () => {
          t("after-enter");
        },
        afterLeave: () => {
          t("update:visible", !1), t("after-leave");
        },
      };
    },
  });
function nn(e, t, n, s, r, d) {
  const o = h("el-tooltip");
  return (
    c(),
    B(
      o,
      Ze({ ref: "tooltipRef" }, e.$attrs, {
        trigger: e.trigger,
        placement: e.placement,
        disabled: e.disabled,
        visible: e.visible,
        transition: e.transition,
        "popper-options": e.popperOptions,
        tabindex: e.tabindex,
        content: e.content,
        offset: e.offset,
        "show-after": e.showAfter,
        "hide-after": e.hideAfter,
        "auto-close": e.autoClose,
        "show-arrow": e.showArrow,
        "aria-label": e.title,
        effect: e.effect,
        enterable: e.enterable,
        "popper-class": e.kls,
        "popper-style": e.style,
        teleported: e.teleported,
        persistent: e.persistent,
        "gpu-acceleration": e.gpuAcceleration,
        onBeforeShow: e.beforeEnter,
        onBeforeHide: e.beforeLeave,
        onShow: e.afterEnter,
        onHide: e.afterLeave,
      }),
      {
        content: k(() => [
          e.title
            ? (c(),
              y(
                "div",
                { key: 0, class: S(e.ns.e("title")), role: "title" },
                D(e.title),
                3
              ))
            : V("v-if", !0),
          j(e.$slots, "default", {}, () => [N(D(e.content), 1)]),
        ]),
        default: k(() => [
          e.$slots.reference
            ? j(e.$slots, "reference", { key: 0 })
            : V("v-if", !0),
        ]),
        _: 3,
      },
      16,
      [
        "trigger",
        "placement",
        "disabled",
        "visible",
        "transition",
        "popper-options",
        "tabindex",
        "content",
        "offset",
        "show-after",
        "hide-after",
        "auto-close",
        "show-arrow",
        "aria-label",
        "effect",
        "enterable",
        "popper-class",
        "popper-style",
        "teleported",
        "persistent",
        "gpu-acceleration",
        "onBeforeShow",
        "onBeforeHide",
        "onShow",
        "onHide",
      ]
    )
  );
}
var O = x(tn, [
  ["render", nn],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue",
  ],
]);
const fe = (e, t) => {
  const n = t.arg || t.value,
    s = n == null ? void 0 : n.popperRef;
  s && (s.triggerRef = e);
};
var re = {
  mounted(e, t) {
    fe(e, t);
  },
  updated(e, t) {
    fe(e, t);
  },
};
const on = "popover";
O.install = (e) => {
  e.component(O.name, O);
};
re.install = (e) => {
  e.directive(on, re);
};
const an = re;
O.directive = an;
const sn = O,
  ln = sn;
const rn = _({
    name: "TaskItem",
    components: { EditPen: $e, CloseBold: ft, ElCheckbox: Yt, ElInput: ye },
    props: {
      type: { type: String, default: "input" },
      index: { type: Object, default: 0 },
      item: {
        type: Object,
        default: () => ({ id: null, name: null, state: 0, updateTime: null }),
      },
    },
    emits: ["input", "onRemove", "onUpdate", "onAdd"],
    setup(e, t) {
      let n = !1;
      const s = I(null);
      return {
        onChange: (l) => {
          t.emit("onUpdate", l, e.index);
        },
        onUpdate: (l, C) => {
          n && (t.emit("onUpdate", l, C), (n = !1));
        },
        onAdd: (l) => {
          t.emit("onAdd", l);
        },
        onRemove: (l) => {
          t.emit("onRemove", l);
        },
        onChangeInput: () => {
          n = !0;
        },
        input: s,
        focus: () => {
          s.value.focus();
        },
      };
    },
  }),
  un = { class: "flex1 flex-c" },
  dn = { class: "task-icon_li_drag" },
  pn = { class: "task-icon_li_name" },
  cn = { class: "remove-icon" },
  mn = { key: 0 };
function vn(e, t, n, s, r, d) {
  const o = h("EtabIcon"),
    p = h("el-checkbox"),
    u = h("el-input"),
    a = h("CloseBold"),
    l = h("el-icon"),
    C = h("EditPen");
  return (
    c(),
    y(
      "div",
      {
        class: S([
          "task-icon task-icon_li",
          {
            "task-icon_li_ok": e.item.state === 1,
            "task-icon_li_task": e.type === "input",
          },
        ]),
      },
      [
        f("div", un, [
          f("span", dn, [b(o, { size: 16, name: "apps-drag" })]),
          b(
            p,
            {
              "model-value": e.item.state,
              "onUpdate:model-value":
                t[0] || (t[0] = (m) => (e.item.state = m)),
              trueLabel: 1,
              falseLabel: 0,
              size: "large",
              onChange: e.onChange,
            },
            null,
            8,
            ["model-value", "onChange"]
          ),
          f("span", pn, [
            e.type !== "input"
              ? (c(), y(X, { key: 0 }, [N(D(e.item.name), 1)], 64))
              : (c(),
                B(
                  u,
                  {
                    key: 1,
                    ref: "input",
                    "model-value": e.item.name,
                    "onUpdate:model-value":
                      t[1] || (t[1] = (m) => (e.item.name = m)),
                    onInput: e.input,
                    "data-value": e.item.name,
                    placeholder: "Please Enter The Content",
                    onKeyup:
                      t[2] || (t[2] = ie((m) => e.onAdd(e.index), ["enter"])),
                    onChange: e.onChangeInput,
                    onBlur: t[3] || (t[3] = (m) => e.onUpdate(m, e.index)),
                  },
                  null,
                  8,
                  ["model-value", "onInput", "data-value", "onChange"]
                )),
          ]),
        ]),
        f("div", cn, [
          f("span", { onClick: t[4] || (t[4] = (m) => e.onRemove(e.index)) }, [
            b(l, { size: 14 }, { default: k(() => [b(a)]), _: 1 }),
          ]),
          e.type !== "input"
            ? (c(),
              y("span", mn, [
                b(l, { size: 13 }, { default: k(() => [b(C)]), _: 1 }),
              ]))
            : V("", !0),
        ]),
      ],
      2
    )
  );
}
var fn = ue(rn, [
  ["render", vn],
  ["__scopeId", "data-v-8dc80994"],
]);
const bn = (e) => {
    const t = "No Title Plan",
      s = e.filter((r) => r.title.indexOf(t) !== -1).length || 0;
    return `${t}${s + 1}`;
  },
  se = () => ({ id: "", state: 0, title: "", updateTime: -1, taskList: [] }),
  J = { name: null, id: null, state: 0, updateTime: null },
  hn = _({
    name: "TaskList",
    components: {
      ElPopover: ln,
      ElDropdown: st,
      ElDropdownMenu: lt,
      ElDropdownItem: it,
      ElInput: ye,
      TaskItem: fn,
      CirclePlus: rt,
      EditPen: $e,
      More: Dt,
      EFilter: St,
      ESelect: ut,
    },
    setup() {
      const e = Ne(),
        { VITE_STATIC_URL: t } = et,
        n = I([]),
        s = I(!1),
        r = I(!1),
        d = I([]),
        o = I({ order: "asc", keyName: null, isShowFile: !1 }),
        p = I({ ...J }),
        u = I(null),
        a = I({ id: "", title: "", state: 0, updateTime: -1, taskList: [] }),
        l = E(() => (i) => Pe(i, "MM-DD HH:mm")),
        C = (i) => {
          const { keyName: v } = o.value;
          return v ? pe(i.title).indexOf(pe(o.value.keyName)) !== -1 : !0;
        },
        m = (i, v) =>
          o.value.order === "asc"
            ? v.updateTime - i.updateTime
            : i.updateTime - v.updateTime,
        w = E(() => n.value.filter(C).sort(m)),
        $ = async () => {
          const i = bn(n.value),
            v = {
              ...se(),
              id: new Date().getTime().toString(),
              updateTime: new Date().getTime(),
              title: i,
            };
          n.value.unshift(v),
            (a.value = v),
            (p.value = { ...J }),
            await F.onSave(v),
            u.value.focus(),
            await L();
        },
        L = async () => {
          n.value.length > 0 &&
            (await F.onUpdate(a.value), e.setTaskList(a.value.taskList));
        },
        ee = async () => {
          a.value.taskList.forEach((i) => {
            i.updateTime = new Date().getTime();
          }),
            await L();
        },
        q = async (i) => {
          r.value = !0;
          const v = await F.onGetById(i);
          (a.value = { ...v }), (r.value = !1), e.setTaskList(a.value.taskList);
        },
        G = async (i, v) => {
          (n.value[i] = Object.assign(n.value[i], {
            ...v,
            updateTime: new Date().getTime(),
          })),
            (a.value.title = n.value[i].title),
            (a.value.updateTime = n.value[i].updateTime),
            await L();
        },
        te = (i) => {
          G(i, {});
        },
        ne = async (i) => {
          const v = n.value.findIndex((T) => T.id === i);
          G(v, {});
        },
        H = async () => {
          const i = n.value.findIndex((v) => v.id === a.value.id);
          if (i === -1) {
            if (a.value.title) {
              const v = {
                ...se(),
                ...a.value,
                id: new Date().getTime().toString(),
                updateTime: new Date().getTime(),
                title: a.value.title,
              };
              (a.value = v), n.value.unshift(v), await F.onSave(v), await L();
            }
            return;
          }
          if (!a.value.title && a.value.taskList.length < 1) {
            await F.onRemove(a.value.id),
              e.setTaskList([]),
              n.value.splice(i, 1),
              (a.value.id = new Date().getTime().toString()),
              (a.value.updateTime = new Date().getTime());
            return;
          }
          a.value.title !== n.value[i].title && G(i, { title: a.value.title });
        },
        g = async (i) => {
          r.value = !0;
          const { id: v } = w.value[i];
          let T = i;
          const Ve = n.value.findIndex((P) => P.id === v);
          if ((n.value.splice(Ve, 1), await W(), v === a.value.id)) {
            n.value.length > T - 1 ? T-- : n.value.length < T - 1 && T++,
              (T = T > 0 ? T : 0);
            let P = { taskList: [] };
            if (w.value[T]) {
              const Ae = w.value[T].id;
              P = { ...(await F.onGetById(Ae)) };
            } else P = { ...se() };
            (p.value = { ...(P.taskList[0] || { ...J }) }),
              (a.value = { ...P });
          }
          await F.onRemove(v), await L(), (r.value = !1);
        },
        z = async () => {
          p.value.name &&
            (a.value.taskList.push({
              ...p.value,
              updateTime: new Date().getTime(),
            }),
            (p.value = { ...J }),
            await L());
        },
        K = async (i, v) => {
          (a.value.taskList[v].updateTime = new Date().getTime()), await L();
        },
        _e = (i) => {
          i && d.value.push(i);
        },
        Be = (i) => {
          a.value.taskList.splice(i + 1, 0, {
            id: new Date().getTime(),
            name: "",
            state: 0,
            updateTime: new Date().getTime(),
          }),
            (d.value = []),
            W(() => {
              d.value[i + 1].focus();
            });
        },
        Fe = async (i) => {
          a.value.taskList.splice(i, 1), await F.onUpdate(a.value), await L();
        },
        De = (i) => {
          (o.value.order = i), (o.value.isShowFile = !1);
        };
      return (
        xe(async () => {
          (d.value = []), (s.value = !0);
          const i = (await F.onGet()) || [];
          Array.isArray(i) &&
            i.length > 0 &&
            ((n.value = i
              .map((v) => ({ ...v, taskList: [] }))
              .sort((v, T) => T.updateTime - v.updateTime)),
            (a.value = { ...i[0] })),
            (s.value = !1);
        }),
        {
          onRemove: Fe,
          onUpdate: K,
          onSpliceAdd: Be,
          onSelectItem: q,
          onBlur: ne,
          onTitleBlur: H,
          onAdd: $,
          onDelTask: g,
          onSave: z,
          onReName: te,
          onSelectFile: De,
          onDragEnd: ee,
          menTaskList: w,
          VITE_STATIC_URL: t,
          qform: o,
          tLoading: r,
          setRef: _e,
          Search: Re,
          boxRefs: d,
          taskList: n,
          loading: s,
          info: a,
          taskObj: p,
          filterDate: l,
          fInput: u,
        }
      );
    },
  }),
  Ie = (e) => (nt("data-v-6d27341e"), (e = e()), ot(), e),
  kn = { class: "task-list_warp flex" },
  gn = { class: "task-left" },
  wn = { class: "input-input flex-c" },
  yn = { class: "task-bt pointer" },
  Cn = { class: "-warp" },
  $n = Ie(() =>
    f("div", { class: "name" }, "Update Time Reversal", -1)
  ),
  Ln = Ie(() =>
    f("div", { class: "name" }, "Create A Positive Sequence", -1)
  ),
  En = { class: "task-bts ml-10 pointer" },
  Sn = { class: "task-mens" },
  Tn = ["onClick"],
  In = { class: "task-title row-1" },
  _n = { class: "update-time" },
  Bn = { class: "quan ml-10 flex-cc" },
  Fn = N(" Put On The Top "),
  Dn = N(" Delete "),
  Vn = { class: "flex1 task-right" },
  An = { class: "info-title row-1" },
  zn = { class: "task-list" },
  Nn = { class: "task-foter flex-c" };
function Pn(e, t, n, s, r, d) {
  const o = h("EFilter"),
    p = h("el-icon"),
    u = h("ESelect"),
    a = h("el-popover"),
    l = h("el-input"),
    C = h("CirclePlus"),
    m = h("EtabImg"),
    w = h("More"),
    $ = h("el-dropdown-item"),
    L = h("el-dropdown-menu"),
    ee = h("el-dropdown"),
    q = h("EtabEmpty"),
    G = h("TaskItem"),
    te = h("VueDraggableNext"),
    ne = h("EditPen"),
    H = tt("loading");
  return R(
    (c(),
    y("div", kn, [
      f("div", gn, [
        f("div", wn, [
          b(
            a,
            {
              modelValue: e.qform.isShowFile,
              "onUpdate:modelValue":
                t[2] || (t[2] = (g) => (e.qform.isShowFile = g)),
              trigger: "click",
              placement: "right",
              effect: "dark",
            },
            {
              reference: k(() => [
                f("div", yn, [
                  b(p, { size: 20 }, { default: k(() => [b(o)]), _: 1 }),
                ]),
              ]),
              default: k(() => [
                f("div", Cn, [
                  f(
                    "div",
                    {
                      class: S([
                        "-warp_item flex-c pointer",
                        { "-warp_select": e.qform.order == "asc" },
                      ]),
                      onClick: t[0] || (t[0] = (g) => e.onSelectFile("asc")),
                    },
                    [
                      $n,
                      e.qform.order === "asc"
                        ? (c(),
                          B(p, { key: 0 }, { default: k(() => [b(u)]), _: 1 }))
                        : V("", !0),
                    ],
                    2
                  ),
                  f(
                    "div",
                    {
                      class: S([
                        "filter-warp_item flex-c pointer",
                        { "filter-warp_select": e.qform.order == "desc" },
                      ]),
                      onClick: t[1] || (t[1] = (g) => e.onSelectFile("desc")),
                    },
                    [
                      Ln,
                      e.qform.order === "desc"
                        ? (c(),
                          B(p, { key: 0 }, { default: k(() => [b(u)]), _: 1 }))
                        : V("", !0),
                    ],
                    2
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ["modelValue"]
          ),
          b(
            l,
            {
              modelValue: e.qform.keyName,
              "onUpdate:modelValue":
                t[3] || (t[3] = (g) => (e.qform.keyName = g)),
              autofocus: "",
              "suffix-icon": e.Search,
              placeholder: "Please Enter The Title Keyword",
            },
            null,
            8,
            ["modelValue", "suffix-icon"]
          ),
          f("div", En, [
            b(
              p,
              { size: 22, onClick: e.onAdd },
              { default: k(() => [b(C)]), _: 1 },
              8,
              ["onClick"]
            ),
          ]),
        ]),
        f("div", Sn, [
          b(
            ve,
            { name: "task-fade" },
            {
              default: k(() => [
                (c(!0),
                y(
                  X,
                  null,
                  ce(
                    e.menTaskList,
                    (g, z) => (
                      c(),
                      y(
                        "div",
                        {
                          key: g.id,
                          class: S([
                            "task-mens_item flex-c",
                            { "task-mens_item_s": e.info.id === g.id },
                          ]),
                        },
                        [
                          f(
                            "div",
                            {
                              class: "task-tx flex-c",
                              onClick: (K) => e.onSelectItem(g.id),
                            },
                            [
                              f("div", In, [
                                b(
                                  m,
                                  {
                                    class: "icon mr-10",
                                    src: e.VITE_STATIC_URL + "/task/task.png",
                                    alt: "",
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                                N(" " + D(g.title), 1),
                              ]),
                              f(
                                "span",
                                _n,
                                D(e.filterDate(g.updateTime + "")),
                                1
                              ),
                              f("span", Bn, D(g.taskList.length), 1),
                            ],
                            8,
                            Tn
                          ),
                          b(
                            ee,
                            { effect: "dark", trigger: "click" },
                            {
                              dropdown: k(() => [
                                b(
                                  L,
                                  null,
                                  {
                                    default: k(() => [
                                      b(
                                        $,
                                        {
                                          onClick: me(
                                            (K) => e.onReName(z),
                                            ["stop"]
                                          ),
                                        },
                                        { default: k(() => [Fn]), _: 2 },
                                        1032,
                                        ["onClick"]
                                      ),
                                      b(
                                        $,
                                        {
                                          onClick: me(
                                            (K) => e.onDelTask(z),
                                            ["stop"]
                                          ),
                                        },
                                        { default: k(() => [Dn]), _: 2 },
                                        1032,
                                        ["onClick"]
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                              default: k(() => [
                                b(p, null, { default: k(() => [b(w)]), _: 1 }),
                              ]),
                              _: 2,
                            },
                            1024
                          ),
                        ],
                        2
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            }
          ),
          e.menTaskList.length < 1
            ? (c(), B(q, { key: 0, description: "No Data" }))
            : V("", !0),
        ]),
      ]),
      R(
        (c(),
        y("div", Vn, [
          f("div", An, [
            b(
              l,
              {
                modelValue: e.info.title,
                "onUpdate:modelValue":
                  t[4] || (t[4] = (g) => (e.info.title = g)),
                placeholder: "Please Enter The Title",
                onBlur: e.onTitleBlur,
                onKeyup: ie(e.onTitleBlur, ["enter"]),
              },
              null,
              8,
              ["modelValue", "onBlur", "onKeyup"]
            ),
          ]),
          f("div", zn, [
            e.info.taskList.length > 0
              ? (c(),
                B(
                  te,
                  {
                    key: 0,
                    modelValue: e.info.taskList,
                    "onUpdate:modelValue":
                      t[5] || (t[5] = (g) => (e.info.taskList = g)),
                    fallbackTolerance: 10,
                    onEnd: e.onDragEnd,
                  },
                  {
                    default: k(() => [
                      b(ve, null, {
                        default: k(() => [
                          (c(!0),
                          y(
                            X,
                            null,
                            ce(
                              e.info.taskList,
                              (g, z) => (
                                c(),
                                B(
                                  G,
                                  {
                                    key: z,
                                    ref_for: !0,
                                    ref: e.setRef,
                                    index: z,
                                    item: g,
                                    onOnRemove: e.onRemove,
                                    onOnUpdate: e.onUpdate,
                                    onOnAdd: e.onSpliceAdd,
                                  },
                                  null,
                                  8,
                                  [
                                    "index",
                                    "item",
                                    "onOnRemove",
                                    "onOnUpdate",
                                    "onOnAdd",
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "onEnd"]
                ))
              : (c(),
                B(q, { key: 1, description: "No Data" })),
          ]),
          f("div", Nn, [
            b(p, { size: 28 }, { default: k(() => [b(ne)]), _: 1 }),
            b(
              l,
              {
                ref: "fInput",
                modelValue: e.taskObj.name,
                "onUpdate:modelValue":
                  t[6] || (t[6] = (g) => (e.taskObj.name = g)),
                placeholder:
                  "Input Content，Then Press Enter Key",
                onKeyup: ie(e.onSave, ["enter"]),
              },
              null,
              8,
              ["modelValue", "onKeyup"]
            ),
          ]),
        ])),
        [[H, e.tLoading]]
      ),
    ])),
    [[H, e.loading]]
  );
}
var Rn = ue(hn, [
  ["render", Pn],
  ["__scopeId", "data-v-6d27341e"],
]);
const Un = _({
    name: "Modal",
    components: { TaskList: Rn },
    props: {
      app: {
        type: Object,
        default: () => ({ icon: null, name: null, appName: null, url: null }),
      },
    },
    setup() {
      const { align: e } = Ue();
      return {
        align: e,
        onClose: () => {
          window.appStorage.emit(at.onClose);
        },
      };
    },
  }),
  Gn = { class: "el-dialog__title" };
function On(e, t, n, s, r, d) {
  const o = h("TaskList"),
    p = h("EtabModel");
  return (
    c(),
    B(
      p,
      {
        "model-value": !0,
        "destroy-on-close": "",
        width: "1000px",
        "custom-class": "etab-public-modal task-icon-modal",
        title: "\u{1F3AF}" + e.app.appName,
        onClosed: e.onClose,
      },
      {
        header: k(() => [f("span", Gn, "\u{1F3AF}" + D(e.app.appName), 1)]),
        default: k(() => [b(o)]),
        _: 1,
      },
      8,
      ["title", "onClosed"]
    )
  );
}
var Xn = ue(Un, [["render", On]]);
export { Xn as default };
