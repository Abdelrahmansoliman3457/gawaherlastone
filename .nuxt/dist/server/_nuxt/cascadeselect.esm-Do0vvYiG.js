import { s as script$6 } from "./index.esm-Cc00l6uj.js";
import { s as script$4 } from "./index.esm-IxWTDxRk.js";
import { s as script$5 } from "./index.esm-1OJ_VxqQ.js";
import { O as OverlayEventBus } from "./overlayeventbus.esm-CAhQZh07.js";
import { s as script$3 } from "./portal.esm-CdWWxjdD.js";
import { B as BaseStyle, U as UniqueComponentId, Z as ZIndexUtils, O as ObjectUtils, D as DomHandler, C as ConnectedOverlayScrollHandler, R as Ripple } from "../server.mjs";
import { s as script$7 } from "./basecomponent.esm-Bypzsw1i.js";
import { resolveComponent, resolveDirective, openBlock, createElementBlock, mergeProps, Fragment, renderList, withDirectives, createBlock, resolveDynamicComponent, toDisplayString, createCommentVNode, normalizeClass, createElementVNode, renderSlot, createTextVNode, createVNode, withCtx, Transition } from "vue";
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
var inlineStyles = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes = {
  root: function root2(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-cascadeselect p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": props.invalid,
      "p-variant-filled": props.variant ? props.variant === "filled" : instance.$primevue.config.inputStyle === "filled",
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
      "p-overlay-open": instance.overlayVisible
    }];
  },
  label: function label(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-cascadeselect-label p-inputtext", {
      "p-placeholder": instance.label === props.placeholder,
      "p-cascadeselect-label-empty": !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
    }];
  },
  dropdownButton: "p-cascadeselect-trigger",
  loadingIcon: "p-cascadeselect-trigger-icon",
  dropdownIcon: "p-cascadeselect-trigger-icon",
  panel: function panel(_ref4) {
    _ref4.props;
    var instance = _ref4.instance;
    return ["p-cascadeselect-panel p-component", {
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  wrapper: "p-cascadeselect-items-wrapper",
  list: "p-cascadeselect-panel p-cascadeselect-items",
  item: function item(_ref5) {
    var instance = _ref5.instance, processedOption = _ref5.processedOption;
    return ["p-cascadeselect-item", {
      "p-cascadeselect-item-group": instance.isOptionGroup(processedOption),
      "p-cascadeselect-item-active p-highlight": instance.isOptionActive(processedOption),
      "p-focus": instance.isOptionFocused(processedOption),
      "p-disabled": instance.isOptionDisabled(processedOption)
    }];
  },
  content: "p-cascadeselect-item-content",
  text: "p-cascadeselect-item-text",
  groupIcon: "p-cascadeselect-group-icon",
  sublist: "p-cascadeselect-sublist"
};
var CascadeSelectStyle = BaseStyle.extend({
  name: "cascadeselect",
  classes,
  inlineStyles
});
var script$2 = {
  name: "BaseCascadeSelect",
  "extends": script$7,
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    placeholder: String,
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: Boolean,
    dataKey: null,
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    loading: {
      type: Boolean,
      "default": false
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    optionGroupIcon: {
      type: String,
      "default": void 0
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    searchLocale: {
      type: String,
      "default": void 0
    },
    searchMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptySearchMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: CascadeSelectStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "CascadeSelectSub",
  hostName: "CascadeSelect",
  "extends": script$7,
  emits: ["option-change", "option-focus-change"],
  container: null,
  props: {
    selectId: String,
    focusedOptionId: String,
    options: Array,
    optionLabel: String,
    optionValue: String,
    optionDisabled: null,
    optionGroupIcon: String,
    optionGroupLabel: String,
    optionGroupChildren: {
      type: [String, Array],
      "default": null
    },
    activeOptionPath: Array,
    level: Number,
    templates: null,
    isParentMount: Boolean
  },
  data: function data() {
    return {
      mounted: false
    };
  },
  watch: {
    isParentMount: {
      handler: function handler(newValue) {
        newValue && DomHandler.nestedPosition(this.container, this.level);
      }
    }
  },
  mounted: function mounted() {
    (this.isParentMount || this.level === 0) && DomHandler.nestedPosition(this.container, this.level);
    this.mounted = true;
  },
  methods: {
    getOptionId: function getOptionId(processedOption) {
      return "".concat(this.selectId, "_").concat(processedOption.key);
    },
    getOptionLabel: function getOptionLabel(processedOption) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
    },
    getOptionValue: function getOptionValue(processedOption) {
      return this.optionValue ? ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
    },
    getPTOptions: function getPTOptions(processedOption, index, key) {
      return this.ptm(key, {
        context: {
          item: processedOption,
          index,
          level: this.level,
          itemGroup: this.isOptionGroup(processedOption),
          active: this.isOptionActive(processedOption),
          focused: this.isOptionFocused(processedOption),
          disabled: this.isOptionDisabled(processedOption)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(processedOption) {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
    },
    getOptionGroupLabel: function getOptionGroupLabel(processedOption) {
      return this.optionGroupLabel ? ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
    },
    getOptionGroupChildren: function getOptionGroupChildren(processedOption) {
      return processedOption.children;
    },
    isOptionGroup: function isOptionGroup(processedOption) {
      return ObjectUtils.isNotEmpty(processedOption.children);
    },
    isOptionSelected: function isOptionSelected(processedOption) {
      return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
    },
    isOptionActive: function isOptionActive(processedOption) {
      return this.activeOptionPath.some(function(path) {
        return path.key === processedOption.key;
      });
    },
    isOptionFocused: function isOptionFocused(processedOption) {
      return this.focusedOptionId === this.getOptionId(processedOption);
    },
    getOptionLabelToRender: function getOptionLabelToRender(processedOption) {
      return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
    },
    onOptionClick: function onOptionClick(event, processedOption) {
      this.$emit("option-change", {
        originalEvent: event,
        processedOption,
        isFocus: true
      });
    },
    onOptionMouseMove: function onOptionMouseMove(event, processedOption) {
      this.$emit("option-focus-change", {
        originalEvent: event,
        processedOption
      });
    },
    onOptionChange: function onOptionChange(event) {
      this.$emit("option-change", event);
    },
    onOptionFocusChange: function onOptionFocusChange(event) {
      this.$emit("option-focus-change", event);
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    AngleRightIcon: script$6
  }
};
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = ["id", "aria-label", "aria-selected", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-item-group", "data-p-highlight", "data-p-focus", "data-p-disabled"];
var _hoisted_3 = ["onClick", "onMousemove"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AngleRightIcon = resolveComponent("AngleRightIcon");
  var _component_CascadeSelectSub = resolveComponent("CascadeSelectSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", mergeProps({
    ref: $options.containerRef,
    "class": _ctx.cx("list"),
    "aria-label": $options.listAriaLabel
  }, $props.level === 0 ? _ctx.ptm("list") : _ctx.ptm("sublist")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.options, function(processedOption, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: $options.getOptionLabelToRender(processedOption),
      id: $options.getOptionId(processedOption),
      "class": _ctx.cx("item", {
        processedOption
      }),
      role: "treeitem",
      "aria-label": $options.getOptionLabelToRender(processedOption),
      "aria-selected": $options.isOptionGroup(processedOption) ? void 0 : $options.isOptionSelected(processedOption),
      "aria-expanded": $options.isOptionGroup(processedOption) ? $options.isOptionActive(processedOption) : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $props.options.length,
      "aria-posinset": index + 1
    }, $options.getPTOptions(processedOption, index, "item"), {
      "data-p-item-group": $options.isOptionGroup(processedOption),
      "data-p-highlight": $options.isOptionActive(processedOption),
      "data-p-focus": $options.isOptionFocused(processedOption),
      "data-p-disabled": $options.isOptionDisabled(processedOption)
    }), [withDirectives((openBlock(), createElementBlock("div", mergeProps({
      "class": _ctx.cx("content"),
      onClick: function onClick($event) {
        return $options.onOptionClick($event, processedOption);
      },
      onMousemove: function onMousemove($event) {
        return $options.onOptionMouseMove($event, processedOption);
      }
    }, $options.getPTOptions(processedOption, index, "content")), [$props.templates["option"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["option"]), {
      key: 0,
      option: processedOption.option
    }, null, 8, ["option"])) : (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": _ctx.cx("text")
    }, $options.getPTOptions(processedOption, index, "text")), toDisplayString($options.getOptionLabelToRender(processedOption)), 17)), $options.isOptionGroup(processedOption) ? (openBlock(), createElementBlock(Fragment, {
      key: 2
    }, [$props.templates["optiongroupicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["optiongroupicon"]), {
      key: 0,
      "aria-hidden": "true"
    })) : $props.optionGroupIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": [_ctx.cx("groupIcon"), $props.optionGroupIcon],
      "aria-hidden": "true"
    }, $options.getPTOptions(processedOption, index, "groupIcon")), null, 16)) : (openBlock(), createBlock(_component_AngleRightIcon, mergeProps({
      key: 2,
      "class": _ctx.cx("groupIcon"),
      "aria-hidden": "true"
    }, $options.getPTOptions(processedOption, index, "groupIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true)], 16, _hoisted_3)), [[_directive_ripple]]), $options.isOptionGroup(processedOption) && $options.isOptionActive(processedOption) ? (openBlock(), createBlock(_component_CascadeSelectSub, {
      key: 0,
      role: "group",
      "class": normalizeClass(_ctx.cx("sublist")),
      selectId: $props.selectId,
      focusedOptionId: $props.focusedOptionId,
      options: $options.getOptionGroupChildren(processedOption),
      activeOptionPath: $props.activeOptionPath,
      level: $props.level + 1,
      templates: $props.templates,
      optionLabel: $props.optionLabel,
      optionValue: $props.optionValue,
      optionDisabled: $props.optionDisabled,
      optionGroupIcon: $props.optionGroupIcon,
      optionGroupLabel: $props.optionGroupLabel,
      optionGroupChildren: $props.optionGroupChildren,
      onOptionChange: $options.onOptionChange,
      onOptionFocusChange: $options.onOptionFocusChange,
      pt: _ctx.pt,
      unstyled: _ctx.unstyled,
      isParentMount: $data.mounted
    }, null, 8, ["class", "selectId", "focusedOptionId", "options", "activeOptionPath", "level", "templates", "optionLabel", "optionValue", "optionDisabled", "optionGroupIcon", "optionGroupLabel", "optionGroupChildren", "onOptionChange", "onOptionFocusChange", "pt", "unstyled", "isParentMount"])) : createCommentVNode("", true)], 16, _hoisted_2);
  }), 128))], 16, _hoisted_1$1);
}
script$1.render = render$1;
var script = {
  name: "CascadeSelect",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["update:modelValue", "change", "focus", "blur", "click", "group-change", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  searchTimeout: null,
  searchValue: null,
  data: function data2() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeOptionPath: [],
      overlayVisible: false,
      dirty: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndexUtils.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionLabel: function getOptionLabel2(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue2(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    isOptionDisabled: function isOptionDisabled2(option) {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    },
    getOptionGroupLabel: function getOptionGroupLabel2(optionGroup) {
      return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    },
    getOptionGroupChildren: function getOptionGroupChildren2(optionGroup, level) {
      return ObjectUtils.isString(this.optionGroupChildren) ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    },
    isOptionGroup: function isOptionGroup2(option, level) {
      return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    },
    getProccessedOptionLabel: function getProccessedOptionLabel() {
      var processedOption = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var grouped = this.isProccessedOptionGroup(processedOption);
      return grouped ? this.getOptionGroupLabel(processedOption.option, processedOption.level) : this.getOptionLabel(processedOption.option);
    },
    isProccessedOptionGroup: function isProccessedOptionGroup(processedOption) {
      return ObjectUtils.isNotEmpty(processedOption === null || processedOption === void 0 ? void 0 : processedOption.children);
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.activeOptionPath = this.hasSelectedOption ? this.findOptionPathByValue(this.modelValue) : this.activeOptionPath;
      if (this.hasSelectedOption && ObjectUtils.isNotEmpty(this.activeOptionPath)) {
        var processedOption = this.activeOptionPath[this.activeOptionPath.length - 1];
        this.focusedOptionInfo = {
          index: processedOption.index,
          level: processedOption.level,
          parentKey: processedOption.parentKey
        };
      } else {
        this.focusedOptionInfo = {
          index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex(),
          level: 0,
          parentKey: ""
        };
      }
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this = this;
      var _hide = function _hide2() {
        _this.$emit("before-hide");
        _this.overlayVisible = false;
        _this.clicked = false;
        _this.activeOptionPath = [];
        _this.focusedOptionInfo = {
          index: -1,
          level: 0,
          parentKey: ""
        };
        isFocus && DomHandler.focus(_this.$refs.focusInput);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedOptionInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      this.searchValue = "";
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event, event.key);
          }
          break;
      }
      this.clicked = false;
    },
    onOptionChange: function onOptionChange2(event) {
      var originalEvent = event.originalEvent, processedOption = event.processedOption, isFocus = event.isFocus, isHide = event.isHide;
      if (ObjectUtils.isEmpty(processedOption)) return;
      var index = processedOption.index, level = processedOption.level, parentKey = processedOption.parentKey, children = processedOption.children;
      var grouped = ObjectUtils.isNotEmpty(children);
      var root3 = ObjectUtils.isEmpty(processedOption.parent);
      var selected = this.isSelected(processedOption);
      if (selected) {
        var _index = processedOption.index, key = processedOption.key, _level = processedOption.level, _parentKey = processedOption.parentKey;
        this.focusedOptionInfo = {
          index: _index,
          level: _level,
          parentKey: _parentKey
        };
        this.activeOptionPath = this.activeOptionPath.filter(function(p) {
          return key !== p.key && key.startsWith(p.key);
        });
        this.dirty = !root3;
      } else {
        var activeOptionPath = this.activeOptionPath.filter(function(p) {
          return p.parentKey !== parentKey;
        });
        activeOptionPath.push(processedOption);
        this.focusedOptionInfo = {
          index,
          level,
          parentKey
        };
        this.activeOptionPath = activeOptionPath;
      }
      grouped ? this.onOptionGroupSelect(originalEvent, processedOption) : this.onOptionSelect(originalEvent, processedOption, isHide);
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    onOptionFocusChange: function onOptionFocusChange2(event) {
      if (this.focusOnHover) {
        var originalEvent = event.originalEvent, processedOption = event.processedOption;
        var index = processedOption.index, level = processedOption.level, parentKey = processedOption.parentKey;
        this.focusedOptionInfo = {
          index,
          level,
          parentKey
        };
        this.changeFocusedOptionIndex(originalEvent, index);
      }
    },
    onOptionSelect: function onOptionSelect(event, processedOption) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(processedOption === null || processedOption === void 0 ? void 0 : processedOption.option);
      this.activeOptionPath.forEach(function(p) {
        return p.selected = true;
      });
      this.updateModel(event, value);
      isHide && this.hide(true);
    },
    onOptionGroupSelect: function onOptionGroupSelect(event, processedOption) {
      this.dirty = true;
      this.$emit("group-change", {
        originalEvent: event,
        value: processedOption.option
      });
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide() : this.show();
        DomHandler.focus(this.$refs.focusInput);
      }
      this.clicked = true;
      this.$emit("click", event);
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
      } else {
        var optionIndex = this.focusedOptionInfo.index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo.index) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedOptionInfo.index !== -1) {
          var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
          var grouped = this.isProccessedOptionGroup(processedOption);
          !grouped && this.onOptionChange({
            originalEvent: event,
            processedOption
          });
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionInfo.index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo.index) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this2 = this;
      if (this.overlayVisible) {
        var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
        var parentOption = this.activeOptionPath.find(function(p) {
          return p.key === (processedOption === null || processedOption === void 0 ? void 0 : processedOption.parentKey);
        });
        var matched = this.focusedOptionInfo.parentKey === "" || parentOption && parentOption.key === this.focusedOptionInfo.parentKey;
        var root3 = ObjectUtils.isEmpty(processedOption === null || processedOption === void 0 ? void 0 : processedOption.parent);
        if (matched) {
          this.activeOptionPath = this.activeOptionPath.filter(function(p) {
            return p.parentKey !== _this2.focusedOptionInfo.parentKey;
          });
        }
        if (!root3) {
          this.focusedOptionInfo = {
            index: -1,
            parentKey: parentOption ? parentOption.parentKey : ""
          };
          this.searchValue = "";
          this.onArrowDownKey(event);
        }
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      if (this.overlayVisible) {
        var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
        var grouped = this.isProccessedOptionGroup(processedOption);
        if (grouped) {
          var matched = this.activeOptionPath.some(function(p) {
            return (processedOption === null || processedOption === void 0 ? void 0 : processedOption.key) === p.key;
          });
          if (matched) {
            this.focusedOptionInfo = {
              index: -1,
              parentKey: processedOption === null || processedOption === void 0 ? void 0 : processedOption.key
            };
            this.searchValue = "";
            this.onArrowDownKey(event);
          } else {
            this.onOptionChange({
              originalEvent: event,
              processedOption
            });
          }
        }
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionInfo.index !== -1;
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionInfo.index !== -1) {
          var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
          var grouped = this.isProccessedOptionGroup(processedOption);
          this.onOptionChange({
            originalEvent: event,
            processedOption
          });
          !grouped && this.hide();
        }
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedOptionInfo.index !== -1) {
        var processedOption = this.visibleOptions[this.focusedOptionInfo.index];
        var grouped = this.isProccessedOptionGroup(processedOption);
        !grouped && this.onOptionChange({
          originalEvent: event,
          processedOption
        });
      }
      this.overlayVisible && this.hide();
    },
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
      DomHandler.addStyles(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.scrollInView();
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
      this.dirty = false;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        DomHandler.relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + "px";
        DomHandler.absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this3 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this3.overlayVisible && _this3.overlay && !_this3.$el.contains(event.target) && !_this3.overlay.contains(event.target)) {
            _this3.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this4 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this4.overlayVisible) {
            _this4.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this5 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this5.overlayVisible && !DomHandler.isTouchDevice()) {
            _this5.hide();
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    isOptionMatched: function isOptionMatched(processedOption) {
      var _this$getProccessedOp;
      return this.isValidOption(processedOption) && ((_this$getProccessedOp = this.getProccessedOptionLabel(processedOption)) === null || _this$getProccessedOp === void 0 ? void 0 : _this$getProccessedOp.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)));
    },
    isValidOption: function isValidOption(processedOption) {
      return ObjectUtils.isNotEmpty(processedOption) && !this.isOptionDisabled(processedOption.option);
    },
    isValidSelectedOption: function isValidSelectedOption(processedOption) {
      return this.isValidOption(processedOption) && this.isSelected(processedOption);
    },
    isSelected: function isSelected(processedOption) {
      return this.activeOptionPath.some(function(p) {
        return p.key === processedOption.key;
      });
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this6 = this;
      return this.visibleOptions.findIndex(function(processedOption) {
        return _this6.isValidOption(processedOption);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this7 = this;
      return ObjectUtils.findLastIndex(this.visibleOptions, function(processedOption) {
        return _this7.isValidOption(processedOption);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this8 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(processedOption) {
        return _this8.isValidOption(processedOption);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this9 = this;
      var matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), function(processedOption) {
        return _this9.isValidOption(processedOption);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this10 = this;
      return this.visibleOptions.findIndex(function(processedOption) {
        return _this10.isValidSelectedOption(processedOption);
      });
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    findOptionPathByValue: function findOptionPathByValue(value, processedOptions2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      processedOptions2 = processedOptions2 || level === 0 && this.processedOptions;
      if (!processedOptions2) return null;
      if (ObjectUtils.isEmpty(value)) return [];
      for (var i = 0; i < processedOptions2.length; i++) {
        var processedOption = processedOptions2[i];
        if (ObjectUtils.equals(value, this.getOptionValue(processedOption.option), this.equalityKey)) {
          return [processedOption];
        }
        var matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);
        if (matchedOptions) {
          matchedOptions.unshift(processedOption);
          return matchedOptions;
        }
      }
    },
    searchOptions: function searchOptions(event, _char) {
      var _this11 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var optionIndex = -1;
      var matched = false;
      if (ObjectUtils.isNotEmpty(this.searchValue)) {
        if (this.focusedOptionInfo.index !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(processedOption) {
            return _this11.isOptionMatched(processedOption);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionInfo.index).findIndex(function(processedOption) {
            return _this11.isOptionMatched(processedOption);
          }) : optionIndex + this.focusedOptionInfo.index;
        } else {
          optionIndex = this.visibleOptions.findIndex(function(processedOption) {
            return _this11.isOptionMatched(processedOption);
          });
        }
        if (optionIndex !== -1) {
          matched = true;
        }
        if (optionIndex === -1 && this.focusedOptionInfo.index === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          this.changeFocusedOptionIndex(event, optionIndex);
        }
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this11.searchValue = "";
        _this11.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionInfo.index !== index) {
        this.focusedOptionInfo.index = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionChange({
            originalEvent: event,
            processedOption: this.visibleOptions[index],
            isHide: false
          });
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this12 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id = index !== -1 ? "".concat(_this12.id, "_").concat(index) : _this12.focusedOptionId;
        var element = DomHandler.findSingle(_this12.list, 'li[id="'.concat(id, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "start"
          });
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionInfo.index = this.findFirstFocusedOptionIndex();
        this.onOptionChange({
          processedOption: this.visibleOptions[this.focusedOptionInfo.index],
          isHide: false
        });
        !this.overlayVisible && (this.focusedOptionInfo = {
          index: -1,
          level: 0,
          parentKey: ""
        });
      }
    },
    updateModel: function updateModel(event, value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    createProcessedOptions: function createProcessedOptions(options2) {
      var _this13 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedOptions2 = [];
      options2 && options2.forEach(function(option, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newOption = {
          option,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newOption["children"] = _this13.createProcessedOptions(_this13.getOptionGroupChildren(option, level), level + 1, newOption, key);
        processedOptions2.push(newOption);
      });
      return processedOptions2;
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    }
  },
  computed: {
    hasSelectedOption: function hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.modelValue);
    },
    label: function label2() {
      var label22 = this.placeholder || "p-emptylabel";
      if (this.hasSelectedOption) {
        var activeOptionPath = this.findOptionPathByValue(this.modelValue);
        var processedOption = ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
        return processedOption ? this.getOptionLabel(processedOption.option) : label22;
      }
      return label22;
    },
    processedOptions: function processedOptions() {
      return this.createProcessedOptions(this.options || []);
    },
    visibleOptions: function visibleOptions() {
      var _this14 = this;
      var processedOption = this.activeOptionPath.find(function(p) {
        return p.key === _this14.focusedOptionInfo.parentKey;
      });
      return processedOption ? processedOption.children : this.processedOptions;
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchResultMessageText: function searchResultMessageText() {
      return ObjectUtils.isNotEmpty(this.visibleOptions) ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionInfo.index !== -1 ? "".concat(this.id).concat(ObjectUtils.isNotEmpty(this.focusedOptionInfo.parentKey) ? "_" + this.focusedOptionInfo.parentKey : "", "_").concat(this.focusedOptionInfo.index) : null;
    }
  },
  components: {
    CascadeSelectSub: script$1,
    Portal: script$3,
    ChevronDownIcon: script$4,
    SpinnerIcon: script$5,
    AngleRightIcon: script$6
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
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
var _hoisted_1 = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_CascadeSelectSub = resolveComponent("CascadeSelectSub");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.onContainerClick($event);
    })
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenInputWrapper"), {
    "data-p-hidden-accessible": true
  }), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    "class": _ctx.inputClass,
    style: _ctx.inputStyle,
    readonly: "",
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "tree",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_tree",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("input"))), null, 16, _hoisted_1)], 16), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.modelValue,
    placeholder: _ctx.placeholder
  }, function() {
    return [createTextVNode(toDisplayString($options.label), 1)];
  })], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("dropdownButton"),
    role: "button",
    tabindex: "-1",
    "aria-hidden": "true"
  }, _ctx.ptm("dropdownButton")), [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropdownIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
      "class": [_ctx.cx("dropdownIcon"), _ctx.dropdownIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
  })], 16), createElementVNode("span", mergeProps({
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.searchResultMessageText), 17), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            "class": [_ctx.cx("panel"), _ctx.panelClass],
            style: _ctx.panelStyle,
            onClick: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[4] || (_cache[4] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.ptm("panel"))), [createElementVNode("div", mergeProps({
            "class": _ctx.cx("wrapper")
          }, _ctx.ptm("wrapper")), [createVNode(_component_CascadeSelectSub, {
            id: $data.id + "_tree",
            role: "tree",
            "aria-orientation": "horizontal",
            selectId: $data.id,
            focusedOptionId: $data.focused ? $options.focusedOptionId : void 0,
            options: $options.processedOptions,
            activeOptionPath: $data.activeOptionPath,
            level: 0,
            templates: _ctx.$slots,
            optionLabel: _ctx.optionLabel,
            optionValue: _ctx.optionValue,
            optionDisabled: _ctx.optionDisabled,
            optionGroupIcon: _ctx.optionGroupIcon,
            optionGroupLabel: _ctx.optionGroupLabel,
            optionGroupChildren: _ctx.optionGroupChildren,
            onOptionChange: $options.onOptionChange,
            onOptionFocusChange: $options.onOptionFocusChange,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled
          }, null, 8, ["id", "selectId", "focusedOptionId", "options", "activeOptionPath", "templates", "optionLabel", "optionValue", "optionDisabled", "optionGroupIcon", "optionGroupLabel", "optionGroupChildren", "onOptionChange", "onOptionFocusChange", "pt", "unstyled"])], 16), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17)], 16)) : createCommentVNode("", true)];
        }),
        _: 1
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  }, 8, ["appendTo"])], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=cascadeselect.esm-Do0vvYiG.js.map
