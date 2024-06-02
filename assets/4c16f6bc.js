import {
  d as le,
  E as Le,
  o as w,
  f as I,
  g as G,
  ax as Ce,
  bi as Pe,
  aW as j,
  bm as $e,
  aS as Me,
  a1 as Fe,
  e as q,
  b as Ve,
  bb as Te,
  az as de,
  a as g,
  aP as _,
  be as Ne,
  bc as ze,
  w as ee,
  O as ke,
  bH as Ae,
  ay as me,
  bg as se,
  r as z,
  a2 as Ke,
  a5 as we,
  H as C,
  a3 as ae,
  j as ne,
  I as ie,
  c as J,
  l as x,
  k as ve,
  aJ as Re,
  i as be,
  aV as te,
  n as ue,
  B as ge,
  t as We,
  ad as D,
  h as Ye,
  bB as Ue,
  aH as Xe,
  s as Oe,
  ba as ye,
  b9 as Ie,
  bd as He,
  p as je,
  av as Ge,
  aj as Je,
  W as oe,
  a8 as fe,
} from "./75bbe58a.js";
import {
  o as qe,
  a3 as Qe,
  p as Ze,
  f as Be,
  D as Se,
  m as De,
  B as xe,
} from "./index.js";
import { a as _e } from "./e06f0b8d.js";
import { i as pe } from "./8e76c846.js";
const en = le({ name: "Minus" }),
  nn = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  ln = G(
    "path",
    {
      fill: "currentColor",
      d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z",
    },
    null,
    -1
  ),
  tn = [ln];
function an(e, n, a, r, m, d) {
  return w(), I("svg", nn, tn);
}
var on = Le(en, [["render", an]]),
  rn = {
    beforeMount(e, n) {
      let a = null,
        r;
      const m = () => n.value && n.value(),
        d = () => {
          Date.now() - r < 100 && m(), clearInterval(a), (a = null);
        };
      qe(e, "mousedown", (u) => {
        u.button === 0 &&
          ((r = Date.now()),
          Qe(document, "mouseup", d),
          clearInterval(a),
          (a = setInterval(m, 100)));
      });
    },
  };
const sn = Ce({
    id: { type: String, default: void 0 },
    step: { type: Number, default: 1 },
    stepStrictly: { type: Boolean, default: !1 },
    max: { type: Number, default: Number.POSITIVE_INFINITY },
    min: { type: Number, default: Number.NEGATIVE_INFINITY },
    modelValue: { type: Number },
    disabled: { type: Boolean, default: !1 },
    size: { type: String, values: Pe },
    controls: { type: Boolean, default: !0 },
    controlsPosition: { type: String, default: "", values: ["", "right"] },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: (e) => e >= 0 && e === Number.parseInt(`${e}`, 10),
    },
  }),
  un = {
    change: (e, n) => e !== n,
    blur: (e) => e instanceof FocusEvent,
    focus: (e) => e instanceof FocusEvent,
    input: (e) => j(e),
    "update:modelValue": (e) => j(e) || e === void 0,
  },
  dn = le({
    name: "ElInputNumber",
    components: {
      ElInput: $e,
      ElIcon: Me,
      ArrowUp: _e,
      ArrowDown: Fe,
      Plus: Ze,
      Minus: on,
    },
    directives: { RepeatClick: rn },
    props: sn,
    emits: un,
    setup(e, { emit: n }) {
      const a = q(),
        r = Ve({ currentValue: e.modelValue, userInput: null }),
        { t: m } = Be(),
        { formItem: d } = Te(),
        u = de("input-number"),
        s = g(() => N(e.modelValue, -1) < e.min),
        b = g(() => N(e.modelValue) > e.max),
        o = g(() => {
          const l = P(e.step);
          return _(e.precision)
            ? Math.max(P(e.modelValue), l)
            : (l > e.precision, e.precision);
        }),
        c = g(() => e.controls && e.controlsPosition === "right"),
        i = Ne(),
        h = ze(),
        p = g(() => {
          if (r.userInput !== null) return r.userInput;
          let l = r.currentValue;
          if (j(l)) {
            if (Number.isNaN(l)) return "";
            _(e.precision) || (l = l.toFixed(e.precision));
          }
          return l;
        }),
        B = (l, t) => {
          _(t) && (t = o.value);
          const f = l.toString().split(".");
          if (f.length > 1) {
            const V = f[0],
              L = Math.round(+f[1] / 10 ** (f[1].length - t));
            return Number.parseFloat(`${V}.${L}`);
          }
          return Number.parseFloat(`${Math.round(l * 10 ** t) / 10 ** t}`);
        },
        P = (l) => {
          if (_(l)) return 0;
          const t = l.toString(),
            f = t.indexOf(".");
          let V = 0;
          return f !== -1 && (V = t.length - f - 1), V;
        },
        N = (l, t = 1) =>
          j(l)
            ? ((l = j(l) ? l : Number.NaN), B(l + e.step * t))
            : r.currentValue,
        A = () => {
          if (h.value || b.value) return;
          const l = e.modelValue || 0,
            t = N(l);
          E(t);
        },
        K = () => {
          if (h.value || s.value) return;
          const l = e.modelValue || 0,
            t = N(l, -1);
          E(t);
        },
        R = (l, t) => {
          const { max: f, min: V, step: L, precision: W, stepStrictly: Y } = e;
          let y = Number(l);
          return (
            l === null && (y = Number.NaN),
            Number.isNaN(y) ||
              (Y && (y = Math.round(y / L) * L),
              _(W) || (y = B(y, W)),
              (y > f || y < V) &&
                ((y = y > f ? f : V), t && n("update:modelValue", y))),
            y
          );
        },
        E = (l) => {
          var t;
          const f = r.currentValue;
          let V = R(l);
          f !== V &&
            (Number.isNaN(V) && (V = void 0),
            (r.userInput = null),
            n("update:modelValue", V),
            n("input", V),
            n("change", V, f),
            (t = d == null ? void 0 : d.validate) == null ||
              t.call(d, "change").catch((L) => se()),
            (r.currentValue = V));
        },
        U = (l) => (r.userInput = l),
        X = (l) => {
          const t = l !== "" ? Number(l) : "";
          ((j(t) && !Number.isNaN(t)) || l === "") && E(t),
            (r.userInput = null);
        },
        O = () => {
          var l, t;
          (t = (l = a.value) == null ? void 0 : l.focus) == null || t.call(l);
        },
        Q = () => {
          var l, t;
          (t = (l = a.value) == null ? void 0 : l.blur) == null || t.call(l);
        },
        $ = (l) => {
          n("focus", l);
        },
        Z = (l) => {
          var t;
          n("blur", l),
            (t = d == null ? void 0 : d.validate) == null ||
              t.call(d, "blur").catch((f) => se());
        };
      return (
        ee(
          () => e.modelValue,
          (l) => {
            const t = R(l, !0);
            (r.currentValue = t), (r.userInput = null);
          },
          { immediate: !0 }
        ),
        ke(() => {
          var l;
          const t = (l = a.value) == null ? void 0 : l.input;
          if (
            (t.setAttribute("role", "spinbutton"),
            Number.isFinite(e.max)
              ? t.setAttribute("aria-valuemax", String(e.max))
              : t.removeAttribute("aria-valuemax"),
            Number.isFinite(e.min)
              ? t.setAttribute("aria-valuemin", String(e.min))
              : t.removeAttribute("aria-valuemin"),
            t.setAttribute("aria-valuenow", String(r.currentValue)),
            t.setAttribute("aria-disabled", String(h.value)),
            !j(e.modelValue))
          ) {
            let f = Number(e.modelValue);
            Number.isNaN(f) && (f = void 0), n("update:modelValue", f);
          }
        }),
        Ae(() => {
          var l;
          const t = (l = a.value) == null ? void 0 : l.input;
          t == null || t.setAttribute("aria-valuenow", r.currentValue);
        }),
        {
          t: m,
          input: a,
          displayValue: p,
          handleInput: U,
          handleInputChange: X,
          controlsAtRight: c,
          decrease: K,
          increase: A,
          inputNumberSize: i,
          inputNumberDisabled: h,
          maxDisabled: b,
          minDisabled: s,
          focus: O,
          blur: Q,
          handleFocus: $,
          handleBlur: Z,
          ns: u,
        }
      );
    },
  }),
  mn = ["aria-label"],
  cn = ["aria-label"];
function vn(e, n, a, r, m, d) {
  const u = z("arrow-down"),
    s = z("minus"),
    b = z("el-icon"),
    o = z("arrow-up"),
    c = z("plus"),
    i = z("el-input"),
    h = Ke("repeat-click");
  return (
    w(),
    I(
      "div",
      {
        class: C([
          e.ns.b(),
          e.ns.m(e.inputNumberSize),
          e.ns.is("disabled", e.inputNumberDisabled),
          e.ns.is("without-controls", !e.controls),
          e.ns.is("controls-right", e.controlsAtRight),
        ]),
        onDragstart: n[2] || (n[2] = ve(() => {}, ["prevent"])),
      },
      [
        e.controls
          ? we(
              (w(),
              I(
                "span",
                {
                  key: 0,
                  role: "button",
                  "aria-label": e.t("el.inputNumber.decrease"),
                  class: C([
                    e.ns.e("decrease"),
                    e.ns.is("disabled", e.minDisabled),
                  ]),
                  onKeydown:
                    n[0] ||
                    (n[0] = ae(
                      (...p) => e.decrease && e.decrease(...p),
                      ["enter"]
                    )),
                },
                [
                  ne(b, null, {
                    default: ie(() => [
                      e.controlsAtRight
                        ? (w(), J(u, { key: 0 }))
                        : (w(), J(s, { key: 1 })),
                    ]),
                    _: 1,
                  }),
                ],
                42,
                mn
              )),
              [[h, e.decrease]]
            )
          : x("v-if", !0),
        e.controls
          ? we(
              (w(),
              I(
                "span",
                {
                  key: 1,
                  role: "button",
                  "aria-label": e.t("el.inputNumber.increase"),
                  class: C([
                    e.ns.e("increase"),
                    e.ns.is("disabled", e.maxDisabled),
                  ]),
                  onKeydown:
                    n[1] ||
                    (n[1] = ae(
                      (...p) => e.increase && e.increase(...p),
                      ["enter"]
                    )),
                },
                [
                  ne(b, null, {
                    default: ie(() => [
                      e.controlsAtRight
                        ? (w(), J(o, { key: 0 }))
                        : (w(), J(c, { key: 1 })),
                    ]),
                    _: 1,
                  }),
                ],
                42,
                cn
              )),
              [[h, e.increase]]
            )
          : x("v-if", !0),
        ne(
          i,
          {
            id: e.id,
            ref: "input",
            type: "number",
            step: e.step,
            "model-value": e.displayValue,
            placeholder: e.placeholder,
            disabled: e.inputNumberDisabled,
            size: e.inputNumberSize,
            max: e.max,
            min: e.min,
            name: e.name,
            label: e.label,
            "validate-event": !1,
            onKeydown: [
              ae(ve(e.increase, ["prevent"]), ["up"]),
              ae(ve(e.decrease, ["prevent"]), ["down"]),
            ],
            onBlur: e.handleBlur,
            onFocus: e.handleFocus,
            onInput: e.handleInput,
            onChange: e.handleInputChange,
          },
          null,
          8,
          [
            "id",
            "step",
            "model-value",
            "placeholder",
            "disabled",
            "size",
            "max",
            "min",
            "name",
            "label",
            "onKeydown",
            "onBlur",
            "onFocus",
            "onInput",
            "onChange",
          ]
        ),
      ],
      34
    )
  );
}
var fn = me(dn, [
  ["render", vn],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue",
  ],
]);
const bn = Re(fn),
  {
    left: gn,
    down: Vn,
    right: yn,
    up: hn,
    home: wn,
    end: Sn,
    pageUp: pn,
    pageDown: Nn,
  } = De,
  kn = (e, n, a) => {
    const r = q(),
      m = q(!1),
      d = g(() => n.value instanceof Function),
      u = g(() => (d.value && n.value(e.modelValue)) || e.modelValue),
      s = Se(() => {
        a.value && (m.value = !0);
      }, 50),
      b = Se(() => {
        a.value && (m.value = !1);
      }, 50);
    return {
      tooltip: r,
      tooltipVisible: m,
      formatValue: u,
      displayTooltip: s,
      hideTooltip: b,
    };
  },
  In = (e, n, a) => {
    const {
        disabled: r,
        min: m,
        max: d,
        step: u,
        showTooltip: s,
        precision: b,
        sliderSize: o,
        formatTooltip: c,
        emitChange: i,
        resetSize: h,
        updateDragging: p,
      } = be("SliderProvider"),
      {
        tooltip: B,
        tooltipVisible: P,
        formatValue: N,
        displayTooltip: A,
        hideTooltip: K,
      } = kn(e, c, s),
      R = q(),
      E = g(() => `${((e.modelValue - m.value) / (d.value - m.value)) * 100}%`),
      U = g(() => (e.vertical ? { bottom: E.value } : { left: E.value })),
      X = () => {
        (n.hovering = !0), A();
      },
      O = () => {
        (n.hovering = !1), n.dragging || K();
      },
      Q = (v) => {
        r.value ||
          (v.preventDefault(),
          y(v),
          window.addEventListener("mousemove", F),
          window.addEventListener("touchmove", F),
          window.addEventListener("mouseup", k),
          window.addEventListener("touchend", k),
          window.addEventListener("contextmenu", k),
          R.value.focus());
      },
      $ = (v) => {
        r.value ||
          ((n.newPosition =
            Number.parseFloat(E.value) + (v / (d.value - m.value)) * 100),
          T(n.newPosition),
          i());
      },
      Z = () => {
        $(-u.value);
      },
      l = () => {
        $(u.value);
      },
      t = () => {
        $(-u.value * 4);
      },
      f = () => {
        $(u.value * 4);
      },
      V = () => {
        r.value || (T(0), i());
      },
      L = () => {
        r.value || (T(100), i());
      },
      W = (v) => {
        let S = !0;
        [gn, Vn].includes(v.key)
          ? Z()
          : [yn, hn].includes(v.key)
          ? l()
          : v.key === wn
          ? V()
          : v.key === Sn
          ? L()
          : v.key === Nn
          ? t()
          : v.key === pn
          ? f()
          : (S = !1),
          S && v.preventDefault();
      },
      Y = (v) => {
        let S, M;
        return (
          v.type.startsWith("touch")
            ? ((M = v.touches[0].clientY), (S = v.touches[0].clientX))
            : ((M = v.clientY), (S = v.clientX)),
          { clientX: S, clientY: M }
        );
      },
      y = (v) => {
        (n.dragging = !0), (n.isClick = !0);
        const { clientX: S, clientY: M } = Y(v);
        e.vertical ? (n.startY = M) : (n.startX = S),
          (n.startPosition = Number.parseFloat(E.value)),
          (n.newPosition = n.startPosition);
      },
      F = (v) => {
        if (n.dragging) {
          (n.isClick = !1), A(), h();
          let S;
          const { clientX: M, clientY: H } = Y(v);
          e.vertical
            ? ((n.currentY = H),
              (S = ((n.startY - n.currentY) / o.value) * 100))
            : ((n.currentX = M),
              (S = ((n.currentX - n.startX) / o.value) * 100)),
            (n.newPosition = n.startPosition + S),
            T(n.newPosition);
        }
      },
      k = () => {
        n.dragging &&
          (setTimeout(() => {
            (n.dragging = !1),
              n.hovering || K(),
              n.isClick || (T(n.newPosition), i());
          }, 0),
          window.removeEventListener("mousemove", F),
          window.removeEventListener("touchmove", F),
          window.removeEventListener("mouseup", k),
          window.removeEventListener("touchend", k),
          window.removeEventListener("contextmenu", k));
      },
      T = async (v) => {
        if (v === null || Number.isNaN(+v)) return;
        v < 0 ? (v = 0) : v > 100 && (v = 100);
        const S = 100 / ((d.value - m.value) / u.value);
        let H = Math.round(v / S) * S * (d.value - m.value) * 0.01 + m.value;
        (H = Number.parseFloat(H.toFixed(b.value))),
          a(te, H),
          !n.dragging &&
            e.modelValue !== n.oldValue &&
            (n.oldValue = e.modelValue),
          await ue(),
          n.dragging && A(),
          B.value.updatePopper();
      };
    return (
      ee(
        () => n.dragging,
        (v) => {
          p(v);
        }
      ),
      {
        button: R,
        tooltip: B,
        tooltipVisible: P,
        showTooltip: s,
        wrapperStyle: U,
        formatValue: N,
        handleMouseEnter: X,
        handleMouseLeave: O,
        onButtonDown: Q,
        onKeyDown: W,
        setPosition: T,
      }
    );
  },
  Bn = le({
    name: "ElSliderButton",
    components: { ElTooltip: xe },
    props: {
      modelValue: { type: Number, default: 0 },
      vertical: { type: Boolean, default: !1 },
      tooltipClass: { type: String, default: "" },
    },
    emits: [te],
    setup(e, { emit: n }) {
      const a = de("slider"),
        r = Ve({
          hovering: !1,
          dragging: !1,
          isClick: !1,
          startX: 0,
          currentX: 0,
          startY: 0,
          currentY: 0,
          startPosition: 0,
          newPosition: 0,
          oldValue: e.modelValue,
        }),
        {
          button: m,
          tooltip: d,
          showTooltip: u,
          tooltipVisible: s,
          wrapperStyle: b,
          formatValue: o,
          handleMouseEnter: c,
          handleMouseLeave: i,
          onButtonDown: h,
          onKeyDown: p,
          setPosition: B,
        } = In(e, r, n),
        { hovering: P, dragging: N } = ge(r);
      return {
        ns: a,
        button: m,
        tooltip: d,
        tooltipVisible: s,
        showTooltip: u,
        wrapperStyle: b,
        formatValue: o,
        handleMouseEnter: c,
        handleMouseLeave: i,
        onButtonDown: h,
        onKeyDown: p,
        setPosition: B,
        hovering: P,
        dragging: N,
      };
    },
  });
function En(e, n, a, r, m, d) {
  const u = z("el-tooltip");
  return (
    w(),
    I(
      "div",
      {
        ref: "button",
        class: C([
          e.ns.e("button-wrapper"),
          { hover: e.hovering, dragging: e.dragging },
        ]),
        style: D(e.wrapperStyle),
        tabindex: "0",
        onMouseenter:
          n[1] ||
          (n[1] = (...s) => e.handleMouseEnter && e.handleMouseEnter(...s)),
        onMouseleave:
          n[2] ||
          (n[2] = (...s) => e.handleMouseLeave && e.handleMouseLeave(...s)),
        onMousedown:
          n[3] || (n[3] = (...s) => e.onButtonDown && e.onButtonDown(...s)),
        onTouchstart:
          n[4] || (n[4] = (...s) => e.onButtonDown && e.onButtonDown(...s)),
        onFocus:
          n[5] ||
          (n[5] = (...s) => e.handleMouseEnter && e.handleMouseEnter(...s)),
        onBlur:
          n[6] ||
          (n[6] = (...s) => e.handleMouseLeave && e.handleMouseLeave(...s)),
        onKeydown: n[7] || (n[7] = (...s) => e.onKeyDown && e.onKeyDown(...s)),
      },
      [
        ne(
          u,
          {
            ref: "tooltip",
            visible: e.tooltipVisible,
            "onUpdate:visible": n[0] || (n[0] = (s) => (e.tooltipVisible = s)),
            placement: "top",
            "stop-popper-mouse-event": !1,
            "popper-class": e.tooltipClass,
            disabled: !e.showTooltip,
            persistent: "",
          },
          {
            content: ie(() => [G("span", null, We(e.formatValue), 1)]),
            default: ie(() => [
              G(
                "div",
                {
                  class: C([
                    e.ns.e("button"),
                    { hover: e.hovering, dragging: e.dragging },
                  ]),
                },
                null,
                2
              ),
            ]),
            _: 1,
          },
          8,
          ["visible", "popper-class", "disabled"]
        ),
      ],
      38
    )
  );
}
var Ln = me(Bn, [
  ["render", En],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue",
  ],
]);
const Cn = le({
  name: "ElMarker",
  props: { mark: { type: [String, Object], default: () => {} } },
  setup(e) {
    const n = de("slider"),
      a = g(() => (typeof e.mark == "string" ? e.mark : e.mark.label));
    return { ns: n, label: a };
  },
  render() {
    var e;
    return Ye(
      "div",
      {
        class: this.ns.e("marks-text"),
        style: (e = this.mark) == null ? void 0 : e.style,
      },
      this.label
    );
  },
});
var Pn = me(Cn, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/slider/src/marker.vue",
  ],
]);
const $n = (e) =>
    g(() =>
      e.marks
        ? Object.keys(e.marks)
            .map(parseFloat)
            .sort((a, r) => a - r)
            .filter((a) => a <= e.max && a >= e.min)
            .map((a) => ({
              point: a,
              position: ((a - e.min) * 100) / (e.max - e.min),
              mark: e.marks[a],
            }))
        : []
    ),
  Mn = (e, n, a) => {
    const r = be(Ue, {}),
      m = be(Xe, {}),
      d = Oe(),
      u = q(),
      s = q(),
      b = { firstButton: u, secondButton: s },
      o = g(() => e.disabled || r.disabled || !1),
      c = g(() => Math.min(n.firstValue, n.secondValue)),
      i = g(() => Math.max(n.firstValue, n.secondValue)),
      h = g(() =>
        e.range
          ? `${(100 * (i.value - c.value)) / (e.max - e.min)}%`
          : `${(100 * (n.firstValue - e.min)) / (e.max - e.min)}%`
      ),
      p = g(() =>
        e.range ? `${(100 * (c.value - e.min)) / (e.max - e.min)}%` : "0%"
      ),
      B = g(() => (e.vertical ? { height: e.height } : {})),
      P = g(() =>
        e.vertical
          ? { height: h.value, bottom: p.value }
          : { width: h.value, left: p.value }
      ),
      N = () => {
        d.value &&
          (n.sliderSize = d.value[`client${e.vertical ? "Height" : "Width"}`]);
      },
      A = (l) => {
        const t = e.min + (l * (e.max - e.min)) / 100;
        if (!e.range) return u;
        let f;
        return (
          Math.abs(c.value - t) < Math.abs(i.value - t)
            ? (f =
                n.firstValue < n.secondValue ? "firstButton" : "secondButton")
            : (f =
                n.firstValue > n.secondValue ? "firstButton" : "secondButton"),
          b[f]
        );
      },
      K = (l) => {
        const t = A(l);
        return t.value.setPosition(l), t;
      },
      R = (l) => {
        (n.firstValue = l), U(e.range ? [c.value, i.value] : l);
      },
      E = (l) => {
        (n.secondValue = l), e.range && U([c.value, i.value]);
      },
      U = (l) => {
        a(te, l), a(ye, l);
      },
      X = async () => {
        await ue(), a(Ie, e.range ? [c.value, i.value] : e.modelValue);
      },
      O = (l) => {
        var t, f, V, L, W, Y;
        if (o.value || n.dragging) return;
        N();
        let y = 0;
        if (e.vertical) {
          const F =
            (V =
              (f = (t = l.touches) == null ? void 0 : t.item(0)) == null
                ? void 0
                : f.clientY) != null
              ? V
              : l.clientY;
          y =
            ((d.value.getBoundingClientRect().bottom - F) / n.sliderSize) * 100;
        } else {
          const F =
              (Y =
                (W = (L = l.touches) == null ? void 0 : L.item(0)) == null
                  ? void 0
                  : W.clientX) != null
                ? Y
                : l.clientX,
            k = d.value.getBoundingClientRect().left;
          y = ((F - k) / n.sliderSize) * 100;
        }
        if (!(y < 0 || y > 100)) return K(y);
      };
    return {
      elFormItem: m,
      slider: d,
      firstButton: u,
      secondButton: s,
      sliderDisabled: o,
      minValue: c,
      maxValue: i,
      runwayStyle: B,
      barStyle: P,
      resetSize: N,
      setPosition: K,
      emitChange: X,
      onSliderWrapperPrevent: (l) => {
        var t, f;
        (((t = b.firstButton.value) == null ? void 0 : t.dragging) ||
          ((f = b.secondButton.value) == null ? void 0 : f.dragging)) &&
          l.preventDefault();
      },
      onSliderClick: (l) => {
        O(l) && X();
      },
      onSliderDown: async (l) => {
        const t = O(l);
        t && (await ue(), t.value.onButtonDown(l));
      },
      setFirstValue: R,
      setSecondValue: E,
    };
  },
  Fn = (e, n, a, r) => ({
    stops: g(() => {
      if (!e.showStops || e.min > e.max) return [];
      if (e.step === 0) return [];
      const u = (e.max - e.min) / e.step,
        s = (100 * e.step) / (e.max - e.min),
        b = Array.from({ length: u - 1 }).map((o, c) => (c + 1) * s);
      return e.range
        ? b.filter(
            (o) =>
              o < (100 * (a.value - e.min)) / (e.max - e.min) ||
              o > (100 * (r.value - e.min)) / (e.max - e.min)
          )
        : b.filter((o) => o > (100 * (n.firstValue - e.min)) / (e.max - e.min));
    }),
    getStopStyle: (u) => (e.vertical ? { bottom: `${u}%` } : { left: `${u}%` }),
  }),
  Tn = le({
    name: "ElSlider",
    components: { ElInputNumber: bn, SliderButton: Ln, SliderMarker: Pn },
    props: {
      modelValue: { type: [Number, Array], default: 0 },
      id: { type: String, default: void 0 },
      min: { type: Number, default: 0 },
      max: { type: Number, default: 100 },
      step: { type: Number, default: 1 },
      showInput: { type: Boolean, default: !1 },
      showInputControls: { type: Boolean, default: !0 },
      size: { type: String, validator: pe },
      inputSize: { type: String, validator: pe },
      showStops: { type: Boolean, default: !1 },
      showTooltip: { type: Boolean, default: !0 },
      formatTooltip: { type: Function, default: void 0 },
      disabled: { type: Boolean, default: !1 },
      range: { type: Boolean, default: !1 },
      vertical: { type: Boolean, default: !1 },
      height: { type: String, default: "" },
      debounce: { type: Number, default: 300 },
      label: { type: String, default: void 0 },
      rangeStartLabel: { type: String, default: void 0 },
      rangeEndLabel: { type: String, default: void 0 },
      formatValueText: { type: Function, default: void 0 },
      tooltipClass: { type: String, default: void 0 },
      marks: Object,
    },
    emits: [te, Ie, ye],
    setup(e, { emit: n }) {
      const a = de("slider"),
        { t: r } = Be(),
        m = Ve({
          firstValue: 0,
          secondValue: 0,
          oldValue: 0,
          dragging: !1,
          sliderSize: 1,
        }),
        {
          elFormItem: d,
          slider: u,
          firstButton: s,
          secondButton: b,
          sliderDisabled: o,
          minValue: c,
          maxValue: i,
          runwayStyle: h,
          barStyle: p,
          resetSize: B,
          emitChange: P,
          onSliderWrapperPrevent: N,
          onSliderClick: A,
          onSliderDown: K,
          setFirstValue: R,
          setSecondValue: E,
        } = Mn(e, m, n),
        { stops: U, getStopStyle: X } = Fn(e, m, c, i),
        { inputId: O, isLabeledByFormItem: Q } = He(e, { formItemContext: d }),
        $ = Ne(),
        Z = g(() => e.inputSize || $.value),
        l = g(
          () =>
            e.label || r("el.slider.defaultLabel", { min: e.min, max: e.max })
        ),
        t = g(() =>
          e.range
            ? e.rangeStartLabel || r("el.slider.defaultRangeStartLabel")
            : l.value
        ),
        f = g(() =>
          e.formatValueText ? e.formatValueText(k.value) : `${k.value}`
        ),
        V = g(() => e.rangeEndLabel || r("el.slider.defaultRangeEndLabel")),
        L = g(() =>
          e.formatValueText ? e.formatValueText(T.value) : `${T.value}`
        ),
        W = g(() => [
          a.b(),
          a.m($.value),
          a.is("vertical", e.vertical),
          { [a.m("with-input")]: e.showInput },
        ]),
        Y = $n(e);
      zn(e, m, c, i, n, d);
      const y = g(() => {
          const ce = [e.min, e.max, e.step].map((Ee) => {
            const he = `${Ee}`.split(".")[1];
            return he ? he.length : 0;
          });
          return Math.max.apply(null, ce);
        }),
        { sliderWrapper: F } = An(e, m, B),
        {
          firstValue: k,
          secondValue: T,
          oldValue: v,
          dragging: S,
          sliderSize: M,
        } = ge(m),
        H = (ce) => {
          m.dragging = ce;
        };
      return (
        je("SliderProvider", {
          ...ge(e),
          sliderSize: M,
          disabled: o,
          precision: y,
          emitChange: P,
          resetSize: B,
          updateDragging: H,
        }),
        {
          ns: a,
          firstValue: k,
          secondValue: T,
          oldValue: v,
          dragging: S,
          sliderSize: M,
          inputId: O,
          isLabeledByFormItem: Q,
          elFormItem: d,
          slider: u,
          groupLabel: l,
          firstButton: s,
          firstButtonLabel: t,
          firstValueText: f,
          secondButton: b,
          secondButtonLabel: V,
          secondValueText: L,
          sliderDisabled: o,
          runwayStyle: h,
          barStyle: p,
          emitChange: P,
          onSliderClick: A,
          onSliderWrapperPrevent: N,
          onSliderDown: K,
          getStopStyle: X,
          setFirstValue: R,
          setSecondValue: E,
          stops: U,
          markList: Y,
          sliderWrapper: F,
          sliderWrapperSize: $,
          sliderInputSize: Z,
          sliderKls: W,
        }
      );
    },
  }),
  zn = (e, n, a, r, m, d) => {
    const u = (o) => {
        m(te, o), m(ye, o);
      },
      s = () =>
        e.range
          ? ![a.value, r.value].every((o, c) => o === n.oldValue[c])
          : e.modelValue !== n.oldValue,
      b = () => {
        var o, c;
        if (e.min > e.max) {
          Je("Slider", "min should not be greater than max.");
          return;
        }
        const i = e.modelValue;
        e.range && Array.isArray(i)
          ? i[1] < e.min
            ? u([e.min, e.min])
            : i[0] > e.max
            ? u([e.max, e.max])
            : i[0] < e.min
            ? u([e.min, i[1]])
            : i[1] > e.max
            ? u([i[0], e.max])
            : ((n.firstValue = i[0]),
              (n.secondValue = i[1]),
              s() &&
                ((o = d.validate) == null ||
                  o.call(d, "change").catch((h) => se()),
                (n.oldValue = i.slice())))
          : !e.range &&
            typeof i == "number" &&
            !Number.isNaN(i) &&
            (i < e.min
              ? u(e.min)
              : i > e.max
              ? u(e.max)
              : ((n.firstValue = i),
                s() &&
                  ((c = d.validate) == null ||
                    c.call(d, "change").catch((h) => se()),
                  (n.oldValue = i))));
      };
    b(),
      ee(
        () => n.dragging,
        (o) => {
          o || b();
        }
      ),
      ee(
        () => e.modelValue,
        (o, c) => {
          n.dragging ||
            (Array.isArray(o) &&
              Array.isArray(c) &&
              o.every((i, h) => i === c[h]) &&
              n.firstValue === o[0] &&
              n.secondValue === o[1]) ||
            b();
        },
        { deep: !0 }
      ),
      ee(
        () => [e.min, e.max],
        () => {
          b();
        }
      );
  },
  An = (e, n, a) => {
    const r = q();
    return (
      ke(async () => {
        e.range
          ? (Array.isArray(e.modelValue)
              ? ((n.firstValue = Math.max(e.min, e.modelValue[0])),
                (n.secondValue = Math.min(e.max, e.modelValue[1])))
              : ((n.firstValue = e.min), (n.secondValue = e.max)),
            (n.oldValue = [n.firstValue, n.secondValue]))
          : (typeof e.modelValue != "number" || Number.isNaN(e.modelValue)
              ? (n.firstValue = e.min)
              : (n.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue))),
            (n.oldValue = n.firstValue)),
          window.addEventListener("resize", a),
          await ue(),
          a();
      }),
      Ge(() => {
        window.removeEventListener("resize", a);
      }),
      { sliderWrapper: r }
    );
  },
  Kn = ["id", "role", "aria-label", "aria-labelledby"],
  Rn = { key: 1 };
function Wn(e, n, a, r, m, d) {
  const u = z("slider-button"),
    s = z("slider-marker"),
    b = z("el-input-number");
  return (
    w(),
    I(
      "div",
      {
        id: e.range ? e.inputId : void 0,
        ref: "sliderWrapper",
        class: C(e.sliderKls),
        role: e.range ? "group" : void 0,
        "aria-label": e.range && !e.isLabeledByFormItem ? e.groupLabel : void 0,
        "aria-labelledby":
          e.range && e.isLabeledByFormItem ? e.elFormItem.labelId : void 0,
        onTouchstart:
          n[2] ||
          (n[2] = (...o) =>
            e.onSliderWrapperPrevent && e.onSliderWrapperPrevent(...o)),
        onTouchmove:
          n[3] ||
          (n[3] = (...o) =>
            e.onSliderWrapperPrevent && e.onSliderWrapperPrevent(...o)),
      },
      [
        G(
          "div",
          {
            ref: "slider",
            class: C([
              e.ns.e("runway"),
              { "show-input": e.showInput && !e.range },
              e.ns.is("disabled", e.sliderDisabled),
            ]),
            style: D(e.runwayStyle),
            onMousedown:
              n[0] || (n[0] = (...o) => e.onSliderDown && e.onSliderDown(...o)),
            onTouchstart:
              n[1] || (n[1] = (...o) => e.onSliderDown && e.onSliderDown(...o)),
          },
          [
            G(
              "div",
              { class: C(e.ns.e("bar")), style: D(e.barStyle) },
              null,
              6
            ),
            ne(
              u,
              {
                id: e.range ? void 0 : e.inputId,
                ref: "firstButton",
                "model-value": e.firstValue,
                vertical: e.vertical,
                "tooltip-class": e.tooltipClass,
                role: "slider",
                "aria-label":
                  e.range || !e.isLabeledByFormItem
                    ? e.firstButtonLabel
                    : void 0,
                "aria-labelledby":
                  !e.range && e.isLabeledByFormItem
                    ? e.elFormItem.labelId
                    : void 0,
                "aria-valuemin": e.min,
                "aria-valuemax": e.range ? e.secondValue : e.max,
                "aria-valuenow": e.firstValue,
                "aria-valuetext": e.firstValueText,
                "aria-orientation": e.vertical ? "vertical" : "horizontal",
                "aria-disabled": e.sliderDisabled,
                "onUpdate:modelValue": e.setFirstValue,
              },
              null,
              8,
              [
                "id",
                "model-value",
                "vertical",
                "tooltip-class",
                "aria-label",
                "aria-labelledby",
                "aria-valuemin",
                "aria-valuemax",
                "aria-valuenow",
                "aria-valuetext",
                "aria-orientation",
                "aria-disabled",
                "onUpdate:modelValue",
              ]
            ),
            e.range
              ? (w(),
                J(
                  u,
                  {
                    key: 0,
                    ref: "secondButton",
                    "model-value": e.secondValue,
                    vertical: e.vertical,
                    "tooltip-class": e.tooltipClass,
                    role: "slider",
                    "aria-label": e.secondButtonLabel,
                    "aria-valuemin": e.firstValue,
                    "aria-valuemax": e.max,
                    "aria-valuenow": e.secondValue,
                    "aria-valuetext": e.secondValueText,
                    "aria-orientation": e.vertical ? "vertical" : "horizontal",
                    "aria-disabled": e.sliderDisabled,
                    "onUpdate:modelValue": e.setSecondValue,
                  },
                  null,
                  8,
                  [
                    "model-value",
                    "vertical",
                    "tooltip-class",
                    "aria-label",
                    "aria-valuemin",
                    "aria-valuemax",
                    "aria-valuenow",
                    "aria-valuetext",
                    "aria-orientation",
                    "aria-disabled",
                    "onUpdate:modelValue",
                  ]
                ))
              : x("v-if", !0),
            e.showStops
              ? (w(),
                I("div", Rn, [
                  (w(!0),
                  I(
                    oe,
                    null,
                    fe(
                      e.stops,
                      (o, c) => (
                        w(),
                        I(
                          "div",
                          {
                            key: c,
                            class: C(e.ns.e("stop")),
                            style: D(e.getStopStyle(o)),
                          },
                          null,
                          6
                        )
                      )
                    ),
                    128
                  )),
                ]))
              : x("v-if", !0),
            e.markList.length > 0
              ? (w(),
                I(
                  oe,
                  { key: 2 },
                  [
                    G("div", null, [
                      (w(!0),
                      I(
                        oe,
                        null,
                        fe(
                          e.markList,
                          (o, c) => (
                            w(),
                            I(
                              "div",
                              {
                                key: c,
                                style: D(e.getStopStyle(o.position)),
                                class: C([
                                  e.ns.e("stop"),
                                  e.ns.e("marks-stop"),
                                ]),
                              },
                              null,
                              6
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    G(
                      "div",
                      { class: C(e.ns.e("marks")) },
                      [
                        (w(!0),
                        I(
                          oe,
                          null,
                          fe(
                            e.markList,
                            (o, c) => (
                              w(),
                              J(
                                s,
                                {
                                  key: c,
                                  mark: o.mark,
                                  style: D(e.getStopStyle(o.position)),
                                },
                                null,
                                8,
                                ["mark", "style"]
                              )
                            )
                          ),
                          128
                        )),
                      ],
                      2
                    ),
                  ],
                  64
                ))
              : x("v-if", !0),
          ],
          38
        ),
        e.showInput && !e.range
          ? (w(),
            J(
              b,
              {
                key: 0,
                ref: "input",
                "model-value": e.firstValue,
                class: C(e.ns.e("input")),
                step: e.step,
                disabled: e.sliderDisabled,
                controls: e.showInputControls,
                min: e.min,
                max: e.max,
                debounce: e.debounce,
                size: e.sliderInputSize,
                "onUpdate:modelValue": e.setFirstValue,
                onChange: e.emitChange,
              },
              null,
              8,
              [
                "model-value",
                "class",
                "step",
                "disabled",
                "controls",
                "min",
                "max",
                "debounce",
                "size",
                "onUpdate:modelValue",
                "onChange",
              ]
            ))
          : x("v-if", !0),
      ],
      42,
      Kn
    )
  );
}
var re = me(Tn, [
  ["render", Wn],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/slider/src/index.vue",
  ],
]);
re.install = (e) => {
  e.component(re.name, re);
};
const Yn = re,
  jn = Yn;
export { jn as E };
