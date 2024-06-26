import {
  af as Ne,
  d as O,
  s as se,
  e as g,
  w as y,
  O as X,
  ay as W,
  o as C,
  f as T,
  g as k,
  ad as I,
  H as _,
  v as te,
  a as F,
  i as ee,
  bt as re,
  bo as Ae,
  W as Te,
  a8 as Ve,
  bm as Fe,
  aS as Ie,
  a9 as Pe,
  a1 as Ee,
  aV as G,
  az as He,
  bB as Be,
  aH as De,
  bd as Le,
  b as Oe,
  be as We,
  n as J,
  p as ze,
  bg as ie,
  r as M,
  a2 as Re,
  c as R,
  I as P,
  a5 as ce,
  j as A,
  l as j,
  a3 as ue,
  aa as he,
  t as de,
  aL as je,
} from "./75bbe58a.js";
import { E as Ke } from "./04ee1aa4.js";
import { o as E, g as K, z as oe, B as qe, f as Ue, D as Xe } from "./index.js";
import { C as Ye } from "./ceaf704c.js";
import { i as Ze } from "./8e76c846.js";
let Q = !1;
function L(e, t) {
  if (!Ne) return;
  const o = function (l) {
      var a;
      (a = t.drag) == null || a.call(t, l);
    },
    n = function (l) {
      var a;
      K(document, "mousemove", o),
        K(document, "mouseup", n),
        K(document, "touchmove", o),
        K(document, "touchend", n),
        (document.onselectstart = null),
        (document.ondragstart = null),
        (Q = !1),
        (a = t.end) == null || a.call(t, l);
    },
    s = function (l) {
      var a;
      Q ||
        (l.preventDefault(),
        (document.onselectstart = () => !1),
        (document.ondragstart = () => !1),
        E(document, "mousemove", o),
        E(document, "mouseup", n),
        E(document, "touchmove", o),
        E(document, "touchend", n),
        (Q = !0),
        (a = t.start) == null || a.call(t, l));
    };
  E(e, "mousedown", s), E(e, "touchstart", s);
}
const Ge = O({
  name: "ElColorAlphaSlider",
  props: {
    color: { type: Object, required: !0 },
    vertical: { type: Boolean, default: !1 },
  },
  setup(e) {
    const t = te(),
      o = se(null),
      n = se(null),
      s = g(0),
      l = g(0),
      a = g(null);
    y(
      () => e.color.get("alpha"),
      () => {
        h();
      }
    ),
      y(
        () => e.color.value,
        () => {
          h();
        }
      );
    function c() {
      if (e.vertical) return 0;
      const r = t.vnode.el,
        u = e.color.get("alpha");
      return r
        ? Math.round((u * (r.offsetWidth - o.value.offsetWidth / 2)) / 100)
        : 0;
    }
    function i() {
      const r = t.vnode.el;
      if (!e.vertical) return 0;
      const u = e.color.get("alpha");
      return r
        ? Math.round((u * (r.offsetHeight - o.value.offsetHeight / 2)) / 100)
        : 0;
    }
    function b() {
      if (e.color && e.color.value) {
        const { r, g: u, b: m } = e.color.toRgb();
        return `linear-gradient(to right, rgba(${r}, ${u}, ${m}, 0) 0%, rgba(${r}, ${u}, ${m}, 1) 100%)`;
      }
      return null;
    }
    function p(r) {
      r.target !== o.value && v(r);
    }
    function v(r) {
      const m = t.vnode.el.getBoundingClientRect(),
        { clientX: w, clientY: $ } = oe(r);
      if (e.vertical) {
        let d = $ - m.top;
        (d = Math.max(o.value.offsetHeight / 2, d)),
          (d = Math.min(d, m.height - o.value.offsetHeight / 2)),
          e.color.set(
            "alpha",
            Math.round(
              ((d - o.value.offsetHeight / 2) /
                (m.height - o.value.offsetHeight)) *
                100
            )
          );
      } else {
        let d = w - m.left;
        (d = Math.max(o.value.offsetWidth / 2, d)),
          (d = Math.min(d, m.width - o.value.offsetWidth / 2)),
          e.color.set(
            "alpha",
            Math.round(
              ((d - o.value.offsetWidth / 2) /
                (m.width - o.value.offsetWidth)) *
                100
            )
          );
      }
    }
    function h() {
      (s.value = c()), (l.value = i()), (a.value = b());
    }
    return (
      X(() => {
        const r = {
          drag: (u) => {
            v(u);
          },
          end: (u) => {
            v(u);
          },
        };
        L(n.value, r), L(o.value, r), h();
      }),
      {
        thumb: o,
        bar: n,
        thumbLeft: s,
        thumbTop: l,
        background: a,
        handleClick: p,
        update: h,
      }
    );
  },
});
function Je(e, t, o, n, s, l) {
  return (
    C(),
    T(
      "div",
      { class: _(["el-color-alpha-slider", { "is-vertical": e.vertical }]) },
      [
        k(
          "div",
          {
            ref: "bar",
            class: "el-color-alpha-slider__bar",
            style: I({ background: e.background }),
            onClick:
              t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a)),
          },
          null,
          4
        ),
        k(
          "div",
          {
            ref: "thumb",
            class: "el-color-alpha-slider__thumb",
            style: I({ left: e.thumbLeft + "px", top: e.thumbTop + "px" }),
          },
          null,
          4
        ),
      ],
      2
    )
  );
}
var Qe = W(Ge, [
  ["render", Je],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue",
  ],
]);
const xe = O({
  name: "ElColorHueSlider",
  props: { color: { type: Object, required: !0 }, vertical: Boolean },
  setup(e) {
    const t = te(),
      o = g(null),
      n = g(null),
      s = g(0),
      l = g(0),
      a = F(() => e.color.get("hue"));
    y(
      () => a.value,
      () => {
        v();
      }
    );
    function c(h) {
      h.target !== o.value && i(h);
    }
    function i(h) {
      const u = t.vnode.el.getBoundingClientRect(),
        { clientX: m, clientY: w } = oe(h);
      let $;
      if (e.vertical) {
        let d = w - u.top;
        (d = Math.min(d, u.height - o.value.offsetHeight / 2)),
          (d = Math.max(o.value.offsetHeight / 2, d)),
          ($ = Math.round(
            ((d - o.value.offsetHeight / 2) /
              (u.height - o.value.offsetHeight)) *
              360
          ));
      } else {
        let d = m - u.left;
        (d = Math.min(d, u.width - o.value.offsetWidth / 2)),
          (d = Math.max(o.value.offsetWidth / 2, d)),
          ($ = Math.round(
            ((d - o.value.offsetWidth / 2) / (u.width - o.value.offsetWidth)) *
              360
          ));
      }
      e.color.set("hue", $);
    }
    function b() {
      const h = t.vnode.el;
      if (e.vertical) return 0;
      const r = e.color.get("hue");
      return h
        ? Math.round((r * (h.offsetWidth - o.value.offsetWidth / 2)) / 360)
        : 0;
    }
    function p() {
      const h = t.vnode.el;
      if (!e.vertical) return 0;
      const r = e.color.get("hue");
      return h
        ? Math.round((r * (h.offsetHeight - o.value.offsetHeight / 2)) / 360)
        : 0;
    }
    function v() {
      (s.value = b()), (l.value = p());
    }
    return (
      X(() => {
        const h = {
          drag: (r) => {
            i(r);
          },
          end: (r) => {
            i(r);
          },
        };
        L(n.value, h), L(o.value, h), v();
      }),
      {
        bar: n,
        thumb: o,
        thumbLeft: s,
        thumbTop: l,
        hueValue: a,
        handleClick: c,
        update: v,
      }
    );
  },
});
function et(e, t, o, n, s, l) {
  return (
    C(),
    T(
      "div",
      { class: _(["el-color-hue-slider", { "is-vertical": e.vertical }]) },
      [
        k(
          "div",
          {
            ref: "bar",
            class: "el-color-hue-slider__bar",
            onClick:
              t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a)),
          },
          null,
          512
        ),
        k(
          "div",
          {
            ref: "thumb",
            class: "el-color-hue-slider__thumb",
            style: I({ left: e.thumbLeft + "px", top: e.thumbTop + "px" }),
          },
          null,
          4
        ),
      ],
      2
    )
  );
}
var tt = W(xe, [
  ["render", et],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue",
  ],
]);
const ge = Symbol(),
  ot = () => ee(ge),
  fe = function (e, t, o) {
    return [e, (t * o) / ((e = (2 - t) * o) < 1 ? e : 2 - e) || 0, e / 2];
  },
  nt = function (e) {
    return (
      typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1
    );
  },
  lt = function (e) {
    return typeof e == "string" && e.includes("%");
  },
  H = function (e, t) {
    nt(e) && (e = "100%");
    const o = lt(e);
    return (
      (e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`)))),
      o && (e = Number.parseInt(`${e * t}`, 10) / 100),
      Math.abs(e - t) < 1e-6 ? 1 : (e % t) / Number.parseFloat(t)
    );
  },
  me = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" },
  q = function (e) {
    e = Math.min(Math.round(e), 255);
    const t = Math.floor(e / 16),
      o = e % 16;
    return `${me[t] || t}${me[o] || o}`;
  },
  pe = function ({ r: e, g: t, b: o }) {
    return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+o)
      ? ""
      : `#${q(e)}${q(t)}${q(o)}`;
  },
  x = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 },
  V = function (e) {
    return e.length === 2
      ? (x[e[0].toUpperCase()] || +e[0]) * 16 + (x[e[1].toUpperCase()] || +e[1])
      : x[e[1].toUpperCase()] || +e[1];
  },
  at = function (e, t, o) {
    (t = t / 100), (o = o / 100);
    let n = t;
    const s = Math.max(o, 0.01);
    (o *= 2), (t *= o <= 1 ? o : 2 - o), (n *= s <= 1 ? s : 2 - s);
    const l = (o + t) / 2,
      a = o === 0 ? (2 * n) / (s + n) : (2 * t) / (o + t);
    return { h: e, s: a * 100, v: l * 100 };
  },
  ve = function (e, t, o) {
    (e = H(e, 255)), (t = H(t, 255)), (o = H(o, 255));
    const n = Math.max(e, t, o),
      s = Math.min(e, t, o);
    let l;
    const a = n,
      c = n - s,
      i = n === 0 ? 0 : c / n;
    if (n === s) l = 0;
    else {
      switch (n) {
        case e: {
          l = (t - o) / c + (t < o ? 6 : 0);
          break;
        }
        case t: {
          l = (o - e) / c + 2;
          break;
        }
        case o: {
          l = (e - t) / c + 4;
          break;
        }
      }
      l /= 6;
    }
    return { h: l * 360, s: i * 100, v: a * 100 };
  },
  B = function (e, t, o) {
    (e = H(e, 360) * 6), (t = H(t, 100)), (o = H(o, 100));
    const n = Math.floor(e),
      s = e - n,
      l = o * (1 - t),
      a = o * (1 - s * t),
      c = o * (1 - (1 - s) * t),
      i = n % 6,
      b = [o, a, l, l, c, o][i],
      p = [c, o, o, a, l, l][i],
      v = [l, l, c, o, o, a][i];
    return {
      r: Math.round(b * 255),
      g: Math.round(p * 255),
      b: Math.round(v * 255),
    };
  };
class D {
  constructor(t) {
    (this._hue = 0),
      (this._saturation = 100),
      (this._value = 100),
      (this._alpha = 100),
      (this.enableAlpha = !1),
      (this.format = "hex"),
      (this.value = ""),
      (t = t || {});
    for (const o in t) re(t, o) && (this[o] = t[o]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, o) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const n in t) re(t, n) && this.set(n, t[n]);
      return;
    }
    (this[`_${t}`] = o), this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return B(this._hue, this._saturation, this._value);
  }
  fromString(t) {
    if (!t) {
      (this._hue = 0),
        (this._saturation = 100),
        (this._value = 100),
        this.doOnChange();
      return;
    }
    const o = (n, s, l) => {
      (this._hue = Math.max(0, Math.min(360, n))),
        (this._saturation = Math.max(0, Math.min(100, s))),
        (this._value = Math.max(0, Math.min(100, l))),
        this.doOnChange();
    };
    if (t.includes("hsl")) {
      const n = t
        .replace(/hsla|hsl|\(|\)/gm, "")
        .split(/\s|,/g)
        .filter((s) => s !== "")
        .map((s, l) => (l > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10)));
      if (
        (n.length === 4
          ? (this._alpha = Number.parseFloat(n[3]) * 100)
          : n.length === 3 && (this._alpha = 100),
        n.length >= 3)
      ) {
        const { h: s, s: l, v: a } = at(n[0], n[1], n[2]);
        o(s, l, a);
      }
    } else if (t.includes("hsv")) {
      const n = t
        .replace(/hsva|hsv|\(|\)/gm, "")
        .split(/\s|,/g)
        .filter((s) => s !== "")
        .map((s, l) => (l > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10)));
      n.length === 4
        ? (this._alpha = Number.parseFloat(n[3]) * 100)
        : n.length === 3 && (this._alpha = 100),
        n.length >= 3 && o(n[0], n[1], n[2]);
    } else if (t.includes("rgb")) {
      const n = t
        .replace(/rgba|rgb|\(|\)/gm, "")
        .split(/\s|,/g)
        .filter((s) => s !== "")
        .map((s, l) => (l > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10)));
      if (
        (n.length === 4
          ? (this._alpha = Number.parseFloat(n[3]) * 100)
          : n.length === 3 && (this._alpha = 100),
        n.length >= 3)
      ) {
        const { h: s, s: l, v: a } = ve(n[0], n[1], n[2]);
        o(s, l, a);
      }
    } else if (t.includes("#")) {
      const n = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(n)) return;
      let s, l, a;
      n.length === 3
        ? ((s = V(n[0] + n[0])), (l = V(n[1] + n[1])), (a = V(n[2] + n[2])))
        : (n.length === 6 || n.length === 8) &&
          ((s = V(n.slice(0, 2))),
          (l = V(n.slice(2, 4))),
          (a = V(n.slice(4, 6)))),
        n.length === 8
          ? (this._alpha = (V(n.slice(6)) / 255) * 100)
          : (n.length === 3 || n.length === 6) && (this._alpha = 100);
      const { h: c, s: i, v: b } = ve(s, l, a);
      o(c, i, b);
    }
  }
  compare(t) {
    return (
      Math.abs(t._hue - this._hue) < 2 &&
      Math.abs(t._saturation - this._saturation) < 1 &&
      Math.abs(t._value - this._value) < 1 &&
      Math.abs(t._alpha - this._alpha) < 1
    );
  }
  doOnChange() {
    const { _hue: t, _saturation: o, _value: n, _alpha: s, format: l } = this;
    if (this.enableAlpha)
      switch (l) {
        case "hsl": {
          const a = fe(t, o / 100, n / 100);
          this.value = `hsla(${t}, ${Math.round(a[1] * 100)}%, ${Math.round(
            a[2] * 100
          )}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${t}, ${Math.round(o)}%, ${Math.round(n)}%, ${
            this.get("alpha") / 100
          })`;
          break;
        }
        case "hex": {
          this.value = `${pe(B(t, o, n))}${q((s * 255) / 100)}`;
          break;
        }
        default: {
          const { r: a, g: c, b: i } = B(t, o, n);
          this.value = `rgba(${a}, ${c}, ${i}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (l) {
        case "hsl": {
          const a = fe(t, o / 100, n / 100);
          this.value = `hsl(${t}, ${Math.round(a[1] * 100)}%, ${Math.round(
            a[2] * 100
          )}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${t}, ${Math.round(o)}%, ${Math.round(n)}%)`;
          break;
        }
        case "rgb": {
          const { r: a, g: c, b: i } = B(t, o, n);
          this.value = `rgb(${a}, ${c}, ${i})`;
          break;
        }
        default:
          this.value = pe(B(t, o, n));
      }
  }
}
const st = O({
    props: {
      colors: { type: Array, required: !0 },
      color: { type: Object, required: !0 },
    },
    setup(e) {
      const { currentColor: t } = ot(),
        o = g(s(e.colors, e.color));
      y(
        () => t.value,
        (l) => {
          const a = new D();
          a.fromString(l),
            o.value.forEach((c) => {
              c.selected = a.compare(c);
            });
        }
      ),
        Ae(() => {
          o.value = s(e.colors, e.color);
        });
      function n(l) {
        e.color.fromString(e.colors[l]);
      }
      function s(l, a) {
        return l.map((c) => {
          const i = new D();
          return (
            (i.enableAlpha = !0),
            (i.format = "rgba"),
            i.fromString(c),
            (i.selected = i.value === a.value),
            i
          );
        });
      }
      return { rgbaColors: o, handleSelect: n };
    },
  }),
  rt = { class: "el-color-predefine" },
  it = { class: "el-color-predefine__colors" },
  ct = ["onClick"];
function ut(e, t, o, n, s, l) {
  return (
    C(),
    T("div", rt, [
      k("div", it, [
        (C(!0),
        T(
          Te,
          null,
          Ve(
            e.rgbaColors,
            (a, c) => (
              C(),
              T(
                "div",
                {
                  key: e.colors[c],
                  class: _([
                    "el-color-predefine__color-selector",
                    { selected: a.selected, "is-alpha": a._alpha < 100 },
                  ]),
                  onClick: (i) => e.handleSelect(c),
                },
                [k("div", { style: I({ backgroundColor: a.value }) }, null, 4)],
                10,
                ct
              )
            )
          ),
          128
        )),
      ]),
    ])
  );
}
var ht = W(st, [
  ["render", ut],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue",
  ],
]);
const dt = O({
    name: "ElSlPanel",
    props: { color: { type: Object, required: !0 } },
    setup(e) {
      const t = te(),
        o = g(0),
        n = g(0),
        s = g("hsl(0, 100%, 50%)"),
        l = F(() => {
          const i = e.color.get("hue"),
            b = e.color.get("value");
          return { hue: i, value: b };
        });
      function a() {
        const i = e.color.get("saturation"),
          b = e.color.get("value"),
          p = t.vnode.el,
          { clientWidth: v, clientHeight: h } = p;
        (n.value = (i * v) / 100),
          (o.value = ((100 - b) * h) / 100),
          (s.value = `hsl(${e.color.get("hue")}, 100%, 50%)`);
      }
      function c(i) {
        const p = t.vnode.el.getBoundingClientRect(),
          { clientX: v, clientY: h } = oe(i);
        let r = v - p.left,
          u = h - p.top;
        (r = Math.max(0, r)),
          (r = Math.min(r, p.width)),
          (u = Math.max(0, u)),
          (u = Math.min(u, p.height)),
          (n.value = r),
          (o.value = u),
          e.color.set({
            saturation: (r / p.width) * 100,
            value: 100 - (u / p.height) * 100,
          });
      }
      return (
        y(
          () => l.value,
          () => {
            a();
          }
        ),
        X(() => {
          L(t.vnode.el, {
            drag: (i) => {
              c(i);
            },
            end: (i) => {
              c(i);
            },
          }),
            a();
        }),
        {
          cursorTop: o,
          cursorLeft: n,
          background: s,
          colorValue: l,
          handleDrag: c,
          update: a,
        }
      );
    },
  }),
  ft = k("div", { class: "el-color-svpanel__white" }, null, -1),
  mt = k("div", { class: "el-color-svpanel__black" }, null, -1),
  pt = k("div", null, null, -1),
  vt = [pt];
function gt(e, t, o, n, s, l) {
  return (
    C(),
    T(
      "div",
      {
        class: "el-color-svpanel",
        style: I({ backgroundColor: e.background }),
      },
      [
        ft,
        mt,
        k(
          "div",
          {
            class: "el-color-svpanel__cursor",
            style: I({ top: e.cursorTop + "px", left: e.cursorLeft + "px" }),
          },
          vt,
          4
        ),
      ],
      4
    )
  );
}
var bt = W(dt, [
  ["render", gt],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue",
  ],
]);
const kt = O({
    name: "ElColorPicker",
    components: {
      ElButton: Ke,
      ElTooltip: qe,
      ElInput: Fe,
      ElIcon: Ie,
      Close: Pe,
      ArrowDown: Ee,
      SvPanel: bt,
      HueSlider: tt,
      AlphaSlider: Qe,
      Predefine: ht,
    },
    directives: { ClickOutside: Ye },
    props: {
      modelValue: String,
      id: String,
      showAlpha: Boolean,
      colorFormat: String,
      disabled: Boolean,
      size: { type: String, validator: Ze },
      popperClass: String,
      label: { type: String, default: void 0 },
      tabindex: { type: [String, Number], default: 0 },
      predefine: Array,
    },
    emits: ["change", "active-change", G],
    setup(e, { emit: t }) {
      const { t: o } = Ue(),
        n = He("color"),
        s = ee(Be, {}),
        l = ee(De, {}),
        { inputId: a, isLabeledByFormItem: c } = Le(e, { formItemContext: l }),
        i = g(null),
        b = g(null),
        p = g(null),
        v = g(null);
      let h = !0;
      const r = Oe(
          new D({
            enableAlpha: e.showAlpha,
            format: e.colorFormat,
            value: e.modelValue,
          })
        ),
        u = g(!1),
        m = g(!1),
        w = g(""),
        $ = F(() =>
          !e.modelValue && !m.value ? "transparent" : $e(r, e.showAlpha)
        ),
        d = We(),
        ne = F(() => !!(e.disabled || s.disabled)),
        Y = F(() => (!e.modelValue && !m.value ? "" : r.value)),
        be = F(() =>
          c.value ? void 0 : e.label || o("el.colorpicker.defaultLabel")
        ),
        ke = F(() => (c.value ? l.labelId : void 0));
      y(
        () => e.modelValue,
        (f) => {
          f
            ? f && f !== r.value && ((h = !1), r.fromString(f))
            : (m.value = !1);
        }
      ),
        y(
          () => Y.value,
          (f) => {
            (w.value = f), h && t("active-change", f), (h = !0);
          }
        ),
        y(
          () => r.value,
          () => {
            !e.modelValue && !m.value && (m.value = !0);
          }
        );
      function $e(f, S) {
        if (!(f instanceof D))
          throw new TypeError("color should be instance of _color Class");
        const { r: N, g: le, b: ae } = f.toRgb();
        return S
          ? `rgba(${N}, ${le}, ${ae}, ${f.get("alpha") / 100})`
          : `rgb(${N}, ${le}, ${ae})`;
      }
      function _e(f) {
        u.value = f;
      }
      const z = Xe(_e, 100);
      function Ce() {
        z(!1), Z();
      }
      function Z() {
        J(() => {
          e.modelValue ? r.fromString(e.modelValue) : (m.value = !1);
        });
      }
      function we() {
        ne.value || z(!u.value);
      }
      function Me() {
        r.fromString(w.value);
      }
      function ye() {
        var f;
        const S = r.value;
        t(G, S),
          t("change", S),
          (f = l.validate) == null || f.call(l, "change").catch((N) => ie()),
          z(!1),
          J(() => {
            const N = new D({
              enableAlpha: e.showAlpha,
              format: e.colorFormat,
              value: e.modelValue,
            });
            r.compare(N) || Z();
          });
      }
      function Se() {
        var f;
        z(!1),
          t(G, null),
          t("change", null),
          e.modelValue !== null &&
            ((f = l.validate) == null ||
              f.call(l, "change").catch((S) => ie())),
          Z();
      }
      return (
        X(() => {
          e.modelValue && (w.value = Y.value);
        }),
        y(
          () => u.value,
          () => {
            J(() => {
              var f, S, N;
              (f = i.value) == null || f.update(),
                (S = b.value) == null || S.update(),
                (N = p.value) == null || N.update();
            });
          }
        ),
        ze(ge, { currentColor: Y }),
        {
          color: r,
          colorDisabled: ne,
          colorSize: d,
          displayedColor: $,
          showPanelColor: m,
          showPicker: u,
          customInput: w,
          buttonId: a,
          buttonAriaLabel: be,
          buttonAriaLabelledby: ke,
          handleConfirm: Me,
          hide: Ce,
          handleTrigger: we,
          clear: Se,
          confirmValue: ye,
          t: o,
          ns: n,
          hue: i,
          svPanel: b,
          alpha: p,
          popper: v,
        }
      );
    },
  }),
  $t = ["id", "aria-label", "aria-labelledby", "aria-description", "tabindex"];
function _t(e, t, o, n, s, l) {
  const a = M("hue-slider"),
    c = M("sv-panel"),
    i = M("alpha-slider"),
    b = M("predefine"),
    p = M("el-input"),
    v = M("el-button"),
    h = M("arrow-down"),
    r = M("el-icon"),
    u = M("close"),
    m = M("el-tooltip"),
    w = Re("click-outside");
  return (
    C(),
    R(
      m,
      {
        ref: "popper",
        visible: e.showPicker,
        "onUpdate:visible": t[3] || (t[3] = ($) => (e.showPicker = $)),
        "show-arrow": !1,
        "fallback-placements": ["bottom", "top", "right", "left"],
        offset: 0,
        "gpu-acceleration": !1,
        "popper-class": [
          e.ns.be("picker", "panel"),
          e.ns.b("dropdown"),
          e.popperClass,
        ],
        "stop-popper-mouse-event": !1,
        effect: "light",
        trigger: "click",
        transition: "el-zoom-in-top",
        persistent: "",
      },
      {
        content: P(() => [
          ce(
            (C(),
            T("div", null, [
              k(
                "div",
                { class: _(e.ns.be("dropdown", "main-wrapper")) },
                [
                  A(
                    a,
                    {
                      ref: "hue",
                      class: "hue-slider",
                      color: e.color,
                      vertical: "",
                    },
                    null,
                    8,
                    ["color"]
                  ),
                  A(c, { ref: "svPanel", color: e.color }, null, 8, ["color"]),
                ],
                2
              ),
              e.showAlpha
                ? (C(),
                  R(i, { key: 0, ref: "alpha", color: e.color }, null, 8, [
                    "color",
                  ]))
                : j("v-if", !0),
              e.predefine
                ? (C(),
                  R(
                    b,
                    {
                      key: 1,
                      ref: "predefine",
                      color: e.color,
                      colors: e.predefine,
                    },
                    null,
                    8,
                    ["color", "colors"]
                  ))
                : j("v-if", !0),
              k(
                "div",
                { class: _(e.ns.be("dropdown", "btns")) },
                [
                  k(
                    "span",
                    { class: _(e.ns.be("dropdown", "value")) },
                    [
                      A(
                        p,
                        {
                          modelValue: e.customInput,
                          "onUpdate:modelValue":
                            t[0] || (t[0] = ($) => (e.customInput = $)),
                          "validate-event": !1,
                          size: "small",
                          onKeyup: ue(e.handleConfirm, ["enter"]),
                          onBlur: e.handleConfirm,
                        },
                        null,
                        8,
                        ["modelValue", "onKeyup", "onBlur"]
                      ),
                    ],
                    2
                  ),
                  A(
                    v,
                    {
                      class: _(e.ns.be("dropdown", "link-btn")),
                      text: "",
                      size: "small",
                      onClick: e.clear,
                    },
                    {
                      default: P(() => [
                        he(de(e.t("el.colorpicker.clear")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class", "onClick"]
                  ),
                  A(
                    v,
                    {
                      plain: "",
                      size: "small",
                      class: _(e.ns.be("dropdown", "btn")),
                      onClick: e.confirmValue,
                    },
                    {
                      default: P(() => [
                        he(de(e.t("el.colorpicker.confirm")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class", "onClick"]
                  ),
                ],
                2
              ),
            ])),
            [[w, e.hide]]
          ),
        ]),
        default: P(() => [
          k(
            "div",
            {
              id: e.buttonId,
              class: _([
                e.ns.b("picker"),
                e.ns.is("disabled", e.colorDisabled),
                e.ns.bm("picker", e.colorSize),
              ]),
              role: "button",
              "aria-label": e.buttonAriaLabel,
              "aria-labelledby": e.buttonAriaLabelledby,
              "aria-description": e.t("el.colorpicker.description", {
                color: e.modelValue,
              }),
              tabindex: e.tabindex,
              onKeydown:
                t[2] ||
                (t[2] = ue(
                  (...$) => e.handleTrigger && e.handleTrigger(...$),
                  ["enter"]
                )),
            },
            [
              e.colorDisabled
                ? (C(),
                  T(
                    "div",
                    { key: 0, class: _(e.ns.be("picker", "mask")) },
                    null,
                    2
                  ))
                : j("v-if", !0),
              k(
                "div",
                {
                  class: _(e.ns.be("picker", "trigger")),
                  onClick:
                    t[1] ||
                    (t[1] = (...$) => e.handleTrigger && e.handleTrigger(...$)),
                },
                [
                  k(
                    "span",
                    {
                      class: _([
                        e.ns.be("picker", "color"),
                        e.ns.is("alpha", e.showAlpha),
                      ]),
                    },
                    [
                      k(
                        "span",
                        {
                          class: _(e.ns.be("picker", "color-inner")),
                          style: I({ backgroundColor: e.displayedColor }),
                        },
                        [
                          ce(
                            A(
                              r,
                              {
                                class: _([
                                  e.ns.be("picker", "icon"),
                                  e.ns.is("icon-arrow-down"),
                                ]),
                              },
                              { default: P(() => [A(h)]), _: 1 },
                              8,
                              ["class"]
                            ),
                            [[je, e.modelValue || e.showPanelColor]]
                          ),
                          !e.modelValue && !e.showPanelColor
                            ? (C(),
                              R(
                                r,
                                {
                                  key: 0,
                                  class: _([
                                    e.ns.be("picker", "empty"),
                                    e.ns.is("icon-close"),
                                  ]),
                                },
                                { default: P(() => [A(u)]), _: 1 },
                                8,
                                ["class"]
                              ))
                            : j("v-if", !0),
                        ],
                        6
                      ),
                    ],
                    2
                  ),
                ],
                2
              ),
            ],
            42,
            $t
          ),
        ]),
        _: 1,
      },
      8,
      ["visible", "popper-class"]
    )
  );
}
var U = W(kt, [
  ["render", _t],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/index.vue",
  ],
]);
U.install = (e) => {
  e.component(U.name, U);
};
const Ct = U,
  At = Ct;
export { At as E };
