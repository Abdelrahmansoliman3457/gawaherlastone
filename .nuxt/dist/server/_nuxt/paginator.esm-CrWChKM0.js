import { B as BaseStyle, D as DomHandler, U as UniqueComponentId, R as Ripple } from "../server.mjs";
import { s as script$b } from "./basecomponent.esm-Bypzsw1i.js";
import { openBlock, createElementBlock, mergeProps, toDisplayString, resolveDirective, withDirectives, createBlock, resolveDynamicComponent, resolveComponent, normalizeClass, createSlots, withCtx, Fragment, renderList, createTextVNode, normalizeProps, renderSlot, createCommentVNode } from "vue";
import { s as script$c, a as script$f, b as script$h } from "./index.esm-DeUE1P2M.js";
import script$d from "./dropdown.esm-BJ1dH6Bl.js";
import script$e from "./inputnumber.esm-oaTOBw06.js";
import { s as script$g } from "./index.esm-Cc00l6uj.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "@vue/devtools-api";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "vue-i18n";
import "vue/server-renderer";
import "@googlemaps/markerclustererplus";
import "./baseicon.esm-DKzT45co.js";
import "./index.esm-D9S7AqLP.js";
import "./index.esm-IxWTDxRk.js";
import "./index.esm-BT-tdytN.js";
import "./index.esm-1OJ_VxqQ.js";
import "./index.esm-BUUjSHDu.js";
import "./overlayeventbus.esm-CAhQZh07.js";
import "./portal.esm-CdWWxjdD.js";
import "./virtualscroller.esm-CYLd9gUl.js";
import "./button.esm-C_cw55kj.js";
import "./badge.esm-DqS6Ol5z.js";
import "./index.esm-IFXMkmsk.js";
import "./index.esm-CC50bM4s.js";
import "./inputtext.esm-36relN0T.js";
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var classes = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance, key = _ref.key;
    return ["p-paginator p-component", _defineProperty({
      "p-paginator-default": !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  start: "p-paginator-left-content",
  end: "p-paginator-right-content",
  firstPageButton: function firstPageButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-paginator-first p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  firstPageIcon: "p-paginator-icon",
  previousPageButton: function previousPageButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-paginator-prev p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  previousPageIcon: "p-paginator-icon",
  nextPageButton: function nextPageButton(_ref5) {
    var instance = _ref5.instance;
    return ["p-paginator-next p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  nextPageIcon: "p-paginator-icon",
  lastPageButton: function lastPageButton(_ref6) {
    var instance = _ref6.instance;
    return ["p-paginator-last p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  lastPageIcon: "p-paginator-icon",
  pages: "p-paginator-pages",
  pageButton: function pageButton(_ref7) {
    var props = _ref7.props, pageLink = _ref7.pageLink;
    return ["p-paginator-page p-paginator-element p-link", {
      "p-highlight": pageLink - 1 === props.page
    }];
  },
  current: "p-paginator-current",
  rowPerPageDropdown: "p-paginator-rpp-options",
  jumpToPageDropdown: "p-paginator-page-options",
  jumpToPageInput: "p-paginator-page-input"
};
var PaginatorStyle = BaseStyle.extend({
  name: "paginator",
  classes
});
var script$a = {
  name: "BasePaginator",
  "extends": script$b,
  props: {
    totalRecords: {
      type: Number,
      "default": 0
    },
    rows: {
      type: Number,
      "default": 0
    },
    first: {
      type: Number,
      "default": 0
    },
    pageLinkSize: {
      type: Number,
      "default": 5
    },
    rowsPerPageOptions: {
      type: Array,
      "default": null
    },
    template: {
      type: [Object, String],
      "default": "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    currentPageReportTemplate: {
      type: null,
      "default": "({currentPage} of {totalPages})"
    },
    alwaysShow: {
      type: Boolean,
      "default": true
    }
  },
  style: PaginatorStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$9 = {
  name: "CurrentPageReport",
  hostName: "Paginator",
  "extends": script$b,
  props: {
    pageCount: {
      type: Number,
      "default": 0
    },
    currentPage: {
      type: Number,
      "default": 0
    },
    page: {
      type: Number,
      "default": 0
    },
    first: {
      type: Number,
      "default": 0
    },
    rows: {
      type: Number,
      "default": 0
    },
    totalRecords: {
      type: Number,
      "default": 0
    },
    template: {
      type: String,
      "default": "({currentPage} of {totalPages})"
    }
  },
  computed: {
    text: function text() {
      var text2 = this.template.replace("{currentPage}", this.currentPage).replace("{totalPages}", this.pageCount).replace("{first}", this.pageCount > 0 ? this.first + 1 : 0).replace("{last}", Math.min(this.first + this.rows, this.totalRecords)).replace("{rows}", this.rows).replace("{totalRecords}", this.totalRecords);
      return text2;
    }
  }
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("current")
  }, _ctx.ptm("current")), toDisplayString($options.text), 17);
}
script$9.render = render$9;
var script$8 = {
  name: "FirstPageLink",
  hostName: "Paginator",
  "extends": script$b,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleDoubleLeftIcon: script$c
  },
  directives: {
    ripple: Ripple
  }
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("firstPageButton"),
    type: "button"
  }, $options.getPTOptions("firstPageButton"), {
    "data-pc-group-section": "pagebutton"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleDoubleLeftIcon"), mergeProps({
    "class": _ctx.cx("firstPageIcon")
  }, $options.getPTOptions("firstPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$8.render = render$8;
var script$7 = {
  name: "JumpToPageDropdown",
  hostName: "Paginator",
  "extends": script$b,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean,
    templates: null
  },
  methods: {
    onChange: function onChange(value) {
      this.$emit("page-change", value);
    }
  },
  computed: {
    pageOptions: function pageOptions() {
      var opts = [];
      for (var i = 0; i < this.pageCount; i++) {
        opts.push({
          label: String(i + 1),
          value: i
        });
      }
      return opts;
    }
  },
  components: {
    JTPDropdown: script$d
  }
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_JTPDropdown = resolveComponent("JTPDropdown");
  return openBlock(), createBlock(_component_JTPDropdown, {
    modelValue: $props.page,
    options: $options.pageOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $options.onChange($event);
    }),
    "class": normalizeClass(_ctx.cx("jumpToPageDropdown")),
    disabled: $props.disabled,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("jumpToPageDropdown"),
    "data-pc-group-section": "pagedropdown"
  }, createSlots({
    _: 2
  }, [$props.templates["jumptopagedropdownicon"] ? {
    name: "dropdownicon",
    fn: withCtx(function(slotProps) {
      return [(openBlock(), createBlock(resolveDynamicComponent($props.templates["jumptopagedropdownicon"]), {
        "class": normalizeClass(slotProps["class"])
      }, null, 8, ["class"]))];
    }),
    key: "0"
  } : void 0]), 1032, ["modelValue", "options", "class", "disabled", "unstyled", "pt"]);
}
script$7.render = render$7;
var script$6 = {
  name: "JumpToPageInput",
  hostName: "Paginator",
  "extends": script$b,
  inheritAttrs: false,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  data: function data() {
    return {
      d_page: this.page
    };
  },
  watch: {
    page: function page(newValue) {
      this.d_page = newValue;
    }
  },
  methods: {
    onChange: function onChange2(value) {
      if (value !== this.page) {
        this.d_page = value;
        this.$emit("page-change", value - 1);
      }
    }
  },
  computed: {
    inputArialabel: function inputArialabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.jumpToPageInputLabel : void 0;
    }
  },
  components: {
    JTPInput: script$e
  }
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_JTPInput = resolveComponent("JTPInput");
  return openBlock(), createBlock(_component_JTPInput, {
    ref: "jtpInput",
    modelValue: $data.d_page,
    "class": normalizeClass(_ctx.cx("jumpToPageInput")),
    "aria-label": $options.inputArialabel,
    disabled: $props.disabled,
    "onUpdate:modelValue": $options.onChange,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("jumpToPageInput")
  }, null, 8, ["modelValue", "class", "aria-label", "disabled", "onUpdate:modelValue", "unstyled", "pt"]);
}
script$6.render = render$6;
var script$5 = {
  name: "LastPageLink",
  hostName: "Paginator",
  "extends": script$b,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions2(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleDoubleRightIcon: script$f
  },
  directives: {
    ripple: Ripple
  }
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("lastPageButton"),
    type: "button"
  }, $options.getPTOptions("lastPageButton"), {
    "data-pc-group-section": "pagebutton"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleDoubleRightIcon"), mergeProps({
    "class": _ctx.cx("lastPageIcon")
  }, $options.getPTOptions("lastPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$5.render = render$5;
var script$4 = {
  name: "NextPageLink",
  hostName: "Paginator",
  "extends": script$b,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions3(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleRightIcon: script$g
  },
  directives: {
    ripple: Ripple
  }
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("nextPageButton"),
    type: "button"
  }, $options.getPTOptions("nextPageButton"), {
    "data-pc-group-section": "pagebutton"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleRightIcon"), mergeProps({
    "class": _ctx.cx("nextPageIcon")
  }, $options.getPTOptions("nextPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$4.render = render$4;
var script$3 = {
  name: "PageLinks",
  hostName: "Paginator",
  "extends": script$b,
  inheritAttrs: false,
  emits: ["click"],
  props: {
    value: Array,
    page: Number
  },
  methods: {
    getPTOptions: function getPTOptions4(pageLink, key) {
      return this.ptm(key, {
        context: {
          active: pageLink === this.page
        }
      });
    },
    onPageLinkClick: function onPageLinkClick(event, pageLink) {
      this.$emit("click", {
        originalEvent: event,
        value: pageLink
      });
    },
    ariaPageLabel: function ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["aria-label", "aria-current", "onClick", "data-p-highlight"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("pages")
  }, _ctx.ptm("pages")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(pageLink) {
    return withDirectives((openBlock(), createElementBlock("button", mergeProps({
      key: pageLink,
      "class": _ctx.cx("pageButton", {
        pageLink
      }),
      type: "button",
      "aria-label": $options.ariaPageLabel(pageLink),
      "aria-current": pageLink - 1 === $props.page ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onPageLinkClick($event, pageLink);
      }
    }, $options.getPTOptions(pageLink - 1, "pageButton"), {
      "data-p-highlight": pageLink - 1 === $props.page
    }), [createTextVNode(toDisplayString(pageLink), 1)], 16, _hoisted_1)), [[_directive_ripple]]);
  }), 128))], 16);
}
script$3.render = render$3;
var script$2 = {
  name: "PrevPageLink",
  hostName: "Paginator",
  "extends": script$b,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions5(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleLeftIcon: script$h
  },
  directives: {
    ripple: Ripple
  }
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("previousPageButton"),
    type: "button"
  }, $options.getPTOptions("previousPageButton"), {
    "data-pc-group-section": "pagebutton"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleLeftIcon"), mergeProps({
    "class": _ctx.cx("previousPageIcon")
  }, $options.getPTOptions("previousPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$2.render = render$2;
var script$1 = {
  name: "RowsPerPageDropdown",
  hostName: "Paginator",
  "extends": script$b,
  emits: ["rows-change"],
  props: {
    options: Array,
    rows: Number,
    disabled: Boolean,
    templates: null
  },
  methods: {
    onChange: function onChange3(value) {
      this.$emit("rows-change", value);
    }
  },
  computed: {
    rowsOptions: function rowsOptions() {
      var opts = [];
      if (this.options) {
        for (var i = 0; i < this.options.length; i++) {
          opts.push({
            label: String(this.options[i]),
            value: this.options[i]
          });
        }
      }
      return opts;
    }
  },
  components: {
    RPPDropdown: script$d
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RPPDropdown = resolveComponent("RPPDropdown");
  return openBlock(), createBlock(_component_RPPDropdown, {
    modelValue: $props.rows,
    options: $options.rowsOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $options.onChange($event);
    }),
    "class": normalizeClass(_ctx.cx("rowPerPageDropdown")),
    disabled: $props.disabled,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("rowPerPageDropdown"),
    "data-pc-group-section": "pagedropdown"
  }, createSlots({
    _: 2
  }, [$props.templates["rowsperpagedropdownicon"] ? {
    name: "dropdownicon",
    fn: withCtx(function(slotProps) {
      return [(openBlock(), createBlock(resolveDynamicComponent($props.templates["rowsperpagedropdownicon"]), {
        "class": normalizeClass(slotProps["class"])
      }, null, 8, ["class"]))];
    }),
    key: "0"
  } : void 0]), 1032, ["modelValue", "options", "class", "disabled", "unstyled", "pt"]);
}
script$1.render = render$1;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var script = {
  name: "Paginator",
  "extends": script$a,
  inheritAttrs: false,
  emits: ["update:first", "update:rows", "page"],
  data: function data2() {
    return {
      d_first: this.first,
      d_rows: this.rows
    };
  },
  watch: {
    first: function first(newValue) {
      this.d_first = newValue;
    },
    rows: function rows(newValue) {
      this.d_rows = newValue;
    },
    totalRecords: function totalRecords(newValue) {
      if (this.page > 0 && newValue && this.d_first >= newValue) {
        this.changePage(this.pageCount - 1);
      }
    }
  },
  mounted: function mounted() {
    this.setPaginatorAttribute();
    this.createStyle();
  },
  methods: {
    changePage: function changePage(p) {
      var pc = this.pageCount;
      if (p >= 0 && p < pc) {
        this.d_first = this.d_rows * p;
        var state = {
          page: p,
          first: this.d_first,
          rows: this.d_rows,
          pageCount: pc
        };
        this.$emit("update:first", this.d_first);
        this.$emit("update:rows", this.d_rows);
        this.$emit("page", state);
      }
    },
    changePageToFirst: function changePageToFirst(event) {
      if (!this.isFirstPage) {
        this.changePage(0);
      }
      event.preventDefault();
    },
    changePageToPrev: function changePageToPrev(event) {
      this.changePage(this.page - 1);
      event.preventDefault();
    },
    changePageLink: function changePageLink(event) {
      this.changePage(event.value - 1);
      event.originalEvent.preventDefault();
    },
    changePageToNext: function changePageToNext(event) {
      this.changePage(this.page + 1);
      event.preventDefault();
    },
    changePageToLast: function changePageToLast(event) {
      if (!this.isLastPage) {
        this.changePage(this.pageCount - 1);
      }
      event.preventDefault();
    },
    onRowChange: function onRowChange(value) {
      this.d_rows = value;
      this.changePage(this.page);
    },
    createStyle: function createStyle() {
      var _this = this;
      if (this.hasBreakpoints() && !this.isUnstyled) {
        var _this$$primevue;
        this.styleElement = (void 0).createElement("style");
        this.styleElement.type = "text/css";
        DomHandler.setAttribute(this.styleElement, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).head.appendChild(this.styleElement);
        var innerHTML = "";
        var keys = Object.keys(this.template);
        var sortedBreakpoints = {};
        keys.sort(function(a, b) {
          return parseInt(a) - parseInt(b);
        }).forEach(function(key2) {
          sortedBreakpoints[key2] = _this.template[key2];
        });
        for (var _i = 0, _Object$entries = Object.entries(Object.entries(sortedBreakpoints)); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), index = _Object$entries$_i[0], _Object$entries$_i$ = _slicedToArray(_Object$entries$_i[1], 1), key = _Object$entries$_i$[0];
          var minValue = void 0, calculatedMinValue = void 0;
          if (key !== "default" && typeof Object.keys(sortedBreakpoints)[index - 1] === "string") {
            calculatedMinValue = Number(Object.keys(sortedBreakpoints)[index - 1].slice(0, -2)) + 1 + "px";
          } else {
            calculatedMinValue = Object.keys(sortedBreakpoints)[index - 1];
          }
          minValue = Object.entries(sortedBreakpoints)[index - 1] ? "and (min-width:".concat(calculatedMinValue, ")") : "";
          if (key === "default") {
            innerHTML += "\n                            @media screen ".concat(minValue, " {\n                                .paginator[").concat(this.attributeSelector, "],\n                                    display: flex;\n                                }\n                            }\n                        ");
          } else {
            innerHTML += "\n.paginator[".concat(this.attributeSelector, "], .p-paginator-").concat(key, " {\n    display: none;\n}\n@media screen ").concat(minValue, " and (max-width: ").concat(key, ") {\n    .paginator[").concat(this.attributeSelector, "], .p-paginator-").concat(key, " {\n        display: flex;\n    }\n    .paginator[").concat(this.attributeSelector, "],\n    .p-paginator-default{\n        display: none;\n    }\n}\n                    ");
          }
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    hasBreakpoints: function hasBreakpoints() {
      return _typeof(this.template) === "object";
    },
    setPaginatorAttribute: function setPaginatorAttribute() {
      var _this2 = this;
      if (this.$refs.paginator && this.$refs.paginator.length >= 0) {
        _toConsumableArray(this.$refs.paginator).forEach(function(el) {
          el.setAttribute(_this2.attributeSelector, "");
        });
      }
    },
    getAriaLabel: function getAriaLabel(labelType) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[labelType] : void 0;
    }
  },
  computed: {
    templateItems: function templateItems() {
      var keys = {};
      if (this.hasBreakpoints()) {
        keys = this.template;
        if (!keys["default"]) {
          keys["default"] = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";
        }
        for (var item in keys) {
          keys[item] = this.template[item].split(" ").map(function(value) {
            return value.trim();
          });
        }
        return keys;
      }
      keys["default"] = this.template.split(" ").map(function(value) {
        return value.trim();
      });
      return keys;
    },
    page: function page2() {
      return Math.floor(this.d_first / this.d_rows);
    },
    pageCount: function pageCount() {
      return Math.ceil(this.totalRecords / this.d_rows);
    },
    isFirstPage: function isFirstPage() {
      return this.page === 0;
    },
    isLastPage: function isLastPage() {
      return this.page === this.pageCount - 1;
    },
    calculatePageLinkBoundaries: function calculatePageLinkBoundaries() {
      var numberOfPages = this.pageCount;
      var visiblePages = Math.min(this.pageLinkSize, numberOfPages);
      var start = Math.max(0, Math.ceil(this.page - visiblePages / 2));
      var end = Math.min(numberOfPages - 1, start + visiblePages - 1);
      var delta = this.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    },
    pageLinks: function pageLinks() {
      var pageLinks2 = [];
      var boundaries = this.calculatePageLinkBoundaries;
      var start = boundaries[0];
      var end = boundaries[1];
      for (var i = start; i <= end; i++) {
        pageLinks2.push(i + 1);
      }
      return pageLinks2;
    },
    currentState: function currentState() {
      return {
        page: this.page,
        first: this.d_first,
        rows: this.d_rows
      };
    },
    empty: function empty() {
      return this.pageCount === 0;
    },
    currentPage: function currentPage() {
      return this.pageCount > 0 ? this.page + 1 : 0;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    }
  },
  components: {
    CurrentPageReport: script$9,
    FirstPageLink: script$8,
    LastPageLink: script$5,
    NextPageLink: script$4,
    PageLinks: script$3,
    PrevPageLink: script$2,
    RowsPerPageDropdown: script$1,
    JumpToPageDropdown: script$7,
    JumpToPageInput: script$6
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FirstPageLink = resolveComponent("FirstPageLink");
  var _component_PrevPageLink = resolveComponent("PrevPageLink");
  var _component_NextPageLink = resolveComponent("NextPageLink");
  var _component_LastPageLink = resolveComponent("LastPageLink");
  var _component_PageLinks = resolveComponent("PageLinks");
  var _component_CurrentPageReport = resolveComponent("CurrentPageReport");
  var _component_RowsPerPageDropdown = resolveComponent("RowsPerPageDropdown");
  var _component_JumpToPageDropdown = resolveComponent("JumpToPageDropdown");
  var _component_JumpToPageInput = resolveComponent("JumpToPageInput");
  return (_ctx.alwaysShow ? true : $options.pageLinks && $options.pageLinks.length > 1) ? (openBlock(), createElementBlock("nav", normalizeProps(mergeProps({
    key: 0
  }, _ctx.ptmi("paginatorWrapper"))), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.templateItems, function(value, key) {
    return openBlock(), createElementBlock("div", mergeProps({
      key,
      ref_for: true,
      ref: "paginator",
      "class": _ctx.cx("paginator", {
        key
      })
    }, _ctx.ptm("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      "class": _ctx.cx("start")
    }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start", {
      state: $options.currentState
    })], 16)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(value, function(item) {
      return openBlock(), createElementBlock(Fragment, {
        key: item
      }, [item === "FirstPageLink" ? (openBlock(), createBlock(_component_FirstPageLink, {
        key: 0,
        "aria-label": $options.getAriaLabel("firstPageLabel"),
        template: _ctx.$slots.firstpagelinkicon,
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.changePageToFirst($event);
        }),
        disabled: $options.isFirstPage || $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "unstyled", "pt"])) : item === "PrevPageLink" ? (openBlock(), createBlock(_component_PrevPageLink, {
        key: 1,
        "aria-label": $options.getAriaLabel("prevPageLabel"),
        template: _ctx.$slots.prevpagelinkicon,
        onClick: _cache[1] || (_cache[1] = function($event) {
          return $options.changePageToPrev($event);
        }),
        disabled: $options.isFirstPage || $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "unstyled", "pt"])) : item === "NextPageLink" ? (openBlock(), createBlock(_component_NextPageLink, {
        key: 2,
        "aria-label": $options.getAriaLabel("nextPageLabel"),
        template: _ctx.$slots.nextpagelinkicon,
        onClick: _cache[2] || (_cache[2] = function($event) {
          return $options.changePageToNext($event);
        }),
        disabled: $options.isLastPage || $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "unstyled", "pt"])) : item === "LastPageLink" ? (openBlock(), createBlock(_component_LastPageLink, {
        key: 3,
        "aria-label": $options.getAriaLabel("lastPageLabel"),
        template: _ctx.$slots.lastpagelinkicon,
        onClick: _cache[3] || (_cache[3] = function($event) {
          return $options.changePageToLast($event);
        }),
        disabled: $options.isLastPage || $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "unstyled", "pt"])) : item === "PageLinks" ? (openBlock(), createBlock(_component_PageLinks, {
        key: 4,
        "aria-label": $options.getAriaLabel("pageLabel"),
        value: $options.pageLinks,
        page: $options.page,
        onClick: _cache[4] || (_cache[4] = function($event) {
          return $options.changePageLink($event);
        }),
        pt: _ctx.pt
      }, null, 8, ["aria-label", "value", "page", "pt"])) : item === "CurrentPageReport" ? (openBlock(), createBlock(_component_CurrentPageReport, {
        key: 5,
        "aria-live": "polite",
        template: _ctx.currentPageReportTemplate,
        currentPage: $options.currentPage,
        page: $options.page,
        pageCount: $options.pageCount,
        first: $data.d_first,
        rows: $data.d_rows,
        totalRecords: _ctx.totalRecords,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["template", "currentPage", "page", "pageCount", "first", "rows", "totalRecords", "unstyled", "pt"])) : item === "RowsPerPageDropdown" && _ctx.rowsPerPageOptions ? (openBlock(), createBlock(_component_RowsPerPageDropdown, {
        key: 6,
        "aria-label": $options.getAriaLabel("rowsPerPageLabel"),
        rows: $data.d_rows,
        options: _ctx.rowsPerPageOptions,
        onRowsChange: _cache[5] || (_cache[5] = function($event) {
          return $options.onRowChange($event);
        }),
        disabled: $options.empty,
        templates: _ctx.$slots,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "rows", "options", "disabled", "templates", "unstyled", "pt"])) : item === "JumpToPageDropdown" ? (openBlock(), createBlock(_component_JumpToPageDropdown, {
        key: 7,
        "aria-label": $options.getAriaLabel("jumpToPageDropdownLabel"),
        page: $options.page,
        pageCount: $options.pageCount,
        onPageChange: _cache[6] || (_cache[6] = function($event) {
          return $options.changePage($event);
        }),
        disabled: $options.empty,
        templates: _ctx.$slots,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "page", "pageCount", "disabled", "templates", "unstyled", "pt"])) : item === "JumpToPageInput" ? (openBlock(), createBlock(_component_JumpToPageInput, {
        key: 8,
        page: $options.currentPage,
        onPageChange: _cache[7] || (_cache[7] = function($event) {
          return $options.changePage($event);
        }),
        disabled: $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["page", "disabled", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
    }), 128)), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
      key: 1,
      "class": _ctx.cx("end")
    }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end", {
      state: $options.currentState
    })], 16)) : createCommentVNode("", true)], 16);
  }), 128))], 16)) : createCommentVNode("", true);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=paginator.esm-CrWChKM0.js.map
