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
var STYLES = "\n  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Italiana&family=Jost:wght@300;400;500&family=Raleway:wght@100;600&display=swap');\n  *{margin:0;padding:0;box-sizing:border-box;}\n  html{scroll-behavior:smooth;}\n  body{background:#2a2a2a;color:#e8e2d9;font-family:'Jost',sans-serif;overflow-x:hidden;}\n  ::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-track{background:#d6cebd;}::-webkit-scrollbar-thumb{background:#444;}\n  @keyframes fadeUp{from{opacity:0;transform:translateY(26px);}to{opacity:1;transform:translateY(0);}}\n  @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}\n  .fu{animation:fadeUp 0.85s ease both;}\n  .fu2{animation:fadeUp 0.85s 0.18s ease both;}\n  .fu3{animation:fadeUp 0.85s 0.36s ease both;}\n  .nav-a{color:#666053;text-decoration:none;font-size:11px;font-weight:400;letter-spacing:2.5px;text-transform:uppercase;transition:color 0.3s;cursor:pointer;background:none;border:none;font-family:'Jost',sans-serif;}\n  .nav-a:hover{color:#1a160e;}.nav-a.on{color:#1a160e;}\n  .img-wrap{overflow:hidden;position:relative;cursor:pointer;}\n  .img-wrap img{transition:transform 0.7s ease,filter 0.4s ease;display:block;width:100%;height:100%;object-fit:cover;}\n  .img-wrap:hover img{transform:scale(1.05);filter:brightness(0.65);}\n  .img-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.78) 0%,transparent 55%);opacity:0;transition:opacity 0.4s;display:flex;align-items:flex-end;padding:20px;}\n  .img-wrap:hover .static-title{opacity:1;}\n  .static-title{transition:opacity 0.4s;}\n  .cat-btn{color:#857e6c;background:none;border:none;border-bottom:1px solid transparent;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;cursor:pointer;padding:8px 0;transition:all 0.3s;}\n  .cat-btn:hover{color:#e8e2d9;}.cat-btn.on{color:#e8e2d9;border-bottom-color:#c9a96e;}\n  input,textarea{background:transparent;border:none;border-bottom:1px solid #1e1e1e;color:#d6cebd;font-family:'Jost',sans-serif;font-size:14px;padding:12px 0;width:100%;outline:none;transition:border-color 0.3s;font-weight:300;}\n  input::placeholder,textarea::placeholder{color:#3a3a3a;}\n  input:focus,textarea:focus{border-bottom-color:#c9a96e;}\n  .btn-gold{background:none;border:1px solid #c9a96e;color:#c9a96e;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;padding:14px 38px;cursor:pointer;transition:all 0.3s;}\n  .btn-gold:hover{background:#c9a96e;color:#0c0c0c;}\n  .btn-ghost{background:none;border:1px solid #272727;color:#777;font-family:'Jost',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;padding:14px 32px;cursor:pointer;transition:all 0.3s;}\n  .btn-ghost:hover{border-color:#c9a96e;color:#c9a96e;}\n  @media(max-width:768px){\n    .g3{grid-template-columns:1fr 1fr!important;}\n    .g2{grid-template-columns:1fr!important;}\n    .hero-h{font-size:clamp(56px,13vw,110px)!important;}\n    .cats{flex-wrap:wrap;gap:14px!important;}\n    .abt{grid-template-columns:1fr!important;}\n  }\n\nmain > div { min-height: auto !important; }\n@media (max-width: 768px) {\n  nav { padding: 8px 4% !important; }\n  .nav-links { gap: 16px !important; }\n  .nav-a { font-size: 10px !important; letter-spacing: 1.2px !important; }\n  .cats { gap: 14px !important; flex-wrap: wrap !important; }\n  .cat-btn { font-size: 10px !important; letter-spacing: 1.5px !important; }\n  .port-scroll { overflow-x: visible !important; }\n  .port-grid { grid-template-columns: minmax(0, 1fr) !important; min-width: 0 !important; gap: 16px !important; }\n  .port-grid > * { grid-column: span 1 !important; grid-row: auto !important; min-width: 0 !important; max-width: 100% !important; }\n  .g3 { grid-template-columns: minmax(0, 1fr) !important; min-width: 0 !important; gap: 18px !important; }\n  .g3 > * { grid-column: span 1 !important; grid-row: auto !important; min-width: 0 !important; max-width: 100% !important; }\n  .work-intro { padding: 40px 5% !important; }\n  .work-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 22px !important; }\n  .work-figure { display: block !important; grid-column: span 1 !important; grid-template-columns: none !important; min-width: 0 !important; max-width: 100% !important; }\n  .work-figure img { max-height: 70vh !important; max-width: 100% !important; }\n  .work-figure figcaption { margin-top: 12px !important; max-width: none !important; font-size: 12px !important; line-height: 1.5 !important; }\n  .abt { grid-template-columns: 1fr !important; gap: 28px !important; }\n  .abt > div:first-child { max-width: 220px !important; }\n  .port-grid img, .g3 img { max-width: 100% !important; }\n  .g3 img { height: 56vh !important; object-fit: cover !important; }\n  .hero-section { justify-content: center !important; padding-top: 60px !important; }\n  .hero-text { text-align: center !important; }\n  .hero-text .fu > div { margin-left: auto !important; margin-right: auto !important; }\n  nav { position: absolute !important; }\n}\n";
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
    size: "half"
  }, {
    id: 1,
    img: window.IMGS.IMG_0001,
    size: "half"
  }, {
    id: 3,
    img: window.IMGS.IMG_0002,
    size: "half"
  }, {
    id: 5,
    img: window.IMGS.IMG_0004,
    size: "half"
  }, {
    id: 6,
    img: window.IMGS.IMG_0005,
    size: "half"
  }, {
    id: 7,
    img: window.IMGS.IMG_0006,
    size: "half"
  }, {
    id: 8,
    img: window.IMGS.IMG_0007,
    size: "half"
  }, {
    id: 9,
    img: window.IMGS.IMG_0008,
    size: "half"
  }, {
    id: 10,
    img: window.IMGS.IMG_0009,
    size: "half"
  }, {
    id: 11,
    img: window.IMGS.IMG_0010,
    size: "half"
  }, {
    id: 17,
    img: window.IMGS.IMG_0011,
    size: "half"
  }, {
    id: 12,
    img: window.IMGS.IMG_0012,
    size: "half"
  }, {
    id: 16,
    img: window.IMGS.IMG_0013,
    size: "half"
  }, {
    id: 15,
    img: window.IMGS.IMG_0014,
    size: "half"
  }, {
    id: 20,
    img: window.IMGS.IMG_0015,
    size: "half"
  }, {
    id: 19,
    img: window.IMGS.IMG_0016,
    size: "half",
    breakAfter: true
  }, {
    id: 601,
    img: window.IMGS.akademie_01,
    size: "half"
  }, {
    id: 602,
    img: window.IMGS.akademie_02,
    size: "half"
  }, {
    id: 603,
    img: window.IMGS.akademie_03,
    size: "half"
  }, {
    id: 604,
    img: window.IMGS.akademie_04,
    size: "half"
  }, {
    id: 605,
    img: window.IMGS.akademie_05,
    size: "half"
  }, {
    id: 606,
    img: window.IMGS.akademie_06,
    size: "half"
  }, {
    id: 607,
    img: window.IMGS.akademie_07,
    size: "half",
    breakAfter: true
  }, {
    id: 701,
    img: window.IMGS.pfingst_01,
    size: "half"
  }, {
    id: 703,
    img: window.IMGS.pfingst_03,
    size: "half"
  }, {
    id: 704,
    img: window.IMGS.pfingst_04,
    size: "half"
  }, {
    id: 706,
    img: window.IMGS.pfingst_06,
    size: "half"
  }, {
    id: 707,
    img: window.IMGS.pfingst_07,
    size: "half"
  }, {
    id: 708,
    img: window.IMGS.pfingst_08,
    size: "half"
  }, {
    id: 709,
    img: window.IMGS.pfingst_09,
    size: "half"
  }, {
    id: 710,
    img: window.IMGS.pfingst_10,
    size: "half"
  }]
}, {
  client: "Madsack Verlags- und Redaktionsgesellschaft",
  images: [{
    id: 501,
    img: window.IMGS.madsack_01,
    size: "half"
  }, {
    id: 502,
    img: window.IMGS.madsack_02,
    size: "half"
  }, {
    id: 503,
    img: window.IMGS.madsack_03,
    size: "half"
  }, {
    id: 504,
    img: window.IMGS.madsack_04,
    size: "half"
  }, {
    id: 505,
    img: window.IMGS.madsack_05,
    size: "half"
  }, {
    id: 506,
    img: window.IMGS.madsack_06,
    size: "half"
  }, {
    id: 507,
    img: window.IMGS.madsack_07,
    size: "half"
  }, {
    id: 508,
    img: window.IMGS.madsack_08,
    size: "half"
  }, {
    id: 509,
    img: window.IMGS.madsack_09,
    size: "half"
  }]
}, {
  client: "Kunstverein Hannover",
  images: [{
    id: 38,
    img: window.IMGS.IMG_0029,
    size: "full",
    breakAfter: true
  }, {
    id: 34,
    size: "full",
    img: window.IMGS.IMG_0033,
    size: "half"
  }, {
    id: 35,
    size: "full",
    img: window.IMGS.IMG_0032,
    size: "half"
  }, {
    id: 36,
    size: "full",
    img: window.IMGS.IMG_0031,
    size: "half"
  }, {
    id: 37,
    size: "full",
    img: window.IMGS.IMG_0034,
    size: "half"
  }]
}, {
  client: "Farouk",
  images: [{
    id: 801,
    img: window.IMGS.farouk_01,
    size: "two-thirds",
    align: "center"
  }, {
    id: 804,
    img: window.IMGS.farouk_04,
    size: "third",
    align: "left"
  }, {
    id: 805,
    img: window.IMGS.farouk_05,
    size: "third",
    align: "right"
  }, {
    id: 806,
    img: window.IMGS.farouk_06,
    size: "full"
  }, {
    id: 807,
    img: window.IMGS.farouk_07,
    size: "full"
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
    imgPosition: "78% center",
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
    imgPosition: "70% center",
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
    id: 250,
    title: "",
    desc: "",
    caption: "Sandra Quadflieg, Maschseefest in Hannover, 2026.",
    img: window.IMGS.entenrennen_01,
    size: "two-thirds"
  }, {
    id: 201,
    title: "",
    desc: "",
    caption: "Osan Yaran im Theater Am Aegi in Hannover, 2026.",
    img: window.IMGS.osanYaran,
    size: "two-thirds",
    align: "center"
  }, {
    id: 45,
    title: "",
    desc: "",
    caption: "Valeriia Sydorova, eine ehemalige von Russland verschleppte Gefangene, spricht im niedersächsischen Landtag, 2026.",
    img: window.IMGS.IMG_0046,
    size: "half"
  }, {
    id: 47,
    title: "",
    desc: "",
    caption: "Belit Onay, Oberbürgermeister der Landeshauptstadt Hannover im Sprengel Museum, 2026.",
    img: window.IMGS.sprengelMuseum,
    size: "half"
  }, {
    id: 202,
    title: "",
    desc: "",
    caption: "Eliot im Kunsthaus, 2026",
    img: window.IMGS.eliotKunsthaus,
    size: "half"
  }, {
    id: 203,
    title: "",
    desc: "",
    caption: "CDU-Regionsparteitag in Burgdorf, 2026.",
    img: window.IMGS.cduParteitag,
    size: "half"
  }, {
    id: 48,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0049,
    size: "two-thirds"
  }, {
    id: 100,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.biogas,
    size: "two-thirds",
    align: "right"
  }, {
    id: 204,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.feuerwehr,
    size: "two-thirds"
  }, {
    id: 205,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.nachtengel,
    size: "full"
  }, {
    id: 43,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0051,
    size: "full"
  }, {
    id: 206,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.kranfuehrer,
    size: "two-thirds",
    align: "center"
  }, {
    id: 44,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0052,
    size: "full"
  }, {
    id: 46,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0053,
    size: "full"
  }, {
    id: 42,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0055,
    size: "half",
    tall: true
  }, {
    id: 41,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0054,
    size: "half"
  }, {
    id: 40,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
    img: window.IMGS.IMG_0050,
    size: "half"
  }, {
    id: 99,
    title: "",
    desc: "",
    caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
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
  var touchStartX = useRef(0);
  var touchStartY = useRef(0);
  var lockDir = useRef(null);
  var dragXRef = useRef(0);
  var dragYRef = useRef(0);
  var _drag = useState(0);
  var dragX = _drag[0], setDragX = _drag[1];
  var _dragV = useState(0);
  var dragY = _dragV[0], setDragY = _dragV[1];
  var _dragging = useState(false);
  var dragging = _dragging[0], setDragging = _dragging[1];
  var onTouchStart = function (e) {
    var t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    lockDir.current = null;
    dragXRef.current = 0;
    dragYRef.current = 0;
    setDragging(true);
  };
  var onTouchMove = function (e) {
    var t = e.touches[0];
    var dx = t.clientX - touchStartX.current;
    var dy = t.clientY - touchStartY.current;
    if (lockDir.current === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      lockDir.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
    }
    if (lockDir.current === "h") {
      var atStart = cur === 0 && dx > 0;
      var atEnd = cur === items.length - 1 && dx < 0;
      if (atStart || atEnd) dx = dx * 0.32;
      dragXRef.current = dx;
      setDragX(dx);
    } else if (lockDir.current === "v") {
      dragYRef.current = dy;
      setDragY(dy);
    }
  };
  var onTouchEnd = function () {
    var dx = dragXRef.current;
    var dy = dragYRef.current;
    setDragging(false);
    if (lockDir.current === "v" && Math.abs(dy) > 90) {
      onClose();
      return;
    }
    if (lockDir.current === "h" && Math.abs(dx) > 55) {
      if (dx < 0 && cur < items.length - 1) setCur(cur + 1);
      else if (dx > 0 && cur > 0) setCur(cur - 1);
    }
    dragXRef.current = 0;
    dragYRef.current = 0;
    setDragX(0);
    setDragY(0);
    lockDir.current = null;
  };
  // Preload neighbours for smoother swaps
  useEffect(function () {
    [cur - 1, cur + 1].forEach(function (i) {
      if (i >= 0 && i < items.length) {
        var im = new Image();
        im.src = items[i].img;
      }
    });
  }, [cur]);
  // Lock background scroll while lightbox is open
  var curRef = useRef(cur);
  curRef.current = cur;
  useEffect(function () {
    var scrollY = window.scrollY;
    var body = document.body;
    var prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow
    };
    body.style.position = "fixed";
    body.style.top = "-" + scrollY + "px";
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return function () {
      // Determine where to land: the grid image matching the last-viewed photo.
      var target = scrollY;
      try {
        var im = items[curRef.current];
        if (im && im.img) {
          var match = null;
          var imgs = document.querySelectorAll("img");
          for (var k = 0; k < imgs.length; k++) {
            if (imgs[k].src === im.img) { match = imgs[k]; break; }
          }
          if (match) {
            var rect = match.getBoundingClientRect();
            var absY = rect.top + scrollY;
            target = absY - window.innerHeight / 2 + rect.height / 2;
          }
        }
      } catch (e) {}
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      var maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      var docEl = document.documentElement;
      var prevBehavior = docEl.style.scrollBehavior;
      docEl.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, Math.min(target, maxY)));
      docEl.style.scrollBehavior = prevBehavior;
    };
  }, []);
  var viewportRef = useRef(null);
  var _vw = useState(0);
  var vw = _vw[0], setVw = _vw[1];
  useEffect(function () {
    var measure = function () {
      if (viewportRef.current) setVw(viewportRef.current.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return function () { window.removeEventListener("resize", measure); };
  }, []);
  var it = items[cur];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0," + (0.8 - Math.min(Math.abs(dragY) / 400, 0.55)) + ")",
      zIndex: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "62px 0 24px",
      animation: "fadeIn 0.25s ease",
      cursor: "zoom-out",
      touchAction: "none",
      overscrollBehavior: "contain"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 24,
      zIndex: 10,
      background: "none",
      border: "none",
      color: "#a89e8a",
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
      color: "#a89e8a",
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
      color: "#a89e8a",
      fontSize: "32px",
      cursor: "pointer"
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "800px",
      width: "88%",
      transform: "translateY(" + dragY + "px)",
      opacity: 1 - Math.min(Math.abs(dragY) / 600, 0.5),
      transition: dragging ? "none" : "transform 0.32s cubic-bezier(.22,.61,.36,1), opacity 0.32s ease",
      willChange: "transform"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: viewportRef,
    style: {
      width: "100%",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      transform: "translateX(" + (vw ? -cur * (vw + 18) + dragX : 0) + "px)",
      transition: dragging ? "none" : "transform 0.32s cubic-bezier(.22,.61,.36,1)",
      willChange: "transform"
    }
  }, items.map(function (slide, si) {
    return /*#__PURE__*/React.createElement("div", {
      key: si,
      style: {
        flex: vw ? "0 0 " + vw + "px" : "0 0 100%",
        width: vw ? vw + "px" : "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: slide.img,
      alt: slide.title,
      draggable: false,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        maxWidth: "100%",
        maxHeight: "72vh",
        objectFit: "contain",
        display: "block",
        userSelect: "none"
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
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
      color: "#888"
    }
  }, cur + 1, " / ", items.length))));
}
function useIsMobile() {
  var _s = useState(typeof window !== "undefined" && window.innerWidth < 768);
  var m = _s[0], setM = _s[1];
  useEffect(function () {
    var h = function () { setM(window.innerWidth < 768); };
    window.addEventListener("resize", h);
    return function () { window.removeEventListener("resize", h); };
  }, []);
  return m;
}
function Caption(_refC) {
  var text = _refC.text, baseStyle = _refC.baseStyle;
  var mobile = useIsMobile();
  var _e = useState(false);
  var exp = _e[0], setExp = _e[1];
  if (!mobile) {
    return /*#__PURE__*/React.createElement("div", { style: baseStyle, "data-mmtext": "1" }, text);
  }
  var btnStyle = {
    background: "none", border: "none", color: "#c9a96e",
    fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase",
    cursor: "pointer", padding: 0, fontFamily: "inherit",
    whiteSpace: "nowrap", flexShrink: 0, lineHeight: "inherit"
  };
  if (!exp) {
    var rowStyle = Object.assign({}, baseStyle, {
      display: "flex", alignItems: "baseline", gap: "8px"
    });
    return /*#__PURE__*/React.createElement("div", { style: rowStyle },
      /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1, minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, text),
      /*#__PURE__*/React.createElement("button", {
        onClick: function (e) { e.stopPropagation(); setExp(true); },
        style: btnStyle
      }, "Mehr")
    );
  }
  return /*#__PURE__*/React.createElement("div", { style: baseStyle },
    /*#__PURE__*/React.createElement("span", { style: { display: "block" } }, text),
    /*#__PURE__*/React.createElement("button", {
      onClick: function (e) { e.stopPropagation(); setExp(false); },
      style: Object.assign({}, btnStyle, { display: "block", padding: "6px 0 0" })
    }, "Weniger")
  );
}
function Nav(_ref2) {
  var page = _ref2.page,
    setPage = _ref2.setPage,
    scrollY = _ref2.scrollY,
    hidden = _ref2.hidden;
  var mobile = useIsMobile();
  var _o = useState(false);
  var open = _o[0], setOpen = _o[1];
  var solid = scrollY > 60 || page !== "home";
  var goPortfolio = function goPortfolio() {
    setOpen(false);
    if (page !== "home") {
      setPage("home");
      setTimeout(function () {
        var el = document.getElementById("gallery");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      var el2 = document.getElementById("gallery");
      if (el2) el2.scrollIntoView({ behavior: "smooth" });
    }
  };
  var go = function (p) { setOpen(false); setPage(p); };
  var navBtns = [
    { key: "home",    label: "Home",     active: page === "home",    fn: function () { go("home"); } },
    { key: "portfolio", label: "Portfolio", active: false,            fn: goPortfolio },
    { key: "videos",  label: "Videos",   active: page === "videos",  fn: function () { go("videos"); } },
    { key: "about",   label: "\xDCber mich", active: page === "about",   fn: function () { go("about"); } },
    { key: "contact", label: "Kontakt",  active: page === "contact", fn: function () { go("contact"); } }
  ];
  return /*#__PURE__*/React.createElement(React.Fragment, null,
    /*#__PURE__*/React.createElement("nav", {
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
    },
      !mobile && /*#__PURE__*/React.createElement("div", {
        className: "nav-links",
        style: { display: "flex", gap: "36px", alignItems: "center" }
      }, navBtns.map(function (b) {
        return /*#__PURE__*/React.createElement("button", {
          key: b.key,
          className: "nav-a" + (b.active ? " on" : ""),
          onClick: b.fn
        }, b.label);
      })),
      mobile && /*#__PURE__*/React.createElement("button", {
        "aria-label": "Menu",
        onClick: function () { setOpen(true); },
        style: {
          background: "none", border: "none", cursor: "pointer",
          padding: "10px 4px", display: "flex", flexDirection: "column",
          gap: "5px", alignItems: "flex-end",
          position: "absolute", top: "48px", right: "5%"
        }
      },
        /*#__PURE__*/React.createElement("span", { style: { width: "28px", height: "2px", background: "#252118", display: "block" } }),
        /*#__PURE__*/React.createElement("span", { style: { width: "28px", height: "2px", background: "#252118", display: "block" } }),
        /*#__PURE__*/React.createElement("span", { style: { width: "28px", height: "2px", background: "#252118", display: "block" } })
      )
    ),
    mobile && /*#__PURE__*/React.createElement("div", {
      onClick: function () { setOpen(false); },
      style: {
        position: "fixed", inset: 0, zIndex: 380,
        background: "rgba(0,0,0,0.5)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.3s ease"
      }
    }),
    mobile && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(50vw, 260px)",
        zIndex: 400,
        background: "rgba(14,14,14,0.98)",
        backdropFilter: "blur(10px)",
        borderLeft: "1px solid #1c1c1c",
        boxShadow: "-10px 0 40px rgba(0,0,0,0.45)",
        display: "flex", flexDirection: "column",
        alignItems: "flex-start", justifyContent: "flex-start",
        padding: "70px 28px 28px",
        gap: "8px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.32s cubic-bezier(.22,.61,.36,1)"
      }
    },
      /*#__PURE__*/React.createElement("button", {
        onClick: function (e) { e.stopPropagation(); setOpen(false); },
        style: {
          position: "absolute", top: "16px", right: "20px",
          background: "none", border: "none", color: "#252118",
          fontSize: "30px", cursor: "pointer", lineHeight: 1, padding: "6px"
        }
      }, "\xD7"),
      navBtns.map(function (b) {
        return /*#__PURE__*/React.createElement("button", {
          key: b.key,
          onClick: function (e) { e.stopPropagation(); b.fn(); },
          style: {
            background: "none", border: "none", cursor: "pointer",
            color: b.active ? "#1a160e" : "#666053",
            fontFamily: "'Cormorant Garamond',serif",
            fontWeight: 300,
            fontSize: "22px",
            letterSpacing: "2px",
            padding: "12px 0",
            textAlign: "left",
            width: "100%",
            borderBottom: "1px solid #181818"
          }
        }, b.label);
      })
    )
  );
}
var WORKS = {
  "delivery": {
    title: "Delivery Service",
    label: "Fotoreportage",
    intro: "Platzhalter für den Einleitungstext. Hier kommt der erzählende Einstieg in die Serie: worum geht es, wo wurde fotografiert, was hat das Projekt motiviert. Zwei bis vier Sätze, die einstimmen, bevor die Bilder für sich sprechen.",
    images: [{
      src: window.IMGS.delivery_01,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half",
      position: "center 80%",
      mobilePosition: "58% 68%"
    }, {
      src: window.IMGS.delivery_02,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_03,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_04,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_05,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_06,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_07,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_08,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_09,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_10,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_11,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_12,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_13,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_14,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_15,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_16,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.delivery_17,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }]
  },
  "healing": {
    title: "Healing Diary",
    label: "Fotostrecke",
    intro: "During my stay in Dhaka between Juli and November 2022, I got infected with the virus „pink eyes“ and the deadly „dengue fever“.",
    images: [{
      src: window.IMGS.healing_01,
      caption: "",
      size: "half",
      position: "center 35%"
    }, {
      src: window.IMGS.healing_02,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_03,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_04,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_05,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_06,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_07,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_08,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_09,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_10,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_11,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_12,
      caption: "",
      size: "half"
    }, {
      src: window.IMGS.healing_13,
      caption: "",
      size: "half"
    }]
  },
  "islamic": {
    title: "Islamic Feminism",
    label: "Porträtserie",
    captionLayout: "side",
    intro: "Islam in Europe is been seeing by critics as an misogynistic religion. Nevertheless woman are finding their way to Islam.\n\nThe following narratives tell stories of women who identify with Islam as a religion and see themselves as emancipated. Muslim women activists, academics, businesswomen, housewives, professors and students from across Europe talk about different political and social issues related to their different identities. They say that their different parts of identity play different roles in different situations.",
    images: [{
      src: window.IMGS.islamic_01,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full",
      position: "center 25%"
    }, {
      src: window.IMGS.islamic_02,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_03,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_04,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_05,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_06,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_07,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_08,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_09,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_10,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_11,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_12,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_13,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_14,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_15,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }, {
      src: window.IMGS.islamic_16,
      caption: "Platzhalter für die Bildunterschrift. An dieser Stelle stehen Hintergrundinformationen zum Porträt: Name, Alter, Stadt, persönlicher Bezug zur Religion. Zwei bis drei kurze Absätze, die das Bild kontextualisieren ohne es zu erklären. Hier ist Platz für ein Zitat, eine Beobachtung oder einen biografischen Hinweis aus dem Gespräch.",
      size: "full"
    }]
  },
  "shaped": {
    title: "Shaped to Resist",
    label: "Dokumentarserie",
    intro: "In this work, people who lost their relatives during the 2022 flood in Sunamganj in north Bangladesh talk about how losing their family members had effects on them and how their lives are still being shaped by this experience until its end.\n\nIt is neither the floods nor the resulted material damage and disruption to public life in the affected areas that stands at the center of interest. Instead, the focus lies on individuals who reflect on their visions of the future in relation to past experiences of personal loss.\n\nThe visual approach seeks to express the assertion that a fundamental change in perspective remains unattainable, with only the attempt being possible.",
    images: [{
      src: window.IMGS.shaped_19,
      caption: "",
      size: "full",
      position: "center 55%"
    }, {
      src: window.IMGS.shaped_01,
      caption: "Nahim Diplob Mia, Tanias Brother & Sell man, Chhatak, Sunamganj.",
      size: "full",
      align: "center"
    }, {
      src: window.IMGS.shaped_02,
      caption: "",
      sideText: "At this point in the valley on the border with India, the rain pours into the border strip in Bangladesh and then into the surrounding villages. Authorities say the rain washes chemicals from mines on the Indian side and pollutes fertile agricultural land in the border strip. In this border area, people live in huts and keep moving to the higher areas of the South West Khasi Hills closer to the border with India to escape the increasing amount of water that collects in the border strip during the flood season.",
      nudge: { x: 106, y: -11 },
      textNudge: { x: -30, y: 91 },
      size: "full",
      align: "left"
    }, {
      src: window.IMGS.shaped_03,
      caption: "Musamurubna Begum, Diplob Mia‘s wife and mother of Tania and 3 more children, Tahirpur, Sunamganj.",
      nudge: { x: 106, y: 18 },
      size: "half",
      align: "left"
    }, {
      src: window.IMGS.shaped_04,
      caption: "The playground where Tania‘s father was hit by relief goods.",
      sideText: "flooding at that time. When it was flooding, I was at my grandfather's home. When the accident happened, it was time of Asr. I did not hear then. There was no electricity at that time. It was night when I heard the news. At that time, my elder brother called my uncle. When relief goods fell on my father, he became unconscious then no one picked him up. Then one of the uncles of my home along with some other people took my Dad to the hospital. After keeping him at the hospital the whole night he died about 5 minutes after taking him to Sylhet Usmani the next morning. This is the situation of surviving in the flood. No one has asked about how we are surviving since my father died\".\nTania",
      nudge: { x: 106, y: 0 },
      size: "full",
      align: "left"
    }, {
      src: window.IMGS.shaped_05,
      caption: "Tanja Diplob Mia, pupil at Tahirpur Girls‘ School.",
      sideText: "„Me when my father died, there have been some problems in my legs. Then I could not go to school and my hope was to be a teacher. My brother hopes to get a job in the air force. The helicopter that brought relief goods my father lost his life that’s why he said that it would be good if he could get a job in the air force“.\nTania",
      nudge: { x: -20, y: 5 },
      size: "full"
    }, {
      src: window.IMGS.shaped_06,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      nudge: { x: -9, y: 0 },
      size: "half"
    }, {
      src: window.IMGS.shaped_07,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      nudge: { x: -20, y: 0 },
      size: "half"
    }, {
      src: window.IMGS.shaped_08,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      nudge: { x: -9, y: 429 },
      size: "full"
    }, {
      src: window.IMGS.shaped_09,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "full"
    }, {
      src: window.IMGS.shaped_11,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "full"
    }, {
      src: window.IMGS.shaped_10,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "full"
    }, {
      src: window.IMGS.shaped_12,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.shaped_13,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.shaped_14,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.shaped_15,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.shaped_16,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.shaped_17,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }, {
      src: window.IMGS.shaped_18,
      caption: "Platzhalter für die Bildunterschrift. Kurze Beschreibung von Ort, Person oder Moment.",
      size: "half"
    }]
  }
};
function WorkDetail(_ref3) {
  var workKey = _ref3.workKey,
    setPage = _ref3.setPage;
  var work = WORKS[workKey];
  if (!work) return null;
  var mobile = useIsMobile();
  var _useStateLb = useState(null);
  var lb = _useStateLb[0];
  var setLb = _useStateLb[1];
  var lbItems = work.images.map(function (im, i) { return { id: i, img: im.src, title: work.title, desc: im.caption || "" }; });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
    onClick: function () { setLb(lbItems[0]); },
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: (mobile && work.images[0].mobilePosition) || work.images[0].position || "center center",
      filter: "grayscale(15%)",
      cursor: "pointer"
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
      fontFamily: "'Italiana',serif",
      fontWeight: 400,
      fontSize: "clamp(44px,7vw,90px)",
      color: "#f0ece6",
      lineHeight: 1.05,
      letterSpacing: "0.5px"
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
      color: "#a89e8a",
      fontFamily: "'Jost',sans-serif",
      fontSize: "11px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, "← Zurück")), work.images[0] && work.images[0].caption && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 5% 0",
      maxWidth: "1300px",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Caption, {
    text: work.images[0].caption,
    baseStyle: {
      fontSize: "11px",
      color: "#666",
      letterSpacing: "0.3px",
      fontFamily: "'Jost',sans-serif",
      fontWeight: 300,
      lineHeight: 1.5
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "work-intro",
    style: {
      padding: "80px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1300px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 2,
      color: "#a89e8a",
      fontWeight: 300,
      fontFamily: "'Jost',sans-serif",
      whiteSpace: "pre-line",
      maxWidth: "920px",
      margin: 0
    }
  }, work.intro))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 5% 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "work-grid",
    style: {
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
      gridAutoFlow: "row",
      gap: "32px 18px"
    }
  }, work.images.slice(1).map(function (im, i) {
    var side = work.captionLayout === "side" || !!im.sideText;
    return /*#__PURE__*/React.createElement("figure", {
      key: i,
      className: "work-figure",
      style: {
        gridColumn: im.offset ? (im.offset + 1) + " / span " + spanOf(im.size || "half") : "span " + spanOf(im.size || "half"),
        margin: 0,
        display: side ? "grid" : "block",
        gridTemplateColumns: side ? "minmax(0,1.7fr) minmax(220px,1fr)" : "none",
        gap: side ? (im.sideText ? "20px" : "36px") : "0",
        alignItems: side ? "center" : "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "data-mmwrap": "1",
      style: {
        display: side ? "block" : "table",
        maxWidth: "100%",
        marginLeft: side ? "0" : im.align === "left" ? "0" : "auto",
        marginRight: side ? "0" : "auto",
        textAlign: "left",
        width: side ? "auto" : "auto",
        marginTop: im.nudge && im.nudge.y > 0 ? im.nudge.y + "px" : undefined,
        transform: im.nudge ? "translate(" + im.nudge.x + "px," + (im.nudge.y > 0 ? 0 : im.nudge.y) + "px)" : im.shift ? "translateX(" + im.shift + ")" : "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: im.src,
      alt: im.caption || "",
      onClick: function () { setLb(lbItems[i + 1]); },
      style: {
        maxWidth: "100%",
        maxHeight: "85vh",
        width: "auto",
        height: "auto",
        display: "block",
        filter: "grayscale(8%)",
        cursor: "pointer"
      }
    }), im.caption && /*#__PURE__*/React.createElement(Caption, {
      text: im.caption,
      baseStyle: {
        fontSize: "11px",
        color: "#666",
        letterSpacing: "0.3px",
        marginTop: "10px",
        fontFamily: "'Jost',sans-serif",
        fontWeight: 300,
        lineHeight: 1.5
      }
    })), side && im.sideText && /*#__PURE__*/React.createElement(Caption, {
      text: im.sideText,
      baseStyle: {
        fontSize: "13px",
        color: "#888",
        letterSpacing: "0.3px",
        marginTop: "0",
        fontFamily: "'Jost',sans-serif",
        fontWeight: 300,
        lineHeight: 1.75,
        maxWidth: im.sideText ? "48ch" : "32ch",
        transform: im.textNudge ? "translate(" + im.textNudge.x + "px," + im.textNudge.y + "px)" : "none"
      }
    }));
  })))), lb && /*#__PURE__*/React.createElement(Lightbox, { item: lb, items: lbItems, onClose: function () { setLb(null); } }));
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
      gridRow: photo.tall ? "span 2" : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
  })), photo.caption && /*#__PURE__*/React.createElement(Caption, {
    text: photo.caption,
    baseStyle: {
      fontSize: "11px",
      color: "#a89e8a",
      letterSpacing: "0.5px",
      marginTop: "10px",
      fontFamily: "'Jost',sans-serif",
      fontWeight: 300,
      lineHeight: 1.5
    }
  }));
}
function JournalismusLayout(_ref5) {
  var items = _ref5.items,
    onOpen = _ref5.onOpen;
  return /*#__PURE__*/React.createElement("div", {
    className: "port-scroll",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "port-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
      gridAutoRows: "auto",
      gridAutoFlow: "row",
      gap: "12px",
      minWidth: "900px",
      alignItems: "start"
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
      gridColumn: item.align === "center"
        ? ((6 - spanOf(effectiveSize(item.size, isPortrait))) / 2 + 1) + " / span " + spanOf(effectiveSize(item.size, isPortrait))
        : item.align === "right"
        ? "span " + spanOf(effectiveSize(item.size, isPortrait)) + " / -1"
        : "span " + spanOf(effectiveSize(item.size, isPortrait))
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
      height: naturalRatio ? "auto" : (fixedHeight || "auto"),
      display: "block",
      objectFit: naturalRatio ? undefined : "cover",
      objectPosition: item.imgPosition || "center 30%",
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
  useEffect(function () {
    try { localStorage.setItem("mm.cat", cat); } catch (e) {}
  }, [cat]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "hero-section",
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
    className: "hero-text",
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
      color: "#a89e8a",
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
  }, "Fotograf · Hannover"))), /*#__PURE__*/React.createElement("section", {
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
      borderBottom: "1px solid #181818",
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
  }) : cat === "portraets" ? /*#__PURE__*/React.createElement("div", null, ASSIGNMENTS.filter(function (group) {
    return !group.hidden;
  }).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "40vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "60px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      marginBottom: "22px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(28px,4vw,44px)",
      color: "#f0ece6",
      letterSpacing: "1px"
    }
  }, "Coming soon")) : ASSIGNMENTS.filter(function (group) {
    return !group.hidden;
  }).map(function (group, gi) {
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
        color: "#a59b87",
        marginBottom: "28px",
        borderBottom: "1px solid #181818",
        paddingBottom: "14px",
        fontFamily: "'Jost',sans-serif"
      }
    }, group.client), /*#__PURE__*/React.createElement("div", {
      className: "port-scroll",
      style: {
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "port-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6,minmax(140px,1fr))",
        gridAutoFlow: "row",
        gap: "28px",
        alignItems: "start",
        minWidth: "900px"
      }
    }, group.images.map(function (item) {
      return [/*#__PURE__*/React.createElement(PortfolioItem, {
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
      }), item.breakAfter ? /*#__PURE__*/React.createElement("div", {
        key: "brk-" + item.id,
        style: {
          gridColumn: "1 / -1",
          height: "1px",
          background: "#1e1e1e",
          margin: "18px 0 26px"
        }
      }) : null];
    }))));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "port-scroll",
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g3 port-grid",
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
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "110px 5% 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "30px",
      height: "1px",
      background: "#c9a96e",
      marginBottom: "26px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cormorant Garamond',serif",
      fontWeight: 300,
      fontSize: "clamp(24px,2.6vw,34px)",
      letterSpacing: "0.5px",
      color: "#e8e2d9",
      marginBottom: "26px"
    }
  }, "Fotograf in Hannover"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "26px 50px",
      maxWidth: "1000px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Jost',sans-serif",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: 1.85,
      color: "#a59b87",
      textWrap: "pretty"
    }
  }, "Ich fotografiere Veranstaltungen und Events, Kongresse und Messen \u2013 in Hannover, in Niedersachsen und deutschlandweit. Aus dem Fotojournalismus kommend, arbeite ich beobachtend statt inszenierend: Bilder, die den Abend erz\u00e4hlen, statt gestellter Gruppenaufnahmen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Jost',sans-serif",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: 1.85,
      color: "#a59b87",
      textWrap: "pretty"
    }
  }, "Dazu Portr\u00e4ts f\u00fcr Presse, Unternehmen und Bewerbung, Reportagen aus Betrieben sowie Immobilien- und Architekturfotografie. Anfragen gern \u00fcber die Kontaktseite \u2013 ich melde mich in der Regel am selben Tag zur\u00fcck.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Jost',sans-serif",
      fontWeight: 300,
      fontSize: "12px",
      letterSpacing: "0.4px",
      lineHeight: 1.9,
      color: "#857e6c",
      marginTop: "34px",
      maxWidth: "1000px"
    }
  }, "Eventfotografie \u00b7 Veranstaltungsfotografie \u00b7 Portr\u00e4tfotografie \u00b7 Business- und Bewerbungsfotos \u00b7 Messefotografie \u00b7 Kongresse und Konferenzen \u00b7 Immobilienfotografie \u00b7 Architekturfotografie \u00b7 Unternehmensfotografie \u00b7 Presse- und Reportagefotografie \u00b7 Konzert- und Theaterfotografie \u00b7 Video")), lb && /*#__PURE__*/React.createElement(Lightbox, {
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
      color: "#a89e8a",
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
        color: "#d6cebd",
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
      color: "#a89e8a",
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
      padding: "0 5% 40px"
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
      color: "#a89e8a",
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
      color: "#a89e8a",
      marginBottom: "22px",
      fontWeight: 300
    }
  }, "Moamen Mostafa lebt seit 2017 in Deutschland. Seit 2020 ist er als Dokumentarfotograf t\xE4tig. Aktuell untersucht er mittels Portr\xE4t- und Dokumentarfotografie die Gewichtung, die Religion im Leben von in Europa lebenden Muslim:innen in sozialer, famili\xE4rer und religi\xF6ser Hinsicht einnimmt."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.9,
      color: "#a89e8a",
      fontWeight: 300
    }
  }, "Momen Mostafa fotografierte erst als Amateur den Arabischen Fr\xFChling in Kairo. Nach seinem Abitur in Khartum 2016 lebte er zwischen Istanbul und Ankara bevor er Fotojournalismus und Dokumentarfotografie in Hannover studierte, wo er Ende 2017 hinzog. Seit Ende 2024 lebt er in Hannover und sucht mit seiner Fotografie nach Verst\xE4ndnisbr\xFCcken zwischen Religion und S\xE4kularit\xE4t."), /*#__PURE__*/React.createElement("div", {
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
      color: "#a59b87",
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
        color: "#a89e8a",
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
      color: "#a89e8a",
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
        color: "#888",
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
      color: "#a89e8a",
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
          color: "#a89e8a",
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
      color: "#a89e8a",
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
      color: "#d6cebd",
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
  "work-islamic": "/arbeit/islamic",
  "work-shaped": "/arbeit/shaped"
};
var PATH_TO_PAGE = {
  "/": "home",
  "/ueber-mich": "about",
  "/videos": "videos",
  "/kontakt": "contact",
  "/impressum": "impressum",
  "/arbeit/delivery": "work-delivery",
  "/arbeit/healing": "work-healing",
  "/arbeit/islamic": "work-islamic",
  "/arbeit/shaped": "work-shaped"
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
    var isDev = !/momen-most\.com$/i.test(window.location.hostname);
    if (!isDev) return;
    var PREFIX = {
      home: "H",
      about: "UM",
      videos: "V",
      contact: "K",
      impressum: "IMP",
      "work-delivery": "DEL",
      "work-healing": "HEAL",
      "work-islamic": "ISL",
      "work-shaped": "STR"
    };
    var pre = PREFIX[page] || "X";
    var DK = "mm-drag";
    var readOff = function readOff() {
      try { return JSON.parse(localStorage.getItem(DK) || "{}"); } catch (e) { return {}; }
    };
    var writeOff = function writeOff(o) {
      try { localStorage.setItem(DK, JSON.stringify(o)); } catch (e) {}
    };
    var dragOn = false;
    var bar = document.createElement("div");
    bar.id = "mm-bar";
    bar.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:9999;display:flex;gap:8px;font:600 12px/1 'Jost',sans-serif";
    var btn = document.createElement("button");
    var btn2 = document.createElement("button");
    var bs = "color:#fff;border:none;padding:9px 13px;border-radius:4px;cursor:pointer;font:inherit;letter-spacing:.5px";
    btn.style.cssText = bs + ";background:#c0392b";
    btn2.style.cssText = bs + ";background:#444";
    btn.textContent = "Verschieben: AUS";
    btn2.textContent = "Zurücksetzen";
    bar.appendChild(btn); bar.appendChild(btn2);
    document.body.appendChild(bar);
    var applyOff = function applyOff() {
      var off = readOff();
      document.querySelectorAll("[data-mmkey]").forEach(function (im) {
        var o = off[im.getAttribute("data-mmkey")];
        var t = (im.closest && im.closest("[data-mmwrap]")) || im;
        if (o) { t.style.marginTop = o.y > 0 ? o.y + "px" : ""; t.style.transform = "translate(" + o.x + "px," + (o.y > 0 ? 0 : o.y) + "px)"; }
      });
    };
    btn.onclick = function () {
      dragOn = !dragOn;
      btn.textContent = "Verschieben: " + (dragOn ? "AN" : "AUS");
      btn.style.background = dragOn ? "#27ae60" : "#c0392b";
      document.querySelectorAll("img[data-mmkey]").forEach(function (im) {
        im.style.cursor = dragOn ? "move" : "";
        im.style.outline = dragOn ? "2px dashed rgba(192,57,43,.6)" : "";
      });
      document.querySelectorAll("[data-mmtext]").forEach(function (t) {
        t.style.cursor = dragOn ? "move" : "";
        t.style.outline = dragOn ? "2px dashed rgba(41,128,185,.7)" : "";
      });
    };
    btn2.onclick = function () {
      var off = readOff();
      Object.keys(off).forEach(function (k) { if (k.indexOf(pre + "-") === 0) delete off[k]; });
      writeOff(off); applyOff();
    };
    var startDrag = function startDrag(e) {
      if (!dragOn) return;
      var im = e.currentTarget;
      var tgt = (im.closest && im.closest("[data-mmwrap]")) || im;
      e.preventDefault();
      var key = im.getAttribute("data-mmkey");
      var off = readOff();
      var base = off[key] || { x: 0, y: 0 };
      var sx = e.clientX, sy = e.clientY;
      var others = Array.prototype.filter.call(document.querySelectorAll("[data-mmkey]"), function (n) { return n !== im && !tgt.contains(n); });
      var container = document.querySelector(".work-grid") || document.getElementById("gallery") || document.body;
      var cr = container.getBoundingClientRect();
      var vGuides = [], hGuides = [];
      for (var g = 0; g <= 6; g++) vGuides.push(cr.left + cr.width * g / 6);
      others.forEach(function (n) {
        var r = n.getBoundingClientRect();
        vGuides.push(r.left, r.left + r.width / 2, r.right);
        hGuides.push(r.top, r.top + r.height / 2, r.bottom);
      });
      var gl = document.createElement("div");
      gl.className = "mm-guide";
      gl.style.cssText = "position:fixed;inset:0;z-index:9998;pointer-events:none";
      document.body.appendChild(gl);
      var move = function move(ev) {
        var nx = base.x + (ev.clientX - sx), ny = base.y + (ev.clientY - sy);
        tgt.style.transform = "translate(" + nx + "px," + ny + "px)";
        var r = tgt.getBoundingClientRect();
        var TOL = 7, lines = "";
        var snapAxis = function snapAxis(pts, guides, isV) {
          var best = null;
          pts.forEach(function (p) {
            guides.forEach(function (gv) {
              var d = gv - p;
              if (Math.abs(d) <= TOL && (!best || Math.abs(d) < Math.abs(best.d))) best = { d: d, at: gv };
            });
          });
          if (best) {
            lines += isV
              ? '<div style="position:absolute;left:' + best.at + 'px;top:0;bottom:0;width:1px;background:#27ae60"></div>'
              : '<div style="position:absolute;top:' + best.at + 'px;left:0;right:0;height:1px;background:#27ae60"></div>';
            return best.d;
          }
          return 0;
        };
        var dx = snapAxis([r.left, r.left + r.width / 2, r.right], vGuides, true);
        var dy = snapAxis([r.top, r.top + r.height / 2, r.bottom], hGuides, false);
        nx += dx; ny += dy;
        tgt.style.transform = "translate(" + nx + "px," + ny + "px)";
        gl.innerHTML = lines;
        off[key] = { x: Math.round(nx), y: Math.round(ny) };
      };
      var up = function up() {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        if (gl.parentNode) gl.parentNode.removeChild(gl);
        writeOff(off);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    };
    var tag = function tag() {
      document.querySelectorAll(".mm-imgno").forEach(function (n) { n.remove(); });
      var imgs = Array.prototype.filter.call(document.querySelectorAll("img"), function (im) {
        var r = im.getBoundingClientRect();
        return r.width > 60 && r.height > 40;
      });
      imgs.forEach(function (im, i) {
        var p = im.parentElement;
        if (!p) return;
        var key = pre + "-" + (i + 1);
        im.setAttribute("data-mmkey", key);
        im.onmousedown = startDrag;
        if (dragOn) { im.style.cursor = "move"; im.style.outline = "2px dashed rgba(192,57,43,.6)"; }
        if (getComputedStyle(p).position === "static") p.style.position = "relative";
        var b = document.createElement("div");
        b.className = "mm-imgno";
        b.textContent = key;
        b.style.cssText = "position:absolute;top:6px;left:6px;z-index:60;background:#c0392b;color:#fff;font:700 13px/1 'Jost',sans-serif;padding:5px 8px;border-radius:3px;pointer-events:none;letter-spacing:.5px;box-shadow:0 1px 6px rgba(0,0,0,.4)";
        p.appendChild(b);
      });
      var txts = document.querySelectorAll("[data-mmtext]");
      Array.prototype.forEach.call(txts, function (t, i) {
        var key = pre + "-T" + (i + 1);
        t.setAttribute("data-mmkey", key);
        t.onmousedown = startDrag;
        if (dragOn) { t.style.cursor = "move"; t.style.outline = "2px dashed rgba(41,128,185,.7)"; }
        if (getComputedStyle(t).position === "static") t.style.position = "relative";
        var b = document.createElement("div");
        b.className = "mm-imgno";
        b.textContent = key;
        b.style.cssText = "position:absolute;top:-9px;left:-4px;z-index:60;background:#2980b9;color:#fff;font:700 11px/1 'Jost',sans-serif;padding:4px 6px;border-radius:3px;pointer-events:none;letter-spacing:.5px";
        t.appendChild(b);
      });
      applyOff();
    };
    var t1 = setTimeout(tag, 400);
    var t2 = setTimeout(tag, 1400);
    window.addEventListener("resize", tag);
    return function () {
      clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener("resize", tag);
      document.querySelectorAll(".mm-imgno").forEach(function (n) { n.remove(); });
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    };
  }, [page]);
  useEffect(function () {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    try {
      var saved = sessionStorage.getItem("mm-scroll-" + window.location.pathname);
      if (saved) window.scrollTo(0, parseInt(saved, 10) || 0);
    } catch (e) {}
    var save = function save() {
      try {
        sessionStorage.setItem("mm-scroll-" + window.location.pathname, String(window.scrollY));
      } catch (e) {}
    };
    window.addEventListener("beforeunload", save);
    var iv = setInterval(save, 800);
    return function () {
      window.removeEventListener("beforeunload", save);
      clearInterval(iv);
    };
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
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    page: page,
    setPage: setPage,
    scrollY: scrollY,
    hidden: navHidden
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: "1 0 auto"
    }
  }, page === "home" && /*#__PURE__*/React.createElement(Home, {
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
  }), page === "work-shaped" && /*#__PURE__*/React.createElement(WorkDetail, {
    workKey: "shaped",
    setPage: setPage
  }), page === "impressum" && /*#__PURE__*/React.createElement(Impressum, {
    setPage: setPage
  })), /*#__PURE__*/React.createElement(Footer, {
    setPage: setPage
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
