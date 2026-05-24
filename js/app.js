"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var STYLES = "\n  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&family=Raleway:wght@100;600&display=swap');\n  *{margin:0;padding:0;box-sizing:border-box;}\n  html{scroll-behavior:smooth;}\n  body{background:#2a2a2a;color:#e8e2d9;font-family:'Jost',sans-serif;}\n  ::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-track{background:#111;}::-webkit-scrollbar-thumb{background:#444;}\n  @keyframes fadeUp{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:translateY(0);}}\n  @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}\n  .fu{animation:fadeUp 0.85s ease both;}\n  .fu2{animation:fadeUp 0.85s 0.18s ease both;}\n  .fu3{animation:fadeUp 0.85s 0.36s ease both;}\n  .nav-a{color:#777;text-decoration:none;font-size:11px;font-weight:400;letter-spacing:2.5px;text-transform:uppercase;transition:color 0.3s;cursor:pointer;background:none;border:none;font-family:'Jost',sans-serif;}\n  .nav-a:hover{color:#e8e2d9;}.nav-a.on{color:#e8e2d9;}\n  .img-wrap{overflow:hidden;position:relative;cursor:pointer;}\n  .img-wrap img{transition:transform 0.7s ease,filter 0.4s ease;display:block;width:100%;height:100%;object-fit:cover;}\n  .img-wrap:hover img{transform:scale(1.05);filter:brightness(0.65);}\n  .img-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.78) 0%,transparent 55%);opacity:0;transition:opacity 0.4s;display:flex;align-items:flex-end;padding:20px;}\n  .img-wrap:hover .static-title{opacity:1;}\n  .static-title{transition:opacity 0.4s;}\n  .cat-btn{background:none;border:none;border-bottom:1px solid transparent;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;padding:8px 0;color:#555;transition:all 0.3s;}\n  .cat-btn:hover{color:#e8e2d9;}.cat-btn.on{color:#e8e2d9;border-bottom-color:#c9a96e;}\n  input,textarea{background:transparent;border:none;border-bottom:1px solid #252525;color:#e8e2d9;font-family:'Jost',sans-serif;font-size:14px;padding:12px 0;width:100%;outline:none;transition:border-color 0.3s;font-weight:300;}\n  input::placeholder,textarea::placeholder{color:#3a3a3a;}\n  input:focus,textarea:focus{border-bottom-color:#c9a96e;}\n  .btn-gold{background:none;border:1px solid #c9a96e;color:#c9a96e;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;padding:14px 38px;cursor:pointer;transition:all 0.3s;}\n  .btn-gold:hover{background:#c9a96e;color:#0c0c0c;}\n  .btn-ghost{background:none;border:1px solid #272727;color:#777;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;padding:14px 32px;cursor:pointer;transition:all 0.3s;}\n  .btn-ghost:hover{border-color:#c9a96e;color:#c9a96e;}\n  @media(max-width:768px){\n    .g3{grid-template-columns:1fr 1fr!important;}\n    .g2{grid-template-columns:1fr!important;}\n    .hero-h{font-size:clamp(56px,13vw,110px)!important;}\n    .cats{flex-wrap:wrap;gap:14px!important;}\n    .abt{grid-template-columns:1fr!important;}\n  }\n";
var SIZE_SPAN = {
  "full":       6,  // groß (Querformat, ganze Breite)
  "two-thirds": 4,  // mittel-querformat (2/3)
  "half":       3,  // mittel-hochformat ODER Querformat-Ausnahme halb (1/2)
  "third":      2   // klein (1/3, beide Orientierungen)
};
function spanOf(size) {
  return SIZE_SPAN[size] || 2;
}
// Hochformat darf nie groß oder mittel-querformat sein → clampen auf half.
function effectiveSize(size, isPortrait) {
  if (isPortrait && (size === "full" || size === "two-thirds")) return "half";
  return size;
}
var ASSIGNMENTS = [{
  client: "Katholische Akademie",
  images: [{
    id: 2,
    img: window.IMGS.IMG_0000,
    size: "third"
  }, {
    id: 1,
    img: window.IMGS.IMG_0001,
    size: "third"
  }, {
    id: 3,
    size: "full",
    img: window.IMGS.IMG_0002,
    size: "third"
  }, {
    id: 4,
    img: window.IMGS.IMG_0003,
    size: "third"
  }, {
    id: 5,
    img: window.IMGS.IMG_0004,
    size: "third"
  }, {
    id: 6,
    img: window.IMGS.IMG_0005,
    size: "third"
  }, {
    id: 7,
    img: window.IMGS.IMG_0006,
    size: "third"
  }, {
    id: 8,
    img: window.IMGS.IMG_0007,
    size: "third"
  }, {
    id: 9,
    img: window.IMGS.IMG_0008,
    size: "third"
  }, {
    id: 10,
    size: "full",
    img: window.IMGS.IMG_0009,
    size: "third"
  }, {
    id: 11,
    img: window.IMGS.IMG_0010,
    size: "third"
  }, {
    id: 17,
    img: window.IMGS.IMG_0011,
    size: "third"
  }, {
    id: 12,
    img: window.IMGS.IMG_0012,
    size: "third"
  }, {
    id: 16,
    img: window.IMGS.IMG_0013,
    size: "third"
  }, {
    id: 15,
    img: window.IMGS.IMG_0014,
    size: "third"
  }, {
    id: 20,
    img: window.IMGS.IMG_0015,
    size: "third"
  }, {
    id: 19,
    size: "full",
    img: window.IMGS.IMG_0016,
    size: "third"
  }]
},, {
  client: "Niedersächsisches Landesmuseum & Modedesign-Studiengang der Hochschule Hannover",
  images: [{
    id: 21,
    img: window.IMGS.landesmuseum,
    size: "full"
  }, {
    id: 22,
    size: "two-thirds",
    img: window.IMGS.IMG_0018,
    size: "third"
  }, {
    id: 23,
    size: "third",
    img: window.IMGS.IMG_0019,
    size: "third"
  }, {
    id: 24,
    size: "third",
    img: window.IMGS.IMG_0020,
    size: "third"
  }, {
    id: 25,
    size: "third",
    img: window.IMGS.IMG_0021,
    size: "third"
  }, {
    id: 26,
    size: "third",
    img: window.IMGS.IMG_0022,
    size: "third"
  }, {
    id: 27,
    size: "third",
    img: window.IMGS.IMG_0023,
    size: "third"
  }, {
    id: 28,
    size: "third",
    img: window.IMGS.IMG_0024,
    size: "third"
  }, {
    id: 29,
    size: "third",
    img: window.IMGS.IMG_0025,
    size: "third"
  }, {
    id: 30,
    size: "third",
    img: window.IMGS.IMG_0026,
    size: "third"
  }, {
    id: 31,
    size: "third",
    img: window.IMGS.IMG_0027,
    size: "third"
  }, {
    id: 32,
    size: "full",
    img: window.IMGS.IMG_0028,
    size: "third"
  }]
}, {
  client: "Kunstverein Hannover",
  images: [{
    id: 38,
    size: "full",
    img: window.IMGS.IMG_0029,
    size: "third"
  }, {
    id: 33,
    size: "full",
    img: window.IMGS.IMG_0030,
    size: "third"
  }, {
    id: 34,
    size: "full",
    img: window.IMGS.IMG_0031,
    size: "third"
  }, {
    id: 35,
    size: "full",
    img: window.IMGS.IMG_0032,
    size: "third"
  }, {
    id: 36,
    size: "full",
    img: window.IMGS.IMG_0033,
    size: "third"
  }, {
    id: 37,
    size: "full",
    img: window.IMGS.IMG_0034,
    size: "third"
  }]
}];
var CATS = [{
  key: "portraets",
  label: "Assignments"
}, {
  key: "serien",
  label: "Fotoarbeiten"
}, {
  key: "journalismus",
  label: "Aktuelles"
}];
var ITEMS = {
  serien: [{
    id: 1,
    title: "Dilevery Service",
    desc: "Fotoreportage",
    img: window.IMGS.IMG_0035,
    size: "half"
  }, {
    id: 2,
    title: "Healing Diary",
    desc: "Fotostrecke",
    img: window.IMGS.IMG_0036,
    size: "half"
  }, {
    id: 3,
    title: "Islamic Feminism",
    desc: "Porträtserie",
    img: window.IMGS.IMG_0037,
    size: "half"
  }, {
    id: 4,
    title: "Shaped to Resist",
    desc: "Dokumentarserie",
    img: window.IMGS.IMG_0038,
    size: "half"
  }],
  portraets: [{
    id: 7,
    title: "Assignment 1",
    desc: "",
    img: window.IMGS.IMG_0039,
    size: "third"
  }, {
    id: 8,
    title: "Assignment 2",
    desc: "",
    img: window.IMGS.IMG_0040,
    size: "third"
  }, {
    id: 9,
    title: "Assignment 3",
    desc: "",
    img: window.IMGS.IMG_0041,
    size: "third"
  }, {
    id: 10,
    title: "Assignment 4",
    desc: "",
    img: window.IMGS.IMG_0042,
    size: "third"
  }, {
    id: 11,
    title: "Assignment 5",
    desc: "",
    img: window.IMGS.IMG_0043,
    size: "third"
  }, {
    id: 12,
    title: "Assignment 6",
    desc: "",
    img: window.IMGS.IMG_0044,
    size: "third"
  }, {
    id: 13,
    title: "Assignment 7",
    desc: "",
    img: window.IMGS.IMG_0045,
    size: "third"
  }],
  journalismus: [{
    id: 201,
    title: "",
    desc: "",
    img: window.IMGS.osanYaran,
    size: "two-thirds",
    align: "right"
  }, {
    id: 202,
    title: "",
    desc: "",
    img: window.IMGS.eliotKunsthaus,
    size: "half"
  }, {
    id: 203,
    title: "",
    desc: "",
    img: window.IMGS.cduParteitag,
    size: "half"
  }, {
    id: 45,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0046,
    size: "half"
  }, {
    id: 39,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0048,
    size: "third"
  }, {
    id: 47,
    title: "",
    desc: "",
    img: window.IMGS.sprengelMuseum,
    size: "half"
  }, {
    id: 48,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0049,
    size: "two-thirds"
  }, {
    id: 100,
    title: "",
    desc: "",
    img: window.IMGS.biogas,
    size: "two-thirds",
    align: "right"
  }, {
    id: 204,
    title: "",
    desc: "",
    img: window.IMGS.feuerwehr,
    size: "two-thirds"
  }, {
    id: 205,
    title: "",
    desc: "",
    img: window.IMGS.nachtengel,
    size: "full"
  }, {
    id: 43,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0051,
    size: "full"
  }, {
    id: 206,
    title: "",
    desc: "",
    img: window.IMGS.kranfuehrer,
    size: "two-thirds",
    align: "center"
  }, {
    id: 44,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0052,
    size: "full"
  }, {
    id: 46,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0053,
    size: "full"
  }, {
    id: 42,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0055,
    size: "half",
    tall: true
  }, {
    id: 41,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0054,
    size: "half"
  }, {
    id: 40,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0050,
    size: "half"
  }, {
    id: 99,
    title: "",
    desc: "",
    img: window.IMGS.shipBridge,
    size: "full"
  }]
};
function Lightbox(_ref) {
  var item = _ref.item,
    items = _ref.items,
    onClose = _ref.onClose;
  var _useState = useState(items.findIndex(function (i) {
      return i.id === item.id;
    })),
    _useState2 = _slicedToArray(_useState, 2),
    cur = _useState2[0],
    setCur = _useState2[1];
  useEffect(function () {
    var h = function h(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCur(function (c) {
        return Math.min(c + 1, items.length - 1);
      });
      if (e.key === "ArrowLeft") setCur(function (c) {
        return Math.max(c - 1, 0);
      });
    };
    window.addEventListener("keydown", h);
    return function () {
      return window.removeEventListener("keydown", h);
    };
  }, []);
  var it = items[cur];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.93)",
      zIndex: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: "fadeIn 0.25s ease",
      cursor: "zoom-out"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 22,
      right: 30,
      background: "none",
      border: "none",
      color: "#666",
      fontSize: "30px",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), cur > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setCur(function (c) {
        return c - 1;
      });
    },
    style: {
      position: "absolute",
      left: 20,
      background: "none",
      border: "none",
      color: "#777",
      fontSize: "32px",
      cursor: "pointer"
    }
  }, "\u2039"), cur < items.length - 1 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setCur(function (c) {
        return c + 1;
      });
    },
    style: {
      position: "absolute",
      right: 20,
      background: "none",
      border: "none",
      color: "#777",
      fontSize: "32px",
      cursor: "pointer"
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: "800px",
      width: "88%",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: it.title,
    style: {
      width: "100%",
      maxHeight: "78vh",
      objectFit: "contain",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "22px",
      color: "#f0ece6"
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      color: "#c9a96e",
      letterSpacing: "1px",
      marginTop: "4px"
    }
  }, it.desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "#3a3a3a"
    }
  }, cur + 1, " / ", items.length))));
}
function Nav(_ref2) {
  var page = _ref2.page,
    setPage = _ref2.setPage,
    scrollY = _ref2.scrollY,
    hidden = _ref2.hidden;
  var solid = scrollY > 60 || page !== "home";
  var goPortfolio = function goPortfolio() {
    var _document$getElementB2;
    if (page !== "home") {
      setPage("home");
      setTimeout(function () {
        var _document$getElementB;
        return (_document$getElementB = document.getElementById("gallery")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
    } else (_document$getElementB2 = document.getElementById("gallery")) === null || _document$getElementB2 === void 0 || _document$getElementB2.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      padding: "8px 5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      background: solid ? "rgba(10,10,10,0.92)" : "transparent",
      backdropFilter: solid ? "blur(14px)" : "none",
      borderBottom: solid ? "1px solid #1c1c1c" : "none",
      transition: "all 0.4s, transform 0.4s",
      transform: hidden ? "translateY(-100%)" : "translateY(0)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "36px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-a".concat(page === "home" ? " on" : ""),
    onClick: function onClick() {
      return setPage("home");
    }
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    className: "nav-a",
    onClick: goPortfolio
  }, "Portfolio"), /*#__PURE__*/React.createElement("button", {
    className: "nav-a".concat(page === "videos" ? " on" : ""),
    onClick: function onClick() {
      return setPage("videos");
    }
  }, "Videos"), /*#__PURE__*/React.createElement("button", {
    className: "nav-a".concat(page === "about" ? " on" : ""),
    onClick: function onClick() {
      return setPage("about");
    }
  }, "\xDCber mich"), /*#__PURE__*/React.createElement("button", {
    className: "nav-a".concat(page === "contact" ? " on" : ""),
    onClick: function onClick() {
      return setPage("contact");
    }
  }, "Kontakt")));
}
var WORKS = {
  "delivery": {
    title: "Delivery Service",
    label: "Fotoreportage",
    intro: "",
    images: [{
      src: window.IMGS.delivery_01,
      caption: "",
      size: "half",
      position: "center 35%"
    }, {
      src: window.IMGS.delivery_02,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_03,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_04,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_05,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_06,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_07,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_08,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_09,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_10,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_11,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_12,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_13,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_14,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_15,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_16,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.delivery_17,
      caption: "",
      size: "half"
    }]
  },
  "healing": {
    title: "Healing Diary",
    label: "Fotostrecke",
    intro: "",
    images: [{
      src: "uploads/01-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half",
      position: "center 35%"
    }, {
      src: "uploads/02-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/03-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/04-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/05-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/06-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/07-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/08-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/09-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/10-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/11-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/12-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }, {
      src: "uploads/13-fotograf-momen-mostafa-deutschland-hannover-healing-diary-bangladesch-dahaka.jpg",
      caption: "",
      size: "half"
    }]
  },
  "islamic": {
    title: "Islamic Feminism",
    label: "Porträtserie",
    intro: "",
    images: [{
      src: window.IMGS.islamic_01,
      caption: "",
      size: "half",
      position: "center 25%"
    }, {
      src: window.IMGS.islamic_02,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_03,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_04,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_05,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_06,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_07,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_08,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_09,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_10,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_11,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_12,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_13,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_14,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_15,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.islamic_16,
      caption: "",
      size: "half"
    }]
  },
  "shaped": {
    title: "Shaped to Resist",
    label: "Dokumentarserie",
    intro: "",
    images: [{
      src: window.IMGS.shaped_01,
      caption: "",
      size: "half",
      position: "center 25%"
    }, {
      src: window.IMGS.shaped_02,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_03,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_04,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_05,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_06,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_07,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_08,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_09,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_10,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_11,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_12,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_13,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_14,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_15,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_16,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_17,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_18,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.shaped_19,
      caption: "",
      size: "half"
    }]
  }
};
function WorkDetail(_ref3) {
  var workKey = _ref3.workKey,
    setPage = _ref3.setPage;
  var work = WORKS[workKey];
  if (!work) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "90px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "55vh",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom,rgba(12,12,12,0.4),rgba(12,12,12,0.8))",
      zIndex: 1
    }
  }), work.images[0] && /*#__PURE__*/React.createElement("img", {
    src: work.images[0].src,
    alt: work.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: work.images[0].position || "center center",
      filter: "grayscale(15%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "50px",
      left: "5%",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "14px"
    }
  }, work.label), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(40px,6vw,80px)",
      color: "#f0ece6",
      lineHeight: 1.05
    }
  }, work.title)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPage("home");
    },
    style: {
      position: "absolute",
      top: "24px",
      left: "5%",
      zIndex: 2,
      background: "none",
      border: "none",
      color: "#888",
      fontFamily: "'Jost',sans-serif",
      fontSize: "11px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, "← Zurück")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "720px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 2,
      color: "#888",
      fontWeight: 300,
      fontFamily: "'Jost',sans-serif"
    }
  }, work.intro))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 5% 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
      gridAutoFlow: "row",
      gap: "32px 18px"
    }
  }, work.images.slice(1).map(function (im, i) {
    return /*#__PURE__*/React.createElement("figure", {
      key: i,
      style: {
        gridColumn: "span " + spanOf(im.size || "half"),
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: im.src,
      alt: im.caption || "",
      style: {
        width: "100%",
        height: "auto",
        display: "block",
        filter: "grayscale(8%)"
      }
    }), im.caption && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        fontSize: "11px",
        color: "#666",
        letterSpacing: "0.5px",
        marginTop: "10px",
        fontFamily: "'Jost',sans-serif",
        fontWeight: 300,
        lineHeight: 1.5
      }
    }, im.caption));
  }))));
}
var WORK_KEYS = {
  "Dilevery Service": "delivery",
  "Healing Diary": "healing",
  "Islamic Feminism": "islamic",
  "Shaped to Resist": "shaped"
};
function JournalismusItem(_ref4) {
  var photo = _ref4.photo,
    onOpen = _ref4.onOpen;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hov = _useState4[0],
    setHov = _useState4[1];
  var _useStateP = useState(false),
    _useStatePArr = _slicedToArray(_useStateP, 2),
    isPortrait = _useStatePArr[0],
    setIsPortrait = _useStatePArr[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: photo.align === "right"
        ? "span " + spanOf(effectiveSize(photo.size, isPortrait)) + " / -1"
        : photo.align === "center"
        ? ((6 - spanOf(effectiveSize(photo.size, isPortrait))) / 2 + 1) + " / span " + spanOf(effectiveSize(photo.size, isPortrait))
        : "span " + spanOf(effectiveSize(photo.size, isPortrait)),
      gridRow: photo.tall ? "span 2" : undefined,
      overflow: "hidden",
      cursor: "pointer",
      position: "relative",
      background: "#111"
    },
    onClick: function onClick() {
      return onOpen(photo);
    },
    onMouseEnter: function onMouseEnter() {
      return setHov(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHov(false);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo.img,
    alt: "",
    onLoad: function onLoad(e) {
      setIsPortrait(e.target.naturalHeight > e.target.naturalWidth);
    },
    style: {
      width: "100%",
      height: "auto",
      display: "block",
      filter: hov ? "brightness(0.65) grayscale(8%)" : "grayscale(8%)",
      transform: hov ? "scale(1.04)" : "scale(1)",
      transition: "filter 0.4s, transform 0.6s",
      objectFit: "contain"
    }
  }));
}
function JournalismusLayout(_ref5) {
  var items = _ref5.items,
    onOpen = _ref5.onOpen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
      gridAutoRows: "auto",
      gridAutoFlow: "row",
      gap: "12px",
      minWidth: "900px"
    }
  }, items.map(function (photo, i) {
    return /*#__PURE__*/React.createElement(JournalismusItem, {
      key: i,
      photo: photo,
      onOpen: onOpen
    });
  })));
}
function PortfolioItem(_ref6) {
  var item = _ref6.item,
    onOpen = _ref6.onOpen,
    hideTitle = _ref6.hideTitle,
    naturalRatio = _ref6.naturalRatio,
    fixedHeight = _ref6.fixedHeight;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hovered = _useState6[0],
    setHovered = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isPortrait = _useState8[0],
    setIsPortrait = _useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span " + spanOf(effectiveSize(item.size, isPortrait))
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: naturalRatio ? "" : "img-wrap",
    style: {
      background: "#111",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer"
    },
    onClick: function onClick() {
      return onOpen(item);
    },
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: item.title,
    onLoad: function onLoad(e) {
      setIsPortrait(e.target.naturalHeight > e.target.naturalWidth);
    },
    style: {
      width: "100%",
      height: "auto",
      display: "block",
      filter: "grayscale(8%)",
      transition: "filter 0.4s"
    }
  }), !hideTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      padding: "16px",
      background: "linear-gradient(to top,rgba(0,0,0,0.45) 0%,transparent 60%)",
      opacity: hovered ? 1 : 0.5,
      transition: "opacity 0.4s"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "20px",
      color: "#f0ece6",
      letterSpacing: "0.5px"
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px",
      color: "#c9a96e",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginTop: "5px"
    }
  }, item.desc)))));
}

/* HOME */
function Home(_ref7) {
  var setPage = _ref7.setPage,
    navHidden = _ref7.navHidden;
  var _useState9 = useState(function () {
      try {
        var s = localStorage.getItem("mm.cat");
        if (s === "portraets" || s === "serien" || s === "journalismus") return s;
      } catch (e) {}
      return "portraets";
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    cat = _useState0[0],
    setCat = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    lb = _useState10[0],
    setLb = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    lbItems = _useState12[0],
    setLbItems = _useState12[1];
  var openLb = function openLb(item, items) {
    setLb(item);
    setLbItems(items);
  };
  useEffect(function () {
    try { localStorage.setItem("mm.cat", cat); } catch (e) {}
  }, [cat]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      height: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-start",
      padding: "16px 5% 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top,rgba(12,12,12,0.9) 0%,rgba(12,12,12,0.1) 50%,rgba(12,12,12,0.45) 100%)",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.IMGS.IMG_0072,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(20%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fu",
    style: {
      marginBottom: "0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 100,
      fontSize: "clamp(14px,2.5vw,22px)",
      letterSpacing: "12px",
      textTransform: "uppercase",
      color: "#888",
      display: "block"
    }
  }, "Momen"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "1px",
      background: "#c9a96e",
      margin: "10px 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 600,
      fontSize: "clamp(14px,2.5vw,22px)",
      letterSpacing: "12px",
      textTransform: "uppercase",
      color: "#f0ece6",
      display: "block"
    }
  }, "Mostafa")), /*#__PURE__*/React.createElement("p", {
    className: "fu2",
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginTop: "22px",
      marginBottom: "0"
    }
  }, "Fotograf"))), /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    style: {
      padding: "100px 5%",
      background: "#222222",
      borderTop: "1px solid #181818"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1320px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "50px",
      flexWrap: "wrap",
      gap: "18px",
      position: "sticky",
      top: "0px",
      zIndex: 100,
      background: "#222222",
      padding: "6px 0",
      borderBottom: "1px solid #1e1e1e",
      paddingTop: navHidden ? "6px" : "48px",
      transition: "padding-top 0.4s"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      marginBottom: "6px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#f0ece6",
      display: "block"
    }
  }, "Portfolio")), /*#__PURE__*/React.createElement("div", {
    className: "cats",
    style: {
      display: "flex",
      gap: "28px"
    }
  }, CATS.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      className: "cat-btn".concat(cat === c.key ? " on" : ""),
      onClick: function onClick() {
        return setCat(c.key);
      }
    }, c.label);
  }))), cat === "journalismus" ? /*#__PURE__*/React.createElement(JournalismusLayout, {
    items: ITEMS.journalismus,
    onOpen: function onOpen(it) {
      return openLb(it, ITEMS.journalismus);
    }
  }) : cat === "portraets" ? /*#__PURE__*/React.createElement("div", null, ASSIGNMENTS.map(function (group, gi) {
    return /*#__PURE__*/React.createElement("div", {
      key: gi,
      style: {
        marginBottom: "80px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "22px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#444",
        marginBottom: "28px",
        borderBottom: "1px solid #1a1a1a",
        paddingBottom: "14px",
        fontFamily: "'Jost',sans-serif"
      }
    }, group.client), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
        gridAutoFlow: "row dense",
        gap: "28px",
        alignItems: "start",
        minWidth: "900px"
      }
    }, group.images.map(function (item) {
      return /*#__PURE__*/React.createElement(PortfolioItem, {
        key: item.id,
        item: _objectSpread(_objectSpread({}, item), {}, {
          title: "",
          desc: ""
        }),
        onOpen: function onOpen(it) {
          return openLb(it, group.images);
        },
        hideTitle: true,
        naturalRatio: true,
        fixedHeight: "480px"
      });
    }))));
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
      gridAutoFlow: "row dense",
      gap: "28px",
      alignItems: "start",
      minWidth: "900px"
    }
  }, ITEMS[cat].map(function (item) {
    return /*#__PURE__*/React.createElement(PortfolioItem, {
      key: item.id,
      item: item,
      onOpen: function onOpen(it) {
        if (cat === "serien" && WORK_KEYS[it.title]) {
          setPage("work-" + WORK_KEYS[it.title]);
          return;
        }
        openLb(it, ITEMS[cat]);
      },
      hideTitle: false,
      naturalRatio: false,
      fixedHeight: "320px"
    });
  }))))), lb && /*#__PURE__*/React.createElement(Lightbox, {
    item: lb,
    items: lbItems,
    onClose: function onClose() {
      setLb(null);
      setLbItems([]);
    }
  }));
}

/* VIDEOS */
function Videos() {
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    active = _useState14[0],
    setActive = _useState14[1];
  var _useStateT = useState({}),
    _useStateTArr = _slicedToArray(_useStateT, 2),
    titles = _useStateTArr[0],
    setTitles = _useStateTArr[1];
  var videos = [{
    id: 1,
    title: "",
    desc: "",
    thumb: "https://img.youtube.com/vi/Ql2m_wkRqfg/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/Ql2m_wkRqfg"
  }, {
    id: 2,
    title: "",
    desc: "",
    thumb: "https://img.youtube.com/vi/1hR_GW5D5Rg/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/1hR_GW5D5Rg"
  }, {
    id: 3,
    title: "",
    desc: "",
    thumb: "https://vumbnail.com/767418387.jpg",
    embed: "https://player.vimeo.com/video/767418387"
  }, {
    id: 4,
    title: "",
    desc: "",
    thumb: "https://img.youtube.com/vi/OAZLlXaSir0/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/OAZLlXaSir0"
  }, {
    id: 5,
    title: "",
    desc: "",
    thumb: "https://vumbnail.com/767193476.jpg",
    embed: "https://player.vimeo.com/video/767193476"
  }];
  useEffect(function () {
    var h = function h(e) {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", h);
    return function () {
      return window.removeEventListener("keydown", h);
    };
  }, []);
  useEffect(function () {
    videos.forEach(function (v) {
      var m = v.embed.match(/youtube\.com\/embed\/([^?\/]+)/);
      var oembed = null;
      if (m) {
        oembed = "https://www.youtube.com/oembed?url=https://youtu.be/" + m[1] + "&format=json";
      } else {
        m = v.embed.match(/player\.vimeo\.com\/video\/(\d+)/);
        if (m) oembed = "https://vimeo.com/api/oembed.json?url=https://vimeo.com/" + m[1];
      }
      if (!oembed) return;
      fetch(oembed).then(function (r) { return r.json(); }).then(function (d) {
        if (d && d.title) setTitles(function (cur) {
          var next = Object.assign({}, cur);
          next[v.id] = d.title;
          return next;
        });
      })["catch"](function () {});
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "16px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 100,
      fontSize: "clamp(12px,2vw,18px)",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#888",
      display: "block"
    }
  }, "Momen"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 600,
      fontSize: "clamp(12px,2vw,18px)",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#f0ece6",
      display: "block"
    }
  }, "Mostafa")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "14px"
    }
  }, "Bewegtbild"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(40px,6vw,80px)",
      color: "#f0ece6",
      margin: "0"
    }
  }, "Videos"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "90px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "24px"
    }
  }, videos.map(function (v) {
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setActive(v);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "img-wrap",
      style: {
        aspectRatio: "16/9",
        background: "#111",
        marginBottom: "14px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: v.thumb,
      alt: v.title,
      style: {
        filter: "grayscale(15%) brightness(0.85)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "img-ov",
      style: {
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        background: "rgba(0,0,0,0.3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.3s",
        background: "rgba(0,0,0,0.4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff",
        fontSize: "18px",
        marginLeft: "5px"
      }
    }, "\u25B6")))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "19px",
        color: "#e8e2d9",
        marginBottom: "5px"
      }
    }, titles[v.id] || v.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "10px",
        color: "#c9a96e",
        letterSpacing: "1.5px"
      }
    }, v.desc));
  })))), active && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setActive(null);
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.95)",
      zIndex: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: "fadeIn 0.25s ease",
      cursor: "zoom-out"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActive(null);
    },
    style: {
      position: "absolute",
      top: 22,
      right: 30,
      background: "none",
      border: "none",
      color: "#666",
      fontSize: "30px",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      width: "min(860px,90vw)",
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      overflow: "hidden",
      background: "#000"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: active.embed + "?autoplay=1&rel=0",
    title: active.title,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "22px",
      color: "#f0ece6"
    }
  }, active.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      color: "#c9a96e",
      letterSpacing: "1px",
      marginTop: "4px"
    }
  }, active.desc))))));
}

/* ABOUT */
function About() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "140px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 5% 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "abt",
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "50px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "260px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.IMGS && window.IMGS.profilePhoto) || "https://picsum.photos/seed/mmport55/500/650",
    alt: "Momen Mostafa",
    style: {
      width: "100%",
      display: "block",
      filter: "grayscale(12%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-16px",
      right: "-16px",
      width: "68px",
      height: "68px",
      border: "1px solid #c9a96e"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "18px"
    }
  }, "\xDCber mich"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "34px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 100,
      fontSize: "clamp(14px,2vw,20px)",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#888",
      display: "block"
    }
  }, "Momen"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 600,
      fontSize: "clamp(14px,2vw,20px)",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#f0ece6",
      display: "block"
    }
  }, "Mostafa")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.9,
      color: "#888",
      marginBottom: "22px",
      fontWeight: 300
    }
  }, "Moamen Mostafa lebt seit 2017 in Deutschland. Seit 2020 ist er als Dokumentarfotograf t\xE4tig. Aktuell untersucht er mittels Portr\xE4t- und Dokumentarfotografie die Gewichtung, die Religion im Leben von in Europa lebenden Muslim:innen in sozialer, famili\xE4rer und religi\xF6ser Hinsicht einnimmt."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.9,
      color: "#888",
      fontWeight: 300
    }
  }, "Moamen Mostafa fotografierte als Amateur den Arabischen Fr\xFChling in Kairo. Nach seinem Abitur in Khartum 2016 bereitete er sich in Istanbul und Ankara sprachlich auf das Studium Fotojournalismus und Dokumentarfotografie in Hannover vor, wohin er Ende 2017 zog. Seit Ende 2024 lebt er nahe Hannover und sucht mit seiner Fotografie nach Verst\xE4ndnisbr\xFCcken zwischen Religion und S\xE4kularit\xE4t."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "50px",
      borderTop: "1px solid #1e1e1e",
      paddingTop: "38px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#444",
      marginBottom: "26px"
    }
  }, "Stationen"), [["1998", "Geboren in Kairo"], ["2018–24", "Fotojournalismus & Dokumentarfotografie · Hannover"], ["2022", "Internationales Programm · Pathshala School · Dhaka"], ["2024–heute", "Freier Fotograf"]].map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      y = _ref9[0],
      ev = _ref9[1];
    return /*#__PURE__*/React.createElement("div", {
      key: y,
      style: {
        display: "flex",
        gap: "26px",
        marginBottom: "14px",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "19px",
        color: "#c9a96e",
        minWidth: "66px",
        flexShrink: 0
      }
    }, y), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        color: "#777",
        fontWeight: 300
      }
    }, ev));
  })))))));
}

/* CONTACT */
function Contact() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "90px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "640px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "46px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 100,
      fontSize: "clamp(14px,2vw,20px)",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#888",
      display: "block"
    }
  }, "Momen"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 600,
      fontSize: "clamp(14px,2vw,20px)",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#f0ece6",
      display: "block"
    }
  }, "Mostafa")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "68px"
    }
  }, "Kontakt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "26px"
    }
  }, [{
    icon: "\u2709",
    label: "E-Mail",
    val: "me@momen-most.com",
    href: "mailto:me@momen-most.com"
  }, {
    icon: "\u260E",
    label: "Telefon",
    val: "+49 1520 5197646",
    href: "tel:+4915205197646"
  }, {
    icon: "\u25C8",
    label: "Instagram",
    val: "@momen_most",
    href: "https://www.instagram.com/momen_most/"
  }, {
    icon: "\u25C9",
    label: "LinkedIn",
    val: "momen-most",
    href: "https://www.linkedin.com/in/momen-most"
  }].map(function (c) {
    return /*#__PURE__*/React.createElement("a", {
      key: c.label,
      href: c.href,
      target: "_blank",
      rel: "noreferrer",
      style: {
        textDecoration: "none",
        display: "flex",
        gap: "16px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#c9a96e",
        fontSize: "18px",
        width: "22px",
        textAlign: "center",
        flexShrink: 0
      }
    }, c.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "10px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#3a3a3a",
        marginBottom: "3px"
      }
    }, c.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "14px",
        color: "#aaa",
        fontWeight: 300
      }
    }, c.val)));
  })))));
}
function Impressum(_ref10) {
  var setPage = _ref10.setPage;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "90px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 5% 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "800px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "14px"
    }
  }, "Rechtliches"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "50px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 100,
      fontSize: "18px",
      letterSpacing: "10px",
      textTransform: "uppercase",
      color: "#888",
      display: "block"
    }
  }, "Impressum"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      margin: "8px 0"
    }
  })), [["Angaben gemäß § 5 TMG", ["Moamen Mostafa", "Himmelsthürerstr. 4", "31147 Hildesheim", "Deutschland"]], ["Kontakt", ["Telefon: +49 1520 5197646", "E-Mail: me@momen-most.com"]], ["Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV", ["Moamen Mostafa", "Himmelsthürerstr. 4, 31147 Hildesheim"]], ["Haftung für Inhalte", ["Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden."]], ["Haftung für Links", ["Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."]], ["Urheberrecht", ["Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Sämtliche Fotos und Texte sind urheberrechtlich geschützt. © Moamen Mostafa"]]].map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
      title = _ref12[0],
      lines = _ref12[1];
    return /*#__PURE__*/React.createElement("div", {
      key: title,
      style: {
        marginBottom: "36px"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "'Jost',sans-serif",
        fontWeight: 400,
        fontSize: "13px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#c9a96e",
        marginBottom: "12px"
      }
    }, title), lines.map(function (line, i) {
      return /*#__PURE__*/React.createElement("p", {
        key: i,
        style: {
          fontSize: "15px",
          lineHeight: 1.8,
          color: "#888",
          fontWeight: 300
        }
      }, line);
    }));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPage("home");
    },
    className: "btn-ghost",
    style: {
      marginTop: "20px"
    }
  }, "\u2190 Zur\xFCck"))));
}
function Footer(_ref13) {
  var setPage = _ref13.setPage;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "34px 5%",
      borderTop: "1px solid #171717",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      background: "#252525"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return setPage("home");
    },
    style: {
      cursor: "pointer",
      textAlign: "center",
      display: "block",
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 100,
      fontSize: "9px",
      letterSpacing: "8px",
      textTransform: "uppercase",
      color: "#888",
      display: "block"
    }
  }, "Momen"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "20px",
      height: "1px",
      background: "#c9a96e",
      margin: "5px auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontWeight: 600,
      fontSize: "9px",
      letterSpacing: "8px",
      textTransform: "uppercase",
      color: "#e8e2d9",
      display: "block"
    }
  }, "Mostafa")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: "#252525"
    }
  }, "\xA9 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "22px"
    }
  }, [["Instagram", "https://www.instagram.com/momen_most/"], ["LinkedIn", "https://www.linkedin.com/in/momen-most"]].map(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
      l = _ref15[0],
      h = _ref15[1];
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: h,
      target: "_blank",
      rel: "noreferrer",
      className: "nav-a",
      style: {
        fontSize: "10px"
      }
    }, l);
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-a",
    style: {
      fontSize: "10px",
      cursor: "pointer"
    },
    onClick: function onClick() {
      return setPage("impressum");
    }
  }, "Impressum")));
}
/* PATH ROUTING */
var PAGE_TO_PATH = {
  home: "/",
  about: "/ueber-mich",
  videos: "/videos",
  contact: "/kontakt",
  impressum: "/impressum",
  "work-delivery": "/arbeit/delivery",
  "work-healing": "/arbeit/healing",
  "work-islamic": "/arbeit/islamic"
};
var PATH_TO_PAGE = {
  "/": "home",
  "/ueber-mich": "about",
  "/videos": "videos",
  "/kontakt": "contact",
  "/impressum": "impressum",
  "/arbeit/delivery": "work-delivery",
  "/arbeit/healing": "work-healing",
  "/arbeit/islamic": "work-islamic"
};
function pageFromPath() {
  var p = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
  return PATH_TO_PAGE[p] || "home";
}
function App() {
  var _useState17 = useState(pageFromPath),
    _useState18 = _slicedToArray(_useState17, 2),
    page = _useState18[0],
    setPage = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    scrollY = _useState20[0],
    setScrollY = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    navHidden = _useState22[0],
    setNavHidden = _useState22[1];
  var lastScrollY = useRef(0);
  var didMount = useRef(false);
  useEffect(function () {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  useEffect(function () {
    var el = document.createElement("style");
    el.textContent = STYLES;
    document.head.appendChild(el);
    return function () {
      return document.head.removeChild(el);
    };
  }, []);
  useEffect(function () {
    var h = function h() {
      var cur = window.scrollY;
      var gallery = document.getElementById("gallery");
      var tabsThreshold = gallery ? gallery.offsetTop - 50 : 300;
      if (cur > lastScrollY.current && cur > tabsThreshold) {
        setNavHidden(true);
      } else if (cur < lastScrollY.current) {
        setNavHidden(false);
      }
      lastScrollY.current = cur;
      setScrollY(cur);
    };
    window.addEventListener("scroll", h, {
      passive: true
    });
    return function () {
      return window.removeEventListener("scroll", h);
    };
  }, []);
  useEffect(function () {
    if (!didMount.current) {
      didMount.current = true;
      try {
        var saved = sessionStorage.getItem("mm.scroll." + page);
        if (saved) {
          var y = parseInt(saved, 10);
          // Restore after content has had a chance to render (images, etc).
          var tries = 0;
          var tryRestore = function () {
            window.scrollTo(0, y);
            tries++;
            if (tries < 10 && Math.abs(window.scrollY - y) > 2) {
              setTimeout(tryRestore, 80);
            }
          };
          setTimeout(tryRestore, 60);
          return;
        }
      } catch (e) {}
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);
  useEffect(function () {
    var save = function () {
      try { sessionStorage.setItem("mm.scroll." + page, String(window.scrollY)); } catch (e) {}
    };
    var t = null;
    var onScroll = function () {
      if (t) return;
      t = setTimeout(function () { save(); t = null; }, 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", save);
    return function () {
      save();
      if (t) { clearTimeout(t); }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", save);
    };
  }, [page]);
  useEffect(function () {
    var target = PAGE_TO_PATH[page] || "/";
    if (window.location.pathname !== target) {
      window.history.pushState(null, "", target);
    }
  }, [page]);
  useEffect(function () {
    var onPop = function () {
      var next = pageFromPath();
      setPage(function (cur) {
        return cur === next ? cur : next;
      });
    };
    window.addEventListener("popstate", onPop);
    return function () {
      return window.removeEventListener("popstate", onPop);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#2a2a2a",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    page: page,
    setPage: setPage,
    scrollY: scrollY,
    hidden: navHidden
  }), page === "home" && /*#__PURE__*/React.createElement(Home, {
    setPage: setPage,
    navHidden: navHidden
  }), page === "about" && /*#__PURE__*/React.createElement(About, null), page === "videos" && /*#__PURE__*/React.createElement(Videos, null), page === "contact" && /*#__PURE__*/React.createElement(Contact, null), page === "work-delivery" && /*#__PURE__*/React.createElement(WorkDetail, {
    workKey: "delivery",
    setPage: setPage
  }), page === "work-healing" && /*#__PURE__*/React.createElement(WorkDetail, {
    workKey: "healing",
    setPage: setPage
  }), page === "work-islamic" && /*#__PURE__*/React.createElement(WorkDetail, {
    workKey: "islamic",
    setPage: setPage
  }), page === "impressum" && /*#__PURE__*/React.createElement(Impressum, {
    setPage: setPage
  }), /*#__PURE__*/React.createElement(Footer, {
    setPage: setPage
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
