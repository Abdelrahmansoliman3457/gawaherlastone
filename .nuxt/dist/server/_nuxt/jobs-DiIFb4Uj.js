import { _ as __nuxt_component_0 } from "./nuxt-link-Duvjf_-f.js";
import script from "./toast.esm-Ck6Ysh0B.js";
import { _ as _export_sfc, a as useToast, u as useRoute, b as useRouter } from "../server.mjs";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import "ufo";
import "./portal.esm-CdWWxjdD.js";
import "./basecomponent.esm-Bypzsw1i.js";
import "./index.esm-D9S7AqLP.js";
import "./baseicon.esm-DKzT45co.js";
import "./index.esm-CWvqd6S2.js";
import "./index.esm-BUUjSHDu.js";
import "./index.esm-Deajh7Nl.js";
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
import "@googlemaps/markerclustererplus";
import "axios";
const _sfc_main = {
  __name: "jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const days_arr = () => {
      var now = /* @__PURE__ */ new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    };
    useI18n({ useScope: "global" });
    useToast();
    useApi();
    const route = useRoute();
    useRouter();
    const cities = ref([]), departments = ref([]), gender = ref([]), hearAboutThisJob = ref([]), nationalities = ref([]);
    ref([]);
    const social_status = ref([]);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const first_name = ref(""), father_name = ref(""), family_name = ref("");
    ref(null);
    ref(null);
    const phone = ref(""), email = ref(""), education = ref(""), work_saudi_yesno = ref(""), relative = ref(""), currently_work = ref(""), birth_city = ref("");
    ref(null);
    const exp_years = ref();
    ref("");
    new FormData();
    const not_img = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Toast = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-9ad0b87c><div class="layout-form custom-width lg aboutUs" data-v-9ad0b87c><h6 class="mb-5" data-v-9ad0b87c>`);
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
      _push(`  <i class="fas fa-chevron-left change-angle" data-v-9ad0b87c></i>  <span class="main-title normal lg" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t(`${unref(route).name}`))}</span></h6><form class="main-form" data-v-9ad0b87c><div class="row justify-content-between" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="father" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.first_name"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input id="first_name" class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.first_name")}`)} type="text"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.first_name")}`)}${ssrRenderAttr("value", unref(first_name))} data-v-9ad0b87c></div></div><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="father_name" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.father_name"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input id="father_name" class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.father_name")}`)} type="text"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.father_name")}`)}${ssrRenderAttr("value", unref(father_name))} data-v-9ad0b87c></div></div><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="family_name" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.family_name"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input id="family_name" class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.family_name")}`)} type="text"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.family_name")}`)}${ssrRenderAttr("value", unref(family_name))} data-v-9ad0b87c></div></div></div><div class="row mb-4" data-v-9ad0b87c><label for="type" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.gender"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><div class="d-flex column gap-4" data-v-9ad0b87c><!--[-->`);
      ssrRenderList(unref(gender), (i) => {
        _push(`<div class="d-flex" data-v-9ad0b87c><input${ssrRenderAttr("id", "gender_" + i.id)} class="input-main" name="gender"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.gender")}`)} type="radio"${ssrRenderAttr("value", i.id)} data-v-9ad0b87c><label class="m-1"${ssrRenderAttr("for", "gender_" + i.id)} data-v-9ad0b87c>${ssrInterpolate(i.title)}</label></div>`);
      });
      _push(`<!--]--></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="nationality" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.nationality"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.nationality")}`)} data-v-9ad0b87c><option selected class="d-none" value="" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.select_nationality"))}</option><!--[-->`);
      ssrRenderList(unref(nationalities), (country) => {
        _push(`<option${ssrRenderAttr("value", country.id)} data-v-9ad0b87c>${ssrInterpolate(country.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="row mb-4" data-v-9ad0b87c><label for="status" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.status"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><div class="d-flex column gap-4" data-v-9ad0b87c><!--[-->`);
      ssrRenderList(unref(social_status), (i) => {
        _push(`<div class="d-flex" data-v-9ad0b87c><input${ssrRenderAttr("id", "status_" + i.id)} name="status" type="radio"${ssrRenderAttr("value", i.id)} data-v-9ad0b87c><label class="m-1"${ssrRenderAttr("for", "status_" + i.id)} data-v-9ad0b87c>${ssrInterpolate(i.title)}</label></div>`);
      });
      _push(`<!--]--></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.city"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input id="birth_city"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.city")}`)} class="input-main" type="text"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.birth_city")}`)}${ssrRenderAttr("value", unref(birth_city))} data-v-9ad0b87c></div></div><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="exp_years" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.exp_years"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input id="exp_years"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.exp_years")}`)} class="input-main" type="number"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.enter_exp_years")}`)}${ssrRenderAttr("value", unref(exp_years))} data-v-9ad0b87c></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="father" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.work_city"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.work_city")}`)} data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>${ssrInterpolate(`${_ctx.$t("jobs.select_city")}`)}</option><!--[-->`);
      ssrRenderList(unref(cities), (i) => {
        _push(`<option${ssrRenderAttr("value", i.id)} data-v-9ad0b87c>${ssrInterpolate(i.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="department" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.department"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.select_department")}`)} data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>${ssrInterpolate(`${_ctx.$t("jobs.select_department")}`)}</option><!--[-->`);
      ssrRenderList(unref(departments), (i) => {
        _push(`<option${ssrRenderAttr("value", i.id)} data-v-9ad0b87c>${ssrInterpolate(i.name)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" style="${ssrRenderStyle({ "direction": "rtl !important" })}" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.phone"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><div class="d-flex" data-v-9ad0b87c><input${ssrRenderAttr("value", unref(phone))} class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.phone")}`)} id="phone" type="number"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.enter_phone")}`)} style="${ssrRenderStyle({ "border-radius": "0 !important", "width": "60%", "border-start-start-radius": "3px !important", "border-end-start-radius": "3px !important" })}" data-v-9ad0b87c><select class="border-0" style="${ssrRenderStyle({ "width": "40%", "border-radius": "0 !important", "border-end-end-radius": "3px !important", "border-start-end-radius": "3px !important", "text-align": "center" })}" data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>966</option><option value="vv" data-v-9ad0b87c>966</option><option value="vv" data-v-9ad0b87c>122</option><option value="vv" data-v-9ad0b87c>54</option></select></div></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.email"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input${ssrRenderAttr("value", unref(email))}${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.email")}`)} class="input-main" id="email" type="email"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.enter_email")}`)} data-v-9ad0b87c></div></div></div><h5 class="mb-4" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.birth_date"))}</h5><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.birth_day"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.birth_date")}`)} data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>${ssrInterpolate(`${_ctx.$t("jobs.choose_birth_day")}`)}</option><!--[-->`);
      ssrRenderList(days_arr(), (i) => {
        _push(`<option${ssrRenderAttr("value", i)} data-v-9ad0b87c>${ssrInterpolate(i)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.birth_month"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.birth_date")}`)} data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>${ssrInterpolate(`${_ctx.$t("jobs.choose_birth_month")}`)}</option><!--[-->`);
      ssrRenderList(12, (i) => {
        _push(`<option${ssrRenderAttr("value", i)} data-v-9ad0b87c>${ssrInterpolate(i)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.birth_year"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.birth_date")}`)} data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>${ssrInterpolate(`${_ctx.$t("jobs.choose_birth_year")}`)}</option><!--[-->`);
      ssrRenderList(60, (i) => {
        _push(`<option${ssrRenderAttr("value", 1964 + i)} data-v-9ad0b87c>${ssrInterpolate(1964 + i)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.education"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input${ssrRenderAttr("value", unref(education))} class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.education")}`)} id="education" type="text"${ssrRenderAttr("placeholder", `${_ctx.$t("jobs.enter_education")}`)} data-v-9ad0b87c></div></div></div><div class="row mb-4" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.work_saudi"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><div class="d-flex column gap-4" data-v-9ad0b87c><div class="d-flex" data-v-9ad0b87c><input name="work_saudi_yesno" checked type="radio" id="saudi-yes" value="1"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(work_saudi_yesno), "1")) ? " checked" : ""} data-v-9ad0b87c><label class="m-1" for="saudi-yes" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.yes"))}</label></div><div data-v-9ad0b87c><input name="work_saudi_yesno" type="radio" id="saudi-no" value="0"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(work_saudi_yesno), "0")) ? " checked" : ""} data-v-9ad0b87c><label class="m-1" for="saudi-no" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.no"))}</label></div></div></div><div class="row mb-4" data-v-9ad0b87c><label for="relatives" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.relatives"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><div class="d-flex column gap-4" data-v-9ad0b87c><div class="d-flex" data-v-9ad0b87c><input name="relative" type="radio" id="relative-yes"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(relative), "1")) ? " checked" : ""} checked value="1" data-v-9ad0b87c><label class="m-1" for="relative-yes" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.yes"))}</label></div><div data-v-9ad0b87c><input name="relative" type="radio" id="relative-no"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(relative), "0")) ? " checked" : ""} value="0" data-v-9ad0b87c><label class="m-1" for="relative-no" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.no"))}</label></div></div></div><div class="row mb-4" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.work_currently"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><div class="d-flex column gap-4" data-v-9ad0b87c><div class="d-flex" data-v-9ad0b87c><input name="currently" type="radio" id="currently-yes"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(currently_work), "1")) ? " checked" : ""} checked value="1" data-v-9ad0b87c><label class="m-1" for="currently-yes" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.yes"))}</label></div><div data-v-9ad0b87c><input name="currently" type="radio" id="currently-no"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(currently_work), "0")) ? " checked" : ""} value="0" data-v-9ad0b87c><label class="m-1" for="currently-no" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.no"))}</label></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 col-md-4 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label for="father" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.vacancies"))} <span class="hint-red" data-v-9ad0b87c>*</span></label><select class="input-main"${ssrRenderAttr("data-valid", `${_ctx.$t("jobs.method")}`)} data-v-9ad0b87c><option class="d-none" selected value="" data-v-9ad0b87c>${ssrInterpolate(`${_ctx.$t("jobs.method")}`)}</option><!--[-->`);
      ssrRenderList(unref(hearAboutThisJob), (i) => {
        _push(`<option${ssrRenderAttr("value", i.id)} data-v-9ad0b87c>${ssrInterpolate(i.question)}</option>`);
      });
      _push(`<!--]--></select></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.cv"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input type="file" id="file" class="position-relative" data-v-9ad0b87c></div></div></div><div class="row justify-content-start" data-v-9ad0b87c><div class="col-12 mb-4" data-v-9ad0b87c><div class="d-flex flex-column input-div" data-v-9ad0b87c><label data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.photo"))}<span class="hint-red" data-v-9ad0b87c>*</span></label><input type="file" id="file_img" class="position-relative" accept="image/*" data-v-9ad0b87c>`);
      if (unref(not_img)) {
        _push(`<span class="hint-red" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.pls_image"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="d-flex flex-column align-items-center" data-v-9ad0b87c><label class="mb-4" for="confirm" data-v-9ad0b87c><input class="m-1" type="radio" name="confirm" id="confirm" data-v-9ad0b87c>أؤكد أن المعلومات المذكورة أعلاه كاملة وصحيحة وأن أي معلومات غير صحيحة أو مضللة تعطي صاحب العمل الحق في إنهاء العقد مستقبلًا</label><button type="submit" class="submit_btn" data-v-9ad0b87c>${ssrInterpolate(_ctx.$t("jobs.send"))}</button></div></form></div>`);
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ad0b87c"]]);
export {
  jobs as default
};
//# sourceMappingURL=jobs-DiIFb4Uj.js.map
