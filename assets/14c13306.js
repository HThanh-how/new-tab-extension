import { u as _ } from "./ef422e2a.js";
import {
  _ as f,
  d as b,
  a as g,
  O as h,
  a2 as w,
  a5 as E,
  o as n,
  f as p,
  g as t,
  k,
  t as i,
  W as L,
  a8 as y,
  H as A,
  aa as O,
  l as u,
  F as m,
  J as S,
  K as T,
} from "./75bbe58a.js";
import { a0 as N, a1 as C, A as M } from "./index.js";
const $ = b({
    name: "TaskMed",
    ..._,
    setup(s) {
      const e = N(),
        r = g(() => e.$state.taskList),
        d = async () => {
          const o = (await C.onGet()) || [];
          o.length > 0 ? e.setTaskList(o[0].taskList) : e.setTaskList([]);
        },
        l = () => {
          window.appStorage.emit(m.onOpen, { keyName: M.Task, data: s.app });
        },
        c = (o) => {
          window.appStorage.emit(m.onAppEdit, o);
        };
      return (
        h(() => {
          d();
        }),
        { taskList: r, onOpen: l, onAppEdit: c }
      );
    },
  }),
  D = (s) => (S("data-v-6b66b55e"), (s = s()), T(), s),
  F = { class: "app-icon_warp app-scrollbar bg-cover bg-filter" },
  I = { class: "span" },
  B = { class: "number ml-10" },
  V = { class: "task-list flex app-scrollbar-0" },
  z = D(() => t("span", { class: "checkbox" }, null, -1)),
  G = { key: 1, class: "task-list flex-cc" },
  H = { class: "etab-app-box_name" };
function J(s, e, r, d, l, c) {
  const o = w("edit");
  return E(
    (n(),
    p(
      "div",
      {
        class: "etab-app-box task-icon task-icon-med",
        onOnAppEdit:
          e[1] || (e[1] = (...a) => s.onAppEdit && s.onAppEdit(...a)),
        onClick:
          e[2] || (e[2] = k((...a) => s.onOpen && s.onOpen(...a), ["stop"])),
      },
      [
        t("div", F, [
          t(
            "div",
            {
              class: "header flex-cc",
              onClick:
                e[0] ||
                (e[0] = k((...a) => s.onOpen && s.onOpen(...a), ["stop"])),
            },
            [
              t("span", I, "\u{1F3AF}" + i(s.app.appName), 1),
              t("span", B, i(s.taskList.length), 1),
            ]
          ),
          t("div", V, [
            s.taskList.length > 0
              ? (n(!0),
                p(
                  L,
                  { key: 0 },
                  y(
                    s.taskList,
                    (a, v) => (
                      n(),
                      p("div", { key: v, class: "task-li" }, [
                        t(
                          "div",
                          { class: A(["row-1", { "task-line": !!a.state }]) },
                          [z, O(" " + i(a.name), 1)],
                          2
                        ),
                      ])
                    )
                  ),
                  128
                ))
              : u("", !0),
            s.taskList.length < 1
              ? (n(), p("section", G, "No Data"))
              : u("", !0),
          ]),
        ]),
        t("div", H, i(s.app.appName), 1),
      ],
      32
    )),
    [[o, s.appEdit]]
  );
}
var j = f($, [
  ["render", J],
  ["__scopeId", "data-v-6b66b55e"],
]);
export { j as default };
