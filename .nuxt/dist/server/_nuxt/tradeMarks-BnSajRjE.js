import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "tradeMarks",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    const route = useRoute();
    const brands = ref([]), loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-27302571><div class="layout-form custom-width lg trade_marks" data-v-27302571><h6 class="mb-5" data-v-27302571>`);
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-27302571></i>  <span class="main-title normal lg" data-v-27302571>${ssrInterpolate(_ctx.$t(`${unref(route).name}`))}</span></h6>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-27302571><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="col-12 col-md-3 mb-4" data-v-27302571>`);
          _push(ssrRenderComponent(_component_Skeleton, { height: "12rem" }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row" data-v-27302571><!--[-->`);
      ssrRenderList(unref(brands), (brand) => {
        _push(`<div class="col-md-3 col-12 mb-4" data-v-27302571>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/trade_mark" + brand.id,
          class: "d-block div-img"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", brand.logo)} alt="image" data-v-27302571${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: brand.logo,
                  alt: "image"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tradeMarks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tradeMarks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27302571"]]);
export {
  tradeMarks as default
};
//# sourceMappingURL=tradeMarks-BnSajRjE.js.map
