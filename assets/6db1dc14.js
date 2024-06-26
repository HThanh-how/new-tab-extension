import {
  _ as k,
  d as E,
  e as _,
  O as I,
  r as m,
  o as d,
  c as b,
  I as f,
  g as C,
  f as g,
  a8 as w,
  H as x,
  k as v,
  t as B,
  W as N,
  j as M,
  L as A,
  F as S,
  aa as $,
} from "./75bbe58a.js";
import { i as F, J as h } from "./index.js";
const V = E({
    name: "Modal",
    props: {
      groupId: { type: Number, default: 0 },
      app: {
        type: Object,
        default: () => ({
          icon: null,
          name: null,
          type: null,
          appName: null,
          code: null,
          url: null,
          bg: null,
        }),
      },
    },
    setup(o) {
      const p = _([]),
        s = _(0);
      let n = [];
      const c = async () => {
          const e = await F.getAppIcons(),
            a = e.map((t) => ({ list: [], id: t.id, name: t.name }));
          (p.value = h(a)), (n = h(e));
        },
        i = async () => {
          const e = n.findIndex((l) => l.id === o.groupId),
            a = n.findIndex((l) => l.id === s.value),
            t = n[e].list.findIndex((l) => l.data.appName === o.app.appName),
            y = n[e].list[t];
          n[e].list.splice(t, 1),
            n[a].list.push(y),
            window.appStorage.onPush(A.cache, { icons: n }),
            r();
        },
        u = (e) => {
          s.value = e;
        },
        r = () => {
          window.appStorage.emit(S.onClose);
        };
      return (
        I(() => {
          c(), (s.value = o.groupId);
        }),
        { onClose: r, onChange: u, onSave: i, groups: p, group: s }
      );
    },
  }),
  j = { class: "groups" },
  O = ["onClick"],
  J = { class: "flex-end bts" },
  L = $("Confirm");
function z(o, p, s, n, c, i) {
  const u = m("EtabBt"),
    r = m("EtabModel");
  return (
    d(),
    b(
      r,
      {
        destroyOnClose: "",
        title:
          "Will=>" +
          o.app.appName +
          "=>Move To Group\u{1F447}",
        width: "320px",
        modelValue: !0,
        onClosed: o.onClose,
      },
      {
        default: f(() => [
          C("ul", j, [
            (d(!0),
            g(
              N,
              null,
              w(
                o.groups,
                (e, a) => (
                  d(),
                  g(
                    "li",
                    {
                      class: x([
                        "group pointer",
                        { checked: e.id === o.group },
                      ]),
                      onClick: v((t) => o.onChange(e.id), ["stop"]),
                      key: a,
                    },
                    B(e.name),
                    11,
                    O
                  )
                )
              ),
              128
            )),
          ]),
          C("div", J, [
            M(
              u,
              { type: "primary", onClick: v(o.onSave, ["stop"]) },
              { default: f(() => [L]), _: 1 },
              8,
              ["onClick"]
            ),
          ]),
        ]),
        _: 1,
      },
      8,
      ["title", "onClosed"]
    )
  );
}
var P = k(V, [
  ["render", z],
  ["__scopeId", "data-v-f0f5104c"],
]);
export { P as default };
