import { M as e } from "./75bbe58a.js";
const a = [
    {
      type: "juejin",
      name: "Nugget",
      label: "Hot Spots Today",
      icon: "/juejin.png",
    },
    {
      type: "kr36",
      name: "36Krypton",
      label: "24Hill Hot List",
      icon: "/kr36.png",
    },
    {
      type: "weibo",
      name: "Weibo",
      label: "Hot Search List",
      icon: "/weibo.png",
    },
    {
      type: "toutiao",
      name: "Today'S Headline",
      label: "Hot List",
      icon: "/toutiao.png",
    },
    {
      type: "sspai",
      name: "Minority",
      label: "Popular Articles",
      icon: "/sspai.png",
    },
    { type: "csdn", name: "CSDN", label: "Hot Spots Today", icon: "/csdn.png" },
    { type: "baidu", name: "Baidu", label: "Hot Search", icon: "/baidu.png" },
    {
      type: "bilibili",
      name: "Bilibili",
      label: "Popular",
      icon: "/bilibili.png",
    },
  ],
  n = (u) => e("/news/getNews", u);
var E = { getHotsearch: n };
export { E as N, a as n };
