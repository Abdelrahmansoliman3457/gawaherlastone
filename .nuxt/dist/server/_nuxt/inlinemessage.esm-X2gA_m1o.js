import { s as script$3 } from "./index.esm-D9S7AqLP.js";
import { s as script$2, a as script$4 } from "./index.esm-CWvqd6S2.js";
import { s as script$5 } from "./index.esm-Deajh7Nl.js";
import { s as script$6 } from "./basecomponent.esm-Bypzsw1i.js";
import { B as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot, createBlock, resolveDynamicComponent, createElementVNode, createTextVNode } from "vue";
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
    var props = _ref.props, instance = _ref.instance;
    return ["p-inline-message p-component p-inline-message-" + props.severity, {
      "p-inline-message-icon-only": !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ["p-inline-message-icon", props.icon];
  },
  text: "p-inline-message-text"
};
var InlineMessageStyle = BaseStyle.extend({
  name: "inlinemessage",
  classes
});
var script$1 = {
  name: "BaseInlineMessage",
  "extends": script$6,
  props: {
    severity: {
      type: String,
      "default": "error"
    },
    icon: {
      type: String,
      "default": void 0
    }
  },
  style: InlineMessageStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InlineMessage",
  "extends": script$1,
  inheritAttrs: false,
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$2,
        success: script$3,
        warn: script$4,
        error: script$5
      }[this.severity];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "icon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(" ")];
  })], 16)], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=inlinemessage.esm-X2gA_m1o.js.map
