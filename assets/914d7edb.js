import {
  P as te,
  s as se,
  Q as j,
  R as q,
  i as oe,
  a as P,
  v as ne,
  C as le,
  w as ae,
  O as ie,
  I as re,
  u as de,
} from "./index.js";
import {
  d as O,
  a1 as ue,
  e as f,
  a as A,
  O as T,
  _ as D,
  r as y,
  o as h,
  f as g,
  g as o,
  j as v,
  I as $,
  t as B,
  H as ce,
  W as M,
  a8 as L,
  l as N,
  bm as Q,
  c as H,
  aa as R,
  P as pe,
  L as me,
  a2 as ve,
  a5 as _e,
  ad as fe,
  J as he,
  K as ye,
  F as Ce,
} from "./75bbe58a.js";
import { f as ge, m as ke, u as Ie } from "./ac86e61a.js";
function we() {
  return {
    onQuery: (n = "") =>
      new Promise((u) => {
        chrome.history.search({ text: n || "" }, (d) => {
          u(d);
        });
      }),
    onAdd: (n) => {
      const u = { url: n };
      return chrome.history.addUrl(u);
    },
    onRemove: (n) => {
      const u = { url: n };
      return chrome.history.deleteUrl(u);
    },
  };
}
const be = O({
    name: "ESelect",
    props: {
      info: {
        type: Object,
        default: () => ({ title: null, parentId: null, id: null }),
      },
      list: { type: Object, default: [] },
    },
    components: { Folder: ge, ArrowDown: ue },
    setup(e, s) {
      const _ = f(!1),
        n = f(null),
        u = A(() => {
          const l = e.list.find((c) => c.id === e.info.parentId);
          return l ? l.title : "Please Choose";
        }),
        d = (l) => {
          s.emit("onChange", { parentId: e.list[l].id }), (_.value = !1);
        };
      return (
        T(() => {
          n.value.parentNode.parentNode.addEventListener("click", (l) => {
            n.value.contains(l.target) || (_.value = !1);
          });
        }),
        { onChange: d, text: u, show: _, dom: n }
      );
    },
  }),
  $e = { class: "select-warp", ref: "dom" },
  Ee = { class: "ml-10" },
  Se = { key: 0, class: "select mt-10 bg pd" },
  Fe = ["onClick", "selected"],
  Ve = { class: "ml-10" };
function Be(e, s, _, n, u, d) {
  const l = y("Folder"),
    c = y("el-icon"),
    I = y("ArrowDown");
  return (
    h(),
    g(
      "div",
      $e,
      [
        o(
          "div",
          {
            class: "optopn bg pd",
            onClick: s[0] || (s[0] = (p) => (e.show = !e.show)),
          },
          [
            v(c, { size: 24 }, { default: $(() => [v(l)]), _: 1 }),
            o("span", Ee, B(e.text), 1),
            o(
              "span",
              { class: ce(["action", { show: e.show }]) },
              [v(c, { size: 22 }, { default: $(() => [v(I)]), _: 1 })],
              2
            ),
          ]
        ),
        e.show
          ? (h(),
            g("div", Se, [
              (h(!0),
              g(
                M,
                null,
                L(
                  e.list,
                  (p, m) => (
                    h(),
                    g(
                      "div",
                      {
                        onClick: (S) => e.onChange(m),
                        class: "optopn",
                        selected: e.info.title == p.title,
                        key: m,
                      },
                      [
                        v(c, { size: 24 }, { default: $(() => [v(l)]), _: 1 }),
                        o("span", Ve, B(p.title), 1),
                      ],
                      8,
                      Fe
                    )
                  )
                ),
                128
              )),
            ]))
          : N("", !0),
      ],
      512
    )
  );
}
var Oe = D(be, [
  ["render", Be],
  ["__scopeId", "data-v-ab20fc68"],
]);
const De = O({
    name: "HistorysUpdate",
    props: {
      info: {
        type: Object,
        default: () => ({ title: null, id: null, parentId: null }),
      },
      list: { type: Object, default: () => [] },
    },
    components: { ESelect: Oe, ElInput: Q },
    setup(e, s) {
      const _ = f(!0),
        n = f({ title: "", id: "" }),
        u = () => {
          (_.value = !1), s.emit("onClose");
        },
        d = () => {
          (_.value = !1), s.emit("onSave", { ...e.info, title: n.value.title });
        },
        l = (c) => {
          s.emit("onChange", { ...e.info, ...c, title: n.value.title });
        };
      return (
        T(() => {
          (n.value.title = e.info.title), (n.value.id = e.info.id);
        }),
        { visible: _, onClose: u, onChange: l, qfrom: n, onSave: d }
      );
    },
  }),
  Ae = { class: "history-update" },
  Me = { class: "bts flex" },
  Le = R("Cancel"),
  Ne = R("Sure");
function Te(e, s, _, n, u, d) {
  const l = y("el-input"),
    c = y("ESelect"),
    I = y("EtabBt"),
    p = y("EtabModel");
  return (
    h(),
    H(
      p,
      {
        title: "Save To Bookmark",
        modelValue: e.visible,
        "onUpdate:modelValue": s[1] || (s[1] = (m) => (e.visible = m)),
        "z-index": 5e3,
        "destroy-on-close": "",
        width: "400px",
        onClosed: e.onClose,
      },
      {
        default: $(() => [
          o("section", Ae, [
            v(
              l,
              {
                autofocus: "",
                modelValue: e.qfrom.title,
                "onUpdate:modelValue":
                  s[0] || (s[0] = (m) => (e.qfrom.title = m)),
                placeholder: "Please Enter The Name",
              },
              null,
              8,
              ["modelValue"]
            ),
            v(
              c,
              { info: e.info, list: e.list, onOnChange: e.onChange },
              null,
              8,
              ["info", "list", "onOnChange"]
            ),
            o("div", Me, [
              v(
                I,
                { onOnClick: e.onClose },
                { default: $(() => [Le]), _: 1 },
                8,
                ["onOnClick"]
              ),
              v(
                I,
                {
                  type: "primary",
                  onOnClick: e.onSave,
                  disabled: !e.qfrom.title,
                },
                { default: $(() => [Ne]), _: 1 },
                8,
                ["onOnClick", "disabled"]
              ),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ["modelValue", "onClosed"]
    )
  );
}
var He = D(De, [
  ["render", Te],
  ["__scopeId", "data-v-6938200a"],
]);
const Ue = O({
    name: "HistorysList",
    components: { MoreFilled: ke, HistorysUpdate: He, ElInput: Q },
    setup() {
      const e = we(),
        s = Ie(),
        { appGroupId: _ } = te(),
        n = f("/static/images/app/default.png"),
        u = f({ top: 0, right: 0 }),
        d = f({ pIndex: -1, yIndex: -1 }),
        l = f(!1),
        c = f(!1),
        I = f(null),
        p = f({}),
        m = f([]),
        S = f([]),
        C = f({ keyName: null });
      let w = 0;
      const k = (t) => {
          const { keyName: a } = C.value;
          return a ? j(t.title).indexOf(j(C.value.keyName)) !== -1 : !0;
        },
        E = (t, a) => t.lastVisitTime - a.lastVisitTime,
        b = A(() => (t) => t.filter(k).sort(E)),
        Y = A(() => m.value.filter((t) => t.list.filter(k).length > 0).sort(E)),
        G = async () => {
          l.value = !0;
          const t = await e.onQuery(C.value.keyName),
            a = [],
            i = {};
          t.forEach((r) => {
            const V = q(r.lastVisitTime, "YYYY-MM-DD"),
              ee = q(r.lastVisitTime, "HH:mm:ss");
            i[V]
              ? i[V].push({ ...r, lastVisitTime: ee, logo: r.url || "" })
              : (i[V] = []);
          }),
            Object.keys(i).forEach((r) => {
              a.push({ lastVisitTime: r, list: i[r] });
            }),
            (m.value = a),
            (l.value = !1);
        },
        J = async (t, a, i) => {
          if (((w = 0), d.value.pIndex === a && d.value.yIndex == i)) F();
          else {
            (u.value = { top: `${t.clientY}px`, right: "20px" }),
              (d.value.pIndex = a),
              (d.value.yIndex = i);
            const r = setTimeout(() => {
              (w = new Date().getTime()), clearTimeout(r);
            }, 300);
          }
        },
        F = () => {
          d.value = { pIndex: -1, yIndex: -1 };
        },
        U = (t, a) => {
          const i = m.value.findIndex((r) => r.lastVisitTime === a);
          if (i != -1) {
            e.onRemove(t.url);
            const r = m.value[i].list.findIndex((V) => V.url === t.url);
            m.value[i].list.splice(r, 1),
              (d.value = { pIndex: -1, yIndex: -1 });
          }
        },
        K = (t, a, i) => {
          t === "remove"
            ? U(a, i)
            : t === "update"
            ? ((p.value = { ...a }), (c.value = !0))
            : t === "add" && Z(a),
            F();
        },
        z = (t) => {
          p.value = { ...p.value, ...t };
        },
        W = (t) => {
          z(t),
            s.onAdd({
              parentId: p.value.parentId,
              url: p.value.url,
              title: p.value.title,
            }),
            pe.success("Add Bookmarks Successfully");
        },
        X = async () => {
          const a = (await s.onQuery())[0].children || [],
            i = [];
          a.forEach((r) => {
            i.push({ id: r.id, parentId: r.parentId, title: r.title });
          }),
            (S.value = i);
        },
        Z = async (t) => {
          const a = await oe.getAppIcons(),
            i = a.findIndex((r) => r.id == _.value);
          a[i].list.push({
            name: P.EtabApp,
            size: ne.min,
            class: le.Min,
            mens: { comName: ae.iconMen, sizes: ie },
            data: {
              code: P.tmall,
              type: re.icon,
              icon: t.logo,
              appName: t.title || "",
              url: t.url,
            },
          }),
            window.appStorage.onPush(me.cache, { icons: a }),
            F();
        },
        x = () => {
          I.value.parentNode.parentNode.addEventListener("click", (t) => {
            d.value.pIndex != -1 &&
              w &&
              new Date().getTime() > w &&
              (t.target.classList.contains("click-hash") || (F(), (w = 0)));
          });
        };
      return (
        T(() => {
          G(), x(), X();
        }),
        {
          Search: se,
          loading: l,
          tableList: m,
          onSetPostion: J,
          appStyle: u,
          showMen: d,
          onClean: F,
          onRemove: U,
          qform: C,
          filterList: Y,
          onAction: K,
          filterItem: b,
          isUpdate: c,
          updateInfo: p,
          dom: I,
          onChange: z,
          tabs: S,
          onSave: W,
          defaPic: n,
        }
      );
    },
  }),
  ze = (e) => (he("data-v-28938abf"), (e = e()), ye(), e),
  je = { class: "etab-historys-list", ref: "dom" },
  qe = ze(() =>
    o(
      "div",
      { class: "header flex-c" },
      [o("div", { class: "app-name" }, "History Record")],
      -1
    )
  ),
  Pe = { class: "query" },
  Qe = { class: "list" },
  Re = { class: "date" },
  Ye = { class: "item-body" },
  Ge = { class: "item-content row-1" },
  Je = { class: "icon" },
  Ke = { class: "name" },
  We = ["href"],
  Xe = { class: "time" },
  Ze = { class: "dropdown" },
  xe = { key: 0 },
  et = ["onClick"],
  tt = ["onClick"],
  st = ["onClick"];
function ot(e, s, _, n, u, d) {
  const l = y("el-input"),
    c = y("EtabImg"),
    I = y("MoreFilled"),
    p = y("el-icon"),
    m = y("HistorysUpdate"),
    S = ve("loading");
  return (
    h(),
    g(
      "section",
      je,
      [
        qe,
        o("div", Pe, [
          v(
            l,
            {
              class: "w-50 m-2",
              size: "large",
              placeholder: "Enter Keyword Search",
              modelValue: e.qform.keyName,
              "onUpdate:modelValue":
                s[0] || (s[0] = (C) => (e.qform.keyName = C)),
            },
            null,
            8,
            ["modelValue"]
          ),
        ]),
        _e(
          (h(),
          g("div", Qe, [
            (h(!0),
            g(
              M,
              null,
              L(
                e.filterList,
                (C, w) => (
                  h(),
                  g("div", { key: w, class: "group" }, [
                    o("div", Re, B(C.lastVisitTime), 1),
                    (h(!0),
                    g(
                      M,
                      null,
                      L(
                        e.filterItem(C.list),
                        (k, E) => (
                          h(),
                          g("div", { key: E, class: "item" }, [
                            o("div", Ye, [
                              o("div", Ge, [
                                o("div", Je, [
                                  v(
                                    c,
                                    {
                                      default: e.defaPic,
                                      class: "icon",
                                      src: k.logo,
                                      isIcon: !0,
                                    },
                                    null,
                                    8,
                                    ["default", "src"]
                                  ),
                                ]),
                                o("p", Ke, [
                                  o(
                                    "a",
                                    { href: k.url, target: "_blank" },
                                    B(k.title),
                                    9,
                                    We
                                  ),
                                ]),
                                o("p", Xe, B(k.lastVisitTime), 1),
                                o("div", Ze, [
                                  v(
                                    p,
                                    { onClick: (b) => e.onSetPostion(b, w, E) },
                                    { default: $(() => [v(I)]), _: 2 },
                                    1032,
                                    ["onClick"]
                                  ),
                                ]),
                                e.showMen.pIndex == w && e.showMen.yIndex == E
                                  ? (h(),
                                    g("div", xe, [
                                      o("div", {
                                        class: "infinity-modal",
                                        onClick:
                                          s[1] ||
                                          (s[1] = (...b) =>
                                            e.onClean && e.onClean(...b)),
                                      }),
                                      o(
                                        "ul",
                                        {
                                          class: "dot-ul click-hash",
                                          style: fe(e.appStyle),
                                        },
                                        [
                                          o(
                                            "li",
                                            {
                                              class:
                                                "history-dot-item click-hash",
                                              onClick: (b) =>
                                                e.onAction("add", k, ""),
                                            },
                                            " Add To Homepage ",
                                            8,
                                            et
                                          ),
                                          o(
                                            "li",
                                            {
                                              class:
                                                "history-dot-item click-hash",
                                              onClick: (b) =>
                                                e.onAction("update", k, ""),
                                            },
                                            " Save The Bookmark ",
                                            8,
                                            tt
                                          ),
                                          o(
                                            "li",
                                            {
                                              class:
                                                "history-dot-item click-hash",
                                              onClick: (b) =>
                                                e.onAction(
                                                  "remove",
                                                  k,
                                                  C.lastVisitTime
                                                ),
                                            },
                                            " Delete ",
                                            8,
                                            st
                                          ),
                                        ],
                                        4
                                      ),
                                    ]))
                                  : N("", !0),
                              ]),
                            ]),
                          ])
                        )
                      ),
                      128
                    )),
                  ])
                )
              ),
              128
            )),
          ])),
          [[S, e.loading]]
        ),
        e.isUpdate
          ? (h(),
            H(
              m,
              {
                key: 0,
                list: e.tabs,
                info: e.updateInfo,
                onOnChange: e.onChange,
                onOnSave: e.onSave,
                onOnClose: s[2] || (s[2] = (C) => (e.isUpdate = !1)),
              },
              null,
              8,
              ["list", "info", "onOnChange", "onOnSave"]
            ))
          : N("", !0),
      ],
      512
    )
  );
}
var nt = D(Ue, [
  ["render", ot],
  ["__scopeId", "data-v-28938abf"],
]);
const lt = O({
  name: "Modal",
  components: { HistorysList: nt },
  props: {
    app: {
      type: Object,
      default: () => ({ icon: null, name: null, appName: null, url: null }),
    },
  },
  setup() {
    const { align: e } = de();
    return {
      align: e,
      onClose: () => {
        window.appStorage.emit(Ce.onClose);
      },
    };
  },
});
function at(e, s, _, n, u, d) {
  const l = y("HistorysList"),
    c = y("el-drawer");
  return (
    h(),
    H(
      c,
      {
        appendToBody: "",
        size: 336,
        modelValue: !0,
        direction: e.align === "right" ? "ltr" : "rtl",
        showClose: !1,
        customClass: "etab-public-modal etab-historys-list",
        onClosed: e.onClose,
      },
      { default: $(() => [v(l)]), _: 1 },
      8,
      ["direction", "onClosed"]
    )
  );
}
var ut = D(lt, [["render", at]]);
export { ut as default };
