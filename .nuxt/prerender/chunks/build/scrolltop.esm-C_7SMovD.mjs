import { s as script$2 } from './index.esm-CS0B6Jh6.mjs';
import { B as BaseStyle, Z as ZIndexUtils, D as DomHandler } from './server.mjs';
import { s as script$3 } from './basecomponent.esm-Bypzsw1i.mjs';
import { openBlock, createBlock, Transition, mergeProps, withCtx, createElementBlock, renderSlot, normalizeClass, resolveDynamicComponent, createCommentVNode } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
import './baseicon.esm-DKzT45co.mjs';
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
    return ["p-scrolltop p-link p-component", {
      "p-scrolltop-sticky": props.target !== "window"
    }];
  },
  icon: "p-scrolltop-icon"
};
var ScrollTopStyle = BaseStyle.extend({
  name: "scrolltop",
  classes
});
var script$1 = {
  name: "BaseScrollTop",
  "extends": script$3,
  props: {
    target: {
      type: String,
      "default": "window"
    },
    threshold: {
      type: Number,
      "default": 400
    },
    icon: {
      type: String,
      "default": void 0
    },
    behavior: {
      type: String,
      "default": "smooth"
    }
  },
  style: ScrollTopStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ScrollTop",
  "extends": script$1,
  inheritAttrs: false,
  scrollListener: null,
  container: null,
  data: function data() {
    return {
      visible: false
    };
  },
  mounted: function mounted() {
    if (this.target === "window")
      this.bindDocumentScrollListener();
    else if (this.target === "parent")
      this.bindParentScrollListener();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.target === "window")
      this.unbindDocumentScrollListener();
    else if (this.target === "parent")
      this.unbindParentScrollListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.overlay = null;
    }
  },
  methods: {
    onClick: function onClick() {
      var scrollElement = this.target === "window" ? void 0 : this.$el.parentElement;
      scrollElement.scroll({
        top: 0,
        behavior: this.behavior
      });
    },
    checkVisibility: function checkVisibility(scrollY) {
      if (scrollY > this.threshold)
        this.visible = true;
      else
        this.visible = false;
    },
    bindParentScrollListener: function bindParentScrollListener() {
      var _this = this;
      this.scrollListener = function() {
        _this.checkVisibility(_this.$el.parentElement.scrollTop);
      };
      this.$el.parentElement.addEventListener("scroll", this.scrollListener);
    },
    bindDocumentScrollListener: function bindDocumentScrollListener() {
      var _this2 = this;
      this.scrollListener = function() {
        _this2.checkVisibility(DomHandler.getWindowScrollTop());
      };
      (void 0).addEventListener("scroll", this.scrollListener);
    },
    unbindParentScrollListener: function unbindParentScrollListener() {
      if (this.scrollListener) {
        this.$el.parentElement.removeEventListener("scroll", this.scrollListener);
        this.scrollListener = null;
      }
    },
    unbindDocumentScrollListener: function unbindDocumentScrollListener() {
      if (this.scrollListener) {
        (void 0).removeEventListener("scroll", this.scrollListener);
        this.scrollListener = null;
      }
    },
    onEnter: function onEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    containerRef: function containerRef(el) {
      this.container = el;
    }
  },
  computed: {
    scrollTopAriaLabel: function scrollTopAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : void 0;
    }
  },
  components: {
    ChevronUpIcon: script$2
  }
};
var _hoisted_1 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-scrolltop",
    appear: "",
    onEnter: $options.onEnter,
    onAfterLeave: $options.onAfterLeave
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [$data.visible ? (openBlock(), createElementBlock("button", mergeProps({
        key: 0,
        ref: $options.containerRef,
        "class": _ctx.cx("root"),
        onClick: _cache[0] || (_cache[0] = function() {
          return $options.onClick && $options.onClick.apply($options, arguments);
        }),
        type: "button",
        "aria-label": $options.scrollTopAriaLabel
      }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(_ctx.cx("icon"))
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : "ChevronUpIcon"), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      })], 16, _hoisted_1)) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16, ["onEnter", "onAfterLeave"]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=scrolltop.esm-C_7SMovD.mjs.map
