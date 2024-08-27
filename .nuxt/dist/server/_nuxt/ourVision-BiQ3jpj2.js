import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import { ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "./basecomponent.esm-Bypzsw1i.js";
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
import "axios";
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-f06613a7></i>  <span class="main-title normal lg" data-v-f06613a7>${ssrInterpolate(_ctx.$t(`${unref(route).name}`))}</span></h6><div class="parag-view row mb-5" data-v-f06613a7><h4 class="col-12 col-md-4 justify-content-center row align-items-center p-0 mb-4" data-v-f06613a7>${ssrInterpolate(_ctx.$t("OurVision.our_vision"))}</h4><div class="col-12 col-md-8 p-0 vision" data-v-f06613a7>`);
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
export {
  ourVision as default
};
//# sourceMappingURL=ourVision-BiQ3jpj2.js.map
