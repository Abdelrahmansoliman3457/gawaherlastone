import { B as BaseStyle, O as ObjectUtils } from "../server.mjs";
import { s as script$2 } from "./basecomponent.esm-Bypzsw1i.js";
import { openBlock, createElementBlock, mergeProps, renderSlot, createTextVNode, toDisplayString } from "vue";
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
    var props = _ref.props, instance = _ref.instance;
    return ["p-badge p-component", {
      "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      "p-badge-dot": ObjectUtils.isEmpty(props.value) && !instance.$slots["default"],
      "p-badge-lg": props.size === "large",
      "p-badge-xl": props.size === "xlarge",
      "p-badge-info": props.severity === "info",
      "p-badge-success": props.severity === "success",
      "p-badge-warning": props.severity === "warning",
      "p-badge-danger": props.severity === "danger",
      "p-badge-secondary": props.severity === "secondary",
      "p-badge-contrast": props.severity === "contrast"
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: "badge",
  classes
});
var script$1 = {
  name: "BaseBadge",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": null
    },
    severity: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": null
    }
  },
  style: BadgeStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Badge",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(toDisplayString(_ctx.value), 1)];
  })], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=badge.esm-DqS6Ol5z.js.map
