import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import { ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-d2e9bd21></i>  <span class="main-title normal lg" data-v-d2e9bd21>${ssrInterpolate(_ctx.$t(`Titles.our_exp`))}</span></h6>`);
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
        _push(`<div class="col-12 col-md-4 mb-4 d-flex" data-v-d2e9bd21><div class="card_view" data-v-d2e9bd21><h6 class="mb-4 text-center" data-v-d2e9bd21>${ssrInterpolate(i.title)}</h6><div class="parag-view" data-v-d2e9bd21>${i.description ?? ""}</div></div></div>`);
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
export {
  ourExperience as default
};
//# sourceMappingURL=ourExperience-DKzju5Aw.js.map
