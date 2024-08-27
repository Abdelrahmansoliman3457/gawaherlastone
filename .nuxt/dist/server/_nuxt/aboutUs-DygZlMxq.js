import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "aboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    const route = useRoute();
    const categories = ref([]), loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-d39389e0><div class="layout-form custom-width lg aboutUs" data-v-d39389e0><h6 class="mb-5" data-v-d39389e0>`);
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-d39389e0></i>  <span class="main-title normal lg" data-v-d39389e0>${ssrInterpolate(_ctx.$t(`${unref(route).name}`))}</span></h6><div class="about mb-5" data-v-d39389e0></div>`);
      if (unref(loading)) {
        _push(`<div class="about mb-5" data-v-d39389e0>`);
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
      _push(`<div class="section_2 row justify-content-between" data-v-d39389e0>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-d39389e0><div class="col-12 col-md-4 mb-4" data-v-d39389e0>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-d39389e0>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-d39389e0>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(categories), (cat) => {
        _push(`<div class="col-12 col-md-3 mb-4" data-v-d39389e0><div class="d-flex" data-v-d39389e0><div data-v-d39389e0><img${ssrRenderAttr("src", cat.image)} alt="" data-v-d39389e0></div><div class="row sub-sec" data-v-d39389e0><p class="main-title normal" data-v-d39389e0>${ssrInterpolate(cat.name)}</p><div class="row gap-3" data-v-d39389e0><!--[-->`);
        ssrRenderList(cat.brands, (brand) => {
          _push(`<a data-v-d39389e0>${ssrInterpolate(brand)}</a>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d39389e0"]]);
export {
  aboutUs as default
};
//# sourceMappingURL=aboutUs-DygZlMxq.js.map
