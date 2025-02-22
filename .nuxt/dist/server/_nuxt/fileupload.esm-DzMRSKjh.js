import script$5 from "./button.esm-C_cw55kj.js";
import { s as script$8 } from "./index.esm-BWk2d8Cp.js";
import { s as script$9 } from "./index.esm-BUUjSHDu.js";
import { s as script$4 } from "./baseicon.esm-DKzT45co.js";
import { openBlock, createElementBlock, mergeProps, createElementVNode, resolveComponent, Fragment, renderList, toDisplayString, createVNode, normalizeClass, withCtx, createBlock, resolveDynamicComponent, resolveDirective, renderSlot, withDirectives, withKeys, createCommentVNode, createTextVNode } from "vue";
import script$7 from "./message.esm-DhKah7XD.js";
import script$6 from "./progressbar.esm-BEuguu5z.js";
import { B as BaseStyle, D as DomHandler, R as Ripple } from "../server.mjs";
import { s as script$a } from "./basecomponent.esm-Bypzsw1i.js";
import script$b from "./badge.esm-DqS6Ol5z.js";
import "./index.esm-1OJ_VxqQ.js";
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
import "./index.esm-D9S7AqLP.js";
import "./index.esm-CWvqd6S2.js";
import "./index.esm-Deajh7Nl.js";
var script$3 = {
  name: "UploadIcon",
  "extends": script$4
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$2];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$3.render = render$2;
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  buttonbar: "p-fileupload-buttonbar",
  chooseButton: function chooseButton(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-button p-component p-fileupload-choose", {
      "p-fileupload-choose-selected": props.mode === "basic" && instance.hasFiles,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }];
  },
  chooseIcon: "p-button-icon p-button-icon-left",
  chooseButtonLabel: "p-button-label",
  content: "p-fileupload-content",
  empty: "p-fileupload-empty",
  uploadIcon: "p-button-icon p-button-icon-left",
  label: "p-button-label",
  file: "p-fileupload-file",
  thumbnail: "p-fileupload-file-thumbnail",
  details: "p-fileupload-file-details",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  badge: "p-fileupload-file-badge",
  actions: "p-fileupload-file-actions",
  removeButton: "p-fileupload-file-remove"
};
var FileUploadStyle = BaseStyle.extend({
  name: "fileupload",
  classes
});
var script$2 = {
  name: "BaseFileUpload",
  "extends": script$a,
  props: {
    name: {
      type: String,
      "default": null
    },
    url: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "advanced"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    accept: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    auto: {
      type: Boolean,
      "default": false
    },
    maxFileSize: {
      type: Number,
      "default": null
    },
    invalidFileSizeMessage: {
      type: String,
      "default": "{0}: Invalid file size, file size should be smaller than {1}."
    },
    invalidFileTypeMessage: {
      type: String,
      "default": "{0}: Invalid file type, allowed file types: {1}."
    },
    fileLimit: {
      type: Number,
      "default": null
    },
    invalidFileLimitMessage: {
      type: String,
      "default": "Maximum number of files exceeded, limit is {0} at most."
    },
    withCredentials: {
      type: Boolean,
      "default": false
    },
    previewWidth: {
      type: Number,
      "default": 50
    },
    chooseLabel: {
      type: String,
      "default": null
    },
    uploadLabel: {
      type: String,
      "default": null
    },
    cancelLabel: {
      type: String,
      "default": null
    },
    customUpload: {
      type: Boolean,
      "default": false
    },
    showUploadButton: {
      type: Boolean,
      "default": true
    },
    showCancelButton: {
      type: Boolean,
      "default": true
    },
    chooseIcon: {
      type: String,
      "default": void 0
    },
    uploadIcon: {
      type: String,
      "default": void 0
    },
    cancelIcon: {
      type: String,
      "default": void 0
    },
    style: null,
    "class": null
  },
  style: FileUploadStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "FileContent",
  hostName: "FileUpload",
  "extends": script$a,
  emits: ["remove"],
  props: {
    files: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    badgeSeverity: {
      type: String,
      "default": "warning"
    },
    badgeValue: {
      type: String,
      "default": null
    },
    previewWidth: {
      type: Number,
      "default": 50
    },
    templates: {
      type: null,
      "default": null
    }
  },
  methods: {
    formatSize: function formatSize(bytes) {
      var _this$$primevue$confi;
      var k = 1024;
      var dm = 3;
      var sizes = ((_this$$primevue$confi = this.$primevue.config.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.fileSizeTypes) || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (bytes === 0) {
        return "0 ".concat(sizes[0]);
      }
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      var formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
      return "".concat(formattedSize, " ").concat(sizes[i]);
    }
  },
  components: {
    FileUploadButton: script$5,
    FileUploadBadge: script$b,
    TimesIcon: script$9
  }
};
var _hoisted_1$1 = ["alt", "src", "width"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FileUploadBadge = resolveComponent("FileUploadBadge");
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _component_FileUploadButton = resolveComponent("FileUploadButton");
  return openBlock(true), createElementBlock(Fragment, null, renderList($props.files, function(file, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: file.name + file.type + file.size,
      "class": _ctx.cx("file")
    }, _ctx.ptm("file")), [createElementVNode("img", mergeProps({
      role: "presentation",
      "class": _ctx.cx("thumbnail"),
      alt: file.name,
      src: file.objectURL,
      width: $props.previewWidth
    }, _ctx.ptm("thumbnail")), null, 16, _hoisted_1$1), createElementVNode("div", mergeProps({
      "class": _ctx.cx("details")
    }, _ctx.ptm("details")), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("fileName")
    }, _ctx.ptm("fileName")), toDisplayString(file.name), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("fileSize")
    }, _ctx.ptm("fileSize")), toDisplayString($options.formatSize(file.size)), 17), createVNode(_component_FileUploadBadge, {
      value: $props.badgeValue,
      "class": normalizeClass(_ctx.cx("badge")),
      severity: $props.badgeSeverity,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("badge")
    }, null, 8, ["value", "class", "severity", "unstyled", "pt"])], 16), createElementVNode("div", mergeProps({
      "class": _ctx.cx("actions")
    }, _ctx.ptm("actions")), [createVNode(_component_FileUploadButton, {
      onClick: function onClick($event) {
        return _ctx.$emit("remove", index);
      },
      text: "",
      rounded: "",
      severity: "danger",
      "class": normalizeClass(_ctx.cx("removeButton")),
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("removeButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [$props.templates.fileremoveicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.fileremoveicon), {
          key: 0,
          "class": normalizeClass(iconProps["class"]),
          file,
          index
        }, null, 8, ["class", "file", "index"])) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": iconProps["class"],
          "aria-hidden": "true"
        }, _ctx.ptm("removeButton")["icon"]), null, 16, ["class"]))];
      }),
      _: 2
    }, 1032, ["onClick", "class", "unstyled", "pt"])], 16)], 16);
  }), 128);
}
script$1.render = render$1;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
      if (it) o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null) it["return"]();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var script = {
  name: "FileUpload",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["select", "uploader", "before-upload", "progress", "upload", "error", "before-send", "clear", "remove", "remove-uploaded-file"],
  duplicateIEEvent: false,
  data: function data() {
    return {
      uploadedFileCount: 0,
      files: [],
      messages: [],
      focused: false,
      progress: null,
      uploadedFiles: []
    };
  },
  methods: {
    onFileSelect: function onFileSelect(event) {
      if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
        this.duplicateIEEvent = false;
        return;
      }
      this.messages = [];
      this.files = this.files || [];
      var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      var _iterator = _createForOfIteratorHelper(files), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var file = _step.value;
          if (!this.isFileSelected(file)) {
            if (this.validate(file)) {
              if (this.isImage(file)) {
                file.objectURL = (void 0).URL.createObjectURL(file);
              }
              this.files.push(file);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.$emit("select", {
        originalEvent: event,
        files: this.files
      });
      if (this.fileLimit) {
        this.checkFileLimit();
      }
      if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
        this.upload();
      }
      if (event.type !== "drop" && this.isIE11()) {
        this.clearIEInput();
      } else {
        this.clearInputElement();
      }
    },
    choose: function choose() {
      this.$refs.fileInput.click();
    },
    upload: function upload() {
      var _this = this;
      if (this.customUpload) {
        if (this.fileLimit) {
          this.uploadedFileCount += this.files.length;
        }
        this.$emit("uploader", {
          files: this.files
        });
        this.clear();
      } else {
        var xhr = new (void 0)();
        var formData = new FormData();
        this.$emit("before-upload", {
          xhr,
          formData
        });
        var _iterator2 = _createForOfIteratorHelper(this.files), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var file = _step2.value;
            formData.append(this.name, file, file.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        xhr.upload.addEventListener("progress", function(event) {
          if (event.lengthComputable) {
            _this.progress = Math.round(event.loaded * 100 / event.total);
          }
          _this.$emit("progress", {
            originalEvent: event,
            progress: _this.progress
          });
        });
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            var _this$uploadedFiles;
            _this.progress = 0;
            if (xhr.status >= 200 && xhr.status < 300) {
              if (_this.fileLimit) {
                _this.uploadedFileCount += _this.files.length;
              }
              _this.$emit("upload", {
                xhr,
                files: _this.files
              });
            } else {
              _this.$emit("error", {
                xhr,
                files: _this.files
              });
            }
            (_this$uploadedFiles = _this.uploadedFiles).push.apply(_this$uploadedFiles, _toConsumableArray(_this.files));
            _this.clear();
          }
        };
        xhr.open("POST", this.url, true);
        this.$emit("before-send", {
          xhr,
          formData
        });
        xhr.withCredentials = this.withCredentials;
        xhr.send(formData);
      }
    },
    clear: function clear() {
      this.files = [];
      this.messages = null;
      this.$emit("clear");
      if (this.isAdvanced) {
        this.clearInputElement();
      }
    },
    onFocus: function onFocus() {
      this.focused = true;
    },
    onBlur: function onBlur() {
      this.focused = false;
    },
    isFileSelected: function isFileSelected(file) {
      if (this.files && this.files.length) {
        var _iterator3 = _createForOfIteratorHelper(this.files), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var sFile = _step3.value;
            if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) return true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    },
    isIE11: function isIE11() {
      return !!(void 0)["MSInputMethodContext"] && !!(void 0)["documentMode"];
    },
    validate: function validate(file) {
      if (this.accept && !this.isFileTypeValid(file)) {
        this.messages.push(this.invalidFileTypeMessage.replace("{0}", file.name).replace("{1}", this.accept));
        return false;
      }
      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.messages.push(this.invalidFileSizeMessage.replace("{0}", file.name).replace("{1}", this.formatSize(this.maxFileSize)));
        return false;
      }
      return true;
    },
    isFileTypeValid: function isFileTypeValid(file) {
      var acceptableTypes = this.accept.split(",").map(function(type2) {
        return type2.trim();
      });
      var _iterator4 = _createForOfIteratorHelper(acceptableTypes), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var type = _step4.value;
          var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
          if (acceptable) {
            return true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return false;
    },
    getTypeClass: function getTypeClass(fileType) {
      return fileType.substring(0, fileType.indexOf("/"));
    },
    isWildcard: function isWildcard(fileType) {
      return fileType.indexOf("*") !== -1;
    },
    getFileExtension: function getFileExtension(file) {
      return "." + file.name.split(".").pop();
    },
    isImage: function isImage(file) {
      return /^image\//.test(file.type);
    },
    onDragEnter: function onDragEnter(event) {
      if (!this.disabled) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    onDragOver: function onDragOver(event) {
      if (!this.disabled) {
        !this.isUnstyled && DomHandler.addClass(this.$refs.content, "p-fileupload-highlight");
        this.$refs.content.setAttribute("data-p-highlight", true);
        event.stopPropagation();
        event.preventDefault();
      }
    },
    onDragLeave: function onDragLeave() {
      if (!this.disabled) {
        !this.isUnstyled && DomHandler.removeClass(this.$refs.content, "p-fileupload-highlight");
        this.$refs.content.setAttribute("data-p-highlight", false);
      }
    },
    onDrop: function onDrop(event) {
      if (!this.disabled) {
        !this.isUnstyled && DomHandler.removeClass(this.$refs.content, "p-fileupload-highlight");
        this.$refs.content.setAttribute("data-p-highlight", false);
        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var allowDrop = this.multiple || files && files.length === 1;
        if (allowDrop) {
          this.onFileSelect(event);
        }
      }
    },
    onBasicUploaderClick: function onBasicUploaderClick(event) {
      if (this.hasFiles) this.upload();
      else if (event.button === 0) this.$refs.fileInput.click();
    },
    remove: function remove(index) {
      this.clearInputElement();
      var removedFile = this.files.splice(index, 1)[0];
      this.files = _toConsumableArray(this.files);
      this.$emit("remove", {
        file: removedFile,
        files: this.files
      });
    },
    removeUploadedFile: function removeUploadedFile(index) {
      var removedFile = this.uploadedFiles.splice(index, 1)[0];
      this.uploadedFiles = _toConsumableArray(this.uploadedFiles);
      this.$emit("remove-uploaded-file", {
        file: removedFile,
        files: this.uploadedFiles
      });
    },
    clearInputElement: function clearInputElement() {
      this.$refs.fileInput.value = "";
    },
    clearIEInput: function clearIEInput() {
      if (this.$refs.fileInput) {
        this.duplicateIEEvent = true;
        this.$refs.fileInput.value = "";
      }
    },
    formatSize: function formatSize2(bytes) {
      var _this$$primevue$confi;
      var k = 1024;
      var dm = 3;
      var sizes = ((_this$$primevue$confi = this.$primevue.config.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.fileSizeTypes) || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (bytes === 0) {
        return "0 ".concat(sizes[0]);
      }
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      var formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
      return "".concat(formattedSize, " ").concat(sizes[i]);
    },
    isFileLimitExceeded: function isFileLimitExceeded() {
      if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {
        this.focused = false;
      }
      return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    },
    checkFileLimit: function checkFileLimit() {
      if (this.isFileLimitExceeded()) {
        this.messages.push(this.invalidFileLimitMessage.replace("{0}", this.fileLimit.toString()));
      }
    },
    onMessageClose: function onMessageClose() {
      this.messages = null;
    }
  },
  computed: {
    isAdvanced: function isAdvanced() {
      return this.mode === "advanced";
    },
    isBasic: function isBasic() {
      return this.mode === "basic";
    },
    chooseButtonClass: function chooseButtonClass() {
      return [this.cx("chooseButton"), this["class"]];
    },
    basicChooseButtonLabel: function basicChooseButtonLabel() {
      return this.auto ? this.chooseButtonLabel : this.hasFiles ? this.files.map(function(f) {
        return f.name;
      }).join(", ") : this.chooseButtonLabel;
    },
    hasFiles: function hasFiles() {
      return this.files && this.files.length > 0;
    },
    hasUploadedFiles: function hasUploadedFiles() {
      return this.uploadedFiles && this.uploadedFiles.length > 0;
    },
    chooseDisabled: function chooseDisabled() {
      return this.disabled || this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    },
    uploadDisabled: function uploadDisabled() {
      return this.disabled || !this.hasFiles || this.fileLimit && this.fileLimit < this.files.length;
    },
    cancelDisabled: function cancelDisabled() {
      return this.disabled || !this.hasFiles;
    },
    chooseButtonLabel: function chooseButtonLabel() {
      return this.chooseLabel || this.$primevue.config.locale.choose;
    },
    uploadButtonLabel: function uploadButtonLabel() {
      return this.uploadLabel || this.$primevue.config.locale.upload;
    },
    cancelButtonLabel: function cancelButtonLabel() {
      return this.cancelLabel || this.$primevue.config.locale.cancel;
    },
    completedLabel: function completedLabel() {
      return this.$primevue.config.locale.completed;
    },
    pendingLabel: function pendingLabel() {
      return this.$primevue.config.locale.pending;
    }
  },
  components: {
    FileUploadButton: script$5,
    FileUploadProgressBar: script$6,
    FileUploadMessage: script$7,
    FileContent: script$1,
    PlusIcon: script$8,
    UploadIcon: script$3,
    TimesIcon: script$9
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["multiple", "accept", "disabled"];
var _hoisted_2 = ["accept", "disabled", "multiple"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FileUploadButton = resolveComponent("FileUploadButton");
  var _component_FileUploadProgressBar = resolveComponent("FileUploadProgressBar");
  var _component_FileContent = resolveComponent("FileContent");
  var _component_FileUploadMessage = resolveComponent("FileUploadMessage");
  var _directive_ripple = resolveDirective("ripple");
  return $options.isAdvanced ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("input", mergeProps({
    ref: "fileInput",
    type: "file",
    onChange: _cache[0] || (_cache[0] = function() {
      return $options.onFileSelect && $options.onFileSelect.apply($options, arguments);
    }),
    multiple: _ctx.multiple,
    accept: _ctx.accept,
    disabled: $options.chooseDisabled
  }, _ctx.ptm("input")), null, 16, _hoisted_1), createElementVNode("div", mergeProps({
    "class": _ctx.cx("buttonbar")
  }, _ctx.ptm("buttonbar")), [renderSlot(_ctx.$slots, "header", {
    files: $data.files,
    uploadedFiles: $data.uploadedFiles,
    chooseCallback: $options.choose,
    uploadCallback: $options.upload,
    clearCallback: $options.clear
  }, function() {
    return [withDirectives((openBlock(), createElementBlock("span", mergeProps({
      "class": $options.chooseButtonClass,
      style: _ctx.style,
      onClick: _cache[1] || (_cache[1] = function() {
        return $options.choose && $options.choose.apply($options, arguments);
      }),
      onKeydown: _cache[2] || (_cache[2] = withKeys(function() {
        return $options.choose && $options.choose.apply($options, arguments);
      }, ["enter"])),
      onFocus: _cache[3] || (_cache[3] = function() {
        return $options.onFocus && $options.onFocus.apply($options, arguments);
      }),
      onBlur: _cache[4] || (_cache[4] = function() {
        return $options.onBlur && $options.onBlur.apply($options, arguments);
      }),
      tabindex: "0"
    }, _ctx.ptm("chooseButton")), [renderSlot(_ctx.$slots, "chooseicon", {
      "class": normalizeClass(_ctx.cx("chooseIcon"))
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.chooseIcon ? "span" : "PlusIcon"), mergeProps({
        "class": [_ctx.cx("chooseIcon"), _ctx.chooseIcon],
        "aria-hidden": "true"
      }, _ctx.ptm("chooseIcon")), null, 16, ["class"]))];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("chooseButtonLabel")
    }, _ctx.ptm("chooseButtonLabel")), toDisplayString($options.chooseButtonLabel), 17)], 16)), [[_directive_ripple]]), _ctx.showUploadButton ? (openBlock(), createBlock(_component_FileUploadButton, {
      key: 0,
      label: $options.uploadButtonLabel,
      onClick: $options.upload,
      disabled: $options.uploadDisabled,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("uploadButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "uploadicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.uploadIcon ? "span" : "UploadIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.uploadIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("uploadButton")["icon"], {
            "data-pc-section": "uploadbuttonicon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 8, ["label", "onClick", "disabled", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.showCancelButton ? (openBlock(), createBlock(_component_FileUploadButton, {
      key: 1,
      label: $options.cancelButtonLabel,
      onClick: $options.clear,
      disabled: $options.cancelDisabled,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("cancelButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "cancelicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.cancelIcon ? "span" : "TimesIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.cancelIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("cancelButton")["icon"], {
            "data-pc-section": "cancelbuttonicon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 8, ["label", "onClick", "disabled", "unstyled", "pt"])) : createCommentVNode("", true)];
  })], 16), createElementVNode("div", mergeProps({
    ref: "content",
    "class": _ctx.cx("content"),
    onDragenter: _cache[5] || (_cache[5] = function() {
      return $options.onDragEnter && $options.onDragEnter.apply($options, arguments);
    }),
    onDragover: _cache[6] || (_cache[6] = function() {
      return $options.onDragOver && $options.onDragOver.apply($options, arguments);
    }),
    onDragleave: _cache[7] || (_cache[7] = function() {
      return $options.onDragLeave && $options.onDragLeave.apply($options, arguments);
    }),
    onDrop: _cache[8] || (_cache[8] = function() {
      return $options.onDrop && $options.onDrop.apply($options, arguments);
    })
  }, _ctx.ptm("content"), {
    "data-p-highlight": false
  }), [renderSlot(_ctx.$slots, "content", {
    files: $data.files,
    uploadedFiles: $data.uploadedFiles,
    removeUploadedFileCallback: $options.removeUploadedFile,
    removeFileCallback: $options.remove,
    progress: $data.progress,
    messages: $data.messages
  }, function() {
    return [$options.hasFiles ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createVNode(_component_FileUploadProgressBar, {
      value: $data.progress,
      showValue: false,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("progressbar")
    }, null, 8, ["value", "unstyled", "pt"]), createVNode(_component_FileContent, {
      files: $data.files,
      onRemove: $options.remove,
      badgeValue: $options.pendingLabel,
      previewWidth: _ctx.previewWidth,
      templates: _ctx.$slots,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])], 64)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, function(msg) {
      return openBlock(), createBlock(_component_FileUploadMessage, {
        key: msg,
        severity: "error",
        onClose: $options.onMessageClose,
        unstyled: _ctx.unstyled,
        pt: _ctx.ptm("message")
      }, {
        "default": withCtx(function() {
          return [createTextVNode(toDisplayString(msg), 1)];
        }),
        _: 2
      }, 1032, ["onClose", "unstyled", "pt"]);
    }), 128)), createVNode(_component_FileContent, {
      files: $data.uploadedFiles,
      onRemove: $options.removeUploadedFile,
      badgeValue: $options.completedLabel,
      badgeSeverity: "success",
      previewWidth: _ctx.previewWidth,
      templates: _ctx.$slots,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])];
  }), _ctx.$slots.empty && !$options.hasFiles && !$options.hasUploadedFiles ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("empty")
  }, _ctx.ptm("empty")), [renderSlot(_ctx.$slots, "empty")], 16)) : createCommentVNode("", true)], 16)], 16)) : $options.isBasic ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, function(msg) {
    return openBlock(), createBlock(_component_FileUploadMessage, {
      key: msg,
      severity: "error",
      onClose: $options.onMessageClose,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("messages")
    }, {
      "default": withCtx(function() {
        return [createTextVNode(toDisplayString(msg), 1)];
      }),
      _: 2
    }, 1032, ["onClose", "unstyled", "pt"]);
  }), 128)), withDirectives((openBlock(), createElementBlock("span", mergeProps({
    "class": $options.chooseButtonClass,
    style: _ctx.style,
    onMouseup: _cache[12] || (_cache[12] = function() {
      return $options.onBasicUploaderClick && $options.onBasicUploaderClick.apply($options, arguments);
    }),
    onKeydown: _cache[13] || (_cache[13] = withKeys(function() {
      return $options.choose && $options.choose.apply($options, arguments);
    }, ["enter"])),
    onFocus: _cache[14] || (_cache[14] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[15] || (_cache[15] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    tabindex: "0"
  }, _ctx.ptm("chooseButton")), [!$options.hasFiles || _ctx.auto ? renderSlot(_ctx.$slots, "uploadicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("uploadIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.uploadIcon ? "span" : "UploadIcon"), mergeProps({
      "class": [_ctx.cx("uploadIcon"), _ctx.uploadIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("uploadIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "chooseicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("chooseIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.chooseIcon ? "span" : "PlusIcon"), mergeProps({
      "class": [_ctx.cx("chooseIcon"), _ctx.chooseIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("chooseIcon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), toDisplayString($options.basicChooseButtonLabel), 17), !$options.hasFiles ? (openBlock(), createElementBlock("input", mergeProps({
    key: 2,
    ref: "fileInput",
    type: "file",
    accept: _ctx.accept,
    disabled: _ctx.disabled,
    multiple: _ctx.multiple,
    onChange: _cache[9] || (_cache[9] = function() {
      return $options.onFileSelect && $options.onFileSelect.apply($options, arguments);
    }),
    onFocus: _cache[10] || (_cache[10] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[11] || (_cache[11] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_2)) : createCommentVNode("", true)], 16)), [[_directive_ripple]])], 16)) : createCommentVNode("", true);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=fileupload.esm-DzMRSKjh.js.map
