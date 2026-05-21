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
var ASSIGNMENTS = [{
  client: "Katholische Akademie",
  images: [{
    id: 2,
    img: window.IMGS.IMG_0000
  }, {
    id: 1,
    img: window.IMGS.IMG_0001
  }, {
    id: 3,
    fullWidth: true,
    img: window.IMGS.IMG_0002
  }, {
    id: 4,
    img: window.IMGS.IMG_0003
  }, {
    id: 5,
    img: window.IMGS.IMG_0004
  }, {
    id: 6,
    img: window.IMGS.IMG_0005
  }, {
    id: 7,
    img: window.IMGS.IMG_0006
  }, {
    id: 8,
    img: window.IMGS.IMG_0007
  }, {
    id: 9,
    img: window.IMGS.IMG_0008
  }, {
    id: 10,
    fullWidth: true,
    img: window.IMGS.IMG_0009
  }, {
    id: 11,
    img: window.IMGS.IMG_0010
  }, {
    id: 17,
    img: window.IMGS.IMG_0011
  }, {
    id: 12,
    img: window.IMGS.IMG_0012
  }, {
    id: 16,
    img: window.IMGS.IMG_0013
  }, {
    id: 15,
    img: window.IMGS.IMG_0014
  }, {
    id: 20,
    img: window.IMGS.IMG_0015
  }, {
    id: 19,
    fullWidth: true,
    img: window.IMGS.IMG_0016
  }]
},, {
  client: "Niedersächsisches Landesmuseum & Modedesign-Studiengang der Hochschule Hannover",
  images: [{
    id: 21,
    fullWidth: true,
    img: window.IMGS.IMG_0017
  }, {
    id: 22,
    spanTwo: true,
    img: window.IMGS.IMG_0018
  }, {
    id: 23,
    noSpan: true,
    img: window.IMGS.IMG_0019
  }, {
    id: 24,
    noSpan: true,
    img: window.IMGS.IMG_0020
  }, {
    id: 25,
    noSpan: true,
    img: window.IMGS.IMG_0021
  }, {
    id: 26,
    noSpan: true,
    img: window.IMGS.IMG_0022
  }, {
    id: 27,
    noSpan: true,
    img: window.IMGS.IMG_0023
  }, {
    id: 28,
    noSpan: true,
    img: window.IMGS.IMG_0024
  }, {
    id: 29,
    noSpan: true,
    img: window.IMGS.IMG_0025
  }, {
    id: 30,
    noSpan: true,
    img: window.IMGS.IMG_0026
  }, {
    id: 31,
    noSpan: true,
    img: window.IMGS.IMG_0027
  }, {
    id: 32,
    fullWidth: true,
    img: window.IMGS.IMG_0028
  }]
}, {
  client: "Kunstverein Hannover",
  images: [{
    id: 38,
    fullWidth: true,
    img: window.IMGS.IMG_0029
  }, {
    id: 33,
    fullWidth: true,
    img: window.IMGS.IMG_0030
  }, {
    id: 34,
    fullWidth: true,
    img: window.IMGS.IMG_0031
  }, {
    id: 35,
    fullWidth: true,
    img: window.IMGS.IMG_0032
  }, {
    id: 36,
    fullWidth: true,
    img: window.IMGS.IMG_0033
  }, {
    id: 37,
    fullWidth: true,
    img: window.IMGS.IMG_0034
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
  label: "Tagesjournalismus"
}];
var ITEMS = {
  serien: [{
    id: 1,
    title: "Dilevery Service",
    desc: "Fotoreportage",
    img: window.IMGS.IMG_0035
  }, {
    id: 2,
    title: "Healing Diary",
    desc: "Fotostrecke",
    img: window.IMGS.IMG_0036
  }, {
    id: 3,
    title: "Islamic Feminism",
    desc: "Porträtserie",
    img: window.IMGS.IMG_0037
  }, {
    id: 4,
    title: "Shaped to Resist",
    desc: "Dokumentarserie",
    img: window.IMGS.IMG_0038
  }],
  portraets: [{
    id: 7,
    title: "Assignment 1",
    desc: "",
    img: window.IMGS.IMG_0039
  }, {
    id: 8,
    title: "Assignment 2",
    desc: "",
    img: window.IMGS.IMG_0040
  }, {
    id: 9,
    title: "Assignment 3",
    desc: "",
    img: window.IMGS.IMG_0041
  }, {
    id: 10,
    title: "Assignment 4",
    desc: "",
    img: window.IMGS.IMG_0042
  }, {
    id: 11,
    title: "Assignment 5",
    desc: "",
    img: window.IMGS.IMG_0043
  }, {
    id: 12,
    title: "Assignment 6",
    desc: "",
    img: window.IMGS.IMG_0044
  }, {
    id: 13,
    title: "Assignment 7",
    desc: "",
    img: window.IMGS.IMG_0045
  }],
  journalismus: [{
    id: 48,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0046
  }, {
    id: 49,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0047
  }, {
    id: 50,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0048
  }, {
    id: 39,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0049
  }, {
    id: 40,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0050
  }, {
    id: 41,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0051
  }, {
    id: 42,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0052
  }, {
    id: 43,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0053
  }, {
    id: 44,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0054
  }, {
    id: 45,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0055
  }, {
    id: 46,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0056
  }, {
    id: 47,
    title: "",
    desc: "",
    img: window.IMGS.IMG_0057
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
    title: "Dilevery Service",
    label: "Fotoreportage",
    intro: "Hier kannst du einen Einführungstext zur Arbeit einfügen. Beschreibe den Kontext, die Entstehung und die Intention hinter dieser Fotoreportage.",
    images: [{
      src: window.IMGS.IMG_0058,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0059,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0060,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0061,
      caption: "Bildunterschrift für dieses Foto"
    }]
  },
  "healing": {
    title: "Healing Diary",
    label: "Fotostrecke",
    intro: "Hier kannst du einen Einführungstext zur Arbeit einfügen. Beschreibe den Kontext, die Entstehung und die Intention hinter dieser Fotostrecke.",
    images: [{
      src: window.IMGS.IMG_0062,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0063,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0064,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0065,
      caption: "Bildunterschrift für dieses Foto"
    }]
  },
  "islamic": {
    title: "Islamic Feminism",
    label: "Porträtserie",
    intro: "Hier kannst du einen Einführungstext zur Arbeit einfügen. Beschreibe den Kontext, die Entstehung und die Intention hinter dieser Porträtserie.",
    images: [{
      src: window.IMGS.IMG_0066,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0067,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0068,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0069,
      caption: "Bildunterschrift für dieses Foto"
    }]
  },
  "shaped": {
    title: "Shaped to Resist",
    label: "Dokumentarserie",
    intro: "Hier kannst du einen Einführungstext zur Arbeit einfügen. Beschreibe den Kontext, die Entstehung und die Intention hinter dieser Dokumentarserie.",
    images: [{
      src: window.IMGS.IMG_0070,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0071,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0072,
      caption: "Bildunterschrift für dieses Foto"
    }, {
      src: window.IMGS.IMG_0073,
      caption: "Bildunterschrift für dieses Foto"
    }]
  }
};
function WorkDetail(_ref3) {
  var _work$images$, _work$images$2;
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
  }), /*#__PURE__*/React.createElement("img", {
    src: work.images[0].src,
    alt: work.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
  }), /*#__PURE__*/React.createElement("p", {
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
  }, "\u2190 Zur\xFCck")), /*#__PURE__*/React.createElement("section", {
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
  }), /*#__PURE__*/React.createElement("p", {
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
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: work.images[0].src,
    alt: "",
    style: {
      width: "100%",
      height: "65vh",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "#555",
      letterSpacing: "1px",
      marginTop: "10px",
      fontFamily: "'Jost',sans-serif"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "#555",
      letterSpacing: "1px",
      marginTop: "10px",
      fontFamily: "'Jost',sans-serif"
    }
  }, work.images[0].caption))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "6px",
      marginBottom: "6px"
    }
  }, [1, 2].map(function (i) {
    var _work$images$i, _work$images$i2;
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("img", {
      src: ((_work$images$i = work.images[i]) === null || _work$images$i === void 0 ? void 0 : _work$images$i.src) || work.images[0].src,
      alt: "",
      style: {
        width: "100%",
        height: "50vh",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "11px",
        color: "#555",
        letterSpacing: "1px",
        marginTop: "10px",
        fontFamily: "'Jost',sans-serif"
      }
    }, ((_work$images$i2 = work.images[i]) === null || _work$images$i2 === void 0 ? void 0 : _work$images$i2.caption) || "Bildunterschrift"));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: ((_work$images$ = work.images[3]) === null || _work$images$ === void 0 ? void 0 : _work$images$.src) || work.images[0].src,
    alt: "",
    style: {
      width: "100%",
      height: "55vh",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      color: "#555",
      letterSpacing: "1px",
      marginTop: "10px",
      fontFamily: "'Jost',sans-serif"
    }
  }, ((_work$images$2 = work.images[3]) === null || _work$images$2 === void 0 ? void 0 : _work$images$2.caption) || "Bildunterschrift")))));
}
var WORK_KEYS = {
  "Dilevery Service": "delivery",
  "Healing Diary": "healing",
  "Islamic Feminism": "islamic",
  "Shaped to Resist": "shaped"
};
function JournalismusItem(_ref4) {
  var photo = _ref4.photo,
    col = _ref4.col,
    row = _ref4.row,
    colSpan = _ref4.colSpan,
    rowSpan = _ref4.rowSpan,
    onOpen = _ref4.onOpen;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hov = _useState4[0],
    setHov = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "".concat(col, "/").concat(col + colSpan),
      gridRow: "".concat(row, "/").concat(row + rowSpan),
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
  var p = items;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
      gridAutoRows: "auto",
      gap: "12px",
      minWidth: "900px"
    }
  }, p[3] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[3],
    col: 1,
    row: 1,
    colSpan: 2,
    rowSpan: 2,
    onOpen: onOpen
  }), p[0] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[0],
    col: 3,
    row: 1,
    colSpan: 4,
    rowSpan: 2,
    onOpen: onOpen
  }), p[4] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[4],
    col: 3,
    row: 3,
    colSpan: 4,
    rowSpan: 2,
    onOpen: onOpen
  }), p[5] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[5],
    col: 1,
    row: 5,
    colSpan: 3,
    rowSpan: 1,
    onOpen: onOpen
  }), p[6] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[6],
    col: 4,
    row: 5,
    colSpan: 3,
    rowSpan: 1,
    onOpen: onOpen
  }), p[7] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[7],
    col: 1,
    row: 6,
    colSpan: 6,
    rowSpan: 1,
    onOpen: onOpen
  }), p[8] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[8],
    col: 1,
    row: 7,
    colSpan: 6,
    rowSpan: 1,
    onOpen: onOpen
  }), p[10] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[10],
    col: 1,
    row: 8,
    colSpan: 3,
    rowSpan: 1,
    onOpen: onOpen
  }), p[9] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[9],
    col: 1,
    row: 9,
    colSpan: 3,
    rowSpan: 1,
    onOpen: onOpen
  }), p[11] && /*#__PURE__*/React.createElement(JournalismusItem, {
    photo: p[11],
    col: 4,
    row: 9,
    colSpan: 3,
    rowSpan: 1,
    onOpen: onOpen
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
    isLandscape = _useState8[0],
    setIsLandscape = _useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: item.fullWidth ? "span 3" : item.spanTwo ? "span 2" : item.noSpan ? "span 1" : naturalRatio && isLandscape ? "span 2" : "span 1"
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
      if (naturalRatio) setIsLandscape(e.target.naturalWidth > e.target.naturalHeight);
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
  var _useState9 = useState("portraets"),
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      height: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      padding: "0 5% 90px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top,rgba(12,12,12,0.9) 0%,rgba(12,12,12,0.1) 50%,rgba(12,12,12,0.45) 100%)",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.IMGS.IMG_0074,
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
      marginBottom: "0",
      paddingLeft: "16px"
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
        gridTemplateColumns: "repeat(3,minmax(320px,1fr))",
        gap: "28px",
        alignItems: "start",
        minWidth: "980px"
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
      gridTemplateColumns: "repeat(3,minmax(320px,1fr))",
      gap: "28px",
      alignItems: "start",
      minWidth: "980px"
    }
  }, ITEMS[cat].map(function (item) {
    return /*#__PURE__*/React.createElement(PortfolioItem, {
      key: item.id,
      item: item,
      onOpen: function onOpen(it) {
        return openLb(it, ITEMS[cat]);
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
  var videos = [{
    id: 1,
    title: "Nasamat — Teaser",
    desc: "Dokumentarfilm · 2023",
    thumb: "https://picsum.photos/seed/vid1/800/450",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: 2,
    title: "Arabischer Frühling",
    desc: "Archivmaterial · Kairo 2011",
    thumb: "https://picsum.photos/seed/vid2/800/450",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: 3,
    title: "Porträt im Dialog",
    desc: "Kurzfilm · 2022",
    thumb: "https://picsum.photos/seed/vid3/800/450",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: 4,
    title: "Ramadan in Hannover",
    desc: "Reportage · 2023",
    thumb: "https://picsum.photos/seed/vid4/800/450",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: 5,
    title: "Zwischen den Welten",
    desc: "Dokumentarfilm · 2024",
    thumb: "https://picsum.photos/seed/vid5/800/450",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: 6,
    title: "Stille Orte",
    desc: "Kurzfilm · 2024",
    thumb: "https://picsum.photos/seed/vid6/800/450",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "90px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "40vh",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom,rgba(12,12,12,0.5),rgba(12,12,12,0.8))",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/mmvideo88/1400/800",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(25%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "46px",
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
  }, "Bewegtbild"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(40px,6vw,80px)",
      color: "#f0ece6"
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
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "14px"
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
    }, v.title), /*#__PURE__*/React.createElement("div", {
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
      paddingTop: "90px",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "48vh",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to bottom,rgba(12,12,12,0.5),rgba(12,12,12,0.75))",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/mmabout77/1400/800",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(25%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "46px",
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
  }, "\xDCber mich"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
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
  }, "Mostafa")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "90px 5%"
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
      gridTemplateColumns: "1fr 1.15fr",
      gap: "90px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/mmport55/500/650",
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
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, "Stationen"), [["2011", "Arabischer Frühling · Kairo"], ["2016", "Abitur · Khartum"], ["2016–17", "Sprachvorbereitung · Istanbul & Ankara"], ["2017", "Zug nach Hannover"], ["2020", "Beginn Dokumentarfotografie"], ["2024", "Wohnortwechsel nahe Hannover"]].map(function (_ref8) {
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
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "70px 5% 100px",
      background: "#222222",
      borderTop: "1px solid #181818"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "12px"
    }
  }, "Schwerpunkte"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(28px,3.5vw,44px)",
      color: "#f0ece6",
      marginBottom: "50px"
    }
  }, "Aktuelle Arbeit"), /*#__PURE__*/React.createElement("div", {
    className: "g3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1px",
      background: "#181818"
    }
  }, [["Nasamat", "Religion im Leben europäischer Muslim:innen — eine langfristige Porträt- und Dokumentararbeit."], ["Unternehmensporträts", "Porträts für Unternehmen und Einrichtungen in der Region Hannover."], ["Tagesjournalismus", "Aktuelle Bildberichterstattung für Presse und Medien."]].map(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 2),
      t = _ref1[0],
      tx = _ref1[1];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        background: "#2a2a2a",
        padding: "38px 30px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "24px",
        color: "#f0ece6",
        marginBottom: "14px"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "14px",
        lineHeight: 1.8,
        color: "#555",
        fontWeight: 300
      }
    }, tx));
  })))));
}

/* CONTACT */
function Contact() {
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    sent = _useState16[0],
    setSent = _useState16[1];
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
      maxWidth: "1050px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "10px",
      letterSpacing: "5px",
      textTransform: "uppercase",
      color: "#c9a96e",
      marginBottom: "12px"
    }
  }, "Kontakt"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(38px,5vw,70px)",
      color: "#f0ece6",
      marginBottom: "68px",
      lineHeight: 1.05
    }
  }, "Lass uns", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "zusammenarbeiten")), /*#__PURE__*/React.createElement("div", {
    className: "g2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: "90px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.85,
      color: "#666",
      fontWeight: 300,
      marginBottom: "50px"
    }
  }, "F\xFCr Anfragen zu Auftr\xE4gen, Kooperationen, Ausstellungen oder Ver\xF6ffentlichungen \u2014 schreib mir direkt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "26px"
    }
  }, [{
    icon: "✉",
    label: "E-Mail",
    val: "me@momen-most.com",
    href: "mailto:me@momen-most.com"
  }, {
    icon: "☎",
    label: "Telefon",
    val: "+49 1520 5197646",
    href: "tel:+4915205197646"
  }, {
    icon: "◈",
    label: "Instagram",
    val: "@momen_most",
    href: "https://www.instagram.com/momen_most/"
  }, {
    icon: "◉",
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
  }))), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "52px",
      border: "1px solid #1e1e1e",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "34px",
      color: "#c9a96e",
      marginBottom: "14px"
    }
  }, "Danke!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "#555",
      fontWeight: 300
    }
  }, "Ich melde mich so bald wie m\xF6glich.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Dein Name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "E-Mail-Adresse"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Betreff"
  }), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Deine Nachricht",
    rows: 6,
    style: {
      resize: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: function onClick() {
      return setSent(true);
    }
  }, "Nachricht senden"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "260px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/mmcontact44/1400/600",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(30%) brightness(0.35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: "clamp(18px,4vw,40px)",
      fontWeight: 300,
      color: "rgba(240,236,230,0.3)",
      letterSpacing: "10px",
      textAlign: "center"
    }
  }, "MOMEN MOSTAFA"))));
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
  })), [["Angaben gemäß § 5 TMG", ["Moamen Mostafa", "Himmelsthürerstr. 4", "31147 Hildesheim", "Deutschland"]], ["Kontakt", ["Telefon: +49 1520 5197646", "E-Mail: me@momen-most.com"]], ["Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV", ["Moamen Mostafa", "Himmelsthürerstr. 4, 31147 Hildesheim"]], ["Haftung für Inhalte", ["Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen."]], ["Haftung für Links", ["Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."]], ["Urheberrecht", ["Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Sämtliche Fotos und Texte sind urheberrechtlich geschützt. © Moamen Mostafa"]]].map(function (_ref11) {
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
function App() {
  var _useState17 = useState("home"),
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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);
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
