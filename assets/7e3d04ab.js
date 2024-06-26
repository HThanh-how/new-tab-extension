import {
  O as se,
  bo as le,
  av as te,
  bf as Q,
  w as K,
  ao as re,
  d as ie,
  bm as ue,
  aS as de,
  bp as ce,
  az as fe,
  e as I,
  aI as me,
  b as ve,
  a as M,
  bq as x,
  be as pe,
  n as V,
  B as ge,
  ay as ye,
  r as z,
  a2 as be,
  o as d,
  c as w,
  I as h,
  a5 as N,
  aL as q,
  j as P,
  g as p,
  f as k,
  H as u,
  U as _,
  l as T,
  t as D,
  a3 as U,
  k as j,
  a4 as Ce,
  ad as ee,
  aa as ne,
  T as he,
  af as Ee,
  b0 as Be,
  br as Y,
  bs as ae,
  bt as oe,
  aB as Me,
  aP as we,
  h as ke,
} from "./75bbe58a.js";
import { E as Te } from "./04ee1aa4.js";
import {
  T as Se,
  e as $e,
  f as Le,
  o as Ae,
  g as Ie,
  h as Ve,
  j as ze,
  k as Pe,
  l as De,
  m as Oe,
} from "./index.js";
import { i as He } from "./8e76c846.js";
const Re = (e, o, i) => {
    let l = { offsetX: 0, offsetY: 0 };
    const t = (c) => {
        const $ = c.clientX,
          E = c.clientY,
          { offsetX: y, offsetY: v } = l,
          r = e.value.getBoundingClientRect(),
          b = r.left,
          L = r.top,
          F = r.width,
          W = r.height,
          C = document.documentElement.clientWidth,
          H = document.documentElement.clientHeight,
          G = -b + y,
          Z = -L + v,
          B = C - b - F + y,
          R = H - L - W + v,
          X = (a) => {
            const f = Math.min(Math.max(y + a.clientX - $, G), B),
              m = Math.min(Math.max(v + a.clientY - E, Z), R);
            (l = { offsetX: f, offsetY: m }),
              (e.value.style.transform = `translate(${Q(f)}, ${Q(m)})`);
          },
          A = () => {
            document.removeEventListener("mousemove", X),
              document.removeEventListener("mouseup", A);
          };
        document.addEventListener("mousemove", X),
          document.addEventListener("mouseup", A);
      },
      s = () => {
        o.value && e.value && o.value.addEventListener("mousedown", t);
      },
      n = () => {
        o.value && e.value && o.value.removeEventListener("mousedown", t);
      };
    se(() => {
      le(() => {
        i.value ? s() : n();
      });
    }),
      te(() => {
        n();
      });
  },
  Xe = (e, o, i) => {
    const l = (s) => {
      i(s) && s.stopImmediatePropagation();
    };
    let t;
    K(
      () => e.value,
      (s) => {
        s ? (t = re(document, o, l, !0)) : t == null || t();
      },
      { immediate: !0 }
    );
  },
  Ne = ie({
    name: "ElMessageBox",
    directives: { TrapFocus: Se },
    components: { ElButton: Te, ElInput: ue, ElOverlay: $e, ElIcon: de, ...ce },
    inheritAttrs: !1,
    props: {
      buttonSize: { type: String, validator: He },
      modal: { type: Boolean, default: !0 },
      lockScroll: { type: Boolean, default: !0 },
      showClose: { type: Boolean, default: !0 },
      closeOnClickModal: { type: Boolean, default: !0 },
      closeOnPressEscape: { type: Boolean, default: !0 },
      closeOnHashChange: { type: Boolean, default: !0 },
      center: Boolean,
      draggable: Boolean,
      roundButton: { default: !1, type: Boolean },
      container: { type: String, default: "body" },
      boxType: { type: String, default: "" },
    },
    emits: ["vanish", "action"],
    setup(e, { emit: o }) {
      const { t: i } = Le(),
        l = fe("message-box"),
        t = I(!1),
        { nextZIndex: s } = me(),
        n = ve({
          beforeClose: null,
          callback: null,
          cancelButtonText: "",
          cancelButtonClass: "",
          confirmButtonText: "",
          confirmButtonClass: "",
          customClass: "",
          customStyle: {},
          dangerouslyUseHTMLString: !1,
          distinguishCancelAndClose: !1,
          icon: "",
          inputPattern: null,
          inputPlaceholder: "",
          inputType: "text",
          inputValue: null,
          inputValidator: null,
          inputErrorMessage: "",
          message: null,
          modalFade: !0,
          modalClass: "",
          showCancelButton: !1,
          showConfirmButton: !0,
          type: "",
          title: void 0,
          showInput: !1,
          action: "",
          confirmButtonLoading: !1,
          cancelButtonLoading: !1,
          confirmButtonDisabled: !1,
          editorErrorMessage: "",
          validateError: !1,
          zIndex: s(),
        }),
        c = M(() => {
          const a = n.type;
          return { [l.bm("icon", a)]: a && x[a] };
        }),
        $ = pe(
          M(() => e.buttonSize),
          { prop: !0, form: !0, formItem: !0 }
        ),
        E = M(() => n.icon || x[n.type] || ""),
        y = M(() => !!n.message),
        v = I(),
        r = I(),
        b = I(),
        L = I(),
        F = M(() => n.confirmButtonClass);
      K(
        () => n.inputValue,
        async (a) => {
          await V(), e.boxType === "prompt" && a !== null && R();
        },
        { immediate: !0 }
      ),
        K(
          () => t.value,
          (a) => {
            a &&
              ((e.boxType === "alert" || e.boxType === "confirm") &&
                V().then(() => {
                  var f, m, J;
                  (J =
                    (m = (f = L.value) == null ? void 0 : f.$el) == null
                      ? void 0
                      : m.focus) == null || J.call(m);
                }),
              (n.zIndex = s())),
              e.boxType === "prompt" &&
                (a
                  ? V().then(() => {
                      b.value && b.value.$el && X().focus();
                    })
                  : ((n.editorErrorMessage = ""), (n.validateError = !1)));
          }
        );
      const W = M(() => e.draggable);
      Re(v, r, W),
        se(async () => {
          await V(), e.closeOnHashChange && Ae(window, "hashchange", C);
        }),
        te(() => {
          e.closeOnHashChange && Ie(window, "hashchange", C);
        });
      function C() {
        !t.value ||
          ((t.value = !1),
          V(() => {
            n.action && o("action", n.action);
          }));
      }
      const H = () => {
          e.closeOnClickModal &&
            B(n.distinguishCancelAndClose ? "close" : "cancel");
        },
        G = De(H),
        Z = (a) => {
          if (n.inputType !== "textarea")
            return a.preventDefault(), B("confirm");
        },
        B = (a) => {
          var f;
          (e.boxType === "prompt" && a === "confirm" && !R()) ||
            ((n.action = a),
            n.beforeClose
              ? (f = n.beforeClose) == null || f.call(n, a, n, C)
              : C());
        },
        R = () => {
          if (e.boxType === "prompt") {
            const a = n.inputPattern;
            if (a && !a.test(n.inputValue || ""))
              return (
                (n.editorErrorMessage =
                  n.inputErrorMessage || i("el.messagebox.error")),
                (n.validateError = !0),
                !1
              );
            const f = n.inputValidator;
            if (typeof f == "function") {
              const m = f(n.inputValue);
              if (m === !1)
                return (
                  (n.editorErrorMessage =
                    n.inputErrorMessage || i("el.messagebox.error")),
                  (n.validateError = !0),
                  !1
                );
              if (typeof m == "string")
                return (n.editorErrorMessage = m), (n.validateError = !0), !1;
            }
          }
          return (n.editorErrorMessage = ""), (n.validateError = !1), !0;
        },
        X = () => {
          const a = b.value.$refs;
          return a.input || a.textarea;
        },
        A = () => {
          B("close");
        };
      return (
        e.closeOnPressEscape
          ? Ve({ handleClose: A }, t)
          : Xe(t, "keydown", (a) => a.code === Oe.esc),
        e.lockScroll && ze(t),
        Pe(t),
        {
          ...ge(n),
          ns: l,
          overlayEvent: G,
          visible: t,
          hasMessage: y,
          typeClass: c,
          btnSize: $,
          iconComponent: E,
          confirmButtonClasses: F,
          rootRef: v,
          headerRef: r,
          inputRef: b,
          confirmRef: L,
          doClose: C,
          handleClose: A,
          handleWrapperClick: H,
          handleInputEnter: Z,
          handleAction: B,
          t: i,
        }
      );
    },
  }),
  Ue = ["aria-label"],
  je = { key: 0 },
  Ye = ["innerHTML"];
function Ke(e, o, i, l, t, s) {
  const n = z("el-icon"),
    c = z("close"),
    $ = z("el-input"),
    E = z("el-button"),
    y = z("el-overlay"),
    v = be("trap-focus");
  return (
    d(),
    w(
      he,
      {
        name: "fade-in-linear",
        onAfterLeave: o[11] || (o[11] = (r) => e.$emit("vanish")),
      },
      {
        default: h(() => [
          N(
            P(
              y,
              {
                "z-index": e.zIndex,
                "overlay-class": [e.ns.is("message-box"), e.modalClass],
                mask: e.modal,
              },
              {
                default: h(() => [
                  p(
                    "div",
                    {
                      class: u(`${e.ns.namespace.value}-overlay-message-box`),
                      onClick:
                        o[8] ||
                        (o[8] = (...r) =>
                          e.overlayEvent.onClick &&
                          e.overlayEvent.onClick(...r)),
                      onMousedown:
                        o[9] ||
                        (o[9] = (...r) =>
                          e.overlayEvent.onMousedown &&
                          e.overlayEvent.onMousedown(...r)),
                      onMouseup:
                        o[10] ||
                        (o[10] = (...r) =>
                          e.overlayEvent.onMouseup &&
                          e.overlayEvent.onMouseup(...r)),
                    },
                    [
                      N(
                        (d(),
                        k(
                          "div",
                          {
                            ref: "rootRef",
                            role: "dialog",
                            "aria-label": e.title || "dialog",
                            "aria-modal": "true",
                            class: u([
                              e.ns.b(),
                              e.customClass,
                              e.ns.is("draggable", e.draggable),
                              { [e.ns.m("center")]: e.center },
                            ]),
                            style: ee(e.customStyle),
                            onClick: o[7] || (o[7] = j(() => {}, ["stop"])),
                          },
                          [
                            e.title !== null && e.title !== void 0
                              ? (d(),
                                k(
                                  "div",
                                  {
                                    key: 0,
                                    ref: "headerRef",
                                    class: u(e.ns.e("header")),
                                  },
                                  [
                                    p(
                                      "div",
                                      { class: u(e.ns.e("title")) },
                                      [
                                        e.iconComponent && e.center
                                          ? (d(),
                                            w(
                                              n,
                                              {
                                                key: 0,
                                                class: u([
                                                  e.ns.e("status"),
                                                  e.typeClass,
                                                ]),
                                              },
                                              {
                                                default: h(() => [
                                                  (d(), w(_(e.iconComponent))),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ["class"]
                                            ))
                                          : T("v-if", !0),
                                        p("span", null, D(e.title), 1),
                                      ],
                                      2
                                    ),
                                    e.showClose
                                      ? (d(),
                                        k(
                                          "button",
                                          {
                                            key: 0,
                                            type: "button",
                                            class: u(e.ns.e("headerbtn")),
                                            "aria-label": "Close",
                                            onClick:
                                              o[0] ||
                                              (o[0] = (r) =>
                                                e.handleAction(
                                                  e.distinguishCancelAndClose
                                                    ? "close"
                                                    : "cancel"
                                                )),
                                            onKeydown:
                                              o[1] ||
                                              (o[1] = U(
                                                j(
                                                  (r) =>
                                                    e.handleAction(
                                                      e.distinguishCancelAndClose
                                                        ? "close"
                                                        : "cancel"
                                                    ),
                                                  ["prevent"]
                                                ),
                                                ["enter"]
                                              )),
                                          },
                                          [
                                            P(
                                              n,
                                              { class: u(e.ns.e("close")) },
                                              {
                                                default: h(() => [P(c)]),
                                                _: 1,
                                              },
                                              8,
                                              ["class"]
                                            ),
                                          ],
                                          34
                                        ))
                                      : T("v-if", !0),
                                  ],
                                  2
                                ))
                              : T("v-if", !0),
                            p(
                              "div",
                              { class: u(e.ns.e("content")) },
                              [
                                p(
                                  "div",
                                  { class: u(e.ns.e("container")) },
                                  [
                                    e.iconComponent && !e.center && e.hasMessage
                                      ? (d(),
                                        w(
                                          n,
                                          {
                                            key: 0,
                                            class: u([
                                              e.ns.e("status"),
                                              e.typeClass,
                                            ]),
                                          },
                                          {
                                            default: h(() => [
                                              (d(), w(_(e.iconComponent))),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"]
                                        ))
                                      : T("v-if", !0),
                                    e.hasMessage
                                      ? (d(),
                                        k(
                                          "div",
                                          {
                                            key: 1,
                                            class: u(e.ns.e("message")),
                                          },
                                          [
                                            Ce(e.$slots, "default", {}, () => [
                                              e.dangerouslyUseHTMLString
                                                ? (d(),
                                                  k(
                                                    "p",
                                                    {
                                                      key: 1,
                                                      innerHTML: e.message,
                                                    },
                                                    null,
                                                    8,
                                                    Ye
                                                  ))
                                                : (d(),
                                                  k("p", je, D(e.message), 1)),
                                            ]),
                                          ],
                                          2
                                        ))
                                      : T("v-if", !0),
                                  ],
                                  2
                                ),
                                N(
                                  p(
                                    "div",
                                    { class: u(e.ns.e("input")) },
                                    [
                                      P(
                                        $,
                                        {
                                          ref: "inputRef",
                                          modelValue: e.inputValue,
                                          "onUpdate:modelValue":
                                            o[2] ||
                                            (o[2] = (r) => (e.inputValue = r)),
                                          type: e.inputType,
                                          placeholder: e.inputPlaceholder,
                                          class: u({
                                            invalid: e.validateError,
                                          }),
                                          onKeydown: U(e.handleInputEnter, [
                                            "enter",
                                          ]),
                                        },
                                        null,
                                        8,
                                        [
                                          "modelValue",
                                          "type",
                                          "placeholder",
                                          "class",
                                          "onKeydown",
                                        ]
                                      ),
                                      p(
                                        "div",
                                        {
                                          class: u(e.ns.e("errormsg")),
                                          style: ee({
                                            visibility: e.editorErrorMessage
                                              ? "visible"
                                              : "hidden",
                                          }),
                                        },
                                        D(e.editorErrorMessage),
                                        7
                                      ),
                                    ],
                                    2
                                  ),
                                  [[q, e.showInput]]
                                ),
                              ],
                              2
                            ),
                            p(
                              "div",
                              { class: u(e.ns.e("btns")) },
                              [
                                e.showCancelButton
                                  ? (d(),
                                    w(
                                      E,
                                      {
                                        key: 0,
                                        loading: e.cancelButtonLoading,
                                        class: u([e.cancelButtonClass]),
                                        round: e.roundButton,
                                        size: e.btnSize,
                                        onClick:
                                          o[3] ||
                                          (o[3] = (r) =>
                                            e.handleAction("cancel")),
                                        onKeydown:
                                          o[4] ||
                                          (o[4] = U(
                                            j(
                                              (r) => e.handleAction("cancel"),
                                              ["prevent"]
                                            ),
                                            ["enter"]
                                          )),
                                      },
                                      {
                                        default: h(() => [
                                          ne(
                                            D(
                                              e.cancelButtonText ||
                                                e.t("el.messagebox.cancel")
                                            ),
                                            1
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["loading", "class", "round", "size"]
                                    ))
                                  : T("v-if", !0),
                                N(
                                  P(
                                    E,
                                    {
                                      ref: "confirmRef",
                                      type: "primary",
                                      loading: e.confirmButtonLoading,
                                      class: u([e.confirmButtonClasses]),
                                      round: e.roundButton,
                                      disabled: e.confirmButtonDisabled,
                                      size: e.btnSize,
                                      onClick:
                                        o[5] ||
                                        (o[5] = (r) =>
                                          e.handleAction("confirm")),
                                      onKeydown:
                                        o[6] ||
                                        (o[6] = U(
                                          j(
                                            (r) => e.handleAction("confirm"),
                                            ["prevent"]
                                          ),
                                          ["enter"]
                                        )),
                                    },
                                    {
                                      default: h(() => [
                                        ne(
                                          D(
                                            e.confirmButtonText ||
                                              e.t("el.messagebox.confirm")
                                          ),
                                          1
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    [
                                      "loading",
                                      "class",
                                      "round",
                                      "disabled",
                                      "size",
                                    ]
                                  ),
                                  [[q, e.showConfirmButton]]
                                ),
                              ],
                              2
                            ),
                          ],
                          14,
                          Ue
                        )),
                        [[v]]
                      ),
                    ],
                    34
                  ),
                ]),
                _: 3,
              },
              8,
              ["z-index", "overlay-class", "mask"]
            ),
            [[q, e.visible]]
          ),
        ]),
        _: 3,
      }
    )
  );
}
var Fe = ye(Ne, [
  ["render", Ke],
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue",
  ],
]);
const O = new Map(),
  We = (e, o, i = null) => {
    const l = ke(Fe, e);
    return (
      (l.appContext = i),
      ae(l, o),
      document.body.appendChild(o.firstElementChild),
      l.component
    );
  },
  Ge = () => document.createElement("div"),
  Ze = (e, o) => {
    const i = Ge();
    (e.onVanish = () => {
      ae(null, i), O.delete(t);
    }),
      (e.onAction = (s) => {
        const n = O.get(t);
        let c;
        e.showInput ? (c = { value: t.inputValue, action: s }) : (c = s),
          e.callback
            ? e.callback(c, l.proxy)
            : s === "cancel" || s === "close"
            ? e.distinguishCancelAndClose && s !== "cancel"
              ? n.reject("close")
              : n.reject("cancel")
            : n.resolve(c);
      });
    const l = We(e, i, o),
      t = l.proxy;
    for (const s in e) oe(e, s) && !oe(t.$props, s) && (t[s] = e[s]);
    return (
      K(
        () => t.message,
        (s, n) => {
          Y(s)
            ? (l.slots.default = () => [s])
            : Y(n) && !Y(s) && delete l.slots.default;
        },
        { immediate: !0 }
      ),
      (t.visible = !0),
      t
    );
  };
function S(e, o = null) {
  if (!Ee) return Promise.reject();
  let i;
  return (
    Be(e) || Y(e) ? (e = { message: e }) : (i = e.callback),
    new Promise((l, t) => {
      const s = Ze(e, o != null ? o : S._context);
      O.set(s, { options: e, callback: i, resolve: l, reject: t });
    })
  );
}
const qe = ["alert", "confirm", "prompt"],
  Je = {
    alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
    confirm: { showCancelButton: !0 },
    prompt: { showCancelButton: !0, showInput: !0 },
  };
qe.forEach((e) => {
  S[e] = Qe(e);
});
function Qe(e) {
  return (o, i, l, t) => {
    let s;
    return (
      Me(i) ? ((l = i), (s = "")) : we(i) ? (s = "") : (s = i),
      S(
        Object.assign({ title: s, message: o, type: "", ...Je[e] }, l, {
          boxType: e,
        }),
        t
      )
    );
  };
}
S.close = () => {
  O.forEach((e, o) => {
    o.doClose();
  }),
    O.clear();
};
S._context = null;
const g = S;
g.install = (e) => {
  (g._context = e._context),
    (e.config.globalProperties.$msgbox = g),
    (e.config.globalProperties.$messageBox = g),
    (e.config.globalProperties.$alert = g.alert),
    (e.config.globalProperties.$confirm = g.confirm),
    (e.config.globalProperties.$prompt = g.prompt);
};
const on = g;
export { on as E };
