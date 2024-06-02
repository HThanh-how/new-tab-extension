import {
  d,
  _ as c,
  r as i,
  o as n,
  f as p,
  g as a,
  j as r,
  k as v,
  ae as m,
  J as _,
  K as E,
} from "./75bbe58a.js";
import { u as l } from "./60edd6a5.js";
const f = d({
    name: "EtabEmojis",
    setup() {
      const { onAppStore: s } = l();
      return {
        onOpenApp: () => {
          s();
        },
      };
    },
  }),
  o = (s) => (_("data-v-d7398040"), (s = s()), E(), s),
  F = m(
    '<div class="msg flex-cc mb-10" data-v-d7398040>Scan the code to follow the public account</div><div class="warp flex-cc mb-10" data-v-d7398040><img class="img" src="https://resource.withpinbox.com/f/a96eb6a954/image/20231113/f26f648d-5a7a-48aa-93a1-d0f817f13b7a.jpeg" data-v-d7398040></div><div class="msg tx-c" data-v-d7398040>Add product discussion group</div><div class="flex-cc" data-v-d7398040><div class="emojis" data-v-d7398040><div class="emoji emoji-center" data-v-d7398040>\u{1F929}</div><div class="emoji emoji-left" data-v-d7398040>❤️</div><div class="emoji emoji-right" data-v-d7398040>❤️</div></div></div>',
    4
  ),
  b = { class: "alt" },
  A = o(() => a("b", { class: "b" }, "\u{1F449}Like our product?", -1)),
  C = o(() =>
    a(
      "b",
      { class: "b" },
      "Please give us a five-star review in the app store to help us grow",
      -1
    )
  ),
  j = { class: "arrow" };
function h(s, e, B, g, x, w) {
  const t = i("EtabIcon");
  return (
    n(),
    p(
      "section",
      {
        class: "emojis-warp",
        onClick:
          e[0] ||
          (e[0] = v((...u) => s.onOpenApp && s.onOpenApp(...u), ["stop"])),
      },
      [
        F,
        a("div", b, [
          A,
          C,
          a("span", j, [r(t, { size: 20, name: "chatgpt-left" })]),
        ]),
      ]
    )
  );
}
var k = c(f, [
  ["render", h],
  ["__scopeId", "data-v-d7398040"],
]);
export { k as E };
