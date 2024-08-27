import { mergeProps, useSSRContext } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "customLayout" }, _attrs))}><p>custom Layout 00000000</p><p>${ssrInterpolate(_ctx.$t("home"))}</p><div class="drop-down-content"><button class="web-lang active"> \u0627\u0644\u0639\u0631\u0628\u064A\u0629 </button><button class="web-lang">\u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629</button></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=custom-c3tP8XcR.mjs.map
