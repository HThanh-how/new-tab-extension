import { E as $ } from "./a437c2e6.js";
import { n as S, N as E } from "./28945d09.js";
import { b as I, d as m, A as N, $ as w } from "./index.js";
import { e as f, a as T, O as b, F as y } from "./75bbe58a.js";
var M = {
  components: { EtabReload: $ },
  props: {
    appEdit: { type: Object, default: !1 },
    app: {
      type: Object,
      default: { icon: null, name: null, code: null, appName: null, url: null },
    },
  },
  setup(o) {
    const p = I(),
      s = f([]),
      l = f(0),
      r = T(() =>
        S.filter((e) => !!p.$state.userInfo.news[e.type]).sort(
          (e, t) =>
            p.$state.userInfo.news[t.type] - p.$state.userInfo.news[e.type]
        )
      );
    let a = {};
    const g = async (e, t) => {
        l.value = r.value.findIndex((c) => c.type === e);
        const D = w();
        if (
          t &&
          a[`${e}`] &&
          a.lastDate === D &&
          t.updateTime < t.destroyTime
        ) {
          s.value = [...a[`${e}`]].splice(0, 5);
          return;
        }
        try {
          const n = ((await E.getHotsearch({ type: e })).data || []).splice(
            0,
            5
          );
          (s.value = n), (a[`${e}`] = n), (a.lastDate = w());
          const i = new Date();
          await m.setAppStore(o.app.code, {
            data: a,
            updateTime: i.getTime(),
            destroyTime: new Date(i.setDate(i.getDate() + 1)).getTime(),
          });
        } catch {
          const n = a[`${e}`] || [];
          s.value = n;
        }
      },
      u = async (e) => {
        const { type: t } = r.value[e || 0];
        d(t);
      },
      d = async (e) => {
        const t = await m.getAppStore(o.app.code);
        (a = (t && t.data) || {}), g(e, t || {});
      },
      v = () => {
        window.appStorage.emit(y.onOpen, { keyName: N.News, data: o.app });
      },
      A = (e) => {
        window.appStorage.emit(y.onAppEdit, e);
      };
    return (
      b(() => {
        u();
      }),
      {
        onOpen: v,
        onAppEdit: A,
        onClickItem: d,
        onQuery: u,
        menList: r,
        newsList: s,
        tabIndex: l,
      }
    );
  },
};
export { M as u };
