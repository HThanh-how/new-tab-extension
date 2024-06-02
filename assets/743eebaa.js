import { U as n } from "./4050ce41.js";
import {
  _ as l,
  d as r,
  r as e,
  o as s,
  c as a,
  I as u,
  j as m,
  F as c,
} from "./75bbe58a.js";
import "./index.js";
import "./ee1213a1.js";
import "./3f4c5204.js";
import "./04ee1aa4.js";
import "./ceaf704c.js";
import "./8e76c846.js";
const d = r({
  name: "Modal",
  components: { UserApp: n },
  props: {
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
  setup() {
    return {
      onClose: () => {
        window.appStorage.emit(c.onClose);
      },
    };
  },
});
function i(o, _, f, C, b, w) {
  const p = e("UserApp"),
    t = e("EtabModel");
  return (
    s(),
    a(
      t,
      {
        destroyOnClose: "",
        title: "Edit Icon",
        width: "886px",
        modelValue: !0,
        onClosed: o.onClose,
      },
      { default: u(() => [m(p, { app: o.app }, null, 8, ["app"])]), _: 1 },
      8,
      ["onClosed"]
    )
  );
}
var x = l(d, [["render", i]]);
export { x as default };
