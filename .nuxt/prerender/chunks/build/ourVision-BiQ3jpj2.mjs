import { _ as __nuxt_component_0 } from './nuxt-link-Duvjf_-f.mjs';
import script from './skeleton.esm-D_czaoGO.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
import { u as useApi } from './useApi-DFb4zcmQ.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/server-renderer/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ufo/dist/index.mjs';
import './basecomponent.esm-Bypzsw1i.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/axios/index.js';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/h3/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/devalue/index.js';
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

const _sfc_main = {
  __name: "ourVision",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    const route = useRoute(), loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f06613a7><div class="container" data-v-f06613a7><div class="layout-form custom-width lg aboutUs" data-v-f06613a7><h6 class="mb-5" data-v-f06613a7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "main-title normal lg",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Titles.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Titles.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \xA0<i class="fas fa-chevron-left change-angle" data-v-f06613a7></i>\xA0 <span class="main-title normal lg" data-v-f06613a7>${ssrInterpolate(_ctx.$t(`${unref(route).name}`))}</span></h6><div class="parag-view row mb-5" data-v-f06613a7><h4 class="col-12 col-md-4 justify-content-center row align-items-center p-0 mb-4" data-v-f06613a7>${ssrInterpolate(_ctx.$t("OurVision.our_vision"))}</h4><div class="col-12 col-md-8 p-0 vision" data-v-f06613a7>`);
      if (unref(loading)) {
        _push(`<div class="about" data-v-f06613a7>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="parag-view row" data-v-f06613a7><h4 class="col-12 col-md-4 justify-content-center row align-items-center p-0 mb-4" data-v-f06613a7>${ssrInterpolate(_ctx.$t("OurVision.our_msg"))}</h4><div class="col-12 col-md-8 p-0 message" data-v-f06613a7>`);
      if (unref(loading)) {
        _push(`<div class="about" data-v-f06613a7>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-1"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ourVision.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourVision = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f06613a7"]]);

export { ourVision as default };
//# sourceMappingURL=ourVision-BiQ3jpj2.mjs.map
