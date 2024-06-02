(function (o) {
  typeof define == "function" && define.amd ? define(o) : o();
})(function () {
  "use strict";
  var l = Object.defineProperty;
  var p = (o, a, c) =>
    a in o
      ? l(o, a, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (o[a] = c);
  var m = (o, a, c) => (p(o, typeof a != "symbol" ? a + "" : a, c), c);
  class o {
    constructor() {
      m(this, "blogMap", {
        "mp.weixin.qq.com-nickname": [
          "#js_name",
          'strong[class="profile_nickname"]',
          "#js_author_name",
        ],
        "yuque.com-nickname": [".doc-contributors", ".account_nickname_inner"],
        "douyin.com-nickname": () =>
          document
            .querySelector(
              'div[data-e2e="related-video"] .avatar-component-avatar-container img'
            )
            .getAttribute("alt"),
        "mp.weixin.qq.com-tags": [".article-tag__item"],
        "douyin.com-pic": [
          'div[data-e2e="related-video"] .avatar-component-avatar-container img',
        ],
        "juejin.cn-pic": [
          ".panel-btn.author .avatar-img",
          "#sidebar-container .jj-avatar.avatar img",
        ],
        "juejin.cn-tags": [".tag-list-container .jj-link"],
        "mp.weixin.qq.com-pic": () => {
          const e = Array.from(window.document.scripts);
          let t = "";
          return (
            e.forEach((i) => {
              if (!t && i.innerHTML.indexOf("var round_head_img") != -1) {
                const n = i.innerHTML
                  .replace(/\s+/g, "")
                  .match(/round_head_img="(.*?)";/);
                n && (t = n[1]);
              }
            }),
            t
          );
        },
      });
    }
    getForDom(e) {
      try {
        for (let t = 0; t < e.length; t++) {
          const i = document.querySelector(e[t]);
          if (i) {
            const r = i.content || i.text || i.innerText;
            if (r) return this.getText(r);
          }
        }
      } catch (t) {
        console.log(t);
      }
      return "";
    }
    getForDoms(e) {
      const t = [];
      try {
        for (let i = 0; i < e.length; i++) {
          const r = document.querySelectorAll(e[i]);
          if (r)
            for (let n = 0; n < r.length; n++) {
              const s = r[n].content || r[n].text || r[n].innerText;
              s && t.push(this.getText(s));
            }
        }
      } catch (i) {
        console.log(i);
      }
      return t.join(",");
    }
    getTitle() {
      const e = [
        'meta[property="og:title"]',
        'meta[property="dc:title"]',
        "title",
        'meta[property="dcterm:title"]',
        'meta[property="weibo:article:title"]',
        'meta[property="weibo:webpage:title"]',
        'meta[property="twitter:title"]',
        'link[rel="search"]',
        'meta[name="og:site_name"]',
        'meta[name="application-name"]',
        'meta[property="og:site_name"]',
        'meta[itemprop="headline"]',
      ];
      return this.getForDom(e);
    }
    getDesc() {
      const e = [
        'meta[name="description"]',
        'meta[property="dc:description"]',
        'meta[property="dcterm: description"]',
        'meta[property="og:description"]',
        'meta[property="twitter:description"]',
        'meta[property="weibo:article:description"]',
        'meta[property="weibo:webpage:description"]',
        'meta[property="twitter: description"]',
      ];
      return this.getForDom(e);
    }
    getMapJson(e) {
      return this.blogMap[location.hostname + "-" + e] || [];
    }
    getText(e) {
      return e && e.indexOf("-") != -1
        ? e.split("-")[0].replace(/^\s*|\s*$/g, "")
        : e && e.split("|")[0].replace(/^\s*|\s*$/g, "");
    }
    getNickname() {
      const e = this.getMapJson("nickname").concat([
          'meta[name="author"]',
          'meta[name="apple-mobile-web-app-capable"]',
          'meta[property="twitter:creator"]',
          'meta[property="dc:creator"]',
          'meta[property="dcterm:creator"]',
          'meta[itemprop="name"]',
        ]),
        t = this.getForDom(e);
      return t || "";
    }
    getLogo() {
      try {
        const e = [
          'meta[rel="apple-touch-icon"]',
          'link[type="apple-touch-icon"]',
          'link[rel="image/png"]',
          'link[rel="image/x-icon"]',
          'link[type="image/png"]',
          'link[type="image/x-icon"]',
          'link[rel="icon"]',
          'link[sizes="192x192"]',
          'link[sizes="96x96"]',
          'link[sizes="32x32"]',
          'link[sizes="16x16"]',
        ];
        for (let t = 0; t < e.length; t++) {
          const i = document.querySelector(e[t]);
          if (i) {
            const r = i.content || i.href;
            if (r) return r.indexOf("http") != -1 ? r : location.origin + r;
          }
        }
      } catch (e) {
        console.log(e);
      }
      return "";
    }
    getTags() {
      const e = this.getMapJson("tags").concat([
          'meta[itemprop="keywords"]',
          'meta[vmid="keywords"]',
        ]),
        t = this.getForDoms(e);
      return t ? t.replace("#", "") : "";
    }
    getCover() {
      try {
        const e = [
          'meta[property="og:image"]',
          'meta[property="twitter:image"]',
          'meta[name="twitter:image"]',
        ];
        for (let t = 0; t < e.length; t++) {
          const i = document.querySelector(e[t]);
          if (i) {
            const r = i.content || i.href;
            if (r) return r.indexOf("http") != -1 ? r : location.origin + r;
          }
        }
      } catch (e) {
        console.log(e);
      }
      return "";
    }
    getAttr(e, t, i) {
      let r = "";
      const n = document.querySelector(e[t]);
      return n && (e.etitle === "text" ? (r = n.text) : (r = n[e[i]])), r;
    }
    getFromPic() {
      const e = this.getMapJson("pic");
      let t = "";
      return (
        typeof e == "function"
          ? (t = e())
          : Array.isArray(e) &&
            e.map((i) => {
              t ||
                (t = this.getAttr(
                  { etitle: "select", etitleAttr: "src", select: i },
                  "select",
                  "etitleAttr"
                ));
            }),
        t
      );
    }
    getScriptJson() {
      try {
        const e = "script[type='application/ld+json']";
        if (document.querySelector(e) != null) {
          const t = document.querySelector(e),
            i = t ? JSON.parse(t.innerHTML) : {},
            r = Array.isArray(i) ? i[0] : {};
          return Object.fromEntries(
            Object.entries({
              title: r.headline,
              nickname: r.author.name,
              desc: r.description,
              cover: Array.isArray(r.image) ? r.image[0] : "",
            }).filter(([n, s]) => !!s)
          );
        }
      } catch {
        return {};
      }
    }
    getBlogJson() {
      let e = null;
      const t = this.getScriptJson();
      return (
        (e = {
          title: this.getTitle(),
          desc: this.getDesc(),
          cover: this.getCover(),
          nickname: this.getNickname(),
          logo: this.getLogo(),
          tags: this.getTags(),
          fromPic: this.getFromPic(),
          ...t,
        }),
        e
      );
    }
  }
  const a = { loading: "eTabTabLoading" };
  window.onload = () => {
    const c = new o();
    chrome.runtime.onMessage.addListener(async (e) => {
      if (e.cmdHash) {
        let t = {};
        c[e.action] && (t = await c[e.action](e.data)),
          chrome.runtime.sendMessage({
            action: e.action,
            cmdHash: e.cmdHash,
            data: t,
          });
      }
    }),
      chrome.runtime.sendMessage({ action: a.loading });
  };
});
