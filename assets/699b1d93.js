import {
  _ as N,
  d as V,
  e as h,
  a as B,
  O,
  r as b,
  a2 as U,
  o as i,
  c as k,
  I as j,
  g as o,
  j as T,
  f as p,
  a8 as $,
  H as I,
  t as _,
  k as F,
  W as L,
  a5 as H,
  l as P,
  C as Q,
  P as R,
  F as q,
} from "./75bbe58a.js";
import { n as S, N as x } from "./28945d09.js";
import { b as z, d as C, $ as M } from "./index.js";
const W = (e, l) => {
    window.document.querySelector("body").style.setProperty(e, l);
  },
  G = (e) => {
    e.forEach((l) => {
      W(l.keyName, l.value);
    });
  };
const J = V({
    name: "Modal",
    props: { app: { type: Object, default: () => ({ code: "" }) } },
    setup(e) {
      const l = z(),
        { VITE_STATIC_URL: v } = Q,
        d = h([]),
        g = h([]),
        w = h(""),
        c = h(!0);
      let t = {};
      const m = B(() => l.$state.userInfo.news),
        y = async (n, a) => {
          c.value = !0;
          const f = M();
          try {
            if (t[`${n}`] && t.lastDate === f && a.updateTime < a.destroyTime) {
              (d.value = t[`${n}`]), (c.value = !1);
              return;
            }
            w.value = n;
            const u = ((await x.getHotsearch({ type: n })).data || []).splice(
              0,
              30
            );
            (d.value = u),
              t.lastDate !== f && (t = {}),
              (t[`${n}`] = u),
              (t.lastDate = M()),
              await C.setAppStore(e.app.code, {
                data: t,
                updateTime: new Date().getTime(),
              }),
              (c.value = !1);
          } catch {
            const u = await C.getAppStore(e.app.code);
            (t = (u && u.data) || {}),
              (d.value = t[`${n}`] || []),
              (c.value = !1);
          }
        },
        s = (n) => {
          const a = { ...m.value };
          if (
            ((a[n] = a[n] ? 0 : new Date().getTime()),
            Object.keys(a).filter((f) => !!a[f]).length > 5)
          ) {
            R.error("Choose Up To Five News Sources");
            return;
          }
          l.setUserInfo({ news: a });
        },
        r = async () => {
          (g.value = S), E(S[0].type);
        },
        E = async (n) => {
          const a = await C.getAppStore(e.app.code);
          (t = (a && a.data) || {}), y(n, a || {});
        },
        A = () => {
          window.appStorage.emit(q.onClose);
        };
      return (
        O(() => {
          G([
            {
              keyName: "--news-default-bg",
              value: `url(${v}/news/default.png)`,
            },
            { keyName: "--news-select-bg", value: `url(${v}/news/select.png)` },
          ]),
            r();
        }),
        {
          VITE_STATIC_URL: v,
          tabType: w,
          menList: g,
          newsList: d,
          onClose: A,
          onClickItem: E,
          newsConfig: m,
          onSelect: s,
          isLoading: c,
        }
      );
    },
  }),
  K = { class: "etab-news-warp" },
  X = { class: "header flex" },
  Y = { class: "body flex" },
  Z = { class: "left" },
  ee = ["onClick"],
  se = { class: "inline-flex flex1" },
  te = { class: "title ml-10 hover" },
  ae = ["onClick"],
  oe = { class: "right flex1" },
  ne = { class: "flex1 flex-c" },
  le = { class: "title row-1" },
  ce = ["href"],
  re = { class: "hot ml-10" };
function ie(e, l, v, d, g, w) {
  const c = b("EtabImg"),
    t = b("EtabEmpty"),
    m = b("EtabModel"),
    y = U("loading");
  return (
    i(),
    k(
      m,
      {
        modelValue: !0,
        destroyOnClose: "",
        width: "980px",
        customClass: "etab-news-modal",
        onClosed: e.onClose,
      },
      {
        default: j(() => [
          o("div", K, [
            o("div", X, [
              T(c, { src: e.VITE_STATIC_URL + "/news/rebang.svg" }, null, 8, [
                "src",
              ]),
            ]),
            o("div", Y, [
              o("div", Z, [
                (i(!0),
                p(
                  L,
                  null,
                  $(
                    e.menList,
                    (s) => (
                      i(),
                      p(
                        "div",
                        {
                          key: s.type,
                          class: I([
                            {
                              "not-selected": !e.newsConfig[s.type],
                              selected: e.tabType == s.type,
                            },
                            "men hover mb-10",
                          ]),
                          onClick: (r) => e.onClickItem(s.type),
                        },
                        [
                          o("div", se, [
                            T(
                              c,
                              {
                                src: "/static/images/hot-search-icon" + s.icon,
                                class: "men_pic",
                              },
                              null,
                              8,
                              ["src"]
                            ),
                            o("span", te, _(s.name) + "-" + _(s.label), 1),
                          ]),
                          o(
                            "div",
                            {
                              class: "icon",
                              onClick: F((r) => e.onSelect(s.type), ["stop"]),
                            },
                            null,
                            8,
                            ae
                          ),
                        ],
                        10,
                        ee
                      )
                    )
                  ),
                  128
                )),
              ]),
              H(
                (i(),
                p("div", oe, [
                  e.newsList.length
                    ? (i(!0),
                      p(
                        L,
                        { key: 0 },
                        $(
                          e.newsList,
                          (s, r) => (
                            i(),
                            p("div", { key: r, class: "msg flex-c mb-10" }, [
                              o("div", ne, [
                                o(
                                  "div",
                                  { class: I(["order", ["order--" + r]]) },
                                  _(r + 1),
                                  3
                                ),
                                o("div", le, [
                                  o(
                                    "a",
                                    { href: s.url, target: "_blank" },
                                    _(s.title),
                                    9,
                                    ce
                                  ),
                                ]),
                              ]),
                              o("div", re, _(s.hotLabel), 1),
                            ])
                          )
                        ),
                        128
                      ))
                    : !e.isLoading && e.newsList.length < 1
                    ? (i(),
                      k(t, { key: 1, description: "No Data" }))
                    : P("", !0),
                ])),
                [[y, e.isLoading]]
              ),
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
var _e = N(J, [
  ["render", ie],
  ["__scopeId", "data-v-79ba37b9"],
]);
export { _e as default };
