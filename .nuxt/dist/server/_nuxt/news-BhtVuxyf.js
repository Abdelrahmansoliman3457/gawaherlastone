import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "news",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    const loading = ref(true);
    useApi();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-f7b59572><div class="layout-form custom-width lg aboutUs" data-v-f7b59572><h6 class="mb-5" data-v-f7b59572>`);
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-f7b59572></i>  <span class="main-title normal lg" data-v-f7b59572>${ssrInterpolate(_ctx.$t(`Titles.news`))}</span></h6><div class="section_2 row justify-content-center mb-4" data-v-f7b59572><div class="news row" data-v-f7b59572>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-f7b59572><div class="col-12 col-md-4 mb-4" data-v-f7b59572>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-f7b59572>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-f7b59572>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(posts), (i) => {
        _push(`<div class="col-12 col-md-4 mb-4" data-v-f7b59572><div class="position-relative" data-v-f7b59572><div class="mb-2" data-v-f7b59572><div class="position-absolute disc-dev" data-v-f7b59572><p data-v-f7b59572>${ssrInterpolate(i.created_at)}</p><p data-v-f7b59572>${ssrInterpolate(i.title)}</p></div><img class="w-100 h-100"${ssrRenderAttr("src", i.cover_image)} alt="" data-v-f7b59572></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-center w-100 btn",
          to: { path: `/news-details`, query: { id: `${i.id}` } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("news.view_news"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("news.view_news")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const news = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7b59572"]]);
export {
  news as default
};
//# sourceMappingURL=news-BhtVuxyf.js.map
