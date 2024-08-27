import { s as script$2 } from './basecomponent.esm-Bypzsw1i.mjs';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, toDisplayString, createCommentVNode } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
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

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-knob p-component", {
      "p-disabled": props.disabled
    }];
  },
  range: "p-knob-range",
  value: "p-knob-value",
  label: "p-knob-text"
};
var KnobStyle = BaseStyle.extend({
  name: "knob",
  classes
});
var script$1 = {
  name: "BaseKnob",
  "extends": script$2,
  props: {
    modelValue: {
      type: Number,
      "default": null
    },
    size: {
      type: Number,
      "default": 100
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 1
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    valueColor: {
      type: String,
      "default": "var(--primary-color, Black)"
    },
    rangeColor: {
      type: String,
      "default": "var(--surface-border, LightGray)"
    },
    textColor: {
      type: String,
      "default": "var(--text-color-secondary, Black)"
    },
    strokeWidth: {
      type: Number,
      "default": 14
    },
    showValue: {
      type: Boolean,
      "default": true
    },
    valueTemplate: {
      type: [String, Function],
      "default": "{value}"
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
  style: KnobStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var Math_PI = 3.14159265358979;
var script = {
  name: "Knob",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change"],
  data: function data() {
    return {
      radius: 40,
      midX: 50,
      midY: 50,
      minRadians: 4 * Math_PI / 3,
      maxRadians: -Math_PI / 3
    };
  },
  methods: {
    updateValue: function updateValue(offsetX, offsetY) {
      var dx = offsetX - this.size / 2;
      var dy = this.size / 2 - offsetY;
      var angle = Math.atan2(dy, dx);
      var start = -Math_PI / 2 - Math_PI / 6;
      this.updateModel(angle, start);
    },
    updateModel: function updateModel(angle, start) {
      var mappedValue;
      if (angle > this.maxRadians)
        mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
      else if (angle < start)
        mappedValue = this.mapRange(angle + 2 * Math_PI, this.minRadians, this.maxRadians, this.min, this.max);
      else
        return;
      var newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
      this.$emit("update:modelValue", newValue);
      this.$emit("change", newValue);
    },
    updateModelValue: function updateModelValue(newValue) {
      if (newValue > this.max)
        this.$emit("update:modelValue", this.max);
      else if (newValue < this.min)
        this.$emit("update:modelValue", this.min);
      else
        this.$emit("update:modelValue", newValue);
    },
    mapRange: function mapRange(x, inMin, inMax, outMin, outMax) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },
    onClick: function onClick(event) {
      if (!this.disabled && !this.readonly) {
        this.updateValue(event.offsetX, event.offsetY);
      }
    },
    onMouseDown: function onMouseDown(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).addEventListener("mousemove", this.onMouseMove);
        (void 0).addEventListener("mouseup", this.onMouseUp);
        event.preventDefault();
      }
    },
    onMouseUp: function onMouseUp(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).removeEventListener("mousemove", this.onMouseMove);
        (void 0).removeEventListener("mouseup", this.onMouseUp);
        event.preventDefault();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).addEventListener("touchmove", this.onTouchMove);
        (void 0).addEventListener("touchend", this.onTouchEnd);
        event.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).removeEventListener("touchmove", this.onTouchMove);
        (void 0).removeEventListener("touchend", this.onTouchEnd);
        event.preventDefault();
      }
    },
    onMouseMove: function onMouseMove(event) {
      if (!this.disabled && !this.readonly) {
        this.updateValue(event.offsetX, event.offsetY);
        event.preventDefault();
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.disabled && !this.readonly && event.touches.length == 1) {
        var rect = this.$el.getBoundingClientRect();
        var touch = event.targetTouches.item(0);
        var offsetX = touch.clientX - rect.left;
        var offsetY = touch.clientY - rect.top;
        this.updateValue(offsetX, offsetY);
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.disabled && !this.readonly) {
        switch (event.code) {
          case "ArrowRight":
          case "ArrowUp": {
            event.preventDefault();
            this.updateModelValue(this.modelValue + this.step);
            break;
          }
          case "ArrowLeft":
          case "ArrowDown": {
            event.preventDefault();
            this.updateModelValue(this.modelValue - this.step);
            break;
          }
          case "Home": {
            event.preventDefault();
            this.$emit("update:modelValue", this.min);
            break;
          }
          case "End": {
            event.preventDefault();
            this.$emit("update:modelValue", this.max);
            break;
          }
          case "PageUp": {
            event.preventDefault();
            this.updateModelValue(this.modelValue + 10);
            break;
          }
          case "PageDown": {
            event.preventDefault();
            this.updateModelValue(this.modelValue - 10);
            break;
          }
        }
      }
    }
  },
  computed: {
    rangePath: function rangePath() {
      return "M ".concat(this.minX, " ").concat(this.minY, " A ").concat(this.radius, " ").concat(this.radius, " 0 1 1 ").concat(this.maxX, " ").concat(this.maxY);
    },
    valuePath: function valuePath() {
      return "M ".concat(this.zeroX, " ").concat(this.zeroY, " A ").concat(this.radius, " ").concat(this.radius, " 0 ").concat(this.largeArc, " ").concat(this.sweep, " ").concat(this.valueX, " ").concat(this.valueY);
    },
    zeroRadians: function zeroRadians() {
      if (this.min > 0 && this.max > 0)
        return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
      else
        return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    },
    valueRadians: function valueRadians() {
      return this.mapRange(this.modelValue, this.min, this.max, this.minRadians, this.maxRadians);
    },
    minX: function minX() {
      return this.midX + Math.cos(this.minRadians) * this.radius;
    },
    minY: function minY() {
      return this.midY - Math.sin(this.minRadians) * this.radius;
    },
    maxX: function maxX() {
      return this.midX + Math.cos(this.maxRadians) * this.radius;
    },
    maxY: function maxY() {
      return this.midY - Math.sin(this.maxRadians) * this.radius;
    },
    zeroX: function zeroX() {
      return this.midX + Math.cos(this.zeroRadians) * this.radius;
    },
    zeroY: function zeroY() {
      return this.midY - Math.sin(this.zeroRadians) * this.radius;
    },
    valueX: function valueX() {
      return this.midX + Math.cos(this.valueRadians) * this.radius;
    },
    valueY: function valueY() {
      return this.midY - Math.sin(this.valueRadians) * this.radius;
    },
    largeArc: function largeArc() {
      return Math.abs(this.zeroRadians - this.valueRadians) < Math_PI ? 0 : 1;
    },
    sweep: function sweep() {
      return this.valueRadians > this.zeroRadians ? 0 : 1;
    },
    valueToDisplay: function valueToDisplay() {
      if (typeof this.valueTemplate === "string") {
        return this.valueTemplate.replace(/{value}/g, this.modelValue);
      } else {
        return this.valueTemplate(this.modelValue);
      }
    }
  }
};
var _hoisted_1 = ["width", "height", "tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-labelledby", "aria-label"];
var _hoisted_2 = ["d", "stroke-width", "stroke"];
var _hoisted_3 = ["d", "stroke-width", "stroke"];
var _hoisted_4 = ["fill"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(), createElementBlock("svg", mergeProps({
    viewBox: "0 0 100 100",
    role: "slider",
    width: _ctx.size,
    height: _ctx.size,
    tabindex: _ctx.readonly || _ctx.disabled ? -1 : _ctx.tabindex,
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-valuenow": _ctx.modelValue,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onMousedown: _cache[2] || (_cache[2] = function() {
      return $options.onMouseDown && $options.onMouseDown.apply($options, arguments);
    }),
    onMouseup: _cache[3] || (_cache[3] = function() {
      return $options.onMouseUp && $options.onMouseUp.apply($options, arguments);
    }),
    onTouchstartPassive: _cache[4] || (_cache[4] = function() {
      return $options.onTouchStart && $options.onTouchStart.apply($options, arguments);
    }),
    onTouchend: _cache[5] || (_cache[5] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    })
  }, _ctx.ptm("svg")), [createElementVNode("path", mergeProps({
    d: $options.rangePath,
    "stroke-width": _ctx.strokeWidth,
    stroke: _ctx.rangeColor,
    "class": _ctx.cx("range")
  }, _ctx.ptm("range")), null, 16, _hoisted_2), createElementVNode("path", mergeProps({
    d: $options.valuePath,
    "stroke-width": _ctx.strokeWidth,
    stroke: _ctx.valueColor,
    "class": _ctx.cx("value")
  }, _ctx.ptm("value")), null, 16, _hoisted_3), _ctx.showValue ? (openBlock(), createElementBlock("text", mergeProps({
    key: 0,
    x: 50,
    y: 57,
    "text-anchor": "middle",
    fill: _ctx.textColor,
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), toDisplayString($options.valueToDisplay), 17, _hoisted_4)) : createCommentVNode("", true)], 16, _hoisted_1))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=knob.esm-CzoLme6w.mjs.map
