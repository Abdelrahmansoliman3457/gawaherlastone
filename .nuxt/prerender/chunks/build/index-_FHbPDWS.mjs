import script from './skeleton.esm-D_czaoGO.mjs';
import { ref, unref, useSSRContext } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/index.mjs';
import { u as useApi } from './useApi-DFb4zcmQ.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import './basecomponent.esm-Bypzsw1i.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/axios/index.js';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/h3/dist/index.mjs';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/devalue/index.js';
import 'file://E:/Awamer%20work/my%20projects/Gawaher/Gawaher/node_modules/ufo/dist/index.mjs';
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

export { index as default };
//# sourceMappingURL=index-_FHbPDWS.mjs.map
