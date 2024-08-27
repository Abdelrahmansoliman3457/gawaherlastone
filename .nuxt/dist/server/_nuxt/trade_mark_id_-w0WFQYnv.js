import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./skeleton.esm-D_czaoGO.js";
import script$1 from "./dropdown.esm-BJ1dH6Bl.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, isRef, createVNode, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
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
import "./baseicon.esm-DKzT45co.js";
import "./index.esm-D9S7AqLP.js";
import "./index.esm-IxWTDxRk.js";
import "./index.esm-BT-tdytN.js";
import "./index.esm-1OJ_VxqQ.js";
import "./index.esm-BUUjSHDu.js";
import "./overlayeventbus.esm-CAhQZh07.js";
import "./portal.esm-CdWWxjdD.js";
import "./virtualscroller.esm-CYLd9gUl.js";
import "axios";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABMNJREFUeAHtnT8IHEUYxX+JIqIWxoCQGIOJgmCrFgY0miKkEMHGCIrY2NgoNnZGtDJBDIoBQbASFIUIaUVBxUqjluLfBERBMREMIRrU+2QPPo/bQ77bd96sb2G5ubl9b2be73Zn7poB/bEB2A+8DpwAzgN/NnKeA74EjgH7gBhL08dm4JNGwv83X5KPga2tEtkCfDsD4wxwsquPz9b9jL6enRnDF8A1LUJ5Iw3kFPAIsB3Y2NBgoq/bJuM4AJxO4zna0Bj+7uru1PmfgF2tDWBOf28GfuvGFfPgnjnXrG3VkQTk0IC9vBS4fI5f1MVjZN558Zzrq1VPp3EdrJr8F7p3U8dvG6gDVwM/AjEP3Zk8r+3q+ibl74BN6fplivnOf38Zo1VrjycgOwdqfG/yfDZ5Ppzq+6Dcka5fprgjtRWrx2aOvNQdakVyAfBc93sm7orpEUvr+I0Td+Xs+Q7wPBDaIY4YyxT6/x7IEIEu62EgyyY4sH4UQO4Fbh/JGWNp/pE1HcDYXpudQ8YGYjqeZoG8BrwykvOtMTyyhlr2Djw/l+xGMakbSIn9sCLFD8Nhe1hz8x1Sy02mMhBZtDVjA6nlJlMZiCzamrGB1HKTqQxEFm3N2EBquclUBiKLtmZsILXcZCoDkUVbMzaQWm4ylYHIoq0ZG0gtN5nKQGTR1owNpJabTGUgsmhrxgZSy02mMhBZtDVjA6nlJlMZiCzamrGB1HKTqQxEFm3N2EBquclUBiKLtmZsILXcZCoDkUVbMzaQWm4ylYHIoq0ZG0gtN5nKQGTR1owNpJabTGUgsmhrxgZSy02mMhBZtDVjA6nlJlMZiCzamrGB1HKTqQxEFm3N2EBquclUBiKLtmZsILXcZCoDkUVbMzaQWm4ylYHIoq0ZG0gtN5nKQGTR1owNpJabTGUgsmhrxgZSy02mMhBZtDVjA6nlJlMZiCzamrGB1HKTqQxEFm3N2EBquclUBiKLtmZsILXcZCoDkUVbMzaQWm4ylYHIoq0ZG0gtN5lqFEAOT+J5Mp1PANfPRHYTEPX5unUsx7Z9ze+wMx1Afv0MuLCDEtupxn65+fMWys1ueTQv3E/TZvEXAd8byMwzY+C3eUOX2Lb7wXQ+0G2JnZu8DrgvXZOvX6fy4+mL0+wdEhPhWI5RTOoGsgZfx/zIUgK5DHgIeAl4Ebi/Z7/1oSLxHbIgyW1ArNZmFw0fdhvdL5CWPzKQBdG9PQfGFE5s471hgbb6kYH0JHdjgvEr8Fi3QotyQPkDuKFHu0y1gfSkd08C8kK65uVUH9cMfRhIT6J7UvDTH5mXAFGePrb29miXqTaQnvQ2AT+n8L8Gfkjvo7y5R7tM9SiA7FwmgQXaWO7+niBM74x4jX8HFMeO1N5xRQMqz/dSx3erGgHuAj5PbX0zWQrfLWzv1tRWrOSaOZ5JHX9qBb2+Eti6gnYOpXEdWUF7gzURk+75rvPngPhmtX7cAvySgCjvfElWR1PnT0/KB7p/eTdKWtOYRl+3A49O5qVTaTxvaprTusaK5Ks0iJhszwIngXjWt3BGX8/MjCHGtEUbnc79KuCjmQHl1VBr5Q+AK3RxrcY5/lPaBxzr7piYU1oBEfPgCeBVYL/o/7F/UPgLhNLGjKYY3f0AAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,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";
const _sfc_main = {
  __name: "trade_mark[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute().params.id;
    const axios = useApi();
    const route = useRoute();
    const city_options = ref([]), description = ref(""), image = ref("");
    ref("");
    const name = ref(""), posts = ref([]), video = ref(""), city = ref(""), branches = ref([]), loading = ref(true);
    const show_city = async () => {
      await axios.get(`brand-branches/${route.params.id}?city_id=${city.value.id}`).then((res) => {
        branches.value = res.data.data;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Skeleton = script;
      const _component_Dropdown = script$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-form custom-width lg aboutUs" }, _attrs))} data-v-1ce9c149><h6 class="mb-5" data-v-1ce9c149>`);
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-1ce9c149></i>  <span class="main-title normal lg" data-v-1ce9c149>${ssrInterpolate(_ctx.$t(`Titles.trade_marks`))}</span></h6><div class="sec_1 row m-0 mb-4" data-v-1ce9c149><div class="col-12 col-md-8" data-v-1ce9c149><div class="row p-4 h-100" data-v-1ce9c149><div data-v-1ce9c149>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "13rem",
          class: "slider-img"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="main-title bold" data-v-1ce9c149>${ssrInterpolate(unref(name))}</p><div class="column" data-v-1ce9c149><p class="disc" data-v-1ce9c149>${ssrInterpolate(unref(description))}</p></div></div></div><div class="col-12 col-md-4 p-0" data-v-1ce9c149>`);
      if (unref(loading)) {
        _push(`<div class="p-4 h-100" style="${ssrRenderStyle({ "background-color": "#fff !important" })}" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "13rem" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(image)) {
        _push(`<div class="img-container-main" data-v-1ce9c149><img${ssrRenderAttr("src", unref(image))} alt="" data-v-1ce9c149></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(loading)) {
        _push(`<div class="sec_1 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          height: "20rem",
          class: "slider-img trade_mark"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sec_1 row mb-4" data-v-1ce9c149>`);
      if (unref(video) != ``) {
        _push(`<video autoplay loop muted${ssrRenderAttr("src", unref(video))} class="slider-img trade_mark" data-v-1ce9c149></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="section_2 row justify-content-between mb-4" data-v-1ce9c149><p class="main-title" data-v-1ce9c149>${ssrInterpolate(_ctx.$t("trade_marks.location"))}</p><div class="w-100 mb-4 d-flex" data-v-1ce9c149><a class="d-flex align-items-center" data-v-1ce9c149> ${ssrInterpolate(_ctx.$t("trade_marks.city"))} </a><div class="flex justify-content-center dropdown_card" data-v-1ce9c149>`);
      _push(ssrRenderComponent(_component_Dropdown, {
        onChange: show_city,
        modelValue: unref(city),
        "onUpdate:modelValue": ($event) => isRef(city) ? city.value = $event : null,
        options: unref(city_options),
        optionLabel: "name",
        placeholder: _ctx.$t("trade_marks.choose_city"),
        class: "w-full md:w-14rem custum-dropdown"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-1ce9c149><div class="col-12 col-md-4 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "7rem" }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "7rem" }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "7rem" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(branches), (branch) => {
        _push(`<div class="col-12 col-md-3 mb-4" data-v-1ce9c149><div class="d-flex" data-v-1ce9c149><div class="sub-sec" data-v-1ce9c149><div class="row gap-3" data-v-1ce9c149><a data-v-1ce9c149>${ssrInterpolate(branch.name)} <br data-v-1ce9c149>${ssrInterpolate(branch.detailed_address)}</a><a data-v-1ce9c149><img class="phone-img"${ssrRenderAttr("src", _imports_0)} alt="" data-v-1ce9c149> <span data-v-1ce9c149>${ssrInterpolate(branch.phone)}</span></a><a data-v-1ce9c149><img class="phone-img"${ssrRenderAttr("src", _imports_1)} alt="" data-v-1ce9c149> <span data-v-1ce9c149>الاتجاهات</span></a></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="section_2 row justify-content-between mb-4" data-v-1ce9c149>`);
      if (unref(loading)) {
        _push(`<div data-v-1ce9c149><div class="col-12 mb-1" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "1rem" }, null, _parent));
        _push(`</div><div class="col-12 mb-1" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "1rem" }, null, _parent));
        _push(`</div><div class="col-12 mb-1" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, { height: "1rem" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="main-title mb-4" data-v-1ce9c149>${ssrInterpolate(unref(description))}</p><div class="news row" data-v-1ce9c149>`);
      if (unref(loading)) {
        _push(`<div class="row" data-v-1ce9c149><div class="col-12 col-md-4 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div><div class="col-12 col-md-4 mb-4" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_Skeleton, {
          width: "15rem",
          height: "13rem"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(posts), (news) => {
        _push(`<div class="col-12 col-md-4 mb-4" data-v-1ce9c149><div class="position-relative" data-v-1ce9c149>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: `/news-details`, query: { id: `${news.id}` } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="position-absolute disc-dev" data-v-1ce9c149${_scopeId}><p data-v-1ce9c149${_scopeId}>${ssrInterpolate(news.created_at)}</p><p data-v-1ce9c149${_scopeId}>${ssrInterpolate(news.title)}</p></div><img class="w-100 h-100"${ssrRenderAttr("src", news.cover_image)} alt="" data-v-1ce9c149${_scopeId}>`);
            } else {
              return [
                createVNode("div", { class: "position-absolute disc-dev" }, [
                  createVNode("p", null, toDisplayString(news.created_at), 1),
                  createVNode("p", null, toDisplayString(news.title), 1)
                ]),
                createVNode("img", {
                  class: "w-100 h-100",
                  src: news.cover_image,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trade_mark[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trade_mark_id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ce9c149"]]);
export {
  trade_mark_id_ as default
};
//# sourceMappingURL=trade_mark_id_-w0WFQYnv.js.map
