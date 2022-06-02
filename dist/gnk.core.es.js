var __defProp = Object.defineProperty;
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
import { resolveComponent, openBlock, createBlock, withCtx, createElementBlock, createVNode, Transition, resolveDynamicComponent, createElementVNode, renderSlot, normalizeClass, withModifiers, createCommentVNode, createTextVNode, normalizeStyle, mergeProps, withKeys, withDirectives, vModelCheckbox, toDisplayString, pushScopeId, popScopeId, reactive } from "vue";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const gnkComponent = {
  inject: {
    registerChild: {
      default: null
    }
  },
  data() {
    return {
      store: gnk.Store
    };
  },
  methods: {
    hello() {
      console.log("hello from mixin!");
    },
    componentRaiseEvent(eventName, data) {
      let event = new CustomEvent(eventName, { detail: __spreadValues({ target: this.$el, component: this }, data) });
      this.$emit(eventName, event);
      this.$el.dispatchEvent(event);
    },
    componentElementClientRect() {
      var _a;
      let modalPosition = (_a = this == null ? void 0 : this.$el) == null ? void 0 : _a.getBoundingClientRect();
      console.log(modalPosition);
      return {
        top: !modalPosition ? 0 : modalPosition.top,
        left: !modalPosition ? 0 : modalPosition.left,
        width: !modalPosition ? 0 : modalPosition.width,
        height: !modalPosition ? 0 : modalPosition.height
      };
    },
    objectToArray(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
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
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
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
      return {
        "--info": this.info,
        "--primary": this.primary,
        "--success": this.success,
        "--warning": this.warning,
        "--danger": this.danger,
        "--bug": this.bug,
        "--dark": this.dark,
        "--light": this.light,
        "--pill": this.pill,
        "--circular": this.circular,
        "--square": this.square,
        "--block": this.block,
        "--disabled": this.disabled
      };
    }
  },
  mounted() {
    typeof this.registerChild === "function" && this.type === "toggle" ? this.registerChild(this) : null;
  }
};
var mixin = {
  gnkComponent
};
var App_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  name: "gnkApp",
  mixins: [mixin.gnkComponent],
  data() {
    return {
      childElements: [],
      transitionName: "",
      transitioning: false
    };
  },
  props: {},
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
      this.transitionName = to.path == from.path ? null : !(to.name == "Home") ? "next" : "prev";
    }
  },
  emits: [],
  methods: {
    registerChilds(element) {
      element.$options.name == "gnkPage" ? this.childElements.push(element) : null;
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
const _hoisted_1$a = {
  key: 0,
  class: "--content"
};
const _hoisted_2$6 = {
  key: 1,
  class: "--content"
};
const _hoisted_3$6 = { class: "container" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_gnkSwipeManager = resolveComponent("gnkSwipeManager");
  return openBlock(), createBlock(_component_gnkSwipeManager, {
    onSwipedRight: _cache[0] || (_cache[0] = ($event) => {
      var _a;
      return (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.go(-1);
    }),
    onSwipedLeft: _cache[1] || (_cache[1] = ($event) => {
      var _a;
      return (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.go(1);
    })
  }, {
    default: withCtx(() => [
      $options.hasRouter ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
        createVNode(_component_router_view, null, {
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
        })
      ])) : (openBlock(), createElementBlock("div", _hoisted_2$6, [
        createElementVNode("div", _hoisted_3$6, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]))
    ]),
    _: 3
  });
}
var gnkApp = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-81d3b09c"]]);
var Page_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  name: "gnkPage",
  mixins: [mixin.gnkComponent],
  data() {
    return {
      childElements: []
    };
  },
  props: {},
  computed: {
    componentClassObject() {
      return {
        "container": true
      };
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
    return {};
  },
  mounted() {
  }
};
const _hoisted_1$9 = ["id"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$9);
}
var gnkPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var Navbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {
  name: "gnkNavbar",
  mixins: [mixin.gnkComponent],
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {};
  },
  props: {},
  computed: {
    componentClassObject() {
      return {
        "container": true,
        "flex": true
      };
    }
  },
  methods: {},
  mounted() {
    document.body.style.paddingTop = this.$el.offsetHeight - 3 + "px";
  }
};
const _hoisted_1$8 = ["id"];
const _hoisted_2$5 = { class: "col-2 flex-centered flex-left" };
const _hoisted_3$5 = { class: "col-8 flex-centered" };
const _hoisted_4$3 = { class: "col-2 flex-centered flex-right" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    createElementVNode("div", _hoisted_2$5, [
      renderSlot(_ctx.$slots, "left")
    ]),
    createElementVNode("div", _hoisted_3$5, [
      renderSlot(_ctx.$slots, "title")
    ]),
    createElementVNode("div", _hoisted_4$3, [
      renderSlot(_ctx.$slots, "right")
    ])
  ], 10, _hoisted_1$8);
}
var gnkNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {
  name: "gnkSwipeManager",
  mixins: [mixin.gnkComponent],
  data() {
    return {
      swipe: {
        direction: "",
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
      default: "all",
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
        if (!!this.store.swipeCapturedBy && this.store.swipeCapturedBy !== this.componentId)
          return;
        this.store.swipeCapturedBy = this.componentId;
        this.swipe.direction = "";
        this.swipe.start.x = e.touches[0].clientX;
        this.swipe.start.y = e.touches[0].clientY;
        this.swipe.time.start = new Date().getTime();
        this.$emit("touchDown", ...this.objectToArray(this.swipe));
      }, { passive: true });
      element.addEventListener("touchmove", (e) => {
        if (this.disabled)
          return;
        if (this.store.swipeCapturedBy !== this.componentId)
          return;
        this.swipe.end.x = e.touches[0].clientX;
        this.swipe.end.y = e.touches[0].clientY;
        this.swipe.distance.x = this.swipe.end.x - this.swipe.start.x;
        this.swipe.distance.y = this.swipe.end.y - this.swipe.start.y;
        this.swipe.time.elapsed = new Date().getTime() - this.swipe.time.start;
        this.$emit("touchMove", ...this.objectToArray(this.swipe));
        this.$emit("swiping", ...this.objectToArray(this.swipe));
      }, { passive: false });
      element.addEventListener("touchend", async (e) => {
        if (this.disabled || this.store.swipeCapturedBy !== this.componentId)
          return;
        this.swipe.time.end = new Date().getTime();
        this.swipe.time.elapsed = this.swipe.time.end - this.swipe.time.start;
        if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "right";
          this.$emit("swipedRight", ...this.objectToArray(this.swipe));
        } else if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x < -1 * this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "left";
          this.$emit("swipedLeft", ...this.objectToArray(this.swipe));
        } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "down";
          this.$emit("swipedDown", ...this.objectToArray(this.swipe));
        } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y < -1 * this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
          this.swipe.direction = "up";
          this.$emit("swipedUp", ...this.objectToArray(this.swipe));
        }
        if (this.swipe.direction) {
          this.$emit("touchUp", ...this.objectToArray(this.swipe));
          this.$emit("swiped", ...this.objectToArray(this.swipe));
          if (callback instanceof Function)
            callback(this.swipe.direction);
        }
        await sleep(this.allowedInterval);
        this.store.swipeCapturedBy = null;
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
      }, { passive: true });
    }
  },
  mounted() {
    this.observeSwipe(this.$el);
  }
};
const _hoisted_1$7 = ["id"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$7);
}
var gnkSwipeManager = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
function createRipple(event) {
  const TARGET = event.currentTarget;
  const RIPPLE = TARGET.querySelector(".gnk-ripple");
  if (!!RIPPLE)
    RIPPLE.remove();
  const TARGET_INFO = TARGET.getBoundingClientRect();
  const RIPPLE_SPAN = document.createElement("span");
  const RIPPLE_SIZE = Math.max(TARGET_INFO["width"], TARGET_INFO["height"]);
  RIPPLE_SPAN.style.width = RIPPLE_SPAN.style.height = `${RIPPLE_SIZE}px`;
  RIPPLE_SPAN.style.left = `${event.clientX - TARGET_INFO["x"] - RIPPLE_SIZE / 2}px`;
  RIPPLE_SPAN.style.top = `${event.clientY - TARGET_INFO["y"] - RIPPLE_SIZE / 2}px`;
  RIPPLE_SPAN.classList.add("gnk-ripple");
  TARGET.appendChild(RIPPLE_SPAN);
}
var createRipple$1 = {
  createRipple
};
var Button_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  name: "gnkButton",
  mixins: [mixin.gnkComponent],
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {
      checked: false
    };
  },
  props: {
    notSync: {
      type: Boolean,
      default: false
    },
    disableRipple: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: void 0
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
    relief: {
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
    },
    size: {
      type: String,
      required: false,
      default: "default",
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    animate: {
      type: String,
      required: false,
      default: "default",
      validator(type) {
        return ["slide-up", "slide-left", "fade", "scale", "rotate", "default"].includes(type);
      }
    },
    animateInactive: {
      type: Boolean,
      required: false,
      default: false
    },
    floating: {
      type: Boolean,
      required: false,
      default: false
    },
    flat: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator(type) {
        return ["submit", "button", "reset", "toggle"].includes(type);
      }
    }
  },
  computed: {
    buttonType() {
      switch (this.type) {
        case "submit":
          return "submit";
        case "button":
          return "button";
        case "reset":
          return "reset";
        case "toggle":
          return "button";
      }
    },
    componentClassObject() {
      var _a;
      return {
        "--primary": true,
        "--toggle": this.type === "toggle",
        "--floating": this.floating,
        "--flat": this.flat,
        "--border": this.border,
        "--gradient": this.gradient,
        "--relief": this.relief,
        "--transparent": this.transparent,
        "--shadow": this.shadow,
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate": ((_a = this.$slots) == null ? void 0 : _a.animate) ? true : false,
        "--animate-slide-up": this.animate === "slide-up" && !this.loading && !this.animateInactive ? true : false,
        "--animate-slide-left": this.animate === "slide-left" && !this.loading && !this.animateInactive ? true : false,
        "--animate-fade": this.animate === "fade" && !this.loading && !this.animateInactive ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.animateInactive ? true : false,
        "--animate-rotate": this.animate === "rotate" && !this.loading && !this.animateInactive ? true : false,
        "--loading": this.loading,
        "--active": this.checked & this.type == "toggle"
      };
    }
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      if (!this.disableRipple && !!event)
        createRipple$1.createRipple(event);
      if (this.type === "toggle") {
        this.checked = !this.checked;
        this.componentRaiseEvent("onchange", { newValue: this.checked, oldValue: !this.checked, event });
      }
      this.componentRaiseEvent("onclick", { event });
    }
  },
  mounted() {
  }
};
const _hoisted_1$6 = ["id", "title", "aria-label", "disabled", "type", "checked"];
const _hoisted_2$4 = { class: "--content" };
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode("gnkButton");
const _hoisted_4$2 = {
  key: 0,
  class: "--content-animate"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    ref: _ctx.componentId,
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]),
    title: $props.title,
    "aria-label": $props.title,
    disabled: _ctx.disabled,
    type: $options.buttonType,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onClick($event), ["stop"])),
    checked: $data.checked
  }, [
    createElementVNode("div", _hoisted_2$4, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_3$4
      ])
    ]),
    !!this.$slots.animate ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
      renderSlot(_ctx.$slots, "animate")
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$6);
}
var gnkButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var ButtonGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  name: "gnkButtonGroup",
  mixins: [mixin.gnkComponent],
  data() {
    return {
      childButtons: [],
      selectedItems: [],
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
    direction: {
      type: String,
      default: "horizontal",
      validator(type) {
        return ["horizontal", "vertical"].includes(type);
      }
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--draggable": this.draggable,
        "--vertical": this.direction === "vertical"
      };
    }
  },
  watch: {},
  emits: [],
  methods: {
    childValueChange(e) {
      switch (this.toggle) {
        case "single":
          this.selectedItems = [];
          this.selectedItem = e.detail.component;
          this.childButtons = this.childButtons.map((button) => {
            if (button.componentId == e.detail.component.componentId)
              button.checked = true;
            else
              button.checked = false;
            return button;
          });
          break;
        default:
          if (e.detail.component.checked)
            this.selectedItems.push(e.detail.component);
          else
            this.selectedItems = this.selectedItems.filter((item) => item.componentId != e.detail.component.componentId);
          this.selectedItem = this.selectedItems.slice(-1);
      }
    },
    registerChildToggle(element) {
      this.childButtons.push(element);
      element.$el.addEventListener("onchange", this.childValueChange);
    }
  },
  provide() {
    return {
      registerChild: this.registerChildToggle
    };
  },
  mounted() {
  }
};
const _hoisted_1$5 = ["id"];
const _hoisted_2$3 = { class: "--title" };
const _hoisted_3$3 = { class: "--buttons" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("h4", null, [
        renderSlot(_ctx.$slots, "title")
      ])
    ]),
    createElementVNode("div", _hoisted_3$3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 10, _hoisted_1$5);
}
var gnkButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var Card_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  name: "gnkCard",
  mixins: [mixin.gnkComponent],
  data() {
    return {};
  },
  props: {
    headerBackground: {
      type: String,
      default: null
    },
    headerBackgroundAlt: {
      type: String,
      default: null
    }
  },
  computed: {
    componentClassObject() {
      return {
        "container": true,
        "flex": true
      };
    }
  },
  methods: {
    alternateDarkMode() {
      this.store.alternateColorMode();
    }
  }
};
const _hoisted_1$4 = ["id"];
const _hoisted_2$2 = { class: "--header col-12 container" };
const _hoisted_3$2 = {
  key: 0,
  class: "--header-title"
};
const _hoisted_4$1 = {
  key: 0,
  class: "--title col-12"
};
const _hoisted_5$1 = {
  key: 1,
  class: "--subtitle col-12 flex"
};
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = {
  key: 0,
  class: "--content col-12 flex"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("teste");
const _hoisted_9 = {
  key: 1,
  class: "--expanded col-12 flex"
};
const _hoisted_10 = {
  key: 2,
  class: "--footer col-12 container"
};
const _hoisted_11 = { class: "--footer-content col-12 flex" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.alternateDarkMode && $options.alternateDarkMode(...args))
  }, [
    createElementVNode("header", _hoisted_2$2, [
      !!this.$slots.title || !!this.$slots.subtitle ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
        !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "title", {}, void 0, true)
        ])) : createCommentVNode("", true),
        !!this.$slots.subtitle ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          renderSlot(_ctx.$slots, "subtitle", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      !!$props.headerBackground ? (openBlock(), createElementBlock("img", {
        key: 1,
        loading: "lazy",
        class: "col-12",
        src: $props.headerBackground,
        alt: $props.headerBackgroundAlt
      }, null, 8, _hoisted_6)) : createCommentVNode("", true)
    ]),
    !!this.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_7, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_8
      ], true)
    ])) : createCommentVNode("", true),
    !!this.$slots.expanded ? (openBlock(), createElementBlock("div", _hoisted_9, [
      renderSlot(_ctx.$slots, "expanded", {}, void 0, true)
    ])) : createCommentVNode("", true),
    !!this.$slots.footer ? (openBlock(), createElementBlock("footer", _hoisted_10, [
      createElementVNode("div", _hoisted_11, [
        renderSlot(_ctx.$slots, "footer", {}, void 0, true)
      ])
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$4);
}
var gnkCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-2428b89f"]]);
var Progress_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  name: "gnkProgress",
  mixins: [mixin.gnkComponent],
  props: {
    value: {
      type: [Number, String],
      required: false,
      default: 0
    },
    max: {
      type: [Number, String],
      required: false,
      default: 100
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
    relief: {
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
    size: {
      type: String,
      required: false,
      default: "default",
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    floating: {
      type: Boolean,
      required: false,
      default: false
    },
    flat: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    progressCircularPercentage() {
      console.log("progressCircularPercentage", this.value, this.max);
      return 200 * ((Number.isNaN(Number(this.value)) ? 0 : Number(this.value)) / (Number.isNaN(Number(this.max)) ? 100 : Number(this.max)));
    },
    progressPercentage() {
      return Math.round((Number.isNaN(Number(this.value)) ? 0 : Number(this.value)) / (Number.isNaN(Number(this.max)) ? 100 : Number(this.max)) * 100);
    },
    componentClassObject() {
      return {
        "--floating": this.floating,
        "--flat": this.flat,
        "--border": this.border,
        "--gradient": this.gradient,
        "--relief": this.relief,
        "--transparent": this.transparent,
        "--shadow": this.shadow,
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--loading": this.loading
      };
    }
  }
};
const _hoisted_1$3 = ["id", "title", "aria-valuemax", "aria-valuenow"];
const _hoisted_2$1 = {
  key: 1,
  class: "ring",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
};
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("linearGradient", {
    id: "gradient",
    y1: "50%"
  }, [
    /* @__PURE__ */ createElementVNode("stop", {
      offset: "0%",
      "stop-color": "var(--color-stop-1)"
    }),
    /* @__PURE__ */ createElementVNode("stop", {
      offset: "50%",
      "stop-color": "var(--color-stop-2)"
    })
  ])
], -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("circle", {
  "stroke-width": "18",
  fill: "transparent",
  r: "40",
  cx: "50",
  cy: "50",
  "stroke-linecap": "round",
  "stroke-dasharray": "200 200",
  strokeDashoffset: "200"
}, null, -1);
const _hoisted_5 = ["stroke-dasharray"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([[_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses], "--primary"]),
    role: "progressbar",
    title: `${$options.progressPercentage}%`,
    "aria-valuemin": "0",
    "aria-valuemax": $props.max,
    "aria-valuenow": $props.value
  }, [
    !$props.circular ? (openBlock(), createElementBlock("div", {
      key: 0,
      style: normalizeStyle(`width: ${$options.progressPercentage}%`)
    }, null, 4)) : createCommentVNode("", true),
    $props.circular ? (openBlock(), createElementBlock("svg", _hoisted_2$1, [
      _hoisted_3$1,
      _hoisted_4,
      createElementVNode("circle", {
        class: "ring-circle",
        "stroke-linecap": "round",
        "stroke-width": "14",
        fill: "transparent",
        r: "40",
        cx: "50",
        cy: "50",
        "stroke-dasharray": $options.progressCircularPercentage + " 253"
      }, null, 8, _hoisted_5)
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$3);
}
var gnkProgress = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var Listview_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "gnkListview",
  mixins: [mixin.gnkComponent],
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
const _hoisted_1$2 = ["id"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$2);
}
var gnkListview = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var ListviewItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "gnkListviewItem",
  mixins: [mixin.gnkComponent],
  data() {
    return {
      childElements: [],
      checked: false
    };
  },
  props: {
    to: {
      type: String,
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
        "--active": this.checked & this.type == "toggle"
      };
    }
  },
  watch: {},
  emits: [],
  methods: {
    onClick(e) {
      var _a;
      (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.push(this.to);
      this.componentRaiseEvent("click");
    }
  },
  mounted() {
  }
};
const _hoisted_1$1 = ["id"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 10, _hoisted_1$1);
}
var gnkListviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-11f95f9b"]]);
var Switch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "gnkSwitch",
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue", "onChanged"],
  data() {
    return {
      state: this.modelValue
    };
  },
  computed: {
    switchAttributes() {
      return {
        "aria-disabled": this.disabled,
        tabindex: this.disabled ? void 0 : "0"
      };
    }
  },
  watch: {
    modelValue(newModelValue) {
      this.state = newModelValue;
    },
    state(newValue) {
      this.$emit("update:modelValue", newValue);
      this.$emit("onChanged", this.state, newValue);
    }
  },
  methods: {
    onTrigger() {
      this.state = !this.state;
      console.log("click", this.state);
      this.$emit("onChanged", this.state);
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-ef74adb0"), n = n(), popScopeId(), n);
const _hoisted_1 = ["disabled"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "gnkSwitch__slider" }, null, -1));
const _hoisted_3 = {
  key: 0,
  class: "gnkSwitch__label"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", mergeProps({ class: "gnkSwitch" }, $options.switchAttributes, {
    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {
    }, ["prevent"]), ["space"])),
    onKeyup: [
      _cache[3] || (_cache[3] = withKeys(($event) => $options.onTrigger(), ["enter"])),
      _cache[4] || (_cache[4] = withKeys(($event) => $options.onTrigger(), ["space"]))
    ]
  }), [
    withDirectives(createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.state = $event),
      "aria-hidden": "true",
      class: "gnkSwitch__input",
      type: "checkbox",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $options.onTrigger())
    }, null, 8, _hoisted_1), [
      [vModelCheckbox, $data.state]
    ]),
    _hoisted_2,
    $props.label ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString($props.label), 1)) : createCommentVNode("", true)
  ], 16);
}
var gnkSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ef74adb0"]]);
const Store = reactive({
  colorMode: "light",
  alternateColorMode(isDark = null) {
    console.log("here");
    this.colorMode = isDark === null ? this.colorMode === "light" ? "dark" : "light" : isDark;
    console.log("alternateColorMode", this.colorMode);
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
  gnkSwipeManager,
  gnkApp,
  gnkPage,
  gnkNavbar,
  Store,
  gnkButton,
  gnkButtonGroup,
  gnkCard,
  gnkProgress,
  gnkListview,
  gnkListviewItem,
  gnkSwitch,
  registerModuleComponents
};
export { gnk as default };
