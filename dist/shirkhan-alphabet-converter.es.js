var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const BOUND_FLAG = String.fromCharCode(0);
const table = [
  {
    uchar: "\u0626",
    volwes: false,
    uly: BOUND_FLAG,
    khan: "?"
  },
  {
    uchar: "\u0627",
    volwes: true,
    uly: "a",
    khan: "a"
  },
  {
    uchar: "\u06D5",
    volwes: true,
    uly: "e",
    khan: "e"
  },
  {
    uchar: "\u06D0",
    volwes: true,
    uly: "\xEB",
    khan: "eh"
  },
  {
    uchar: "\u0649",
    volwes: true,
    uly: "i",
    khan: "i"
  },
  {
    uchar: "\u0648",
    volwes: true,
    uly: "o",
    khan: "o"
  },
  {
    uchar: "\u06C7",
    volwes: true,
    uly: "u",
    khan: "u"
  },
  {
    uchar: "\u06C6",
    volwes: true,
    uly: "\xF6",
    khan: "c"
  },
  {
    uchar: "\u06C8",
    volwes: true,
    uly: "\xFC",
    khan: "v"
  },
  {
    uchar: "\u0628",
    volwes: false,
    uly: "b",
    khan: "b"
  },
  {
    uchar: "\u067E",
    volwes: false,
    uly: "p",
    khan: "p"
  },
  {
    uchar: "\u062A",
    volwes: false,
    uly: "t",
    khan: "t"
  },
  {
    uchar: "\u062C",
    volwes: false,
    uly: "j",
    khan: "j"
  },
  {
    uchar: "\u0686",
    volwes: false,
    uly: "ch",
    khan: "ch"
  },
  {
    uchar: "\u062E",
    volwes: false,
    uly: "x",
    khan: "kh"
  },
  {
    uchar: "\u062F",
    volwes: false,
    uly: "d",
    khan: "d"
  },
  {
    uchar: "\u0631",
    volwes: false,
    uly: "r",
    khan: "r"
  },
  {
    uchar: "\u0632",
    volwes: false,
    uly: "z",
    khan: "z"
  },
  {
    uchar: "\u0698",
    volwes: false,
    uly: "zh",
    khan: "zh"
  },
  {
    uchar: "\u0633",
    volwes: false,
    uly: "s",
    khan: "s"
  },
  {
    uchar: "\u0634",
    volwes: false,
    uly: "sh",
    khan: "sh"
  },
  {
    uchar: "\u063A",
    volwes: false,
    uly: "gh",
    khan: "gh"
  },
  {
    uchar: "\u0642",
    volwes: false,
    uly: "q",
    khan: "q"
  },
  {
    uchar: "\u0641",
    volwes: false,
    uly: "f",
    khan: "f"
  },
  {
    uchar: "\u0643",
    volwes: false,
    uly: "k",
    khan: "k"
  },
  {
    uchar: "\u06AF",
    volwes: false,
    uly: "g",
    khan: "g"
  },
  {
    uchar: "\u06AD",
    volwes: false,
    uly: "ng",
    khan: "ng"
  },
  {
    uchar: "\u0644",
    volwes: false,
    uly: "l",
    khan: "l"
  },
  {
    uchar: "\u0645",
    volwes: false,
    uly: "m",
    khan: "m"
  },
  {
    uchar: "\u0646",
    volwes: false,
    uly: "n",
    khan: "n"
  },
  {
    uchar: "\u06BE",
    volwes: false,
    uly: "h",
    khan: "x"
  },
  {
    uchar: "\u06CB",
    volwes: false,
    uly: "w",
    khan: "w"
  },
  {
    uchar: "\u064A",
    volwes: false,
    uly: "y",
    khan: "y"
  }
];
class Base {
  constructor() {
    __publicField(this, "type");
    __publicField(this, "table");
    this.table = table;
  }
  orderedTable() {
    return this.table.sort((a, b) => {
      var _a, _b;
      return ((_a = b[this.type]) == null ? void 0 : _a.length) - ((_b = a[this.type]) == null ? void 0 : _b.length);
    });
  }
  getMap() {
    const kvmap = {};
    this.orderedTable().forEach((item) => kvmap[item[this.type]] = item.uchar);
    return kvmap;
  }
  convert(uword) {
    Object.entries(this.getMap()).forEach(([key, value]) => uword = uword.replaceAll(value, key));
    return uword;
  }
  forward(word) {
    Object.entries(this.getMap()).forEach(([key, value]) => word = word.replaceAll(key, value));
    return word;
  }
}
class Khan extends Base {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "khan");
  }
}
class Uly extends Base {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "uly");
  }
}
function u2uly(word) {
  return new Uly().convert(word);
}
function uly2u(word) {
  return new Uly().forward(word);
}
function u2khan(word) {
  return new Khan().convert(word);
}
function khan2u(word) {
  return new Khan().forward(word);
}
export { Khan as KhanConverter, Uly as UlyConverter, khan2u, u2khan, u2uly, uly2u };