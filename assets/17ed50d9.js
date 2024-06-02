import { r as b, U as y } from "./index.js";
import {
  _ as k,
  d as B,
  b7 as T,
  e as g,
  A as C,
  O as x,
  r as _,
  a2 as S,
  o as h,
  f as w,
  a5 as $,
  j as i,
  I as E,
  g as c,
  k as q,
  l as A,
  J as I,
  K as D,
  aa as L,
} from "./75bbe58a.js";
var N = "/static/images/app/wechar-logo.svg";
const V = B({
    name: "Login",
    components: { RefreshRight: b, Loading: T },
    setup(e, l) {
      const o = g(!1),
        a = g(!1),
        r = g("");
      let n = 0,
        t = null;
      const u = async () => {
          try {
            if (a.value || !r.value) {
              o.value = !1;
              return;
            }
            const s = await y.login({});
            s.data && ((n = 1 * 60), clearTimeout(t), l.emit("onLogin", s));
          } catch {
            (a.value = !0), (o.value = !1), (n = 1 * 60), clearTimeout(t);
          }
        },
        v = () => {
          n = 0;
          const s = () => {
            t = setTimeout(async () => {
              n >= 1 * 60
                ? (clearTimeout(t), (a.value = !0), (o.value = !1))
                : ((n += 2), clearTimeout(t), await u(), (o.value = !1), s());
            }, 2e3);
          };
          s();
        },
        d = async () => {
          try {
            o.value = !0;
            const s = await y.getQrcode({});
            if (s.data) {
              const F = s.data,
                R = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${F.ticket}&qrscene=${F.qrscene}`;
              (r.value = `${R}`), (n = 1 * 60), clearTimeout(t), v();
            } else (a.value = !0), (o.value = !1);
          } catch {
            (a.value = !0), (o.value = !1);
          }
        },
        f = () => {
          r.value && ((a.value = !0), (o.value = !1));
        },
        m = () => {
          (a.value = !1), (o.value = !1);
        };
      return (
        C(() => {
          (n = 1 * 60), clearTimeout(t);
        }),
        x(() => {
          d();
        }),
        { loading: o, pic: r, onRefresh: d, error: a, onError: f, onSuccess: m }
      );
    },
  }),
  p = (e) => (I("data-v-de7dc2d0"), (e = e()), D(), e),
  z = { class: "login-box" },
  U = p(() => c("img", { class: "wechat-logo", src: N }, null, -1)),
  j = p(() => c("p", null, "WeChat Login", -1)),
  M = { class: "wechat-ticket-w" },
  O = { class: "tx-c" },
  J = p(() =>
    c(
      "p",
      { class: "loading-tx tx-c" },
      "Loading...",
      -1
    )
  ),
  K = p(() =>
    c(
      "p",
      { class: "ac" },
      [
        L(" Open Wechat "),
        c("b", { calss: "b" }, "Scan It"),
        L("， "),
        c("b", { calss: "b" }, "Quick Login/Register"),
      ],
      -1
    )
  );
function Q(e, l, o, a, r, n) {
  const t = _("Loading"),
    u = _("el-icon"),
    v = _("el-image"),
    d = _("RefreshRight"),
    f = S("loading");
  return (
    h(),
    w("section", z, [
      U,
      j,
      $(
        (h(),
        w("div", M, [
          i(
            v,
            {
              lazy: "",
              class: "wechat-ticket",
              src: e.pic,
              onError: e.onError,
              onLoad: e.onSuccess,
            },
            {
              placeholder: E(() => [
                c("div", O, [
                  J,
                  i(
                    u,
                    { size: "36px" },
                    { default: E(() => [i(t, { class: "e-spin" })]), _: 1 }
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ["src", "onError", "onLoad"]
          ),
          e.error
            ? (h(),
              w(
                "div",
                {
                  key: 0,
                  class: "wechat-qrcode-refresh",
                  onClick:
                    l[0] ||
                    (l[0] = q(
                      (...m) => e.onRefresh && e.onRefresh(...m),
                      ["stop"]
                    )),
                },
                [i(u, { size: "36px" }, { default: E(() => [i(d)]), _: 1 })]
              ))
            : A("", !0),
        ])),
        [[f, e.loading]]
      ),
      K,
    ])
  );
}
var P = k(V, [
  ["render", Q],
  ["__scopeId", "data-v-de7dc2d0"],
]);
export { P as default };
