import { s as script$2 } from "./index.esm-Deajh7Nl.js";
import { B as BaseStyle, U as UniqueComponentId } from "../server.mjs";
import { s as script$3 } from "./basecomponent.esm-Bypzsw1i.js";
import { openBlock, createElementBlock, mergeProps, createElementVNode, Fragment, renderList, renderSlot, normalizeClass, toDisplayString, createBlock, resolveDynamicComponent } from "vue";
import "./baseicon.esm-DKzT45co.js";
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
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-chips p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      "p-inputwrapper-focus": instance.focused
    }];
  },
  container: function container(_ref2) {
    var props = _ref2.props, instance = _ref2.instance;
    return ["p-inputtext p-chips-multiple-container", {
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled"
    }];
  },
  token: function token(_ref3) {
    var state = _ref3.state, index = _ref3.index;
    return ["p-chips-token", {
      "p-focus": state.focusedIndex === index
    }];
  },
  label: "p-chips-token-label",
  removeTokenIcon: "p-chips-token-icon",
  inputToken: "p-chips-input-token"
};
var ChipsStyle = BaseStyle.extend({
  name: "chips",
  classes
});
var script$1 = {
  name: "BaseChips",
  "extends": script$3,
  props: {
    modelValue: {
      type: Array,
      "default": null
    },
    max: {
      type: Number,
      "default": null
    },
    separator: {
      type: [String, Object],
      "default": null
    },
    addOnBlur: {
      type: Boolean,
      "default": null
    },
    allowDuplicate: {
      type: Boolean,
      "default": true
    },
    placeholder: {
      type: String,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    removeTokenIcon: {
      type: String,
      "default": void 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: ChipsStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
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
  name: "Chips",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "add", "remove", "focus", "blur"],
  data: function data() {
    return {
      id: this.$attrs.id,
      inputValue: null,
      focused: false,
      focusedIndex: null
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    onWrapperClick: function onWrapperClick() {
      this.$refs.input.focus();
    },
    onInput: function onInput(event) {
      this.inputValue = event.target.value;
      this.focusedIndex = null;
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedIndex = null;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedIndex = null;
      if (this.addOnBlur) {
        this.addItem(event, event.target.value, false);
      }
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      var inputValue = event.target.value;
      switch (event.code) {
        case "Backspace":
          if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
            if (this.focusedIndex !== null) {
              this.removeItem(event, this.focusedIndex);
            } else this.removeItem(event, this.modelValue.length - 1);
          }
          break;
        case "Enter":
        case "NumpadEnter":
          if (inputValue && inputValue.trim().length && !this.maxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        case "ArrowLeft":
          if (inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
            this.$refs.container.focus();
          }
          break;
        case "ArrowRight":
          event.stopPropagation();
          break;
        default:
          if (this.separator) {
            if (this.separator === event.key || event.key.match(this.separator)) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    },
    onPaste: function onPaste(event) {
      var _this = this;
      if (this.separator) {
        var separator = this.separator.replace("\\n", "\n").replace("\\r", "\r").replace("\\t", "	");
        var pastedData = (event.clipboardData || (void 0)["clipboardData"]).getData("Text");
        if (pastedData) {
          var value = this.modelValue || [];
          var pastedValues = pastedData.split(separator);
          pastedValues = pastedValues.filter(function(val) {
            return _this.allowDuplicate || value.indexOf(val) === -1;
          });
          value = [].concat(_toConsumableArray(value), _toConsumableArray(pastedValues));
          this.updateModel(event, value, true);
        }
      }
    },
    onContainerFocus: function onContainerFocus() {
      this.focused = true;
    },
    onContainerBlur: function onContainerBlur() {
      this.focusedIndex = -1;
      this.focused = false;
    },
    onContainerKeyDown: function onContainerKeyDown(event) {
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOn(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOn(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOn(event);
          break;
      }
    },
    onArrowLeftKeyOn: function onArrowLeftKeyOn() {
      if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
        this.focusedIndex = this.focusedIndex === null ? this.modelValue.length - 1 : this.focusedIndex - 1;
        if (this.focusedIndex < 0) this.focusedIndex = 0;
      }
    },
    onArrowRightKeyOn: function onArrowRightKeyOn() {
      if (this.inputValue.length === 0 && this.modelValue && this.modelValue.length > 0) {
        if (this.focusedIndex === this.modelValue.length - 1) {
          this.focusedIndex = null;
          this.$refs.input.focus();
        } else {
          this.focusedIndex++;
        }
      }
    },
    onBackspaceKeyOn: function onBackspaceKeyOn(event) {
      if (this.focusedIndex !== null) {
        this.removeItem(event, this.focusedIndex);
      }
    },
    updateModel: function updateModel(event, value, preventDefault) {
      var _this2 = this;
      this.$emit("update:modelValue", value);
      this.$emit("add", {
        originalEvent: event,
        value
      });
      this.$refs.input.value = "";
      this.inputValue = "";
      setTimeout(function() {
        _this2.maxedOut && (_this2.focused = false);
      }, 0);
      if (preventDefault) {
        event.preventDefault();
      }
    },
    addItem: function addItem(event, item, preventDefault) {
      if (item && item.trim().length) {
        var value = this.modelValue ? _toConsumableArray(this.modelValue) : [];
        if (this.allowDuplicate || value.indexOf(item) === -1) {
          value.push(item);
          this.updateModel(event, value, preventDefault);
        }
      }
    },
    removeItem: function removeItem(event, index) {
      if (this.disabled) {
        return;
      }
      var values = _toConsumableArray(this.modelValue);
      var removedItem = values.splice(index, 1);
      this.focusedIndex = null;
      this.$refs.input.focus();
      this.$emit("update:modelValue", values);
      this.$emit("remove", {
        originalEvent: event,
        value: removedItem
      });
    }
  },
  computed: {
    maxedOut: function maxedOut() {
      return this.max && this.modelValue && this.max === this.modelValue.length;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedIndex !== null ? "".concat(this.id, "_chips_item_").concat(this.focusedIndex) : null;
    }
  },
  components: {
    TimesCircleIcon: script$2
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
var _hoisted_1 = ["aria-labelledby", "aria-label", "aria-activedescendant"];
var _hoisted_2 = ["id", "aria-label", "aria-setsize", "aria-posinset", "data-p-focused"];
var _hoisted_3 = ["id", "disabled", "placeholder", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ul", mergeProps({
    ref: "container",
    "class": _ctx.cx("container"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.onWrapperClick();
    }),
    onFocus: _cache[6] || (_cache[6] = function() {
      return $options.onContainerFocus && $options.onContainerFocus.apply($options, arguments);
    }),
    onBlur: _cache[7] || (_cache[7] = function() {
      return $options.onContainerBlur && $options.onContainerBlur.apply($options, arguments);
    }),
    onKeydown: _cache[8] || (_cache[8] = function() {
      return $options.onContainerKeyDown && $options.onContainerKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("container")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.modelValue, function(val, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "".concat(i, "_").concat(val),
      id: $data.id + "_chips_item_" + i,
      role: "option",
      "class": _ctx.cx("token", {
        index: i
      }),
      "aria-label": val,
      "aria-selected": true,
      "aria-setsize": _ctx.modelValue.length,
      "aria-posinset": i + 1
    }, _ctx.ptm("token"), {
      "data-p-focused": $data.focusedIndex === i
    }), [renderSlot(_ctx.$slots, "chip", {
      "class": normalizeClass(_ctx.cx("label")),
      value: val
    }, function() {
      return [createElementVNode("span", mergeProps({
        "class": _ctx.cx("label")
      }, _ctx.ptm("label")), toDisplayString(val), 17)];
    }), renderSlot(_ctx.$slots, "removetokenicon", {
      "class": normalizeClass(_ctx.cx("removeTokenIcon")),
      index: i,
      onClick: function onClick(event) {
        return $options.removeItem(event, i);
      },
      removeCallback: function removeCallback(event) {
        return $options.removeItem(event, i);
      }
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.removeTokenIcon ? "span" : "TimesCircleIcon"), mergeProps({
        "class": [_ctx.cx("removeTokenIcon"), _ctx.removeTokenIcon],
        onClick: function onClick($event) {
          return $options.removeItem($event, i);
        },
        "aria-hidden": "true"
      }, _ctx.ptm("removeTokenIcon")), null, 16, ["class", "onClick"]))];
    })], 16, _hoisted_2);
  }), 128)), createElementVNode("li", mergeProps({
    "class": _ctx.cx("inputToken"),
    role: "option"
  }, _ctx.ptm("inputToken")), [createElementVNode("input", mergeProps({
    ref: "input",
    id: _ctx.inputId,
    type: "text",
    "class": _ctx.inputClass,
    style: _ctx.inputStyle,
    disabled: _ctx.disabled || $options.maxedOut,
    placeholder: _ctx.placeholder,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function($event) {
      return $options.onFocus($event);
    }),
    onBlur: _cache[1] || (_cache[1] = function($event) {
      return $options.onBlur($event);
    }),
    onInput: _cache[2] || (_cache[2] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onKeydown: _cache[3] || (_cache[3] = function($event) {
      return $options.onKeyDown($event);
    }),
    onPaste: _cache[4] || (_cache[4] = function($event) {
      return $options.onPaste($event);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("input"))), null, 16, _hoisted_3)], 16)], 16, _hoisted_1)], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=chips.esm-Duv2ZtH1.js.map
