import { F as r } from "./index.js";
const C = {
  Dog: "g",
  Monkey: "h",
  Tiger: "hu",
  Chicken: "j",
  Dragon: "l",
  Horse: "m",
  Ox: "n",
  Snake: "s",
  Mouse: "shu",
  Rabbit: "t",
  Sheep: "y",
  Pig: "z",
};
function N() {
  const p = ["One", "Two", "Three", "Four", "Five", "Six", "Day"],
    y = new Array(12).fill(0).map((s, e) => e + 1);
  return {
    getDates: (s, e, c = {}) => {
      const m = new Date(s, e - 1, 0).getDate(),
        E = new Date(s, e - 1, 0).getDay(),
        D = new Date(s, e, 0).getDate(),
        o = new Date(s, e - 1, 1).getDay(),
        d = new Date(s, e, 0).getDay(),
        u = [],
        l = [];
      let i = o + D,
        n = 1;
      for (d > 0 && (i += 7 - d), n; n < i; n++)
        if (n < o) {
          const t = m - E + n,
            a = r.solar2lunar(s, e, t);
          u.push({ isPrep: !0, day: t, solar: a.term || a.dayCn }),
            l.push({ year: s, month: e, day: t });
        } else if (n >= o + D) {
          const t = n - D - o + 1,
            a = r.solar2lunar(s, e, t);
          u.push({ isNext: !0, day: t, solar: a.term || a.dayCn }),
            l.push({ year: s, month: e, day: t });
        } else {
          const t = n - o + 1,
            a = r.solar2lunar(s, e, t);
          u.push({
            day: t,
            ismonth: s + e === c.year + c.month,
            solar: a.term || a.dayCn,
          }),
            l.push({ year: s, month: e, day: t });
        }
      if (u.length === 42) return u;
      const h = [],
        w = (t) => {
          const a = r.solar2lunar(t.getFullYear(), t.getMonth(), t.getDate());
          h.push({
            day: t.getDate(),
            ismonth: t.getFullYear() + t.getMonth() === c.year + c.month,
            solar: a.term || a.dayCn,
          });
        },
        A = 42 - u.length,
        g = l[l.length - 1];
      for (let t = 1; t <= A; t++) {
        const a = new Date(g.year, g.month - 1, g.day);
        a.setDate(a.getDate() + t), w(a);
      }
      return [].concat(u).concat(h).splice(0, 35);
    },
    getAnimalName: (s) => {
      const e = r.solar2lunar(s, 6, 6);
      return C[e.animal];
    },
    titleList: p,
    months: y,
  };
}
export { N as u };
