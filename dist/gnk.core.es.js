import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode, createTextVNode, mergeProps, withKeys, withModifiers, toDisplayString, pushScopeId, popScopeId, createBlock, Teleport, createVNode, Transition, withCtx, markRaw, resolveComponent, resolveDynamicComponent, normalizeStyle, Fragment, renderList, withDirectives, vModelRadio, vModelCheckbox, reactive } from "vue";
function createRipple(event) {
  const TARGET = event.currentTarget;
  const RIPPLE = TARGET.getElementsByClassName("gnk-RIPPLE")[0];
  if (RIPPLE)
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
const gnkComponent = {
  mounted() {
    console.info("gnkComponent mounted");
  },
  methods: {
    hello() {
      console.log("hello from mixin!");
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
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
        "--circle": this.circular,
        "--square": this.square,
        "--block": this.block,
        "--disabled": this.disabled
      };
    }
  }
};
var gnkComponent$1 = {
  gnkComponent
};
var Button_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = {
  name: "gnkButton",
  mixins: [gnkComponent$1.gnkComponent],
  data() {
    return {
      store: EVENTS.Configs,
      active: false
    };
  },
  watch: {},
  props: {
    title: {
      type: String,
      required: false,
      default: void 0
    },
    tooltip: {
      type: Boolean,
      required: false,
      default: false,
      validator(type) {
        return [true, false].includes(type);
      }
    },
    tooltip_trigger: {
      type: String,
      required: false,
      default: "hover",
      validator(type) {
        return ["hover", "click"].includes(type);
      }
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
    animate: {
      type: String,
      required: false,
      default: "default",
      validator(type) {
        return ["slide-up", "slide-left", "fade", "scale", "rotate"].includes(type);
      }
    },
    animateInactive: {
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
  emits: ["click"],
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
        "--animate": this.$slots.animate ? true : false,
        "--animate-slide-up": this.animate === "slide-up" && !this.loading && !this.animateInactive ? true : false,
        "--animate-slide-left": this.animate === "slide-left" && !this.loading && !this.animateInactive ? true : false,
        "--animate-fade": this.animate === "fade" && !this.loading && !this.animateInactive ? true : false,
        "--animate-scale": this.animate === "scale" && !this.loading && !this.animateInactive ? true : false,
        "--animate-rotate": this.animate === "rotate" && !this.loading && !this.animateInactive ? true : false,
        "--loading": this.loading || this.busy,
        "--active": this.active & this.type == "toggle"
      };
    }
  },
  methods: {
    onClick(event) {
      createRipple$1.createRipple(event);
      this.active = !this.active;
      this.$emit("click", event);
    }
  },
  mounted() {
  }
};
const _hoisted_1$a = ["title", "aria-label", "disabled", "type"];
const _hoisted_2$6 = { class: "--content" };
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode("gnkButton");
const _hoisted_4$2 = {
  key: 0,
  class: "--content-animate"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["gnk-button --primary", [$options.componentClassObject, _ctx.componentGeneralClasses]]),
    title: $props.title,
    "aria-label": $props.title,
    disabled: _ctx.disabled,
    type: $options.buttonType,
    onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick($event))
  }, [
    createElementVNode("div", _hoisted_2$6, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_3$4
      ])
    ]),
    !!this.$slots.animate ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
      renderSlot(_ctx.$slots, "animate")
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$a);
}
var gnkButton = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var Card_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = {
  name: "gnkCard",
  mixins: [gnkComponent$1.gnkComponent],
  data() {
    return {
      isVisible: false
    };
  },
  props: {},
  computed: {},
  emits: {
    click: null,
    submit: (payload) => {
      if (payload.email && payload.password) {
        return true;
      } else {
        console.warn(`Invalid submit event payload!`);
        return false;
      }
    }
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    }
  },
  mounted() {
  }
};
const _hoisted_1$9 = { class: "container gnk-card" };
const _hoisted_2$5 = {
  key: 0,
  class: "columns --title"
};
const _hoisted_3$3 = { class: "col-12 gap-5 flex" };
const _hoisted_4$1 = {
  key: 1,
  class: "columns --content"
};
const _hoisted_5 = { class: "col-12 gap-5 flex" };
const _hoisted_6 = {
  key: 2,
  class: "columns --expandable"
};
const _hoisted_7 = { class: "col-12 flex" };
const _hoisted_8 = { class: "col-12 flex" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    !!this.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
      createElementVNode("div", _hoisted_3$3, [
        renderSlot(_ctx.$slots, "title")
      ])
    ])) : createCommentVNode("", true),
    !!this.$slots.default ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
      createElementVNode("div", _hoisted_5, [
        renderSlot(_ctx.$slots, "default")
      ])
    ])) : createCommentVNode("", true),
    !!this.$slots.expandable ? (openBlock(), createElementBlock("div", _hoisted_6, [
      createElementVNode("div", _hoisted_7, [
        renderSlot(_ctx.$slots, "expandable")
      ])
    ])) : createCommentVNode("", true),
    !!this.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 3,
      class: normalizeClass(["columns --footer", _ctx.footerClass])
    }, [
      createElementVNode("div", _hoisted_8, [
        renderSlot(_ctx.$slots, "footer")
      ])
    ], 2)) : createCommentVNode("", true)
  ]);
}
var gnkCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var Checkbox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = {
  name: "gnkCheckbox",
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
  emits: ["update:modelValue"],
  data() {
    return {
      state: this.modelValue
    };
  },
  computed: {
    checkboxAttributes() {
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
    }
  }
};
const _withScopeId$2 = (n) => (pushScopeId("data-v-4360f646"), n = n(), popScopeId(), n);
const _hoisted_1$8 = ["disabled", "checked"];
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", { class: "c-Checkbox__element" }, null, -1));
const _hoisted_3$2 = {
  key: 0,
  class: "c-Checkbox__label"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", mergeProps({ class: "c-Checkbox" }, $options.checkboxAttributes, {
    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
    }, ["prevent"]), ["space"])),
    onKeyup: [
      _cache[2] || (_cache[2] = withKeys(($event) => $options.onTrigger(), ["enter"])),
      _cache[3] || (_cache[3] = withKeys(($event) => $options.onTrigger(), ["space"]))
    ]
  }), [
    createElementVNode("input", {
      "aria-hidden": "true",
      class: "c-Checkbox__input",
      type: "checkbox",
      disabled: $props.disabled,
      checked: $data.state,
      onChange: _cache[0] || (_cache[0] = ($event) => $data.state = $event.target.checked)
    }, null, 40, _hoisted_1$8),
    _hoisted_2$4,
    $props.label ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString($props.label), 1)) : createCommentVNode("", true)
  ], 16);
}
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-4360f646"]]);
var Input_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  name: "gnkInput",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: void 0
    },
    label: {
      type: String,
      required: false,
      default: void 0
    },
    placeholder: {
      type: String,
      required: false,
      default: void 0
    },
    name: {
      type: String,
      required: false,
      default: void 0
    },
    required: {
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
  emits: ["update:modelValue"],
  data() {
    return {
      text: this.modelValue
    };
  },
  computed: {
    inputClassObject() {
      const hasText = this.text !== "" && this.text !== void 0;
      const hasPlaceholder = this.placeholder !== "" && this.placeholder !== void 0;
      return {
        "has-value": hasText || hasPlaceholder,
        "has-label": this.label !== "" && this.label !== void 0
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
    onLabelClick() {
      this.$refs.input.focus();
    }
  }
};
const _hoisted_1$7 = ["value", "name", "required", "disabled", "aria-label", "placeholder"];
const _hoisted_2$3 = ["title"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["c-Input", $options.inputClassObject])
  }, [
    createElementVNode("input", {
      ref: "input",
      class: "c-Input__input",
      type: "text",
      value: $data.text,
      name: $props.name,
      required: $props.required,
      disabled: $props.disabled,
      "aria-label": $props.label,
      placeholder: $props.placeholder,
      onInput: _cache[0] || (_cache[0] = ($event) => $data.text = $event.target.value)
    }, null, 40, _hoisted_1$7),
    createElementVNode("span", {
      class: "c-Input__label",
      title: $props.label,
      onMousedown: _cache[1] || (_cache[1] = withModifiers(($event) => $options.onLabelClick($event), ["prevent"]))
    }, toDisplayString($props.label), 41, _hoisted_2$3)
  ], 2);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-24a71b0e"]]);
var Link_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {
  name: "Link",
  props: {
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null,
      required: false
    },
    href: {
      type: String,
      default: null,
      required: false
    },
    openOnNewTab: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  emits: ["click"],
  computed: {
    linkAttributes() {
      return {
        title: this.title ? this.title : this.label,
        href: this.disabled ? void 0 : this.href,
        rel: this.openOnNewTab ? "noopener noreferrer" : void 0,
        target: this.openOnNewTab ? "_blank" : void 0,
        "aria-disabled": this.disabled,
        tabindex: this.disabled ? void 0 : "0"
      };
    }
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    }
  }
};
const _hoisted_1$6 = { class: "c-Link__label" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", mergeProps({ class: "c-Link" }, $options.linkAttributes, {
    onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick()),
    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
    }, ["prevent"]), ["space"])),
    onKeyup: [
      _cache[2] || (_cache[2] = withKeys(($event) => $options.onClick(), ["enter"])),
      _cache[3] || (_cache[3] = withKeys(($event) => $options.onClick(), ["space"]))
    ]
  }), [
    createElementVNode("span", _hoisted_1$6, toDisplayString($props.label), 1)
  ], 16);
}
var Link = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-212477e8"]]);
/*!
* tabbable 5.3.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  return element.getRootNode();
} : function(element) {
  return element.ownerDocument;
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scope: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      if (shadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var getTabindex = function getTabindex2(node, isScope) {
  if (node.tabIndex < 0) {
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    return !node.getClientRects().length;
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scope;
    var element = isScope ? item.scope : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(el, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var Modal_vue_vue_type_style_index_0_scoped_true_lang = "";
const ESCAPE_KEY$3 = 27;
const TAB_KEY$1 = 9;
let previouslyFocusedElement$1;
const _sfc_main$8 = {
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  emits: ["close"],
  methods: {
    beforeModalOpen() {
      previouslyFocusedElement$1 = document.activeElement;
      EVENTS();
    },
    modalOpening() {
      this.focusModal();
      document.addEventListener("keydown", this.handleKeyDown);
    },
    beforeModalClose() {
      document.removeEventListener("keydown", this.handleKeyDown);
      previouslyFocusedElement$1 == null ? void 0 : previouslyFocusedElement$1.focus();
    },
    afterModalClose() {
      EVENTS();
    },
    getFocusableElements() {
      return tabbable(this.$refs.modal);
    },
    focusModal() {
      const focusableElements = this.getFocusableElements();
      if (!focusableElements.length) {
        this.$refs.modal.focus();
        return;
      }
      const firstFocusableElement = focusableElements[0];
      firstFocusableElement.focus();
    },
    handleKeyDown(event) {
      if (event.keyCode === ESCAPE_KEY$3) {
        this.$emit("close");
        return;
      }
      if (event.keyCode === TAB_KEY$1) {
        const focusableElements = this.getFocusableElements();
        if (!focusableElements.length) {
          event.preventDefault();
          this.$refs.modal.focus();
          return;
        }
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
        if (!event.shiftKey && document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  }
};
const _hoisted_1$5 = {
  key: 0,
  ref: "modal",
  css: false,
  class: "c-Modal",
  role: "dialog",
  tabindex: "0",
  "aria-modal": "true"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        $props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          css: false,
          class: "c-Modal__overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {
      name: "fade",
      onBeforeEnter: _cache[1] || (_cache[1] = ($event) => $options.beforeModalOpen()),
      onEnter: _cache[2] || (_cache[2] = ($event) => $options.modalOpening()),
      onBeforeLeave: _cache[3] || (_cache[3] = ($event) => $options.beforeModalClose()),
      onAfterLeave: _cache[4] || (_cache[4] = ($event) => $options.afterModalClose())
    }, {
      default: withCtx(() => [
        $props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 512)) : createCommentVNode("", true)
      ]),
      _: 3
    })
  ]);
}
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-9bcdc338"]]);
const ESCAPE_KEY$2 = 27;
const _sfc_main$7 = {
  components: { Modal: EVENTS },
  data() {
    return {
      component: null,
      props: null
    };
  },
  created() {
    EVENTS.on(EVENTS.OPEN_MODAL, ({ component, props = null }) => {
      this.component = markRaw(component);
      this.props = props;
    });
    EVENTS.on(EVENTS.CLOSE_MODAL, this.handleClose);
    document.addEventListener("keyup", this.handleKeyup);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.handleKeyup);
  },
  methods: {
    handleClose() {
      this.component = null;
    },
    handleKeyup(e) {
      if (e.keyCode === ESCAPE_KEY$2) {
        this.handleClose();
      }
    }
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createBlock(_component_Modal, {
    "is-open": Boolean($data.component),
    onClose: $options.handleClose
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent($data.component), mergeProps($data.props, { onClose: $options.handleClose }), null, 16, ["onClose"]))
    ]),
    _: 1
  }, 8, ["is-open", "onClose"]);
}
var ModalManager = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var Progress_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  name: "gnkProgress",
  mixins: [gnkComponent$1.gnkComponent],
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
    tooltip: {
      type: Boolean,
      required: false,
      default: false,
      validator(type) {
        return [true, false].includes(type);
      }
    },
    tooltip_trigger: {
      type: String,
      required: false,
      default: "hover",
      validator(type) {
        return ["hover", "click"].includes(type);
      }
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
    progressPercentage() {
      const value = Number(this.value);
      const max2 = Number(this.max);
      if (Number.isNaN(value) || Number.isNaN(max2)) {
        return 0;
      }
      return Math.round(value / max2 * 100);
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
        "--loading": this.loading || this.busy
      };
    }
  }
};
const _hoisted_1$4 = ["title", "aria-valuemax", "aria-valuenow"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([[$options.componentClassObject, _ctx.componentGeneralClasses], "gnkProgress --primary"]),
    role: "progressbar",
    title: `${$options.progressPercentage}%`,
    "aria-valuemin": "0",
    "aria-valuemax": $props.max,
    "aria-valuenow": $props.value
  }, [
    createElementVNode("div", {
      style: normalizeStyle(`width: ${$options.progressPercentage}%`)
    }, null, 4)
  ], 10, _hoisted_1$4);
}
var gnkProgress = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var Radio_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  name: "Radio",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        let isValid = true;
        items.forEach((item) => {
          isValid = isValid && "label" in item && "value" in item;
        });
        return isValid;
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selectedValue: this.modelValue
    };
  },
  computed: {
    radioAttributes() {
      return {
        "aria-disabled": this.disabled,
        tabindex: this.disabled ? void 0 : "0"
      };
    }
  },
  watch: {
    modelValue(newModelValue) {
      this.selectedValue = newModelValue;
    },
    selectedValue(newValue) {
      this.$emit("update:modelValue", newValue);
    }
  },
  methods: {
    handleChange(value) {
      this.selectedValue = value;
    }
  }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-b5e91534"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["onKeyup"];
const _hoisted_2$2 = ["name", "value", "disabled"];
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "c-Radio__element" }, null, -1));
const _hoisted_4 = {
  key: 0,
  class: "c-Radio__label"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item, index) => {
    return openBlock(), createElementBlock("label", mergeProps({
      key: `radio-${index}`,
      class: "c-Radio"
    }, $options.radioAttributes, {
      onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
      }, ["prevent"]), ["space"])),
      onKeyup: [
        withKeys(($event) => $options.handleChange(item.value), ["enter"]),
        withKeys(($event) => $options.handleChange(item.value), ["space"])
      ]
    }), [
      withDirectives(createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.selectedValue = $event),
        "aria-hidden": "true",
        class: "c-Radio__input",
        type: "radio",
        name: $props.name,
        value: item.value,
        disabled: $props.disabled
      }, null, 8, _hoisted_2$2), [
        [vModelRadio, $data.selectedValue]
      ]),
      _hoisted_3$1,
      item.label ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(item.label), 1)) : createCommentVNode("", true)
    ], 16, _hoisted_1$3);
  }), 128);
}
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-b5e91534"]]);
var Sidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const ESCAPE_KEY$1 = 27;
const TAB_KEY = 9;
let previouslyFocusedElement;
const _sfc_main$4 = {
  name: "Sidebar",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: false
    },
    position: {
      type: String,
      required: false,
      default: "right",
      validator(type) {
        return ["right", "left"].includes(type);
      }
    }
  },
  emits: ["close"],
  computed: {
    sidebarClassObject() {
      return {
        "is-right": this.position === "right",
        "is-left": this.position === "left"
      };
    },
    slideAnimation() {
      return this.position === "right" ? "slideFromRight" : "slideFromLeft";
    }
  },
  methods: {
    beforeSidebarOpen() {
      previouslyFocusedElement = document.activeElement;
      EVENTS();
    },
    sidebarOpening() {
      this.focusSidebar();
      document.addEventListener("keydown", this.handleKeyDown);
    },
    beforeSidebarClose() {
      document.removeEventListener("keydown", this.handleKeyDown);
      previouslyFocusedElement == null ? void 0 : previouslyFocusedElement.focus();
    },
    afterSidebarClose() {
      EVENTS();
    },
    getFocusableElements() {
      return tabbable(this.$refs.sidebar);
    },
    focusSidebar() {
      const focusableElements = this.getFocusableElements();
      if (!focusableElements.length) {
        this.$refs.sidebar.focus();
        return;
      }
      const firstFocusableElement = focusableElements[0];
      firstFocusableElement.focus();
    },
    handleKeyDown(event) {
      if (event.keyCode === ESCAPE_KEY$1) {
        this.$emit("close");
        return;
      }
      if (event.keyCode === TAB_KEY) {
        const focusableElements = this.getFocusableElements();
        if (!focusableElements.length) {
          event.preventDefault();
          this.$refs.sidebar.focus();
          return;
        }
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
        if (!event.shiftKey && document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        $props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          css: false,
          class: "c-Sidebar__overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(Transition, {
      name: $options.slideAnimation,
      onBeforeEnter: _cache[1] || (_cache[1] = ($event) => $options.beforeSidebarOpen()),
      onEnter: _cache[2] || (_cache[2] = ($event) => $options.sidebarOpening()),
      onBeforeLeave: _cache[3] || (_cache[3] = ($event) => $options.beforeSidebarClose()),
      onAfterLeave: _cache[4] || (_cache[4] = ($event) => $options.afterSidebarClose())
    }, {
      default: withCtx(() => [
        $props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref: "sidebar",
          css: false,
          class: normalizeClass(["c-Sidebar", $options.sidebarClassObject]),
          role: "dialog",
          tabindex: "0"
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["name"])
  ], 64);
}
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-b8d71d72"]]);
const ESCAPE_KEY = 27;
const _sfc_main$3 = {
  components: { Sidebar: EVENTS },
  data() {
    return {
      component: null,
      props: null
    };
  },
  created() {
    EVENTS.on(EVENTS.OPEN_SIDEBAR, ({ component, props = null }) => {
      this.component = markRaw(component);
      this.props = props;
    });
    EVENTS.on(EVENTS.CLOSE_SIDEBAR, this.handleClose);
    document.addEventListener("keyup", this.handleKeyup);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.handleKeyup);
  },
  methods: {
    handleClose() {
      this.component = null;
    },
    handleKeyup(e) {
      if (e.keyCode === ESCAPE_KEY) {
        this.handleClose();
      }
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  return openBlock(), createBlock(_component_Sidebar, {
    "is-open": Boolean($data.component),
    onClose: $options.handleClose
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent($data.component), mergeProps($data.props, { onClose: $options.handleClose }), null, 16, ["onClose"]))
    ]),
    _: 1
  }, 8, ["is-open", "onClose"]);
}
var SidebarManager = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var Switch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "Switch",
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
  emits: ["update:modelValue"],
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
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-57ac28fd"), n = n(), popScopeId(), n);
const _hoisted_1$2 = ["disabled"];
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "c-Switch__slider" }, null, -1));
const _hoisted_3 = {
  key: 0,
  class: "c-Switch__label"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", mergeProps({ class: "c-Switch" }, $options.switchAttributes, {
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
      class: "c-Switch__input",
      type: "checkbox",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $options.onTrigger())
    }, null, 8, _hoisted_1$2), [
      [vModelCheckbox, $data.state]
    ]),
    _hoisted_2$1,
    $props.label ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString($props.label), 1)) : createCommentVNode("", true)
  ], 16);
}
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-57ac28fd"]]);
var Textarea_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "Textarea",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: void 0
    },
    label: {
      type: String,
      required: false,
      default: void 0
    },
    placeholder: {
      type: String,
      required: false,
      default: void 0
    },
    name: {
      type: String,
      required: false,
      default: void 0
    },
    autogrow: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    resize: {
      type: String,
      required: false,
      default: "default",
      validator(resize) {
        return ["default", "vertical", "horizontal", "none"].includes(resize);
      }
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      text: this.modelValue
    };
  },
  computed: {
    textareaClassObject() {
      const hasText = this.text !== "" && this.text !== void 0;
      const hasPlaceholder = this.placeholder !== "" && this.placeholder !== void 0;
      return {
        "has-value": hasText || hasPlaceholder,
        "has-label": this.label !== "" && this.label !== void 0,
        "has-vertical-resize": this.resize === "vertical" && !this.autogrow,
        "has-horizontal-resize": this.resize === "horizontal" && !this.autogrow,
        "has-no-resize": this.resize === "none",
        "has-autogrow": this.autogrow
      };
    }
  },
  watch: {
    modelValue(newModelValue) {
      this.text = newModelValue;
    },
    text(newValue) {
      if (this.autogrow) {
        this.$el.dataset.replicatedText = newValue;
      }
      this.$emit("update:modelValue", newValue);
    }
  },
  methods: {
    onLabelClick() {
      this.$refs.textarea.focus();
    }
  }
};
const _hoisted_1$1 = ["value", "name", "required", "disabled", "aria-label", "placeholder"];
const _hoisted_2 = ["title"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["c-Textarea", $options.textareaClassObject])
  }, [
    createElementVNode("textarea", {
      ref: "textarea",
      class: "c-Textarea__input",
      value: $data.text,
      name: $props.name,
      required: $props.required,
      disabled: $props.disabled,
      "aria-label": $props.label,
      placeholder: $props.placeholder,
      onInput: _cache[0] || (_cache[0] = ($event) => $data.text = $event.target.value)
    }, null, 40, _hoisted_1$1),
    createElementVNode("span", {
      class: "c-Textarea__label",
      title: $props.label,
      onMousedown: _cache[1] || (_cache[1] = withModifiers(($event) => $options.onLabelClick($event), ["prevent"]))
    }, toDisplayString($props.label), 41, _hoisted_2)
  ], 2);
}
var Textarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-41154f19"]]);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement$1(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement$1(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement$1(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement$1(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce$1(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce$1(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect3 = _ref3.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false
  };
  var instance = {
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy$1(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}
tippy$1.defaultProps = defaultProps;
tippy$1.setDefaultProps = setDefaultProps;
tippy$1.currentInput = currentInput;
Object.assign({}, applyStyles$1, {
  effect: function effect2(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy$1.setDefaultProps({
  render
});
var tippy = "";
var Tooltip_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "Tooltip",
  props: {
    content: {
      type: String,
      required: true
    }
  },
  mounted() {
    tippy$1(this.$el, {
      content: this.content
    });
  }
};
const _hoisted_1 = {
  class: "c-Tooltip",
  tabindex: "0"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d80bce5"]]);
var EVENTS$1 = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_SIDEBAR: "OPEN_MODAL",
  CLOSE_SIDEBAR: "CLOSE_MODAL"
};
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
var EventBus = mitt();
let previousBodyOverflow;
let previousBodyBoxSizing;
let previousBodyPaddingRight;
let previousHTMLHeight;
let previousHTMLOverflow;
let previousBodyTop;
let previousBodyWidth;
let previousBodyHeight;
let previousBodyPosition;
let previousScrollTop;
const isMobileOS = (userAgent) => {
  const ua = userAgent || navigator.userAgent;
  const ipad = /(iPad).*OS\s([\d_]+)/.test(ua);
  const iphone = !ipad && /(iPhone\sOS)\s([\d_]+)/.test(ua);
  const android = /(Android);?[\s/]+([\d.]+)?/.test(ua);
  return android || iphone || ipad;
};
const lockScrollPC = () => {
  const $body = document.body;
  const scrollBarWidth = window.innerWidth - $body.clientWidth;
  previousBodyOverflow = $body.style.overflow;
  previousBodyBoxSizing = $body.style.boxSizing;
  previousBodyPaddingRight = $body.style.paddingRight;
  $body.style.overflow = "hidden";
  $body.style.boxSizing = "border-box";
  $body.style.paddingRight = `${scrollBarWidth + $body.style.paddingRight}px`;
};
const unlockScrollPC = () => {
  const $body = document.body;
  $body.style.overflow = previousBodyOverflow;
  $body.style.boxSizing = previousBodyBoxSizing;
  $body.style.paddingRight = previousBodyPaddingRight;
  previousBodyOverflow = "";
  previousBodyBoxSizing = "";
  previousBodyPaddingRight = "";
};
const lockScrollMobile = () => {
  const $html = document.documentElement;
  const $body = document.body;
  previousScrollTop = $html.scrollTop || $body.scrollTop;
  previousHTMLHeight = $html.style.height;
  previousHTMLOverflow = $html.style.overflow;
  previousBodyTop = $body.style.top;
  previousBodyWidth = $body.style.width;
  previousBodyHeight = $body.style.height;
  previousBodyPosition = $body.style.position;
  previousBodyOverflow = $body.style.overflow;
  $html.style.height = "100%";
  $html.style.overflow = "hidden";
  $body.style.top = `-${previousScrollTop}px`;
  $body.style.width = "100%";
  $body.style.height = "auto";
  $body.style.position = "fixed";
  $body.style.overflow = "hidden";
};
const unlockScrollMobile = () => {
  const supportsNativeSmoothScroll = "scrollBehavior" in document.documentElement.style;
  const $html = document.documentElement;
  const $body = document.body;
  $html.style.height = previousHTMLHeight;
  $html.style.overflow = previousHTMLOverflow;
  $body.style.top = previousBodyTop;
  $body.style.width = previousBodyWidth;
  $body.style.height = previousBodyHeight;
  $body.style.position = previousBodyPosition;
  $body.style.overflow = previousBodyOverflow;
  if (supportsNativeSmoothScroll) {
    window.scrollTo({
      top: previousScrollTop,
      behavior: "auto"
    });
  } else {
    window.scrollTo(0, previousScrollTop);
  }
  previousBodyOverflow = "";
  previousHTMLHeight = "";
  previousHTMLOverflow = "";
  previousBodyTop = "";
  previousBodyWidth = "";
  previousBodyHeight = "";
  previousBodyPosition = "";
  previousScrollTop = "";
};
const lockScroll = () => {
  if (isMobileOS()) {
    lockScrollMobile();
  }
  lockScrollPC();
};
const unlockScroll = () => {
  if (isMobileOS()) {
    unlockScrollMobile();
  }
  unlockScrollPC();
};
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
const Configs = reactive({
  darkmode: false
});
var EVENTS = {
  Configs,
  gnkComponent: gnkComponent$1,
  gnkButton,
  gnkCard,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalManager,
  gnkProgress,
  Radio,
  Sidebar,
  SidebarManager,
  Switch,
  Textarea,
  Tooltip,
  EVENTS: EVENTS$1,
  EventBus,
  lockScroll,
  unlockScroll,
  registerModuleComponents
};
export { EVENTS as default };
