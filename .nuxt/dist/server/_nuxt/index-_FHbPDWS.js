import script from "./skeleton.esm-D_czaoGO.js";
import { ref, unref, useSSRContext } from "vue";
import "hookable";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "ufo";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    const video = ref(""), instagram_gallery = ref([]), about = ref(""), brands = ref(""), posts = ref("");
    const loading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Skeleton = script;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-19183f03><main style="${ssrRenderStyle({ "background": "var(--main-bg)" })}" data-v-19183f03><div class="d-flex justify-content-center" data-v-19183f03>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "100rem",
          height: "30rem",
          class: "slider-img w-100"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(video)) {
        _push(`<video${ssrRenderAttr("src", unref(video))} autoplay muted class="slider-img" alt="" loop data-v-19183f03></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container" data-v-19183f03><div class="layout-form custom-width lg" data-v-19183f03>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-19183f03><div class="col-12 col-md-4 mb-4" data-v-19183f03>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-19183f03>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-19183f03>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading) == false) {
        _push(`<div class="row" data-v-19183f03><div class="col-12 col-md-4 mb-4" data-v-19183f03><a href="/aboutUs" class="section-dev" data-v-19183f03><h6 class="text-center" data-v-19183f03>${ssrInterpolate(_ctx.$t("nav_inks.about_us"))}</h6><img${ssrRenderAttr("src", unref(about))} alt="" class="section-img" data-v-19183f03></a></div><div class="col-12 col-md-4 mb-4" data-v-19183f03><a href="tradeMarks" class="section-dev" data-v-19183f03><h6 class="text-center" data-v-19183f03>${ssrInterpolate(_ctx.$t("nav_inks.trade_marks"))}</h6><img${ssrRenderAttr("src", unref(brands))} class="section-img" alt="" data-v-19183f03></a></div><div class="col-12 col-md-4 mb-4" data-v-19183f03><a href="/news" class="section-dev" data-v-19183f03><h6 class="text-center" data-v-19183f03>${ssrInterpolate(_ctx.$t("nav_inks.news"))}</h6><img${ssrRenderAttr("src", unref(posts))} class="section-img" alt="" data-v-19183f03></a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></main><main data-v-19183f03><h6 class="text-center" data-v-19183f03>${ssrInterpolate(_ctx.$t("home.insta_page"))}</h6><div class="container" data-v-19183f03><div class="layout-form custom-width lg" data-v-19183f03>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-19183f03><div class="col-12 col-md-4 mb-4" data-v-19183f03>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-19183f03>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-19183f03>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "18rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row" data-v-19183f03><!--[-->`);
      ssrRenderList(unref(instagram_gallery), (i) => {
        _push(`<div class="col-12 col-md-4 mb-4" data-v-19183f03><a class="section-dev" data-v-19183f03><img${ssrRenderAttr("src", i.image)} class="section-img" alt="" data-v-19183f03></a></div>`);
      });
      _push(`<!--]--></div></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19183f03"]]);
export {
  index as default
};
//# sourceMappingURL=index-_FHbPDWS.js.map
