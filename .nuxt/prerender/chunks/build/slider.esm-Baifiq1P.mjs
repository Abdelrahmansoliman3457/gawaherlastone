import { B as BaseStyle, D as DomHandler } from './server.mjs';
import { s as script$2 } from './basecomponent.esm-Bypzsw1i.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, createCommentVNode } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/h3/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/devalue/index.js';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ufo/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/server-renderer/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/destr/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/hookable/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/klona/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/scule/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/defu/dist/defu.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ohash/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/pathe/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/unhead/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/@unhead/shared/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/unctx/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/pinia-plugin-persistedstate/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue-i18n/dist/vue-i18n.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/@googlemaps/markerclustererplus/dist/index.umd.js';

var inlineStyles = {
  handle: {
    position: "absolute"
  },
  range: {
    position: "absolute"
  }
};
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-slider p-component", {
      "p-disabled": props.disabled,
      "p-slider-horizontal": props.orientation === "horizontal",
      "p-slider-vertical": props.orientation === "vertical"
    }];
  },
  range: "p-slider-range",
  handle: "p-slider-handle"
};
var SliderStyle = BaseStyle.extend({
  name: "slider",
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSlider",
  "extends": script$2,
  props: {
    modelValue: [Number, Array],
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    orientation: {
      type: String,
      "default": "horizontal"
    },
    step: {
      type: Number,
      "default": null
    },
    range: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
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
  style: SliderStyle,
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
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var script = {
  name: "Slider",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "slideend"],
  dragging: false,
  handleIndex: null,
  initX: null,
  initY: null,
  barWidth: null,
  barHeight: null,
  dragListener: null,
  dragEndListener: null,
  beforeUnmount: function beforeUnmount() {
    this.unbindDragListeners();
  },
  methods: {
    updateDomData: function updateDomData() {
      var rect = this.$el.getBoundingClientRect();
      this.initX = rect.left + DomHandler.getWindowScrollLeft();
      this.initY = rect.top + DomHandler.getWindowScrollTop();
      this.barWidth = this.$el.offsetWidth;
      this.barHeight = this.$el.offsetHeight;
    },
    setValue: function setValue(event) {
      var handleValue;
      var pageX = event.touches ? event.touches[0].pageX : event.pageX;
      var pageY = event.touches ? event.touches[0].pageY : event.pageY;
      if (this.orientation === "horizontal")
        handleValue = (pageX - this.initX) * 100 / this.barWidth;
      else
        handleValue = (this.initY + this.barHeight - pageY) * 100 / this.barHeight;
      var newValue = (this.max - this.min) * (handleValue / 100) + this.min;
      if (this.step) {
        var oldValue = this.range ? this.value[this.handleIndex] : this.value;
        var diff = newValue - oldValue;
        if (diff < 0)
          newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
        else if (diff > 0)
          newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
      } else {
        newValue = Math.floor(newValue);
      }
      this.updateModel(event, newValue);
    },
    updateModel: function updateModel(event, value2) {
      var newValue = parseFloat(value2.toFixed(10));
      var modelValue;
      if (this.range) {
        modelValue = this.value ? _toConsumableArray(this.value) : [];
        if (this.handleIndex == 0) {
          if (newValue < this.min)
            newValue = this.min;
          else if (newValue >= this.max)
            newValue = this.max;
          modelValue[0] = newValue;
        } else {
          if (newValue > this.max)
            newValue = this.max;
          else if (newValue <= this.min)
            newValue = this.min;
          modelValue[1] = newValue;
        }
      } else {
        if (newValue < this.min)
          newValue = this.min;
        else if (newValue > this.max)
          newValue = this.max;
        modelValue = newValue;
      }
      this.$emit("update:modelValue", modelValue);
      this.$emit("change", modelValue);
    },
    onDragStart: function onDragStart(event, index) {
      if (this.disabled) {
        return;
      }
      this.$el.setAttribute("data-p-sliding", true);
      this.dragging = true;
      this.updateDomData();
      if (this.range && this.value[0] === this.max) {
        this.handleIndex = 0;
      } else {
        this.handleIndex = index;
      }
      event.currentTarget.focus();
      event.preventDefault();
    },
    onDrag: function onDrag(event) {
      if (this.dragging) {
        this.setValue(event);
        event.preventDefault();
      }
    },
    onDragEnd: function onDragEnd(event) {
      if (this.dragging) {
        this.dragging = false;
        this.$el.setAttribute("data-p-sliding", false);
        this.$emit("slideend", {
          originalEvent: event,
          value: this.value
        });
      }
    },
    onBarClick: function onBarClick(event) {
      if (this.disabled) {
        return;
      }
      if (DomHandler.getAttribute(event.target, "data-pc-section") !== "handle") {
        this.updateDomData();
        this.setValue(event);
      }
    },
    onMouseDown: function onMouseDown(event, index) {
      this.bindDragListeners();
      this.onDragStart(event, index);
    },
    onKeyDown: function onKeyDown(event, index) {
      this.handleIndex = index;
      switch (event.code) {
        case "ArrowDown":
        case "ArrowLeft":
          this.decrementValue(event, index);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowRight":
          this.incrementValue(event, index);
          event.preventDefault();
          break;
        case "PageDown":
          this.decrementValue(event, index, true);
          event.preventDefault();
          break;
        case "PageUp":
          this.incrementValue(event, index, true);
          event.preventDefault();
          break;
        case "Home":
          this.updateModel(event, this.min);
          event.preventDefault();
          break;
        case "End":
          this.updateModel(event, this.max);
          event.preventDefault();
          break;
      }
    },
    decrementValue: function decrementValue(event, index) {
      var pageKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var newValue;
      if (this.range) {
        if (this.step)
          newValue = this.value[index] - this.step;
        else
          newValue = this.value[index] - 1;
      } else {
        if (this.step)
          newValue = this.value - this.step;
        else if (!this.step && pageKey)
          newValue = this.value - 10;
        else
          newValue = this.value - 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    incrementValue: function incrementValue(event, index) {
      var pageKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var newValue;
      if (this.range) {
        if (this.step)
          newValue = this.value[index] + this.step;
        else
          newValue = this.value[index] + 1;
      } else {
        if (this.step)
          newValue = this.value + this.step;
        else if (!this.step && pageKey)
          newValue = this.value + 10;
        else
          newValue = this.value + 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    bindDragListeners: function bindDragListeners() {
      if (!this.dragListener) {
        this.dragListener = this.onDrag.bind(this);
        (void 0).addEventListener("mousemove", this.dragListener);
      }
      if (!this.dragEndListener) {
        this.dragEndListener = this.onDragEnd.bind(this);
        (void 0).addEventListener("mouseup", this.dragEndListener);
      }
    },
    unbindDragListeners: function unbindDragListeners() {
      if (this.dragListener) {
        (void 0).removeEventListener("mousemove", this.dragListener);
        this.dragListener = null;
      }
      if (this.dragEndListener) {
        (void 0).removeEventListener("mouseup", this.dragEndListener);
        this.dragEndListener = null;
      }
    }
  },
  computed: {
    value: function value() {
      var _this$modelValue3;
      if (this.range) {
        var _this$modelValue$, _this$modelValue, _this$modelValue$2, _this$modelValue2;
        return [(_this$modelValue$ = (_this$modelValue = this.modelValue) === null || _this$modelValue === void 0 ? void 0 : _this$modelValue[0]) !== null && _this$modelValue$ !== void 0 ? _this$modelValue$ : this.min, (_this$modelValue$2 = (_this$modelValue2 = this.modelValue) === null || _this$modelValue2 === void 0 ? void 0 : _this$modelValue2[1]) !== null && _this$modelValue$2 !== void 0 ? _this$modelValue$2 : this.max];
      }
      return (_this$modelValue3 = this.modelValue) !== null && _this$modelValue3 !== void 0 ? _this$modelValue3 : this.min;
    },
    horizontal: function horizontal() {
      return this.orientation === "horizontal";
    },
    vertical: function vertical() {
      return this.orientation === "vertical";
    },
    rangeStyle: function rangeStyle() {
      if (this.range) {
        var rangeSliderWidth = this.rangeEndPosition > this.rangeStartPosition ? this.rangeEndPosition - this.rangeStartPosition : this.rangeStartPosition - this.rangeEndPosition;
        var rangeSliderPosition = this.rangeEndPosition > this.rangeStartPosition ? this.rangeStartPosition : this.rangeEndPosition;
        if (this.horizontal)
          return {
            left: rangeSliderPosition + "%",
            width: rangeSliderWidth + "%"
          };
        else
          return {
            bottom: rangeSliderPosition + "%",
            height: rangeSliderWidth + "%"
          };
      } else {
        if (this.horizontal)
          return {
            width: this.handlePosition + "%"
          };
        else
          return {
            height: this.handlePosition + "%"
          };
      }
    },
    handleStyle: function handleStyle() {
      if (this.horizontal)
        return {
          left: this.handlePosition + "%"
        };
      else
        return {
          bottom: this.handlePosition + "%"
        };
    },
    handlePosition: function handlePosition() {
      if (this.value < this.min)
        return 0;
      else if (this.value > this.max)
        return 100;
      else
        return (this.value - this.min) * 100 / (this.max - this.min);
    },
    rangeStartPosition: function rangeStartPosition() {
      if (this.value && this.value[0])
        return (this.value[0] < this.min ? 0 : this.value[0] - this.min) * 100 / (this.max - this.min);
      else
        return 0;
    },
    rangeEndPosition: function rangeEndPosition() {
      if (this.value && this.value.length === 2)
        return (this.value[1] > this.max ? 100 : this.value[1] - this.min) * 100 / (this.max - this.min);
      else
        return 100;
    },
    rangeStartHandleStyle: function rangeStartHandleStyle() {
      if (this.horizontal)
        return {
          left: this.rangeStartPosition + "%"
        };
      else
        return {
          bottom: this.rangeStartPosition + "%"
        };
    },
    rangeEndHandleStyle: function rangeEndHandleStyle() {
      if (this.horizontal)
        return {
          left: this.rangeEndPosition + "%"
        };
      else
        return {
          bottom: this.rangeEndPosition + "%"
        };
    }
  }
};
var _hoisted_1 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation"];
var _hoisted_2 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation"];
var _hoisted_3 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onClick: _cache[15] || (_cache[15] = function() {
      return $options.onBarClick && $options.onBarClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root"), {
    "data-p-sliding": false
  }), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("range"),
    style: [_ctx.sx("range"), $options.rangeStyle]
  }, _ctx.ptm("range")), null, 16), !_ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.handleStyle],
    onTouchstartPassive: _cache[0] || (_cache[0] = function($event) {
      return $options.onDragStart($event);
    }),
    onTouchmovePassive: _cache[1] || (_cache[1] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[2] || (_cache[2] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[3] || (_cache[3] = function($event) {
      return $options.onMouseDown($event);
    }),
    onKeydown: _cache[4] || (_cache[4] = function($event) {
      return $options.onKeyDown($event);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.modelValue,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("handle")), null, 16, _hoisted_1)) : createCommentVNode("", true), _ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.rangeStartHandleStyle],
    onTouchstartPassive: _cache[5] || (_cache[5] = function($event) {
      return $options.onDragStart($event, 0);
    }),
    onTouchmovePassive: _cache[6] || (_cache[6] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[7] || (_cache[7] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[8] || (_cache[8] = function($event) {
      return $options.onMouseDown($event, 0);
    }),
    onKeydown: _cache[9] || (_cache[9] = function($event) {
      return $options.onKeyDown($event, 0);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.modelValue ? _ctx.modelValue[0] : null,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("startHandler")), null, 16, _hoisted_2)) : createCommentVNode("", true), _ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.rangeEndHandleStyle],
    onTouchstartPassive: _cache[10] || (_cache[10] = function($event) {
      return $options.onDragStart($event, 1);
    }),
    onTouchmovePassive: _cache[11] || (_cache[11] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[12] || (_cache[12] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[13] || (_cache[13] = function($event) {
      return $options.onMouseDown($event, 1);
    }),
    onKeydown: _cache[14] || (_cache[14] = function($event) {
      return $options.onKeyDown($event, 1);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.modelValue ? _ctx.modelValue[1] : null,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("endHandler")), null, 16, _hoisted_3)) : createCommentVNode("", true)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=slider.esm-Baifiq1P.mjs.map
