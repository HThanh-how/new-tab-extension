import { u as F } from "./39722092.js";
import {
  _ as B,
  d as I,
  e as u,
  a as Y,
  O as N,
  r as _,
  o as l,
  c as R,
  I as C,
  g as a,
  j as m,
  t as p,
  f as d,
  l as S,
  a8 as w,
  H as E,
  W as k,
  F as V,
  C as P,
} from "./75bbe58a.js";
import { G as T, H as x } from "./index.js";
const H = I({
    name: "Modal",
    components: { ArrowLeft: T, ArrowRight: x },
    setup() {
      const { getDates: t, months: n, titleList: A, getAnimalName: $ } = F(),
        h = u([]),
        y = u(0),
        s = u(0),
        g = u(0),
        v = u(""),
        o = u(0),
        r = new Date();
      let e = { year: null, month: null };
      const c = Y(() => `${e.year}-${e.month}` != `${o.value}-${s.value}`),
        M = () => {
          window.appStorage.emit(V.onClose);
        },
        L = (i) => {
          (s.value = i), f();
        },
        b = (i) => {
          if (i === "left") {
            if (o.value <= 1923) return;
            o.value--;
          } else {
            if (o.value >= 2123) return;
            o.value++;
          }
          r.setFullYear(o.value), f();
        },
        f = () => {
          const i = new Date();
          (h.value = t(o.value, s.value, {
            month: i.getMonth() + 1,
            year: i.getFullYear(),
          })),
            (v.value = `${P.VITE_STATIC_URL}/Calendar/${$(o.value)}.png`);
        },
        D = () => {
          (o.value = e.year), (s.value = e.month), f();
        };
      return (
        N(() => {
          (o.value = r.getFullYear()),
            (s.value = r.getMonth() + 1),
            (g.value = r.getDay()),
            (y.value = r.getDate()),
            (e = { year: o.value, month: s.value }),
            f();
        }),
        {
          AnimalPic: v,
          isShow: c,
          dateList: h,
          months: n,
          month: s,
          mydate: y,
          titleList: A,
          year: o,
          onBack: D,
          onClose: M,
          onYear: b,
          onMonth: L,
        }
      );
    },
  }),
  O = { class: "header flex-cc" },
  j = { class: "icon-center" },
  z = { class: "etab-calendar-warp flex" },
  G = { class: "left" },
  Q = ["onClick"],
  U = { class: "calemdar-med flex1" },
  W = { class: "list" },
  q = { class: "titles flex" },
  J = { class: "flex-c dates" },
  K = { class: "solar" };
function X(t, n, A, $, h, y) {
  const s = _("EtabImg"),
    g = _("ArrowLeft"),
    v = _("el-icon"),
    o = _("ArrowRight"),
    r = _("EtabModel");
  return (
    l(),
    R(
      r,
      {
        modelValue: !0,
        padding: !1,
        destroyOnClose: "",
        width: "980px",
        customClass: "etab-calendar-modal",
        onClosed: t.onClose,
      },
      {
        default: C(() => [
          a("div", O, [
            m(s, { class: "animal-pic", src: t.AnimalPic }, null, 8, ["src"]),
            m(
              v,
              { onClick: n[0] || (n[0] = (e) => t.onYear("left")) },
              { default: C(() => [m(g)]), _: 1 }
            ),
            a("span", j, p(t.year), 1),
            m(
              v,
              { onClick: n[1] || (n[1] = (e) => t.onYear("right")) },
              { default: C(() => [m(o)]), _: 1 }
            ),
            t.isShow
              ? (l(),
                d(
                  "span",
                  {
                    key: 0,
                    class: "back-bt flex-cc f-12",
                    onClick:
                      n[2] || (n[2] = (...e) => t.onBack && t.onBack(...e)),
                  },
                  "Return Today"
                ))
              : S("", !0),
          ]),
          a("div", z, [
            a("ul", G, [
              (l(!0),
              d(
                k,
                null,
                w(
                  t.months,
                  (e, c) => (
                    l(),
                    d(
                      "li",
                      {
                        key: c,
                        class: E({ select: e == t.month }),
                        onClick: (M) => t.onMonth(e),
                      },
                      p(e) + "Moon ",
                      11,
                      Q
                    )
                  )
                ),
                128
              )),
            ]),
            a("div", U, [
              a("div", W, [
                a("div", q, [
                  (l(!0),
                  d(
                    k,
                    null,
                    w(
                      t.titleList,
                      (e, c) => (
                        l(),
                        d(
                          "div",
                          { key: c, class: "f-13 flex-cc title" },
                          " Week" + p(e),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
                a("div", J, [
                  (l(!0),
                  d(
                    k,
                    null,
                    w(
                      t.dateList,
                      (e, c) => (
                        l(),
                        d(
                          "div",
                          {
                            key: c,
                            class: E([
                              {
                                select: t.mydate == e.day && e.ismonth,
                                disble: e.isPrep || e.isNext,
                              },
                              "date flex-cc",
                            ]),
                          },
                          [
                            a("div", null, p(e.day), 1),
                            a("div", K, p(e.solar), 1),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ["onClosed"]
    )
  );
}
var oe = B(H, [
  ["render", X],
  ["__scopeId", "data-v-4642749c"],
]);
export { oe as default };
