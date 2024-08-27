import { _ as __nuxt_component_0 } from './nuxt-link-Duvjf_-f.mjs';
import script from './skeleton.esm-D_czaoGO.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
import { u as useApi } from './useApi-DFb4zcmQ.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "ourExperience",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    const services = ref([]), loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d2e9bd21><div class="container" data-v-d2e9bd21><div class="layout-form custom-width lg aboutUs" data-v-d2e9bd21><h6 class="mb-5" data-v-d2e9bd21>`);
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
      _push(` \xA0<i class="fas fa-chevron-left change-angle" data-v-d2e9bd21></i>\xA0 <span class="main-title normal lg" data-v-d2e9bd21>${ssrInterpolate(_ctx.$t(`Titles.our_exp`))}</span></h6>`);
      if (unref(loading)) {
        _push(`<div data-v-d2e9bd21>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-3 w-25"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(`<br data-v-d2e9bd21>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-3 w-25"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(`<br data-v-d2e9bd21>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-3 w-25"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "1rem",
          class: "mb-2"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="main-parag mb-4" data-v-d2e9bd21></div>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-d2e9bd21><div class="col-12 col-md-4 mb-4" data-v-d2e9bd21>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-d2e9bd21>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-d2e9bd21>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cards_view row" data-v-d2e9bd21><!--[-->`);
      ssrRenderList(unref(services), (i) => {
        var _a;
        _push(`<div class="col-12 col-md-4 mb-4 d-flex" data-v-d2e9bd21><div class="card_view" data-v-d2e9bd21><h6 class="mb-4 text-center" data-v-d2e9bd21>${ssrInterpolate(i.title)}</h6><div class="parag-view" data-v-d2e9bd21>${(_a = i.description) != null ? _a : ""}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ourExperience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourExperience = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2e9bd21"]]);

export { ourExperience as default };
//# sourceMappingURL=ourExperience-DKzju5Aw.mjs.map
