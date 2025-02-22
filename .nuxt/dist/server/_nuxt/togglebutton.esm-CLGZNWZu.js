import { B as BaseStyle, O as ObjectUtils, R as Ripple } from "../server.mjs";
import { s as script$2 } from "./basecomponent.esm-Bypzsw1i.js";
import { resolveDirective, openBlock, createElementBlock, mergeProps, createElementVNode, withDirectives, renderSlot, normalizeClass, createCommentVNode, toDisplayString } from "vue";
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
    return ["p-togglebutton p-component", {
      "p-disabled": props.disabled,
      "p-highlight": instance.active,
      "p-invalid": props.invalid
    }];
  },
  input: "p-togglebutton-input",
  box: function box(_ref2) {
    var instance = _ref2.instance;
    return ["p-button p-component", {
      "p-button-icon-only": instance.hasIcon && !instance.hasLabel
    }];
  },
  icon: function icon(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-button-icon", {
      "p-button-icon-left": props.iconPos === "left" && instance.label,
      "p-button-icon-right": props.iconPos === "right" && instance.label
    }];
  },
  label: "p-button-label"
};
var ToggleButtonStyle = BaseStyle.extend({
  name: "togglebutton",
  classes
});
var script$1 = {
  name: "BaseToggleButton",
  "extends": script$2,
  props: {
    modelValue: Boolean,
    onIcon: String,
    offIcon: String,
    onLabel: {
      type: String,
      "default": "Yes"
    },
    offLabel: {
      type: String,
      "default": "No"
    },
    iconPos: {
      type: String,
      "default": "left"
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
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
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: ToggleButtonStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ToggleButton",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur"],
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active,
          disabled: this.disabled
        }
      });
    },
    onChange: function onChange(event) {
      if (!this.disabled && !this.readonly) {
        this.$emit("update:modelValue", !this.modelValue);
        this.$emit("change", event);
      }
    },
    onFocus: function onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.$emit("blur", event);
    }
  },
  computed: {
    active: function active() {
      return this.modelValue === true;
    },
    hasLabel: function hasLabel() {
      return ObjectUtils.isNotEmpty(this.onLabel) && ObjectUtils.isNotEmpty(this.offLabel);
    },
    hasIcon: function hasIcon() {
      return this.$slots.icon || this.onIcon && this.offIcon;
    },
    label: function label() {
      return this.hasLabel ? this.modelValue ? this.onLabel : this.offLabel : "&nbsp;";
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["data-p-highlight", "data-p-disabled"];
var _hoisted_2 = ["id", "value", "checked", "tabindex", "disabled", "readonly", "aria-labelledby", "aria-label", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, $options.getPTOptions("root"), {
    "data-p-highlight": $options.active,
    "data-p-disabled": _ctx.disabled
  }), [createElementVNode("input", mergeProps({
    id: _ctx.inputId,
    type: "checkbox",
    role: "switch",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.modelValue,
    checked: $options.active,
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onChange: _cache[2] || (_cache[2] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, $options.getPTOptions("input")), null, 16, _hoisted_2), withDirectives((openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("box")
  }, $options.getPTOptions("box")), [renderSlot(_ctx.$slots, "icon", {
    value: _ctx.modelValue,
    "class": normalizeClass(_ctx.cx("icon"))
  }, function() {
    return [_ctx.onIcon || _ctx.offIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("icon"), _ctx.modelValue ? _ctx.onIcon : _ctx.offIcon]
    }, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true)];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, $options.getPTOptions("label")), toDisplayString($options.label), 17)], 16)), [[_directive_ripple]])], 16, _hoisted_1);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=togglebutton.esm-CLGZNWZu.js.map
