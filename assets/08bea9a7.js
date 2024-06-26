import { F as M, K as O, _ as S, d as Y } from "./index.js";
import {
  d as k,
  E as R,
  o as y,
  f as j,
  g as c,
  e as w,
  O as E,
  _ as F,
  r as _,
  a2 as V,
  c as B,
  I as r,
  t as v,
  j as s,
  a5 as A,
  ad as T,
  F as I,
} from "./75bbe58a.js";
import { Y as $ } from "./c46363a2.js";
import { E as H } from "./a437c2e6.js";
const z = k({ name: "Magnet" }),
  N = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  W = c(
    "path",
    {
      fill: "currentColor",
      d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z",
    },
    null,
    -1
  ),
  G = [W];
function K(e, i, u, n, o, t) {
  return y(), j("svg", N, G);
}
var P = R(z, [["render", K]]);
function U() {
  const e = w({
      date: -1,
      ncWeek: "",
      month: -1,
      monthCn: -1,
      dayCn: -1,
      hours: -1,
      minutes: -1,
    }),
    i = (o) => (o > 9 ? o : `0${o}`),
    u = () => {
      const o = new Date(),
        t = o.getFullYear(),
        l = o.getMonth() + 1,
        a = o.getDate(),
        d = i(o.getHours()),
        m = i(o.getMinutes()),
        g = M.solar2lunar(t, l, a),
        { monthCn: f, dayCn: b, ncWeek: D } = g;
      return {
        date: a,
        ncWeek: D,
        month: i(l),
        monthCn: f,
        dayCn: b,
        hours: d,
        minutes: m,
        fullYear: t,
      };
    },
    n = () => {
      e.value = { ...u() };
      const o = setTimeout(() => {
        clearTimeout(o), (e.value = { ...u() }), n();
      }, 1e3);
    };
  return (
    E(() => {
      n();
    }),
    { dateObj: e }
  );
}
const q = k({
    name: "Modal",
    components: { Download: O, Magnet: P, EtabReload: H },
    props: { app: { type: Object, default: {} } },
    setup(e) {
      const { onSave: i, onDownload: u, bgForm: n } = S(),
        { dateObj: o } = U(),
        t = w(!1),
        l = w(!1),
        a = w({ body: "", from: "", pic: "", code: "" }),
        d = () => {
          window.appStorage.emit(I.onClose);
        },
        m = () => {
          (n.value.backgroundImg = a.value.pic || ""),
            (n.value.backgroundImgId = new Date().getTime().toString()),
            i();
        },
        g = async (h) => {
          const p = new Date();
          await Y.setAppStore(e.app.code, {
            data: h,
            updateTime: p.getTime(),
            destroyTime: new Date(p.setDate(p.getDate() + 1)).getTime(),
          }),
            window.appStorage.emit(e.app.code);
        },
        f = async () => {
          t.value = !0;
          const h = await $.newPic();
          (a.value.pic = h.data), g(a.value), (t.value = !1);
        },
        b = async () => {
          t.value = !0;
          const h = await $.newYiYan(),
            { body: p, from: C } = h.data || {};
          (a.value.from = C),
            (a.value.body = p),
            (t.value = !1),
            g({ ...a.value, body: p, from: C });
        },
        D = async () => {
          (l.value = !0), await u(n.value.backgroundImg), (l.value = !1);
        };
      return (
        E(() => {
          a.value = {
            pic: e.app.pic,
            body: e.app.body,
            from: e.app.from,
            code: "",
          };
        }),
        {
          info: a,
          onClose: d,
          dateObj: o,
          bgForm: n,
          loading: t,
          loadingF: l,
          onReloadBg: f,
          onDownloadBg: D,
          onReloadYY: b,
          onSaveBg: m,
        }
      );
    },
  }),
  J = { class: "f-14" },
  L = { class: "etab-msg-modal_day" },
  Q = { class: "etab-msg-modal_text" },
  X = { class: "name" },
  Z = { class: "etab-msg-modal_footer-bg" },
  x = { class: "etab-msg-modal_footer" };
function ee(e, i, u, n, o, t) {
  const l = _("Download"),
    a = _("el-icon"),
    d = _("el-tooltip"),
    m = _("EtabReload"),
    g = _("Magnet"),
    f = _("EtabModel"),
    b = V("loading");
  return (
    y(),
    B(
      f,
      {
        destroyOnClose: "",
        width: "860px",
        padding: !1,
        modelValue: !0,
        onClosed: e.onClose,
      },
      {
        default: r(() => [
          c(
            "div",
            {
              class: "etab-msg-modal_bg",
              style: T({ "background-image": `url(${e.info.pic})` }),
            },
            [
              c(
                "div",
                J,
                v(e.dateObj.fullYear) +
                  "." +
                  v(e.dateObj.month) +
                  " " +
                  v(e.dateObj.ncWeek),
                1
              ),
              c("div", L, v(e.dateObj.date), 1),
              c("div", Q, v(e.info.from), 1),
              c("div", X, "-" + v(e.info.body), 1),
              c("div", Z, [
                c("div", x, [
                  s(
                    d,
                    { content: "Download", placement: "right" },
                    {
                      default: r(() => [
                        A(
                          (y(),
                          B(
                            a,
                            {
                              class: "etab-msg-modal_icon hover",
                              onClick: e.onDownloadBg,
                            },
                            { default: r(() => [s(l)]), _: 1 },
                            8,
                            ["onClick"]
                          )),
                          [[b, e.loadingF]]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  s(
                    d,
                    { content: "Switch Background", placement: "right" },
                    {
                      default: r(() => [
                        s(
                          m,
                          {
                            isAuto: !0,
                            loading: e.loading,
                            class: "etab-msg-modal_icon hover",
                            onOnReload: e.onReloadBg,
                          },
                          null,
                          8,
                          ["loading", "onOnReload"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  s(
                    d,
                    { content: "Switch", placement: "right" },
                    {
                      default: r(() => [
                        s(
                          m,
                          {
                            isAuto: !0,
                            loading: e.loading,
                            class: "etab-msg-modal_icon hover",
                            onOnReload: e.onReloadYY,
                          },
                          null,
                          8,
                          ["loading", "onOnReload"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  s(
                    d,
                    { content: "Set As A Wallpaper", placement: "right" },
                    {
                      default: r(() => [
                        s(
                          a,
                          {
                            class: "etab-msg-modal_icon hover",
                            onClick: e.onSaveBg,
                          },
                          { default: r(() => [s(g)]), _: 1 },
                          8,
                          ["onClick"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ],
            4
          ),
        ]),
        _: 1,
      },
      8,
      ["onClosed"]
    )
  );
}
var se = F(q, [
  ["render", ee],
  ["__scopeId", "data-v-6fc76b5d"],
]);
export { se as default };
