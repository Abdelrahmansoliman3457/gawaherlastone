import { s as script$3 } from "./index.esm-IxWTDxRk.js";
import { s as script$4 } from "./index.esm-0WUIA_Fk.js";
import { s as script$2 } from "./index.esm-Ci2WODSi.js";
import { s as script$5 } from "./index.esm-CS0B6Jh6.js";
import { B as BaseStyle, D as DomHandler, O as ObjectUtils, U as UniqueComponentId, R as Ripple } from "../server.mjs";
import { s as script$6 } from "./basecomponent.esm-Bypzsw1i.js";
import { resolveDirective, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode, withDirectives, createBlock, resolveDynamicComponent, Fragment, renderList, createTextVNode, toDisplayString } from "vue";
import "./baseicon.esm-DKzT45co.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
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
import "vue/server-renderer";
import "@googlemaps/markerclustererplus";
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-carousel p-component", {
      "p-carousel-vertical": instance.isVertical(),
      "p-carousel-horizontal": !instance.isVertical()
    }];
  },
  header: "p-carousel-header",
  content: "p-carousel-content",
  container: "p-carousel-container",
  previousButton: function previousButton(_ref2) {
    var instance = _ref2.instance;
    return ["p-carousel-prev p-link", {
      "p-disabled": instance.backwardIsDisabled
    }];
  },
  previousButtonIcon: "p-carousel-next-icon",
  itemsContent: "p-carousel-items-content",
  itemsContainer: "p-carousel-items-container",
  itemCloned: function itemCloned(_ref3) {
    var index = _ref3.index, value2 = _ref3.value, totalShiftedItems = _ref3.totalShiftedItems, d_numVisible = _ref3.d_numVisible;
    return ["p-carousel-item p-carousel-item-cloned", {
      "p-carousel-item-active": totalShiftedItems * -1 === value2.length + d_numVisible,
      "p-carousel-item-start": index === 0,
      "p-carousel-item-end": value2.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance, index = _ref4.index;
    return ["p-carousel-item", {
      "p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
      "p-carousel-item-start": instance.firstIndex() === index,
      "p-carousel-item-end": instance.lastIndex() === index
    }];
  },
  nextButton: function nextButton(_ref5) {
    var instance = _ref5.instance;
    return ["p-carousel-next p-link", {
      "p-disabled": instance.forwardIsDisabled
    }];
  },
  nextButtonIcon: "p-carousel-prev-icon",
  indicators: "p-carousel-indicators p-reset",
  indicator: function indicator(_ref6) {
    var instance = _ref6.instance, index = _ref6.index;
    return ["p-carousel-indicator", {
      "p-highlight": instance.d_page === index
    }];
  },
  indicatorButton: "p-link",
  footer: "p-carousel-footer"
};
var CarouselStyle = BaseStyle.extend({
  name: "carousel",
  classes
});
var script$1 = {
  name: "BaseCarousel",
  "extends": script$6,
  props: {
    value: null,
    page: {
      type: Number,
      "default": 0
    },
    numVisible: {
      type: Number,
      "default": 1
    },
    numScroll: {
      type: Number,
      "default": 1
    },
    responsiveOptions: Array,
    orientation: {
      type: String,
      "default": "horizontal"
    },
    verticalViewPortHeight: {
      type: String,
      "default": "300px"
    },
    contentClass: String,
    containerClass: String,
    indicatorsContentClass: String,
    circular: {
      type: Boolean,
      "default": false
    },
    autoplayInterval: {
      type: Number,
      "default": 0
    },
    showNavigators: {
      type: Boolean,
      "default": true
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    }
  },
  style: CarouselStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var script = {
  name: "Carousel",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:page"],
  isRemainingItemsAdded: false,
  data: function data() {
    return {
      remainingItems: 0,
      d_numVisible: this.numVisible,
      d_numScroll: this.numScroll,
      d_oldNumScroll: 0,
      d_oldNumVisible: 0,
      d_oldValue: null,
      d_page: this.page,
      totalShiftedItems: this.page * this.numScroll * -1,
      allowAutoplay: !!this.autoplayInterval,
      d_circular: this.circular || this.allowAutoplay,
      swipeThreshold: 20
    };
  },
  watch: {
    page: function page(newValue) {
      if (newValue > this.d_page) {
        this.navForward({}, newValue);
      } else if (newValue < this.d_page) {
        this.navBackward({}, newValue);
      }
      this.d_page = newValue;
    },
    circular: function circular(newValue) {
      this.d_circular = newValue;
    },
    numVisible: function numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    numScroll: function numScroll(newValue, oldValue) {
      this.d_oldNumScroll = oldValue;
      this.d_numScroll = newValue;
    },
    value: function value(oldValue) {
      this.d_oldValue = oldValue;
    }
  },
  mounted: function mounted() {
    var stateChanged = false;
    this.$el.setAttribute(this.attributeSelector, "");
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
    if (this.isCircular()) {
      var totalShiftedItems = this.totalShiftedItems;
      if (this.d_page === 0) {
        totalShiftedItems = -1 * this.d_numVisible;
      } else if (totalShiftedItems === 0) {
        totalShiftedItems = -1 * this.value.length;
        if (this.remainingItems > 0) {
          this.isRemainingItemsAdded = true;
        }
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
        stateChanged = true;
      }
    }
    if (!stateChanged && this.isAutoplay()) {
      this.startAutoplay();
    }
  },
  updated: function updated() {
    if (!this.empty) {
      var isCircular2 = this.isCircular();
      var stateChanged = false;
      var totalShiftedItems = this.totalShiftedItems;
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (this.d_oldNumScroll !== this.d_numScroll || this.d_oldNumVisible !== this.d_numVisible || this.d_oldValue.length !== this.value.length) {
        this.remainingItems = (this.value.length - this.d_numVisible) % this.d_numScroll;
        var page2 = this.d_page;
        if (this.totalIndicators !== 0 && page2 >= this.totalIndicators) {
          page2 = this.totalIndicators - 1;
          this.$emit("update:page", page2);
          this.d_page = page2;
          stateChanged = true;
        }
        totalShiftedItems = page2 * this.d_numScroll * -1;
        if (isCircular2) {
          totalShiftedItems -= this.d_numVisible;
        }
        if (page2 === this.totalIndicators - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this.d_numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
          stateChanged = true;
        }
        this.d_oldNumScroll = this.d_numScroll;
        this.d_oldNumVisible = this.d_numVisible;
        this.d_oldValue = this.value;
        this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      }
      if (isCircular2) {
        if (this.d_page === 0) {
          totalShiftedItems = -1 * this.d_numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
          stateChanged = true;
        }
      }
      if (!stateChanged && this.isAutoplay()) {
        this.startAutoplay();
      }
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  },
  methods: {
    getIndicatorPTOptions: function getIndicatorPTOptions(index) {
      return {
        context: {
          highlighted: index === this.d_page
        }
      };
    },
    step: function step(dir, page2) {
      var totalShiftedItems = this.totalShiftedItems;
      var isCircular2 = this.isCircular();
      if (page2 != null) {
        totalShiftedItems = this.d_numScroll * page2 * -1;
        if (isCircular2) {
          totalShiftedItems -= this.d_numVisible;
        }
        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this.d_numScroll * dir;
        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this.d_numScroll * dir;
          this.isRemainingItemsAdded = false;
        }
        var originalShiftedItems = isCircular2 ? totalShiftedItems + this.d_numVisible : totalShiftedItems;
        page2 = Math.abs(Math.floor(originalShiftedItems / this.d_numScroll));
      }
      if (isCircular2 && this.d_page === this.totalIndicators - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.value.length + this.d_numVisible);
        page2 = 0;
      } else if (isCircular2 && this.d_page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page2 = this.totalIndicators - 1;
      } else if (page2 === this.totalIndicators - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this.d_numScroll * dir;
        this.isRemainingItemsAdded = true;
      }
      if (this.$refs.itemsContainer) {
        !this.isUnstyled && DomHandler.removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.totalShiftedItems = totalShiftedItems;
      this.$emit("update:page", page2);
      this.d_page = page2;
    },
    calculatePosition: function calculatePosition() {
      if (this.$refs.itemsContainer && this.responsiveOptions) {
        var windowWidth = (void 0).innerWidth;
        var matchedResponsiveOptionsData = {
          numVisible: this.numVisible,
          numScroll: this.numScroll
        };
        for (var i = 0; i < this.responsiveOptions.length; i++) {
          var res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveOptionsData = res;
          }
        }
        if (this.d_numScroll !== matchedResponsiveOptionsData.numScroll) {
          var page2 = this.d_page;
          page2 = parseInt(page2 * this.d_numScroll / matchedResponsiveOptionsData.numScroll);
          this.totalShiftedItems = matchedResponsiveOptionsData.numScroll * page2 * -1;
          if (this.isCircular()) {
            this.totalShiftedItems -= matchedResponsiveOptionsData.numVisible;
          }
          this.d_numScroll = matchedResponsiveOptionsData.numScroll;
          this.$emit("update:page", page2);
          this.d_page = page2;
        }
        if (this.d_numVisible !== matchedResponsiveOptionsData.numVisible) {
          this.d_numVisible = matchedResponsiveOptionsData.numVisible;
        }
      }
    },
    navBackward: function navBackward(e, index) {
      if (this.d_circular || this.d_page !== 0) {
        this.step(1, index);
      }
      this.allowAutoplay = false;
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e, index) {
      if (this.d_circular || this.d_page < this.totalIndicators - 1) {
        this.step(-1, index);
      }
      this.allowAutoplay = false;
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick: function onIndicatorClick(e, index) {
      var page2 = this.d_page;
      if (index > page2) {
        this.navForward(e, index);
      } else if (index < page2) {
        this.navBackward(e, index);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.$refs.itemsContainer) {
        !this.isUnstyled && DomHandler.addClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "";
        if ((this.d_page === 0 || this.d_page === this.totalIndicators - 1) && this.isCircular()) {
          this.$refs.itemsContainer.style.transform = this.isVertical() ? "translate3d(0, ".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(this.totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        }
      }
    },
    onTouchStart: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove: function onTouchMove(e) {
      var touchobj = e.changedTouches[0];
      var diff = this.isVertical() ? touchobj.pageY - this.startPos.y : touchobj.pageX - this.startPos.x;
      if (Math.abs(diff) > this.swipeThreshold && e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch: function changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          this.navForward(e);
        } else {
          this.navBackward(e);
        }
      }
    },
    onIndicatorKeydown: function onIndicatorKeydown(event) {
      switch (event.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "PageUp":
        case "PageDown":
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function onRightKey() {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    },
    onLeftKey: function onLeftKey() {
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    },
    onHomeKey: function onHomeKey() {
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    },
    onEndKey: function onEndKey() {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    },
    onTabKey: function onTabKey() {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return DomHandler.getAttribute(ind, "data-p-highlight") === true;
      });
      var activeIndicator = DomHandler.findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      var activeIndex = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex() {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndicator = DomHandler.findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator(prevInd, nextInd) {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    bindDocumentListeners: function bindDocumentListeners() {
      var _this = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function(e) {
          _this.calculatePosition(e);
        };
        (void 0).addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentListeners: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        (void 0).removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    startAutoplay: function startAutoplay() {
      var _this2 = this;
      this.interval = setInterval(function() {
        if (_this2.d_page === _this2.totalIndicators - 1) {
          _this2.step(-1, 0);
        } else {
          _this2.step(-1, _this2.d_page + 1);
        }
      }, this.autoplayInterval);
    },
    stopAutoplay: function stopAutoplay() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    createStyle: function createStyle() {
      if (!this.carouselStyle) {
        var _this$$primevue;
        this.carouselStyle = (void 0).createElement("style");
        this.carouselStyle.type = "text/css";
        DomHandler.setAttribute(this.carouselStyle, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).body.appendChild(this.carouselStyle);
      }
      var innerHTML = "\n                .p-carousel[".concat(this.attributeSelector, "] .p-carousel-item {\n                    flex: 1 0 ").concat(100 / this.d_numVisible, "%\n                }\n            ");
      if (this.responsiveOptions && !this.isUnstyled) {
        var _responsiveOptions = _toConsumableArray(this.responsiveOptions);
        var comparer = ObjectUtils.localeComparator();
        _responsiveOptions.sort(function(data1, data2) {
          var value1 = data1.breakpoint;
          var value2 = data2.breakpoint;
          return ObjectUtils.sort(value1, value2, -1, comparer);
        });
        for (var i = 0; i < _responsiveOptions.length; i++) {
          var res = _responsiveOptions[i];
          innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            .p-carousel[").concat(this.attributeSelector, "] .p-carousel-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
        }
      }
      this.carouselStyle.innerHTML = innerHTML;
    },
    isVertical: function isVertical() {
      return this.orientation === "vertical";
    },
    isCircular: function isCircular() {
      return this.value && this.d_circular && this.value.length >= this.d_numVisible;
    },
    isAutoplay: function isAutoplay() {
      return this.autoplayInterval && this.allowAutoplay;
    },
    firstIndex: function firstIndex() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.d_numVisible) : this.totalShiftedItems * -1;
    },
    lastIndex: function lastIndex() {
      return this.firstIndex() + this.d_numVisible - 1;
    },
    ariaSlideNumber: function ariaSlideNumber(value2) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value2) : void 0;
    },
    ariaPageLabel: function ariaPageLabel(value2) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value2) : void 0;
    }
  },
  computed: {
    totalIndicators: function totalIndicators() {
      return this.value ? Math.max(Math.ceil((this.value.length - this.d_numVisible) / this.d_numScroll) + 1, 0) : 0;
    },
    backwardIsDisabled: function backwardIsDisabled() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && this.d_page === 0;
    },
    forwardIsDisabled: function forwardIsDisabled() {
      return this.value && (!this.circular || this.value.length < this.d_numVisible) && (this.d_page === this.totalIndicators - 1 || this.totalIndicators === 0);
    },
    ariaSlideLabel: function ariaSlideLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    },
    ariaPrevButtonLabel: function ariaPrevButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function ariaNextButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    },
    empty: function empty() {
      return !this.value || this.value.length === 0;
    },
    emptyMessageText: function emptyMessageText() {
      var _this$$primevue$confi;
      return ((_this$$primevue$confi = this.$primevue.config) === null || _this$$primevue$confi === void 0 || (_this$$primevue$confi = _this$$primevue$confi.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.emptyMessage) || "";
    }
  },
  components: {
    ChevronRightIcon: script$2,
    ChevronDownIcon: script$3,
    ChevronLeftIcon: script$4,
    ChevronUpIcon: script$5
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value2) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["aria-live"];
var _hoisted_2 = ["disabled", "aria-label"];
var _hoisted_3 = ["data-p-carousel-item-active", "data-p-carousel-item-start", "data-p-carousel-item-end"];
var _hoisted_4 = ["aria-hidden", "aria-label", "aria-roledescription", "data-p-carousel-item-active", "data-p-carousel-item-start", "data-p-carousel-item-end"];
var _hoisted_5 = ["disabled", "aria-label"];
var _hoisted_6 = ["data-p-highlight"];
var _hoisted_7 = ["tabindex", "aria-label", "aria-current", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "region"
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), !$options.empty ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": [_ctx.cx("content"), _ctx.contentClass]
  }, _ctx.ptm("content")), [createElementVNode("div", mergeProps({
    "class": [_ctx.cx("container"), _ctx.containerClass],
    "aria-live": $data.allowAutoplay ? "polite" : "off"
  }, _ctx.ptm("container")), [_ctx.showNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    type: "button",
    "class": _ctx.cx("previousButton"),
    disabled: $options.backwardIsDisabled,
    "aria-label": $options.ariaPrevButtonLabel,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.navBackward && $options.navBackward.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.prevButtonProps), _ctx.ptm("previousButton")), {
    "data-pc-group-section": "navigator"
  }), [renderSlot(_ctx.$slots, "previousicon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronUpIcon" : "ChevronLeftIcon"), mergeProps({
      "class": _ctx.cx("previousButtonIcon")
    }, _ctx.ptm("previousButtonIcon")), null, 16, ["class"]))];
  })], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("itemsContent"),
    style: [{
      height: $options.isVertical() ? _ctx.verticalViewPortHeight : "auto"
    }],
    onTouchend: _cache[2] || (_cache[2] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    }),
    onTouchstart: _cache[3] || (_cache[3] = function() {
      return $options.onTouchStart && $options.onTouchStart.apply($options, arguments);
    }),
    onTouchmove: _cache[4] || (_cache[4] = function() {
      return $options.onTouchMove && $options.onTouchMove.apply($options, arguments);
    })
  }, _ctx.ptm("itemsContent")), [createElementVNode("div", mergeProps({
    ref: "itemsContainer",
    "class": _ctx.cx("itemsContainer"),
    onTransitionend: _cache[1] || (_cache[1] = function() {
      return $options.onTransitionEnd && $options.onTransitionEnd.apply($options, arguments);
    })
  }, _ctx.ptm("itemsContainer")), [$options.isCircular() ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList(_ctx.value.slice(-1 * $data.d_numVisible), function(item2, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: index + "_scloned",
      "class": _ctx.cx("itemCloned", {
        index,
        value: _ctx.value,
        totalShiftedItems: $data.totalShiftedItems,
        d_numVisible: $data.d_numVisible
      })
    }, _ctx.ptm("itemCloned"), {
      "data-p-carousel-item-active": $data.totalShiftedItems * -1 === _ctx.value.length + $data.d_numVisible,
      "data-p-carousel-item-start": index === 0,
      "data-p-carousel-item-end": _ctx.value.slice(-1 * $data.d_numVisible).length - 1 === index
    }), [renderSlot(_ctx.$slots, "item", {
      data: item2,
      index
    })], 16, _hoisted_3);
  }), 128)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(item2, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: index,
      "class": _ctx.cx("item", {
        index
      }),
      role: "group",
      "aria-hidden": $options.firstIndex() > index || $options.lastIndex() < index ? true : void 0,
      "aria-label": $options.ariaSlideNumber(index),
      "aria-roledescription": $options.ariaSlideLabel
    }, _ctx.ptm("item"), {
      "data-p-carousel-item-active": $options.firstIndex() <= index && $options.lastIndex() >= index,
      "data-p-carousel-item-start": $options.firstIndex() === index,
      "data-p-carousel-item-end": $options.lastIndex() === index
    }), [renderSlot(_ctx.$slots, "item", {
      data: item2,
      index
    })], 16, _hoisted_4);
  }), 128)), $options.isCircular() ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList(_ctx.value.slice(0, $data.d_numVisible), function(item2, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: index + "_fcloned",
      "class": _ctx.cx("itemCloned", {
        index,
        value: _ctx.value,
        totalShiftedItems: $data.totalShiftedItems,
        d_numVisible: $data.d_numVisible
      })
    }, _ctx.ptm("itemCloned")), [renderSlot(_ctx.$slots, "item", {
      data: item2,
      index
    })], 16);
  }), 128)) : createCommentVNode("", true)], 16)], 16), _ctx.showNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    type: "button",
    "class": _ctx.cx("nextButton"),
    disabled: $options.forwardIsDisabled,
    "aria-label": $options.ariaNextButtonLabel,
    onClick: _cache[5] || (_cache[5] = function() {
      return $options.navForward && $options.navForward.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.nextButtonProps), _ctx.ptm("nextButton")), {
    "data-pc-group-section": "navigator"
  }), [renderSlot(_ctx.$slots, "nexticon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent($options.isVertical() ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
      "class": _ctx.cx("nextButtonIcon")
    }, _ctx.ptm("nextButtonIcon")), null, 16, ["class"]))];
  })], 16, _hoisted_5)), [[_directive_ripple]]) : createCommentVNode("", true)], 16, _hoisted_1), $options.totalIndicators >= 0 && _ctx.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    ref: "indicatorContent",
    "class": [_ctx.cx("indicators"), _ctx.indicatorsContentClass],
    onKeydown: _cache[6] || (_cache[6] = function() {
      return $options.onIndicatorKeydown && $options.onIndicatorKeydown.apply($options, arguments);
    })
  }, _ctx.ptm("indicators")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.totalIndicators, function(indicator2, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "p-carousel-indicator-" + i.toString(),
      "class": _ctx.cx("indicator", {
        index: i
      })
    }, _ctx.ptm("indicator", $options.getIndicatorPTOptions(i)), {
      "data-p-highlight": $data.d_page === i
    }), [createElementVNode("button", mergeProps({
      "class": _ctx.cx("indicatorButton"),
      type: "button",
      tabindex: $data.d_page === i ? "0" : "-1",
      "aria-label": $options.ariaPageLabel(i + 1),
      "aria-current": $data.d_page === i ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onIndicatorClick($event, i);
      }
    }, _ctx.ptm("indicatorButton", $options.getIndicatorPTOptions(i))), null, 16, _hoisted_7)], 16, _hoisted_6);
  }), 128))], 16)) : createCommentVNode("", true)], 16)) : renderSlot(_ctx.$slots, "empty", {
    key: 2
  }, function() {
    return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
  }), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 3,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=carousel.esm-t1mjqPug.js.map
