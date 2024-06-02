/*!
 * Powered by uglifiyJS v2.6.1, Build by http://tool.uis.cc/jsmin/
 * build time: Sun Nov 26 2023 17:05:55 GMT+0800 (中国标准时间)
 */
var _hmt = _hmt || [];
!(function () {
  var t = {},
    e = {},
    n = {
      id: "c27df9e83ad1b33a70c1f19b400ffc33",
      dm: ["api.etab.store"],
      js: "tongji.baidu.com/hm-web/js/",
      etrk: [],
      cetrk: [],
      cptrk: [],
      icon: "",
      ctrk: [],
      vdur: 18e5,
      age: 31536e6,
      qiao: 0,
      pt: 0,
      spa: 0,
      aet: "",
      hca: "24D8DE6E52644FC3",
      ab: "0",
      v: 1,
    },
    a = void 0,
    o = !0,
    i = null,
    r = !1;
  (e.cookie = {}),
    (e.cookie.set = function (t, e, n) {
      var a;
      n.C && ((a = new Date()), a.setTime(a.getTime() + n.C)),
        (document.cookie =
          t +
          "=" +
          e +
          (n.domain ? "; domain=" + n.domain : "") +
          (n.path ? "; path=" + n.path : "") +
          (a ? "; expires=" + a.toGMTString() : "") +
          (n.dc ? "; secure" : ""));
    }),
    (e.cookie.get = function (t) {
      return (t = RegExp("(^| )" + t + "=([^;]*)(;|$)").exec(document.cookie))
        ? t[2]
        : i;
    }),
    (e.cookie.rb = function (t, n) {
      try {
        var o = "Hm_ck_" + +new Date();
        e.cookie.set(o, "42", { domain: t, path: n, C: a });
        var i = "42" === e.cookie.get(o) ? "1" : "0";
        return e.cookie.set(o, "", { domain: t, path: n, C: -1 }), i;
      } catch (r) {
        return "0";
      }
    }),
    (e.event = {}),
    (e.event.c = function (t, e, n, a) {
      t.addEventListener
        ? t.addEventListener(e, n, a || r)
        : t.attachEvent &&
          t.attachEvent("on" + e, function (e) {
            n.call(t, e);
          });
    }),
    (function () {
      var t = e.event;
      return (
        (e.lang = {}),
        (e.lang.i = function (t, e) {
          return "[object " + e + "]" === {}.toString.call(t);
        }),
        (e.lang.j = function (t) {
          return e.lang.i(t, "Function");
        }),
        (e.lang.J = function (t) {
          return e.lang.i(t, "Object");
        }),
        (e.lang.Wb = function (t) {
          return e.lang.i(t, "Number") && isFinite(t);
        }),
        (e.lang.Z = function (t) {
          return e.lang.i(t, "String");
        }),
        (e.lang.isArray = function (t) {
          return e.lang.i(t, "Array");
        }),
        (e.lang.n = function (t) {
          return t.replace
            ? t.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2")
            : t;
        }),
        (e.lang.trim = function (t) {
          return t.replace(/^\s+|\s+$/g, "");
        }),
        (e.lang.find = function (t, n, a) {
          if (e.lang.isArray(t) && e.lang.j(n))
            for (var o = t.length, r = 0; o > r; r++)
              if (r in t && n.call(a || t, t[r], r)) return t[r];
          return i;
        }),
        (e.lang.X = function (t, n) {
          return (
            e.lang.find(t, function (t) {
              return t === n;
            }) != i
          );
        }),
        (e.lang.filter = function (t, n) {
          var a = -1,
            o = 0,
            r = t == i ? 0 : t.length,
            c = [];
          if (e.lang.j(n))
            for (; ++a < r; ) {
              var u = t[a];
              n(u, a, t) && (c[o++] = u);
            }
          return c;
        }),
        (e.lang.unique = function (t, n) {
          var a,
            o,
            i = t.length,
            r = t.slice(0);
          for (
            e.lang.j(n) ||
            (n = function (t, e) {
              return t === e;
            });
            0 < --i;

          )
            for (o = r[i], a = i; a--; )
              if (n(o, r[a])) {
                r.splice(i, 1);
                break;
              }
          return r;
        }),
        (e.lang.Zb = function (t, e) {
          function n(t) {
            return (
              (t = (a + a + Number(t).toString(2)).slice(-64)),
              [parseInt(t.slice(0, 32), 2), parseInt(t.slice(-32), 2)]
            );
          }
          var a = "00000000000000000000000000000000",
            o = n(t),
            i = n(e);
          return parseInt(
            (a + ((o[0] | i[0]) >>> 0).toString(2)).slice(-32) +
              (a + ((o[1] | i[1]) >>> 0).toString(2)).slice(-32),
            2
          );
        }),
        (e.lang.extend = function (t) {
          for (
            var e = Array.prototype.slice.call(arguments, 1), n = 0;
            n < e.length;
            n++
          ) {
            var a,
              o = e[n];
            for (a in o)
              Object.prototype.hasOwnProperty.call(o, a) &&
                o[a] &&
                (t[a] = o[a]);
          }
          return t;
        }),
        (e.lang.Ob = function (n) {
          function a(t, n) {
            var a = window.history,
              o = a[t];
            a[t] = function () {
              o.apply(a, arguments), e.lang.j(n) && n();
            };
          }
          a("pushState", function () {
            n();
          }),
            a("replaceState", function () {
              n();
            }),
            t.c(
              window,
              window.history.pushState ? "popstate" : "hashchange",
              function () {
                n();
              }
            );
        }),
        e.lang
      );
    })(),
    (e.url = {}),
    (e.url.f = function (t, e) {
      var n = t.match(RegExp("(^|&|\\?|#)(" + e + ")=([^&#]*)(&|$|#)", ""));
      return n ? n[3] : i;
    }),
    (e.url.Sa = function (t) {
      return (t = t.match(/^(https?:\/\/)?([^\/\?#]*)/))
        ? t[2].replace(/.*@/, "")
        : i;
    }),
    (e.url.V = function (t) {
      return (t = e.url.Sa(t)) ? t.replace(/:\d+$/, "") : t;
    }),
    (e.url.pb = function (t) {
      var e = document.location.href,
        e = e.replace(/^https?:\/\//, "");
      return 0 === e.indexOf(t);
    }),
    (e.url.qb = function (t, e) {
      (t = "." + t.replace(/:\d+/, "")), (e = "." + e.replace(/:\d+/, ""));
      var n = t.indexOf(e);
      return n > -1 && n + e.length === t.length;
    }),
    (function () {
      var t = e.lang,
        n = e.url;
      return (
        (e.d = {}),
        (e.d.La = function (t) {
          return document.getElementById(t);
        }),
        (e.d.Vb = function (t) {
          if (!t) return i;
          try {
            if (((t = String(t)), 0 === t.indexOf("!HMCQ!"))) return t;
            if (0 === t.indexOf("!HMCC!"))
              return document.querySelector(t.substring(6, t.length));
            for (
              var e = t.split(">"), n = document.body, a = e.length - 1;
              a >= 0;
              a--
            )
              if (-1 < e[a].indexOf("#")) {
                var o = e[a].split("#")[1];
                (n = document.getElementById(o)) ||
                  (n = document.getElementById(decodeURIComponent(o))),
                  (e = e.splice(a + 1, e.length - (a + 1)));
                break;
              }
            for (t = 0; n && t < e.length; ) {
              var r = String(e[t]).toLowerCase();
              if ("html" !== r && "body" !== r) {
                var a = 0,
                  c = e[t].match(/\[(\d+)\]/i),
                  o = [];
                if (c) (a = c[1] - 1), (r = r.split("[")[0]);
                else if (1 !== n.childNodes.length) {
                  for (var u = 0, s = 0, d = n.childNodes.length; d > s; s++) {
                    var l = n.childNodes[s];
                    if (
                      (1 === l.nodeType &&
                        l.nodeName.toLowerCase() === r &&
                        u++,
                      u > 1)
                    )
                      return i;
                  }
                  if (1 !== u) return i;
                }
                for (u = 0; u < n.childNodes.length; u++)
                  1 === n.childNodes[u].nodeType &&
                    n.childNodes[u].nodeName.toLowerCase() === r &&
                    o.push(n.childNodes[u]);
                if (!o[a]) return i;
                n = o[a];
              }
              t++;
            }
            return n;
          } catch (f) {
            return i;
          }
        }),
        (e.d.fa = function (t, e) {
          var n = [],
            a = [];
          if (!t) return a;
          for (; t.parentNode != i; ) {
            for (
              var o = 0, r = 0, c = t.parentNode.childNodes.length, u = 0;
              c > u;
              u++
            ) {
              var s = t.parentNode.childNodes[u];
              if (
                s.nodeName === t.nodeName &&
                (o++, s === t && (r = o), r > 0 && o > 1)
              )
                break;
            }
            if ((c = "" !== t.id) && e) {
              n.unshift("#" + encodeURIComponent(t.id));
              break;
            }
            c &&
              ((c = "#" + encodeURIComponent(t.id)),
              (c = 0 < n.length ? c + ">" + n.join(">") : c),
              a.push(c)),
              n.unshift(
                encodeURIComponent(String(t.nodeName).toLowerCase()) +
                  (o > 1 ? "[" + r + "]" : "")
              ),
              (t = t.parentNode);
          }
          return a.push(n.join(">")), a;
        }),
        (e.d.Xa = function (t) {
          return (t = e.d.fa(t, o)) && t.length ? String(t[0]) : "";
        }),
        (e.d.Wa = function (t) {
          return e.d.fa(t, r);
        }),
        (e.d.Ma = function (t) {
          var e;
          for (e = "A"; (t = t.parentNode) && 1 == t.nodeType; )
            if (t.tagName == e) return t;
          return i;
        }),
        (e.d.Pa = function (t) {
          return 9 === t.nodeType ? t : t.ownerDocument || t.document;
        }),
        (e.d.Ua = function (t) {
          var n = { top: 0, left: 0 };
          if (!t) return n;
          var a = e.d.Pa(t).documentElement;
          return (
            "undefined" != typeof t.getBoundingClientRect &&
              (n = t.getBoundingClientRect()),
            {
              top:
                n.top +
                (window.pageYOffset || a.scrollTop) -
                (a.clientTop || 0),
              left:
                n.left +
                (window.pageXOffset || a.scrollLeft) -
                (a.clientLeft || 0),
            }
          );
        }),
        (e.d.gc = function (t, e) {
          if (t)
            for (var n = t.childNodes, a = 0, o = n.length; o > a; a++) {
              var i = n[a];
              if (i && 3 === i.nodeType)
                return (
                  (n = i.textContent || i.innerText || i.nodeValue || ""),
                  i.textContent
                    ? (i.textContent = e)
                    : i.innerText
                    ? (i.innerText = e)
                    : (i.nodeValue = e),
                  n
                );
            }
        }),
        (e.d.ec = function (t, e) {
          if (!t) return {};
          var n = {};
          e = e || {};
          for (var o in e)
            e.hasOwnProperty(o) &&
              e[o] !== a &&
              ((n[o] = t.getAttribute(o) || ""), t.setAttribute(o, e[o]));
          return n;
        }),
        (e.d.getAttribute = function (t, e) {
          var n = (t.getAttribute && t.getAttribute(e)) || i;
          if (!n && t.attributes && t.attributes.length)
            for (var a = t.attributes, o = a.length, r = 0; o > r; r++)
              a[r].nodeName === e && (n = a[r].nodeValue);
          return n;
        }),
        (e.d.Qa = function (t) {
          var e = "document";
          return t.tagName !== a && (e = t.tagName), e.toLowerCase();
        }),
        (e.d.Za = function (e) {
          var n = "";
          return (
            e.textContent
              ? (n = t.trim(e.textContent))
              : e.innerText && (n = t.trim(e.innerText)),
            n && (n = n.replace(/\s+/g, " ").substring(0, 255)),
            n
          );
        }),
        (e.d.Ub = function (a, o) {
          var i;
          return (
            t.Z(a) && 0 === String(a).indexOf("!HMCQ!")
              ? ((i = String(a)),
                (i = n.f(document.location.href, i.substring(6, i.length))))
              : t.Z(a) ||
                ((i = e.d.Qa(a)),
                ("input" !== i ||
                  !o ||
                  ("button" !== a.type && "submit" !== a.type)) &&
                ("input" !== i || o || "password" === a.type)
                  ? "img" === i
                    ? ((i = e.d.getAttribute),
                      (i = i(a, "alt") || i(a, "title") || i(a, "src")))
                    : (i =
                        "body" === i || "html" === i
                          ? ["(hm-default-content-for-", i, ")"].join("")
                          : e.d.Za(a))
                  : (i = t.trim(a.value) || "")),
            String(i || "").substring(0, 255)
          );
        }),
        (function () {
          (e.d.ac = (function () {
            function t() {
              if (!t.K) {
                t.K = o;
                for (var e = 0, n = c.length; n > e; e++) c[e]();
              }
            }
            function e() {
              try {
                document.documentElement.doScroll("left");
              } catch (n) {
                return void setTimeout(e, 1);
              }
              t();
            }
            var n,
              a = r,
              c = [];
            return (
              document.addEventListener
                ? (n = function () {
                    document.removeEventListener("DOMContentLoaded", n, r), t();
                  })
                : document.attachEvent &&
                  (n = function () {
                    "complete" === document.readyState &&
                      (document.detachEvent("onreadystatechange", n), t());
                  }),
              (function () {
                if (!a)
                  if (((a = o), "complete" === document.readyState)) t.K = o;
                  else if (document.addEventListener)
                    document.addEventListener("DOMContentLoaded", n, r),
                      window.addEventListener("load", t, r);
                  else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", n),
                      window.attachEvent("onload", t);
                    var c = r;
                    try {
                      c = window.frameElement == i;
                    } catch (u) {}
                    document.documentElement.doScroll && c && e();
                  }
              })(),
              function (e) {
                t.K ? e() : c.push(e);
              }
            );
          })()).K = r;
        })(),
        e.d
      );
    })(),
    (function () {
      var t = e.event;
      return (
        (e.e = {}),
        (e.e.mb = /msie (\d+\.\d+)/i.test(navigator.userAgent)),
        (e.e.cookieEnabled = navigator.cookieEnabled),
        (e.e.javaEnabled = navigator.javaEnabled()),
        (e.e.language =
          navigator.language ||
          navigator.browserLanguage ||
          navigator.systemLanguage ||
          navigator.userLanguage ||
          ""),
        (e.e.Ab =
          (window.screen.width || 0) + "x" + (window.screen.height || 0)),
        (e.e.colorDepth = window.screen.colorDepth || 0),
        (e.e.Ya = function () {
          var t;
          return (
            (t = t || document),
            parseInt(
              window.pageYOffset ||
                t.documentElement.scrollTop ||
                (t.body && t.body.scrollTop) ||
                0,
              10
            )
          );
        }),
        (e.e.$a = function () {
          var t = document;
          return parseInt(
            window.innerHeight ||
              t.documentElement.clientHeight ||
              (t.body && t.body.clientHeight) ||
              0,
            10
          );
        }),
        (e.e.W = function () {
          return e.e.Ya() + e.e.$a();
        }),
        (e.e.sa = 0),
        (e.e.bb = function () {
          var t = document;
          return parseInt(
            window.innerWidth ||
              t.documentElement.clientWidth ||
              t.body.offsetWidth ||
              0,
            10
          );
        }),
        (e.e.orientation = 0),
        (function () {
          function n() {
            var t = 0;
            window.orientation !== a && (t = window.orientation),
              screen &&
                screen.orientation &&
                screen.orientation.angle !== a &&
                (t = screen.orientation.angle),
              (e.e.orientation = t),
              (e.e.sa = e.e.bb());
          }
          n(), t.c(window, "orientationchange", n);
        })(),
        e.e
      );
    })(),
    (e.w = {}),
    (e.w.parse = function (t) {
      return new Function("return (" + t + ")")();
    }),
    (e.w.stringify = (function () {
      function t(t) {
        return (
          /["\\\x00-\x1f]/.test(t) &&
            (t = t.replace(/["\\\x00-\x1f]/g, function (t) {
              var e = a[t];
              return e
                ? e
                : ((e = t.charCodeAt()),
                  "\\u00" +
                    Math.floor(e / 16).toString(16) +
                    (e % 16).toString(16));
            })),
          '"' + t + '"'
        );
      }
      function n(t) {
        return 10 > t ? "0" + t : t;
      }
      var a = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      };
      return function (a) {
        switch (typeof a) {
          case "undefined":
            return "undefined";
          case "number":
            return isFinite(a) ? String(a) : "null";
          case "string":
            return t(a);
          case "boolean":
            return String(a);
          default:
            if (a === i) return "null";
            if (a instanceof Array) {
              var o,
                r,
                c,
                u = ["["],
                s = a.length;
              for (r = 0; s > r; r++)
                switch (((c = a[r]), typeof c)) {
                  case "undefined":
                  case "function":
                  case "unknown":
                    break;
                  default:
                    o && u.push(","), u.push(e.w.stringify(c)), (o = 1);
                }
              return u.push("]"), u.join("");
            }
            if (a instanceof Date)
              return (
                '"' +
                a.getFullYear() +
                "-" +
                n(a.getMonth() + 1) +
                "-" +
                n(a.getDate()) +
                "T" +
                n(a.getHours()) +
                ":" +
                n(a.getMinutes()) +
                ":" +
                n(a.getSeconds()) +
                '"'
              );
            (o = ["{"]), (r = e.w.stringify);
            for (s in a)
              if (Object.prototype.hasOwnProperty.call(a, s))
                switch (((c = a[s]), typeof c)) {
                  case "undefined":
                  case "unknown":
                  case "function":
                    break;
                  default:
                    u && o.push(","), (u = 1), o.push(r(s) + ":" + r(c));
                }
            return o.push("}"), o.join("");
        }
      };
    })()),
    (e.localStorage = {}),
    (e.localStorage.Q = function () {
      if (!e.localStorage.g)
        try {
          (e.localStorage.g = document.createElement("input")),
            (e.localStorage.g.type = "hidden"),
            (e.localStorage.g.style.display = "none"),
            e.localStorage.g.addBehavior("#default#userData"),
            document
              .getElementsByTagName("head")[0]
              .appendChild(e.localStorage.g);
        } catch (t) {
          return r;
        }
      return o;
    }),
    (e.localStorage.set = function (t, n, a) {
      var o = new Date();
      o.setTime(o.getTime() + (a || 31536e6));
      try {
        window.localStorage
          ? ((n = o.getTime() + "|" + n), window.localStorage.setItem(t, n))
          : e.localStorage.Q() &&
            ((e.localStorage.g.expires = o.toUTCString()),
            e.localStorage.g.load(document.location.hostname),
            e.localStorage.g.setAttribute(t, n),
            e.localStorage.g.save(document.location.hostname));
      } catch (i) {}
    }),
    (e.localStorage.get = function (t) {
      if (window.localStorage) {
        if ((t = window.localStorage.getItem(t))) {
          var n = t.indexOf("|"),
            a = t.substring(0, n) - 0;
          if (a && a > new Date().getTime()) return t.substring(n + 1);
        }
      } else if (e.localStorage.Q())
        try {
          return (
            e.localStorage.g.load(document.location.hostname),
            e.localStorage.g.getAttribute(t)
          );
        } catch (o) {}
      return i;
    }),
    (e.localStorage.remove = function (t) {
      if (window.localStorage) window.localStorage.removeItem(t);
      else if (e.localStorage.Q())
        try {
          e.localStorage.g.load(document.location.hostname),
            e.localStorage.g.removeAttribute(t),
            e.localStorage.g.save(document.location.hostname);
        } catch (n) {}
    }),
    (e.sessionStorage = {}),
    (e.sessionStorage.set = function (t, e) {
      try {
        window.sessionStorage && window.sessionStorage.setItem(t, e);
      } catch (n) {}
    }),
    (e.sessionStorage.get = function (t) {
      try {
        return window.sessionStorage ? window.sessionStorage.getItem(t) : i;
      } catch (e) {
        return i;
      }
    }),
    (e.sessionStorage.remove = function (t) {
      try {
        window.sessionStorage && window.sessionStorage.removeItem(t);
      } catch (e) {}
    }),
    (function () {
      var t = e.w;
      return (
        (e.A = {}),
        (e.A.log = function (t, e) {
          var n = new Image(),
            a =
              "mini_tangram_log_" +
              Math.floor(2147483648 * Math.random()).toString(36);
          (window[a] = n),
            (n.onload = function () {
              (n.onload = i), (n = window[a] = i), e && e(t);
            }),
            (n.src = t);
        }),
        (e.A.get = function (t, n) {
          return e.A.wa({
            url: t,
            method: "GET",
            data: n.data,
            timeout: n.timeout,
            noCache: o,
            success: n.success,
            fail: n.fail,
          });
        }),
        (e.A.wa = function (e) {
          function n(t) {
            var e,
              n = [];
            for (e in t)
              t.hasOwnProperty(e) &&
                n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
            return n.join("&");
          }
          function c(n) {
            var a = e[n];
            if (a)
              if ((d && clearTimeout(d), "success" !== n)) a && a(s);
              else {
                var o;
                try {
                  o = t.parse(s.responseText);
                } catch (i) {
                  return void (a && a(s));
                }
                a && a(s, o);
              }
          }
          e = e || {};
          var u = e.data;
          "object" == typeof u && (u = n(e.data || {}));
          var s,
            d,
            l = e.url,
            f = (e.method || "GET").toUpperCase(),
            h = e.headers || {},
            g = e.timeout || 0,
            m = e.noCache || r,
            p = e.withCredentials || r;
          try {
            t: if (window.XMLHttpRequest) s = new XMLHttpRequest();
            else {
              try {
                s = new ActiveXObject("Microsoft.XMLHTTP");
                break t;
              } catch (b) {}
              s = a;
            }
            "GET" === f &&
              (u && ((l += (0 <= l.indexOf("?") ? "&" : "?") + u), (u = i)),
              m &&
                (l +=
                  (0 <= l.indexOf("?") ? "&" : "?") +
                  "b" +
                  +new Date() +
                  "=1")),
              s.open(f, l, o),
              (s.onreadystatechange = function () {
                if (4 === s.readyState) {
                  var t = 0;
                  try {
                    t = s.status;
                  } catch (e) {
                    return void c("fail");
                  }
                  c(
                    (t >= 200 && 300 > t) || 304 === t || 1223 === t
                      ? "success"
                      : "fail"
                  );
                }
              });
            for (var v in h) h.hasOwnProperty(v) && s.setRequestHeader(v, h[v]);
            p && (s.withCredentials = o),
              g &&
                (d = setTimeout(function () {
                  (s.onreadystatechange = function () {}), s.abort(), c("fail");
                }, g)),
              s.send(u);
          } catch (w) {
            c("fail");
          }
          return s;
        }),
        e.A
      );
    })(),
    (t.o = {
      kb: "http://tongji.baidu.com/hm-web/welcome/ico",
      aa: "hm.baidu.com/hm.gif",
      xa: /^(tongji|hmcdn).baidu.com$/,
      Gb: "tongji.baidu.com",
      hb: "hmmd",
      ib: "hmpl",
      Jb: "utm_medium",
      gb: "hmkw",
      Lb: "utm_term",
      eb: "hmci",
      Ib: "utm_content",
      jb: "hmsr",
      Kb: "utm_source",
      fb: "hmcu",
      Hb: "utm_campaign",
      ka: 0,
      B: Math.round(+new Date() / 1e3),
      protocol: "https:" === document.location.protocol ? "https:" : "http:",
      L: "https:",
      Da: 6e5,
      bc: 5e3,
      Ea: 5,
      ca: 1024,
      G: 2147483647,
      ra: "hca cc cf ci ck cl cm cp cu cw ds vl ep et ja ln lo lt rnd si su v cv lv api sn r ww p u tt".split(
        " "
      ),
      ga: o,
      Pb: {
        id: "data-hm-id",
        Tb: "data-hm-class",
        jc: "data-hm-xpath",
        content: "data-hm-content",
        hc: "data-hm-tag",
        link: "data-hm-link",
      },
      Rb: "data-hm-enabled",
      Qb: "data-hm-disabled",
      xb: "https://hmcdn.baidu.com/static/tongji/plugins/",
      na: ["UrlChangeTracker"],
      Nb: { $b: 0, ic: 1, Xb: 2 },
      Yb: "https://fclog.baidu.com/log/ocpcagl?type=behavior&emd=euc",
    }),
    (function () {
      var e = {
        t: {},
        c: function (t, e) {
          (this.t[t] = this.t[t] || []), this.t[t].push(e);
        },
        k: function (t, e) {
          this.t[t] = this.t[t] || [];
          for (var n = this.t[t].length, a = 0; n > a; a++) this.t[t][a](e);
        },
      };
      return (t.s = e);
    })(),
    (function () {
      var n = e.lang,
        i = /^https?:\/\//,
        c = {
          Oa: function (t) {
            var e;
            try {
              e = JSON.parse(decodeURIComponent(t[0]));
            } catch (n) {}
            return e;
          },
          la: function (e, n) {
            return (
              c.ma(t.b && t.b.a && t.b.a.u, e, n) ||
              c.ma(document.location.href, e, n)
            );
          },
          ma: function (t, e, n) {
            return t === a
              ? r
              : (i.test(e) || (t = t.replace(i, "")),
                (e = e.replace(/\/$/, "")),
                (t = t.replace(/\/$/, "")),
                n && (t = t.replace(/^(https?:\/\/)?www\./, "$1")),
                RegExp(
                  "^" +
                    e
                      .replace(/[?.+^${}()|[\]\\]/g, "\\$&")
                      .replace(/\*/g, ".*") +
                    "$"
                ).test(t));
          },
          H: function (t, e) {
            var a = c.Oa(t);
            if (!n.i(a, "Undefined")) {
              if (n.isArray(a)) {
                for (var i = 0; i < a.length; i++) if (c.la(a[i], e)) return o;
                return r;
              }
              if (n.J(a)) {
                var u,
                  i = [];
                for (u in a)
                  a.hasOwnProperty(u) && c.la(u, e) && (i = i.concat(a[u]));
                return i;
              }
            }
          },
        };
      return (t.S = c);
    })(),
    (function () {
      function n(t, e) {
        var n = document.createElement("script");
        (n.charset = "utf-8"),
          a.j(e) &&
            (n.readyState
              ? (n.onreadystatechange = function () {
                  ("loaded" === n.readyState || "complete" === n.readyState) &&
                    ((n.onreadystatechange = i), e());
                })
              : (n.onload = function () {
                  e();
                })),
          (n.src = t);
        var o = document.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(n, o);
      }
      var a = e.lang;
      return (t.load = n);
    })(),
    (function () {
      var e = t.o,
        a = {
          D: function () {
            if ("" !== n.icon) {
              var t = n.icon.split("|"),
                a = e.kb + "?s=" + n.id,
                o = "https://hmcdn.baidu.com/static" + t[0] + ".gif";
              document.write(
                "swf" === t[1] || "gif" === t[1]
                  ? '<a href="' +
                      a +
                      '" target="_blank"><img border="0" src="' +
                      o +
                      '" width="' +
                      t[2] +
                      '" height="' +
                      t[3] +
                      '"></a>'
                  : '<a href="' + a + '" target="_blank">' + t[0] + "</a>"
              );
            }
          },
        };
      return t.s.c("pv-b", a.D), a;
    })(),
    (function () {
      var a = e.url,
        o = e.cookie,
        i = e.localStorage,
        r = e.sessionStorage,
        c = {
          getData: function (t) {
            try {
              return o.get(t) || r.get(t) || i.get(t);
            } catch (e) {}
          },
          setData: function (t, e, n) {
            try {
              o.set(t, e, { domain: c.I(), path: c.U(), C: n }),
                n ? i.set(t, e, n) : r.set(t, e);
            } catch (a) {}
          },
          removeData: function (t) {
            try {
              o.set(t, "", { domain: c.I(), path: c.U(), C: -1 }),
                r.remove(t),
                i.remove(t);
            } catch (e) {}
          },
          I: function () {
            for (
              var t = document.location.hostname, e = 0, o = n.dm.length;
              o > e;
              e++
            )
              if (a.qb(t, n.dm[e]))
                return n.dm[e].replace(/(:\d+)?[/?#].*/, "");
            return t;
          },
          U: function () {
            for (var t = 0, e = n.dm.length; e > t; t++) {
              var o = n.dm[t];
              if (-1 < o.indexOf("/") && a.pb(o))
                return o.replace(/^[^/]+(\/.*)/, "$1") + "/";
            }
            return "/";
          },
        };
      return (t.R = c);
    })(),
    (function () {
      var n = e.lang,
        a = e.d,
        o = t.S,
        i = {
          Ha: function (t, e) {
            return function (n) {
              var r = n.target || n.srcElement;
              if (r) {
                var c = o.H(e) || [],
                  u = r.getAttribute(t.P);
                if (((n = n.clientX + ":" + n.clientY), u && u === n))
                  r.removeAttribute(t.P);
                else if (0 < c.length && (r = a.Wa(r)) && r.length)
                  if (
                    ((c = r.length),
                    (u = r[r.length - 1]),
                    1e4 > c * u.split(">").length)
                  )
                    for (u = 0; c > u; u++) i.qa(t, r[u]);
                  else i.qa(t, u);
              }
            };
          },
          qa: function (t, e) {
            for (var a = {}, o = String(e).split(">").length, i = 0; o > i; i++)
              (a[e] = ""),
                /\[1\]$/.test(e) &&
                  (a[e.substring(0, e.lastIndexOf("["))] = ""),
                /\]$/.test(e) || (a[e + "[1]"] = ""),
                (e = e.substring(0, e.lastIndexOf(">")));
            t && n.J(t) && t.ba && t.ba(a);
          },
          zb: function (t, e) {
            return function (n) {
              (n.target || n.srcElement).setAttribute(
                t.P,
                n.clientX + ":" + n.clientY
              ),
                t &&
                  t.N &&
                  (e ? t.N(e) : t.N("#" + encodeURIComponent(this.id), n.type));
            };
          },
        };
      return (t.Ia = i);
    })(),
    (function () {
      var a = e.d,
        i = e.event,
        r = t.S,
        c = t.Ia,
        u = {
          P: "HM_fix",
          ua: function () {
            if (
              (i.c(document, "click", c.Ha(u, n.etrk), o),
              !document.addEventListener)
            )
              for (var t = r.H(n.etrk) || [], e = 0; e < t.length; e++) {
                var s = t[e];
                -1 === s.indexOf(">") &&
                  (0 === s.indexOf("#") && (s = s.substring(1)),
                  (s = a.La(s)) && i.c(s, "click", c.zb(u), o));
              }
          },
          ba: function (t) {
            for (var e = r.H(n.etrk) || [], a = 0; a < e.length; a++) {
              var o = e[a];
              t.hasOwnProperty(o) && u.N(o);
            }
          },
          N: function (e, n) {
            (t.b.a.et = 1),
              (t.b.a.ep = "{id:" + e + ",eventType:" + (n || "click") + "}"),
              t.b.m();
          },
        };
      return t.s.c("pv-b", u.ua), u;
    })(),
    (function () {
      var a = e.d,
        i = e.lang,
        r = e.event,
        c = e.e,
        u = t.o,
        s = t.S,
        d = [],
        l = {
          ta: function () {
            n.ctrk &&
              0 < n.ctrk.length &&
              (r.c(document, "mouseup", l.Ca()),
              r.c(window, "unload", function () {
                l.M();
              }),
              setInterval(function () {
                l.M();
              }, u.Da));
          },
          Ca: function () {
            return function (e) {
              if (s.H(n.ctrk, o) && ((e = l.Na(e)), "" !== e)) {
                var a = (
                  u.L +
                  "//" +
                  u.aa +
                  "?" +
                  t.b.pa().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(e))
                ).length;
                a + (u.G + "").length > u.ca ||
                  (a +
                    encodeURIComponent(d.join("!") + (d.length ? "!" : ""))
                      .length +
                    (u.G + "").length >
                    u.ca && l.M(),
                  d.push(e),
                  (d.length >= u.Ea || /\*a\*/.test(e)) && l.M());
              }
            };
          },
          Na: function (t) {
            var e,
              o,
              r = t.target || t.srcElement;
            c.mb
              ? ((o = Math.max(
                  document.documentElement.scrollTop,
                  document.body.scrollTop
                )),
                (e = Math.max(
                  document.documentElement.scrollLeft,
                  document.body.scrollLeft
                )),
                (e = t.clientX + e),
                (o = t.clientY + o))
              : ((e = t.pageX), (o = t.pageY)),
              (t = l.Ta(t, r, e, o));
            var u =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.offsetWidth;
            switch (n.align) {
              case 1:
                e -= u / 2;
                break;
              case 2:
                e -= u;
            }
            return (
              (u = []),
              u.push(e),
              u.push(o),
              u.push(t.ub),
              u.push(t.vb),
              u.push(t.yb),
              u.push(i.n(t.wb)),
              u.push(t.Mb),
              u.push(t.cb),
              (r = "a" === (r.tagName || "").toLowerCase() ? r : a.Ma(r))
                ? (u.push("a"), u.push(i.n(encodeURIComponent(r.href))))
                : u.push("b"),
              u.join("*")
            );
          },
          Ta: function (t, e, n, o) {
            t = a.Xa(e);
            var r = 0,
              u = 0,
              s = 0,
              d = 0;
            return (
              e &&
                ((r = e.offsetWidth || e.clientWidth),
                (u = e.offsetHeight || e.clientHeight),
                (d = a.Ua(e)),
                (s = d.left),
                (d = d.top),
                i.j(e.getBBox) &&
                  ((u = e.getBBox()), (r = u.width), (u = u.height)),
                "html" === (e.tagName || "").toLowerCase()) &&
                ((r = Math.max(r, e.clientWidth)),
                (u = Math.max(u, e.clientHeight))),
              {
                ub: Math.round(100 * ((n - s) / r)),
                vb: Math.round(100 * ((o - d) / u)),
                yb: c.orientation,
                wb: t,
                Mb: r,
                cb: u,
              }
            );
          },
          M: function () {
            0 !== d.length &&
              ((t.b.a.et = 2), (t.b.a.ep = d.join("!")), t.b.m(), (d = []));
          },
        };
      return t.s.c("pv-b", l.ta), l;
    })(),
    (function () {
      function a() {
        return function () {
          (t.b.a.et = 3),
            (t.b.a.ep = t.T.Va() + "," + t.T.Ra()),
            (t.b.a.hca = n.hca),
            t.b.m();
        };
      }
      function i() {
        clearTimeout(s);
        var t;
        y && (t = "visible" == document[y]),
          _ && (t = !document[_]),
          (h = "undefined" == typeof t ? o : t),
          (f && g) || !h || !m
            ? !f || !g || (h && m) || ((w = r), (v += +new Date() - b))
            : ((w = o), (b = +new Date())),
          (f = h),
          (g = m),
          (s = setTimeout(i, 100));
      }
      function c(t) {
        var e = document,
          n = "";
        if (t in e) n = t;
        else
          for (var a = ["webkit", "ms", "moz", "o"], o = 0; o < a.length; o++) {
            var i = a[o] + t.charAt(0).toUpperCase() + t.slice(1);
            if (i in e) {
              n = i;
              break;
            }
          }
        return n;
      }
      function u(t) {
        (("focus" != t.type && "blur" != t.type) ||
          !t.target ||
          t.target == window) &&
          ((m = "focus" == t.type || "focusin" == t.type ? o : r), i());
      }
      var s,
        d = e.event,
        l = t.s,
        f = o,
        h = o,
        g = o,
        m = o,
        p = +new Date(),
        b = p,
        v = 0,
        w = o,
        y = c("visibilityState"),
        _ = c("hidden");
      return (
        i(),
        (function () {
          var t = y.replace(/[vV]isibilityState/, "visibilitychange");
          d.c(document, t, i),
            d.c(window, "pageshow", i),
            d.c(window, "pagehide", i),
            "object" == typeof document.onfocusin
              ? (d.c(document, "focusin", u), d.c(document, "focusout", u))
              : (d.c(window, "focus", u), d.c(window, "blur", u));
        })(),
        (t.T = {
          Va: function () {
            return +new Date() - p;
          },
          Ra: function () {
            return w ? +new Date() - b + v : v;
          },
        }),
        l.c("pv-b", function () {
          d.c(window, "unload", a());
        }),
        l.c("duration-send", a()),
        l.c("duration-done", function () {
          (b = p = +new Date()), (v = 0);
        }),
        t.T
      );
    })(),
    (function () {
      var o = e.lang,
        i = t.o,
        r = t.load,
        c = t.R,
        u = {
          lb: function (e) {
            if (
              (window._dxt === a || o.i(window._dxt, "Array")) &&
              "undefined" != typeof t.b
            ) {
              var u = c.I();
              r(
                [
                  i.protocol,
                  "//datax.baidu.com/x.js?si=",
                  n.id,
                  "&dm=",
                  encodeURIComponent(u),
                ].join(""),
                e
              );
            }
          },
          Fb: function (t) {
            (o.i(t, "String") || o.i(t, "Number")) &&
              ((window._dxt = window._dxt || []),
              window._dxt.push(["_setUserId", t]));
          },
        };
      return (t.Fa = u);
    })(),
    (function () {
      function a(t) {
        for (var e in t)
          if ({}.hasOwnProperty.call(t, e)) {
            var n = t[e];
            u.J(n) || u.isArray(n) ? a(n) : (t[e] = String(n));
          }
      }
      var c = e.url,
        u = e.lang,
        s = e.w,
        d = e.e,
        l = t.o,
        f = t.s,
        h = t.Fa,
        g = t.load,
        m = t.R,
        p = {
          F: [],
          O: 0,
          Y: r,
          D: function () {
            (p.h = 0),
              f.c("pv-b", function () {
                p.Ga(), p.Ja();
              }),
              f.c("pv-d", function () {
                p.Ka();
              }),
              f.c("stag-b", function () {
                t.b.a.api = p.h || p.O ? p.h + "_" + p.O : "";
              }),
              f.c("stag-d", function () {
                (t.b.a.api = 0), (p.h = 0), (p.O = 0);
              });
          },
          Ga: function () {
            var t = window._hmt || [];
            (!t || u.i(t, "Array")) &&
              ((window._hmt = {
                id: n.id,
                cmd: {},
                push: function () {
                  for (var t = window._hmt, e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    u.i(n, "Array") &&
                      (t.cmd[t.id].push(n),
                      "_setAccount" === n[0] &&
                        1 < n.length &&
                        /^[0-9a-f]{31,32}$/.test(n[1]) &&
                        ((n = n[1]), (t.id = n), (t.cmd[n] = t.cmd[n] || [])));
                  }
                },
              }),
              (window._hmt.cmd[n.id] = []),
              window._hmt.push.apply(window._hmt, t));
          },
          Ja: function () {
            var t = window._hmt;
            if (t && t.cmd && t.cmd[n.id])
              for (
                var e = t.cmd[n.id],
                  a = /^_track(Event|Order)$/,
                  o = 0,
                  i = e.length;
                i > o;
                o++
              ) {
                var r = e[o];
                a.test(r[0]) ? p.F.push(r) : p.$(r);
              }
            t.cmd[n.id] = { push: p.$ };
          },
          Ka: function () {
            if (0 < p.F.length)
              for (var t = 0, e = p.F.length; e > t; t++) p.$(p.F[t]);
            p.F = i;
          },
          $: function (t) {
            var e = t[0];
            p.hasOwnProperty(e) && u.j(p[e]) && p[e](t);
          },
          _setAccount: function (t) {
            1 < t.length && /^[0-9a-f]{31,32}$/.test(t[1]) && (p.h |= 1);
          },
          _setAutoPageview: function (e) {
            1 < e.length &&
              ((e = e[1]), r === e || o === e) &&
              ((p.h |= 2), (t.b.ha = e));
          },
          _trackPageview: function (e) {
            1 < e.length &&
              e[1].charAt &&
              "/" === e[1].charAt(0) &&
              ((p.h |= 4),
              (t.b.a.sn = t.b.ea()),
              (t.b.a.et = 0),
              (t.b.a.ep = ""),
              (t.b.a.vl = d.W()),
              p.Y || (t.b.a.su = t.b.a.u || document.location.href),
              (t.b.a.u = l.protocol + "//" + document.location.host + e[1]),
              t.b.m(),
              (t.b.sb = +new Date()));
          },
          _trackEvent: function (e) {
            2 < e.length &&
              ((p.h |= 8),
              (t.b.a.et = 4),
              (t.b.a.ep =
                u.n(e[1]) +
                "*" +
                u.n(e[2]) +
                (e[3] ? "*" + u.n(e[3]) : "") +
                (e[4] ? "*" + u.n(e[4]) : "")),
              t.b.m());
          },
          _setCustomVar: function (e) {
            if (!(4 > e.length)) {
              var a = e[1],
                o = e[4] || 3;
              if (a > 0 && 6 > a && o > 0 && 4 > o) {
                p.O++;
                for (
                  var i = (t.b.a.cv || "*").split("!"), r = i.length;
                  a - 1 > r;
                  r++
                )
                  i.push("*");
                (i[a - 1] = o + "*" + u.n(e[2]) + "*" + u.n(e[3])),
                  (t.b.a.cv = i.join("!")),
                  (e = t.b.a.cv
                    .replace(/[^1](\*[^!]*){2}/g, "*")
                    .replace(/((^|!)\*)+$/g, "")),
                  "" !== e
                    ? m.setData("Hm_cv_" + n.id, encodeURIComponent(e), n.age)
                    : m.removeData("Hm_cv_" + n.id);
              }
            }
          },
          _setReferrerOverride: function (e) {
            1 < e.length &&
              ((e = e[1]),
              u.i(e, "String")
                ? ((t.b.a.su =
                    "/" === e.charAt(0)
                      ? l.protocol + "//" + window.location.host + e
                      : e),
                  (p.Y = o))
                : (p.Y = r));
          },
          _trackOrder: function (e) {
            (e = e[1]),
              u.J(e) &&
                (a(e),
                (p.h |= 16),
                (t.b.a.et = 94),
                (t.b.a.ep = s.stringify(e)),
                t.b.m());
          },
          _setDataxId: function (t) {
            (t = t[1]), h.lb(), h.Fb(t);
          },
          _setAutoTracking: function (e) {
            1 < e.length && ((e = e[1]), r === e || o === e) && (t.b.ia = e);
          },
          _trackPageDuration: function (e) {
            1 < e.length
              ? ((e = e[1]),
                2 === String(e).split(",").length &&
                  ((t.b.a.et = 3), (t.b.a.ep = e), t.b.m()))
              : f.k("duration-send"),
              f.k("duration-done");
          },
          _require: function (t) {
            1 < t.length && ((t = t[1]), l.xa.test(c.V(t)) && g(t));
          },
          _providePlugin: function (t) {
            if (1 < t.length) {
              var e = window._hmt,
                n = t[1];
              if (
                ((t = t[2]),
                u.X(l.na, n) &&
                  u.j(t) &&
                  ((e.plugins = e.plugins || {}),
                  (e.z = e.z || {}),
                  (e.plugins[n] = t),
                  (e.l = e.l || []),
                  (t = e.l.slice()),
                  n && t.length && t[0][1] === n))
              )
                for (var a = 0, o = t.length; o > a; a++) {
                  var i = t[a][2] || {};
                  if (!e.plugins[n] || e.z[n]) break;
                  (e.z[n] = new e.plugins[n](i)), e.l.shift();
                }
            }
          },
          _requirePlugin: function (t) {
            if (1 < t.length) {
              var e = window._hmt,
                n = t[1],
                a = t[2] || {};
              if (u.X(l.na, n))
                if (
                  ((e.plugins = e.plugins || {}),
                  (e.z = e.z || {}),
                  e.plugins[n] && !e.z[n])
                )
                  e.z[n] = new e.plugins[n](a);
                else {
                  e.l = e.l || [];
                  for (var a = 0, o = e.l.length; o > a; a++)
                    if (e.l[a][1] === n) return;
                  e.l.push(t), p._require([i, l.xb + n + ".js"]);
                }
            }
          },
        };
      return p.D(), (t.ya = p), t.ya;
    })(),
    (function () {
      var e = t.s;
      n.spa !== a &&
        "1" === String(n.spa) &&
        ((window._hmt = window._hmt || []),
        window._hmt.push(["_requirePlugin", "UrlChangeTracker"]),
        e.c("pv-b", function () {
          "" !== window.location.hash && (t.b.a.u = window.location.href);
        }));
    })(),
    (function () {
      function a() {
        "undefined" == typeof window["_bdhm_loaded_" + n.id] &&
          ((window["_bdhm_loaded_" + n.id] = o),
          (this.a = {}),
          (this.ob = this.ia = this.ha = o),
          (this.ga = m.ga),
          (this.Sb = c.Z(n.aet) && 0 < n.aet.length ? n.aet.split(",") : ""),
          this.D());
      }
      var i = e.url,
        r = e.A,
        c = e.lang,
        u = e.cookie,
        s = e.e,
        d = e.sessionStorage,
        l = e.w,
        f = e.event,
        h = t.R,
        g = e.localStorage,
        m = t.o,
        p = t.load,
        b = t.s;
      return (
        (a.prototype = {
          Db: function () {
            var t, e, a, o;
            if (
              ((m.ka = h.getData("Hm_lpvt_" + n.id) || 0),
              (o = h.getData("Hm_lvt_" + n.id)))
            ) {
              for (e = o.split(","); 2592e3 < m.B - e[0]; ) e.shift();
              for (
                a = 4 > e.length ? 2 : 3, m.B - m.ka > n.vdur && e.push(m.B);
                4 < e.length;

              )
                e.shift();
              (o = e.join(",")), (e = e[e.length - 1]);
            } else (o = m.B), (e = ""), (a = 1);
            this.nb()
              ? (h.setData("Hm_lvt_" + n.id, o, n.age),
                h.setData("Hm_lpvt_" + n.id, m.B),
                (t = u.rb(h.I(), h.U())))
              : this.da(),
              (this.a.cc = t),
              (this.a.lt = e),
              (this.a.lv = a);
          },
          nb: function () {
            var t = i.V(document.location.href);
            return !c.X(
              "sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(
                " "
              ),
              t
            );
          },
          Aa: function () {
            var t = "Hm_clear_cookie_" + n.id,
              e = g.get(t) || 0;
            n.fc && Number(n.fc) > Number(e) && (this.da(), g.set(t, n.fc));
          },
          da: function () {
            for (var t = document.cookie.split(";"), e = 0; e < t.length; e++) {
              var n = t[e].split("=");
              n.length &&
                /Hm_(up|cv|lp?vt)_[0-9a-f]{31}/.test(String(n[0])) &&
                h.removeData(c.trim(n[0])),
                n.length &&
                  /Hm_ck_[0-9]{13}/.test(String(n[0])) &&
                  h.removeData(c.trim(n[0]));
            }
          },
          pa: function () {
            for (
              var t = [], e = this.a.et, n = 0, a = m.ra.length;
              a > n;
              n++
            ) {
              var o = m.ra[n],
                i = this.a[o];
              "undefined" != typeof i &&
                "" !== i &&
                ("tt" !== o || ("tt" === o && 0 === e)) &&
                t.push(o + "=" + encodeURIComponent(i));
            }
            return t.join("&");
          },
          Eb: function () {
            this.Db(),
              (this.a.si = n.id),
              (this.a.sn = this.ea()),
              (this.a.su = document.referrer),
              (this.a.ds = s.Ab),
              (this.a.cl = s.colorDepth + "-bit"),
              (this.a.ln = String(s.language).toLowerCase()),
              (this.a.ja = s.javaEnabled ? 1 : 0),
              (this.a.ck = s.cookieEnabled ? 1 : 0),
              (this.a.lo = "number" == typeof _bdhm_top ? 1 : 0),
              (this.a.v = "1.3.0"),
              (this.a.cv = decodeURIComponent(
                h.getData("Hm_cv_" + n.id) || ""
              )),
              (this.a.tt = document.title || ""),
              (this.a.vl = s.W());
            var t = document.location.href;
            (this.a.cm = i.f(t, m.hb) || ""),
              (this.a.cp = i.f(t, m.ib) || i.f(t, m.Jb) || ""),
              (this.a.cw = i.f(t, m.gb) || i.f(t, m.Lb) || ""),
              (this.a.ci = i.f(t, m.eb) || i.f(t, m.Ib) || ""),
              (this.a.cf = i.f(t, m.jb) || i.f(t, m.Kb) || ""),
              (this.a.cu = i.f(t, m.fb) || i.f(t, m.Hb) || ""),
              /https?:/.test(document.location.protocol) && (this.a.u = t);
          },
          D: function () {
            try {
              this.Aa(),
                this.Eb(),
                this.Cb(),
                (t.b = this),
                this.za(),
                this.tb(),
                b.k("pv-b"),
                this.ob && this.Bb();
            } catch (e) {
              var a = [];
              a.push("si=" + n.id),
                a.push("n=" + encodeURIComponent(e.name)),
                a.push("m=" + encodeURIComponent(e.message)),
                a.push("r=" + encodeURIComponent(document.referrer)),
                r.log(m.L + "//" + m.aa + "?" + a.join("&"));
            }
          },
          Bb: function () {
            function t() {
              b.k("pv-d");
            }
            this.ha
              ? ((this.a.et = 0),
                (this.a.ep = ""),
                b.k("setPageviewProp"),
                (this.a.vl = s.W()),
                this.m(t),
                (this.a.p = ""))
              : t(),
              (this.sb = +new Date()),
              b.k("clearPageviewProp");
          },
          m: function (t) {
            if (this.ia) {
              var e = this;
              (e.a.rnd = Math.round(Math.random() * m.G)),
                (e.a.r = s.orientation),
                (e.a.ww = s.sa),
                b.k("stag-b");
              var n = m.L + "//" + m.aa + "?" + e.pa();
              b.k("stag-d"),
                e.va(n),
                r.log(n, function (n) {
                  e.oa(n), c.j(t) && t.call(e);
                });
            }
          },
          za: function () {
            try {
              if (window.postMessage && window.self !== window.parent) {
                var t = this;
                f.c(window, "message", function (e) {
                  if (i.V(e.origin) === m.Gb) {
                    e = e.data || {};
                    var a = e.jn || "",
                      o = /^customevent$|^heatmap$|^pageclick$|^select$/.test(
                        a
                      );
                    RegExp(n.id).test(e.sd || "") &&
                      o &&
                      ((t.a.rnd = Math.round(Math.random() * m.G)),
                      p(m.protocol + "//" + n.js + a + ".js?" + t.a.rnd));
                  }
                }),
                  window.parent.postMessage(
                    {
                      id: n.id,
                      url: document.location.href,
                      status: "__Messenger__hmLoaded",
                    },
                    "*"
                  );
              }
            } catch (e) {}
          },
          tb: function () {
            try {
              if (window.self === window.parent) {
                var t = document.location.href,
                  e = i.f(t, "baidu-analytics-token"),
                  a = i.f(t, "baidu-analytics-jn");
                /^[a-f0-9]{32}\/?$/.test(e) &&
                  /^(overlay|vabtest)\/?$/.test(a) &&
                  p(
                    m.protocol +
                      "//" +
                      n.js +
                      a +
                      ".js?" +
                      Math.round(Math.random() * m.G)
                  );
              }
            } catch (o) {}
          },
          va: function (t) {
            var e;
            try {
              e = l.parse(d.get("Hm_unsent_" + n.id) || "[]");
            } catch (a) {
              e = [];
            }
            var o = this.a.u
              ? ""
              : "&u=" + encodeURIComponent(document.location.href);
            e.push(t.replace(/^https?:\/\//, "") + o),
              d.set("Hm_unsent_" + n.id, l.stringify(e));
          },
          oa: function (t) {
            var e;
            try {
              e = l.parse(d.get("Hm_unsent_" + n.id) || "[]");
            } catch (a) {
              e = [];
            }
            if (e.length) {
              t = t.replace(/^https?:\/\//, "");
              for (var o = 0; o < e.length; o++)
                if (
                  t.replace(/&u=[^&]*/, "") === e[o].replace(/&u=[^&]*/, "")
                ) {
                  e.splice(o, 1);
                  break;
                }
              e.length ? d.set("Hm_unsent_" + n.id, l.stringify(e)) : this.Ba();
            }
          },
          Ba: function () {
            d.remove("Hm_unsent_" + n.id);
          },
          Cb: function () {
            var t,
              e = this;
            try {
              t = l.parse(d.get("Hm_unsent_" + n.id) || "[]");
            } catch (a) {
              t = [];
            }
            if (t.length)
              for (
                var o = function (t) {
                    r.log(m.L + "//" + t, function (t) {
                      e.oa(t);
                    });
                  },
                  i = 0;
                i < t.length;
                i++
              )
                o(t[i]);
          },
          ea: function () {
            return Math.round(+new Date() / 1e3) % 65535;
          },
        }),
        new a()
      );
    })();
  var c = t.o,
    u = t.load;
  if (n.apps) {
    var s = [c.protocol, "//ers.baidu.com/app/s.js?"];
    s.push(n.apps), u(s.join(""));
  }
  var d = t.o,
    l = t.load;
  n.pt &&
    l(
      [d.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", n.pt].join(
        ""
      )
    );
  var f = t.load;
  if (n.qiao) {
    for (
      var h = ["https://goutong.baidu.com/site/"],
        g = n.id,
        m = 5381,
        p = g.length,
        b = 0;
      p > b;
      b++
    )
      m = (33 * m + Number(g.charCodeAt(b))) % 4294967296;
    m > 2147483648 && (m -= 2147483648),
      h.push((m % 1e3) + "/"),
      h.push(n.id + "/b.js"),
      h.push("?siteId=" + n.qiao),
      f(h.join(""));
  }
})();
