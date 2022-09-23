var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, renderSlot, resolveComponent, createVNode, withCtx, createTextVNode, withModifiers, Transition, createBlock, Fragment, renderList, Teleport, withDirectives, vShow, resolveDynamicComponent, shallowRef, unref, computed, reactive, nextTick, defineComponent, inject, h, provide, ref, watch } from "vue";
function createRipple(event) {
  if (!event.currentTarget.querySelector(".--ripple"))
    return;
  const TARGET = event.currentTarget.querySelector(".--ripple");
  const RIPPLE = TARGET.querySelector(".--ripple-animation");
  if (!!RIPPLE)
    RIPPLE.remove();
  const TARGET_INFO = TARGET.getBoundingClientRect();
  const RIPPLE_SPAN = document.createElement("span");
  const RIPPLE_SIZE = Math.max(TARGET_INFO["width"], TARGET_INFO["height"]);
  RIPPLE_SPAN.style = `height: ${RIPPLE_SIZE}px !important; width: ${RIPPLE_SIZE}px !important;`;
  RIPPLE_SPAN.style.left = `${event.clientX - TARGET_INFO["x"] - RIPPLE_SIZE / 2}px`;
  RIPPLE_SPAN.style.top = `${event.clientY - TARGET_INFO["y"] - RIPPLE_SIZE / 2}px`;
  RIPPLE_SPAN.classList.add("--ripple-animation");
  TARGET.appendChild(RIPPLE_SPAN);
}
var createRipple$1 = {
  createRipple
};
const _sfc_main$j = {
  name: "gnkComponent",
  emits: ["update:modelValue", "mouseleave", "mouseover", "keydown", "keypress", "keyup", "click"],
  data() {
    return {
      store: gnk.Store
    };
  },
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    info: {
      type: Boolean,
      required: false,
      default: false
    },
    success: {
      type: Boolean,
      required: false,
      default: false
    },
    warning: {
      type: Boolean,
      required: false,
      default: false
    },
    danger: {
      type: Boolean,
      required: false,
      default: false
    },
    bug: {
      type: Boolean,
      required: false,
      default: false
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    },
    light: {
      type: Boolean,
      required: false,
      default: false
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    hexColor: {
      type: String,
      required: false,
      default: null,
      skip: true
    }
  },
  computed: {
    componentId() {
      return `${this.$options.name}_${([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))}`;
    },
    componentName() {
      return this.$options.name;
    },
    componentGeneralClasses() {
      var _a;
      let componentProps = {};
      for (let prop in this.$options.props) {
        if (!((_a = this.$options.props[prop]) == null ? void 0 : _a.skip))
          componentProps["--" + prop] = this[prop];
      }
      componentProps["|"] = true;
      return componentProps;
    }
  },
  methods: {
    componentElementClientRect() {
      var _a;
      let modalPosition = (_a = this == null ? void 0 : this.$el) == null ? void 0 : _a.getBoundingClientRect();
      return {
        top: !modalPosition ? 0 : modalPosition.top,
        left: !modalPosition ? 0 : modalPosition.left,
        width: !modalPosition ? 0 : modalPosition.width,
        height: !modalPosition ? 0 : modalPosition.height
      };
    },
    componentRaiseEvent(eventName, data) {
      let event = new CustomEvent(eventName, { detail: __spreadValues({ target: this.$el, component: this }, data) });
      this.$emit(eventName, event);
    },
    setCssVariable(element, propertyName, value) {
      if (typeof element !== "undefined") {
        element.style.setProperty(propertyName, value);
      }
    },
    hexToHsla(hex) {
      hex = (hex == null ? void 0 : hex.charAt(0)) == "#" ? hex : "#" + hex;
      if (/^#[0-9A-F]{6}$/i.test(hex) === false)
        return null;
      let r = 0, g = 0, b = 0;
      if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
      } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
      }
      r /= 255;
      g /= 255;
      b /= 255;
      let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h2 = 0, s = 0, l = 0;
      if (delta == 0)
        h2 = 0;
      else if (cmax == r)
        h2 = (g - b) / delta % 6;
      else if (cmax == g)
        h2 = (b - r) / delta + 2;
      else
        h2 = (r - g) / delta + 4;
      h2 = Math.round(h2 * 60);
      if (h2 < 0)
        h2 += 360;
      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
      return { "H": h2, "S": s + "%", "L": l + "%" };
    },
    setBaseColor(color) {
      let result2 = this.hexToHsla(color);
      if (!result2)
        return;
      let { H, S, L } = result2;
      this.setCssVariable(this.$el, "--COLOR-BASE-H", H);
      this.setCssVariable(this.$el, "--COLOR-BASE-S", S);
      this.setCssVariable(this.$el, "--COLOR-BASE-L", L);
    },
    objectToArray(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
  },
  watch: {
    hexColor(newValue) {
      this.setBaseColor(newValue);
    }
  },
  mounted() {
    if (typeof this.registerChild == "function")
      this.registerChild(this);
    this.setBaseColor(this == null ? void 0 : this.hexColor);
  },
  provide() {
    return {
      registerChild: typeof this.registerChild == "function" ? this.registerChild : null,
      uiLevel: this.uiLevel + 1
    };
  },
  inject: {}
};
var Image_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$i = {
  name: "gnkImage",
  extends: _sfc_main$j,
  data() {
    return {};
  },
  props: {
    src: {
      type: String,
      required: true,
      validator: function(value) {
        return value.length > 0;
      }
    },
    size: {
      type: String,
      required: false,
      validator: function(value) {
        return !!value && value.length > 0 && value.includes("x") && value.split("x")[0] > 0 && value.split("x")[1] > 0;
      }
    },
    alt: {
      type: String,
      required: false,
      default: ""
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: false
    },
    animation: {
      type: String,
      required: false,
      default: "none",
      validator: function(value) {
        return ["none", "zoomIn-light", "zoomIn-bw", "zoomIn-saturation", "zoomIn-sepia", "zoomIn-blur", "zoomIn-rotation", "zoomOut-light", "zoomOut-bw", "zoomOut-saturation", "zoomOut-sepia", "zoomOut-blur"].includes(value);
      }
    }
  },
  watch: {},
  mounted() {
  },
  computed: {
    componentClassObject() {
      return {
        "--none": this.animation === "none",
        "--zoomIn-light": this.animation == "zoomIn-light",
        "--zoomIn-bw": this.animation == "zoomIn-bw",
        "--zoomIn-saturation": this.animation == "zoomIn-saturation",
        "--zoomIn-sepia": this.animation == "zoomIn-sepia",
        "--zoomIn-blur": this.animation == "zoomIn-blur",
        "--zoomIn-rotation": this.animation == "zoomIn-rotation",
        "--zoomOut-light": this.animation == "zoomOut-light",
        "--zoomOut-bw": this.animation == "zoomOut-bw",
        "--zoomOut-saturation": this.animation == "zoomOut-saturation",
        "--zoomOut-sepia": this.animation == "zoomOut-sepia",
        "--zoomOut-blur": this.animation == "zoomOut-blur",
        "--default": true
      };
    },
    componentStyleObject() {
      var _a;
      return {
        "--img-background-url": `url(${this.src})`,
        "--img-background-alt": `url(${this.alt})`,
        "--img-background-size-w": !!this.size && this.size.length > 0 && this.size.includes("x") && this.size.split("x")[0] > 0 && this.size.split("x")[1] > 0 ? `${this.size.split("x")[0]}px` : "100%",
        "--img-background-size-h": !!this.size && this.size.length > 0 && this.size.includes("x") && this.size.split("x")[0] > 0 && this.size.split("x")[1] > 0 ? `${(_a = this.size) == null ? void 0 : _a.split("x")[1]}px` : "100%"
      };
    }
  },
  methods: {}
};
const _hoisted_1$i = ["id"];
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("div", { class: "--img-placeholder" }, null, -1);
const _hoisted_3$b = ["alt"];
const _hoisted_4$a = {
  key: 0,
  class: "--title | flex flex-centered"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    _hoisted_2$c,
    createElementVNode("div", {
      class: normalizeClass(["--img-background |", $options.componentClassObject]),
      alt: this.alt
    }, null, 10, _hoisted_3$b),
    this.showTitle && (this.title.constructor === String && this.title.length > 0) ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
      createElementVNode("h3", null, toDisplayString(this.title), 1)
    ])) : createCommentVNode("", true)
  ], 14, _hoisted_1$i);
}
var gnkImage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
var Badge_vue_vue_type_style_index_0_lang = "";
const _sfc_main$h = {
  name: "gnkBadge",
  extends: _sfc_main$j,
  data() {
    return {
      parentClientRect: null
    };
  },
  props: {
    position: {
      type: String,
      default: "top-right",
      validator: (value) => {
        return ["none", "top-right", "top-left", "bottom-right", "bottom-left"].includes(value);
      }
    },
    size: {
      type: String,
      required: false,
      default: "mini",
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--primary": true,
        "--top-right": this.position === "top-right",
        "--top-left": this.position === "top-left",
        "--bottom-right": this.position === "bottom-right",
        "--bottom-left": this.position === "bottom-left",
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini"
      };
    },
    componentStyleObject() {
      if (this.parentClientRect === null)
        return;
      return {};
    }
  },
  methods: {},
  mounted() {
    this.parentClientRect = this.$parent.componentElementClientRect();
  }
};
const _hoisted_1$h = ["id"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, _hoisted_1$h);
}
var gnkBadge = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
var _404_vue_vue_type_style_index_0_lang = "";
const _sfc_main$g = {
  name: "gnk404",
  extends: _sfc_main$j,
  props: {
    title: {
      type: String,
      required: false,
      default: "404"
    },
    label: {
      type: String,
      required: false,
      default: "Oops something went wrong :("
    },
    showGoBack: {
      type: Boolean,
      required: false,
      default: true
    },
    goBackLable: {
      type: String,
      required: false,
      default: "go back"
    }
  },
  mounted() {
  }
};
const _hoisted_1$g = ["id"];
const _hoisted_2$b = { class: "grid fill" };
const _hoisted_3$a = { class: "row" };
const _hoisted_4$9 = { class: "col-12 flex-centered" };
const _hoisted_5$9 = { class: "P404-500" };
const _hoisted_6$8 = { class: "row" };
const _hoisted_7$6 = { class: "col-12 flex-centered" };
const _hoisted_8$5 = { class: "row" };
const _hoisted_9$3 = {
  key: 0,
  class: "col-12 flex-centered p-t-20"
};
const _hoisted_10$2 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " chevron_left ", -1);
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_row = resolveComponent("row");
  const _component_gnk_button = resolveComponent("gnk-button");
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName + " |", _ctx.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    createElementVNode("div", _hoisted_2$b, [
      createVNode(_component_row, { class: "fill" }),
      createElementVNode("div", _hoisted_3$a, [
        createElementVNode("div", _hoisted_4$9, [
          createElementVNode("h1", _hoisted_5$9, toDisplayString($props.title), 1)
        ])
      ]),
      createElementVNode("div", _hoisted_6$8, [
        createElementVNode("div", _hoisted_7$6, toDisplayString($props.label), 1)
      ]),
      createElementVNode("div", _hoisted_8$5, [
        $props.showGoBack ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
          createVNode(_component_gnk_button, {
            success: "",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
          }, {
            default: withCtx(() => [
              _hoisted_10$2,
              createTextVNode(" " + toDisplayString($props.goBackLable), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]),
      createVNode(_component_row, { class: "fill" }),
      createVNode(_component_row, { class: "fill" })
    ])
  ], 10, _hoisted_1$g);
}
var gnk404 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
var Button_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  name: "gnkButton",
  extends: _sfc_main$j,
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {
      checked: false,
      activeStep: 0
    };
  },
  props: {
    to: {
      type: String,
      skip: true,
      default: ""
    },
    type: {
      type: String,
      required: false,
      skip: true,
      default: "button",
      validator(type) {
        return ["submit", "button", "reset", "toggle"].includes(type);
      }
    },
    busy: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    pill: {
      type: Boolean,
      required: false,
      default: false
    },
    circular: {
      type: Boolean,
      required: false,
      default: false
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    transparent: {
      type: Boolean,
      required: false,
      default: false
    },
    clear: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "default",
      skip: true,
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    animate: {
      type: String,
      required: false,
      skip: true,
      default: "default",
      validator(type) {
        return ["slide-up", "slide-left", "fade", "scale", "rotate", "default"].includes(type);
      }
    },
    animateInactive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    buttonType() {
      return this.type;
    },
    componentClassObject() {
      var _a;
      return {
        "--checked": this.type === "toggle" && this.checked,
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate": ((_a = this.$slots) == null ? void 0 : _a.animate) && !this.animateInactive ? true : false,
        "--animate-slide-up": this.animate === "slide-up" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-slide-left": this.animate === "slide-left" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-fade": this.animate === "fade" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-rotate": this.animate === "rotate" && !this.loading && !this.busy && !this.animateInactive ? true : false
      };
    }
  },
  emits: ["onchange", "click", "mouseover", "mouseleave", "mouseover", "keydown", "keypress", "keyup"],
  methods: {
    onToggle(eventName, event) {
      if (!!event)
        createRipple$1.createRipple(event);
      if (this.type === "toggle") {
        this.checked = !this.checked;
        let thisEvent = { componentId: this.componentId, newValue: this.checked, oldValue: !this.checked, event };
        if (typeof this.$parent.childChanged === "function")
          this.$parent.childChanged(thisEvent);
        this.componentRaiseEvent("onchange", thisEvent);
      }
      this.componentRaiseEvent(eventName, { event });
      if (this.to !== "")
        this.$router.push(this.to);
    }
  },
  mounted() {
  }
};
const _hoisted_1$f = ["checked", "disabled", "id", "type"];
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_3$9 = { class: "--content-holder" };
const _hoisted_4$8 = { class: "--content-step1" };
const _hoisted_5$8 = {
  key: 0,
  class: "--content-step2"
};
const _hoisted_6$7 = { class: "--badge-holder" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_progressbar = resolveComponent("gnk-progressbar");
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("button", {
    checked: $data.checked,
    class: normalizeClass([[_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses], "cursor-pointer inline-flex flex-centered"]),
    disabled: _ctx.disabled,
    id: _ctx.componentId,
    type: $options.buttonType,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onToggle("click", $event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", { event: $event }), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", { event: $event }), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", { event: $event }), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onToggle("keypress", $event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", { event: $event }), ["prevent"]))
  }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        this.loading ? (openBlock(), createBlock(_component_gnk_progressbar, {
          key: 0,
          loading: "",
          class: "fill"
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    _hoisted_2$a,
    createElementVNode("div", _hoisted_3$9, [
      createElementVNode("div", _hoisted_4$8, [
        renderSlot(_ctx.$slots, "default")
      ]),
      !!this.$slots.animate ? (openBlock(), createElementBlock("div", _hoisted_5$8, [
        renderSlot(_ctx.$slots, "animate")
      ])) : createCommentVNode("", true)
    ]),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
          key: 0,
          target: "#" + _ctx.componentId
        }, null, 8, ["target"])) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createElementVNode("div", _hoisted_6$7, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$f);
}
var gnkButton = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
var Checkbox_vue_vue_type_style_index_0_lang = "";
const _sfc_main$e = {
  name: "gnkCheckbox",
  extends: _sfc_main$j,
  emits: ["update:modelValue", "mouseleave", "mouseover", "keydown", "keypress", "keyup"],
  data() {
    return {
      defaultValue: null
    };
  },
  props: {
    name: {
      type: String,
      require: false,
      default: "",
      skip: true
    },
    value: {
      default: null,
      required: false,
      skip: true
    },
    modelValue: {
      default: null,
      required: false,
      skip: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
      skip: true
    },
    busy: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false,
      skip: true
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    lineThrough: {
      type: Boolean,
      required: false,
      default: false
    },
    align: {
      type: String,
      default: "right",
      skip: true,
      validator: (value) => ["left", "center", "right"].includes(value)
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "default",
      skip: true,
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    animate: {
      type: String,
      required: false,
      skip: true,
      default: "default",
      validator(type) {
        return ["rotate", "fade", "scale", "flip", "default"].includes(type);
      }
    }
  },
  computed: {
    isChecked() {
      return Array.isArray(this.modelValue) ? this.modelValue.includes(this.defaultValue) : this.modelValue === this.defaultValue;
    },
    componentClassObject: function() {
      return {
        "--primary": true,
        "--checked": this.isChecked,
        "--align-left": this.align === "left",
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate-fade": this.animate === "fade" && !this.loading && !this.busy ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.busy ? true : false,
        "--animate-flip": this.animate === "flip" && !this.loading && !this.busy ? true : false,
        "--animate-rotate": this.animate === "rotate" && !this.loading && !this.busy ? true : false
      };
    }
  },
  mounted() {
    this.defaultValue = this.value === null ? Math.random().toString(36).substr(2, 9) : this.value;
    if (this.checked)
      this.onchange(null);
  },
  watch: {
    value(newValue) {
      this.defaultValue = newValue === null ? Math.random().toString(36).substr(2, 9) : newValue;
    }
  },
  methods: {
    onchange(event) {
      if (!!event & !this.disabled & !this.busy & !this.loading)
        createRipple$1.createRipple(event);
      if (Array.isArray(this.modelValue)) {
        if (this.isChecked) {
          this.modelValue.splice(this.modelValue.indexOf(this.defaultValue), 1);
        } else {
          this.modelValue.push(this.defaultValue);
        }
        this.modelValue.sort();
        this.$emit("update:modelValue", this.modelValue);
      } else {
        if (this.isChecked) {
          this.$emit("update:modelValue", null);
        } else {
          this.$emit("update:modelValue", this.defaultValue);
        }
      }
    }
  }
};
const _hoisted_1$e = ["disabled", "id"];
const _hoisted_2$9 = ["id", "name", "checked", "value"];
const _hoisted_3$8 = { class: "--base" };
const _hoisted_4$7 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_5$7 = {
  key: 0,
  class: "--thumb | material-symbols-rounded"
};
const _hoisted_6$6 = {
  key: 1,
  class: "--thumb | material-symbols-rounded"
};
const _hoisted_7$5 = ["for"];
const _hoisted_8$4 = { class: "--badge-holder" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", { event: $event }), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", { event: $event }), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", { event: $event }), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", { event: $event }), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.componentId,
      name: $props.name,
      type: "Checkbox",
      checked: $options.isChecked,
      value: $data.defaultValue
    }, null, 8, _hoisted_2$9),
    createElementVNode("div", _hoisted_3$8, [
      _hoisted_4$7,
      !$props.indeterminate ? (openBlock(), createElementBlock("span", _hoisted_5$7, " done ")) : (openBlock(), createElementBlock("span", _hoisted_6$6, " remove "))
    ]),
    createElementVNode("label", { for: _ctx.componentId }, [
      renderSlot(_ctx.$slots, "label")
    ], 8, _hoisted_7$5),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_8$4, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$e);
}
var gnkCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
var Switch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  name: "gnkSwitch",
  extends: _sfc_main$j,
  emits: ["update:modelValue", "click", "mouseleave", "mouseover", "keydown", "keypress", "keyup"],
  data() {
    return {
      defaultValue: null
    };
  },
  props: {
    name: {
      type: String,
      require: false,
      default: "",
      skip: true
    },
    value: {
      default: null,
      required: false,
      skip: true
    },
    modelValue: {
      default: null,
      required: false,
      skip: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
      skip: true
    },
    busy: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false,
      skip: true
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    lineThrough: {
      type: Boolean,
      required: false,
      default: false
    },
    align: {
      type: String,
      default: "right",
      skip: true,
      validator: (value) => ["left", "center", "right"].includes(value)
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "default",
      skip: true,
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    animate: {
      type: String,
      required: false,
      skip: true,
      default: "default",
      validator(type) {
        return ["fade", "scale", "flip", "default"].includes(type);
      }
    }
  },
  computed: {
    isChecked() {
      return Array.isArray(this.modelValue) ? this.modelValue.includes(this.defaultValue) : this.modelValue === this.defaultValue;
    },
    componentClassObject: function() {
      return {
        "--primary": true,
        "--checked": this.isChecked,
        "--align-left": this.align === "left",
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate-fade": this.animate === "fade" && !this.loading && !this.busy ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.busy ? true : false,
        "--animate-flip": this.animate === "flip" && !this.loading && !this.busy ? true : false
      };
    }
  },
  mounted() {
    this.defaultValue = this.value === null ? Math.random().toString(36).substr(2, 9) : this.value;
    if (this.checked)
      this.onchange(null);
  },
  watch: {
    value(newValue) {
      this.defaultValue = newValue === null ? Math.random().toString(36).substr(2, 9) : newValue;
    }
  },
  methods: {
    onchange(event) {
      if (!!event & !this.disabled & !this.busy & !this.loading)
        createRipple$1.createRipple(event);
      if (Array.isArray(this.modelValue)) {
        if (this.isChecked) {
          this.modelValue.splice(this.modelValue.indexOf(this.defaultValue), 1);
        } else {
          this.modelValue.push(this.defaultValue);
        }
        this.modelValue.sort();
        this.$emit("update:modelValue", this.modelValue);
      } else {
        if (this.isChecked) {
          this.$emit("update:modelValue", null);
        } else {
          this.$emit("update:modelValue", this.defaultValue);
        }
      }
    }
  }
};
const _hoisted_1$d = ["disabled", "id"];
const _hoisted_2$8 = ["id", "name", "checked", "value"];
const _hoisted_3$7 = { class: "--base" };
const _hoisted_4$6 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_5$6 = {
  key: 0,
  class: "--switch-on"
};
const _hoisted_6$5 = /* @__PURE__ */ createElementVNode("div", { class: "--thumb" }, null, -1);
const _hoisted_7$4 = {
  key: 1,
  class: "--switch-off"
};
const _hoisted_8$3 = ["for"];
const _hoisted_9$2 = { class: "--badge-holder" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", { event: $event }), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", { event: $event }), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", { event: $event }), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", { event: $event }), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.componentId,
      name: $props.name,
      type: "checkbox",
      checked: $options.isChecked,
      value: $data.defaultValue
    }, null, 8, _hoisted_2$8),
    createElementVNode("div", _hoisted_3$7, [
      _hoisted_4$6,
      !!this.$slots.on ? (openBlock(), createElementBlock("div", _hoisted_5$6, [
        renderSlot(_ctx.$slots, "on")
      ])) : createCommentVNode("", true),
      _hoisted_6$5,
      !!this.$slots.off ? (openBlock(), createElementBlock("div", _hoisted_7$4, [
        renderSlot(_ctx.$slots, "off")
      ])) : createCommentVNode("", true)
    ]),
    createElementVNode("label", { for: _ctx.componentId }, [
      renderSlot(_ctx.$slots, "label")
    ], 8, _hoisted_8$3),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_9$2, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$d);
}
var gnkSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var Radio_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  name: "gnkRadio",
  extends: _sfc_main$j,
  emits: ["update:modelValue", "mouseleave", "mouseover", "keydown", "keypress", "keyup"],
  data() {
    return {
      defaultValue: null
    };
  },
  props: {
    name: {
      type: String,
      require: false,
      default: "",
      skip: true
    },
    value: {
      default: null,
      required: false,
      skip: true
    },
    modelValue: {
      default: null,
      required: false,
      skip: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
      skip: true
    },
    busy: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false,
      skip: true
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    lineThrough: {
      type: Boolean,
      required: false,
      default: false
    },
    align: {
      type: String,
      default: "right",
      skip: true,
      validator: (value) => ["left", "center", "right"].includes(value)
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "default",
      skip: true,
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    animate: {
      type: String,
      required: false,
      skip: true,
      default: "default",
      validator(type) {
        return ["fade", "scale", "flip", "default"].includes(type);
      }
    }
  },
  computed: {
    isChecked() {
      return this.modelValue === this.defaultValue;
    },
    componentClassObject: function() {
      return {
        "--primary": true,
        "--checked": this.isChecked,
        "--align-left": this.align === "left",
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate-fade": this.animate === "fade" && !this.loading && !this.busy ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.busy ? true : false,
        "--animate-flip": this.animate === "flip" && !this.loading && !this.busy ? true : false
      };
    }
  },
  mounted() {
    this.defaultValue = this.value === null ? Math.random().toString(36).substr(2, 9) : this.value;
    if (this.checked)
      this.onchange(null);
  },
  watch: {
    value(newValue) {
      this.defaultValue = newValue === null ? Math.random().toString(36).substr(2, 9) : newValue;
    }
  },
  methods: {
    onchange(event) {
      if (!!event & !this.disabled & !this.busy & !this.loading)
        createRipple$1.createRipple(event);
      this.$emit("update:modelValue", this.defaultValue);
    }
  }
};
const _hoisted_1$c = ["disabled", "id"];
const _hoisted_2$7 = ["id", "name", "checked", "value"];
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("div", { class: "--base" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "--thumb" }, [
    /* @__PURE__ */ createElementVNode("div", { class: "--ripple" })
  ])
], -1);
const _hoisted_4$5 = ["for"];
const _hoisted_5$5 = { class: "--badge-holder" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", { event: $event }), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", { event: $event }), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", { event: $event }), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", { event: $event }), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.componentId,
      name: $props.name,
      type: "radio",
      checked: $options.isChecked,
      value: $data.defaultValue
    }, null, 8, _hoisted_2$7),
    _hoisted_3$6,
    createElementVNode("label", { for: _ctx.componentId }, [
      renderSlot(_ctx.$slots, "label")
    ], 8, _hoisted_4$5),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_5$5, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$c);
}
var gnkRadio = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
async function animateValue(startValue, endValue, duration, updateCallback, finalCallback) {
  const sycles = Math.floor(duration / Math.abs(startValue - endValue));
  if (typeof updateCallback === "function")
    updateCallback(startValue);
  for (let i = startValue; i <= endValue; i++) {
    if (typeof updateCallback === "function")
      updateCallback(i);
    await sleep(sycles);
  }
  if (typeof finalCallback === "function")
    finalCallback(endValue);
}
function sleep(ms = 2e3) {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var SwipeManager_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
  name: "gnkSwipeManager",
  extends: _sfc_main$j,
  data() {
    return {
      swipe: {
        direction: "",
        passive: false,
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 },
        distance: { x: 0, y: 0 },
        time: {
          start: 0,
          end: 0,
          elapsed: 0
        }
      },
      busy: false
    };
  },
  props: {
    threshold: {
      type: Number,
      default: 100
    },
    restraint: {
      type: Number,
      default: 100
    },
    allowedTime: {
      type: Number,
      default: 300
    },
    allowedInterval: {
      type: Number,
      default: 50
    },
    captureDirection: {
      type: String,
      default: "none",
      validator(type) {
        return ["none", "all", "left", "right", "top", "bottom", "horizontal", "vertical"].includes(type);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {};
    }
  },
  watch: {
    captureDirection: function(newValue) {
      if (this.disabled !== newValue) {
        this.swipe = {
          direction: "",
          passive: false,
          start: { x: 0, y: 0 },
          end: { x: 0, y: 0 },
          distance: { x: 0, y: 0 },
          time: {
            start: 0,
            end: 0,
            elapsed: 0
          }
        };
      }
    },
    disabled: function(newValue) {
      if (this.disabled !== newValue) {
        this.swipe = {
          direction: "",
          start: { x: 0, y: 0 },
          end: { x: 0, y: 0 },
          distance: { x: 0, y: 0 },
          time: {
            start: 0,
            end: 0,
            elapsed: 0
          }
        };
      }
    }
  },
  emits: [
    "swiped",
    "swiping",
    "swipedLeft",
    "swipedRight",
    "swipedUp",
    "swipedDown",
    "touchDown",
    "touchUp",
    "touchMove"
  ],
  methods: {
    observeSwipe(element, callback = null) {
      element.addEventListener("touchstart", (e) => {
        if (this.disabled)
          return;
        if (this.captureDirection == "none")
          return;
        this.swipe = {
          direction: "",
          start: { x: 0, y: 0 },
          end: { x: 0, y: 0 },
          distance: { x: 0, y: 0 },
          time: {
            start: 0,
            end: 0,
            elapsed: 0
          }
        };
        this.swipe.start.x = e.touches[0].clientX;
        this.swipe.start.y = e.touches[0].clientY;
        this.swipe.time.start = new Date().getTime();
        this.$emit("touchDown", ...this.objectToArray(this.swipe));
      }, { passive: false });
      element.addEventListener("touchmove", (e) => {
        if (this.disabled)
          return;
        if (this.captureDirection == "none")
          return;
        if (this.swipe.passive) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.swipe.end.x = e.touches[0].clientX;
        this.swipe.end.y = e.touches[0].clientY;
        this.swipe.distance.x = this.swipe.end.x - this.swipe.start.x;
        this.swipe.distance.y = this.swipe.end.y - this.swipe.start.y;
        this.swipe.time.elapsed = new Date().getTime() - this.swipe.time.start;
        if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "right";
          this.swipe.passive = this.captureDirection == this.swipe.direction || this.captureDirection == "horizontal" ? true : false;
        } else if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x < -1 * this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "left";
          this.swipe.passive = this.captureDirection == this.swipe.direction || this.captureDirection == "horizontal" ? true : false;
        } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "down";
          this.swipe.passive = this.captureDirection == this.swipe.direction || this.captureDirection == "vertical" ? true : false;
        } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y < -1 * this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "up";
          this.swipe.passive = this.captureDirection == this.swipe.direction || this.captureDirection == "vertical" ? true : false;
        }
        this.$emit("touchMove", ...this.objectToArray(this.swipe));
        this.$emit("swiping", ...this.objectToArray(this.swipe));
      }, { passive: false });
      element.addEventListener("touchend", async (e) => {
        if (this.disabled)
          return;
        if (this.captureDirection == "none")
          return;
        this.swipe.time.end = new Date().getTime();
        this.swipe.time.elapsed = this.swipe.time.end - this.swipe.time.start;
        switch (true) {
          case (this.swipe.direction == "right" && (this.captureDirection == "right" || this.captureDirection == "horizontal")):
            this.$emit("swipedRight", ...this.objectToArray(this.swipe));
            break;
          case (this.swipe.direction == "left" && (this.captureDirection == "left" || this.captureDirection == "horizontal")):
            this.$emit("swipedLeft", ...this.objectToArray(this.swipe));
            break;
          case (this.swipe.direction == "down" && (this.captureDirection == "down" || this.captureDirection == "vertical")):
            this.$emit("swipedDown", ...this.objectToArray(this.swipe));
            break;
          case (this.swipe.direction == "up" && (this.captureDirection == "up" || this.captureDirection == "vertical")):
            this.$emit("swipedUp", ...this.objectToArray(this.swipe));
            break;
          default:
            return;
        }
        if (this.swipe.direction) {
          e.preventDefault();
          e.stopPropagation();
          this.$emit("touchUp", ...this.objectToArray(this.swipe));
          this.$emit("swiped", ...this.objectToArray(this.swipe));
          if (callback instanceof Function)
            callback(this.swipe.direction);
        }
        await sleep(this.allowedInterval);
      }, { passive: true });
    }
  },
  mounted() {
    this.observeSwipe(this.$el);
  }
};
const _hoisted_1$b = ["id"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["p-0 m-0 fill", [_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$b);
}
var gnkSwipeManager = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
var Input_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  name: "gnkInput",
  extends: _sfc_main$j,
  emits: ["update:modelValue", "click", "mouseleave", "mouseover", "keydown", "keypress", "keyup", "valueChanged"],
  data() {
    return {
      text: this.modelValue,
      passwordVisible: false
    };
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
      skip: true,
      validator: (value) => ["text", "password", "search", "number", "url", "time", "date"].includes(value)
    },
    strenght: {
      type: Boolean,
      require: false,
      default: false,
      skip: true
    },
    modelValue: {
      type: String,
      required: false,
      default: void 0,
      skip: true
    },
    placeholder: {
      type: String,
      required: false,
      default: void 0,
      skip: true
    },
    icon: {
      type: String,
      required: false,
      default: void 0,
      skip: true
    },
    busy: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    lineThrough: {
      type: Boolean,
      required: false,
      default: false
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "default",
      skip: true,
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    min: {
      type: Number,
      required: false,
      default: 1,
      skip: true
    },
    max: {
      type: Number,
      required: false,
      default: 100,
      skip: true
    },
    step: {
      type: Number,
      required: false,
      default: 1,
      skip: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
      skip: true
    },
    minlength: {
      type: Number,
      required: false,
      default: void 0,
      skip: true
    },
    maxlength: {
      type: Number,
      required: false,
      default: void 0,
      skip: true
    },
    pattern: {
      type: String,
      required: false,
      default: void 0,
      skip: true
    },
    clearButton: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  computed: {
    componentClassObject: function() {
      return {
        "--primary": true,
        "--align-left": this.align === "left",
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate-fade": this.animate === "fade" && !this.loading && !this.busy ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.busy ? true : false,
        "--animate-flip": this.animate === "flip" && !this.loading && !this.busy ? true : false,
        "--no-placeholder": this.placeholder === null || this.placeholder === void 0 || this.placeholder == "",
        "--has-value": !(this.text === void 0 || this.text === null || this.text == "")
      };
    },
    passwordStrenght: function() {
      console.log(this.text);
      try {
        let level = 0;
        if (/\d/.test(this.text))
          level += 20;
        if (/(.*[a-z].*)/.test(this.text))
          level += 20;
        if (/(.*[A-Z].*)/.test(this.text))
          level += 20;
        if (this.text.length > 7)
          level += 20;
        if (/[^A-Za-z0-0]/.test(this.text))
          level += 20;
        return level;
      } catch {
        return 0;
      }
    },
    passwordStrenghtColor: function() {
      return {
        "--danger": this.passwordStrenght <= 40,
        "--warning": this.passwordStrenght >= 40 & this.passwordStrenght < 80,
        "--success": this.passwordStrenght >= 80
      };
    }
  },
  watch: {
    modelValue(newModelValue) {
      this.text = newModelValue;
    },
    text(newValue) {
      this.$emit("update:modelValue", newValue);
    }
  },
  methods: {
    onchange(eventName, data) {
      if (eventName == "valueChanged") {
        if (this.type == "number") {
          switch (true) {
            case (data.event.target.value == "" || data.event.target.value === void 0):
              this.text = this.min;
              break;
            case data.event.target.value >= this.max:
              this.text = this.max;
              break;
            case data.event.target.value <= this.min:
              this.text = this.min;
              break;
            default:
              this.text = data.event.target.value;
          }
        } else {
          this.text = data.event.target.value == "" ? void 0 : data.event.target.value;
        }
        this.$emit("update:modelValue", this.text);
      }
    },
    buttonClicked(eventName) {
      this.$el.getElementsByClassName("--input")[0].focus();
      switch (eventName) {
        case "clear":
          this.text = this.type == "number" ? this.min : void 0;
          this.$emit("update:modelValue", this.text);
          break;
        case "numberUp":
          let resultup = Number(this.text === void 0 ? this.min : this.text) + Number(this.step) * 1;
          this.text = resultup > this.max ? this.max : resultup;
          break;
        case "numberDown":
          let resultdown = Number(this.text === void 0 ? this.min : this.text) + Number(this.step) * -1;
          this.text = resultdown < this.min ? this.min : resultdown;
          break;
        case "showPassword":
          this.passwordVisible = !this.passwordVisible;
          break;
        default:
          return;
      }
    }
  }
};
const _hoisted_1$a = ["disabled", "id"];
const _hoisted_2$6 = { class: "--base" };
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_4$4 = {
  key: 0,
  class: "--icon | material-symbols-rounded"
};
const _hoisted_5$4 = ["type", "value", "name", "disabled", "min", "max", "step", "required", "minlenght", "maxlenght", "pattern"];
const _hoisted_6$4 = ["for"];
const _hoisted_7$3 = {
  key: 1,
  class: "--button-upDown | flex flex-row"
};
const _hoisted_8$2 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " arrow_upward ", -1);
const _hoisted_9$1 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " arrow_downward ", -1);
const _hoisted_10$1 = {
  key: 0,
  class: "material-symbols-rounded"
};
const _hoisted_11$1 = {
  key: 1,
  class: "material-symbols-rounded"
};
const _hoisted_12$1 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " close ", -1);
const _hoisted_13$1 = { class: "--badge-holder" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_button = resolveComponent("gnk-button");
  const _component_gnk_progressbar = resolveComponent("gnk-progressbar");
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[5] || (_cache[5] = ($event) => [$options.buttonClicked("base"), this.onchange("click", { event: $event })]),
    onMouseleave: _cache[6] || (_cache[6] = ($event) => this.componentRaiseEvent("mouseleave", { event: $event })),
    onMouseover: _cache[7] || (_cache[7] = ($event) => this.componentRaiseEvent("mouseover", { event: $event })),
    onKeydown: _cache[8] || (_cache[8] = ($event) => this.componentRaiseEvent("keydown", { event: $event })),
    onKeypress: _cache[9] || (_cache[9] = ($event) => this.componentRaiseEvent("keypress", { event: $event })),
    onKeyup: _cache[10] || (_cache[10] = ($event) => this.componentRaiseEvent("keyup", { event: $event }))
  }, [
    createElementVNode("div", _hoisted_2$6, [
      _hoisted_3$5,
      this.icon != void 0 ? (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(this.icon), 1)) : createCommentVNode("", true),
      createElementVNode("input", {
        class: "--input",
        ref: "input",
        type: this.passwordVisible ? "text" : $props.type,
        placeholder: "  ",
        value: $data.text,
        name: _ctx.componentId,
        onInput: _cache[0] || (_cache[0] = ($event) => this.onchange("valueChanged", { event: $event })),
        disabled: _ctx.disabled,
        min: $props.min,
        max: $props.max,
        step: $props.step,
        required: $props.required,
        minlenght: _ctx.minlenght,
        maxlenght: _ctx.maxlenght,
        pattern: $props.pattern,
        autofocus: ""
      }, null, 40, _hoisted_5$4),
      createElementVNode("label", {
        class: "--placeholder",
        for: _ctx.componentId
      }, toDisplayString($props.placeholder), 9, _hoisted_6$4),
      this.type == "number" ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
        createVNode(_component_gnk_button, {
          disabled: _ctx.disabled,
          class: "--button-down",
          circular: "",
          clear: "",
          light: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.buttonClicked("numberUp"))
        }, {
          default: withCtx(() => [
            _hoisted_8$2
          ]),
          _: 1
        }, 8, ["disabled"]),
        createVNode(_component_gnk_button, {
          disabled: _ctx.disabled,
          class: "--button-up",
          circular: "",
          clear: "",
          light: "",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.buttonClicked("numberDown"))
        }, {
          default: withCtx(() => [
            _hoisted_9$1
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : createCommentVNode("", true),
      this.type == "password" ? (openBlock(), createBlock(_component_gnk_button, {
        key: 2,
        disabled: _ctx.disabled,
        class: "--button-showPassword",
        circular: "",
        clear: "",
        light: "",
        onClick: _cache[3] || (_cache[3] = ($event) => $options.buttonClicked("showPassword"))
      }, {
        default: withCtx(() => [
          this.passwordVisible ? (openBlock(), createElementBlock("span", _hoisted_10$1, " visibility_off ")) : (openBlock(), createElementBlock("span", _hoisted_11$1, " visibility "))
        ]),
        _: 1
      }, 8, ["disabled"])) : createCommentVNode("", true),
      createVNode(_component_gnk_button, {
        disabled: _ctx.disabled,
        class: "--button-clear",
        circular: "",
        clear: "",
        light: "",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.buttonClicked("clear"))
      }, {
        default: withCtx(() => [
          _hoisted_12$1
        ]),
        _: 1
      }, 8, ["disabled"]),
      this.type == "password" && this.strenght ? (openBlock(), createBlock(_component_gnk_progressbar, {
        key: 3,
        value: $options.passwordStrenght,
        square: "",
        class: normalizeClass([$options.passwordStrenghtColor])
      }, null, 8, ["value", "class"])) : createCommentVNode("", true)
    ]),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      class: "--loading",
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_13$1, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$a);
}
var gnkInput = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var Counter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  name: "gnkCounter",
  extends: _sfc_main$j,
  data() {
    return {
      currentValue: 0
    };
  },
  props: {
    value: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value >= 0;
      }
    },
    duration: {
      type: Number,
      required: false,
      default: 5e3,
      validator(type) {
        return type >= 0;
      }
    }
  },
  computed: {
    componentClassObject() {
      return {};
    },
    componentStyleObject() {
      return {};
    }
  },
  watch: {
    value(newValue) {
      if (this.currentValue !== newValue) {
        this.currentValue = newValue;
        animateValue(0, this.value, this.duration, (value) => {
          this.currentValue = value;
        }, (value) => {
        });
      }
    }
  },
  methods: {},
  async mounted() {
    await sleep(2e3);
    animateValue(0, this.value, this.duration, (value) => {
      this.currentValue = value;
    }, (value) => {
    });
  }
};
const _hoisted_1$9 = ["id"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, toDisplayString($data.currentValue), 15, _hoisted_1$9);
}
var gnkCounter = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var ProgressBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {
  name: "gnkProgressbar",
  extends: _sfc_main$j,
  data() {
    return {
      progressPercentage: 0
    };
  },
  props: {
    value: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    },
    showlabel: {
      type: Boolean,
      required: false,
      default: false
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "default",
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    sections: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    progressInPixels() {
      return this.progressPercentage * (this.componentElementClientRect().width / this.max);
    },
    componentClassObject() {
      return {
        "--primary": true,
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini"
      };
    },
    componentStyleObject() {
      return {
        "--progress-label": this.progressInPixels <= 0 ? "0" : this.progressInPixels >= this.componentElementClientRect().width - 32 ? this.componentElementClientRect().width - 34 + "px" : this.progressInPixels - 15 + "px",
        "--progress-label-footer": this.progressInPixels <= 5 ? "-4px" : this.progressInPixels >= this.componentElementClientRect().width - 25 ? this.componentElementClientRect().width - 26 + "px" : this.progressInPixels - 15 + "px"
      };
    }
  },
  watch: {
    value(value) {
      this.progressPercentage = value;
    },
    max(max) {
      this.max = max;
      this.progressPercentage = this.value;
    }
  },
  async mounted() {
    await sleep(random(500, 5e3));
    this.progressPercentage = this.value;
  }
};
const _hoisted_1$8 = ["aria-valuemax", "aria-valuenow", "title", "id"];
const _hoisted_2$5 = {
  key: 0,
  class: "--sections-steps"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "aria-valuemin": "0",
    "aria-valuemax": $props.max,
    "aria-valuenow": $data.progressPercentage,
    title: `${$props.value}`,
    role: "progressbar",
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    style: normalizeStyle([$options.componentStyleObject]),
    id: _ctx.componentId
  }, [
    createElementVNode("div", null, [
      createElementVNode("div", {
        style: normalizeStyle(`width: ${Math.round($data.progressPercentage / $props.max * 100)}%`),
        class: "--progressBar"
      }, null, 4),
      this.sections ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(this.max - 1, (index) => {
          return openBlock(), createElementBlock("div", { key: index });
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 14, _hoisted_1$8);
}
var gnkProgressbar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browser.exports;
let terminalHighlight$1 = require$$2;
class CssSyntaxError$3 extends Error {
  constructor(message, line, column, source, file, plugin2) {
    super(message);
    this.name = "CssSyntaxError";
    this.reason = message;
    if (file) {
      this.file = file;
    }
    if (source) {
      this.source = source;
    }
    if (plugin2) {
      this.plugin = plugin2;
    }
    if (typeof line !== "undefined" && typeof column !== "undefined") {
      if (typeof line === "number") {
        this.line = line;
        this.column = column;
      } else {
        this.line = line.line;
        this.column = line.column;
        this.endLine = column.line;
        this.endColumn = column.column;
      }
    }
    this.setMessage();
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError$3);
    }
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "";
    this.message += this.file ? this.file : "<css input>";
    if (typeof this.line !== "undefined") {
      this.message += ":" + this.line + ":" + this.column;
    }
    this.message += ": " + this.reason;
  }
  showSourceCode(color) {
    if (!this.source)
      return "";
    let css = this.source;
    if (color == null)
      color = pico.isColorSupported;
    if (terminalHighlight$1) {
      if (color)
        css = terminalHighlight$1(css);
    }
    let lines = css.split(/\r?\n/);
    let start = Math.max(this.line - 3, 0);
    let end = Math.min(this.line + 2, lines.length);
    let maxWidth = String(end).length;
    let mark, aside;
    if (color) {
      let { bold, red, gray } = pico.createColors(true);
      mark = (text) => bold(red(text));
      aside = (text) => gray(text);
    } else {
      mark = aside = (str) => str;
    }
    return lines.slice(start, end).map((line, index) => {
      let number = start + 1 + index;
      let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
      if (number === this.line) {
        let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
      }
      return " " + aside(gutter) + line;
    }).join("\n");
  }
  toString() {
    let code = this.showSourceCode();
    if (code) {
      code = "\n\n" + code + "\n";
    }
    return this.name + ": " + this.message + code;
  }
}
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
  colon: ": ",
  indent: "    ",
  beforeDecl: "\n",
  beforeRule: "\n",
  beforeOpen: " ",
  beforeClose: "\n",
  beforeComment: "\n",
  after: "\n",
  emptyBody: "",
  commentLeft: " ",
  commentRight: " ",
  semicolon: false
};
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
class Stringifier$2 {
  constructor(builder) {
    this.builder = builder;
  }
  stringify(node, semicolon) {
    if (!this[node.type]) {
      throw new Error("Unknown AST node type " + node.type + ". Maybe you need to change PostCSS stringifier.");
    }
    this[node.type](node, semicolon);
  }
  document(node) {
    this.body(node);
  }
  root(node) {
    this.body(node);
    if (node.raws.after)
      this.builder(node.raws.after);
  }
  comment(node) {
    let left = this.raw(node, "left", "commentLeft");
    let right = this.raw(node, "right", "commentRight");
    this.builder("/*" + left + node.text + right + "*/", node);
  }
  decl(node, semicolon) {
    let between = this.raw(node, "between", "colon");
    let string = node.prop + between + this.rawValue(node, "value");
    if (node.important) {
      string += node.raws.important || " !important";
    }
    if (semicolon)
      string += ";";
    this.builder(string, node);
  }
  rule(node) {
    this.block(node, this.rawValue(node, "selector"));
    if (node.raws.ownSemicolon) {
      this.builder(node.raws.ownSemicolon, node, "end");
    }
  }
  atrule(node, semicolon) {
    let name = "@" + node.name;
    let params = node.params ? this.rawValue(node, "params") : "";
    if (typeof node.raws.afterName !== "undefined") {
      name += node.raws.afterName;
    } else if (params) {
      name += " ";
    }
    if (node.nodes) {
      this.block(node, name + params);
    } else {
      let end = (node.raws.between || "") + (semicolon ? ";" : "");
      this.builder(name + params + end, node);
    }
  }
  body(node) {
    let last = node.nodes.length - 1;
    while (last > 0) {
      if (node.nodes[last].type !== "comment")
        break;
      last -= 1;
    }
    let semicolon = this.raw(node, "semicolon");
    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i];
      let before = this.raw(child, "before");
      if (before)
        this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  }
  block(node, start) {
    let between = this.raw(node, "between", "beforeOpen");
    this.builder(start + between + "{", node, "start");
    let after;
    if (node.nodes && node.nodes.length) {
      this.body(node);
      after = this.raw(node, "after");
    } else {
      after = this.raw(node, "after", "emptyBody");
    }
    if (after)
      this.builder(after);
    this.builder("}", node, "end");
  }
  raw(node, own, detect) {
    let value;
    if (!detect)
      detect = own;
    if (own) {
      value = node.raws[own];
      if (typeof value !== "undefined")
        return value;
    }
    let parent = node.parent;
    if (detect === "before") {
      if (!parent || parent.type === "root" && parent.first === node) {
        return "";
      }
      if (parent && parent.type === "document") {
        return "";
      }
    }
    if (!parent)
      return DEFAULT_RAW[detect];
    let root2 = node.root();
    if (!root2.rawCache)
      root2.rawCache = {};
    if (typeof root2.rawCache[detect] !== "undefined") {
      return root2.rawCache[detect];
    }
    if (detect === "before" || detect === "after") {
      return this.beforeAfter(node, detect);
    } else {
      let method = "raw" + capitalize(detect);
      if (this[method]) {
        value = this[method](root2, node);
      } else {
        root2.walk((i) => {
          value = i.raws[own];
          if (typeof value !== "undefined")
            return false;
        });
      }
    }
    if (typeof value === "undefined")
      value = DEFAULT_RAW[detect];
    root2.rawCache[detect] = value;
    return value;
  }
  rawSemicolon(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length && i.last.type === "decl") {
        value = i.raws.semicolon;
        if (typeof value !== "undefined")
          return false;
      }
    });
    return value;
  }
  rawEmptyBody(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== "undefined")
          return false;
      }
    });
    return value;
  }
  rawIndent(root2) {
    if (root2.raws.indent)
      return root2.raws.indent;
    let value;
    root2.walk((i) => {
      let p = i.parent;
      if (p && p !== root2 && p.parent && p.parent === root2) {
        if (typeof i.raws.before !== "undefined") {
          let parts = i.raws.before.split("\n");
          value = parts[parts.length - 1];
          value = value.replace(/\S/g, "");
          return false;
        }
      }
    });
    return value;
  }
  rawBeforeComment(root2, node) {
    let value;
    root2.walkComments((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node, null, "beforeDecl");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeDecl(root2, node) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.before !== "undefined") {
        value = i.raws.before;
        if (value.includes("\n")) {
          value = value.replace(/[^\n]+$/, "");
        }
        return false;
      }
    });
    if (typeof value === "undefined") {
      value = this.raw(node, null, "beforeRule");
    } else if (value) {
      value = value.replace(/\S/g, "");
    }
    return value;
  }
  rawBeforeRule(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
        if (typeof i.raws.before !== "undefined") {
          value = i.raws.before;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value)
      value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeClose(root2) {
    let value;
    root2.walk((i) => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== "undefined") {
          value = i.raws.after;
          if (value.includes("\n")) {
            value = value.replace(/[^\n]+$/, "");
          }
          return false;
        }
      }
    });
    if (value)
      value = value.replace(/\S/g, "");
    return value;
  }
  rawBeforeOpen(root2) {
    let value;
    root2.walk((i) => {
      if (i.type !== "decl") {
        value = i.raws.between;
        if (typeof value !== "undefined")
          return false;
      }
    });
    return value;
  }
  rawColon(root2) {
    let value;
    root2.walkDecls((i) => {
      if (typeof i.raws.between !== "undefined") {
        value = i.raws.between.replace(/[^\s:]/g, "");
        return false;
      }
    });
    return value;
  }
  beforeAfter(node, detect) {
    let value;
    if (node.type === "decl") {
      value = this.raw(node, null, "beforeDecl");
    } else if (node.type === "comment") {
      value = this.raw(node, null, "beforeComment");
    } else if (detect === "before") {
      value = this.raw(node, null, "beforeRule");
    } else {
      value = this.raw(node, null, "beforeClose");
    }
    let buf = node.parent;
    let depth = 0;
    while (buf && buf.type !== "root") {
      depth += 1;
      buf = buf.parent;
    }
    if (value.includes("\n")) {
      let indent = this.raw(node, null, "indent");
      if (indent.length) {
        for (let step = 0; step < depth; step++)
          value += indent;
      }
    }
    return value;
  }
  rawValue(node, prop) {
    let value = node[prop];
    let raw = node.raws[prop];
    if (raw && raw.value === value) {
      return raw.raw;
    }
    return value;
  }
}
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node, builder) {
  let str = new Stringifier$1(builder);
  str.stringify(node);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
  let cloned = new obj.constructor();
  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }
    if (i === "proxyCache")
      continue;
    let value = obj[i];
    let type = typeof value;
    if (i === "parent" && type === "object") {
      if (parent)
        cloned[i] = parent;
    } else if (i === "source") {
      cloned[i] = value;
    } else if (Array.isArray(value)) {
      cloned[i] = value.map((j) => cloneNode(j, cloned));
    } else {
      if (type === "object" && value !== null)
        value = cloneNode(value);
      cloned[i] = value;
    }
  }
  return cloned;
}
class Node$4 {
  constructor(defaults = {}) {
    this.raws = {};
    this[isClean$2] = false;
    this[my$2] = true;
    for (let name in defaults) {
      if (name === "nodes") {
        this.nodes = [];
        for (let node of defaults[name]) {
          if (typeof node.clone === "function") {
            this.append(node.clone());
          } else {
            this.append(node);
          }
        }
      } else {
        this[name] = defaults[name];
      }
    }
  }
  error(message, opts = {}) {
    if (this.source) {
      let { start, end } = this.rangeBy(opts);
      return this.source.input.error(message, { line: start.line, column: start.column }, { line: end.line, column: end.column }, opts);
    }
    return new CssSyntaxError$2(message);
  }
  warn(result2, text, opts) {
    let data = { node: this };
    for (let i in opts)
      data[i] = opts[i];
    return result2.warn(text, data);
  }
  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    this.parent = void 0;
    return this;
  }
  toString(stringifier2 = stringify$3) {
    if (stringifier2.stringify)
      stringifier2 = stringifier2.stringify;
    let result2 = "";
    stringifier2(this, (i) => {
      result2 += i;
    });
    return result2;
  }
  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name];
    }
    return this;
  }
  clone(overrides = {}) {
    let cloned = cloneNode(this);
    for (let name in overrides) {
      cloned[name] = overrides[name];
    }
    return cloned;
  }
  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this;
      let foundSelf = false;
      for (let node of nodes) {
        if (node === this) {
          foundSelf = true;
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node);
          bookmark = node;
        } else {
          this.parent.insertBefore(bookmark, node);
        }
      }
      if (!foundSelf) {
        this.remove();
      }
    }
    return this;
  }
  next() {
    if (!this.parent)
      return void 0;
    let index = this.parent.index(this);
    return this.parent.nodes[index + 1];
  }
  prev() {
    if (!this.parent)
      return void 0;
    let index = this.parent.index(this);
    return this.parent.nodes[index - 1];
  }
  before(add) {
    this.parent.insertBefore(this, add);
    return this;
  }
  after(add) {
    this.parent.insertAfter(this, add);
    return this;
  }
  root() {
    let result2 = this;
    while (result2.parent && result2.parent.type !== "document") {
      result2 = result2.parent;
    }
    return result2;
  }
  raw(prop, defaultType) {
    let str = new Stringifier();
    return str.raw(this, prop, defaultType);
  }
  cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween)
      delete this.raws.between;
  }
  toJSON(_, inputs) {
    let fixed = {};
    let emitInputs = inputs == null;
    inputs = inputs || /* @__PURE__ */ new Map();
    let inputsNextIndex = 0;
    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        continue;
      }
      if (name === "parent" || name === "proxyCache")
        continue;
      let value = this[name];
      if (Array.isArray(value)) {
        fixed[name] = value.map((i) => {
          if (typeof i === "object" && i.toJSON) {
            return i.toJSON(null, inputs);
          } else {
            return i;
          }
        });
      } else if (typeof value === "object" && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs);
      } else if (name === "source") {
        let inputId = inputs.get(value.input);
        if (inputId == null) {
          inputId = inputsNextIndex;
          inputs.set(value.input, inputsNextIndex);
          inputsNextIndex++;
        }
        fixed[name] = {
          inputId,
          start: value.start,
          end: value.end
        };
      } else {
        fixed[name] = value;
      }
    }
    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map((input2) => input2.toJSON());
    }
    return fixed;
  }
  positionInside(index) {
    let string = this.toString();
    let column = this.source.start.column;
    let line = this.source.start.line;
    for (let i = 0; i < index; i++) {
      if (string[i] === "\n") {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }
    return { line, column };
  }
  positionBy(opts) {
    let pos = this.source.start;
    if (opts.index) {
      pos = this.positionInside(opts.index);
    } else if (opts.word) {
      let index = this.toString().indexOf(opts.word);
      if (index !== -1)
        pos = this.positionInside(index);
    }
    return pos;
  }
  rangeBy(opts) {
    let start = {
      line: this.source.start.line,
      column: this.source.start.column
    };
    let end = this.source.end ? {
      line: this.source.end.line,
      column: this.source.end.column + 1
    } : {
      line: start.line,
      column: start.column + 1
    };
    if (opts.word) {
      let index = this.toString().indexOf(opts.word);
      if (index !== -1) {
        start = this.positionInside(index);
        end = this.positionInside(index + opts.word.length);
      }
    } else {
      if (opts.start) {
        start = {
          line: opts.start.line,
          column: opts.start.column
        };
      } else if (opts.index) {
        start = this.positionInside(opts.index);
      }
      if (opts.end) {
        end = {
          line: opts.end.line,
          column: opts.end.column
        };
      } else if (opts.endIndex) {
        end = this.positionInside(opts.endIndex);
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1);
      }
    }
    if (end.line < start.line || end.line === start.line && end.column <= start.column) {
      end = { line: start.line, column: start.column + 1 };
    }
    return { start, end };
  }
  getProxyProcessor() {
    return {
      set(node, prop, value) {
        if (node[prop] === value)
          return true;
        node[prop] = value;
        if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") {
          node.markDirty();
        }
        return true;
      },
      get(node, prop) {
        if (prop === "proxyOf") {
          return node;
        } else if (prop === "root") {
          return () => node.root().toProxy();
        } else {
          return node[prop];
        }
      }
    };
  }
  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor());
    }
    return this.proxyCache;
  }
  addToError(error) {
    error.postcssNode = this;
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source;
      error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
    }
    return error;
  }
  markDirty() {
    if (this[isClean$2]) {
      this[isClean$2] = false;
      let next = this;
      while (next = next.parent) {
        next[isClean$2] = false;
      }
    }
  }
  get proxyOf() {
    return this;
  }
}
var node_1 = Node$4;
Node$4.default = Node$4;
let Node$3 = node_1;
class Declaration$4 extends Node$3 {
  constructor(defaults) {
    if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
      defaults = __spreadProps(__spreadValues({}, defaults), { value: String(defaults.value) });
    }
    super(defaults);
    this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
}
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
let nanoid$1 = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var nonSecure = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nanoid: nanoid$1,
  customAlphabet
}, Symbol.toStringTag, { value: "Module" }));
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(nonSecure);
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, "base64").toString();
  } else {
    return window.atob(str);
  }
}
class PreviousMap$2 {
  constructor(css, opts) {
    if (opts.map === false)
      return;
    this.loadAnnotation(css);
    this.inline = this.startWith(this.annotation, "data:");
    let prev = opts.map ? opts.map.prev : void 0;
    let text = this.loadMap(opts.from, prev);
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from;
    }
    if (this.mapFile)
      this.root = dirname$1(this.mapFile);
    if (text)
      this.text = text;
  }
  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer$2(this.text);
    }
    return this.consumerCache;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
  startWith(string, start) {
    if (!string)
      return false;
    return string.substr(0, start.length) === start;
  }
  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!comments)
      return;
    let start = css.lastIndexOf(comments.pop());
    let end = css.indexOf("*/", start);
    if (start > -1 && end > -1) {
      this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
  }
  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    let baseUri = /^data:application\/json;base64,/;
    let charsetUri = /^data:application\/json;charset=utf-?8,/;
    let uri = /^data:application\/json,/;
    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length));
    }
    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }
    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + encoding);
  }
  loadFile(path) {
    this.root = dirname$1(path);
    if (existsSync(path)) {
      this.mapFile = path;
      return readFileSync(path, "utf-8").toString().trim();
    }
  }
  loadMap(file, prev) {
    if (prev === false)
      return false;
    if (prev) {
      if (typeof prev === "string") {
        return prev;
      } else if (typeof prev === "function") {
        let prevPath = prev(file);
        if (prevPath) {
          let map = this.loadFile(prevPath);
          if (!map) {
            throw new Error("Unable to load previous source map: " + prevPath.toString());
          }
          return map;
        }
      } else if (prev instanceof SourceMapConsumer$2) {
        return SourceMapGenerator$2.fromSourceMap(prev).toString();
      } else if (prev instanceof SourceMapGenerator$2) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error("Unsupported previous source map format: " + prev.toString());
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      let map = this.annotation;
      if (file)
        map = join(dirname$1(file), map);
      return this.loadFile(map);
    }
  }
  isMap(map) {
    if (typeof map !== "object")
      return false;
    return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
  }
}
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { resolve: resolve$1, isAbsolute } = require$$2;
let { nanoid } = require$$3;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
class Input$4 {
  constructor(css, opts = {}) {
    if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
      throw new Error(`PostCSS received ${css} instead of CSS string`);
    }
    this.css = css.toString();
    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.hasBOM = true;
      this.css = this.css.slice(1);
    } else {
      this.hasBOM = false;
    }
    if (opts.from) {
      if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
        this.file = opts.from;
      } else {
        this.file = resolve$1(opts.from);
      }
    }
    if (pathAvailable$1 && sourceMapAvailable$1) {
      let map = new PreviousMap$1(this.css, opts);
      if (map.text) {
        this.map = map;
        let file = map.consumer().file;
        if (!this.file && file)
          this.file = this.mapResolve(file);
      }
    }
    if (!this.file) {
      this.id = "<input css " + nanoid(6) + ">";
    }
    if (this.map)
      this.map.file = this.from;
  }
  fromOffset(offset) {
    let lastLine, lineToIndex;
    if (!this[fromOffsetCache]) {
      let lines = this.css.split("\n");
      lineToIndex = new Array(lines.length);
      let prevIndex = 0;
      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex;
        prevIndex += lines[i].length + 1;
      }
      this[fromOffsetCache] = lineToIndex;
    } else {
      lineToIndex = this[fromOffsetCache];
    }
    lastLine = lineToIndex[lineToIndex.length - 1];
    let min = 0;
    if (offset >= lastLine) {
      min = lineToIndex.length - 1;
    } else {
      let max = lineToIndex.length - 2;
      let mid;
      while (min < max) {
        mid = min + (max - min >> 1);
        if (offset < lineToIndex[mid]) {
          max = mid - 1;
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1;
        } else {
          min = mid;
          break;
        }
      }
    }
    return {
      line: min + 1,
      col: offset - lineToIndex[min] + 1
    };
  }
  error(message, line, column, opts = {}) {
    let result2, endLine, endColumn;
    if (line && typeof line === "object") {
      let start = line;
      let end = column;
      if (typeof line.offset === "number") {
        let pos = this.fromOffset(start.offset);
        line = pos.line;
        column = pos.col;
      } else {
        line = start.line;
        column = start.column;
      }
      if (typeof end.offset === "number") {
        let pos = this.fromOffset(end.offset);
        endLine = pos.line;
        endColumn = pos.col;
      } else {
        endLine = end.line;
        endColumn = end.column;
      }
    } else if (!column) {
      let pos = this.fromOffset(line);
      line = pos.line;
      column = pos.col;
    }
    let origin = this.origin(line, column, endLine, endColumn);
    if (origin) {
      result2 = new CssSyntaxError$1(message, origin.endLine === void 0 ? origin.line : { line: origin.line, column: origin.column }, origin.endLine === void 0 ? origin.column : { line: origin.endLine, column: origin.endColumn }, origin.source, origin.file, opts.plugin);
    } else {
      result2 = new CssSyntaxError$1(message, endLine === void 0 ? line : { line, column }, endLine === void 0 ? column : { line: endLine, column: endColumn }, this.css, this.file, opts.plugin);
    }
    result2.input = { line, column, endLine, endColumn, source: this.css };
    if (this.file) {
      if (pathToFileURL$1) {
        result2.input.url = pathToFileURL$1(this.file).toString();
      }
      result2.input.file = this.file;
    }
    return result2;
  }
  origin(line, column, endLine, endColumn) {
    if (!this.map)
      return false;
    let consumer = this.map.consumer();
    let from = consumer.originalPositionFor({ line, column });
    if (!from.source)
      return false;
    let to;
    if (typeof endLine === "number") {
      to = consumer.originalPositionFor({ line: endLine, column: endColumn });
    }
    let fromUrl;
    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL$1(from.source);
    } else {
      fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile));
    }
    let result2 = {
      url: fromUrl.toString(),
      line: from.line,
      column: from.column,
      endLine: to && to.line,
      endColumn: to && to.column
    };
    if (fromUrl.protocol === "file:") {
      if (fileURLToPath) {
        result2.file = fileURLToPath(fromUrl);
      } else {
        throw new Error(`file: protocol is not available in this PostCSS build`);
      }
    }
    let source = consumer.sourceContentFor(from.source);
    if (source)
      result2.source = source;
    return result2;
  }
  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }
    return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
  }
  get from() {
    return this.file || this.id;
  }
  toJSON() {
    let json = {};
    for (let name of ["hasBOM", "css", "file", "id"]) {
      if (this[name] != null) {
        json[name] = this[name];
      }
    }
    if (this.map) {
      json.map = __spreadValues({}, this.map);
      if (json.map.consumerCache) {
        json.map.consumerCache = void 0;
      }
    }
    return json;
  }
}
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, resolve, relative, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator$2 {
  constructor(stringify2, root2, opts, cssString) {
    this.stringify = stringify2;
    this.mapOpts = opts.map || {};
    this.root = root2;
    this.opts = opts;
    this.css = cssString;
  }
  isMap() {
    if (typeof this.opts.map !== "undefined") {
      return !!this.opts.map;
    }
    return this.previous().length > 0;
  }
  previous() {
    if (!this.previousMaps) {
      this.previousMaps = [];
      if (this.root) {
        this.root.walk((node) => {
          if (node.source && node.source.input.map) {
            let map = node.source.input.map;
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map);
            }
          }
        });
      } else {
        let input2 = new Input$3(this.css, this.opts);
        if (input2.map)
          this.previousMaps.push(input2.map);
      }
    }
    return this.previousMaps;
  }
  isInline() {
    if (typeof this.mapOpts.inline !== "undefined") {
      return this.mapOpts.inline;
    }
    let annotation = this.mapOpts.annotation;
    if (typeof annotation !== "undefined" && annotation !== true) {
      return false;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.inline);
    }
    return true;
  }
  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== "undefined") {
      return this.mapOpts.sourcesContent;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.withContent());
    }
    return true;
  }
  clearAnnotation() {
    if (this.mapOpts.annotation === false)
      return;
    if (this.root) {
      let node;
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node = this.root.nodes[i];
        if (node.type !== "comment")
          continue;
        if (node.text.indexOf("# sourceMappingURL=") === 0) {
          this.root.removeChild(i);
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, "");
    }
  }
  setSourcesContent() {
    let already = {};
    if (this.root) {
      this.root.walk((node) => {
        if (node.source) {
          let from = node.source.input.from;
          if (from && !already[from]) {
            already[from] = true;
            this.map.setSourceContent(this.toUrl(this.path(from)), node.source.input.css);
          }
        }
      });
    } else if (this.css) {
      let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(from, this.css);
    }
  }
  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file));
      let root2 = prev.root || dirname(prev.file);
      let map;
      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text);
        if (map.sourcesContent) {
          map.sourcesContent = map.sourcesContent.map(() => null);
        }
      } else {
        map = prev.consumer();
      }
      this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
    }
  }
  isAnnotation() {
    if (this.isInline()) {
      return true;
    }
    if (typeof this.mapOpts.annotation !== "undefined") {
      return this.mapOpts.annotation;
    }
    if (this.previous().length) {
      return this.previous().some((i) => i.annotation);
    }
    return true;
  }
  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString("base64");
    } else {
      return window.btoa(unescape(encodeURIComponent(str)));
    }
  }
  addAnnotation() {
    let content;
    if (this.isInline()) {
      content = "data:application/json;base64," + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === "string") {
      content = this.mapOpts.annotation;
    } else if (typeof this.mapOpts.annotation === "function") {
      content = this.mapOpts.annotation(this.opts.to, this.root);
    } else {
      content = this.outputFile() + ".map";
    }
    let eol = "\n";
    if (this.css.includes("\r\n"))
      eol = "\r\n";
    this.css += eol + "/*# sourceMappingURL=" + content + " */";
  }
  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to);
    } else if (this.opts.from) {
      return this.path(this.opts.from);
    } else {
      return "to.css";
    }
  }
  generateMap() {
    if (this.root) {
      this.generateString();
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer();
      prev.file = this.outputFile();
      this.map = SourceMapGenerator.fromSourceMap(prev);
    } else {
      this.map = new SourceMapGenerator({ file: this.outputFile() });
      this.map.addMapping({
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 }
      });
    }
    if (this.isSourcesContent())
      this.setSourcesContent();
    if (this.root && this.previous().length > 0)
      this.applyPrevMaps();
    if (this.isAnnotation())
      this.addAnnotation();
    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  }
  path(file) {
    if (file.indexOf("<") === 0)
      return file;
    if (/^\w+:\/\//.test(file))
      return file;
    if (this.mapOpts.absolute)
      return file;
    let from = this.opts.to ? dirname(this.opts.to) : ".";
    if (typeof this.mapOpts.annotation === "string") {
      from = dirname(resolve(from, this.mapOpts.annotation));
    }
    file = relative(from, file);
    return file;
  }
  toUrl(path) {
    if (sep === "\\") {
      path = path.replace(/\\/g, "/");
    }
    return encodeURI(path).replace(/[#?]/g, encodeURIComponent);
  }
  sourcePath(node) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from);
    } else if (this.mapOpts.absolute) {
      if (pathToFileURL) {
        return pathToFileURL(node.source.input.from).toString();
      } else {
        throw new Error("`map.absolute` option is not available in this PostCSS build");
      }
    } else {
      return this.toUrl(this.path(node.source.input.from));
    }
  }
  generateString() {
    this.css = "";
    this.map = new SourceMapGenerator({ file: this.outputFile() });
    let line = 1;
    let column = 1;
    let noSource = "<no source>";
    let mapping = {
      source: "",
      generated: { line: 0, column: 0 },
      original: { line: 0, column: 0 }
    };
    let lines, last;
    this.stringify(this.root, (str, node, type) => {
      this.css += str;
      if (node && type !== "end") {
        mapping.generated.line = line;
        mapping.generated.column = column - 1;
        if (node.source && node.source.start) {
          mapping.source = this.sourcePath(node);
          mapping.original.line = node.source.start.line;
          mapping.original.column = node.source.start.column - 1;
          this.map.addMapping(mapping);
        } else {
          mapping.source = noSource;
          mapping.original.line = 1;
          mapping.original.column = 0;
          this.map.addMapping(mapping);
        }
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column += str.length;
      }
      if (node && type !== "start") {
        let p = node.parent || { raws: {} };
        if (node.type !== "decl" || node !== p.last || p.raws.semicolon) {
          if (node.source && node.source.end) {
            mapping.source = this.sourcePath(node);
            mapping.original.line = node.source.end.line;
            mapping.original.column = node.source.end.column - 1;
            mapping.generated.line = line;
            mapping.generated.column = column - 2;
            this.map.addMapping(mapping);
          } else {
            mapping.source = noSource;
            mapping.original.line = 1;
            mapping.original.column = 0;
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            this.map.addMapping(mapping);
          }
        }
      }
    });
  }
  generate() {
    this.clearAnnotation();
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap();
    } else {
      let result2 = "";
      this.stringify(this.root, (i) => {
        result2 += i;
      });
      return [result2];
    }
  }
}
var mapGenerator = MapGenerator$2;
let Node$2 = node_1;
class Comment$4 extends Node$2 {
  constructor(defaults) {
    super(defaults);
    this.type = "comment";
  }
}
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node_1;
let parse$4, Rule$4, AtRule$4;
function cleanSource(nodes) {
  return nodes.map((i) => {
    if (i.nodes)
      i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
function markDirtyUp(node) {
  node[isClean$1] = false;
  if (node.proxyOf.nodes) {
    for (let i of node.proxyOf.nodes) {
      markDirtyUp(i);
    }
  }
}
class Container$7 extends Node$1 {
  push(child) {
    child.parent = this;
    this.proxyOf.nodes.push(child);
    return this;
  }
  each(callback) {
    if (!this.proxyOf.nodes)
      return void 0;
    let iterator = this.getIterator();
    let index, result2;
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index = this.indexes[iterator];
      result2 = callback(this.proxyOf.nodes[index], index);
      if (result2 === false)
        break;
      this.indexes[iterator] += 1;
    }
    delete this.indexes[iterator];
    return result2;
  }
  walk(callback) {
    return this.each((child, i) => {
      let result2;
      try {
        result2 = callback(child, i);
      } catch (e) {
        throw child.addToError(e);
      }
      if (result2 !== false && child.walk) {
        result2 = child.walk(callback);
      }
      return result2;
    });
  }
  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk((child, i) => {
        if (child.type === "decl") {
          return callback(child, i);
        }
      });
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "decl" && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "decl" && child.prop === prop) {
        return callback(child, i);
      }
    });
  }
  walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk((child, i) => {
        if (child.type === "rule") {
          return callback(child, i);
        }
      });
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "rule" && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "rule" && child.selector === selector) {
        return callback(child, i);
      }
    });
  }
  walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk((child, i) => {
        if (child.type === "atrule") {
          return callback(child, i);
        }
      });
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === "atrule" && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }
    return this.walk((child, i) => {
      if (child.type === "atrule" && child.name === name) {
        return callback(child, i);
      }
    });
  }
  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === "comment") {
        return callback(child, i);
      }
    });
  }
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last);
      for (let node of nodes)
        this.proxyOf.nodes.push(node);
    }
    this.markDirty();
    return this;
  }
  prepend(...children) {
    children = children.reverse();
    for (let child of children) {
      let nodes = this.normalize(child, this.first, "prepend").reverse();
      for (let node of nodes)
        this.proxyOf.nodes.unshift(node);
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node of this.nodes)
        node.cleanRaws(keepBetween);
    }
  }
  insertBefore(exist, add) {
    exist = this.index(exist);
    let type = exist === 0 ? "prepend" : false;
    let nodes = this.normalize(add, this.proxyOf.nodes[exist], type).reverse();
    for (let node of nodes)
      this.proxyOf.nodes.splice(exist, 0, node);
    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (exist <= index) {
        this.indexes[id] = index + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  insertAfter(exist, add) {
    exist = this.index(exist);
    let nodes = this.normalize(add, this.proxyOf.nodes[exist]).reverse();
    for (let node of nodes)
      this.proxyOf.nodes.splice(exist + 1, 0, node);
    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (exist < index) {
        this.indexes[id] = index + nodes.length;
      }
    }
    this.markDirty();
    return this;
  }
  removeChild(child) {
    child = this.index(child);
    this.proxyOf.nodes[child].parent = void 0;
    this.proxyOf.nodes.splice(child, 1);
    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }
    this.markDirty();
    return this;
  }
  removeAll() {
    for (let node of this.proxyOf.nodes)
      node.parent = void 0;
    this.proxyOf.nodes = [];
    this.markDirty();
    return this;
  }
  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }
    this.walkDecls((decl) => {
      if (opts.props && !opts.props.includes(decl.prop))
        return;
      if (opts.fast && !decl.value.includes(opts.fast))
        return;
      decl.value = decl.value.replace(pattern, callback);
    });
    this.markDirty();
    return this;
  }
  every(condition) {
    return this.nodes.every(condition);
  }
  some(condition) {
    return this.nodes.some(condition);
  }
  index(child) {
    if (typeof child === "number")
      return child;
    if (child.proxyOf)
      child = child.proxyOf;
    return this.proxyOf.nodes.indexOf(child);
  }
  get first() {
    if (!this.proxyOf.nodes)
      return void 0;
    return this.proxyOf.nodes[0];
  }
  get last() {
    if (!this.proxyOf.nodes)
      return void 0;
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  normalize(nodes, sample) {
    if (typeof nodes === "string") {
      nodes = cleanSource(parse$4(nodes).nodes);
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);
      for (let i of nodes) {
        if (i.parent)
          i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type === "root" && this.type !== "document") {
      nodes = nodes.nodes.slice(0);
      for (let i of nodes) {
        if (i.parent)
          i.parent.removeChild(i, "ignore");
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === "undefined") {
        throw new Error("Value field is missed in node creation");
      } else if (typeof nodes.value !== "string") {
        nodes.value = String(nodes.value);
      }
      nodes = [new Declaration$3(nodes)];
    } else if (nodes.selector) {
      nodes = [new Rule$4(nodes)];
    } else if (nodes.name) {
      nodes = [new AtRule$4(nodes)];
    } else if (nodes.text) {
      nodes = [new Comment$3(nodes)];
    } else {
      throw new Error("Unknown node type in node creation");
    }
    let processed = nodes.map((i) => {
      if (!i[my$1])
        Container$7.rebuild(i);
      i = i.proxyOf;
      if (i.parent)
        i.parent.removeChild(i);
      if (i[isClean$1])
        markDirtyUp(i);
      if (typeof i.raws.before === "undefined") {
        if (sample && typeof sample.raws.before !== "undefined") {
          i.raws.before = sample.raws.before.replace(/\S/g, "");
        }
      }
      i.parent = this.proxyOf;
      return i;
    });
    return processed;
  }
  getProxyProcessor() {
    return {
      set(node, prop, value) {
        if (node[prop] === value)
          return true;
        node[prop] = value;
        if (prop === "name" || prop === "params" || prop === "selector") {
          node.markDirty();
        }
        return true;
      },
      get(node, prop) {
        if (prop === "proxyOf") {
          return node;
        } else if (!node[prop]) {
          return node[prop];
        } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
          return (...args) => {
            return node[prop](...args.map((i) => {
              if (typeof i === "function") {
                return (child, index) => i(child.toProxy(), index);
              } else {
                return i;
              }
            }));
          };
        } else if (prop === "every" || prop === "some") {
          return (cb) => {
            return node[prop]((child, ...other) => cb(child.toProxy(), ...other));
          };
        } else if (prop === "root") {
          return () => node.root().toProxy();
        } else if (prop === "nodes") {
          return node.nodes.map((i) => i.toProxy());
        } else if (prop === "first" || prop === "last") {
          return node[prop].toProxy();
        } else {
          return node[prop];
        }
      }
    };
  }
  getIterator() {
    if (!this.lastEach)
      this.lastEach = 0;
    if (!this.indexes)
      this.indexes = {};
    this.lastEach += 1;
    let iterator = this.lastEach;
    this.indexes[iterator] = 0;
    return iterator;
  }
}
Container$7.registerParse = (dependant) => {
  parse$4 = dependant;
};
Container$7.registerRule = (dependant) => {
  Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant) => {
  AtRule$4 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node) => {
  if (node.type === "atrule") {
    Object.setPrototypeOf(node, AtRule$4.prototype);
  } else if (node.type === "rule") {
    Object.setPrototypeOf(node, Rule$4.prototype);
  } else if (node.type === "decl") {
    Object.setPrototypeOf(node, Declaration$3.prototype);
  } else if (node.type === "comment") {
    Object.setPrototypeOf(node, Comment$3.prototype);
  }
  node[my$1] = true;
  if (node.nodes) {
    node.nodes.forEach((child) => {
      Container$7.rebuild(child);
    });
  }
};
let Container$6 = container;
let LazyResult$4, Processor$3;
class Document$3 extends Container$6 {
  constructor(defaults) {
    super(__spreadValues({ type: "document" }, defaults));
    if (!this.nodes) {
      this.nodes = [];
    }
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$4(new Processor$3(), this, opts);
    return lazy.stringify();
  }
}
Document$3.registerLazyResult = (dependant) => {
  LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant) => {
  Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
class Warning$2 {
  constructor(text, opts = {}) {
    this.type = "warning";
    this.text = text;
    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts);
      this.line = range.start.line;
      this.column = range.start.column;
      this.endLine = range.end.line;
      this.endColumn = range.end.column;
    }
    for (let opt in opts)
      this[opt] = opts[opt];
  }
  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        plugin: this.plugin,
        index: this.index,
        word: this.word
      }).message;
    }
    if (this.plugin) {
      return this.plugin + ": " + this.text;
    }
    return this.text;
  }
}
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
class Result$3 {
  constructor(processor2, root2, opts) {
    this.processor = processor2;
    this.messages = [];
    this.root = root2;
    this.opts = opts;
    this.css = void 0;
    this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }
    let warning2 = new Warning$1(text, opts);
    this.messages.push(warning2);
    return warning2;
  }
  warnings() {
    return this.messages.filter((i) => i.type === "warning");
  }
  get content() {
    return this.css;
  }
}
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer(input2, options = {}) {
  let css = input2.css.valueOf();
  let ignore = options.ignoreErrors;
  let code, next, quote, content, escape;
  let escaped, escapePos, prev, n, currentToken;
  let length = css.length;
  let pos = 0;
  let buffer = [];
  let returned = [];
  function position() {
    return pos;
  }
  function unclosed(what) {
    throw input2.error("Unclosed " + what, pos);
  }
  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }
  function nextToken(opts) {
    if (returned.length)
      return returned.pop();
    if (pos >= length)
      return;
    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);
    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
        currentToken = ["space", css.slice(pos, next)];
        pos = next - 1;
        break;
      }
      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, pos];
        break;
      }
      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : "";
        n = css.charCodeAt(pos + 1);
        if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;
          do {
            escaped = false;
            next = css.indexOf(")", next + 1);
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed("bracket");
              }
            }
            escapePos = next;
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);
          currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          next = css.indexOf(")", pos + 1);
          content = css.slice(pos, next + 1);
          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ["(", "(", pos];
          } else {
            currentToken = ["brackets", content, pos, next];
            pos = next;
          }
        }
        break;
      }
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;
        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed("string");
            }
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);
        currentToken = ["string", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case AT: {
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }
        currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      case BACKSLASH: {
        next = pos;
        escape = true;
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }
        code = css.charCodeAt(next + 1);
        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }
        currentToken = ["word", css.slice(pos, next + 1), pos, next];
        pos = next;
        break;
      }
      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf("*/", pos + 2) + 1;
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed("comment");
            }
          }
          currentToken = ["comment", css.slice(pos, next + 1), pos, next];
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }
          currentToken = ["word", css.slice(pos, next + 1), pos, next];
          buffer.push(currentToken);
          pos = next;
        }
        break;
      }
    }
    pos++;
    return currentToken;
  }
  function back(token) {
    returned.push(token);
  }
  return {
    back,
    nextToken,
    endOfFile,
    position
  };
};
let Container$5 = container;
class AtRule$3 extends Container$5 {
  constructor(defaults) {
    super(defaults);
    this.type = "atrule";
  }
  append(...children) {
    if (!this.proxyOf.nodes)
      this.nodes = [];
    return super.append(...children);
  }
  prepend(...children) {
    if (!this.proxyOf.nodes)
      this.nodes = [];
    return super.prepend(...children);
  }
}
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3, Processor$2;
class Root$5 extends Container$4 {
  constructor(defaults) {
    super(defaults);
    this.type = "root";
    if (!this.nodes)
      this.nodes = [];
  }
  removeChild(child, ignore) {
    let index = this.index(child);
    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before;
    }
    return super.removeChild(child);
  }
  normalize(child, sample, type) {
    let nodes = super.normalize(child);
    if (sample) {
      if (type === "prepend") {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (let node of nodes) {
          node.raws.before = sample.raws.before;
        }
      }
    }
    return nodes;
  }
  toResult(opts = {}) {
    let lazy = new LazyResult$3(new Processor$2(), this, opts);
    return lazy.stringify();
  }
}
Root$5.registerLazyResult = (dependant) => {
  LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant) => {
  Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
let list$2 = {
  split(string, separators, last) {
    let array = [];
    let current = "";
    let split = false;
    let func = 0;
    let quote = false;
    let escape = false;
    for (let letter of string) {
      if (escape) {
        escape = false;
      } else if (letter === "\\") {
        escape = true;
      } else if (quote) {
        if (letter === quote) {
          quote = false;
        }
      } else if (letter === '"' || letter === "'") {
        quote = letter;
      } else if (letter === "(") {
        func += 1;
      } else if (letter === ")") {
        if (func > 0)
          func -= 1;
      } else if (func === 0) {
        if (separators.includes(letter))
          split = true;
      }
      if (split) {
        if (current !== "")
          array.push(current.trim());
        current = "";
        split = false;
      } else {
        current += letter;
      }
    }
    if (last || current !== "")
      array.push(current.trim());
    return array;
  },
  space(string) {
    let spaces = [" ", "\n", "	"];
    return list$2.split(string, spaces);
  },
  comma(string) {
    return list$2.split(string, [","], true);
  }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
class Rule$3 extends Container$3 {
  constructor(defaults) {
    super(defaults);
    this.type = "rule";
    if (!this.nodes)
      this.nodes = [];
  }
  get selectors() {
    return list$1.comma(this.selector);
  }
  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null;
    let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
    this.selector = values.join(sep2);
  }
}
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer2 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
};
function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i];
    let pos = token[3] || token[2];
    if (pos)
      return pos;
  }
}
class Parser$1 {
  constructor(input2) {
    this.input = input2;
    this.root = new Root$4();
    this.current = this.root;
    this.spaces = "";
    this.semicolon = false;
    this.customProperty = false;
    this.createTokenizer();
    this.root.source = { input: input2, start: { offset: 0, line: 1, column: 1 } };
  }
  createTokenizer() {
    this.tokenizer = tokenizer2(this.input);
  }
  parse() {
    let token;
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      switch (token[0]) {
        case "space":
          this.spaces += token[1];
          break;
        case ";":
          this.freeSemicolon(token);
          break;
        case "}":
          this.end(token);
          break;
        case "comment":
          this.comment(token);
          break;
        case "at-word":
          this.atrule(token);
          break;
        case "{":
          this.emptyRule(token);
          break;
        default:
          this.other(token);
          break;
      }
    }
    this.endFile();
  }
  comment(token) {
    let node = new Comment$2();
    this.init(node, token[2]);
    node.source.end = this.getPosition(token[3] || token[2]);
    let text = token[1].slice(2, -2);
    if (/^\s*$/.test(text)) {
      node.text = "";
      node.raws.left = text;
      node.raws.right = "";
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
      node.text = match[2];
      node.raws.left = match[1];
      node.raws.right = match[3];
    }
  }
  emptyRule(token) {
    let node = new Rule$2();
    this.init(node, token[2]);
    node.selector = "";
    node.raws.between = "";
    this.current = node;
  }
  other(start) {
    let end = false;
    let type = null;
    let colon = false;
    let bracket = null;
    let brackets = [];
    let customProperty = start[1].startsWith("--");
    let tokens = [];
    let token = start;
    while (token) {
      type = token[0];
      tokens.push(token);
      if (type === "(" || type === "[") {
        if (!bracket)
          bracket = token;
        brackets.push(type === "(" ? ")" : "]");
      } else if (customProperty && colon && type === "{") {
        if (!bracket)
          bracket = token;
        brackets.push("}");
      } else if (brackets.length === 0) {
        if (type === ";") {
          if (colon) {
            this.decl(tokens, customProperty);
            return;
          } else {
            break;
          }
        } else if (type === "{") {
          this.rule(tokens);
          return;
        } else if (type === "}") {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ":") {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0)
          bracket = null;
      }
      token = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile())
      end = true;
    if (brackets.length > 0)
      this.unclosedBracket(bracket);
    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0];
          if (token !== "space" && token !== "comment")
            break;
          this.tokenizer.back(tokens.pop());
        }
      }
      this.decl(tokens, customProperty);
    } else {
      this.unknownWord(tokens);
    }
  }
  rule(tokens) {
    tokens.pop();
    let node = new Rule$2();
    this.init(node, tokens[0][2]);
    node.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node, "selector", tokens);
    this.current = node;
  }
  decl(tokens, customProperty) {
    let node = new Declaration$2();
    this.init(node, tokens[0][2]);
    let last = tokens[tokens.length - 1];
    if (last[0] === ";") {
      this.semicolon = true;
      tokens.pop();
    }
    node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
    while (tokens[0][0] !== "word") {
      if (tokens.length === 1)
        this.unknownWord(tokens);
      node.raws.before += tokens.shift()[1];
    }
    node.source.start = this.getPosition(tokens[0][2]);
    node.prop = "";
    while (tokens.length) {
      let type = tokens[0][0];
      if (type === ":" || type === "space" || type === "comment") {
        break;
      }
      node.prop += tokens.shift()[1];
    }
    node.raws.between = "";
    let token;
    while (tokens.length) {
      token = tokens.shift();
      if (token[0] === ":") {
        node.raws.between += token[1];
        break;
      } else {
        if (token[0] === "word" && /\w/.test(token[1])) {
          this.unknownWord([token]);
        }
        node.raws.between += token[1];
      }
    }
    if (node.prop[0] === "_" || node.prop[0] === "*") {
      node.raws.before += node.prop[0];
      node.prop = node.prop.slice(1);
    }
    let firstSpaces = [];
    let next;
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment")
        break;
      firstSpaces.push(tokens.shift());
    }
    this.precheckMissedSemicolon(tokens);
    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i];
      if (token[1].toLowerCase() === "!important") {
        node.important = true;
        let string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== " !important")
          node.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === "important") {
        let cache = tokens.slice(0);
        let str = "";
        for (let j = i; j > 0; j--) {
          let type = cache[j][0];
          if (str.trim().indexOf("!") === 0 && type !== "space") {
            break;
          }
          str = cache.pop()[1] + str;
        }
        if (str.trim().indexOf("!") === 0) {
          node.important = true;
          node.raws.important = str;
          tokens = cache;
        }
      }
      if (token[0] !== "space" && token[0] !== "comment") {
        break;
      }
    }
    let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
    if (hasWord) {
      node.raws.between += firstSpaces.map((i) => i[1]).join("");
      firstSpaces = [];
    }
    this.raw(node, "value", firstSpaces.concat(tokens), customProperty);
    if (node.value.includes(":") && !customProperty) {
      this.checkMissedSemicolon(tokens);
    }
  }
  atrule(token) {
    let node = new AtRule$2();
    node.name = token[1].slice(1);
    if (node.name === "") {
      this.unnamedAtrule(node, token);
    }
    this.init(node, token[2]);
    let type;
    let prev;
    let shift;
    let last = false;
    let open = false;
    let params = [];
    let brackets = [];
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();
      type = token[0];
      if (type === "(" || type === "[") {
        brackets.push(type === "(" ? ")" : "]");
      } else if (type === "{" && brackets.length > 0) {
        brackets.push("}");
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
      }
      if (brackets.length === 0) {
        if (type === ";") {
          node.source.end = this.getPosition(token[2]);
          this.semicolon = true;
          break;
        } else if (type === "{") {
          open = true;
          break;
        } else if (type === "}") {
          if (params.length > 0) {
            shift = params.length - 1;
            prev = params[shift];
            while (prev && prev[0] === "space") {
              prev = params[--shift];
            }
            if (prev) {
              node.source.end = this.getPosition(prev[3] || prev[2]);
            }
          }
          this.end(token);
          break;
        } else {
          params.push(token);
        }
      } else {
        params.push(token);
      }
      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }
    node.raws.between = this.spacesAndCommentsFromEnd(params);
    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node, "params", params);
      if (last) {
        token = params[params.length - 1];
        node.source.end = this.getPosition(token[3] || token[2]);
        this.spaces = node.raws.between;
        node.raws.between = "";
      }
    } else {
      node.raws.afterName = "";
      node.params = "";
    }
    if (open) {
      node.nodes = [];
      this.current = node;
    }
  }
  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
    this.spaces = "";
    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2]);
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  }
  endFile() {
    if (this.current.parent)
      this.unclosedBlock();
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }
    this.current.raws.after = (this.current.raws.after || "") + this.spaces;
  }
  freeSemicolon(token) {
    this.spaces += token[1];
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1];
      if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = "";
      }
    }
  }
  getPosition(offset) {
    let pos = this.input.fromOffset(offset);
    return {
      offset,
      line: pos.line,
      column: pos.col
    };
  }
  init(node, offset) {
    this.current.push(node);
    node.source = {
      start: this.getPosition(offset),
      input: this.input
    };
    node.raws.before = this.spaces;
    this.spaces = "";
    if (node.type !== "comment")
      this.semicolon = false;
  }
  raw(node, prop, tokens, customProperty) {
    let token, type;
    let length = tokens.length;
    let value = "";
    let clean = true;
    let next, prev;
    for (let i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];
      if (type === "space" && i === length - 1 && !customProperty) {
        clean = false;
      } else if (type === "comment") {
        prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
        next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ",") {
            clean = false;
          } else {
            value += token[1];
          }
        } else {
          clean = false;
        }
      } else {
        value += token[1];
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], "");
      node.raws[prop] = { value, raw };
    }
    node[prop] = value;
  }
  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space" && lastTokenType !== "comment")
        break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  spacesAndCommentsFromStart(tokens) {
    let next;
    let spaces = "";
    while (tokens.length) {
      next = tokens[0][0];
      if (next !== "space" && next !== "comment")
        break;
      spaces += tokens.shift()[1];
    }
    return spaces;
  }
  spacesFromEnd(tokens) {
    let lastTokenType;
    let spaces = "";
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== "space")
        break;
      spaces = tokens.pop()[1] + spaces;
    }
    return spaces;
  }
  stringFrom(tokens, from) {
    let result2 = "";
    for (let i = from; i < tokens.length; i++) {
      result2 += tokens[i][1];
    }
    tokens.splice(from, tokens.length - from);
    return result2;
  }
  colon(tokens) {
    let brackets = 0;
    let token, type, prev;
    for (let [i, element] of tokens.entries()) {
      token = element;
      type = token[0];
      if (type === "(") {
        brackets += 1;
      }
      if (type === ")") {
        brackets -= 1;
      }
      if (brackets === 0 && type === ":") {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === "word" && prev[1] === "progid") {
          continue;
        } else {
          return i;
        }
      }
      prev = token;
    }
    return false;
  }
  unclosedBracket(bracket) {
    throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
  }
  unknownWord(tokens) {
    throw this.input.error("Unknown word", { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
  }
  unexpectedClose(token) {
    throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
  }
  unclosedBlock() {
    let pos = this.current.source.start;
    throw this.input.error("Unclosed block", pos.line, pos.column);
  }
  doubleColon(token) {
    throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
  }
  unnamedAtrule(node, token) {
    throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
  }
  precheckMissedSemicolon() {
  }
  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens);
    if (colon === false)
      return;
    let founded = 0;
    let token;
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j];
      if (token[0] !== "space") {
        founded += 1;
        if (founded === 2)
          break;
      }
    }
    throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
  }
}
var parser = Parser$1;
let Container$2 = container;
let Parser = parser;
let Input$2 = input;
function parse$3(css, opts) {
  let input2 = new Input$2(css, opts);
  let parser2 = new Parser(input2);
  try {
    parser2.parse();
  } catch (e) {
    throw e;
  }
  return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
  document: "Document",
  root: "Root",
  atrule: "AtRule",
  rule: "Rule",
  decl: "Declaration",
  comment: "Comment"
};
const PLUGIN_PROPS = {
  postcssPlugin: true,
  prepare: true,
  Once: true,
  Document: true,
  Root: true,
  Declaration: true,
  Rule: true,
  AtRule: true,
  Comment: true,
  DeclarationExit: true,
  RuleExit: true,
  AtRuleExit: true,
  CommentExit: true,
  RootExit: true,
  DocumentExit: true,
  OnceExit: true
};
const NOT_VISITORS = {
  postcssPlugin: true,
  prepare: true,
  Once: true
};
const CHILDREN = 0;
function isPromise(obj) {
  return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node) {
  let key = false;
  let type = TYPE_TO_CLASS_NAME[node.type];
  if (node.type === "decl") {
    key = node.prop.toLowerCase();
  } else if (node.type === "atrule") {
    key = node.name.toLowerCase();
  }
  if (key && node.append) {
    return [
      type,
      type + "-" + key,
      CHILDREN,
      type + "Exit",
      type + "Exit-" + key
    ];
  } else if (key) {
    return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
  } else if (node.append) {
    return [type, CHILDREN, type + "Exit"];
  } else {
    return [type, type + "Exit"];
  }
}
function toStack(node) {
  let events;
  if (node.type === "document") {
    events = ["Document", CHILDREN, "DocumentExit"];
  } else if (node.type === "root") {
    events = ["Root", CHILDREN, "RootExit"];
  } else {
    events = getEvents(node);
  }
  return {
    node,
    events,
    eventIndex: 0,
    visitors: [],
    visitorIndex: 0,
    iterator: 0
  };
}
function cleanMarks(node) {
  node[isClean] = false;
  if (node.nodes)
    node.nodes.forEach((i) => cleanMarks(i));
  return node;
}
let postcss$1 = {};
class LazyResult$2 {
  constructor(processor2, css, opts) {
    this.stringified = false;
    this.processed = false;
    let root2;
    if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
      root2 = cleanMarks(css);
    } else if (css instanceof LazyResult$2 || css instanceof Result$2) {
      root2 = cleanMarks(css.root);
      if (css.map) {
        if (typeof opts.map === "undefined")
          opts.map = {};
        if (!opts.map.inline)
          opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      let parser2 = parse$2;
      if (opts.syntax)
        parser2 = opts.syntax.parse;
      if (opts.parser)
        parser2 = opts.parser;
      if (parser2.parse)
        parser2 = parser2.parse;
      try {
        root2 = parser2(css, opts);
      } catch (error) {
        this.processed = true;
        this.error = error;
      }
      if (root2 && !root2[my]) {
        Container$1.rebuild(root2);
      }
    }
    this.result = new Result$2(processor2, root2, opts);
    this.helpers = __spreadProps(__spreadValues({}, postcss$1), { result: this.result, postcss: postcss$1 });
    this.plugins = this.processor.plugins.map((plugin2) => {
      if (typeof plugin2 === "object" && plugin2.prepare) {
        return __spreadValues(__spreadValues({}, plugin2), plugin2.prepare(this.result));
      } else {
        return plugin2;
      }
    });
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.stringify().css;
  }
  get content() {
    return this.stringify().content;
  }
  get map() {
    return this.stringify().map;
  }
  get root() {
    return this.sync().root;
  }
  get messages() {
    return this.sync().messages;
  }
  warnings() {
    return this.sync().warnings();
  }
  toString() {
    return this.css;
  }
  then(onFulfilled, onRejected) {
    return this.async().then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  async() {
    if (this.error)
      return Promise.reject(this.error);
    if (this.processed)
      return Promise.resolve(this.result);
    if (!this.processing) {
      this.processing = this.runAsync();
    }
    return this.processing;
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    this.processed = true;
    if (this.processing) {
      throw this.getAsyncError();
    }
    for (let plugin2 of this.plugins) {
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        this.walkSync(root2);
      }
      if (this.listeners.OnceExit) {
        if (root2.type === "document") {
          for (let subRoot of root2.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot);
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root2);
        }
      }
    }
    return this.result;
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = true;
    this.sync();
    let opts = this.result.opts;
    let str = stringify$2;
    if (opts.syntax)
      str = opts.syntax.stringify;
    if (opts.stringifier)
      str = opts.stringifier;
    if (str.stringify)
      str = str.stringify;
    let map = new MapGenerator$1(str, this.result.root, this.result.opts);
    let data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  }
  walkSync(node) {
    node[isClean] = true;
    let events = getEvents(node);
    for (let event of events) {
      if (event === CHILDREN) {
        if (node.nodes) {
          node.each((child) => {
            if (!child[isClean])
              this.walkSync(child);
          });
        }
      } else {
        let visitors = this.listeners[event];
        if (visitors) {
          if (this.visitSync(visitors, node.toProxy()))
            return;
        }
      }
    }
  }
  visitSync(visitors, node) {
    for (let [plugin2, visitor] of visitors) {
      this.result.lastPlugin = plugin2;
      let promise;
      try {
        promise = visitor(node, this.helpers);
      } catch (e) {
        throw this.handleError(e, node.proxyOf);
      }
      if (node.type !== "root" && node.type !== "document" && !node.parent) {
        return true;
      }
      if (isPromise(promise)) {
        throw this.getAsyncError();
      }
    }
  }
  runOnRoot(plugin2) {
    this.result.lastPlugin = plugin2;
    try {
      if (typeof plugin2 === "object" && plugin2.Once) {
        if (this.result.root.type === "document") {
          let roots = this.result.root.nodes.map((root2) => plugin2.Once(root2, this.helpers));
          if (isPromise(roots[0])) {
            return Promise.all(roots);
          }
          return roots;
        }
        return plugin2.Once(this.result.root, this.helpers);
      } else if (typeof plugin2 === "function") {
        return plugin2(this.result.root, this.result);
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(error, node) {
    let plugin2 = this.result.lastPlugin;
    try {
      if (node)
        node.addToError(error);
      this.error = error;
      if (error.name === "CssSyntaxError" && !error.plugin) {
        error.plugin = plugin2.postcssPlugin;
        error.setMessage();
      } else if (plugin2.postcssVersion) {
        if (false)
          ;
      }
    } catch (err) {
      if (console && console.error)
        console.error(err);
    }
    return error;
  }
  async runAsync() {
    this.plugin = 0;
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin2 = this.plugins[i];
      let promise = this.runOnRoot(plugin2);
      if (isPromise(promise)) {
        try {
          await promise;
        } catch (error) {
          throw this.handleError(error);
        }
      }
    }
    this.prepareVisitors();
    if (this.hasListener) {
      let root2 = this.result.root;
      while (!root2[isClean]) {
        root2[isClean] = true;
        let stack = [toStack(root2)];
        while (stack.length > 0) {
          let promise = this.visitTick(stack);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (e) {
              let node = stack[stack.length - 1].node;
              throw this.handleError(e, node);
            }
          }
        }
      }
      if (this.listeners.OnceExit) {
        for (let [plugin2, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin2;
          try {
            if (root2.type === "document") {
              let roots = root2.nodes.map((subRoot) => visitor(subRoot, this.helpers));
              await Promise.all(roots);
            } else {
              await visitor(root2, this.helpers);
            }
          } catch (e) {
            throw this.handleError(e);
          }
        }
      }
    }
    this.processed = true;
    return this.stringify();
  }
  prepareVisitors() {
    this.listeners = {};
    let add = (plugin2, type, cb) => {
      if (!this.listeners[type])
        this.listeners[type] = [];
      this.listeners[type].push([plugin2, cb]);
    };
    for (let plugin2 of this.plugins) {
      if (typeof plugin2 === "object") {
        for (let event in plugin2) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(`Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin2[event] === "object") {
              for (let filter in plugin2[event]) {
                if (filter === "*") {
                  add(plugin2, event, plugin2[event][filter]);
                } else {
                  add(plugin2, event + "-" + filter.toLowerCase(), plugin2[event][filter]);
                }
              }
            } else if (typeof plugin2[event] === "function") {
              add(plugin2, event, plugin2[event]);
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  visitTick(stack) {
    let visit = stack[stack.length - 1];
    let { node, visitors } = visit;
    if (node.type !== "root" && node.type !== "document" && !node.parent) {
      stack.pop();
      return;
    }
    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
      let [plugin2, visitor] = visitors[visit.visitorIndex];
      visit.visitorIndex += 1;
      if (visit.visitorIndex === visitors.length) {
        visit.visitors = [];
        visit.visitorIndex = 0;
      }
      this.result.lastPlugin = plugin2;
      try {
        return visitor(node.toProxy(), this.helpers);
      } catch (e) {
        throw this.handleError(e, node);
      }
    }
    if (visit.iterator !== 0) {
      let iterator = visit.iterator;
      let child;
      while (child = node.nodes[node.indexes[iterator]]) {
        node.indexes[iterator] += 1;
        if (!child[isClean]) {
          child[isClean] = true;
          stack.push(toStack(child));
          return;
        }
      }
      visit.iterator = 0;
      delete node.indexes[iterator];
    }
    let events = visit.events;
    while (visit.eventIndex < events.length) {
      let event = events[visit.eventIndex];
      visit.eventIndex += 1;
      if (event === CHILDREN) {
        if (node.nodes && node.nodes.length) {
          node[isClean] = true;
          visit.iterator = node.getIterator();
        }
        return;
      } else if (this.listeners[event]) {
        visit.visitors = this.listeners[event];
        return;
      }
    }
    stack.pop();
  }
}
LazyResult$2.registerPostcss = (dependant) => {
  postcss$1 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator = mapGenerator;
let stringify$1 = stringify_1;
let parse$1 = parse_1;
const Result$1 = result;
class NoWorkResult$1 {
  constructor(processor2, css, opts) {
    css = css.toString();
    this.stringified = false;
    this._processor = processor2;
    this._css = css;
    this._opts = opts;
    this._map = void 0;
    let root2;
    let str = stringify$1;
    this.result = new Result$1(this._processor, root2, this._opts);
    this.result.css = css;
    let self = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return self.root;
      }
    });
    let map = new MapGenerator(str, root2, this._opts, css);
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate();
      if (generatedCSS) {
        this.result.css = generatedCSS;
      }
      if (generatedMap) {
        this.result.map = generatedMap;
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  get processor() {
    return this.result.processor;
  }
  get opts() {
    return this.result.opts;
  }
  get css() {
    return this.result.css;
  }
  get content() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get root() {
    if (this._root) {
      return this._root;
    }
    let root2;
    let parser2 = parse$1;
    try {
      root2 = parser2(this._css, this._opts);
    } catch (error) {
      this.error = error;
    }
    if (this.error) {
      throw this.error;
    } else {
      this._root = root2;
      return root2;
    }
  }
  get messages() {
    return [];
  }
  warnings() {
    return [];
  }
  toString() {
    return this._css;
  }
  then(onFulfilled, onRejected) {
    return this.async().then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return this.async().catch(onRejected);
  }
  finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  }
  async() {
    if (this.error)
      return Promise.reject(this.error);
    return Promise.resolve(this.result);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
}
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
class Processor$1 {
  constructor(plugins = []) {
    this.version = "8.4.13";
    this.plugins = this.normalize(plugins);
  }
  use(plugin2) {
    this.plugins = this.plugins.concat(this.normalize([plugin2]));
    return this;
  }
  process(css, opts = {}) {
    if (this.plugins.length === 0 && typeof opts.parser === "undefined" && typeof opts.stringifier === "undefined" && typeof opts.syntax === "undefined") {
      return new NoWorkResult(this, css, opts);
    } else {
      return new LazyResult$1(this, css, opts);
    }
  }
  normalize(plugins) {
    let normalized = [];
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i();
      } else if (i.postcss) {
        i = i.postcss;
      }
      if (typeof i === "object" && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === "object" && i.postcssPlugin) {
        normalized.push(i);
      } else if (typeof i === "function") {
        normalized.push(i);
      } else if (typeof i === "object" && (i.parse || i.stringify))
        ;
      else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    }
    return normalized;
  }
}
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
  if (Array.isArray(json))
    return json.map((n) => fromJSON$1(n));
  let _a = json, { inputs: ownInputs } = _a, defaults = __objRest(_a, ["inputs"]);
  if (ownInputs) {
    inputs = [];
    for (let input2 of ownInputs) {
      let inputHydrated = __spreadProps(__spreadValues({}, input2), { __proto__: Input$1.prototype });
      if (inputHydrated.map) {
        inputHydrated.map = __spreadProps(__spreadValues({}, inputHydrated.map), {
          __proto__: PreviousMap.prototype
        });
      }
      inputs.push(inputHydrated);
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map((n) => fromJSON$1(n, inputs));
  }
  if (defaults.source) {
    let _b = defaults.source, { inputId } = _b, source = __objRest(_b, ["inputId"]);
    defaults.source = source;
    if (inputId != null) {
      defaults.source.input = inputs[inputId];
    }
  }
  if (defaults.type === "root") {
    return new Root$1(defaults);
  } else if (defaults.type === "decl") {
    return new Declaration$1(defaults);
  } else if (defaults.type === "rule") {
    return new Rule$1(defaults);
  } else if (defaults.type === "comment") {
    return new Comment$1(defaults);
  } else if (defaults.type === "atrule") {
    return new AtRule$1(defaults);
  } else {
    throw new Error("Unknown node type: " + json.type);
  }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError = cssSyntaxError;
let Declaration = declaration;
let LazyResult = lazyResult;
let Container = container;
let Processor = processor;
let stringify = stringify_1;
let fromJSON = fromJSON_1;
let Document = document$1;
let Warning = warning;
let Comment = comment;
let AtRule = atRule;
let Result = result;
let Input = input;
let parse = parse_1;
let list = list_1;
let Rule = rule;
let Root = root;
let Node = node_1;
function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0];
  }
  return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
  if (console && console.warn) {
    console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
    if ({}.LANG && {}.LANG.startsWith("cn")) {
      console.warn(name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226");
    }
  }
  function creator(...args) {
    let transformer = initializer(...args);
    transformer.postcssPlugin = name;
    transformer.postcssVersion = new Processor().version;
    return transformer;
  }
  let cache;
  Object.defineProperty(creator, "postcss", {
    get() {
      if (!cache)
        cache = creator();
      return cache;
    }
  });
  creator.process = function(css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts);
  };
  return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults) => new Comment(defaults);
postcss.atRule = (defaults) => new AtRule(defaults);
postcss.decl = (defaults) => new Declaration(defaults);
postcss.rule = (defaults) => new Rule(defaults);
postcss.root = (defaults) => new Root(defaults);
postcss.document = (defaults) => new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
postcss.default = postcss;
var ButtonGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "gnkButtonGroup",
  extends: _sfc_main$j,
  data() {
    return {
      childButtons: [],
      selectedItem: null
    };
  },
  props: {
    toggle: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["single", "default"].includes(value);
      }
    },
    draggable: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      required: false,
      default: false
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    transparent: {
      type: Boolean,
      required: false,
      default: false
    },
    clear: {
      type: Boolean,
      required: false,
      default: false
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    selectedItems() {
      return this.childButtons.filter((button) => button.checked);
    },
    componentClassObject() {
      return {
        "--draggable": this.draggable
      };
    }
  },
  watch: {},
  emits: [],
  methods: {
    childChanged(event) {
      if (event.newValue == false)
        return;
      this.childButtons.forEach((button) => {
        if (button.componentId === event.componentId) {
          this.selectedItem = button;
          return;
        }
        button.checked = false;
      });
    },
    registerChild(element) {
      var _a;
      if (((_a = element == null ? void 0 : element.$options) == null ? void 0 : _a.name) === "gnkButton")
        this.childButtons.push(element);
    }
  },
  mounted() {
  }
};
const _hoisted_1$7 = ["id"];
const _hoisted_2$4 = {
  key: 0,
  class: "--title"
};
const _hoisted_3$4 = { class: "--buttons" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onOnchange: _cache[0] || (_cache[0] = ($event) => $options.childChanged())
  }, [
    !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
      renderSlot(_ctx.$slots, "title")
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_3$4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 42, _hoisted_1$7);
}
var gnkButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var Loading_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  name: "gnkLoading",
  extends: _sfc_main$j,
  data() {
    return {
      loaded: false
    };
  },
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "points", "scale"].includes(value);
      }
    },
    label: {
      type: String,
      default: ""
    },
    percentage: {
      type: Number,
      default: -1,
      validator: function(value) {
        return value >= -1 && value <= 100;
      }
    },
    opacity: {
      type: Number,
      default: 1,
      validator: function(value) {
        return value >= 0 && value <= 1;
      }
    },
    target: {
      type: String,
      default: "body",
      validator: function(value) {
        return document.querySelector(value) !== null ? value : "body";
      }
    },
    type: {
      type: String,
      default: "loadingType01",
      validator: function(value) {
        return ["loadingType01", "loadingType02", "loadingType03", "loadingType04", "loadingType05"].includes(value);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--primary": true,
        "--modal": this.modal,
        "--loadingType01": this.type === "loadingType01",
        "--loadingType02": this.type === "loadingType02",
        "--loadingType03": this.type === "loadingType03",
        "--loadingType04": this.type === "loadingType04",
        "--loadingType05": this.type === "loadingType05"
      };
    },
    componentStyleObject() {
      return {
        "--loading-size": this.getTargetSize() + "px",
        "--opacity": this.opacity
      };
    }
  },
  methods: {
    getTargetSize() {
      let target = document.querySelector(this.target);
      if (target) {
        return Math.min(Math.min(target.offsetWidth, target.offsetHeight) - 10, 64);
      }
      return 64;
    },
    onEvent(event) {
      event.stopPropagation();
      event.preventDefault();
    }
  },
  mounted() {
    this.loaded = true;
  }
};
const _hoisted_1$6 = ["id"];
const _hoisted_2$3 = { class: "row full-height" };
const _hoisted_3$3 = { class: "col-block" };
const _hoisted_4$3 = { class: "fill flex-centered" };
const _hoisted_5$3 = /* @__PURE__ */ createElementVNode("div", { class: "--loading" }, null, -1);
const _hoisted_6$3 = {
  key: 0,
  class: "fill flex-centered text-bold"
};
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode("% ");
const _hoisted_8$1 = { class: "--loading-label | text-bold" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnkProgressbar = resolveComponent("gnkProgressbar");
  const _component_gnk_Counter = resolveComponent("gnk-Counter");
  return $data.loaded ? (openBlock(), createBlock(Teleport, {
    key: 0,
    to: $props.target
  }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass([[_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses], "grid"]),
          id: _ctx.componentId,
          style: normalizeStyle($options.componentStyleObject),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onEvent($event), ["prevent"])),
          onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => $options.onEvent($event), ["prevent"])),
          onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => $options.onEvent($event), ["prevent"])),
          onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => $options.onEvent($event), ["prevent"])),
          onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onEvent($event), ["prevent"])),
          onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => $options.onEvent($event), ["prevent"]))
        }, [
          $props.percentage >= 0 && !$props.modal ? (openBlock(), createBlock(_component_gnkProgressbar, {
            key: 0,
            class: "--progress",
            size: "mini",
            square: "",
            block: "",
            value: $props.percentage
          }, null, 8, ["value"])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_2$3, [
            createElementVNode("div", _hoisted_3$3, [
              createElementVNode("div", _hoisted_4$3, [
                _hoisted_5$3,
                $props.percentage >= 0 ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
                  createVNode(_component_gnk_Counter, { value: $props.percentage }, null, 8, ["value"]),
                  _hoisted_7$2
                ])) : createCommentVNode("", true)
              ]),
              createElementVNode("p", _hoisted_8$1, toDisplayString($props.label), 1)
            ])
          ])
        ], 46, _hoisted_1$6)
      ]),
      _: 1
    })
  ], 8, ["to"])) : createCommentVNode("", true);
}
var gnkLoading = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  name: "gnkCard",
  extends: _sfc_main$j,
  data() {
    return {};
  },
  props: {
    headerBackground: {
      type: String,
      default: null,
      skip: true,
      validator: function(value) {
        return value.length > 0;
      }
    },
    headerBackgroundAlt: {
      type: String,
      default: null,
      skip: true
    },
    headerBackgroundHeight: {
      type: Number,
      default: 450,
      skip: true,
      validator(value) {
        return value > 125 && value < 500 && !isNaN(value);
      }
    },
    animateInactive: {
      type: Boolean,
      default: false,
      skip: true
    },
    type: {
      type: String,
      default: "cardType01",
      validator: function(value) {
        return ["cardType01", "cardType02", "cardType03", "cardType04", "cardType05"].includes(value);
      }
    },
    overflow: {
      type: Boolean,
      default: "visible",
      skip: true,
      validator: function(value) {
        return ["hidden", "scroll", "visible"].includes(value);
      }
    }
  },
  computed: {
    hasValidHeaderBackground() {
      return !!this.headerBackground && this.headerBackground.length > 0;
    },
    componentClassObject() {
      return {
        "--separate-title": !this.hasValidHeaderBackground,
        "--animate": !this.animateInactive,
        "--overflow-hidden": this.overflow == "hidden",
        "--overflow-scroll": this.overflow == "scroll",
        "--overflow-visible": this.overflow == "visible" && (this.type === "cardType01" || !this.hasValidHeaderBackground),
        "--cardType01": this.type === "cardType01" || !this.hasValidHeaderBackground,
        "--cardType02": this.type === "cardType02" && this.hasValidHeaderBackground,
        "--cardType03": this.type === "cardType03" && this.hasValidHeaderBackground
      };
    }
  },
  emits: ["click", "mouseover", "mouseleave", "mouseover", "keydown", "keypress", "keyup"]
};
const _hoisted_1$5 = ["id"];
const _hoisted_2$2 = {
  key: 0,
  class: "--hero-container"
};
const _hoisted_3$2 = {
  key: 1,
  class: "--interactions"
};
const _hoisted_4$2 = { class: "--content" };
const _hoisted_5$2 = {
  key: 0,
  class: "--content-title | text-capitalize flex"
};
const _hoisted_6$2 = {
  key: 1,
  class: "--content-body | flex"
};
const _hoisted_7$1 = {
  key: 1,
  class: "--footer | flex"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_image = resolveComponent("gnk-image");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = ($event) => this.componentRaiseEvent("click", { event: $event })),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => this.componentRaiseEvent("mouseleave", { event: $event })),
    onMouseover: _cache[2] || (_cache[2] = ($event) => this.componentRaiseEvent("mouseover", { event: $event })),
    onKeydown: _cache[3] || (_cache[3] = ($event) => this.componentRaiseEvent("keydown", { event: $event })),
    onKeypress: _cache[4] || (_cache[4] = ($event) => this.componentRaiseEvent("keypress", { event: $event })),
    onKeyup: _cache[5] || (_cache[5] = ($event) => this.componentRaiseEvent("keyup", { event: $event }))
  }, [
    this.hasValidHeaderBackground || !!this.$slots.interactions ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
      this.hasValidHeaderBackground ? (openBlock(), createBlock(_component_gnk_image, {
        key: 0,
        class: "--hero-background",
        src: $props.headerBackground,
        alt: $props.headerBackgroundAlt,
        animation: "zoomIn-light"
      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
      !!this.$slots.interactions ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
        renderSlot(_ctx.$slots, "interactions")
      ])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4$2, [
      !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
        renderSlot(_ctx.$slots, "title")
      ])) : createCommentVNode("", true),
      !!this.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ]),
    !!this.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
      renderSlot(_ctx.$slots, "footer")
    ])) : createCommentVNode("", true)
  ], 42, _hoisted_1$5);
}
var gnkCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var Listview_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "gnkListview",
  extends: _sfc_main$j,
  data() {
    return {
      childElements: []
    };
  },
  props: {},
  computed: {
    componentClassObject() {
      return {};
    }
  },
  watch: {},
  emits: [],
  methods: {
    registerChilds(element) {
      element.$options.name == "gnkListviewItem" ? this.childElements.push(element) : null;
    }
  },
  provide() {
    return {
      registerChild: this.registerChilds
    };
  },
  mounted() {
  }
};
const _hoisted_1$4 = ["id"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$4);
}
var gnkListview = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var ListviewItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  name: "gnkListviewItem",
  extends: _sfc_main$j,
  data() {
    return {
      childElements: [],
      checked: false
    };
  },
  props: {
    to: {
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator(type) {
        return ["button", "toggle"].includes(type);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--light": true,
        "--active": this.checked & this.type == "toggle"
      };
    }
  },
  watch: {},
  emits: [],
  methods: {
    async onClick(event) {
      var _a;
      createRipple$1.createRipple(event);
      (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.push(this.to);
      this.componentRaiseEvent("onclick");
    }
  },
  mounted() {
  }
};
const _hoisted_1$3 = ["id"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$3);
}
var gnkListviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "gnkApp",
  extends: _sfc_main$j,
  data() {
    return {
      childElements: [],
      transitionName: "",
      routeHistoryStartingPoint: "",
      routeHistory: [],
      observer: null
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showSidebar: {
      type: Boolean,
      default: true
    },
    showSidebarToggle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    componentClassObject() {
      return {};
    },
    hasRouter() {
      return !!this.$router;
    }
  },
  watch: {
    async $route(to, from) {
      if (this.routeHistory.length > 35) {
        this.routeHistory = this.routeHistory.slice(15);
      }
      if (!this.routeHistoryStartingPoint) {
        this.routeHistory.push(to.name);
        this.routeHistoryStartingPoint = to.name;
      }
      if (to.name == this.routeHistoryStartingPoint) {
        this.routeHistory = [];
        this.transitionName = "prev";
        return;
      }
      if (this.routeHistory.at(-1) == to.name && this.routeHistory.length > 1) {
        this.routeHistory.pop();
        this.transitionName = "prev";
        return;
      }
      if (to.name == from.name)
        return;
      this.routeHistory.push(from.name);
      this.transitionName = "next";
    }
  },
  methods: {
    registerChilds(element) {
      var _a;
      if (((_a = element == null ? void 0 : element.$options) == null ? void 0 : _a.name) == "gnkPage")
        this.childElements.push(element);
    }
  },
  provide() {
    return {
      uiLevel: 0
    };
  }
};
const _hoisted_1$2 = ["id"];
const _hoisted_2$1 = { class: "--header | grid" };
const _hoisted_3$1 = { class: "row" };
const _hoisted_4$1 = { class: "col-12" };
const _hoisted_5$1 = { class: "row" };
const _hoisted_6$1 = {
  key: 0,
  class: "col-12"
};
const _hoisted_7 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " view_sidebar ", -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " search ", -1);
const _hoisted_9 = { class: "--body | fill grid" };
const _hoisted_10 = { class: "row fill" };
const _hoisted_11 = {
  key: 0,
  class: "--sidebar | lg-hide col-4 overflow-vertical"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" overflow-vertical ");
const _hoisted_13 = { class: "--gnkApp-content | col-12" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_Progressbar = resolveComponent("gnk-Progressbar");
  const _component_gnk_button = resolveComponent("gnk-button");
  const _component_gnk_buttonGroup = resolveComponent("gnk-buttonGroup");
  const _component_gnkNavbar = resolveComponent("gnkNavbar");
  const _component_router_view = resolveComponent("router-view");
  const _component_gnkSwipeManager = resolveComponent("gnkSwipeManager");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([[_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses], "fill"]),
    id: _ctx.componentId
  }, [
    createElementVNode("div", _hoisted_2$1, [
      createElementVNode("div", _hoisted_3$1, [
        createElementVNode("div", _hoisted_4$1, [
          withDirectives(createVNode(_component_gnk_Progressbar, {
            loading: "",
            square: "",
            class: "full-width"
          }, null, 512), [
            [vShow, $props.loading]
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_5$1, [
        $props.showHeader ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createVNode(_component_gnkNavbar, null, {
            left: withCtx(() => [
              $props.showSidebarToggle ? (openBlock(), createBlock(_component_gnk_buttonGroup, {
                key: 0,
                clear: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_gnk_button, {
                    size: "xl",
                    clear: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            title: withCtx(() => {
              var _a;
              return [
                createElementVNode("h4", null, toDisplayString((_a = _ctx.$route) == null ? void 0 : _a.meta.title), 1)
              ];
            }),
            right: withCtx(() => [
              createVNode(_component_gnk_buttonGroup, { clear: "" }, {
                default: withCtx(() => [
                  createVNode(_component_gnk_button, {
                    size: "xl",
                    clear: ""
                  }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ])
    ]),
    createElementVNode("div", _hoisted_9, [
      createElementVNode("div", _hoisted_10, [
        !!this.$slots.sidebar ? (openBlock(), createElementBlock("div", _hoisted_11, [
          renderSlot(_ctx.$slots, "sidebar", {}, () => [
            _hoisted_12
          ])
        ])) : createCommentVNode("", true),
        createVNode(_component_gnkSwipeManager, {
          onSwipedLeft: _cache[0] || (_cache[0] = ($event) => {
            var _a;
            return (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.go(1);
          }),
          onSwipedRight: _cache[1] || (_cache[1] = ($event) => {
            var _a;
            return (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.go(-1);
          }),
          class: "col-block grid",
          captureDirection: "horizontal"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_13, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                $options.hasRouter ? (openBlock(), createBlock(_component_router_view, { key: 0 }, {
                  default: withCtx(({ Component }) => [
                    createVNode(Transition, {
                      name: $data.transitionName || "fade"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(Component)))
                      ]),
                      _: 2
                    }, 1032, ["name"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ])
          ]),
          _: 3
        })
      ])
    ])
  ], 10, _hoisted_1$2);
}
var gnkApp = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var Page_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "gnkPage",
  extends: _sfc_main$j,
  data() {
    return {
      childElements: [],
      loaded: false,
      parentPage: null
    };
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "page"
    }
  },
  computed: {
    componentClassObject() {
      return {};
    },
    hasRouter() {
      return !!this.$router;
    }
  },
  watch: {},
  emits: [],
  methods: {
    registerChilds(element) {
    }
  },
  provide() {
    return {
      uiLevel: this.uiLevel
    };
  },
  mounted() {
    this.loaded = true;
  }
};
const _hoisted_1$1 = ["id"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["grid col-12", [_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    createVNode(Transition, { name: "next" }, {
      default: withCtx(() => [
        $data.loaded ? renderSlot(_ctx.$slots, "navbar", { key: 0 }) : createCommentVNode("", true)
      ]),
      _: 3
    }),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$1);
}
var gnkPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var Navbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "gnkNavbar",
  extends: _sfc_main$j,
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {
      pageScrollPosition: 0,
      hide: false
    };
  },
  props: {
    hideOnScroll: {
      type: Boolean,
      default: false,
      skip: true
    },
    OnScrollThreshold: {
      type: Number,
      default: 50,
      skip: true
    },
    showTitleOnScroll: {
      type: Boolean,
      default: false
    },
    solidOnScroll: {
      type: Boolean,
      default: true,
      skip: true
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--hide-on-scroll": this.hideOnScroll && this.hide,
        "--show-title": this.showTitleOnScroll,
        "--solid-on-scroll": this.solidOnScroll && this.hide
      };
    }
  },
  methods: {
    handleScroll(event) {
      event.target.scrollTop > this.OnScrollThreshold ? this.hide = true : this.hide = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "--content | row flex-centered" };
const _hoisted_3 = { class: "--left | col-3 flex-centered flex-left" };
const _hoisted_4 = { class: "col-6" };
const _hoisted_5 = { class: "--title | flex-centered" };
const _hoisted_6 = { class: "--right | col-3 flex-centered flex-right" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([[_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses], "grid flex-centered"])
  }, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "left")
      ]),
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "title")
        ])
      ]),
      createElementVNode("div", _hoisted_6, [
        renderSlot(_ctx.$slots, "right")
      ])
    ])
  ], 10, _hoisted_1)), [
    [vShow, !$data.hide]
  ]);
}
var gnkNavbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse2(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify2(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2 && segments.length > 1) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse: parse2,
    stringify: stringify2
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser2 = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser2, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
      i++;
    matchers.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers,
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router2.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router2[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
        state: data,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign(locationAsObject(failure2.to), {
            state: data,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list2 = errorHandlers.list();
    if (list2.length) {
      list2.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router3 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router3;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router3);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router2;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
let router;
router == null ? void 0 : router.beforeEach((to, from, next) => {
  if (to.component !== null)
    next();
  else
    next("/404");
});
function registerRoutes(App, routes) {
  if (!routes)
    return null;
  router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes
  });
  App.use(router);
  router.push(routes[0]);
}
const Store = reactive({
  colorMode: ref("light"),
  alternateColorMode(isDark = null) {
    this.colorMode = isDark === null ? this.colorMode === "light" ? "dark" : "light" : isDark;
    document.querySelector("body").setAttribute("gnk-theme-colorMode", this.colorMode);
    localStorage.setItem("gnk-theme-colorMode", this.colorMode);
  },
  swipeCapturedBy: null
});
Store.alternateColorMode(localStorage.getItem("gnk-theme-colorMode"));
function registerModuleComponents(App, components) {
  if (!components) {
    return;
  }
  for (var componentName in components) {
    if (components.hasOwnProperty(componentName)) {
      App.component(componentName, components[componentName]);
    }
  }
}
var gnk = {
  gnkImage,
  gnkBadge,
  gnk404,
  gnkSwipeManager,
  gnkCheckbox,
  gnkSwitch,
  gnkRadio,
  gnkInput,
  gnkCounter,
  gnkButton,
  gnkProgressbar,
  gnkLoading,
  gnkButtonGroup,
  gnkApp,
  gnkPage,
  gnkNavbar,
  gnkCard,
  gnkListview,
  gnkListviewItem,
  router,
  Store,
  registerRoutes,
  registerModuleComponents
};
export { gnk as default };
