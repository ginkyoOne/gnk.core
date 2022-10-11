var _a;
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, renderSlot, resolveComponent, createVNode, withCtx, createTextVNode, createBlock, withModifiers, Fragment, renderList, Teleport, Transition, withDirectives, vShow, resolveDynamicComponent, reactive, computed, watch, shallowRef, unref, nextTick, defineComponent, inject, h, provide, ref } from "vue";
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
function setCssVariable(element, propertyName, value) {
  if (typeof element !== "undefined") {
    element.style.setProperty(propertyName, value);
  }
}
function getCssVariable(element, propertyName) {
  if (typeof element !== "undefined") {
    return getComputedStyle(element).getPropertyValue(propertyName);
  }
}
function hexToHsl(hex) {
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
}
function setColors(colors, forceLight = true) {
  if (!Array.isArray(colors))
    colors = [colors];
  colors.forEach((color) => {
    if (!Object.keys(color).length > 0)
      return;
    let result2 = hexToHsl(color[Object.keys(color)[0]]);
    if (!result2)
      return;
    let { H, S, L } = result2;
    document.querySelectorAll("[gnk-theme-colorMode=dark], [gnk-theme-colorMode=light]").forEach((element) => {
      setCssVariable(element, `--COLOR-${Object.keys(color)[0]}-H`, H);
      setCssVariable(element, `--COLOR-${Object.keys(color)[0]}-S`, S);
      if (forceLight)
        setCssVariable(element, `--COLOR-${Object.keys(color)[0]}-L`, L);
    });
  });
}
const _sfc_main$p = {
  name: "gnkComponent",
  emits: ["update:modelValue", "update:checked", "mouseleave", "mouseover", "keydown", "keypress", "keyup", "click", "onClick"],
  data() {
    return {
      isolatedCheck: false
    };
  },
  props: {
    type: {
      type: String,
      required: false,
      skip: true,
      default: "toggle"
    },
    checked: {
      default: void 0,
      require: false,
      skip: true
    },
    value: {
      require: false,
      skip: true,
      default: void 0
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
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    secondary: {
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
    level: {
      type: String,
      required: false,
      default: null
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
      default: void 0,
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
      var _a2, _b;
      let componentProps = {};
      for (let prop in this.$options.props) {
        if (!((_a2 = this.$options.props[prop]) == null ? void 0 : _a2.skip)) {
          if (!(this[prop] === false || this[prop] === "" || this[prop] === void 0 || this[prop] === null)) {
            if (((_b = this.$options.props[prop]) == null ? void 0 : _b.type) === String) {
              componentProps["--" + prop + "-" + this[prop]] = true;
            } else {
              componentProps["--" + prop] = this[prop];
            }
          }
        }
      }
      componentProps["--checked"] = this.isCheched;
      componentProps["--default"] = !this.hasStyle;
      componentProps["darkmode"] = this.store.theme.isDarkMode;
      componentProps["|"] = true;
      return componentProps;
    },
    hasStyle() {
      return this.primary == true || this.secondary == true || this.info == true || this.success == true || this.warning == true || this.danger == true || this.bug == true || this.dark == true || this.light == true || this.hexColor != null || this.level != null;
    },
    isCheched() {
      if ((this == null ? void 0 : this.type) == "toggle") {
        let isolatedValue = this.value === null || this.value === void 0 ? this.componentId : this.value;
        switch (true) {
          case typeof this.checked == "boolean":
            this.isolatedCheck = this.checked;
            break;
          case Array.isArray(this.checked):
            this.isolatedCheck = this.checked.includes(isolatedValue);
            break;
          case (this.checked === void 0 || this.checked === null):
            this.isolatedCheck = this.isolatedCheck;
            break;
          default:
            this.isolatedCheck = JSON.stringify(this.checked) === JSON.stringify(isolatedValue);
            break;
        }
      }
      return this.isolatedCheck;
    }
  },
  methods: {
    componentElementClientRect(el = this == null ? void 0 : this.$el) {
      let modalPosition = el == null ? void 0 : el.getBoundingClientRect();
      return {
        top: !modalPosition ? 0 : modalPosition.top,
        left: !modalPosition ? 0 : modalPosition.left,
        width: !modalPosition ? 0 : modalPosition.width,
        height: !modalPosition ? 0 : modalPosition.height
      };
    },
    componentRaiseEvent(eventName, data) {
      try {
        this.$emit(eventName, data);
        if (typeof this.$parent.registerChildEvents == "function")
          this.$parent.registerChildEvents(this, eventName, data);
      } catch (ex) {
        console.error(ex);
      }
    },
    setBaseColor(color) {
      let result2 = hexToHsl(color);
      if (!result2)
        return;
      let { H, S, L } = result2;
      setCssVariable(this.$el, "--COLOR-BASE-H", H);
      setCssVariable(this.$el, "--COLOR-BASE-S", S);
      setCssVariable(this.$el, "--COLOR-BASE-L", L);
    },
    objectToArray(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    },
    onChecked(eventName, event) {
      if (typeof (this == null ? void 0 : this.href) != "undefined" && (this == null ? void 0 : this.href) != "")
        window.open(this.href, this.black ? "_blank" : "_self");
      if (typeof (this == null ? void 0 : this.to) != "undefined" && (this == null ? void 0 : this.to) != "")
        this.$router.push(this.to);
      if ((this == null ? void 0 : this.type) == "toggle") {
        this.isolatedCheck = !this.isolatedCheck;
        let isolatedValue = this.value === null || this.value === void 0 ? this.componentId : this.value;
        switch (true) {
          case Array.isArray(this.checked):
            if (this.checked.includes(isolatedValue)) {
              this.checked.splice(this.checked.indexOf(isolatedValue), 1);
            } else {
              this.checked.push(isolatedValue);
              this.checked.sort();
            }
            this.componentRaiseEvent("update:checked", this.checked);
            break;
          case typeof this.checked == "boolean":
            this.componentRaiseEvent("update:checked", this.isolatedCheck);
            break;
          case (this.checked === void 0 || this.checked === null):
            this.componentRaiseEvent("update:checked", this.isolatedCheck);
            break;
          default:
            this.componentRaiseEvent("update:checked", JSON.stringify(this.checked) === JSON.stringify(isolatedValue) ? "" : isolatedValue);
        }
      } else {
        if ((this == null ? void 0 : this.type) != "button" && (this == null ? void 0 : this.type) != "toggle")
          this.$refs.internalButton.click();
        this.componentRaiseEvent(eventName, event);
      }
      if (!!event)
        createRipple$1.createRipple(event);
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
    if (typeof this.hexColor != "undefined")
      this.setBaseColor(this == null ? void 0 : this.hexColor);
    if (typeof this.updateContentPadding != "undefined")
      this.updateContentPadding();
    if (typeof this.updateChildContentPadding != "undefined")
      this.updateChildContentPadding();
  },
  unmounted() {
    this.$el.parentNode.removeChild(this.$el);
    if (typeof this.childButtons !== "undefined")
      this.childButtons.length = 0;
  },
  deactivated() {
    console.log("deactivated", this.componentName, this.componentId);
  },
  provide() {
    return {
      registerChild: typeof (this == null ? void 0 : this.registerChild) == "function" ? this == null ? void 0 : this.registerChild : null
    };
  },
  inject: {
    store: {
      default: globalThis.store
    },
    registerChild: {
      default: typeof registerChild == "function" && ((_a = globalThis.$options.provide()) == null ? void 0 : _a.registerChild) === null ? registerChild : null
    }
  }
};
var Image_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$o = {
  name: "gnkImage",
  extends: _sfc_main$p,
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
        "--primary": true,
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
        "--zoomOut-blur": this.animation == "zoomOut-blur"
      };
    },
    componentStyleObject() {
      var _a2;
      return {
        "--img-background-url": `url(${this.src})`,
        "--img-background-alt": `url(${this.alt})`,
        "--img-background-size-w": !!this.size && this.size.length > 0 && this.size.includes("x") && this.size.split("x")[0] > 0 && this.size.split("x")[1] > 0 ? `${this.size.split("x")[0]}px` : "100%",
        "--img-background-size-h": !!this.size && this.size.length > 0 && this.size.includes("x") && this.size.split("x")[0] > 0 && this.size.split("x")[1] > 0 ? `${(_a2 = this.size) == null ? void 0 : _a2.split("x")[1]}px` : "100%"
      };
    }
  },
  methods: {}
};
const _hoisted_1$o = ["id"];
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("div", { class: "--img-placeholder" }, null, -1);
const _hoisted_3$g = ["alt"];
const _hoisted_4$f = {
  key: 0,
  class: "--title | flex flex-centered"
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    _hoisted_2$j,
    createElementVNode("div", {
      class: normalizeClass(["--img-background |", $options.componentClassObject]),
      alt: this.alt
    }, null, 10, _hoisted_3$g),
    this.showTitle && (this.title.constructor === String && this.title.length > 0) ? (openBlock(), createElementBlock("div", _hoisted_4$f, [
      createElementVNode("h3", null, toDisplayString(this.title), 1)
    ])) : createCommentVNode("", true)
  ], 14, _hoisted_1$o);
}
var gnkImage = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
var Badge_vue_vue_type_style_index_0_lang = "";
const _sfc_main$n = {
  name: "gnkBadge",
  extends: _sfc_main$p,
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
    var _a2;
    this.parentClientRect = (_a2 = this == null ? void 0 : this.$parent) == null ? void 0 : _a2.componentElementClientRect();
  }
};
const _hoisted_1$n = ["id"];
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, _hoisted_1$n);
}
var gnkBadge = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
var _404_vue_vue_type_style_index_0_lang = "";
const _sfc_main$m = {
  name: "gnk404",
  extends: _sfc_main$p,
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
const _hoisted_1$m = ["id"];
const _hoisted_2$i = { class: "grid fill" };
const _hoisted_3$f = /* @__PURE__ */ createElementVNode("div", { class: "fill" }, null, -1);
const _hoisted_4$e = { class: "row" };
const _hoisted_5$e = { class: "col-12 flex-centered" };
const _hoisted_6$c = { class: "P404-500" };
const _hoisted_7$a = { class: "row" };
const _hoisted_8$9 = { class: "col-12 flex-centered" };
const _hoisted_9$6 = { class: "row" };
const _hoisted_10$4 = {
  key: 0,
  class: "col-12 flex-centered p-t-20"
};
const _hoisted_11$4 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " chevron_left ", -1);
const _hoisted_12$4 = /* @__PURE__ */ createElementVNode("div", { class: "fill" }, null, -1);
const _hoisted_13$3 = /* @__PURE__ */ createElementVNode("div", { class: "fill" }, null, -1);
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_button = resolveComponent("gnk-button");
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName + " |", _ctx.componentGeneralClasses])
  }, [
    createElementVNode("div", _hoisted_2$i, [
      _hoisted_3$f,
      createElementVNode("div", _hoisted_4$e, [
        createElementVNode("div", _hoisted_5$e, [
          createElementVNode("h1", _hoisted_6$c, toDisplayString($props.title), 1)
        ])
      ]),
      createElementVNode("div", _hoisted_7$a, [
        createElementVNode("div", _hoisted_8$9, toDisplayString($props.label), 1)
      ]),
      createElementVNode("div", _hoisted_9$6, [
        $props.showGoBack ? (openBlock(), createElementBlock("div", _hoisted_10$4, [
          createVNode(_component_gnk_button, {
            bug: "",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
          }, {
            default: withCtx(() => [
              _hoisted_11$4,
              createTextVNode(" " + toDisplayString($props.goBackLable), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]),
      _hoisted_12$4,
      _hoisted_13$3
    ])
  ], 10, _hoisted_1$m);
}
var gnk404 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
var Icon_vue_vue_type_style_index_0_lang = "";
const _sfc_main$l = {
  name: "gnkIcon",
  extends: _sfc_main$p,
  data() {
    return {};
  },
  props: {
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
        "--noStyle": !this.hasStyle,
        [`--size-${this.size}`]: this.size != "default"
      };
    },
    componentStyleObject() {
      return {};
    }
  }
};
const _hoisted_1$l = ["id"];
const _hoisted_2$h = {
  key: 0,
  class: "material-symbols-rounded"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    !!this.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2$h, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ], 14, _hoisted_1$l);
}
var gnkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
var ExpandPanel_vue_vue_type_style_index_0_lang = "";
const _sfc_main$k = {
  name: "gnkExpandPanel",
  extends: _sfc_main$p,
  data() {
    return {};
  },
  props: {
    position: {
      type: String,
      skip: true,
      default: "top-right",
      validator: (value) => {
        return ["none", "top-right", "top-left", "bottom-right", "bottom-left"].includes(value);
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
    shadow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--dark": !this.hasStyle
      };
    },
    componentStyleObject() {
      return {};
    }
  },
  methods: {},
  mounted() {
  }
};
const _hoisted_1$k = ["id"];
const _hoisted_2$g = { class: "--base" };
const _hoisted_3$e = {
  ref: "title",
  class: "--title"
};
const _hoisted_4$d = { class: "grid row col-12" };
const _hoisted_5$d = { class: "col-12" };
const _hoisted_6$b = /* @__PURE__ */ createTextVNode(" teste ");
const _hoisted_7$9 = { class: "col" };
const _hoisted_8$8 = /* @__PURE__ */ createTextVNode(" expand_less ");
const _hoisted_9$5 = { class: "--content" };
const _hoisted_10$3 = {
  ref: "contentBody",
  class: "--content-body"
};
const _hoisted_11$3 = {
  ref: "contentFooter",
  class: "--footer"
};
const _hoisted_12$3 = { class: "--badge-holder" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_icon = resolveComponent("gnk-icon");
  const _component_gnk_button = resolveComponent("gnk-button");
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    createElementVNode("div", _hoisted_2$g, [
      createElementVNode("div", _hoisted_3$e, [
        createVNode(_component_gnk_button, {
          class: "--expand-button",
          primary: this.primary,
          secondary: this.secondary,
          info: this.info,
          success: this.success,
          warning: this.warning,
          danger: this.danger,
          bug: this.bug,
          dark: this.dark,
          light: this.light,
          align: _ctx.left,
          transparent: "",
          block: "",
          square: "",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onChecked("click", $event))
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_4$d, [
              createElementVNode("div", _hoisted_5$d, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  _hoisted_6$b
                ])
              ]),
              createElementVNode("div", _hoisted_7$9, [
                createVNode(_component_gnk_icon, {
                  size: "small",
                  class: "--expand-icon"
                }, {
                  default: withCtx(() => [
                    _hoisted_8$8
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 3
        }, 8, ["primary", "secondary", "info", "success", "warning", "danger", "bug", "dark", "light", "align"])
      ], 512),
      createElementVNode("div", _hoisted_9$5, [
        createElementVNode("div", _hoisted_10$3, [
          renderSlot(_ctx.$slots, "default")
        ], 512),
        createElementVNode("div", _hoisted_11$3, [
          renderSlot(_ctx.$slots, "footer")
        ], 512)
      ])
    ]),
    createElementVNode("div", _hoisted_12$3, [
      renderSlot(_ctx.$slots, "badge")
    ]),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      primary: this.primary,
      secondary: this.secondary,
      info: this.info,
      success: this.success,
      warning: this.warning,
      danger: this.danger,
      bug: this.bug,
      dark: this.dark,
      light: this.light,
      square: this.square,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["primary", "secondary", "info", "success", "warning", "danger", "bug", "dark", "light", "square", "target"])) : createCommentVNode("", true)
  ], 14, _hoisted_1$k);
}
var gnkExpandPanel = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
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
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var SwipeManager_vue_vue_type_style_index_0_lang = "";
const _sfc_main$j = {
  name: "gnkSwipeManager",
  extends: _sfc_main$p,
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
      }
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
const _hoisted_1$j = ["id"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["p-0 m-0 fill", [_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$j);
}
var gnkSwipeManager = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
var Button_vue_vue_type_style_index_0_lang = "";
const _sfc_main$i = {
  name: "gnkButton",
  extends: _sfc_main$p,
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      required: false,
      skip: true,
      default: "button"
    },
    to: {
      type: String,
      skip: true,
      require: false,
      default: ""
    },
    href: {
      type: String,
      default: "",
      require: false,
      skip: true
    },
    blank: {
      type: Boolean,
      default: false,
      require: false,
      skip: true
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
    size: {
      type: String,
      required: false,
      default: ""
    },
    align: {
      type: String,
      default: "middle",
      required: false,
      validator(type) {
        return ["left", "right", "middle", "vertical"].includes(type);
      }
    },
    animationType: {
      type: String,
      required: false,
      default: ""
    },
    animateInactive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--dark": !this.hasStyle,
        "--checked": this.type == "toggle" && this.isCheched
      };
    }
  },
  methods: {},
  watch: {},
  mounted() {
  }
};
const _hoisted_1$i = ["disabled", "id"];
const _hoisted_2$f = ["id", "type"];
const _hoisted_3$d = { class: "--base" };
const _hoisted_4$c = {
  key: 0,
  class: "--button-on"
};
const _hoisted_5$c = {
  key: 1,
  class: "--button-busy"
};
const _hoisted_6$a = { class: "--button-default" };
const _hoisted_7$8 = {
  key: 2,
  class: "--button-off"
};
const _hoisted_8$7 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_9$4 = {
  key: 0,
  class: "--badge-holder"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_progressbar = resolveComponent("gnk-progressbar");
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.onChecked("click", $event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => _ctx.onChecked("keypress", $event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("button", {
      ref: "internalButton",
      id: _ctx.componentId,
      type: this.type
    }, null, 8, _hoisted_2$f),
    createElementVNode("div", _hoisted_3$d, [
      !!this.$slots.checked ? (openBlock(), createElementBlock("div", _hoisted_4$c, [
        renderSlot(_ctx.$slots, "checked")
      ])) : createCommentVNode("", true),
      !!this.$slots.loading ? (openBlock(), createElementBlock("div", _hoisted_5$c, [
        renderSlot(_ctx.$slots, "loading")
      ])) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_6$a, [
        renderSlot(_ctx.$slots, "default")
      ]),
      !!this.$slots.animate ? (openBlock(), createElementBlock("div", _hoisted_7$8, [
        renderSlot(_ctx.$slots, "animate")
      ])) : createCommentVNode("", true),
      _hoisted_8$7,
      this.loading ? (openBlock(), createBlock(_component_gnk_progressbar, {
        key: 3,
        class: normalizeClass(_ctx.componentGeneralClasses),
        loading: ""
      }, null, 8, ["class"])) : createCommentVNode("", true),
      createVNode(_component_gnk_loading, {
        hidden: !this.busy,
        primary: this.primary,
        secondary: this.secondary,
        info: this.info,
        success: this.success,
        warning: this.warning,
        danger: this.danger,
        bug: this.bug,
        dark: this.dark,
        light: this.light,
        square: this.square,
        target: "#" + _ctx.componentId + "> .--base"
      }, null, 8, ["hidden", "primary", "secondary", "info", "success", "warning", "danger", "bug", "dark", "light", "square", "target"])
    ]),
    !!this.$slots.badge ? (openBlock(), createElementBlock("div", _hoisted_9$4, [
      renderSlot(_ctx.$slots, "badge")
    ])) : createCommentVNode("", true)
  ], 42, _hoisted_1$i);
}
var gnkButton = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
var Checkbox_vue_vue_type_style_index_0_lang = "";
const _sfc_main$h = {
  name: "gnkCheckbox",
  extends: _sfc_main$p,
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
const _hoisted_1$h = ["disabled", "id"];
const _hoisted_2$e = ["id", "name", "checked", "value"];
const _hoisted_3$c = { class: "--base" };
const _hoisted_4$b = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_5$b = {
  key: 0,
  class: "--thumb | material-symbols-rounded"
};
const _hoisted_6$9 = {
  key: 1,
  class: "--thumb | material-symbols-rounded"
};
const _hoisted_7$7 = ["for"];
const _hoisted_8$6 = { class: "--badge-holder" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.componentId,
      name: $props.name,
      type: "Checkbox",
      checked: $options.isChecked,
      value: $data.defaultValue
    }, null, 8, _hoisted_2$e),
    createElementVNode("div", _hoisted_3$c, [
      _hoisted_4$b,
      !$props.indeterminate ? (openBlock(), createElementBlock("span", _hoisted_5$b, " done ")) : (openBlock(), createElementBlock("span", _hoisted_6$9, " remove "))
    ]),
    createElementVNode("label", { for: _ctx.componentId }, [
      renderSlot(_ctx.$slots, "label")
    ], 8, _hoisted_7$7),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_8$6, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$h);
}
var gnkCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
var Switch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$g = {
  name: "gnkSwitch",
  extends: _sfc_main$p,
  data() {
    return {
      defaultValue: Math.random().toString(36).substr(2, 9)
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
    notValue: {
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
      validator: (value) => ["left", "right"].includes(value)
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
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    animate: {
      type: String,
      required: false,
      default: "default",
      validator(type) {
        return ["fade", "scale", "flip", "default"].includes(type);
      }
    }
  },
  computed: {
    isChecked() {
      return Array.isArray(this.modelValue) ? this.modelValue.includes(this.isValueNull) : this.modelValue === this.isValueNull;
    },
    isValueNull() {
      return this.value === null ? this.defaultValue : this.value;
    },
    componentClassObject() {
      return {
        "--primary": true,
        "--checked": this.isChecked
      };
    }
  },
  mounted() {
    if (this.checked)
      this.onchange(null);
  },
  methods: {
    onchange(eventName, event) {
      if (this.isChecked) {
        if (Array.isArray(this.modelValue)) {
          this.modelValue.splice(this.modelValue.indexOf(this.isValueNull), 1);
          this.$emit("update:modelValue", this.modelValue);
        } else {
          this.$emit("update:modelValue", this.notValue);
        }
      } else {
        if (Array.isArray(this.modelValue)) {
          this.modelValue.push(this.isValueNull);
          this.modelValue.sort();
          this.$emit("update:modelValue", this.modelValue);
        } else {
          this.$emit("update:modelValue", this.isValueNull);
        }
      }
      this.componentRaiseEvent(eventName, { event });
    }
  }
};
const _hoisted_1$g = ["disabled", "id"];
const _hoisted_2$d = ["id", "name", "checked", "value"];
const _hoisted_3$b = { class: "--base" };
const _hoisted_4$a = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_5$a = {
  key: 0,
  class: "--switch-on"
};
const _hoisted_6$8 = /* @__PURE__ */ createElementVNode("div", { class: "--thumb" }, null, -1);
const _hoisted_7$6 = {
  key: 1,
  class: "--switch-off"
};
const _hoisted_8$5 = ["for"];
const _hoisted_9$3 = { class: "--badge-holder" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onchange("click", $event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onchange("keypress", $event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.componentId,
      name: $props.name,
      type: "checkbox",
      checked: $options.isChecked,
      value: $data.defaultValue
    }, null, 8, _hoisted_2$d),
    createElementVNode("div", _hoisted_3$b, [
      _hoisted_4$a,
      !!this.$slots.on ? (openBlock(), createElementBlock("div", _hoisted_5$a, [
        renderSlot(_ctx.$slots, "on")
      ])) : createCommentVNode("", true),
      _hoisted_6$8,
      !!this.$slots.off ? (openBlock(), createElementBlock("div", _hoisted_7$6, [
        renderSlot(_ctx.$slots, "off")
      ])) : createCommentVNode("", true)
    ]),
    createElementVNode("label", { for: _ctx.componentId }, [
      renderSlot(_ctx.$slots, "label")
    ], 8, _hoisted_8$5),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_9$3, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$g);
}
var gnkSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
var Radio_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  name: "gnkRadio",
  extends: _sfc_main$p,
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
const _hoisted_1$f = ["disabled", "id"];
const _hoisted_2$c = ["id", "name", "checked", "value"];
const _hoisted_3$a = /* @__PURE__ */ createElementVNode("div", { class: "--base" }, [
  /* @__PURE__ */ createElementVNode("div", { class: "--thumb" }, [
    /* @__PURE__ */ createElementVNode("div", { class: "--ripple" })
  ])
], -1);
const _hoisted_4$9 = ["for"];
const _hoisted_5$9 = { class: "--badge-holder" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.componentId,
      name: $props.name,
      type: "radio",
      checked: $options.isChecked,
      value: $data.defaultValue
    }, null, 8, _hoisted_2$c),
    _hoisted_3$a,
    createElementVNode("label", { for: _ctx.componentId }, [
      renderSlot(_ctx.$slots, "label")
    ], 8, _hoisted_4$9),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_5$9, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$f);
}
var gnkRadio = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
var Input_vue_vue_type_style_index_0_lang = "";
const _sfc_main$e = {
  name: "gnkInput",
  extends: _sfc_main$p,
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
const _hoisted_1$e = ["disabled", "id"];
const _hoisted_2$b = { class: "--base" };
const _hoisted_3$9 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_4$8 = {
  key: 0,
  class: "--icon | material-symbols-rounded"
};
const _hoisted_5$8 = ["type", "value", "name", "disabled", "min", "max", "step", "required", "minlenght", "maxlenght", "pattern"];
const _hoisted_6$7 = ["for"];
const _hoisted_7$5 = {
  key: 1,
  class: "--button-upDown | flex flex-row"
};
const _hoisted_8$4 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " arrow_upward ", -1);
const _hoisted_9$2 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " arrow_downward ", -1);
const _hoisted_10$2 = {
  key: 0,
  class: "material-symbols-rounded"
};
const _hoisted_11$2 = {
  key: 1,
  class: "material-symbols-rounded"
};
const _hoisted_12$2 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " close ", -1);
const _hoisted_13$2 = { class: "--badge-holder" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_button = resolveComponent("gnk-button");
  const _component_gnk_progressbar = resolveComponent("gnk-progressbar");
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[5] || (_cache[5] = ($event) => [$options.buttonClicked("base"), this.onchange("click", $event)]),
    onMouseleave: _cache[6] || (_cache[6] = ($event) => this.componentRaiseEvent("mouseleave", $event)),
    onMouseover: _cache[7] || (_cache[7] = ($event) => this.componentRaiseEvent("mouseover", $event)),
    onKeydown: _cache[8] || (_cache[8] = ($event) => this.componentRaiseEvent("keydown", $event)),
    onKeypress: _cache[9] || (_cache[9] = ($event) => this.componentRaiseEvent("keypress", $event)),
    onKeyup: _cache[10] || (_cache[10] = ($event) => this.componentRaiseEvent("keyup", $event))
  }, [
    createElementVNode("div", _hoisted_2$b, [
      _hoisted_3$9,
      this.icon != void 0 ? (openBlock(), createElementBlock("span", _hoisted_4$8, toDisplayString(this.icon), 1)) : createCommentVNode("", true),
      createElementVNode("input", {
        class: "--input",
        ref: "input",
        type: this.passwordVisible ? "text" : $props.type,
        placeholder: "  ",
        value: $data.text,
        name: _ctx.componentId,
        onInput: _cache[0] || (_cache[0] = ($event) => this.onchange("valueChanged", $event)),
        disabled: _ctx.disabled,
        min: $props.min,
        max: $props.max,
        step: $props.step,
        required: $props.required,
        minlenght: _ctx.minlenght,
        maxlenght: _ctx.maxlenght,
        pattern: $props.pattern,
        autofocus: ""
      }, null, 40, _hoisted_5$8),
      createElementVNode("label", {
        class: "--placeholder",
        for: _ctx.componentId
      }, toDisplayString($props.placeholder), 9, _hoisted_6$7),
      this.type == "number" ? (openBlock(), createElementBlock("div", _hoisted_7$5, [
        createVNode(_component_gnk_button, {
          disabled: _ctx.disabled,
          class: "--button-down",
          circular: "",
          clear: "",
          light: "",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.buttonClicked("numberUp"))
        }, {
          default: withCtx(() => [
            _hoisted_8$4
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
            _hoisted_9$2
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
          this.passwordVisible ? (openBlock(), createElementBlock("span", _hoisted_10$2, " visibility_off ")) : (openBlock(), createElementBlock("span", _hoisted_11$2, " visibility "))
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
          _hoisted_12$2
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
    createElementVNode("div", _hoisted_13$2, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 42, _hoisted_1$e);
}
var gnkInput = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
var Counter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  name: "gnkCounter",
  extends: _sfc_main$p,
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
const _hoisted_1$d = ["id"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, toDisplayString($data.currentValue), 15, _hoisted_1$d);
}
var gnkCounter = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var ProgressBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  name: "gnkProgressbar",
  extends: _sfc_main$p,
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
const _hoisted_1$c = ["aria-valuemax", "aria-valuenow", "title", "id"];
const _hoisted_2$a = {
  key: 0,
  class: "--sections-steps"
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
      this.sections ? (openBlock(), createElementBlock("div", _hoisted_2$a, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(this.max - 1, (index2) => {
          return openBlock(), createElementBlock("div", { key: index2 });
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 14, _hoisted_1$c);
}
var gnkProgressbar = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var ButtonGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
  name: "gnkButtonGroup",
  extends: _sfc_main$p,
  data() {
    return {
      beingDragged: false,
      childButtons: [],
      childLastChecked: null
    };
  },
  props: {
    draggable: {
      type: Boolean,
      default: false
    },
    pill: {
      type: Boolean,
      required: false,
      default: false
    },
    wrap: {
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
    mode: {
      type: String,
      required: false,
      default: "normal",
      validator: (type) => {
        return ["normal", "tabbar"].includes(type.toString());
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--level-3": !this.hasStyle,
        "--beingDragged": this.beingDragged && this.draggable
      };
    },
    childChecked() {
      return this.childButtons.filter((child) => child.isolatedCheck == true);
    }
  },
  watch: {
    childChecked(newValue, oldValue) {
      this.calculateTabbarSelection();
    }
  },
  emits: [],
  methods: {
    registerChild(element) {
      var _a2;
      if (((_a2 = element == null ? void 0 : element.$options) == null ? void 0 : _a2.name) === "gnkButton") {
        this.childButtons.push(element);
      }
    },
    calculateTabbarSelection() {
      var _a2;
      try {
        let element = (_a2 = this.childChecked[0]) == null ? void 0 : _a2.$el;
        let { left: childLeft, width: childWidth } = this.componentElementClientRect(element);
        let { left: parentLeft } = this.componentElementClientRect(this.$el);
        let { left: parentContainerLeft } = this.componentElementClientRect(this.$el.querySelector(".--buttons")[0]);
        let childColor = getCssVariable(element, "--background-color");
        setCssVariable(this.$el, "--buttons-highlight-background-color", childColor);
        setCssVariable(this.$el, "--buttons-highlight-left", `${Math.abs(parentLeft - childLeft)}px`);
        setCssVariable(this.$el, "--buttons-highlight-margin", `${childWidth / 4}px`);
        setCssVariable(this.$el, "--buttons-highlight-width", `${childWidth}px`);
        setCssVariable(this.$el, "--buttons-highlight-opacity", `1`);
      } catch (error) {
        console.error(error);
      }
    },
    startDragging() {
    },
    endDragging() {
    }
  },
  updated() {
    this.calculateTabbarSelection();
  }
};
const _hoisted_1$b = ["draggable", "disabled", "id"];
const _hoisted_2$9 = { class: "--base" };
const _hoisted_3$8 = {
  key: 0,
  class: "--title"
};
const _hoisted_4$7 = {
  key: 1,
  class: "--buttons"
};
const _hoisted_5$7 = /* @__PURE__ */ createElementVNode("div", { class: "--buttons-glow" }, null, -1);
const _hoisted_6$6 = /* @__PURE__ */ createElementVNode("div", { class: "--buttons-highlight" }, null, -1);
const _hoisted_7$4 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_8$3 = {
  key: 0,
  class: "--badge-holder"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    draggable: this.draggable,
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onDragstart: _cache[0] || (_cache[0] = (...args) => this.dragStart && this.dragStart(...args)),
    onDragend: _cache[1] || (_cache[1] = (...args) => this.dragEnd && this.dragEnd(...args)),
    onClick: _cache[2] || (_cache[2] = ($event) => this.componentRaiseEvent("click", $event)),
    onMouseleave: _cache[3] || (_cache[3] = ($event) => this.componentRaiseEvent("mouseleave", $event)),
    onMouseover: _cache[4] || (_cache[4] = ($event) => this.componentRaiseEvent("mouseover", $event)),
    onKeydown: _cache[5] || (_cache[5] = ($event) => this.componentRaiseEvent("keydown", $event)),
    onKeypress: _cache[6] || (_cache[6] = ($event) => this.componentRaiseEvent("click", $event)),
    onKeyup: _cache[7] || (_cache[7] = ($event) => this.componentRaiseEvent("keyup", $event))
  }, [
    createElementVNode("div", _hoisted_2$9, [
      !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
        renderSlot(_ctx.$slots, "title")
      ])) : createCommentVNode("", true),
      !!this.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
        _hoisted_5$7,
        renderSlot(_ctx.$slots, "default"),
        _hoisted_6$6
      ])) : createCommentVNode("", true),
      _hoisted_7$4,
      createVNode(_component_gnk_loading, {
        hidden: !this.busy,
        primary: this.primary,
        secondary: this.secondary,
        info: this.info,
        success: this.success,
        warning: this.warning,
        danger: this.danger,
        bug: this.bug,
        dark: this.dark,
        light: this.light,
        square: this.square,
        target: "#" + _ctx.componentId + "> .--base"
      }, null, 8, ["hidden", "primary", "secondary", "info", "success", "warning", "danger", "bug", "dark", "light", "square", "target"])
    ]),
    !!this.$slots.badge ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
      renderSlot(_ctx.$slots, "badge")
    ])) : createCommentVNode("", true)
  ], 42, _hoisted_1$b);
}
var gnkButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
var Loading_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  name: "gnkLoading",
  extends: _sfc_main$p,
  data() {
    return {
      loaded: false
    };
  },
  props: {
    hidden: {
      type: Boolean,
      default: false
    },
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
        if (this.modal == false && this.percentage == -1 && this.target != null) {
          return Math.min(Math.min(target.offsetWidth, target.offsetHeight) - 10, 64);
        } else
          return Math.min(Math.min(target.offsetWidth, target.offsetHeight) - 20, 64);
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
const _hoisted_1$a = ["id"];
const _hoisted_2$8 = { class: "row full-height" };
const _hoisted_3$7 = { class: "col-block" };
const _hoisted_4$6 = { class: "fill flex-centered" };
const _hoisted_5$6 = /* @__PURE__ */ createElementVNode("div", { class: "--loading" }, null, -1);
const _hoisted_6$5 = {
  key: 0,
  class: "fill flex-centered text-bold"
};
const _hoisted_7$3 = /* @__PURE__ */ createTextVNode("% ");
const _hoisted_8$2 = { class: "--loading-label | text-bold" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
          createElementVNode("div", _hoisted_2$8, [
            createElementVNode("div", _hoisted_3$7, [
              createElementVNode("div", _hoisted_4$6, [
                _hoisted_5$6,
                $props.percentage >= 0 ? (openBlock(), createElementBlock("div", _hoisted_6$5, [
                  createVNode(_component_gnk_Counter, { value: $props.percentage }, null, 8, ["value"]),
                  _hoisted_7$3
                ])) : createCommentVNode("", true)
              ]),
              createElementVNode("p", _hoisted_8$2, toDisplayString($props.label), 1)
            ])
          ])
        ], 46, _hoisted_1$a)
      ]),
      _: 1
    })
  ], 8, ["to"])) : createCommentVNode("", true);
}
var gnkLoading = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  name: "gnkCard",
  extends: _sfc_main$p,
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
      type: String,
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
const _hoisted_1$9 = ["id"];
const _hoisted_2$7 = {
  key: 0,
  class: "--hero-container"
};
const _hoisted_3$6 = {
  key: 1,
  class: "--interactions"
};
const _hoisted_4$5 = { class: "--content" };
const _hoisted_5$5 = {
  key: 0,
  class: "--content-title | text-capitalize flex"
};
const _hoisted_6$4 = {
  key: 1,
  class: "--content-body | flex"
};
const _hoisted_7$2 = {
  key: 1,
  class: "--footer | flex"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_image = resolveComponent("gnk-image");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = ($event) => this.componentRaiseEvent("click", $event)),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => this.componentRaiseEvent("mouseleave", $event)),
    onMouseover: _cache[2] || (_cache[2] = ($event) => this.componentRaiseEvent("mouseover", $event)),
    onKeydown: _cache[3] || (_cache[3] = ($event) => this.componentRaiseEvent("keydown", $event)),
    onKeypress: _cache[4] || (_cache[4] = ($event) => this.componentRaiseEvent("keypress", $event)),
    onKeyup: _cache[5] || (_cache[5] = ($event) => this.componentRaiseEvent("keyup", $event))
  }, [
    this.hasValidHeaderBackground || !!this.$slots.interactions ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
      this.hasValidHeaderBackground ? (openBlock(), createBlock(_component_gnk_image, {
        key: 0,
        class: "--hero-background",
        src: $props.headerBackground,
        alt: $props.headerBackgroundAlt,
        animation: "zoomIn-light"
      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
      !!this.$slots.interactions ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
        renderSlot(_ctx.$slots, "interactions")
      ])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4$5, [
      !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
        renderSlot(_ctx.$slots, "title")
      ])) : createCommentVNode("", true),
      !!this.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ]),
    !!this.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
      renderSlot(_ctx.$slots, "footer")
    ])) : createCommentVNode("", true)
  ], 42, _hoisted_1$9);
}
var gnkCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var Sidebar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {
  name: "gnkSidebar",
  extends: _sfc_main$p,
  emits: ["update:modelValue", "mouseleave", "mouseover", "keydown", "keypress", "keyup"],
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    modelValue: {
      default: null,
      required: false,
      skip: true
    },
    square: {
      type: Boolean,
      required: false,
      default: false
    },
    align: {
      type: String,
      default: "left",
      skip: true,
      validator: (value) => ["left", "top", "right", "bottom"].includes(value)
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
    componentClassObject: function() {
      return {
        "--open": this.modelValue,
        "--align-left": this.align == "left",
        "--align-right": this.align == "right",
        "--align-top": this.align == "top",
        "--align-bottom": this.align == "bottom"
      };
    }
  },
  mounted() {
    this.isOpen = this.modelValue;
  },
  watch: {
    value(newValue) {
    }
  },
  methods: {
    onchange(event) {
      console.log(event);
    },
    close(event) {
      this.isOpen = !this.modelValue;
      this.$emit("update:modelValue", this.isOpen);
    }
  }
};
const _hoisted_1$8 = ["disabled", "id"];
const _hoisted_2$6 = { class: "--base" };
const _hoisted_3$5 = { class: "--content" };
const _hoisted_4$4 = { class: "--header" };
const _hoisted_5$4 = { class: "--content-body" };
const _hoisted_6$3 = { class: "--footer" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[1] || (_cache[1] = ($event) => $options.onchange($event)),
    onMouseleave: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[4] || (_cache[4] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[5] || (_cache[5] = withModifiers(($event) => $options.onchange($event), ["prevent"])),
    onKeyup: _cache[6] || (_cache[6] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("div", {
      class: "--backdrop",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.close($event))
    }),
    createElementVNode("div", _hoisted_2$6, [
      createElementVNode("div", _hoisted_3$5, [
        createElementVNode("div", _hoisted_4$4, [
          renderSlot(_ctx.$slots, "header")
        ]),
        createElementVNode("div", _hoisted_5$4, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("div", _hoisted_6$3, [
          renderSlot(_ctx.$slots, "footer")
        ])
      ])
    ]),
    this.busy ? (openBlock(), createBlock(_component_gnk_loading, {
      key: 0,
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["target"])) : createCommentVNode("", true)
  ], 42, _hoisted_1$8);
}
var gnkSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var Dropdown_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "gnkDropdown",
  extends: _sfc_main$p,
  emits: ["update:modelValue", "click", "mouseleave", "mouseover", "keydown", "keypress", "keyup", "valueChanged"],
  data() {
    return {
      isOpen: false,
      zLevel: -1
    };
  },
  props: {
    value: {
      type: Array,
      required: false,
      default: [],
      skip: true
    },
    chips: {
      type: Boolean,
      required: false,
      default: false
    },
    collapseChips: {
      type: Boolean,
      required: false,
      default: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    filter: {
      type: Boolean,
      required: false,
      default: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
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
    clearButton: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  computed: {
    componentClassObject: function() {
      return {
        "--open": this.isOpen
      };
    },
    componentStyleObject: function() {
      return {
        "--z-index": this.zLevel
      };
    }
  },
  watch: {},
  methods: {
    hasFocus(has = false) {
      if (has) {
        let { top, height, left, width } = this.componentElementClientRect(this.$refs.base);
        let list = this.$refs.list;
        setCssVariable(list, "--top", `${top + height - 5}px`);
        setCssVariable(list, "--left", `${left}px`);
        setCssVariable(list, "--width", `${width}px`);
      }
      this.isOpen = has;
    }
  },
  mounted() {
    this.zLevel = this.store.ui.registerDropdown(this.componentId);
  },
  unmounted() {
    this.store.ui.dropDropdown(this.componentId);
  }
};
const _hoisted_1$7 = ["disabled", "id"];
const _hoisted_2$5 = {
  ref: "base",
  class: "--base"
};
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("input", {
  class: "--input",
  type: "text",
  value: "teste"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode("0912356234234");
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode(" Home ");
const _hoisted_6$2 = /* @__PURE__ */ createTextVNode(" Dropdown ");
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(" Expand Panel ");
const _hoisted_8$1 = /* @__PURE__ */ createTextVNode(" Input ");
const _hoisted_9$1 = /* @__PURE__ */ createTextVNode(" Radio ");
const _hoisted_10$1 = /* @__PURE__ */ createTextVNode(" Switch ");
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Checkbox ");
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode(" Buttons ");
const _hoisted_13$1 = /* @__PURE__ */ createTextVNode(" Cards ");
const _hoisted_14$1 = /* @__PURE__ */ createTextVNode(" ProgressBar ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" 404 ");
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_Chip = resolveComponent("gnk-Chip");
  const _component_gnkListviewItem = resolveComponent("gnkListviewItem");
  const _component_gnkListview = resolveComponent("gnkListview");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject),
    onClick: _cache[0] || (_cache[0] = ($event) => this.hasFocus(true)),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => this.componentRaiseEvent("mouseleave", $event)),
    onMouseover: _cache[2] || (_cache[2] = ($event) => this.componentRaiseEvent("mouseover", $event)),
    onKeydown: _cache[3] || (_cache[3] = ($event) => this.componentRaiseEvent("keydown", $event)),
    onKeypress: _cache[4] || (_cache[4] = ($event) => this.componentRaiseEvent("keypress", $event)),
    onKeyup: _cache[5] || (_cache[5] = ($event) => this.componentRaiseEvent("keyup", $event)),
    onFocusin: _cache[6] || (_cache[6] = ($event) => this.hasFocus(true)),
    onFocusout: _cache[7] || (_cache[7] = ($event) => this.hasFocus(false))
  }, [
    createElementVNode("div", _hoisted_2$5, [
      _hoisted_3$4,
      createVNode(_component_gnk_Chip, null, {
        default: withCtx(() => [
          _hoisted_4$3
        ]),
        _: 1
      })
    ], 512),
    (openBlock(), createBlock(Teleport, { to: "#app" }, [
      createElementVNode("div", {
        ref: "list",
        class: normalizeClass(["gnkDropdown--list |", $options.componentClassObject]),
        style: normalizeStyle($options.componentStyleObject)
      }, [
        createVNode(_component_gnkListview, { dark: "" }, {
          default: withCtx(() => [
            createVNode(_component_gnkListviewItem, { to: { name: "Home" } }, {
              default: withCtx(() => [
                _hoisted_5$3
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Dropdown" } }, {
              default: withCtx(() => [
                _hoisted_6$2
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "ExpandPanel" } }, {
              default: withCtx(() => [
                _hoisted_7$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Input" } }, {
              default: withCtx(() => [
                _hoisted_8$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Radio" } }, {
              default: withCtx(() => [
                _hoisted_9$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Switch" } }, {
              default: withCtx(() => [
                _hoisted_10$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Checkbox" } }, {
              default: withCtx(() => [
                _hoisted_11$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Buttons" } }, {
              default: withCtx(() => [
                _hoisted_12$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Cards" } }, {
              default: withCtx(() => [
                _hoisted_13$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "Progressbar" } }, {
              default: withCtx(() => [
                _hoisted_14$1
              ]),
              _: 1
            }),
            createVNode(_component_gnkListviewItem, { to: { name: "NotFound" } }, {
              default: withCtx(() => [
                _hoisted_15
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 6)
    ]))
  ], 46, _hoisted_1$7);
}
var gnkDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var Listview_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  name: "gnkListview",
  extends: _sfc_main$p,
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
const _hoisted_1$6 = ["id"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$6);
}
var gnkListview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var ListviewItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  name: "gnkListviewItem",
  extends: _sfc_main$p,
  data() {
    return {
      childElements: []
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
        "--default": true,
        "--active": this.checked & this.type == "toggle"
      };
    }
  },
  watch: {},
  emits: [],
  methods: {
    async onClick(event) {
      var _a2;
      createRipple$1.createRipple(event);
      (_a2 = this == null ? void 0 : this.$router) == null ? void 0 : _a2.push(this.to);
      this.componentRaiseEvent("click");
    }
  },
  mounted() {
  }
};
const _hoisted_1$5 = ["id"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$5);
}
var gnkListviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "gnkApp",
  extends: _sfc_main$p,
  data() {
    return {
      childPage: void 0,
      transitionName: "",
      routeHistoryStartingPoint: "",
      routeHistory: [],
      routeName: "",
      observer: null
    };
  },
  props: {},
  computed: {
    componentClassObject() {
      var _a2, _b;
      return {
        "--level-0": true,
        "--hide-footer": !!((_a2 = this.childPage) == null ? void 0 : _a2.$slots.footer),
        "--hide-header": !!((_b = this.childPage) == null ? void 0 : _b.$slots.header)
      };
    },
    hasRouter() {
      return !!this.$router;
    }
  },
  watch: {
    childPage(newValue, oldValue) {
      this.updateChildContentPadding();
    },
    async $route(to, from) {
      this.store.currentRoute = to.name;
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
  updated() {
    this.updateChildContentPadding();
  },
  methods: {
    registerChild(element) {
      var _a2;
      if (((_a2 = element == null ? void 0 : element.$options) == null ? void 0 : _a2.name) === "gnkPage") {
        this.childPage = void 0;
        this.childPage = element;
      }
    },
    updateChildContentPadding() {
      var _a2;
      if (!!((_a2 = this.childPage) == null ? void 0 : _a2.$slots.footer))
        return;
      let { height: headerHeight } = this.componentElementClientRect(this.$refs.header);
      let { height: footerHeight } = this.componentElementClientRect(this.$refs.footer);
      this.childPage.parentTopPadding = headerHeight;
      this.childPage.parentBottomPadding = footerHeight;
    }
  },
  provide() {
    return {
      uiLevel: 0
    };
  }
};
const _hoisted_1$4 = ["disabled", "id"];
const _hoisted_2$4 = { class: "--base" };
const _hoisted_3$3 = {
  key: 0,
  class: "--slide-sidebar |"
};
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode(" overflow-vertical ");
const _hoisted_5$2 = {
  ref: "header",
  class: "--header | grid"
};
const _hoisted_6$1 = { class: "row" };
const _hoisted_7 = { class: "col-12" };
const _hoisted_8 = { class: "--header-content" };
const _hoisted_9 = {
  ref: "content",
  class: "--content | grid"
};
const _hoisted_10 = { class: "row" };
const _hoisted_11 = {
  key: 0,
  class: "--content-sidebar | lg-hide-smaller col-4 overflow-vertical"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" overflow-vertical ");
const _hoisted_13 = { class: "--content-main" };
const _hoisted_14 = {
  ref: "footer",
  class: "--footer"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_Progressbar = resolveComponent("gnk-Progressbar");
  const _component_router_view = resolveComponent("router-view");
  const _component_gnk_swipeManager = resolveComponent("gnk-swipeManager");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("click", $event), ["prevent"])),
    onMouseleave: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[4] || (_cache[4] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[6] || (_cache[6] = withModifiers(($event) => this.componentRaiseEvent("keypress", $event), ["prevent"])),
    onKeyup: _cache[7] || (_cache[7] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("div", _hoisted_2$4, [
      !!this.$slots.slideSidebar ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
        renderSlot(_ctx.$slots, "slideSidebar", {}, () => [
          _hoisted_4$2
        ])
      ])) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_5$2, [
        createElementVNode("div", _hoisted_6$1, [
          createElementVNode("div", _hoisted_7, [
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                withDirectives(createVNode(_component_gnk_Progressbar, {
                  loading: "",
                  square: "",
                  class: "full-width"
                }, null, 512), [
                  [vShow, this.store.state.loading]
                ])
              ]),
              _: 1
            })
          ])
        ]),
        createElementVNode("div", _hoisted_8, [
          renderSlot(_ctx.$slots, "header")
        ])
      ], 512),
      createElementVNode("div", _hoisted_9, [
        createElementVNode("div", _hoisted_10, [
          !!this.$slots.sidebar ? (openBlock(), createElementBlock("div", _hoisted_11, [
            renderSlot(_ctx.$slots, "sidebar", {}, () => [
              _hoisted_12
            ])
          ])) : createCommentVNode("", true),
          createVNode(_component_gnk_swipeManager, {
            onSwipedLeft: _cache[0] || (_cache[0] = ($event) => {
              var _a2;
              return (_a2 = this == null ? void 0 : this.$router) == null ? void 0 : _a2.go(1);
            }),
            onSwipedRight: _cache[1] || (_cache[1] = ($event) => {
              var _a2;
              return (_a2 = this == null ? void 0 : this.$router) == null ? void 0 : _a2.go(-1);
            }),
            captureDirection: "horizontal",
            class: "col-block"
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
      ], 512),
      createElementVNode("div", _hoisted_14, [
        renderSlot(_ctx.$slots, "footer")
      ], 512)
    ])
  ], 42, _hoisted_1$4);
}
var gnkApp = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var Page_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  name: "gnkPage",
  extends: _sfc_main$p,
  data() {
    return {
      childElements: [],
      loaded: false,
      parentPage: null,
      parentTopPadding: 0,
      parentBottomPadding: 0
    };
  },
  props: {},
  watch: {
    parentTopPadding() {
      this.updateContentPadding();
    },
    parentBottomPadding() {
      this.updateContentPadding();
    }
  },
  updated() {
    this.updateContentPadding();
  },
  computed: {
    componentClassObject() {
      return {
        "--level-0": true
      };
    }
  },
  methods: {
    updateContentPadding() {
      let { height: headerHeight } = this.componentElementClientRect(this.$refs.header);
      let { height: footerHeight } = this.componentElementClientRect(this.$refs.footer);
      setCssVariable(this.$refs.content, "--padding-top", `${this.parentTopPadding > 0 ? this.parentTopPadding : headerHeight}px`);
      setCssVariable(this.$refs.content, "--padding-bottom", `${this.parentBottomPadding > 0 ? this.parentBottomPadding : footerHeight}px`);
    }
  },
  mounted() {
    this.updateContentPadding();
  }
};
const _hoisted_1$3 = ["disabled", "id"];
const _hoisted_2$3 = { class: "--base" };
const _hoisted_3$2 = {
  ref: "header",
  class: "--header"
};
const _hoisted_4$1 = {
  ref: "content",
  class: "--content | g-10"
};
const _hoisted_5$1 = {
  ref: "footer",
  class: "--footer"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("div", {
    disabled: _ctx.disabled,
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => this.componentRaiseEvent("click", $event), ["prevent"])),
    onMouseleave: _cache[1] || (_cache[1] = withModifiers(($event) => this.componentRaiseEvent("mouseleave", $event), ["prevent"])),
    onMouseover: _cache[2] || (_cache[2] = withModifiers(($event) => this.componentRaiseEvent("mouseover", $event), ["prevent"])),
    onKeydown: _cache[3] || (_cache[3] = withModifiers(($event) => this.componentRaiseEvent("keydown", $event), ["prevent"])),
    onKeypress: _cache[4] || (_cache[4] = withModifiers(($event) => this.componentRaiseEvent("keypress", $event), ["prevent"])),
    onKeyup: _cache[5] || (_cache[5] = withModifiers(($event) => this.componentRaiseEvent("keyup", $event), ["prevent"]))
  }, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("div", _hoisted_3$2, [
        renderSlot(_ctx.$slots, "header")
      ], 512),
      createElementVNode("div", _hoisted_4$1, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      createElementVNode("div", _hoisted_5$1, [
        renderSlot(_ctx.$slots, "footer")
      ], 512)
    ]),
    createVNode(_component_gnk_loading, {
      hidden: !this.busy,
      primary: "",
      target: "#" + _ctx.componentId + "> .--base"
    }, null, 8, ["hidden", "target"])
  ], 42, _hoisted_1$3);
}
var gnkPage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var Navbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "gnkNavbar",
  extends: _sfc_main$p,
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
const _hoisted_1$2 = ["id"];
const _hoisted_2$2 = { class: "--content | row flex-centered" };
const _hoisted_3$1 = { class: "--left | col-3 flex-centered flex-left" };
const _hoisted_4 = { class: "col-6" };
const _hoisted_5 = { class: "--title | flex-centered" };
const _hoisted_6 = { class: "--right | col-3 flex-centered flex-right" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([[_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses], "grid flex-centered"])
  }, [
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("div", _hoisted_3$1, [
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
  ], 10, _hoisted_1$2)), [
    [vShow, !$data.hide]
  ]);
}
var gnkNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var SyntaxHighlight_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "gnkSyntaxHighlight",
  extends: _sfc_main$p,
  data() {
    return {
      parentClientRect: null
    };
  },
  props: {
    code: {
      type: String,
      default: "<html>hello world</html>"
    },
    language: {
      type: String,
      default: "css",
      validator: (value) => {
        return ["html", "css", "js"].includes(value);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--primary": true
      };
    }
  },
  methods: {
    CodeColor() {
      var lang = this.language || "html";
      var elmntObj = document.getElementById("--code");
      var elmntTxt = elmntObj.innerHTML;
      var tagcolor = "mediumblue";
      var tagnamecolor = "brown";
      var attributecolor = "hsl(var(--COLOR-SECONDARY-H), var(--COLOR-SECONDARY-S), var(--COLOR-SECONDARY-L))";
      var attributevaluecolor = "mediumblue";
      var commentcolor = "green";
      var cssselectorcolor = "brown";
      var csspropertycolor = "hsl(var(--COLOR-PRIMARY-H), var(--COLOR-PRIMARY-S), var(--COLOR-PRIMARY-L))";
      var csspropertyvaluecolor = "mediumblue";
      var cssdelimitercolor = "black";
      var cssimportantcolor = "hsl(var(--COLOR-SECONDARY-H), var(--COLOR-SECONDARY-S), var(--COLOR-SECONDARY-L))";
      var jscolor = "hsl(var(--COLOR-LIGHT-H), var(--COLOR-LIGHT-S), var(--COLOR-LIGHT-L))";
      var jskeywordcolor = "mediumblue";
      var jsstringcolor = "brown";
      var jsnumbercolor = "red";
      var jspropertycolor = "black";
      elmntObj.style.fontFamily = "Consolas,'Courier New', monospace";
      if (!lang) {
        lang = "html";
      }
      if (lang == "html") {
        elmntTxt = htmlMode(elmntTxt);
      }
      if (lang == "css") {
        elmntTxt = cssMode(elmntTxt);
      }
      if (lang == "js") {
        elmntTxt = jsMode(elmntTxt);
      }
      elmntObj.innerHTML = elmntTxt;
      function extract(str, start, end, func, repl) {
        var s, e, d = "", a = [];
        while (str.search(start) > -1) {
          s = str.search(start);
          e = str.indexOf(end, s);
          if (e == -1) {
            e = str.length;
          }
          if (repl) {
            a.push(func(str.substring(s, e + end.length)));
            str = str.substring(0, s) + repl + str.substr(e + end.length);
          } else {
            d += str.substring(0, s);
            d += func(str.substring(s, e + end.length));
            str = str.substr(e + end.length);
          }
        }
        this.rest = d + str;
        this.arr = a;
      }
      function htmlMode(txt) {
        var rest = txt, done = "", comment, startpos, endpos, note, i;
        comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
        rest = comment.rest;
        while (rest.indexOf("&lt;") > -1) {
          note = "";
          startpos = rest.indexOf("&lt;");
          if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {
            note = "css";
          }
          if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {
            note = "javascript";
          }
          endpos = rest.indexOf("&gt;", startpos);
          if (endpos == -1) {
            endpos = rest.length;
          }
          done += rest.substring(0, startpos);
          done += tagMode(rest.substring(startpos, endpos + 4));
          rest = rest.substr(endpos + 4);
          if (note == "css") {
            endpos = rest.indexOf("&lt;/style&gt;");
            if (endpos > -1) {
              done += cssMode(rest.substring(0, endpos));
              rest = rest.substr(endpos);
            }
          }
          if (note == "javascript") {
            endpos = rest.indexOf("&lt;/script&gt;");
            if (endpos > -1) {
              done += jsMode(rest.substring(0, endpos));
              rest = rest.substr(endpos);
            }
          }
        }
        rest = done + rest;
        for (i = 0; i < comment.arr.length; i++) {
          rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
        }
        return rest;
      }
      function tagMode(txt) {
        var rest = txt, done = "", startpos, endpos, result2;
        while (rest.search(/(\s|<br>)/) > -1) {
          startpos = rest.search(/(\s|<br>)/);
          endpos = rest.indexOf("&gt;");
          if (endpos == -1) {
            endpos = rest.length;
          }
          done += rest.substring(0, startpos);
          done += attributeMode(rest.substring(startpos, endpos));
          rest = rest.substr(endpos);
        }
        result2 = done + rest;
        result2 = "<span style=color:" + tagcolor + ">&lt;</span>" + result2.substring(4);
        if (result2.substr(result2.length - 4, 4) == "&gt;") {
          result2 = result2.substring(0, result2.length - 4) + "<span style=color:" + tagcolor + ">&gt;</span>";
        }
        return "<span style=color:" + tagnamecolor + ">" + result2 + "</span>";
      }
      function attributeMode(txt) {
        var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
        while (rest.indexOf("=") > -1) {
          endpos = -1;
          startpos = rest.indexOf("=");
          singlefnuttpos = rest.indexOf("'", startpos);
          doublefnuttpos = rest.indexOf('"', startpos);
          spacepos = rest.indexOf(" ", startpos + 2);
          if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
            endpos = rest.indexOf(" ", startpos);
          } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
            endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
          } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
            endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
          }
          if (!endpos || endpos == -1 || endpos < startpos) {
            endpos = rest.length;
          }
          done += rest.substring(0, startpos);
          done += attributeValueMode(rest.substring(startpos, endpos + 1));
          rest = rest.substr(endpos + 1);
        }
        return "<span style=color:" + attributecolor + ">" + done + rest + "</span>";
      }
      function attributeValueMode(txt) {
        return "<span style=color:" + attributevaluecolor + ">" + txt + "</span>";
      }
      function commentMode(txt) {
        return "<span style=color:" + commentcolor + ">" + txt + "</span>";
      }
      function cssMode(txt) {
        var rest = txt, done = "", s, e, comment, i, midz, c, cc2;
        comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
        rest = comment.rest;
        while (rest.search("{") > -1) {
          s = rest.search("{");
          midz = rest.substr(s + 1);
          cc2 = 1;
          c = 0;
          for (i = 0; i < midz.length; i++) {
            if (midz.substr(i, 1) == "{") {
              cc2++;
              c++;
            }
            if (midz.substr(i, 1) == "}") {
              cc2--;
            }
            if (cc2 == 0) {
              break;
            }
          }
          if (cc2 != 0) {
            c = 0;
          }
          e = s;
          for (i = 0; i <= c; i++) {
            e = rest.indexOf("}", e + 1);
          }
          if (e == -1) {
            e = rest.length;
          }
          done += rest.substring(0, s + 1);
          done += cssPropertyMode(rest.substring(s + 1, e));
          rest = rest.substr(e);
        }
        rest = done + rest;
        rest = rest.replace(/{/g, "<span style=color:" + cssdelimitercolor + ">{</span>");
        rest = rest.replace(/}/g, "<span style=color:" + cssdelimitercolor + ">}</span>");
        for (i = 0; i < comment.arr.length; i++) {
          rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
        }
        return "<span style=color:" + cssselectorcolor + ">" + rest + "</span>";
      }
      function cssPropertyMode(txt) {
        var rest = txt, done = "", s, e, n, loop;
        if (rest.indexOf("{") > -1) {
          return cssMode(rest);
        }
        while (rest.search(":") > -1) {
          s = rest.search(":");
          loop = true;
          n = s;
          while (loop == true) {
            loop = false;
            e = rest.indexOf(";", n);
            if (rest.substring(e - 5, e + 1) == "&nbsp;") {
              loop = true;
              n = e + 1;
            }
          }
          if (e == -1) {
            e = rest.length;
          }
          done += rest.substring(0, s);
          done += cssPropertyValueMode(rest.substring(s, e + 1));
          rest = rest.substr(e + 1);
        }
        return "<span style=color:" + csspropertycolor + ">" + done + rest + "</span>";
      }
      function cssPropertyValueMode(txt) {
        var rest = txt, done = "", s;
        rest = "<span style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
        while (rest.search(/!important/i) > -1) {
          s = rest.search(/!important/i);
          done += rest.substring(0, s);
          done += cssImportantMode(rest.substring(s, s + 10));
          rest = rest.substr(s + 10);
        }
        result = done + rest;
        if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
          result = result.substring(0, result.length - 1) + "<span style=color:" + cssdelimitercolor + ">;</span>";
        }
        return "<span style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
      }
      function cssImportantMode(txt) {
        return "<span style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
      }
      function jsMode(txt) {
        var rest = txt, done = "", esc = [], i, cc2, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
        for (i = 0; i < rest.length; i++) {
          cc2 = rest.substr(i, 1);
          if (cc2 == "\\") {
            esc.push(rest.substr(i, 2));
            cc2 = "W3JSESCAPE";
            i++;
          }
          tt += cc2;
        }
        rest = tt;
        y = 1;
        while (y == 1) {
          sfnuttpos = getPos(rest, "'", "'", jsStringMode);
          dfnuttpos = getPos(rest, '"', '"', jsStringMode);
          compos = getPos(rest, /\/\*/, "*/", commentMode);
          comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
          numpos = getNumPos(rest, jsNumberMode);
          keywordpos = getKeywordPos("js", rest, jsKeywordMode);
          dotpos = getDotPos(rest, jsPropertyMode);
          if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {
            break;
          }
          mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
          if (mypos[0] == -1) {
            break;
          }
          if (mypos[0] > -1) {
            done += rest.substring(0, mypos[0]);
            done += mypos[2](rest.substring(mypos[0], mypos[1]));
            rest = rest.substr(mypos[1]);
          }
        }
        rest = done + rest;
        for (i = 0; i < esc.length; i++) {
          rest = rest.replace("W3JSESCAPE", esc[i]);
        }
        return "<span style=color:" + jscolor + ">" + rest + "</span>";
      }
      function jsStringMode(txt) {
        return "<span style=color:" + jsstringcolor + ">" + txt + "</span>";
      }
      function jsKeywordMode(txt) {
        return "<span style=color:" + jskeywordcolor + ">" + txt + "</span>";
      }
      function jsNumberMode(txt) {
        return "<span style=color:" + jsnumbercolor + ">" + txt + "</span>";
      }
      function jsPropertyMode(txt) {
        return "<span style=color:" + jspropertycolor + ">" + txt + "</span>";
      }
      function getDotPos(txt, func) {
        var x, i, j, s, e, arr = [".", "<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/", "-", "*", "|", "%"];
        s = txt.indexOf(".");
        if (s > -1) {
          x = txt.substr(s + 1);
          for (j = 0; j < x.length; j++) {
            cc = x[j];
            for (i = 0; i < arr.length; i++) {
              if (cc.indexOf(arr[i]) > -1) {
                e = j;
                return [s + 1, e + s + 1, func];
              }
            }
          }
        }
        return [-1, -1, func];
      }
      function getMinPos() {
        var i, arr = [];
        for (i = 0; i < arguments.length; i++) {
          if (arguments[i][0] > -1) {
            if (arr.length == 0 || arguments[i][0] < arr[0]) {
              arr = arguments[i];
            }
          }
        }
        if (arr.length == 0) {
          arr = arguments[i];
        }
        return arr;
      }
      function getKeywordPos(typ, txt, func) {
        var words, i, pos, rpos = -1, rpos2 = -1, patt;
        if (typ == "js") {
          words = [
            "abstract",
            "arguments",
            "boolean",
            "break",
            "byte",
            "case",
            "catch",
            "char",
            "class",
            "const",
            "continue",
            "debugger",
            "default",
            "delete",
            "do",
            "double",
            "else",
            "enum",
            "eval",
            "export",
            "extends",
            "false",
            "final",
            "finally",
            "float",
            "for",
            "function",
            "goto",
            "if",
            "implements",
            "import",
            "in",
            "instanceof",
            "int",
            "interface",
            "let",
            "long",
            "NaN",
            "native",
            "new",
            "null",
            "package",
            "private",
            "protected",
            "public",
            "return",
            "short",
            "static",
            "super",
            "switch",
            "synchronized",
            "this",
            "throw",
            "throws",
            "transient",
            "true",
            "try",
            "typeof",
            "var",
            "void",
            "volatile",
            "while",
            "with",
            "yield"
          ];
        }
        for (i = 0; i < words.length; i++) {
          pos = txt.indexOf(words[i]);
          if (pos > -1) {
            patt = /\W/g;
            if (txt.substr(pos + words[i].length, 1).match(patt) && txt.substr(pos - 1, 1).match(patt)) {
              if (pos > -1 && (rpos == -1 || pos < rpos)) {
                rpos = pos;
                rpos2 = rpos + words[i].length;
              }
            }
          }
        }
        return [rpos, rpos2, func];
      }
      function getPos(txt, start, end, func) {
        var s, e;
        s = txt.search(start);
        e = txt.indexOf(end, s + end.length);
        if (e == -1) {
          e = txt.length;
        }
        return [s, e + end.length, func];
      }
      function getNumPos(txt, func) {
        var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/", "-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
        for (i = 0; i < txt.length; i++) {
          for (j = 0; j < arr.length; j++) {
            c = txt.substr(i, arr[j].length);
            if (c == arr[j]) {
              if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
                continue;
              }
              endpos = i;
              if (startpos < endpos) {
                word = txt.substring(startpos, endpos);
                if (!isNaN(word)) {
                  return [startpos, endpos, func];
                }
              }
              i += arr[j].length;
              startpos = i;
              i -= 1;
              break;
            }
          }
        }
        return [-1, -1, func];
      }
    }
  },
  mounted() {
    this.CodeColor();
  }
};
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode(" code ");
const _hoisted_3 = { id: "--code" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnkCard = resolveComponent("gnkCard");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([[_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses], "g-10 col-12"]),
    id: _ctx.componentId,
    style: normalizeStyle(_ctx.componentStyleObject)
  }, [
    createVNode(_component_gnkCard, null, {
      title: withCtx(() => [
        _hoisted_2$1
      ]),
      default: withCtx(() => [
        createElementVNode("pre", _hoisted_3, " \r\n                    " + toDisplayString($props.code) + "\r\n                ", 1)
      ]),
      _: 1
    })
  ], 14, _hoisted_1$1);
}
var gnkSyntaxHighlight = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var Chip_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "gnkChip",
  extends: _sfc_main$p,
  data() {
  },
  props: {
    value: {
      type: String,
      default: "value",
      skip: true
    },
    iconPosition: {
      type: String,
      default: "top-right",
      skip: true,
      validator: (value) => {
        return ["none", "top-right", "top-left", "bottom-right", "bottom-left"].includes(value);
      }
    },
    size: {
      type: String,
      required: false,
      default: "default",
      skip: true,
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--primary": !this.hasStyle,
        [`--size-${this.size}`]: this.size != "default"
      };
    },
    componentStyleObject() {
      return {};
    }
  },
  methods: {},
  mounted() {
    this.parentClientRect = this.$parent.componentElementClientRect();
  }
};
const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "--content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName + " |", $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 14, _hoisted_1);
}
var gnkChip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const state = reactive({
  busy: false,
  loading: false,
  swipeCapturedBy: null
});
const ui = reactive({
  currentRoute: "",
  dropDownLevel: [],
  dropDownStartingLevel: 8e3,
  registerDropdown(uid) {
    let element = this.dropDownLevel.find((element2) => element2.uid == uid);
    if (element === void 0) {
      this.dropDownLevel.push({ uid, zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.dropDownStartingLevel) + 1 });
      return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel;
    } else
      return element.zLevel;
  },
  dropDropdown(uid) {
    this.dropDownLevel.splice(this.dropDownLevel.indexOf((element) => element.uid == uid));
  },
  modalLevel: [],
  modalStartingLevel: 99e3,
  registerModal(uid) {
    let element = this.dropDownLevel.find((element2) => element2.uid == uid);
    if (element === void 0) {
      this.dropDownLevel.push({ uid, zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.modalStartingLevel) + 1 });
      return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel;
    } else
      return element.zLevel;
  },
  dropModal(uid) {
    this.dropDownLevel.splice(this.dropDownLevel.indexOf((element) => element.uid == uid));
  },
  menuLevel: [],
  menuStartingLevel: 9e3,
  registerMenu(uid) {
    let element = this.dropDownLevel.find((element2) => element2.uid == uid);
    if (element === void 0) {
      this.dropDownLevel.push({ uid, zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.menuStartingLevel) + 1 });
      return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel;
    } else
      return element.zLevel;
  },
  dropMenu(uid) {
    this.dropDownLevel.splice(this.dropDownLevel.indexOf((element) => element.uid == uid));
  }
});
const theme = reactive({
  colorMode: "",
  isDarkMode: computed(() => theme.colorMode == "dark"),
  colorPrimary: "#2773dd",
  colorInfo: "#2651cc",
  colorSuccess: "#43cb75",
  colorWarning: "#ffbb00",
  colorDanger: "#ee2b48",
  colorBug: "#ff2e4e"
});
watch(() => theme.colorMode, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  document.querySelector("body").setAttribute("gnk-theme-colorMode", newValue);
  localStorage.setItem("gnk-theme-colorMode", newValue);
});
watch(() => theme.colorPrimary, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  setColors({ PRIMARY: newValue });
});
watch(() => theme.colorInfo, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  setColors({ INFO: newValue });
});
watch(() => theme.colorSuccess, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  setColors({ SUCCESS: newValue });
});
watch(() => theme.colorWarning, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  setColors({ WARNING: newValue });
});
watch(() => theme.colorDanger, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  setColors({ DANGER: newValue });
});
watch(() => theme.colorBug, (newValue = null, prevValue = null) => {
  if (newValue === prevValue)
    return;
  setColors({ BUG: newValue });
});
theme.colorMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
var Store = {
  state,
  theme,
  ui
};
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
  const popStateHandler = ({ state: state2 }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state2) {
      currentLocation.value = to;
      historyState.value = state2;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state2.position - fromState.position : 0;
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
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
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
  function changeLocation(to, state2, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state2, "", url);
      historyState.value = state2;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    const state2 = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
    changeLocation(to, state2, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state2 = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
    changeLocation(to, state2, false);
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
function createWebHashHistory(base) {
  base = location.host ? base || location.pathname + location.search : "";
  if (!base.includes("#"))
    base += "#";
  return createWebHistory(base);
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
  function parse(path) {
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
  function stringify(params) {
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
    parse,
    stringify
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
    throw new Error(`ERR (${state2})/"${buffer}": ${message}`);
  }
  let state2 = 0;
  let previousState = state2;
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
    if (state2 === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state2 === 1 || state2 === 2 || state2 === 3) {
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
    if (char === "\\" && state2 !== 2) {
      previousState = state2;
      state2 = 4;
      continue;
    }
    switch (state2) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state2 = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state2 = previousState;
        break;
      case 1:
        if (char === "(") {
          state2 = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state2 = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state2 = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state2 = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state2 === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
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
function createRouterMatcher(routes2, globalOptions) {
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
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
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
  function resolve(location2, currentLocation) {
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
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
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
  return () => new Promise((resolve, reject) => {
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
        resolve();
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
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
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
  function resolve(rawLocation, currentLocation) {
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
    const targetLocation = pendingLocation = resolve(to);
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
    const state2 = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state2 && state2.scroll
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
      const toLocation = resolve(to);
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
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
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
    resolve,
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
let routes = [];
let router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes
});
router.beforeEach((to, from, next) => {
  var _a2;
  if (to.component !== null) {
    if (typeof ((_a2 = to.matched[0]) == null ? void 0 : _a2.components.default) === "function") {
      Store.state.loading = true;
    }
    next();
  } else
    next("/404");
});
router.beforeResolve((to, from, next) => {
  Store.state.loading = false;
  next();
});
function registerRoutes(routes2) {
  if (!routes2)
    return null;
  window.APP.use(router);
  routes2.forEach((route) => router.addRoute(route));
  router.push(routes2[0]);
}
function registerModuleComponents(components) {
  window.APP.provide("store", Store);
  if (!components) {
    return;
  }
  for (var componentName in components) {
    if (components.hasOwnProperty(componentName)) {
      window.APP.component(componentName, components[componentName]);
    }
  }
}
var index = {
  gnkButton,
  gnkExpandPanel,
  gnkButtonGroup,
  gnkImage,
  gnkBadge,
  gnk404,
  gnkSwipeManager,
  gnkCheckbox,
  gnkSwitch,
  gnkRadio,
  gnkSidebar,
  gnkInput,
  gnkCounter,
  gnkProgressbar,
  gnkLoading,
  gnkApp,
  gnkPage,
  gnkNavbar,
  gnkCard,
  gnkListview,
  gnkListviewItem,
  router,
  Store,
  registerRoutes,
  registerModuleComponents,
  setColors,
  gnkSyntaxHighlight,
  gnkIcon,
  gnkChip,
  gnkDropdown
};
export { index as default };
