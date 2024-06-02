import { W as A, a as f, s as L, i as B } from "./index.js";
import {
  _ as D,
  d as N,
  e as v,
  O as V,
  r as x,
  a2 as K,
  o as h,
  f as m,
  g as b,
  j as W,
  a5 as $,
  W as j,
  a8 as q,
  H as w,
  c as z,
  U as C,
  b8 as J,
  J as M,
  K as P,
} from "./75bbe58a.js";
function T(n, i, s) {
  return (
    (i = (function (a) {
      var u = (function (e, p) {
        if (typeof e != "object" || e === null) return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
          var r = t.call(e, p || "default");
          if (typeof r != "object") return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (p === "string" ? String : Number)(e);
      })(a, "string");
      return typeof u == "symbol" ? u : u + "";
    })(i)) in n
      ? Object.defineProperty(n, i, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[i] = s),
    n
  );
}
var y = [],
  O = {},
  E = {};
function U(n) {
  for (var i = [], s = n.length, a = [], u = 0; s >= u; u++) a.push(!0);
  return I(0, n, [], i, a), i;
}
function I(n, i, s, a, u) {
  var e = i.length;
  if (n !== e)
    for (
      var p = function () {
          var r = i.substring(n, t + 1),
            o = !1;
          if (
            y.some(function (g) {
              return g.indexOf(r) === 0;
            }) &&
            !i[t + 1] &&
            u[t + 1]
          ) {
            if (r.length === 1) s.push(r);
            else {
              var l = [];
              y.forEach(function (g) {
                g.indexOf(r) === 0 && l.push(g);
              }),
                s.push(l);
            }
            o = !0;
          } else y.indexOf(r) !== -1 && u[t + 1] && (s.push(r), (o = !0));
          if (o) {
            var c = a.length;
            I(t + 1, i, s, a, u), a.length === c && (u[t + 1] = !1), s.pop();
          }
        },
        t = n;
      e > t;
      t++
    )
      p();
  else a.push(s.join(" "));
}
function H(n, i, s, a) {
  if (!n) return !1;
  var u = n.split(" ");
  return (
    u.forEach(function (e) {
      e.length > 0 && a && u.push(e.charAt(0));
    }),
    s
      ? u.some(function (e) {
          return e.indexOf(i) === 0;
        })
      : u.indexOf(i) !== -1
  );
}
function Q(n, i) {
  if (!n || !i) return !1;
  (n = n.toLowerCase()), (i = i.replace(/\s+/g, "").toLowerCase());
  var s = n.indexOf(i);
  if (s !== -1) return [s, s + i.length - 1];
  var a = S(n.split(""), [i.split("")], i);
  if (a) return a;
  var u,
    e,
    p = (function (t) {
      for (var r = [], o = 0, l = t.length; l > o; o++) {
        var c = t.charAt(o);
        r.push(O[c] || c);
      }
      return r;
    })(n);
  return S(
    p,
    E[i] ||
      ((e = []),
      U((u = i)).forEach(function (t) {
        var r = t.split(" "),
          o = r.length - 1;
        r[o].indexOf(",")
          ? r[o].split(",").forEach(function (l) {
              r.splice(o, 1, l), e.push(JSON.parse(JSON.stringify(r)));
            })
          : e.push(r);
      }),
      (e.length !== 0 && e[0].length === u.length) || e.push(u.split("")),
      (E = T({}, u, e)),
      e),
    i
  );
}
function S(n, i, s) {
  for (var a = 0; n.length > a; a++)
    for (var u = 0; i.length > u; u++) {
      var e = i[u],
        p = e.length,
        t = p === s.length,
        r = !0,
        o = 0,
        l = 0,
        c = 0;
      if (n.length >= p) {
        for (; e.length > o; o++)
          if (o === 0 && n[a + o + l] === " ") (l += 1), (o -= 1);
          else if (n[a + o + c] === " ") (c += 1), (o -= 1);
          else if (!H(n[a + o + c], e[o], !n[a + o + 1] || !e[o + 1], t)) {
            r = !1;
            break;
          }
        if (r) return [a + l, c + a + o - 1];
      }
    }
  return !1;
}
var G = {
  match: (function (n) {
    var i = {},
      s = [
        "ju",
        "jun",
        "jue",
        "juan",
        "qu",
        "qun",
        "que",
        "xuan",
        "xu",
        "xue",
        "yu",
        "yuan",
        "yue",
        "yun",
        "nve",
        "lve",
      ];
    return (
      Object.keys(n).forEach(function (a) {
        if (((i[a] = n[a]), y.push(a), s.includes(a))) {
          var u =
            (e = a).indexOf("u") !== -1
              ? e.replace("u", "v")
              : e.replace("v", "u");
          (i[u] = n[a]), y.push(u);
        }
        var e;
      }),
      (O = (function (a) {
        var u = {};
        for (var e in a)
          for (var p = a[e], t = 0, r = p.length; r > t; t++)
            u[p[t]] = u[p[t]] ? u[p[t]] + " " + e : e;
        return u;
      })(i)),
      Q
    );
  })({
    a: "Ah Ah Pickled Ah Ah Ah",
    e: "Eh -Ah Evil Goose Controls Er Hungry Emei Crusader Oh",
    ai: "Ai Ai Aijie Cancer Sorrows Being Short, I Am A Little Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    ei: "Eh",
    xi: "The Western Seat Of Xi Xi Xi Xiyi Analysis Of The Scene Washing The Scene Of Xixi Xi Xixi Xizi Xuanli Biliheli 栖 栖 栖 栖 系 系 系 曦 曦 曦 奚 奚 奚 铣 淅 Bleak Bleak Bleak 熹 熹 熹 熹 系 系 系 系 系 系 系 系 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 Bleak Bleak 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 Bleak 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹 熹Anger 浠 Anger 檄 檄 檄 檄 翕 翕 阋 阋 舾 舾 屣 螅咭 粞 欷 欷 僖醯 鼷 Bleak 穸 穸 穸 饩 穸 穸 穸EhBleak",
    yi: "One Of The Preseators Of Yi Yi Yi Yi Yi Yi Yi Yi Yi Yi Yi Yi Yiyi Sitill Sitto Yiyi Yiyi Also Recalled The Tail -Taili -Winged Wing -Winged Chair, Yiyi Yi Yi Yi Yi Yi Aunt Yi Yiyiyiyi Yiyi Yingyi Yi Yi Yiyi Yiyi Yiyi Yiyi Bleak Iridium Iridium Winding Winding Bleak Bleak Bleak Bleak Bleak Bleak Bleak Shade Pour Bleak Huh Bleak 羿 羿 Weed Exterminate Bleak Bleak Bleak Bleak BleakBury Bleak Bury Bury Bleak Miserable Bleak Bleak Bleak Bleak",
    an: "Annan Case According To The Shore Dark Saddling Ammonium Ammonia Tadpole Tadpole Tadpole Install Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    han: "Factory Han And Han Han Han Han Khan Han Letters To Regretted Han Han Hang Han Hao Han And Defended Bleak Bleak Bleak Clam Bleak Sunset Sunset Jail Jail Jail Bleak Jail Sunset Bleak",
    ang: "Angry",
    ao: "Aoao Ao Boosa Ao Ao Ao Zi Bleak Depression Loud Bleak Bleak Bleak Bleak Bleak Bearded Bleak Bleak Grass Grass Grass Grass Grass Grass Grass Grass Grass Grass",
    wa: "Tile Digging Socks Socks Frog Bleak Wow Baby Bleak Bleak Bleak Bleak",
    yu: "Yu Yuyu Pre -Domain Yu Encountered Olympic Yuyu Yuyu Yuyu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yu Yuyu Yuyu Yuyu Porridgeiron Stasis Yuyu Bleak Bleak Bleak Puppet Bleak Bleak Bleak Bleak Porky Imprison Be 揄龉 揄龉 揄龉 揄龉 揄龉 揄龉 庾 Amazing Die In A Prison Vend Snipe Bleak Bleak Bleak Mynah Mythical Creature Slouch Bleak Ugly Armadillo Bleak Cock Cock Cock Cock Cock Cock Cock Cock Cock Cock",
    niu: "Niu Niu Niu Niu Niu Button",
    o: "Oh Oh Oh",
    ba: "Put The Baba Baba Bar Bar Dad, Batoba Porch Porch Target Scars Fence Bleak Bleak Bleak Bleak Eight Bleak Bleak Bleak Bleak Bleak Bleak",
    pa: "Afraid Of Pa Climbing And Lying Lying Lying Arfache, Rake Bleak Bleak Bleak Bleak",
    pi: "The Approved Vice -Skin Is Bad, And The Spleen Of The Spleen Is Comparable To The Fart Pipanus.Bleak",
    bi: "Bitter Currency Pen Secrets To Avoid Closing The Buddha'S Wall Disadvantages, And The Nose Arm Is Forced To Secrete The Paradise, The Dagger And The Dagger, The Benefit Of Our Our Bleak Error Bismuth Bleak Bleak Wicker Bleak Slave Girl Bleak Bleak Blighted Obstinate Obstinate Bleak Bleak Bleak Obstinate Obstinate Obstinate Obstinate Bleak Obstinate Obstinate Obstinate Bleak Obstinate Bleak Bleak Obstinate Obstinate Obstinate Bleak Bleak ObstinateBleak Bleak Be Quod Castor Seed Castor Seed Favorite Favorite",
    bai: "Bai Bai Defeated Bo Bai Bai Bai Uncle Chant Break Bleak",
    bo: "Bobo Board Blogfo Bo Bolining Boipu Ding Bo Bo Bo Bo Bo Board Blood Back Pineapple Foil Platinum Polying Board Cymbals Cymbals Jump Bleak Bleak Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Bleak Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Bleak Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon Wood Pigeon",
    bei: "Bei Bei Bao Cup Better Better Being Beef Monument Big Exhausted Beauty",
    ban: "The Half -Shift -Like Board Is Awarded With Spots, Dressed, And Wounds, Saka Stumbling Sheet Scars Bleak",
    pan: "Panpan Pan Pan Pan Panpu'S Fat Rebellion And Toddlers Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    bin: "Binbin Binbin Bin Bin Bin Bin Binbai Bin Bin Peno Bleak Porphyrite Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    bang: "Bangbian Benbang Bangbangbangbangbangbangbingbingbingbingbing Slander Slander Tattoo Gang Burdock Burdock",
    pang: "Ben Bing Ping Niche Crash Crash Weed Weed Weed",
    beng: "Pump Collapse Mussels Jump Up Jump Jump Jump Jump Jump",
    bao: "Bao Baobao Blomoblasty Blood Blossoms Fort Peeling Bao Dingbao Dipping The Falls Of Falls Falls And Plane Halite Bud Pot Bleak Jump鸨 Jump鸨 Jump鸨 Jump鸨 Jump鸨",
    bu: "Buying Cloth To Supplement The Bulibubu Book Book Of Hebu Bao Fei Plutonium Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    pu: "Pu Pupu Portuguese Portuguese Pupu Puku Exposes The Waterfall, The Pupae, The Deed Bleak Puff Puff Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    mian: "Noodle Cotton Is Free Of Mian Burmese Monument, Monading Corporation, Bleak Drunk Bleak Toad Toad Toad",
    po: "Breakfast Po Po Po Po Po Po Po Po Po Thereupon Thereupon Flat Basket Tray Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    fan: "Anti -Fan Fanfan Fan Fan Fanwan Fan Fan Fan Fan Fan Fan Fan Fan Fan Fan Vanadium Bleak Bleak Bleak Bleak",
    fu: "Fu Fu Fu Fufu Couple Paid The Father And Fu Fu, Who Went To The Buddha, Fu Fu Fu Fu Fu Fu Fu Fu Fu Fu Fufun Fu Fufan Folfu Fluttering CaptiveBat Bran Manta Bleak Bleak Wasp Mallard Bleak Venomous Snake Prince Consort Bleak Water Beetle Rafter Bleak Turnip Turnip Instep Bleak Silver Carp Anger Suburbs Die Of Hunger Bleak Cleanse Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery Embroidery",
    ben: "Benbenzene Stupid Rammed Bleak Bleak Bleak",
    feng: "Fengfeng Fengfeng Feng Fengfeng Feng Feng Feng Feng Feng Feng Feng Madon Madam Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    bian: "Whenever You Make A Whip To Distinguish The Derogatory Plaque, The Braid Bleak Bat Bleak Bleak Bleak Bleak Narrow Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    pian: "Passionate Film Is Deceived Pian Bian 骈 骈 骈 Bleak Bleak Bleak Bleak Bleak",
    zhen: "Zhenzhen Needle Zhenzhen Zhen Zhen Zhen Zhen Zhen Zhen Pillow, Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen Zhen'S Avil Has Poison Bleak Sanctuary Gizzard Mulberry Bleak Bleak Bleak Bleak Bleak",
    biao: "Table Bidding Biao Darts Mount Darts Darts Prostitute White Horse White Horse Bleak Shaggy Swim Bladder Bleak Bleak Bleak Bleak Bleak Bleak",
    piao: "Tickets Pu Diao Piao Piao Empress Classes White Horse White Horse White Horse",
    huo: "Well Or The Cargo Gets The Fire Guy, The Fire Guy Is Confused, Huo, Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    bie: "Don'T Stab",
    min: "Minmin Min Min Dish 珉 Toad Toad Toad Toad Gang Gang Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    fen: "Points And Fans Of Fen Fen Fen Fen Fenphenol",
    bing: "And The Diseased Soldier Bingbing Bing Bing Bing Bingbing'S Handle Is Champagne Bleak Bleak Bleak Bleak",
    geng: "More Cultivated Neck Geng Geng Xun Choking Geng Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    fang: "Fangshufang Anti -Visit Fangfang Imitation Workshop May Be Fat Bleak Bleak Bleak鲂 Bleak鲂 Bleak鲂 Bleak鲂 Bleak鲂",
    xian: "At Present, The County Sees The Line Limitation, The Danger Of The Danger, The Constitutional Washing Fiber, The Xianxian, The Sideline, The Salty, The Glamorous Gonad, The Sideline Side Filling, The Salivated Siam, Bleak Bleak Bleak Moss Conflagration Xenon Sleet Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak BleakBamboo Brush For Utensils",
    fou: "No Pottery",
    ca: "Dismantle",
    cha: "Check The Bad Tea, The Fork, The Hawthorn Fork, The Hawthorn, Bleak Bleak Branches Of A Tree Bleak Bleak Bleak Paint On Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    cai: "Cai Cai Cai Cai Lao Cai Guess Stepping On It",
    can: "Participate In The Disabled Meal, The Tragic Silkworm Mix Of Cannon Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    shen: "Shin Shen Shen Shi Shi Shen Sheng Shen Shen Shen Shen Chong Chi -Infiltrate Aunt Aunt Aunt Arsenic Bleak Bleak Mulberry Bleak Mix Bleak Bleak Bleak Be Be Bleak Bleak Bleak",
    cen: "Ginsen Bleak",
    san: "San Ginseng San Umbrella Sanxuan Umbrella",
    cang: "Tibetan Cang Cang Cabin Zang Yan",
    zang: "Tibetan Dirty Burial Stolen Zang Zang Stolen",
    chen: "Called Chen Shen Shenchen Chen Chen Chen Chen Chen Li Zhen Qi Qi, Be Embarrassed Be Embarrassed Bleak Bleak Coffin Prophecy Prophecy Prophecy Bleak Bleak Prophecy",
    cao: "Cao Cao Cao Tren Rough Noisy Bleak Bleak Bleak Bleak",
    ce: "The Measurement Of The Toilet Grid",
    ze: "Responsibility",
    zhai: "Treasury Choice Qi Zhaizhai Side Picking Narrow Fasting Festival Zhaizhai Bleak",
    dao: "Go To Daodao Island To Push The Rice And Mourn And Pray Deuterium Deuterium Feather Fan Feather Fan Bleak Bleak",
    ceng: "Layer",
    zha: "Chaza Fried Fraud Slice Scum, Zhaoshazhazha Blinking Oak Bleak Bleak Upbraid Ashamed Bleak Bleak Mumps Mumps Mumps Mumps Bleak Mumps",
    chai: "Disassemble Chai Bleak Bleak Bleak Hairpin Hairpin Hairpin",
    ci: "This Bad Word Resignation, Porcelain, Magnetic Zititz Gives A Temple, Females Bleak",
    zi: "Zizi Ziqi Qiqi Zizi Zizi Zizi Zi Zi Zi Zi Zi Zi Zi Zi Sister Sister Unbelieved Unbelieved Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Water Chestnut Water Chestnut Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet Common Millet",
    cuo: "Come And Misunderstand, Rubbing Discuss Lofty Lofty Lofty Dwarfish Dwarfish Dwarfish Recover From Illness Recover From Illness Recover From Illness Recover From Illness Recover From Illness Recover From Illness Recover From Illness",
    chan: "Production Single Term Turbal Type Cicada Cicada Cycling Cycles Greedy Coward Coward Coward Spy Flatter Still Water Bleak Bleak Sheep Crowding Follow Precedent Follow Precedent Follow Precedent Follow Precedent Follow Precedent Follow Precedent Follow Precedent Follow Precedent",
    shan: "Shan Shan Shan Shaanxiang Shirt Is Good At Shanshan Fan Mix Shan Zen Deleted Meals, Bleak Bleak Mountain Mountain Boring Boring Bleak Bleak Bleak Sampan Sampan Bleak Smell Of Mutton Samarium Mow Mow Mix Water With Clay Mix Water With Clay Bleak Bleak Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay Mix Water With Clay",
    zhan: "Zhanzhan Zhanzhan Zhanzhan Zhan Zhezhe Top Felt Stack Dipped In Bleak Bleak Bleak Bleak",
    xin: "Xinxin Xin Xin Xinxin Xinxin Zinc Xin Xingxin Provoked Bleak Bleak Bleak Bleak Bleak Bleak",
    lian: "Lianlian Lian Lian Lian Lian Lian Lian Curtain Lian Lian Xian Xian Xie Dwarf Bleak Bleak Trough Pouch Hung From Belt Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    chang:
      "The Director'S Factory Often Compensates Changchang To Advocate The Intestinal Openness.",
    zhang:
      "Chang Zhang Zhang'S Bargaining Account, Swelling, And Competing For Zhangzhang, Zhangzhang'S Sticks, Bonus Malaria Malaria Malaria Roe Roe Hanging Scroll Hanging Scroll Hanging Scroll Hanging Scroll Hanging Scroll Hanging Scroll",
    chao: "Super Chao Chao Stir -Fried Banking Copy Nests Lucky Mocked Mocker",
    zhao: "Following The Move To Find Zhao Zhao Zhao Zhao Zhao Zhao Makin'S Ridicule Coil Coil Bleak Bleak",
    zhou: "Junzhou Zhouzhouzhou Suddenly Days, Wiring Elbow Cattel Back Crepe Bleak Bleak Bleak Stone Roller Forced Labor Stone Roller Stone Roller Stone Roller Forced Labor Stone Roller Stone Roller",
    che: "The Car Is Completely Withdrawn,",
    ju: "According To The Car Bureau, There Is A Lift And A Drama, The Drama, The Drama, The Giant Pool, The Torch, The Torch, The Torch, The Torch, The Torch, The Ride, The Tulong, The Rulong, The Hills Of The Hurry, The Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak BleakBleak Bleak Bleak Bleak",
    cheng:
      "Cheng Chengcheng Is Informed That Sheng Grabbing Chengcheng Cheng Jing Jing Cheng Cheng Cheng Dai Orange Stunning Sheng Sheng Dangyu Path Between Fields Bleak Bleak Bleak Alcoholic Alcoholic Alcoholic Alcoholic",
    rong: "Rong Rong Rong Rong Rong Rong Rong Rong Ronglang Lofty Bleak Bleak Bleak Bleak Bleak Bleak",
    sheng:
      "Life Shengsheng Shengsheng Takes The Holy Sacred Sacred Sacrifice Province Shengzhisheng Bleak Bleak Bleak Bleak Bleak Bleak",
    deng: "Wait For Deng Deng Lingcheng Stool To Stare Bleak Step Stone Bleak Stirrup Stirrup",
    zhi: "The Governance Of The System Only Means That The Knowledge Of The Branches Of The Branches Is Directly To The Stagnation Of The Deeds, The Lipstick, The Lipstick, The Lipstick And The Nephew, The Nephew, The Nephew SpiderMole Bleak Bleak Bleak Bleak Well -Being Well -Being Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Swine Goblet Tie Tie Bleak Bleak Bleak Invasive Invasive Stallion Bleak Bleak Stallion Stallion Bleak Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion Stallion",
    zheng:
      "Zhengzheng Certificate Strive For The Whole Collection Of Zheng Dingxun To Earn Steaming And Opening The Zither Zheng Zhengyu Bleak Hideous Hideous Bleak Bleak",
    tang: "Tangtang Sugar Tangtang Lie Lie Ruo Ruo Shi Wan Run Bleak Unexpectedly Unexpectedly Pond Treasury Treasury Carbonyl Bleak Bleak Bleak Bleak",
    chi: "Holding Chi Chi Chi Chi Chi Chi Chi Wing Tablet Tablet Tablet, Shameful And Extravagant Bleak Bleak Bleak Bleak Bleak Bleak Puppet Bleak Bleak Bleak Ugly Bleak Strip Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    shi: "It Is Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Shi Ji Shi Shui Eclipse Wet Lion Vowing To Pick Up A Spoonfulhush Shit Louse Bleak Bleak Bleak Bleak Cerium Posthumous Title Bleak Hog Shad Sting Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    qi: "At The Beginning Of The Enterprise, Qiqi Qiqi Qiqi Banqi Wife Abandoned The Branches And Chewing The Ride.Hill Without Trees Bleak Bleak Hill Without Trees Tall Bleak Puppet Puppet Spit Embroidered Banner Bleak Whispering Sound Bleak Bleak Interjection Bleak Bleak Bleak",
    chuai: "Tie Kou Sip Sip",
    tuo: "Tuo Tuo Drags The Camel Tuo Ostrich, Saliva Oval, Push Bleak Bleak Sack Bleak Thallium Bleak Bleak Flushed Bleak Flushed Bleak Flushed Flushed Flushed",
    duo: "Multi -Degree Duo Duo Duo Duo Duo Sui Ruki Steel Lauret Bleak Chopping Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    xue: "Learning Blood Snow Cut Xue Acupoint Boots Walk Around Walk Around Walk Around Walk Around Walk Around Walk Around",
    chong:
      "Rebelling The Chong Chong Chong Chongzhu Passion Bleak Bleak Bleak Bleak Bleak",
    chou: "Calling The Silk, Sorrow, Ugly Stinky Revenge, Thick, Thick, Bleak Bleak Bleak Bleak Heal",
    qiu: "Seeking The Ball Qiuqiu Qiu Qiu Chien Qiu Turtle Prisoner Bleak Dragon Dragon Submerge Catalpa Armadillo Bleak Bleak Bleak Larva Bribe Bribe Congested Nose Congested Nose Congested Nose Congested Nose Congested Nose",
    xiu: "Xiu Xiu Xiu Su Sleeve Sleeve Stinky Rusty Rusty Rusty Snames Shade Delicate Owl Brave Troops",
    chu: "The Source Of The Source Initially Assist The Storage Of Livestock To Touch Chu Kitchen Cabinet Cabinet, Fear Bleak Bleak Dismiss Dismiss Dismiss Undecided Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    tuan: "Tuan Turbine Bleak Bleak Bleak",
    zhui: "Traveling With Vertebral Cone, Bleak Bleak Bleak",
    chuan:
      "Chuanchuan Ship Wears A String Of Asthma Bleak Bleak Tritium Bleak Bleak",
    zhuan: "Special Turn To Make Bricks And Write Earn Bleak Bleak Bleak Bleak Bleak",
    yuan: "Yuan Yuanyuan Yuanyuan Yuanyuan Yuanyuan Yuanyuan Yuan Yuan Yuan Yuan Yuan Yuan Yuan Yuan Yuan Yuan Ape Yuan Bleak Mandarin Duck Mandarin Duck Mandarin Duck Bleak Bleak Bleak Citron Bleak Parched Parched Parched Parched Parched Parched Parched Parched Parched Parched Parched Parched",
    cuan: "Throw Cook Cook Usurp Usurp",
    chuang: "Create The Window To Break Through The Sore",
    zhuang:
      "Putting Zhuangzhuang Cosmetic Makeup Building Pile Tong Tong",
    chui: "Blowing Hammer Cooking Vertebrae",
    chun: "Chunchunli Chun Lip Tsubaki Stupid Quail Alcohol Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    zhun: "Jun Tun Chunye",
    cu: "Promoting Interesting Rough Clusters Of Vinegar And Dying Suddenly Nest Bleak Bleak Nest Nest",
    dun: "Tons Don Shield Squatd Pier Poor Stuffy Stewed Nap Escape Escape Bleak Bleak",
    qu: "The District Is To Get The Quwa Qu And Drive The Flexion Body To Marry The Rugged Car And Caries Bleak Bleak Bleak Bleak Bleak Bleak Lotus Woolen Rug Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    xu: "You Need To Be A Desired Order.",
    chuo: "Drive Chuo Mud Bleak Mud Mud Mud",
    zu: "The Group Of The Ancestors Of The Group Is Cursed",
    ji: "Ji Ji'S Technical Basics And Planning Systems And Collections Will Give Positive Disciplines That Are In The End Of The Stimulation Of Qiji Jiqi Chicken Chicken Collection To Squeeze Jetzi Silence And Stirillo Hungry Hungerji Xie Ji Borrowed Barren Prostitutes, Scratching The Thistle, Jealous, Oar Oar Oar Oar Puppet Pheasant Bleak Covet Cricket Cricket Bleak Bleak Clog Clog Bleak Bleak Puzzle Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak BleakBleak Bleak Bleak Bleak Bleak Bleak",
    cong: "From Congxu Cong Onion Bleak Bleak Bleak Bleak Bleak",
    zong: "Always From The Whole Ancestors, The Brown Rock Mane Hurried Bleak腙 Bleak腙 Bleak腙 Bleak腙 Bleak腙 Bleak腙",
    cou: "Bleak Bleak Bleak Bleak Bleak",
    cui: "During The Decay, Cui Cui Cui Centen Censor Disposal",
    wei: "For The Party'S Wei Wei, The Weiwei Weishang Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei Wei La Nuo Bleak Rustic Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak BleakCurtain Curtain Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    cun: "Village",
    zuo: "Sitting Left Yesterday, Yesterday",
    zuan: "Diamond Compilation Bleak",
    da: "Dada Answered Despair Big Bleak Bleak Tartar Dressed Leather Bleak Bleak Bleak Bleak Bleak Bleak",
    dai: "Dai Dai Bai Poison Daibao Da Ling, Caught Dai Dai, Bleak Bleak Bleak Bleak Turtle Turtle Turtle Turtle Turtle Bleak",
    tai: "Taita State Type Lift Titanium Moss Bleak Bleak Bleak Bleak Tower Tower Bleak Bleak Bleak Bleak Bleak",
    ta: "His Tower On The Tower And The Otter Tart Bleak Puppet Thallium Bleak Bleak Bleak",
    dan: "However, Shan Shi Dan Dan Dan Dan Dan Nitrogen Nitrogen Nitrogen Dan Yan Yan Jauze Bleak Stubborn Smell Of Mutton Smell Of Mutton Bleak Bleak Bleak Lotus Lotus Bleak Bleak Bleak Bleak Bleak Bleak Lotus Lotus",
    lu: "Lu Liu Lu Lu Lu Lu Lu Lu Lu Bunu Lu Lulian Lushu Lulu Lulu Lulu Lulu Passa Passa Bleak Bleak Stun Stun Bleak Bleak Bleak Bleak Basket Bow Of Ship Bleak Bow Of Ship Bleak Bow Of Ship Bow Of Ship Bow Of Ship Bow Of Ship Bow Of Ship Bow Of Ship Bow Of Ship",
    tan: "Tan Tanfan Bouncing Charcoal Tan Beach Greeds Tan Tan Carbon Carbon Paralysis Sandy Skin -Salon Tan Qin Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    ren: "Ren Ren Ren Ren Ren Blade Blade Cooking Style Cooking Bleak Sorrowful Sorrowful Bleak Bleak Bleak Bleak Bleak",
    jie: "Family Jiexing Lienjie Section She Jiejie Jie Jie Jie Jie Jie Jie Jie Jie Jie Jie Jie Jie Jie Jie Kai Kai Shi Twisted Straight Borrowing Mustard",
    yan: "Yan Yanzhi Said The Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yan Yue Yan Yan Yan Yan Yan Yan Yan RouyiBleak Bleak Bleak Quiet Contented Contented Contented 餍Mix Water With Clay 餍Mix Water With Clay Bleak Bleak Bleak Bleak",
    dang: "When The Party Stall Is Blocked, The Crotch Of The Dange",
    tao: "Set The Tao Tao Tao Tao Escaping The Peach Natal, Tao Tao Tao Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    tiao: "Tune, Jump Broom Broom Broom Broom Broom Bleak Bleak Bleak Bleak Shed The Milk Teeth Shed The Milk Teeth Shed The Milk Teeth Bleak Bleak Shed The Milk Teeth Shed The Milk Teeth Shed The Milk Teeth Shed The Milk Teeth",
    te: "Special",
    de: "Land Dede",
    dei: "Have To",
    di: "Di Di, Low -Bottomed Brother Di Shi Di Di Di Di Di Di Zhai Di Di Bleak Bleak Bleak Bleak Islet Puppet Puppet Sacred Sacred Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    ti: "Sports Mentoring Brother Kicks The Ladder To Vigilance, Shave The Nose, Sneeze Weed Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    tui: "Push Back Your Legs, The Legs Are Fading",
    you: "Youyou Youyou Youyou Youyou Youyou You You You You You You You Tao Youyou Grape Pomelo Uranium Squid Bleak Bleak Plan Bleak Bleak Bleak Larva Bleak Hesitant Forced Labor卣 Lattice Window Lattice Window Lattice Window Lattice Window Lattice Window Lattice Window Lattice Window Lattice Window Lattice Window Lattice Window",
    dian: "Electric Point Store Code Langdian Iodine Palace Cushion Dian Dian Tu Tu Ting Polygium Bleak Bleak Bleak Bleak Bleak Bamboo Mat Bleak",
    tian: "Tiandian Tian Tian Tian Tian Shi Sweet Sweet Bleak Fill Up Bleak Exterminate Hunt Hunt Hunt Hunt Hunt Hunt Exterminate Hunt",
    zhu: "The Main Surgery Note Belongs To The Buildings Of Zhu Zhu, Zhu Zhu Zhu Zhuzhu Zhuzhuzhuangzhu Zhun Candle Bleak Chu Tarry Bleak Bleak Termite Termite Termite Dough Dough Bleak Bleak Bleak Bleak Bleak Stern Bleak Stag Stag Stag Stag Stag Stag Stag Stag Stag Stag Stag Stag Stag Stag Stag Bleak Bleak Bleak Bleak Stern Bleak Stern Bleak Stern Stern Stern Bleak Stern BleakBleak",
    nian: "The Annual Chanting, The Twist, The Listless Listless Sorcery Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    diao: "Remove The Carved Fishing, The Mink Withered Crooked Cracker Bleak铞 Bleak铞 Bleak铞",
    yao: "Either The Medicine Invited Yaoyao Yaoyao Yao Yao Yao Bite Yao Ballad Food, Locked Malaria Demon Dark And Quiet Dark And Quiet Mallow Be A Good -Looking Bleak Bleak Forced Labor徭 轺Bleak 轺Bleak Bleak Bleak 轺Bleak 轺Bleak 轺Bleak 轺Bleak 轺Bleak",
    die: "Falling Butterfly Difiel Dad'S Spy Bleak Bleak Bleak Bleak Bleak Anthill Bleak Bleak Bleak",
    she: "Set Up A Community To Shoot The Folding House Snake And Pick The Tongue, The Extravagance, The Forgiveness Sarrant Sarrant Bleak Bleak Pupae Bleak Bleak Bleak Bleak Bleak",
    ye: "Yeye Ye Shijieye Drinking Page Grandpa Ye Xieyan Coconut Coconut Glory Be Be Be Choke Choke Bleak",
    xie: "Some Jiexiezi Writing Blood Leaf, Xie Different Shoes Shooting And Pirling, Removing The Harmony And Slocked Crab Slim Deducting Deduades, Scorpion, Wedding Wedge, Salmon, Bleak Bleak Get Rid Of Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Get Rid Of Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Get Rid Of Bleak Get Rid Of Get Rid Of Bleak Bleak Get Rid Of Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Bleak Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of Bleak Get Rid Of Get Rid Of Get Rid Of Get Rid Of Get Rid Of",
    zhe: "Fold Fold Bleak Bleak Bleak Sting Sting Partridge Disgrace Ocher Ocher Bleak磔 Bleak磔 Bleak磔 Bleak磔 Bleak磔 Bleak磔",
    ding: "Settled Ding Ding Ding Ding Ding Ding Ding Tan Tonotocho Pi Pi Pi Pi Pi Pi Pi Pi Pi Pi Pi Pirahine Anchor Bleak Bleak Bleak Bleak",
    diu: "Loses",
    ting: "Listen To The Court Hall Tingting Pavilion Ting Ting Ting Ting Shiba Pin Tingcho Bleak Bleak Bleak Bleak",
    dong: "Dong Dong Dong Dongdong Understands Frozen Buildings Unscrupulous Talked Bleak Radon Radon Bleak Bleak Bleak Thrush Thrush Thrush",
    tong: "Tongtong Tong Pain Copper Tong Tong Tong Tong Tong Tong Tong Ketone Ketone 恸Bleak 恸Bleak 恸Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    zhong:
      "Zhong Zhongzhong, Zhong Zhongzhong, Swollen, The Cup Bleak Clear Clear Bleak Bleak Bleak Bleak Clear Clear",
    dou: "Du Du Du Dou Shake Panda Dou Dou Du Deseu Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    du: "Du Du Du Du Du Du Du Du Du Du Gambling Gambling Gambling Seeing Du Du Du Zhu Du Tuzheng Jealous 牍蠹 牍蠹 牍蠹 牍蠹 牍蠹 牍蠹 牍蠹 牍蠹 牍蠹 Blacken Blacken Blacken Bleak",
    duan: "Short -End Forging Satin Bleak Bleak Bamboo Fish Trap",
    dui: "Pursuing The Team Chased Dunba Hate",
    rui: "Rui Rui Rui Rui Rui Bleak Bleak",
    yue: "Yue Yue Yue Yue Ding Yue Yueyue Yue Yue Yue Yue Xun Bleak Boil Flute Flute Flute Flute Flute Flute",
    tun: "Tuntun'S Faded Dolphin Hips Bleak Bleak Bleak Bleak Bleak",
    hui: "Will Return To Huihui Badge To Destroy Hui Ash Bribes And Regrets Hui Hui Hui Hui Hui Hui Hui Hui Fallen, Wicker, And Stewed Fennel Beak Pheasant Drain Bleak Bleak Bleak Destroy Destroy Destroy Destroy Destroy Destroy",
    wu: "Wu Wuwu Wuwu Wu Wu Wu Wu Wuwa Mistake House Meets Wuwu Wuwu, Witch To Instead Of Bullywood, Tungsten, Covering Wusu Bleak Opponent Opponent Opponent Bleak Bleak Bleak Bleak Bleak Bleak BleakBleak Bleak Bleak Bleak Mole Mole",
    ya: "Yazhong Yaya Duck Duck Duck Duck Ya Ya Ya Ya Ya Ya Ya Ya Ya Ya Aphid Bleak Bleak Bleak Pull Up Pull Up Bleak Bleak Bleak Receive As A Guest Bleak Bleak Bleak Bleak Bleak Bleak",
    he: "Hehehe He Nuclear Capital Drink Heho Box Passing Hehe Hehe He Heyu Brown Brown Gap 阖 Blame Bleak Bleak Bleak Bleak Quill Quill Bleak Bleak",
    wo: "I Hold The Wo Wo La La La La La La La La La La Laosu Wok Oh The Lettuce Bleak Bleak",
    en: "Eun Bleak Bleak Bleak Bleak",
    n: "Uh",
    er: "And Er'Er'S Ears Bait Ear Ear Erbium Bleak Bleak Bleak",
    fa: "Fa -Punishment And Lack Of Log Valve Raft Lack Enamel",
    quan: "All Rights Voucher Spring Circle Boxing Dog Recover From Illness Recover From Illness Recover From Illness Complete Complete Daemon Daemon Bound In A League Bound In A League Bleak Bleak Repent Repent Repent Bleak Repent Repent Repent Repent Repent",
    fei: "Feifei Fei Fei Fat Fat Ling Corday Bandling Fei Jinfei Ferry Fei Bar Barfiri Bleak Bleak Bleak Hamadryad Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    pei: "Bad And Bad Compensation To Accompany Pei Pei Pay Pennant Pooh Pooh Bleak Bleak Bleak Bleak Pooh Pooh Pooh",
    ping: "Ping Jie Based On Feng Ping Ping Ping Ping Ping Bleak Bleak Bleak",
    fo: "Buddha",
    hu: "He Guard Nuclear Lake Mutual Hoh Tiger Shanghai Wastecs, Purgically Puts, Fox Bows, Harry Hammons Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Oak Oak Bleak Bleak Bleak Gourd Gourd Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    ga: "Cafe Gajiaka Karma Giggle Bleak Bleak",
    ge: "The Gege Ge Ge Gang Ge Ge Ge Pigeon Stop Bargaining Chrome Clade Clatable Cadmium Mandarin Bleak Bleak Knot Bleak Bleak Hug Dry Clay Lump Dry Clay Lump Dry Clay Lump",
    ha: "Clam",
    xia: "Xiaxiaxia'S Xiaxiaxia Shrimp Narrow Scarey Chivalry Blind Box Flaws Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    gai: "Change The Cover Of The Calcium Beggar Bleak Boundary Bleak Bleak Bleak",
    hai: "The Sea Also Hurts The Hack Of The Hayl Helium Helium Hydroxylamine Hydroxylamine Hydroxylamine",
    gan: "Drying Gan Liver Stripes Gan Gan Gan Gang Citrus Stalk Oligosidoside",
    gang: "Hong Kong Steel Ganggang Ganggang Carry Anal Bleak Bleak Bleak Bleak Bleak",
    jiang:
      "The Qiangjiang Port Awards Will Be Lectured On Jiangjiang Jiangyou Glitter Sauce Sauce Crossing Payon Bleak Cowpea Bleak Bleak Bleak Bleak",
    hang: "Xinghang Hangxiang Ramping Toron",
    gong: "Gonggong Gonggong Gonggong Gong Gong Gong Gong Gong Gong Gong Gong Bowcus And Comecar",
    hong: "Hong Honghong Boom Hong Honghong Coax Bao Hong Sound Of A Crash Budding Bleak Bleak Bleak Bleak Bleak",
    guang: "Guangguang Visit Cuscus",
    qiong: "Poor Qiong Qiong Species Of Bamboo Trampling Trampling Trampling Bleak",
    gao: "Tell The Manuscript Cream, Ho Ho Do Zirconium Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    hao: "Hao Hao Hao Hao Hao Hao Hao Hao Daemon Tackle Tackle Bleak Bleak Bleak Howl Howl",
    li: "Lili Lili Li Lili Lili Li Li Lili Li Li Li Li Li Li Li Lili Lili Lili Ruins Suffered From Li Lingli, Li Li, Gravel, Came To Lithium Oyster Diarrhea Bleak Bleak Bleak Bleak Stable Stable StableCurry Bleak Bleak Bleak Daemon Daemon Bleak Bleak Bleak Bleak Bleak Cracking Bleak Bleak Bleak Bleak Widow Widow Laugh Bleak Bleak Bleak",
    jia: "Faculty Of Fake Fakes, Jiajiajia Jiajiajia, Potassium, Kajia Cheeks, Bleak Bleak Bleak Bleak Bleak Cape Cape Bleak Bleak Sword Bleak Butterfly Butterfly Butterfly Butterfly Butterfly Butterfly Butterfly Butterfly Butterfly Butterfly Butterfly",
    luo: "Luo Luo Luo Luo Luo Luo Luo Luo Luo Naked Pile Pile Pile Bleak Stroke Stroke Bleak Bleak Bleak Bleak Walk Scrofula Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    ke: "Kecker Kok Kocho, A Thirsty Kochi, Harsh Cough, Cough, Wheat Bleak Sip Bleak Bleak Bleak Bleak Chin Condyle Oyster Krypton Krypton Krypton Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Krypton Krypton",
    qia: "Carthachang Lined Lined Pinch Pinch Pinch",
    gei: "Give",
    gen: "Gen And Ken Bleak Bleak Bleak",
    hen: "Very Fierce Hate",
    gou: "Buying Enough Ji Gou Dogh Hooks To Linger Cream Bon Bleak Sense Of Shame Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    kou: "Budding Kou Bleak Bleak Bleak Reed Reed Reed Reed Reed Reed",
    gu: "Gu Gu Gu Gu Drum Bone Estimated Gu Jia Gu Guo Hire Guo Mushrooms Gulu, Cobalt Hoe Brace Bleak Wheel Insanity Bleak Bleak Bleak Falcon",
    pai: "Paper Paper Paper",
    gua: "Including Hanging Melons, Scraping The Hexagram, Cut Guanidine Deceive Bleak Bleak Bleak Bleak Bleak Deceive Deceive Deceive",
    tou: "Bleak Bleak Bleak Bleak Bleak Bleak Head Head Head",
    guai: "Strangely Obedient",
    kuai: "Will Quickly Chopsticks Migrate Drain Bleak Bleak Bleak Bleak",
    guan: "Guan Guan Guan Guan Guan Guan Crown Guan Crown Plugs, Wanlun Coffin Groom Stork Widower Widower Wash Wash Bleak",
    wan: "Wandan Wanwan Wanwan Wanwan Bowl Banjie Man Wan Wan Wan Wan Wan Wan Wind Allybragine",
    ne: "Where Is Na Na?",
    gui: "Gui Gui Gui Gui Gui Gui Ghost Silicon Rose Kneeling Turtle Worching Guerli Salt Salmon Bleak Puppet Soul Soul Soul Bleak Bleak Bleak Bleak Bleak Bleak",
    jun: "Junjun Junjun Jun Jun Jun Junjun Turtle Junjun County Dumplings Dumplings Bleak Bleak",
    jiong: "Embarrassing Soul Unrestrained Unrestrained",
    jue: "Decising Corner Consciousness And Rising Tactics Chewing Fern Fern Bleak Bleak Deceitful Bleak Bleak Bleak Pout Stick Up Stick Up Peg Bleak Bleak Dissatisfied Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    gun: "Rolling Stick Rollers Bleak Sew Sew 丨 丨",
    hun: "Wedding Mixed Soul Muddy Sticky Storm Chinese Ravioli Soul Nickname Nickname Nickname Nickname Nickname Nickname",
    guo: "Guo Guo Guo Guo Guo Bo Wrap The Vortex Guo Bleak Bleak Crucible Slap Bleak Bleak Bleak Bleak Bleak",
    hei: "Hei Hey Hi",
    kan: "Watch The Magazine Survey Kangkan To Cut Off The Threshold And Look At The Niche Bleak Bleak Bleak",
    heng: "Heng Hengheng Heng Heng Hummer Tou Healing",
    mo: "Wan Na Dan Mo Mo Mo Mo Mo Mo Mo Mo Mo Mo Mo Mo Mo Mi Mushroom Mushroom Ravioli Ravioli Horse Feed Horse Feed Bleak嫫镆殁耱 Ma Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    peng: "Pengpeng Peng Pupeng Touched The Apple Shed Hang Heng Cooking Boschian",
    hou: "After The Hou Hou Monkey'S Throat Roar Thick Bleak Bleak Bleak Horseshoe Crab Wart Wart Wart Wart Wart",
    hua: "Huahua Draws Flowers And Paintings",
    huai: "Whenever Huaihuaihuaihuo Ankle",
    huan: "Also Changed The Love To The Hipid Pupils, The Hometown, The World, Bleak Bleak Rear Rear Bleak獾 Bleak獾 Bleak Bleak Bleak Escape Escape Escape Escape Escape Escape Bleak Escape Escape Escape",
    xun: "Xun Xun Sun Xun Xun Xun Xun Xun Xun Xun Xun Xun Xun Jun Jun Jun Toming And Xun Xun Daughter -In -Law Sip Sip Stunned Bleak Bleak Cellar Cellar Cellar Mushroom Mushroom Mushroom Mushroom Mushroom Mushroom Mushroom Mushroom Mushroom Mushroom",
    huang:
      "Huanghuanghuang Huang Huang Huanghuanghuang Emperor Indistinct Indistinct Bleak Bleak Bleak Bleak Bleak Yellow Yellow Bleak Bleak Bamboo Grove Sturgeon Sturgeon Sturgeon Sturgeon Sturgeon Sturgeon Bamboo Grove Bamboo Grove Bamboo Grove Sturgeon Bamboo Grove",
    nai: "Nai Nai Nai Nai Neon Bleak Bleak Bleak",
    luan: "Chaotic Eggs, Luan Luan Di Twan",
    qie: "Cut And Stole The Eggplant, Cowardly Jia, And Reclined Reclined Pull Out Pull Out Pull Out Pull Out Pull Out Pull Out Pull Out Pull Out",
    jian: "See The Jianjian Piece, Jianjian Jianjian, Simplifying The Hard Practice Key, And The Cambodian Sword Spikes, The Arrow, Shallow, Frugal And Cocoon, Pick Up The Fried Splash Threshold,Saddle Blanket Saddle Blanket Base Prop Bleak Bleak 鲣囝 鲣囝 鲣囝 Bleak Thick Waterproof Silk Bleak Bleak Bleak Bleak Constricted Constricted",
    nan: "Southern Difficult Male Nan Mo Nian",
    qian: "Qian Qian Qian Qi Qian Qian Qian Qian Qian Qian Dian Leading Apologies And Guizhou Condemn The Embedded Qian Qian Qianqian Bleak Footpath Carry On Shoulders Seal Gase Bullock Bullock Sanctuary Sanctuary",
    qiang:
      "Strong Grabbing Xinjiang Wall Gun Cavity Wall Wall Bleak Bleak Bleak Bleak Bleak Bleak Sulfuric Acid Sulfuric Acid Bleak Bleak Bleak",
    xiang:
      "Xiang Xiangxiang Xiangxiang Xiangxiang Xiangxiangxiangxiao Xiangxiang Xiangxiang Emperors Xiangxiang Xiangxiang Xiang Xiangxiang Bleak Bleak Bleak Asylum For The Aged Bleak Bleak Bleak Bleak Bleak Bleak",
    jiao: "Teaching And Handing Over The School Corner, The School Corner Is Called The Footsteps To Pay The Rails, The Pepper Reef, The Bonus Jelly Tilted And The Tie, The Twisted Grave And The Dumplings Cellar Wrestling Blew Cricket Bleak Hinge Bleak Shark Bleak Wren Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    zhuo: "Delivery The Table Zhuo Captive, The Turbidity, The Bracelet Mud Pecking Wash Wash Bleak Bleak Complain Complain Complain Complain Complain Complain",
    qiao: "Qiao Qiaoqiao Qiao Qiao Qiao Qiao Qiao Shell Trone Watch The Qiaoqiu Shovel Prying Buckwheat Liney Hamfrathy Sleeper Bleak Blame Blame Bleak Stony Soil Stony Soil Stony Soil Bleak",
    xiao: "Small Effect Sales School Xiao Xiao Xiao Zimiao Xiao Qiao Xiao Ni Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Xiao Bleak Octopus Bleak Bleak Bleak Bleak Bleak",
    si: "Sisi Sisi Food Is Privately Died Like Silka Temple To Tear Up Si Sixi And Saids Bleak Bleak Sideline 蛳咝 蛳咝 蛳咝 Bleak Bleak Exhaust Exhaust Bleak Creek Creek Creek Creek Creek Bleak",
    kai: "Kai Kai'S Kai Kai Kai How Can How Can How Can Anger Bleak Bleak Bleak Bleak Bleak",
    jin: "Jin Jin Only Tightly, Jin Jin Jin Jin Jin Jinjin Towel Placing Jin Jin Ember Bleak Bleak Bleak Bleak Bleak Silent Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    qin: "Qinqin Qin Qin Qin Qin Qin Qin Qin Qin Qin Qin Qin Qin Qin Hold In Mouth Hold In Mouth Phenizine Press Bleak Bleak Quilt Bleak Bleak Bleak Bleak Bleak Bleak",
    jing: "Jingjing Jingjing Police Was Shocked And Jing Jing Jing Jing Jing'S Eye Crystal Neck Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jing Jingjin Twita Toses Bleak Bleak Bleak Bleak Bleak Cut The Throat Cut The Throat Cut The Throat Bleak Bleak Bleak Bleak",
    ying: "Yingying Yingying Yingjing Welcome To Hard Yingying Yingying Yingying Yingying Yingying Ying Ying Ying Ying Yingyun Popping Poppill Fireflies Bleak Bleak Cricket Cricket Cricket Bleak Bleak Bleak Bleak Bleak Bleak",
    jiu: "Just Invest In Jiujiu Jiu Jiu Jiu Jiu Moxibustion And Guys, Blame The Leek Puppet Puppet Bleak Sagittarous Sagittarous Puppet Puppet Lot Bleak Bleak Bleak Bleak Bleak",
    zui: "The Most Sinful Mouth Drunk Mouth Mouth Mouth",
    juan: "Golding Circle Circle, Tired Silk, Juan Juan Juan Bleak Bleak Bleak Bleak Bleak Bleak",
    suan: "Calculating Sour Garlic",
    yun: "Members Yun Yunyun Yuan Yun Yun Yun Yun Yunyue Yunyun Bleak Dumplings Dumplings Bleak Bleak Stingy Stingy Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    qun: "Group Skirt",
    ka: "Caca -Click Be",
    kang: "Kang Kang Carried Generous Hyperthyroidism Bran Bleak Bleak Bleak",
    keng: "Punch",
    kao: "Test Relying On Baking",
    ken: "Ken Ken Ken Gingival",
    yin: "Yin Yin Yin Yin Yin Yin Yin Yin Yin Yin Yin Yin Yin Yin Bleak Bend Bend Bend Bend Bend Bend Dumb Indium Indium Indium Dumb Dumb Bend Bend Bend Bend",
    kong: "Air Control Kong Terror Bleak Hole Hole",
    ku: "Bitu Crying Cool Pants Dead Cave Shoulder Skull Bleak Bleak Bleak Bleak Bleak Bleak",
    kua: "Cross -Boasting Collapse Collapse Collapse Collapse",
    kui: "Fack Of Kui Asleng Kui Fei Kaishui Kwai Swim Helmet Stare Stare Stare Deaf Deaf Bleak Bleak In Opposition To Puppet Puppet 跬Bleak 跬Bleak Troubled Troubled Troubled Troubled",
    kuan: "Wide And Hip",
    kuang:
      "The Mines Are Frantic And The Eyes Of The Crickets Bleak Bleak Bleak Bleak Lie Lie Lie Bleak Bleak",
    que: "Indeed, But Lack Of Lack Of Discussion Discussion Bleak Bleak Bleak Bleak",
    kun: "Sleepy Kun Kun Binding Kun Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    kuo: "Expand The Wide Outline",
    la: "La Luo La La La La La La La La",
    lai: "Lai Lai Lai Favorizes Laisa Bleak Bleak Skin Disease Skin Disease Bleak Bleak Bleak Bleak Bleak",
    lan: "Lan Lan Lan Blue Basket Inn Lan Lan Lan Lan Lan Globoline",
    lin: "Linlin Is Neighboring Lin Xianglin Linlin Lin Ling Take Stingy Stingy Bleak Bleak Bleak Bleak Bleak Bleak Bleak Phosphine Phosphine Phosphine Phosphine Phosphine",
    lang: "Langlanglang Corridor Wolf Lang Langya Bleak Ornament Ornament Bleak Bleak Bleak Bleak",
    liang:
      "Liangliang Liang Liang Liang Liang Liang Liang Liang Floating",
    lao: "Lao Lao Luo Jianjian Flowers And Lao Lao Lao Dai Bleak Bleak Rhodium Rhodium Rhodium Rhodium",
    mu: "Eyemate Mu Mu Mumu Muim Tomb Mu Mu Mu Mu Miao Mu Mu Molyto Bleak Bleak Bleak Bleak Bleak",
    le: "It'S Lales Riba Lati Bleak Rib Rib Rib Rib",
    lei: "Special -To -Leilele Tears Lei Lei Ruyun Ribs Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    sui: "Although Sui Sui Diaudi Tunnel, Sui Sui Sui Sui, Sui Sui, Bleak Flint Flint Flint Flint Flint Flint Flint Flint Flint",
    lie: "Lielie Bad Cracks, Hunting, Stumble Pure Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    leng: "Leng Shi Xianxian",
    ling: "Leading Another Lingling Lingling Lingling Lingling Lingling Lingling Ling Ling Ling Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    lia: "Both",
    liao: "I ’M Going To Treat Liao Liao Chat And Miao Miao Miao Liao Tease Bleak Bleak Bleak Bleak Bleak Ruthenium Ruthenium Ruthenium Ruthenium",
    liu: "Liu Liuliu Willow, Sulfur Sulfur, Slim Gside, Dumb Distillation, Walking Bleak Bleak Tassel Bleak Bleak Bleak Bleak Bleak Bleak",
    lun: "On Pian Lun Lun Lun",
    lv: "Law Travel Lvsu Luyu Aluminum Chloro -Chlorine Couple Donkey Donald Bleak Bleak Stroke Stroke Stroke Bleak Bleak",
    lou: "Lou Lu Leaks The Lounglou Basket Hunchback Hunchback Hunchback Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    mao: "Trade Mao Mao Mao Mao Mao Hat Cat Following Anchor Erotic Aya Riveting Bleak Bleak Bleak Spanish Fly Bleak Bleak Still Water Still Water Still Water Still Water Still Water Still Water Still Water",
    long: "Longlong Mo Mo Mo Ronglong Oh And Longyou Bleak Mill Mill Bleak Tadpole Tadpole Bleak Tadpole Bleak",
    nong: "Nongwan Pustule Alley",
    shuang: "Shuangshuangshuang",
    shu: "The Number Of Surgery Books Belongs To The Tree Losses And Describes The Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Shu Sutu Combing The Forgiveness Bleak Raiders, Shutch, Bleak Bleak Bleak Bleak Kaoliang Rug Bleak Bleak Bleak Bleak Bleak",
    shuai: "Leading Handsome And Throwing Handsome",
    lve: "Slight",
    ma: "Moma, Momo Code Mother Ma, What'S Wrong? What'S Wrong? What'S Wrong? What'S Wrong? Bleak Bleak Bleak Bleak Bleak",
    me: "?",
    mai: "Buying And Selling Mai Mai Mai Burning Haze Be Able To",
    man: "Slow Man Man Buried The Sacrifice Of The Boring Eel, The Mites Of Mites, Bleak Trowel Bleak Bleak Bleak Bleak Bleak Bleak",
    mi: "Mi Mi Mi Mi Mi Mi Rice Rice Rice Rice Moose Moose Moose Cure Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Millet Millet Bleak Bleak Bleak Bleak",
    men: "The Doors Of The Door Hides Wen Melancholy Melancholy Melancholy Melancholy Melancholy",
    mang: "Busy Blind Mango Hooligan Reckless Python Mango Crude Saltpeter Crude Saltpeter Crude Saltpeter",
    meng: "Meng Meng Meng Meng Meng Gang Manga Meng Python Bleak Toad Bleak Bleak Small Boat Small Boat Small Boat Small Boat Small Boat Small Boat Small Boat",
    miao: "Asylum, The Temple Is Aimed At Miao Miao Miao Indistinct Profound Profound Bleak Bleak Subtle Subtle Meow",
    mou: "A Certain Mu Miao Miao Iron Pot Unrequited Marine Crab Marine Crab Marine Crab",
    miu: "Miao Fallacy",
    mei: "Mei Wu Every Coal Plum Media Mei Mei Mei Mantaning Meng Meng Meng Mease Magnesium Magic Berry Rice",
    wen: "Wenwen Wen Wen Wenci Kiss Mosquito Wenswen Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    mie: "Destroy Bleak Bleak Bleak",
    ming: "Ming Ming Mingming Mingming Bleak Bleak Close The Eyes",
    na: "Neinnana Na Na Sodium Na Na Take Up Take Up Cassock Cassock Bleak Cassock Take Up Take Up Take Up",
    nei: "What Is The Inside",
    nuo: "Nor Norina Glutinous Unnamed Unnamed Unnamed Unnamed Unnamed Unnamed",
    ruo: "If We Weak",
    nang: "Bleak Bleak Bleak Bleak Bleak",
    nao: "Brain Troubles, Cauge Bleak Bawl Bawl Bawl Bleak Bleak Bleak",
    ni: "You Niwu Doubt Ni Ni, Ni Ni, Hidden Neutrality, Niche Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    nen: "Tender",
    neng: "Able",
    nin: "You",
    niao: "Bird'S Urine And Drowning Drowning Drowning Drowning",
    nie: "Photo Nie Niri Niche Niche Twisted",
    niang: "Maternal Brewing",
    ning: "Ning Ning Twisted Lemon Eloquent Bleak Ning Ning",
    nu: "Nu Nu Slave Crossbow Treasury Slave Slave Slave Slave Slave",
    nv: "Feminine",
    ru: "Entering The Female Milk Confucian Disgrace, Ru Ru, Chatteration Adorned Muggy Rubidium Bleak Jacket Jacket Jacket Jacket Jacket Jacket Jacket Jacket",
    nuan: "Warm",
    nve: "Malaria",
    re: "Ru Ruoyu",
    ou: "Zone Ou Dian Vomiting Gull Steep Steep Steep Steep Steep Steep Steep Steep Steep Steep",
    pao: "Running Barrels Throwing Robe Roar Bleak Bleak Bleak Bleak Bleak",
    pou: "Sterile",
    pen: "Sprinkle",
    pie: "Glance",
    pin: "Poor Poverty Hire Frequently Fighting Daemon Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    se: "Seda Astime Cesium Cesium Astringent Astringent Astringent",
    qing: "Qingqing, Please Qing Qing Qing Qing Qing Qing Hydrogen Cyanic Bleak Dragon Bleak Bleak Mackerel Bleak Tattoo Pigsty Pigsty Pigsty Pigsty Pigsty Pigsty Pigsty Pigsty Pigsty",
    zan: "Temporary Bleak Bleak Bleak Bleak Bleak Bleak Chisel Chisel Chisel",
    shao: "Shao Shao Summoned A Little Whistle Shao Shao Toshinoscopy",
    sao: "Sweeping Bleak Bleak Obedient Obedient Obedient Obedient Broom Broom Broom Bleak Broom Broom",
    sha: "Shamen Kill The Sausha Whaya Shan Sushan Stupid Shark Ah Clamp Fondle Spear Spear Spear Spear Spear Fondle",
    xuan: "The County Selection Voucher Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Xuan Daemon Bleak Bleak Bleak Bleak Bleak Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves Pull Up Sleeves",
    ran: "Of Course",
    rang: "Let The Soil Bustle Shout Shout Shout",
    rao: "By Disturbing Rao Lao Radius Spoof",
    reng: "Still Throw",
    ri: "Day",
    rou: "Rough Meat Rubbing Tanning",
    ruan: "Soft Ruanyu",
    run: "Moisturize",
    sa: "Sa San Sausao Bazaar Bazaar Bazaar",
    suo: "Some Of The Cables Lock Locks, Sacrifice Bleak Bleak Bleak Bleak Carboxyl Carboxyl Carboxyl Carboxyl Fondle Fondle Bleak",
    sai: "Surgee Stuffy Gill Gills",
    shui: "Say Water Tax Who Sleeps Who",
    sang: "Sang Watting Throat Forehead Voice Voice Voice",
    sen: "Forest",
    seng: "Monk",
    shai: "Sieve",
    shang:
      "Shang Shang Still Hurts Tang Changyu Noon Bleak Feast Be Be Bleak Bleak Bleak",
    xing: "Xing Xingxing Xing Xing Xing Xing Xing Xing Qiang Xing Xing Xing Xing Xing Xing Xing Xing Xing Xing Xing Xing Xing Xing",
    shou: "Receiving The First Sale Of Shoushou Slimming Beast Hunting Bleak Bleak Bleak Bleak Bleak Bleak",
    shuo: "Speaking Of Shuo Shuo Shuo Lance Bleak",
    su: "Schurbin Soviet Complaints Shrink The Vulgar Su Su Shi Zuyan Sieve Sieve Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    shua: "Play",
    shuan: "Plug -In Latch Latch Latch",
    shun: "Shunshun Suck",
    song: "Send Song Song Litigation Song Song Song Song Countercus Curry Song 凇Bleak Bleak Bleak",
    sou: "Search Cough Bleak Bleak Shake Shake Bleak Urinate Urinate Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    sun: "Damaged Sun Zhu Bleak Bleak Bleak Bleak",
    teng: "Teng Po Teng Teng",
    tie: "Iron Post",
    tu: "Tuchu Tu Tu Tu Tu Tu Tu Tu Bald Bald Bald Thorium Dodder Dodder Dodder Dodder Dodder",
    wai: "Outer Crooked",
    wang: "Wang Wang Forgot To Die On The Internet.",
    weng: "Weng Mo Yan",
    zhua: "Lab",
    yang: "Sample Yangyang Yang Yang Yang Sheep Details Oxygen Yang Yang Itching And Ulceration",
    xiong: "Xiongxiong Xiong'S Fierce Hungarian Xingxiong",
    yo: "Yo",
    yong: "Use The Yong Yong Yongyong Yongzong Figns To Attract Yong Yong Yong Yong Yong Yongyong Bleak Cricket Cricket Cricket Cricket Obstruct Obstruct Obstruct Carbuncle Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak Bleak",
    za: "Zhaza, Let'S Smash Bleak",
    zai: "In The Disaster, The Cubs Are Slaughtered",
    zao: "Create Early Jujube Noisy Stove, Dry And Irritable Soap Bath Fleas",
    zei: "Thief",
    zen: "How",
    zeng: "Zeng Zeng Comprehensive Gifts Give Give Give",
    zhei: "This",
    zou: "Take Zou Zou Corner Corner Bleak Bleak Bleak Bleak Bleak",
    zhuai: "Rotate",
    zun: "Zun Zun Scrimp Scrimp Bleak Bleak",
    dia: "Be Embarrassed",
    nou: "Hoe",
  }),
};
const R = N({
    name: "SearchCtrlF",
    components: { ...A },
    emits: ["onClose", "iAppItemType"],
    setup(n, i) {
      const s = [
          f.taobao,
          f.jd,
          f.pxx,
          f.wss,
          f.sslk,
          f.yuque,
          f.music,
          f.AppStore,
        ],
        a = v(!0),
        u = v(null),
        e = v(!0),
        p = v(""),
        t = v([]),
        r = v([]),
        o = async (g) => {
          a.value = !0;
          const _ = await B.getAppIcons(),
            d = [];
          _.forEach((k) => {
            k.list.forEach((F) => {
              d.push(F);
            });
          }),
            p.value
              ? (t.value = d
                  .filter((k) => !!G.match(k.data.appName, p.value))
                  .slice(0, 8))
              : (t.value = d.slice(0, 8)),
            g ? g(d) : (a.value = !1);
        },
        l = () => {
          i.emit("onClose");
        },
        c = () => {
          J(
            p,
            () => {
              o();
            },
            { throttle: 500 }
          );
        };
      return (
        V(() => {
          o(async (g) => {
            const _ = g.filter((d) => s.includes(d.data.code)).slice(0, 8);
            (r.value = [..._]), (a.value = !1), u.value.onfocus();
          }),
            c();
        }),
        {
          onClose: l,
          visible: e,
          queryKey: p,
          Search: L,
          appList: t,
          loading: a,
          topApps: r,
          input: u,
        }
      );
    },
  }),
  X = (n) => (M("data-v-65acb9d1"), (n = n()), P(), n),
  Y = { class: "app-boxs" },
  Z = { class: "app-warp" },
  nn = { class: "app-boxs app-pd" },
  an = X(() =>
    b("div", { class: "app-title" }, "Recommended Applications", -1)
  ),
  en = { class: "app-boxs app-pd" };
function un(n, i, s, a, u, e) {
  const p = x("EtabInput"),
    t = x("EtabEmpty"),
    r = K("loading");
  return (
    h(),
    m("section", null, [
      b("div", Y, [
        W(
          p,
          {
            ref: "input",
            modelValue: n.queryKey,
            "onUpdate:modelValue": i[0] || (i[0] = (o) => (n.queryKey = o)),
            prefixIcon: n.Search,
            placeholder:
              "Enter Search Keywords/Support Pinyin Search",
          },
          null,
          8,
          ["modelValue", "prefixIcon"]
        ),
      ]),
      $(
        (h(),
        m("div", Z, [
          b("div", nn, [
            n.appList.length > 0
              ? (h(!0),
                m(
                  j,
                  { key: 0 },
                  q(
                    n.appList,
                    (o, l) => (
                      h(),
                      m(
                        "div",
                        {
                          key: l,
                          class: w([
                            "etab-app-item",
                            ["app-size-grid-min", "app-size-min"],
                          ]),
                        },
                        [
                          (h(),
                          z(C(o.name + "Min"), { app: o.data }, null, 8, [
                            "app",
                          ])),
                        ]
                      )
                    )
                  ),
                  128
                ))
              : (h(), z(t, { key: 1, imageSize: 6 })),
          ]),
          an,
          b("div", en, [
            n.appList.length > 0
              ? (h(!0),
                m(
                  j,
                  { key: 0 },
                  q(
                    n.topApps,
                    (o, l) => (
                      h(),
                      m(
                        "div",
                        {
                          key: l,
                          class: w([
                            "etab-app-item",
                            ["app-size-grid-min", "app-size-min"],
                          ]),
                        },
                        [
                          (h(),
                          z(C(o.name + "Min"), { app: o.data }, null, 8, [
                            "app",
                          ])),
                        ]
                      )
                    )
                  ),
                  128
                ))
              : (h(), z(t, { key: 1, imageSize: 6 })),
          ]),
        ])),
        [[r, n.loading]]
      ),
    ])
  );
}
var rn = D(R, [
  ["render", un],
  ["__scopeId", "data-v-65acb9d1"],
]);
export { rn as default };
