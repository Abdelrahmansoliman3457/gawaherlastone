import { _ as __nuxt_component_0$1 } from "./nuxt-link-Duvjf_-f.js";
import { _ as _export_sfc, q as useCookie, s as useNuxtApp } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, ref, unref, watchEffect } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import script from "./overlaypanel.esm-BPPoMYH2.js";
import { _ as _sfc_main$3 } from "./SocialShare-CTxKKLL7.js";
import { u as useApi } from "./useApi-DFb4zcmQ.js";
import { useI18n } from "vue-i18n";
import { u as useHead } from "./index-CrXeyONu.js";
import { useRoute } from "vue-router";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "./index.esm-BUUjSHDu.js";
import "./baseicon.esm-DKzT45co.js";
import "./basecomponent.esm-Bypzsw1i.js";
import "./overlayeventbus.esm-CAhQZh07.js";
import "./portal.esm-CdWWxjdD.js";
import "axios";
const _imports_0 = "" + __buildAssetsURL("logo.BoZpWpCg.png");
const _sfc_main$2 = {
  data() {
    return {
      htmlLang: "",
      navBtnActive: false,
      navLinksActive: false,
      navOverlayShow: false,
      isActive: false
    };
  },
  methods: {
    chageDir(dir) {
      let element = (void 0).querySelector(".html_direction");
      element.setAttribute("lang", dir);
      if (dir === "ar") {
        element.setAttribute("dir", "rtl");
        this.htmlLang = dir;
      }
      if (dir === "en") {
        element.setAttribute("dir", "ltr");
        this.htmlLang = dir;
      }
    },
    switchLang(newLang) {
      const lang = useCookie("lang");
      if (newLang !== localStorage.getItem("locale")) {
        lang.value = newLang;
        localStorage.setItem("locale", newLang);
        (void 0).reload();
      }
    },
    handleClick() {
      this.navBtnActive = true;
      this.navLinksActive = true;
      this.navOverlayShow = true;
    },
    handleOverlayClick() {
      this.navBtnActive = false;
      this.navLinksActive = false;
      this.navOverlayShow = false;
    }
  },
  async mounted() {
    let sessionKey = localStorage.getItem("locale");
    (void 0).sessionKey = localStorage.getItem("locale");
    if (sessionKey) {
      this.chageDir(localStorage.getItem("locale"));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxtLink = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "defaultLayout" }, _attrs))}><header class="header"><div class="nav-header"><div class="inner">`);
  _push(ssrRenderComponent(_component_nuxtLink, {
    to: "/",
    class: "logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="${ssrRenderClass([{ active: $data.navLinksActive }, "nav-links"])}"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/aboutUS",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.about_us"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.about_us")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/ourVision",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.our_vision"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.our_vision")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/tradeMarks",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.trade_marks"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.trade_marks")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/executiveMessage",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.exec_msg"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.exec_msg")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/ourExperience",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.our_exp"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.our_exp")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/news",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.news"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.news")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/jobs",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.jobs"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.jobs")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/connectus",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("nav_inks.connect_us"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("nav_inks.connect_us")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><div class="dropdown drop-lang"><a class="dropdown-toggle hint-lang" href="#" data-bs-toggle="dropdown"><i class="fas fa-globe icon"></i>`);
  if ($data.htmlLang == "") {
    _push(`<div><p>العربية</p></div>`);
  } else {
    _push(`<div><p>${ssrInterpolate($data.htmlLang === "ar" ? "العربية" : "english")}</p></div>`);
  }
  _push(`</a><ul class="dropdown-menu"><button class="dropdown-item"> العربيه </button><button class="dropdown-item"> English </button></ul></div><button class="${ssrRenderClass([{ active: $data.navBtnActive }, "nav-btn"])}"><span></span><span></span><span></span></button></div></div></header><div class="${ssrRenderClass([{ show: $data.navOverlayShow }, "nav-overlay"])}"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n({ useScope: "global" });
    const op = ref();
    const arr = ref([]);
    useApi();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_OverlayPanel = script;
      const _component_SocialShare = _sfc_main$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="inner-footer"><div class="row align-items-center justify-content-center w-100"><div class="col-12 col-lg-3 mb-4"><div class="img-footer">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "footer-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-12 col-lg-3 mb-4 paragraph"> © Saudi Jawahir Trading Company All Rights Reserved - تصميم وبرمجة مؤسسة أوامر الشبكة </div><div class="col-12 col-lg-3 mb-4 d-flex justify-content-center"><div class="d-flex flex-column"><button class="share_website mb-2">${ssrInterpolate(_ctx.$t("home.share_website"))}</button>`);
      _push(ssrRenderComponent(_component_OverlayPanel, {
        ref_key: "op",
        ref: op,
        visible: _ctx.sent_successfully,
        "onUpdate:visible": ($event) => _ctx.sent_successfully = $event,
        modal: "",
        class: "custum_dialog_width",
        draggable: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex justify-content-evenly"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SocialShare, {
              network: "facebook",
              styled: false,
              label: false,
              style: { "color": "black" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SocialShare, {
              network: "twitter",
              styled: false,
              label: false,
              style: { "color": "black" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SocialShare, {
              network: "linkedin",
              styled: false,
              label: false,
              style: { "color": "black" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SocialShare, {
              network: "email",
              styled: false,
              label: false,
              style: { "color": "black" }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex justify-content-evenly" }, [
                createVNode(_component_SocialShare, {
                  network: "facebook",
                  styled: false,
                  label: false,
                  style: { "color": "black" }
                }),
                createVNode(_component_SocialShare, {
                  network: "twitter",
                  styled: false,
                  label: false,
                  style: { "color": "black" }
                }),
                createVNode(_component_SocialShare, {
                  network: "linkedin",
                  styled: false,
                  label: false,
                  style: { "color": "black" }
                }),
                createVNode(_component_SocialShare, {
                  network: "email",
                  styled: false,
                  label: false,
                  style: { "color": "black" }
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="brands"><!--[-->`);
      ssrRenderList(unref(arr), (i) => {
        _push(`<a${ssrRenderAttr("href", i.link)}><img${ssrRenderAttr("src", i.icon)} style="${ssrRenderStyle({ "width": "20px" })}" class="m-1"></a>`);
      });
      _push(`<!--]--></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    watchEffect(() => {
      useHead({
        title: `${t(route.name)}`
      });
    });
    const nuxtApp = useNuxtApp();
    const loading = ref(true);
    nuxtApp.hook("page:start", () => {
      loading.value = true;
    });
    nuxtApp.hook("page:finish", () => {
      loading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeader = __nuxt_component_0;
      const _component_LayoutFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-Db5f1CBE.js.map
