import { B as BaseStyle, D as DomHandler, Z as ZIndexUtils } from './server.mjs';
import { s as script$2 } from './basecomponent.esm-Bypzsw1i.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
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
  root: "p-blockui-container"
};
var BlockUIStyle = BaseStyle.extend({
  name: "blockui",
  classes
});
var script$1 = {
  name: "BaseBlockUI",
  "extends": script$2,
  props: {
    blocked: {
      type: Boolean,
      "default": false
    },
    fullScreen: {
      type: Boolean,
      "default": false
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    }
  },
  style: BlockUIStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "BlockUI",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["block", "unblock"],
  mask: null,
  data: function data() {
    return {
      isBlocked: false
    };
  },
  watch: {
    blocked: function blocked(newValue) {
      if (newValue === true)
        this.block();
      else
        this.unblock();
    }
  },
  mounted: function mounted() {
    if (this.blocked) {
      this.block();
    }
  },
  methods: {
    block: function block() {
      var styleClass = "p-blockui p-component-overlay p-component-overlay-enter";
      if (this.fullScreen) {
        styleClass += " p-blockui-document";
        this.mask = DomHandler.createElement("div", {
          style: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          },
          "class": !this.isUnstyled && styleClass,
          "p-bind": this.ptm("mask")
        });
        (void 0).body.appendChild(this.mask);
        DomHandler.blockBodyScroll();
        (void 0).activeElement.blur();
      } else {
        this.mask = DomHandler.createElement("div", {
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          },
          "class": !this.isUnstyled && styleClass,
          "p-bind": this.ptm("mask")
        });
        this.$refs.container.appendChild(this.mask);
      }
      if (this.autoZIndex) {
        ZIndexUtils.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
      }
      this.isBlocked = true;
      this.$emit("block");
    },
    unblock: function unblock() {
      var _this = this;
      !this.isUnstyled && DomHandler.addClass(this.mask, "p-component-overlay-leave");
      if (DomHandler.hasCSSAnimation(this.mask) > 0) {
        this.mask.addEventListener("animationend", function() {
          _this.removeMask();
        });
      } else {
        this.removeMask();
      }
    },
    removeMask: function removeMask() {
      ZIndexUtils.clear(this.mask);
      if (this.fullScreen) {
        (void 0).body.removeChild(this.mask);
        DomHandler.unblockBodyScroll();
      } else {
        this.$refs.container.removeChild(this.mask);
      }
      this.isBlocked = false;
      this.$emit("unblock");
    }
  }
};
var _hoisted_1 = ["aria-busy"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    "aria-busy": $data.isBlocked
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=blockui.esm-4H_KDG6U.mjs.map
