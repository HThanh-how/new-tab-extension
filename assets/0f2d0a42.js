import { Y as s } from "./c46363a2.js";
import { A as v, d as c } from "./index.js";
import { e as S, A, O as T, L as b, F as r } from "./75bbe58a.js";
var j = {
  props: {
    appEdit: { type: Object, default: !1 },
    app: {
      type: Object,
      default: { code: null, icon: null, name: null, appName: null, url: null },
    },
  },
  setup(t) {
    const a = S({ body: "", from: "", pic: "", code: "" }),
      m = () => {
        window.appStorage.emit(r.onOpen, {
          keyName: v.Msg,
          data: { ...a.value, code: t.app.code },
        });
      },
      u = (e) => {
        window.appStorage.emit(r.onAppEdit, e);
      },
      p = async () => {
        const e = await c.getAppStore(t.app.code),
          l = e && typeof e.data == "object";
        if (
          e &&
          e.destroyTime &&
          e.updateTime &&
          (l ? e.updateTime < e.destroyTime : !1)
        ) {
          a.value = { ...a.value, ...e.data, code: t.app.code };
          return;
        }
        const f = await s.newPic(),
          g = await s.getYiYan(),
          { body: i, from: w, img: y } = g.data || {},
          d = f.data,
          o = {};
        i && ((o.body = i), (o.from = w), (o.pic = y)),
          d && (o.pic = d),
          (a.value = { ...a.value, ...o });
        const n = new Date();
        c.setAppStore(t.app.code, {
          data: a.value,
          updateTime: n.getTime(),
          destroyTime: new Date(n.setDate(n.getDate() + 1)).getTime(),
        });
      };
    return (
      A(() => {
        window.appStorage.remove(t.app.code);
      }),
      T(() => {
        p(),
          window.appStorage.onStorage(b.Msg, () => {
            p();
          }),
          window.appStorage.on(t.app.code, () => {
            p();
          });
      }),
      { onOpen: m, onAppEdit: u, info: a }
    );
  },
};
export { j as u };
