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
import { resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, withDirectives, createVNode, vShow, withCtx, toDisplayString, renderSlot, createBlock, Transition, resolveDynamicComponent, createCommentVNode, createTextVNode, Teleport, normalizeStyle, withModifiers, mergeProps, withKeys, vModelCheckbox, pushScopeId, popScopeId, shallowRef, unref, computed, reactive, nextTick, defineComponent, inject, h, provide, ref, watch } from "vue";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
var sleep$1 = {
  sleep
};
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
const _sfc_main$f = {
  name: "gnkComponent",
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
  methods: {
    hello() {
      console.log("hello from mixin!");
    },
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
    objectToArray(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
  },
  mounted() {
    typeof this.registerChild === "function" ? this.registerChild(this) : null;
  },
  provide() {
    return {
      registerChild: !this.registerChilds ? null : this.registerChild
    };
  },
  inject: {
    registerChild: {
      default: null
    }
  }
};
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$e = {
  name: "gnkApp",
  extends: _sfc_main$f,
  data() {
    return {
      childElements: [],
      transitionName: "",
      routeHistoryStartingPoint: "",
      routeHistory: []
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    busy: {
      type: Boolean,
      default: false
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
    console.log(this.store);
  }
};
const _hoisted_1$e = ["id"];
const _hoisted_2$9 = { class: "--header grid" };
const _hoisted_3$9 = { class: "row" };
const _hoisted_4$6 = { class: "col-12" };
const _hoisted_5$6 = { class: "row" };
const _hoisted_6$4 = { class: "col-12" };
const _hoisted_7$3 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " arrow_back_ios ", -1);
const _hoisted_8$2 = /* @__PURE__ */ createTextVNode(" Back ");
const _hoisted_9$2 = { class: "--body fill grid" };
const _hoisted_10$2 = { class: "row fill" };
const _hoisted_11 = { class: "--sidebar lg-hide sm-hide xs-hide col-4 overflow-vertical" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" overflow-vertical ");
const _hoisted_13 = { class: "--gnkApp-content col-12" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_progress = resolveComponent("gnk-progress");
  const _component_gnkButton = resolveComponent("gnkButton");
  const _component_gnkNavbar = resolveComponent("gnkNavbar");
  const _component_router_view = resolveComponent("router-view");
  const _component_gnkSwipeManager = resolveComponent("gnkSwipeManager");
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["fill", [_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    createElementVNode("div", _hoisted_2$9, [
      createElementVNode("div", _hoisted_3$9, [
        createElementVNode("div", _hoisted_4$6, [
          withDirectives(createVNode(_component_gnk_progress, {
            gradient: "",
            loading: "",
            square: "",
            class: "full-width"
          }, null, 512), [
            [vShow, false]
          ])
        ])
      ]),
      createElementVNode("div", _hoisted_5$6, [
        createElementVNode("div", _hoisted_6$4, [
          createVNode(_component_gnkNavbar, null, {
            left: withCtx(() => [
              createVNode(_component_gnkButton, {
                transparent: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
              }, {
                default: withCtx(() => [
                  _hoisted_7$3,
                  _hoisted_8$2
                ]),
                _: 1
              })
            ]),
            title: withCtx(() => {
              var _a;
              return [
                createElementVNode("h4", null, toDisplayString((_a = _ctx.$route) == null ? void 0 : _a.meta.title), 1)
              ];
            }),
            _: 1
          })
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_9$2, [
      createElementVNode("div", _hoisted_10$2, [
        createElementVNode("div", _hoisted_11, [
          renderSlot(_ctx.$slots, "sidebar", {}, () => [
            _hoisted_12
          ])
        ]),
        createVNode(_component_gnkSwipeManager, {
          class: "col-block grid",
          captureDirection: "horizontal",
          onSwipedRight: _cache[1] || (_cache[1] = ($event) => {
            var _a;
            return (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.go(-1);
          }),
          onSwipedLeft: _cache[2] || (_cache[2] = ($event) => {
            var _a;
            return (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.go(1);
          })
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
  ], 10, _hoisted_1$e);
}
var gnkApp = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
var Page_vue_vue_type_style_index_0_lang = "";
const _sfc_main$d = {
  name: "gnkPage",
  extends: _sfc_main$f,
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
    return {};
  },
  mounted() {
    this.loaded = true;
  }
};
const _hoisted_1$d = ["id"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["grid col-12", [_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    (openBlock(), createBlock(Teleport, { to: ".gnkApp" }, [
      createVNode(Transition, { name: "next" }, {
        default: withCtx(() => [
          $data.loaded ? renderSlot(_ctx.$slots, "navbar", { key: 0 }) : createCommentVNode("", true)
        ]),
        _: 3
      })
    ])),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$d);
}
var gnkPage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var _404_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  name: "gnk404",
  extends: _sfc_main$f,
  props: {
    title: {
      type: String,
      required: false,
      default: "404"
    },
    lable: {
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
const _hoisted_1$c = ["id"];
const _hoisted_2$8 = { class: "grid fill" };
const _hoisted_3$8 = { class: "row" };
const _hoisted_4$5 = { class: "col-12 flex-centered" };
const _hoisted_5$5 = { class: "P404-500" };
const _hoisted_6$3 = { class: "row" };
const _hoisted_7$2 = { class: "col-12 flex-centered" };
const _hoisted_8$1 = { class: "row" };
const _hoisted_9$1 = {
  key: 0,
  class: "col-12 flex-centered p-t-20"
};
const _hoisted_10$1 = /* @__PURE__ */ createElementVNode("span", { class: "material-symbols-rounded" }, " chevron_left ", -1);
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_row = resolveComponent("row");
  const _component_gnk_button = resolveComponent("gnk-button");
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, _ctx.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    createElementVNode("div", _hoisted_2$8, [
      createVNode(_component_row, { class: "fill" }),
      createElementVNode("div", _hoisted_3$8, [
        createElementVNode("div", _hoisted_4$5, [
          createElementVNode("h1", _hoisted_5$5, toDisplayString($props.title), 1)
        ])
      ]),
      createElementVNode("div", _hoisted_6$3, [
        createElementVNode("div", _hoisted_7$2, toDisplayString($props.lable), 1)
      ]),
      createElementVNode("div", _hoisted_8$1, [
        $props.showGoBack ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
          createVNode(_component_gnk_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1))
          }, {
            default: withCtx(() => [
              _hoisted_10$1,
              createTextVNode(" " + toDisplayString($props.goBackLable), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]),
      createVNode(_component_row, { class: "fill" })
    ])
  ], 10, _hoisted_1$c);
}
var gnk404 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var Navbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
  name: "gnkNavbar",
  extends: _sfc_main$f,
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {
      pageScrollPosition: 0,
      hide: false
    };
  },
  props: {
    blur: {
      type: Boolean,
      default: true
    },
    hideOnScroll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentClassObject() {
      return {
        "container": true,
        "--hide-on-scroll": this.hideOnScroll && this.hide,
        "--blur": this.blur
      };
    }
  },
  methods: {
    hideOnScrollHandler(e) {
      this.pageScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      window.addEventListener("scroll", (e2) => {
        if (!this.hideOnScroll)
          retunr;
        let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        let scrollDirection = currentScrollPosition > this.pageScrollPosition ? "down" : currentScrollPosition < this.pageScrollPosition ? "up" : "none";
        let elementHeight = this.$el.offsetHeight;
        let elementTop = this.$el.offsetTop;
        let elementBottom = elementTop + elementHeight;
        switch (true) {
          case (scrollDirection === "down" && elementBottom > window.innerHeight):
            this.hide = true;
            break;
          case scrollDirection === "up":
            this.hide = false;
            break;
        }
      });
    }
  },
  mounted() {
  }
};
const _hoisted_1$b = ["id"];
const _hoisted_2$7 = { class: "row" };
const _hoisted_3$7 = { class: "--left col-2 flex-centered flex-left" };
const _hoisted_4$4 = { class: "--title col-block flex-centered" };
const _hoisted_5$4 = { class: "--right col-2 flex-centered flex-right" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["grid", [_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    createElementVNode("div", _hoisted_2$7, [
      createElementVNode("div", _hoisted_3$7, [
        renderSlot(_ctx.$slots, "left")
      ]),
      createElementVNode("div", _hoisted_4$4, [
        renderSlot(_ctx.$slots, "title")
      ]),
      createElementVNode("div", _hoisted_5$4, [
        renderSlot(_ctx.$slots, "right")
      ])
    ])
  ], 10, _hoisted_1$b);
}
var gnkNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
var SwipeManager_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  name: "gnkSwipeManager",
  extends: _sfc_main$f,
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
        await sleep$1(this.allowedInterval);
      }, { passive: true });
    }
  },
  mounted() {
    this.observeSwipe(this.$el);
  }
};
const _hoisted_1$a = ["id"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass(["p-0 m-0 fill", [_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$a);
}
var gnkSwipeManager = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var Button_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = {
  name: "gnkButton",
  extends: _sfc_main$f,
  emits: ["onsubmit", "onchange", "onclick", "ondblclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onwheel", "onfocus", "onblur", "onkeydown", "onkeypress", "onkeyup"],
  data() {
    return {
      checked: false,
      activeStep: 0
    };
  },
  props: {
    type: {
      type: String,
      required: false,
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
      validator(type) {
        return ["xl", "l", "default", "small", "mini"].includes(type);
      }
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
        "--toggle": this.type === "toggle",
        "--floating": this.floating,
        "--flat": this.flat,
        "--border": this.border,
        "--gradient": this.gradient,
        "--relief": this.relief,
        "--transparent": this.transparent,
        "--clear": this.clear,
        "--shadow": this.shadow,
        "--size-xl": this.size === "xl",
        "--size-l": this.size === "l",
        "--size-small": this.size === "small",
        "--size-mini": this.size === "mini",
        "--animate": ((_a = this.$slots) == null ? void 0 : _a.animate) ? true : false,
        "--animate-slide-up": this.animate === "slide-up" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-slide-left": this.animate === "slide-left" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-fade": this.animate === "fade" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--animate-rotate": this.animate === "rotate" && !this.loading && !this.busy && !this.animateInactive ? true : false,
        "--busy": this.busy,
        "--loading": this.loading,
        "--active": this.checked & this.type == "toggle"
      };
    }
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      if (!!event)
        createRipple$1.createRipple(event);
      if (this.type === "toggle") {
        this.checked = !this.checked;
        this.componentRaiseEvent("onchange", { newValue: this.checked, oldValue: !this.checked, event });
      }
      this.componentRaiseEvent("onclick", { event });
    },
    onMouseOver(event) {
      event.preventDefault();
      this.componentRaiseEvent("onmouseover", { event });
    },
    onMouseOut(event) {
      event.preventDefault();
      this.componentRaiseEvent("onmouseout", { event });
    }
  },
  mounted() {
  }
};
const _hoisted_1$9 = ["checked", "disabled", "id", "type"];
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("div", { class: "--ripple" }, null, -1);
const _hoisted_3$6 = { class: "--content-holder" };
const _hoisted_4$3 = { class: "--content-step1" };
const _hoisted_5$3 = {
  key: 0,
  class: "--content-step2"
};
const _hoisted_6$2 = { class: "--badge-holder" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_progress = resolveComponent("gnk-progress");
  const _component_gnk_loading = resolveComponent("gnk-loading");
  return openBlock(), createElementBlock("button", {
    checked: $data.checked,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]),
    disabled: _ctx.disabled,
    id: _ctx.componentId,
    style: normalizeStyle(_ctx.componentStyleObject),
    type: $options.buttonType,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.onClick($event), ["stop"])),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => $data.activeStep = 0),
    onMouseover: _cache[2] || (_cache[2] = ($event) => $data.activeStep = !!this.$slots.animate ? 1 : 0)
  }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        this.loading ? (openBlock(), createBlock(_component_gnk_progress, {
          key: 0,
          loading: "",
          class: "fill"
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    _hoisted_2$6,
    createElementVNode("div", _hoisted_3$6, [
      createElementVNode("div", _hoisted_4$3, [
        renderSlot(_ctx.$slots, "default")
      ]),
      !!this.$slots.animate ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
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
    createElementVNode("div", _hoisted_6$2, [
      renderSlot(_ctx.$slots, "badge")
    ])
  ], 46, _hoisted_1$9);
}
var gnkButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var ButtonGroup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {
  name: "gnkButtonGroup",
  extends: _sfc_main$f,
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
    draggable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--draggable": this.draggable
      };
    }
  },
  watch: {
    childButtons() {
      console.log("childButtons", this.childButtons);
    }
  },
  emits: [],
  methods: {
    childValueChange(e) {
    },
    registerChildToggle(element) {
      this.childButtons.push(element);
      element.$el.addEventListener("onchange", this.childValueChange);
    }
  },
  mounted() {
  }
};
const _hoisted_1$8 = ["id"];
const _hoisted_2$5 = {
  key: 0,
  class: "--title"
};
const _hoisted_3$5 = { class: "--buttons" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
      createElementVNode("h4", null, [
        renderSlot(_ctx.$slots, "title")
      ])
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_3$5, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 10, _hoisted_1$8);
}
var gnkButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  name: "gnkCard",
  extends: _sfc_main$f,
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
    },
    headerBackgroundHeight: {
      type: Number,
      default: 450,
      validator(value) {
        return value > 125 && value < 500 && !isNaN(value);
      }
    },
    interactionsPosition: {
      type: String,
      default: "default",
      validator(type) {
        return ["default", "topRight", "topLeft", "bottomRight", "bottomLeft", "hide"].includes(type);
      }
    },
    animateInactive: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "cardType01",
      validator: function(value) {
        return ["cardType01", "cardType02", "cardType03", "cardType04", "cardType05"].includes(value);
      }
    }
  },
  computed: {
    componentClassObject() {
      return {
        "cardType01": this.type === "cardType01",
        "cardType02": this.type === "cardType02",
        "cardType03": this.type === "cardType03"
      };
    }
  }
};
const _hoisted_1$7 = ["id"];
const _hoisted_2$4 = { class: "--hero-container" };
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("div", { class: "--hero-background" }, null, -1);
const _hoisted_4$2 = {
  key: 0,
  class: "--interactions"
};
const _hoisted_5$2 = { class: "--content" };
const _hoisted_6$1 = {
  key: 0,
  class: "--content-title"
};
const _hoisted_7$1 = { class: "text-capitalize" };
const _hoisted_8 = {
  key: 1,
  class: "--content-body"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("teste");
const _hoisted_10 = {
  key: 0,
  class: "--footer flex"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.onClick($event), ["stop"])),
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId
  }, [
    createElementVNode("div", _hoisted_2$4, [
      _hoisted_3$4,
      !!this.$slots.interactions ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
        renderSlot(_ctx.$slots, "interactions")
      ])) : createCommentVNode("", true)
    ]),
    createElementVNode("div", _hoisted_5$2, [
      !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
        createElementVNode("h3", _hoisted_7$1, [
          renderSlot(_ctx.$slots, "title")
        ])
      ])) : createCommentVNode("", true),
      !!this.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_8, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_9
        ])
      ])) : createCommentVNode("", true)
    ]),
    !!this.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_10, [
      renderSlot(_ctx.$slots, "footer")
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$7);
}
var gnkCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var Progress_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  name: "gnkProgress",
  extends: _sfc_main$f,
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
const _hoisted_1$6 = ["aria-valuemax", "aria-valuenow", "id", "title"];
const _hoisted_2$3 = {
  key: 1,
  class: "ring",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
};
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("defs", null, [
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
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("circle", {
  "stroke-width": "18",
  fill: "transparent",
  r: "40",
  cx: "50",
  cy: "50",
  "stroke-linecap": "round",
  "stroke-dasharray": "200 200",
  strokeDashoffset: "200"
}, null, -1);
const _hoisted_5$1 = ["stroke-dasharray"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "aria-valuemax": $props.max,
    "aria-valuenow": $props.value,
    class: normalizeClass([[_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses], "--primary"]),
    id: _ctx.componentId,
    title: `${$options.progressPercentage}%`,
    "aria-valuemin": "0",
    role: "progressbar"
  }, [
    !$props.circular ? (openBlock(), createElementBlock("div", {
      key: 0,
      style: normalizeStyle(`width: ${$options.progressPercentage}%`)
    }, null, 4)) : createCommentVNode("", true),
    $props.circular ? (openBlock(), createElementBlock("svg", _hoisted_2$3, [
      _hoisted_3$3,
      _hoisted_4$1,
      createElementVNode("circle", {
        class: "ring-circle",
        "stroke-linecap": "round",
        "stroke-width": "14",
        fill: "transparent",
        r: "40",
        cx: "50",
        cy: "50",
        "stroke-dasharray": $options.progressCircularPercentage + " 253"
      }, null, 8, _hoisted_5$1)
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$6);
}
var gnkProgress = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var Listview_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  name: "gnkListview",
  extends: _sfc_main$f,
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
const _hoisted_1$5 = ["id"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$5);
}
var gnkListview = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var ListviewItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "gnkListviewItem",
  extends: _sfc_main$f,
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
    async onClick(event) {
      var _a;
      createRipple$1.createRipple(event);
      (_a = this == null ? void 0 : this.$router) == null ? void 0 : _a.push(this.to);
      this.componentRaiseEvent("click");
    }
  },
  mounted() {
  }
};
const _hoisted_1$4 = ["id"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    id: _ctx.componentId,
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$4);
}
var gnkListviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var Switch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  name: "gnkSwitch",
  extends: _sfc_main$f,
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
    }
  },
  methods: {
    onTrigger() {
      this.state = !this.state;
      this.$emit("onChanged", this.state);
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-e79c9802"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["disabled"];
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "gnkSwitch__slider" }, null, -1));
const _hoisted_3$2 = {
  key: 0,
  class: "gnkSwitch__label"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
    }, null, 8, _hoisted_1$3), [
      [vModelCheckbox, $data.state]
    ]),
    _hoisted_2$2,
    $props.label ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString($props.label), 1)) : createCommentVNode("", true)
  ], 16);
}
var gnkSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-e79c9802"]]);
var Loading_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "gnkLoading",
  extends: _sfc_main$f,
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
    lable: {
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
    progress: {
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
    }
  },
  computed: {
    componentClassObject() {
      return {
        "--modal": this.modal
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
    }
  },
  mounted() {
    this.loaded = true;
  }
};
const _hoisted_1$2 = ["id"];
const _hoisted_2$1 = { class: "row full-height" };
const _hoisted_3$1 = { class: "col-block" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("div", { class: "--loading" }, null, -1);
const _hoisted_5 = {
  key: 0,
  class: "--loading-percentage"
};
const _hoisted_6 = { class: "text-bold" };
const _hoisted_7 = { class: "--loading-label text-bold" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gnk_Progress = resolveComponent("gnk-Progress");
  return $data.loaded ? (openBlock(), createBlock(Teleport, {
    key: 0,
    to: $props.target
  }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        createElementVNode("div", {
          id: _ctx.componentId,
          class: normalizeClass(["grid --primary", [_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]]),
          style: normalizeStyle($options.componentStyleObject)
        }, [
          $props.progress >= 0 && !$props.modal ? (openBlock(), createBlock(_component_gnk_Progress, {
            key: 0,
            class: "--progress",
            size: "mini",
            square: "",
            block: "",
            value: $props.progress
          }, null, 8, ["value"])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_2$1, [
            createElementVNode("div", _hoisted_3$1, [
              _hoisted_4,
              $props.percentage >= 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createElementVNode("p", _hoisted_6, toDisplayString($props.percentage) + "%", 1)
              ])) : createCommentVNode("", true),
              createElementVNode("p", _hoisted_7, toDisplayString($props.lable), 1)
            ])
          ])
        ], 14, _hoisted_1$2)
      ]),
      _: 1
    })
  ], 8, ["to"])) : createCommentVNode("", true);
}
var gnkLoading = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var imgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAIACAMAAAArE+6LAAACKFBMVEXm5+jl5+jl5+jm5+jm5+eTlZiUlZiUlpiUlpmVl5qWmJuXmJuXmZyYmZyYmpyYmp2Zmp2Zm52Zm56anJ+bnJ+bnaCcnaCcnqCcnqGdnqGdn6Gdn6Ken6KeoKKeoKOfoKOfoaOfoaSgoaSgoqSgoqWhoqWho6Who6aipKejpKejpaejpaikpaikpqmlpqmlp6mlp6qmp6qmqKqmqKunqKunqaunqayoqq2pqq2pq66qq66qrK6qrK+rrK+rra+rrbCsra+srbCsrrCtrrGtr7GusLKvsLOvsbOvsbSwsbSwsrSwsrWxs7Wys7Wys7aytLa0tbe0tbi0tri1t7m2t7m2t7q2uLq3uLq3ubu4ubu4uby4ury5u726u726vL67vL67vL+7vb+8vb+8vsC9vsC+v8G+wMK/wMK/wcPAwcPAwcTBwsTBwsXBw8XCw8XCxMbDxMbDxcfExcfExsfFxsjGx8nHyMrIycvIysvJyszJy8zKy83KzM3LzM7Lzc7Mzc/Mzs/Nzs/NztDNz9DOz9DOz9HP0NHP0NLQ0dLQ0dPQ0tPR0tTR09TS09TS09XS1NXT1NbT1dbU1dfV1tfV1tjV19jW19jW19nW2NnX2NnX2NrY2drY2dvY2tvZ2tvZ2tza29za293a3N3b3N3b3N7b3d7c3d7c3d/d3t/d3uDe3+De3+He4OHf4OHf4OLg4eLg4ePh4uPh4uTi4+Tj5OXk5ebl5ufm5+h/gk90AAAABXRSTlM0SFyTy/sWfRAAAAmKSURBVHja7d37n1RjHMDxXB5mxiR2W5ZIERu55k5EqZW75H4JKfdbdFlJRJJCSKhsEkurtdZc+vdkWXs7M7v7w8yec/b9/nXOT9/X6/nsc85zZnbScUeACer4SQIAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgACAABgCCAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAsBRpfaVVzQ2TluyqVCufmGxbFgCQLqUf1uRC70y139WrHZl4e69xiUApMuBJdnQ5+KPS1WubGtsLZqXAJAm3cvzod9V+yvv8n+aF6Z8YGACQJpuALZNG7D+Q2ZVxS1A6bUp4YSbDxmZAJAeheVhkOZCpSv3XHv044Y3jEwASI/OawcHIGyrVIpVvR9f/a2TAAEgNTpahgTg7Qq3CjvP6f04t6LH0ASA1Abgxejrig/+93nLl7YAAkBa/HrhkABsiL5ue2PfY8LHbQEEgLToWjwkAB3R1y34/4KGr20BBICUKK0ZvP6viX7V590BLwvcIgACQEqU228cuP5P2hq5ug/PHXjRFmMTANKyBXj/gv6lnV/+Z+Q1Kwe+LRiu/MPYBICUKLbN6VvZTY/+EnnJ7ssG3SbkXy4ZmwCQlj3A9sd6z/gbWts6Iy/46+nc4AcFl3xvagJAanR/tfHVF9bv+LXC072dQ98VyK8oGJoAkB7lYrFUYfmXux8JQ83+zEmAADAx2rBlyrAAhAe6DEYAmAgK84av/zB1iy2AADARbMxGBCAs6jYZASD9ei6JWv8hu8loBID0ezEXGYAw20GAAJB05eI31R/n7bsoev2HzFueAggASQ/Apsbnqv0pLy7LVAhAaGk3PgEg2Q6cH6a/V/nF3vLWWZXWf8g97iZAAEi0wn1HV/L1+ypu5n9fGio7b6sBCgBJtrrhnwf6D1f6U17a3FwlAFlvAwkASbbz3+8B5jdW+PzwolDN6ZuNUABIqvLB2/q+Bvxj9AXrM1UDEBZ1OAkQABKq59n/j/gXRm7mu8+tvv5Ddr0fBhAAkqm08bT+7/dGngW+EkYy9zdzFAAS6ceBv/M388Phf8v3zhgxAOF1cxQAEumugTf4mYXDXuspPZgdOQAzDhikAJBAbYPf8c8+M/T/fWyfNfL6D5knTVIASJzy7rOHvtj37uAn+l1Lwmg0+41wASBxOhYMO+GbvnfQDcD65lEFIHOHHwYQABKmZ2XEz3wtHriUD94aRuf0dd4FEAASpfTBzKhT/Vf7TwJKayaPMgBh8c8GKgAkyYHrIpfyrP5v93TOGe36Dyev9TaQAJAghYeiX/E9cWHfq73lF8LoXXXQTYAAkBjldyo+0Xvsv7PAX/JjCEBYZQsgACTGnpkVl/Jp63r/O3hx6VjWfzhrv6EKAAnReWeV7/hd+vU/2/lPmsYUgLDMFkAASIbS81OqHevffnQL0NWaGVsAmj41VwEgETZX/45v9s0jR9qax7b+Q2ZJ0WAFgPgrt9880l/zXftvDWPVtNZBgAAQ//X/xyMjLubLn82NOQDhpg7DFQBi/wBgbcMoNvRjX/9h8stuAgSAuGu/INTI1XtMVwCIt2JrrdZ/yD7v34QIAPH2Wr5mAQgz93gOKADEWPmj6aGG7vc2kAAQYz/cWMv1H3JfGLEAEFvdT+RqGoCwoMeQBYCYKrU11Xb9h5PXmbIAENMHAPtmh1q74ZA5CwDx3AC01nz9h8kvmbMAEMsNwOpQB3N3OQoUAGLoizPqEYDMU54DCgDx8/O8TD0CEFo+twUQAOLmz6fydVn/IfOQLYAAEDOlDWeGOjl1h3ELALFS/v7yUDc3uAcQAGKl655QR20GLgDEyepsPQMwp9PEBYD42HVGPdd/yK/0rUABID43APNDfV36naELADFRfCZX5wBkn/TbQAJAPJQ3TAv11rLdSYAAEIv1v/uaUH/3eg4oAMRB59LMOARg6mZbAAEgBg8A3jwljIf53WYvAIy7b6aNy/oP2TVmLwCMt8L8ME5mOQgQAMY9ANu2jpNtAiAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAIgACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIAAiAAIAAAAIACAAgAEDKAzDpWGCCOuZvOR3Fz62PJP0AAAAASUVORK5CYII=";
var Image_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "gnkImage",
  extends: _sfc_main$f,
  data() {
    return {};
  },
  props: {
    src: {
      type: String,
      required: true,
      validator: function(value) {
        return value.length > 0 && value.includes("http");
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
    animation: {
      type: String,
      required: false,
      default: "none",
      validator: function(value) {
        return ["none", "zoomIn-light", "zoomIn-bw", "zoomIn-saturation", "zoomIn-sepia", "zoomIn-blur", "zoomIn-rotation", "zoomOut-light", "zoomOut-bw", "zoomOut-saturation", "zoomOut-sepia", "zoomOut-blur"].includes(value);
      }
    }
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
        "--zoomOut-blur": this.animation == "zoomOut-blur"
      };
    },
    componentStyleObject() {
      var _a;
      console.log("src", this.src);
      return {
        "--img-placeholder-url": `url(${imgUrl})`,
        "--img-background-url": `url(${this.src})`,
        "--img-background-alt": `url(${this.alt})`,
        "--img-background-size-w": !!this.size && this.size.length > 0 && this.size.includes("x") && this.size.split("x")[0] > 0 && this.size.split("x")[1] > 0 ? `${this.size.split("x")[0]}px` : "100%",
        "--img-background-size-h": !!this.size && this.size.length > 0 && this.size.includes("x") && this.size.split("x")[0] > 0 && this.size.split("x")[1] > 0 ? `${(_a = this.size) == null ? void 0 : _a.split("x")[1]}px` : "100%"
      };
    }
  },
  methods: {}
};
const _hoisted_1$1 = ["id"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { class: "--img-placeholder" }, null, -1);
const _hoisted_3 = ["alt"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    _hoisted_2,
    createElementVNode("div", {
      class: normalizeClass(["--img-background", $options.componentClassObject]),
      alt: this.alt
    }, null, 10, _hoisted_3)
  ], 14, _hoisted_1$1);
}
var gnkImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var Badge_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "gnkBadge",
  extends: _sfc_main$f,
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
const _hoisted_1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.componentName, $options.componentClassObject, _ctx.componentGeneralClasses]),
    id: _ctx.componentId,
    style: normalizeStyle($options.componentStyleObject)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, _hoisted_1);
}
var gnkBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
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
  routes.forEach((route) => addRoute(route));
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
      }
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: "smooth"
        };
      }
      return { x: 0, y: 0 };
    },
    routes
  });
  App.use(router);
  router.push(routes[0]);
}
const Store = reactive({
  colorMode: "light",
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
  gnkSwipeManager,
  gnk404,
  gnkImage,
  gnkBadge,
  gnkApp,
  gnkPage,
  gnkNavbar,
  gnkButton,
  gnkButtonGroup,
  gnkCard,
  gnkProgress,
  gnkListview,
  gnkListviewItem,
  gnkSwitch,
  gnkLoading,
  router,
  Store,
  registerRoutes,
  registerModuleComponents
};
export { gnk as default };
