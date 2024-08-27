import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import { ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "./basecomponent.esm-Bypzsw1i.js";
import "axios";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
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
import "@googlemaps/markerclustererplus";
const _sfc_main = {
  __name: "executiveMessage",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    const route = useRoute(), loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eb3dea74><div class="container" data-v-eb3dea74><div class="layout-form custom-width lg aboutUs" data-v-eb3dea74><h6 class="mb-5" data-v-eb3dea74>`);
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-eb3dea74></i>  <span class="main-title normal lg" data-v-eb3dea74>${ssrInterpolate(_ctx.$t(`${unref(route).name}`))}</span></h6><div class="parag-view-f row mb-5" data-v-eb3dea74>`);
      if (unref(loading)) {
        _push(`<div class="about" data-v-eb3dea74>`);
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
      _push(`<p class="parag-view" data-v-eb3dea74></p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/executiveMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const executiveMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb3dea74"]]);
export {
  executiveMessage as default
};
//# sourceMappingURL=executiveMessage-Dqa3r-dX.js.map
