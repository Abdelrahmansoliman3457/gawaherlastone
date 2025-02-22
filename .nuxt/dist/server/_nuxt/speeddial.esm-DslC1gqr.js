import script$2 from "./button.esm-C_cw55kj.js";
import { s as script$3 } from "./index.esm-BWk2d8Cp.js";
import { B as BaseStyle, U as UniqueComponentId, D as DomHandler, R as Ripple, h as Tooltip } from "../server.mjs";
import { s as script$4 } from "./basecomponent.esm-Bypzsw1i.js";
import { resolveComponent, resolveDirective, openBlock, createElementBlock, Fragment, createElementVNode, mergeProps, renderSlot, createVNode, normalizeClass, withCtx, createBlock, resolveDynamicComponent, renderList, withDirectives, createCommentVNode } from "vue";
import "./badge.esm-DqS6Ol5z.js";
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
import "./index.esm-1OJ_VxqQ.js";
import "./baseicon.esm-DKzT45co.js";
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var inlineStyles = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === "up" || props.direction === "down") && "center",
      justifyContent: (props.direction === "left" || props.direction === "right") && "center",
      flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
    };
  },
  menu: function menu(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
    };
  }
};
var classes = {
  root: function root2(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$1(_defineProperty$1(_defineProperty$1({}, "p-speeddial-direction-".concat(props.direction), props.type !== "circle"), "p-speeddial-opened", instance.d_visible), "p-disabled", props.disabled)];
  },
  button: function button(_ref5) {
    var props = _ref5.props;
    return ["p-speeddial-button p-button-rounded", {
      "p-speeddial-rotate": props.rotateAnimation && !props.hideIcon
    }];
  },
  menu: "p-speeddial-list",
  menuitem: function menuitem(_ref6) {
    var instance = _ref6.instance, id = _ref6.id;
    return ["p-speeddial-item", {
      "p-focus": instance.isItemActive(id)
    }];
  },
  action: function action(_ref7) {
    var item = _ref7.item;
    return ["p-speeddial-action", {
      "p-disabled": item.disabled
    }];
  },
  actionIcon: "p-speeddial-action-icon",
  mask: function mask(_ref8) {
    var instance = _ref8.instance;
    return ["p-speeddial-mask", {
      "p-speeddial-mask-visible": instance.d_visible
    }];
  }
};
var SpeedDialStyle = BaseStyle.extend({
  name: "speeddial",
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSpeedDial",
  "extends": script$4,
  props: {
    model: null,
    visible: {
      type: Boolean,
      "default": false
    },
    direction: {
      type: String,
      "default": "up"
    },
    transitionDelay: {
      type: Number,
      "default": 30
    },
    type: {
      type: String,
      "default": "linear"
    },
    radius: {
      type: Number,
      "default": 0
    },
    mask: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    hideOnClickOutside: {
      type: Boolean,
      "default": true
    },
    buttonClass: null,
    maskStyle: null,
    maskClass: null,
    showIcon: {
      type: String,
      "default": void 0
    },
    hideIcon: {
      type: String,
      "default": void 0
    },
    rotateAnimation: {
      type: Boolean,
      "default": true
    },
    tooltipOptions: null,
    style: null,
    "class": null,
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: SpeedDialStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var script = {
  name: "SpeedDial",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["click", "show", "hide", "focus", "blur"],
  documentClickListener: null,
  container: null,
  list: null,
  data: function data() {
    return {
      id: this.$attrs.id,
      d_visible: this.visible,
      isItemClicked: false,
      focused: false,
      focusedOptionIndex: -1
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    visible: function visible(newValue) {
      this.d_visible = newValue;
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    if (this.type !== "linear") {
      var button2 = DomHandler.findSingle(this.container, '[data-pc-name="button"]');
      var firstItem = DomHandler.findSingle(this.list, '[data-pc-section="menuitem"]');
      if (button2 && firstItem) {
        var wDiff = Math.abs(button2.offsetWidth - firstItem.offsetWidth);
        var hDiff = Math.abs(button2.offsetHeight - firstItem.offsetHeight);
        this.list.style.setProperty("--item-diff-x", "".concat(wDiff / 2, "px"));
        this.list.style.setProperty("--item-diff-y", "".concat(hDiff / 2, "px"));
      }
    }
    if (this.hideOnClickOutside) {
      this.bindDocumentClickListener();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindDocumentClickListener();
  },
  methods: {
    getPTOptions: function getPTOptions(id, key) {
      return this.ptm(key, {
        context: {
          active: this.isItemActive(id),
          hidden: !this.d_visible
        }
      });
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onItemClick: function onItemClick(e, item) {
      if (item.command) {
        item.command({
          originalEvent: e,
          item
        });
      }
      this.hide();
      this.isItemClicked = true;
      e.preventDefault();
    },
    onClick: function onClick(event) {
      this.d_visible ? this.hide() : this.show();
      this.isItemClicked = true;
      this.$emit("click", event);
    },
    show: function show() {
      this.d_visible = true;
      this.$emit("show");
    },
    hide: function hide() {
      this.d_visible = false;
      this.$emit("hide");
    },
    calculateTransitionDelay: function calculateTransitionDelay(index) {
      var length = this.model.length;
      var visible2 = this.d_visible;
      return (visible2 ? index : length - index - 1) * this.transitionDelay;
    },
    onTogglerKeydown: function onTogglerKeydown(event) {
      switch (event.code) {
        case "ArrowDown":
        case "ArrowLeft":
          this.onTogglerArrowDown(event);
          break;
        case "ArrowUp":
        case "ArrowRight":
          this.onTogglerArrowUp(event);
          break;
        case "Escape":
          this.onEscapeKey();
          break;
      }
    },
    onKeyDown: function onKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDown(event);
          break;
        case "ArrowUp":
          this.onArrowUp(event);
          break;
        case "ArrowLeft":
          this.onArrowLeft(event);
          break;
        case "ArrowRight":
          this.onArrowRight(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
      }
    },
    onTogglerArrowUp: function onTogglerArrowUp(event) {
      this.focused = true;
      DomHandler.focus(this.list);
      this.show();
      this.navigatePrevItem(event);
      event.preventDefault();
    },
    onTogglerArrowDown: function onTogglerArrowDown(event) {
      this.focused = true;
      DomHandler.focus(this.list);
      this.show();
      this.navigateNextItem(event);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      var _this = this;
      var items = DomHandler.find(this.container, '[data-pc-section="menuitem"]');
      var itemIndex = _toConsumableArray(items).findIndex(function(item) {
        return item.id === _this.focusedOptionIndex;
      });
      this.onItemClick(event, this.model[itemIndex]);
      this.onBlur(event);
      var buttonEl = DomHandler.findSingle(this.container, "button");
      buttonEl && DomHandler.focus(buttonEl);
    },
    onEscapeKey: function onEscapeKey() {
      this.hide();
      var buttonEl = DomHandler.findSingle(this.container, "button");
      buttonEl && DomHandler.focus(buttonEl);
    },
    onArrowUp: function onArrowUp(event) {
      if (this.direction === "up") {
        this.navigateNextItem(event);
      } else if (this.direction === "down") {
        this.navigatePrevItem(event);
      } else {
        this.navigateNextItem(event);
      }
    },
    onArrowDown: function onArrowDown(event) {
      if (this.direction === "up") {
        this.navigatePrevItem(event);
      } else if (this.direction === "down") {
        this.navigateNextItem(event);
      } else {
        this.navigatePrevItem(event);
      }
    },
    onArrowLeft: function onArrowLeft(event) {
      var leftValidDirections = ["left", "up-right", "down-left"];
      var rightValidDirections = ["right", "up-left", "down-right"];
      if (leftValidDirections.includes(this.direction)) {
        this.navigateNextItem(event);
      } else if (rightValidDirections.includes(this.direction)) {
        this.navigatePrevItem(event);
      } else {
        this.navigatePrevItem(event);
      }
    },
    onArrowRight: function onArrowRight(event) {
      var leftValidDirections = ["left", "up-right", "down-left"];
      var rightValidDirections = ["right", "up-left", "down-right"];
      if (leftValidDirections.includes(this.direction)) {
        this.navigatePrevItem(event);
      } else if (rightValidDirections.includes(this.direction)) {
        this.navigateNextItem(event);
      } else {
        this.navigateNextItem(event);
      }
    },
    onEndKey: function onEndKey(event) {
      event.preventDefault();
      this.focusedOptionIndex = -1;
      this.navigatePrevItem(event);
    },
    onHomeKey: function onHomeKey(event) {
      event.preventDefault();
      this.focusedOptionIndex = -1;
      this.navigateNextItem(event);
    },
    navigateNextItem: function navigateNextItem(event) {
      var optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    navigatePrevItem: function navigatePrevItem(event) {
      var optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(index) {
      var items = DomHandler.find(this.container, '[data-pc-section="menuitem"]');
      var filteredItems = _toConsumableArray(items).filter(function(item) {
        return !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled");
      });
      if (filteredItems[index]) {
        this.focusedOptionIndex = filteredItems[index].getAttribute("id");
      }
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var items = DomHandler.find(this.container, '[data-pc-section="menuitem"]');
      var filteredItems = _toConsumableArray(items).filter(function(item) {
        return !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled");
      });
      var newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
      var matchedOptionIndex = filteredItems.findIndex(function(link) {
        return link.getAttribute("id") === newIndex;
      });
      matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;
      return matchedOptionIndex;
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var items = DomHandler.find(this.container, '[data-pc-section="menuitem"]');
      var filteredItems = _toConsumableArray(items).filter(function(item) {
        return !DomHandler.hasClass(DomHandler.findSingle(item, "a"), "p-disabled");
      });
      var newIndex = index === -1 ? filteredItems[0].id : index;
      var matchedOptionIndex = filteredItems.findIndex(function(link) {
        return link.getAttribute("id") === newIndex;
      });
      matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;
      return matchedOptionIndex;
    },
    calculatePointStyle: function calculatePointStyle(index) {
      var type = this.type;
      if (type !== "linear") {
        var length = this.model.length;
        var radius = this.radius || length * 20;
        if (type === "circle") {
          var step = 2 * Math.PI / length;
          return {
            left: "calc(".concat(radius * Math.cos(step * index), "px + var(--item-diff-x, 0px))"),
            top: "calc(".concat(radius * Math.sin(step * index), "px + var(--item-diff-y, 0px))")
          };
        } else if (type === "semi-circle") {
          var direction = this.direction;
          var _step = Math.PI / (length - 1);
          var x = "calc(".concat(radius * Math.cos(_step * index), "px + var(--item-diff-x, 0px))");
          var y = "calc(".concat(radius * Math.sin(_step * index), "px + var(--item-diff-y, 0px))");
          if (direction === "up") {
            return {
              left: x,
              bottom: y
            };
          } else if (direction === "down") {
            return {
              left: x,
              top: y
            };
          } else if (direction === "left") {
            return {
              right: y,
              top: x
            };
          } else if (direction === "right") {
            return {
              left: y,
              top: x
            };
          }
        } else if (type === "quarter-circle") {
          var _direction = this.direction;
          var _step2 = Math.PI / (2 * (length - 1));
          var _x = "calc(".concat(radius * Math.cos(_step2 * index), "px + var(--item-diff-x, 0px))");
          var _y = "calc(".concat(radius * Math.sin(_step2 * index), "px + var(--item-diff-y, 0px))");
          if (_direction === "up-left") {
            return {
              right: _x,
              bottom: _y
            };
          } else if (_direction === "up-right") {
            return {
              left: _x,
              bottom: _y
            };
          } else if (_direction === "down-left") {
            return {
              right: _y,
              top: _x
            };
          } else if (_direction === "down-right") {
            return {
              left: _y,
              top: _x
            };
          }
        }
      }
      return {};
    },
    getItemStyle: function getItemStyle(index) {
      var transitionDelay = this.calculateTransitionDelay(index);
      var pointStyle = this.calculatePointStyle(index);
      return _objectSpread({
        transitionDelay: "".concat(transitionDelay, "ms")
      }, pointStyle);
    },
    bindDocumentClickListener: function bindDocumentClickListener() {
      var _this2 = this;
      if (!this.documentClickListener) {
        this.documentClickListener = function(event) {
          if (_this2.d_visible && _this2.isOutsideClicked(event)) {
            _this2.hide();
          }
          _this2.isItemClicked = false;
        };
        (void 0).addEventListener("click", this.documentClickListener);
      }
    },
    unbindDocumentClickListener: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        (void 0).removeEventListener("click", this.documentClickListener);
        this.documentClickListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target) || this.isItemClicked);
    },
    isItemVisible: function isItemVisible(item) {
      return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    },
    isItemActive: function isItemActive(id) {
      return id === this.focusedOptionId;
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    listRef: function listRef(el) {
      this.list = el;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    }
  },
  components: {
    SDButton: script$2,
    PlusIcon: script$3
  },
  directives: {
    ripple: Ripple,
    tooltip: Tooltip
  }
};
var _hoisted_1 = ["id", "aria-activedescendant"];
var _hoisted_2 = ["id", "aria-controls"];
var _hoisted_3 = ["href", "target", "onClick", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SDButton = resolveComponent("SDButton");
  var _directive_ripple = resolveDirective("ripple");
  var _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", mergeProps({
    ref: $options.containerRef,
    "class": $options.containerClass,
    style: [_ctx.style, _ctx.sx("root")]
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "button", {
    onClick: $options.onClick,
    toggleCallback: $options.onClick
  }, function() {
    return [createVNode(_component_SDButton, {
      type: "button",
      "class": normalizeClass([_ctx.cx("button"), _ctx.buttonClass]),
      onClick: _cache[0] || (_cache[0] = function($event) {
        return $options.onClick($event);
      }),
      disabled: _ctx.disabled,
      onKeydown: $options.onTogglerKeydown,
      "aria-expanded": $data.d_visible,
      "aria-haspopup": true,
      "aria-controls": $data.id + "_list",
      "aria-label": _ctx.ariaLabel,
      "aria-labelledby": _ctx.ariaLabelledby,
      pt: _ctx.ptm("button"),
      unstyled: _ctx.unstyled
    }, {
      icon: withCtx(function() {
        return [renderSlot(_ctx.$slots, "icon", {
          visible: $data.d_visible
        }, function() {
          return [$data.d_visible && !!_ctx.hideIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.hideIcon ? "span" : "PlusIcon"), mergeProps({
            key: 0,
            "class": [_ctx.hideIcon, _ctx.cx("buttonIcon")]
          }, _ctx.ptm("button")["icon"], {
            "data-pc-section": "icon"
          }), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showIcon ? "span" : "PlusIcon"), mergeProps({
            key: 1,
            "class": $data.d_visible && !!_ctx.hideIcon ? _ctx.hideIcon : _ctx.showIcon
          }, _ctx.ptm("button")["icon"], {
            "data-pc-section": "icon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 8, ["class", "disabled", "onKeydown", "aria-expanded", "aria-controls", "aria-label", "aria-labelledby", "pt", "unstyled"])];
  }), createElementVNode("ul", mergeProps({
    ref: $options.listRef,
    id: $data.id + "_list",
    "class": _ctx.cx("menu"),
    style: _ctx.sx("menu"),
    role: "menu",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    tabindex: "-1",
    onFocus: _cache[1] || (_cache[1] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[2] || (_cache[2] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[3] || (_cache[3] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("menu")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: index
    }, [$options.isItemVisible(item) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: "".concat($data.id, "_").concat(index),
      "aria-controls": "".concat($data.id, "_item"),
      "class": _ctx.cx("menuitem", {
        id: "".concat($data.id, "_").concat(index)
      }),
      style: $options.getItemStyle(index),
      role: "menuitem"
    }, $options.getPTOptions("".concat($data.id, "_").concat(index), "menuitem")), [!_ctx.$slots.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      tabindex: -1,
      href: item.url || "#",
      role: "menuitem",
      "class": _ctx.cx("action", {
        item
      }),
      target: item.target,
      onClick: function onClick2($event) {
        return $options.onItemClick($event, item);
      },
      "aria-label": item.label
    }, $options.getPTOptions("".concat($data.id, "_").concat(index), "action")), [item.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("actionIcon"), item.icon]
    }, $options.getPTOptions("".concat($data.id, "_").concat(index), "actionIcon")), null, 16)) : createCommentVNode("", true)], 16, _hoisted_3)), [[_directive_ripple], [_directive_tooltip, {
      value: item.label,
      disabled: !_ctx.tooltipOptions
    }, _ctx.tooltipOptions]]) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item,
      onClick: function onClick2(event) {
        return $options.onItemClick(event, item);
      }
    }, null, 8, ["item", "onClick"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1)], 16), _ctx.mask ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": [_ctx.cx("mask"), _ctx.maskClass],
    style: _ctx.maskStyle
  }, _ctx.ptm("mask")), null, 16)) : createCommentVNode("", true)], 64);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=speeddial.esm-DslC1gqr.js.map
