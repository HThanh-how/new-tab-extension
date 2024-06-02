import {
    a2 as V,
    b as $,
    R as L,
    i as F,
    a5 as J,
    a6 as M,
    J as x,
    I as j,
  } from "./index.js";
  import {
    _ as Y,
    e as w,
    a as H,
    r as v,
    o as I,
    f as B,
    g as s,
    j as E,
    I as _,
    W as z,
    a8 as P,
    t as b,
    H as G,
    aa as r,
    P as i,
    Q as K,
    C as Q,
    L as W,
    J as q,
    K as X,
  } from "./75bbe58a.js";
  import { E as O } from "./7e3d04ab.js";
  import "./04ee1aa4.js";
  import { E as Z } from "./ee1213a1.js";
  import "./8e76c846.js";
  const ee = {
      name: "AppReset",
      components: { EtabUpload: Z },
      setup() {
        const { onResetTheme: m } = V(),
          n = $(),
          C = w(!1),
          l = w(0),
          p = w([]);
        let g = [];
        const f = H(() => n.$state.userInfo.localIndex || l.value),
          D = async () => {
            try {
              i.setLoading("Downloading");
              const t = L(new Date(), "YYYY-MM-DD HH-mm"),
                a = await F.getAppIcons(),
                o = K();
              J(
                JSON.stringify({
                  version: Q.VITE_V,
                  updateTime: new Date().getTime(),
                  platform: o,
                  appConfig: n.$state.appConfig,
                  userInfo: n.$state.userInfo,
                  searchEngines: n.$state.searchEngines,
                  icons: a,
                }),
                t,
                "json"
              );
            } catch {
              i.error("Download failed");
            } finally {
              i.hideLoading();
            }
          },
          y = (t) => {
            const a = { data: [] };
            return (
              t.navConfig.forEach((o) => {
                const u = { name: o.name, id: o.id, list: [] };
                (u.list = (o.children || []).map((c) => ({
                  data: {
                    code: c.id,
                    type: j.icon,
                    icon: c.src,
                    appName: c.name,
                    url: c.url,
                    bg: c.backgroundColor,
                  },
                }))),
                  a.data.push(u);
              }),
              a
            );
          },
          d = async (t) => {
            if (
              (await O.confirm(
                "Are you sure you want to update the uploaded file configuration?",
                "Warm Prompt",
                {
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                  type: "warning",
                }
              )) !== "confirm"
            )
              return !1;
            const o = await M(t);
            let u = o ? JSON.parse(o) : "";
            if (t.name.indexOf(".itabdata") != -1) {
              if (
                ((u = { icons: {}, updateTime: new Date().getTime() }),
                (u.icons = y(u)),
                u.icons.data.length < 1)
              )
                return i.error("No navigation data available!"), !1;
            } else if (!u.icons || !Array.isArray(u.icons))
              return i.error("File is corrupted!"), !1;
            return await h(u), !1;
          },
          h = async (t) => {
            let a = !0;
            const o = { icons: {}, appConfig: {}, isError: !0 };
            try {
              i.setLoading("Updating");
              const u = await F.getAppIcons();
              (o.appConfig = x(n.$state.appConfig)),
                (o.userInfo = x(n.$state.userInfo)),
                (o.searchEngines = x(n.$state.searchEngines)),
                (o.icons = u);
              const c = [
                {
                  key: "appConfig",
                  fun: async (e) => {
                    e &&
                      Object.keys(e).length > 0 &&
                      (await n.seteTabConfig({
                        updateTime: new Date().getTime(),
                        data: e,
                      }));
                  },
                },
                {
                  key: "icons",
                  fun: async (e) => {
                    e && e.length > 0 && (await F.setAppIcons(e));
                  },
                },
                {
                  key: "userInfo",
                  fun: async (e) => {
                    if (e && e.searchEngine) {
                      const U =
                        typeof e.localIndex == "number"
                          ? e.localIndex
                          : n.$state.userInfo.localIndex;
                      await n.setUserInfo({
                        searchEngine: e.searchEngine,
                        news: e.news,
                        localIndex: U || 0,
                      });
                    }
                  },
                },
                {
                  key: "searchEngines",
                  fun: async (e) => {
                    e && e.length > 0 && (await n.setSearchEngine(e));
                  },
                },
              ];
              let T = 0;
              for (let e = 0; e < c.length; e++)
                try {
                  await c[e].fun(t[c[e].key]), T++;
                } catch {
                  await c[e].fun(o[c[e].key]), (a = !1);
                  break;
                }
              T === c.length && (a = !0);
            } catch {
              a = !1;
            }
            return (
              i.hideLoading(),
              a
                ? window.appStorage.onPush(W.cache, {
                    icons: t.icons,
                    isCache: !1,
                  })
                : i.error("Update failed"),
              a
            );
          },
          S = async (t) => {
            await m(t), i.hideLoading(), i.success("Reset successful");
          },
          R = async (t) => {
            if (
              (await O.confirm(
                `Are you sure you want to rollback to version v${p.value[t].localIndex}?`,
                "Warm Prompt",
                {
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                  type: "warning",
                }
              )) !== "confirm"
            )
              return;
            const o = g.findIndex((c) => c.localIndex == p.value[t].localIndex);
            (await h(g[o])) && k();
          },
          k = async () => {
            (g = (await F.getLocalCache()) || []),
              (p.value = g
                .map((a) => ({
                  updateTimeStr: L(a.updateTime),
                  localIndex: a.localIndex,
                }))
                .sort((a, o) => o.localIndex - a.localIndex)),
              p.value.length > 0 && (l.value = p.value[0].localIndex);
          };
        return {
          onReset: S,
          onDownload: D,
          onBeforeUpload: d,
          isShowLocal: C,
          onShowLocal: async () => {
            (C.value = !0), k();
          },
          onResetLocal: R,
          localIndex: f,
          locals: p,
        };
      },
    },
    A = (m) => (q("data-v-411c2b02"), (m = m()), X(), m),
    se = { class: "app-reset" },
    ne = { class: "item etab-theme flex-c" },
    oe = A(() =>
      s(
        "div",
        { class: "flex1" },
        [
          s("p", { class: "lable" }, [
            r("🙈"),
            s("span", { class: "ml-5" }, "Reset Configuration"),
          ]),
          s(
            "p",
            { class: "msg" },
            "Reset to default configuration, such as wallpaper and layout"
          ),
        ],
        -1
      )
    ),
    ae = { class: "ml-20" },
    te = r(" Reset "),
    ue = { class: "item etab-theme flex-c" },
    ce = A(() =>
      s(
        "div",
        { class: "flex1" },
        [
          s("p", { class: "lable" }, [
            r("🙈"),
            s("span", { class: "ml-5" }, "Reset Icons"),
          ]),
          s(
            "p",
            { class: "msg" },
            "Reset your icons to default"
          ),
        ],
        -1
      )
    ),
    le = { class: "ml-20" },
    ie = r(" Reset "),
    re = { class: "item etab-theme flex-c" },
    de = A(() =>
      s(
        "div",
        { class: "flex1" },
        [
          s("p", { class: "lable" }, [
            r("👁️‍🗨️"),
            s("span", { class: "ml-5" }, "Data Management"),
          ]),
          s(
            "p",
            { class: "msg" },
            "Export or import data from other platforms (compatible with itab)"
          ),
        ],
        -1
      )
    ),
    pe = { class: "ml-20" },
    fe = { class: "flex" },
    Ee = r(" Export Configuration "),
    _e = { class: "flex" },
    me = r(" Data Recovery "),
    he = r("Import Configuration"),
    ge = { class: "logs app-scrollbar" },
    Fe = { class: "ml-10" };
  function Ce(m, n, C, l, p, g) {
    const f = v("EtabBt"),
      D = v("EtabUpload"),
      y = v("EtabModel");
    return (
      I(),
      B("section", se, [
        s("div", ne, [
          oe,
          s("div", ae, [
            E(
              f,
              {
                type: "primary",
                onOnClick: n[0] || (n[0] = (d) => l.onReset("theme")),
              },
              { default: _(() => [te]), _: 1 }
            ),
          ]),
        ]),
        s("div", ue, [
          ce,
          s("div", le, [
            E(
              f,
              {
                type: "primary",
                onOnClick: n[1] || (n[1] = (d) => l.onReset("icons")),
              },
              { default: _(() => [ie]), _: 1 }
            ),
          ]),
        ]),
        s("div", re, [
          de,
          s("div", pe, [
            s("div", fe, [
              E(
                f,
                {
                  style: { width: "100px" },
                  type: "primary",
                  class: "mb-10",
                  onOnClick: l.onDownload,
                },
                { default: _(() => [Ee]), _: 1 },
                8,
                ["onOnClick"]
              ),
            ]),
            s("div", _e, [
              E(
                f,
                {
                  style: { width: "100px" },
                  type: "primary",
                  class: "mb-10",
                  onOnClick: l.onShowLocal,
                },
                { default: _(() => [me]), _: 1 },
                8,
                ["onOnClick"]
              ),
            ]),
            E(
              D,
              { onOnChange: l.onBeforeUpload, type: "file" },
              { default: _(() => [he]), _: 1 },
              8,
              ["onOnChange"]
            ),
          ]),
        ]),
        E(
          y,
          {
            title:
              "Historical Backup Records (Keep the latest five versions)",
            width: "380px",
            customClass: "logs-warp",
            modelValue: l.isShowLocal,
            onClosed: n[2] || (n[2] = (d) => (l.isShowLocal = !1)),
          },
          {
            default: _(() => [
              s("div", ge, [
                (I(!0),
                B(
                  z,
                  null,
                  P(
                    l.locals,
                    (d, h) => (
                      I(),
                      B("p", { class: "flex-cc log", key: h }, [
                        s(
                          "span",
                          null,
                          "Version: v" + b(d.localIndex),
                          1
                        ),
                        s("span", Fe, b(d.updateTimeStr), 1),
                        E(
                          f,
                          {
                            text: "",
                            class: G(["ml-10", { "bt-tx": h == 0 }]),
                            onOnClick: (S) => l.onResetLocal(h),
                          },
                          {
                            default: _(() => [
                              r(
                                b(
                                  d.localIndex == l.localIndex
                                    ? "Current"
                                    : "Rollback"
                                ),
                                1
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["class", "onOnClick"]
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ]),
            _: 1,
          },
          8,
          ["modelValue"]
        ),
      ])
    );
  }
  var be = Y(ee, [
    ["render", Ce],
    ["__scopeId", "data-v-411c2b02"],
  ]);
  export { be as default };
  