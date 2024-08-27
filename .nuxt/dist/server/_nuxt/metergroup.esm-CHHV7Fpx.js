import { s as script$3 } from "./basecomponent.esm-Bypzsw1i.js";
import { B as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, Fragment, renderList, renderSlot, normalizeClass, createElementVNode, toDisplayString, resolveComponent, createVNode, createCommentVNode } from "vue";
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
    var props = _ref.props;
    return ["p-metergroup p-component", {
      "p-metergroup-horizontal": props.orientation === "horizontal",
      "p-metergroup-vertical": props.orientation === "vertical"
    }];
  },
  metercontainer: "p-metergroup-meters",
  meter: "p-metergroup-meter",
  labellist: function labellist(_ref2) {
    var props = _ref2.props;
    return ["p-metergroup-labels", {
      "p-metergroup-labels-vertical": props.labelOrientation === "vertical",
      "p-metergroup-labels-horizontal": props.labelOrientation === "horizontal"
    }];
  },
  labellistitem: "p-metergroup-label",
  labelicon: "p-metergroup-label-icon",
  labellisttype: "p-metergroup-label-marker",
  label: "p-metergroup-label-text"
};
var MeterGroupStyle = BaseStyle.extend({
  name: "metergroup",
  classes
});
var script$2 = {
  name: "MeterGroup",
  "extends": script$3,
  props: {
    value: {
      type: Array,
      "default": null
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    orientation: {
      type: String,
      "default": "horizontal"
    },
    labelPosition: {
      type: String,
      "default": "end"
    },
    labelOrientation: {
      type: String,
      "default": "horizontal"
    }
  },
  style: MeterGroupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "MeterGroupLabel",
  hostName: "MeterGroup",
  "extends": script$3,
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      "default": null
    },
    labelPosition: {
      type: String,
      "default": "end"
    },
    labelOrientation: {
      type: String,
      "default": "horizontal"
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ol", mergeProps({
    "class": _ctx.cx("labellist")
  }, _ctx.ptm("labellist")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(val, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: index + "_label",
      "class": _ctx.cx("labellistitem")
    }, _ctx.ptm("labellistitem")), [renderSlot(_ctx.$slots, "icon", {
      value: val,
      "class": normalizeClass(_ctx.cx("labelicon"))
    }, function() {
      return [val.icon ? (openBlock(), createElementBlock("i", mergeProps({
        key: 0,
        "class": [val.icon, _ctx.cx("labelicon")],
        style: {
          color: val.color
        }
      }, _ctx.ptm("labelicon")), null, 16)) : (openBlock(), createElementBlock("span", mergeProps({
        key: 1,
        "class": _ctx.cx("labellisttype"),
        style: {
          backgroundColor: val.color
        }
      }, _ctx.ptm("labellisttype")), null, 16))];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(val.label) + " (" + toDisplayString(_ctx.$parentInstance.percentValue(val.value)) + ")", 17)], 16);
  }), 128))], 16);
}
script$1.render = render$1;
var script = {
  name: "MeterGroup",
  "extends": script$2,
  inheritAttrs: false,
  methods: {
    getPTOptions: function getPTOptions(key, value, index) {
      return this.ptm(key, {
        context: {
          value,
          index
        }
      });
    },
    percent: function percent() {
      var meter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var percentOfItem = (meter - this.min) / (this.max - this.min) * 100;
      return Math.round(Math.max(0, Math.min(100, percentOfItem)));
    },
    percentValue: function percentValue(meter) {
      return this.percent(meter) + "%";
    },
    meterCalculatedStyles: function meterCalculatedStyles(val) {
      return {
        backgroundColor: val.color,
        width: this.orientation === "horizontal" && this.percentValue(val.value),
        height: this.orientation === "vertical" && this.percentValue(val.value)
      };
    }
  },
  computed: {
    totalPercent: function totalPercent() {
      return this.percent(this.value.reduce(function(total, val) {
        return total + val.value;
      }, 0));
    },
    percentages: function percentages() {
      var sum = 0;
      var sumsArray = [];
      this.value.forEach(function(item) {
        sum += item.value;
        sumsArray.push(sum);
      });
      return sumsArray;
    }
  },
  components: {
    MeterGroupLabel: script$1
  }
};
var _hoisted_1 = ["aria-valuemin", "aria-valuemax", "aria-valuenow"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MeterGroupLabel = resolveComponent("MeterGroupLabel");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "meter",
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-valuenow": $options.totalPercent
  }, _ctx.ptmi("root")), [_ctx.labelPosition === "start" ? renderSlot(_ctx.$slots, "label", {
    key: 0,
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }, function() {
    return [createVNode(_component_MeterGroupLabel, {
      value: _ctx.value,
      labelPosition: _ctx.labelPosition,
      labelOrientation: _ctx.labelOrientation,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["value", "labelPosition", "labelOrientation", "unstyled", "pt"])];
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, "start", {
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }), createElementVNode("div", mergeProps({
    "class": _ctx.cx("metercontainer")
  }, _ctx.ptm("metercontainer")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(val, index) {
    return renderSlot(_ctx.$slots, "meter", {
      key: index,
      value: val,
      index,
      "class": normalizeClass(_ctx.cx("meter")),
      orientation: _ctx.orientation,
      size: $options.percentValue(val.value),
      totalPercent: $options.totalPercent
    }, function() {
      return [$options.percent(val.value) ? (openBlock(), createElementBlock("span", mergeProps({
        key: 0,
        "class": _ctx.cx("meter"),
        style: $options.meterCalculatedStyles(val)
      }, $options.getPTOptions("meter", val, index)), null, 16)) : createCommentVNode("", true)];
    });
  }), 128))], 16), renderSlot(_ctx.$slots, "end", {
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }), _ctx.labelPosition === "end" ? renderSlot(_ctx.$slots, "label", {
    key: 1,
    value: _ctx.value,
    totalPercent: $options.totalPercent,
    percentages: $options.percentages
  }, function() {
    return [createVNode(_component_MeterGroupLabel, {
      value: _ctx.value,
      labelPosition: _ctx.labelPosition,
      labelOrientation: _ctx.labelOrientation,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["value", "labelPosition", "labelOrientation", "unstyled", "pt"])];
  }) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=metergroup.esm-CHHV7Fpx.js.map
