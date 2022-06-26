<template>
  <label
    class="gnkSwitch"
    v-bind="switchAttributes"
    @keydown.space.prevent
    @keyup.enter="onTrigger()"
    @keyup.space="onTrigger()"
  >
    <input
      v-model="state"
      aria-hidden="true"
      class="gnkSwitch__input"
      type="checkbox"
      :disabled="disabled"
      @click="onTrigger()"
    />
    <div class="gnkSwitch__slider" />
    <span v-if="label" class="gnkSwitch__label">
      {{ label }}
    </span>
  </label>
</template>
<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
export default {
  name: 'gnkSwitch',
  extends: gnkComponent,
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['update:modelValue', 'onChanged'],
  data() {
    return {
      state: this.modelValue,
    }
  },
  computed: {
    switchAttributes() {
      return {
        'aria-disabled': this.disabled,
        tabindex: this.disabled ? undefined : '0',
      }
    },
  },
  watch: {
    modelValue(newModelValue) {
      this.state = newModelValue
    },
    state(newValue) {
      this.$emit('update:modelValue', newValue)
      //this.$emit('onChanged', this.state, newValue)
    },
  },
  methods: {
    onTrigger() {
      this.state = !this.state
      this.$emit('onChanged', this.state)
    },
  },
}
</script>
<style scoped>
.gnkSwitch {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: -moz-fit-content;
  width: fit-content;
}

.gnkSwitch input {
  display: none;
}

.gnkSwitch__slider {
  position: relative;
  display: block;
  width: 48px;
  height: 24px;
  border: 2px solid black;
  border-radius: 24px;
  background-color: white;
  transition: 0.15s;
}

.gnkSwitch__slider:before {
  content: '';
  border-radius: 24px;
  position: absolute;
  position: absolute;
  height: 16px;
  width: 16px;
  left: 2px;
  top: 2px;
  background-color: black;
  transition: 0.15s;
}

.gnkSwitch__label {
  user-select: none;
  margin-left: 8px;
}

/* Checked */

.gnkSwitch__input:checked + .gnkSwitch__slider {
  border-color: #101010;
  background-color: #101010;
}

.gnkSwitch__input:focus + .gnkSwitch__slider {
  box-shadow: 0 0 1px #101010;
}

.gnkSwitch__input:checked + .gnkSwitch__slider:before {
  background-color: white;
  transform: translate(24px);
}

/* Disabled */

.gnkSwitch[aria-disabled='true'] {
  cursor: not-allowed;
}

.gnkSwitch[aria-disabled='true'] .gnkSwitch__slider {
  border: 2px solid #757575;
  background-color: #e0e0e0;
}

.gnkSwitch[aria-disabled='true'] .gnkSwitch__input:checked + .gnkSwitch__slider {
  border: 2px solid #757575;
  background-color: #757575;
}

.gnkSwitch[aria-disabled='true'] .gnkSwitch__slider:before {
  background-color: #757575;
}

.gnkSwitch[aria-disabled='true']
  .gnkSwitch__input:checked
  + .gnkSwitch__slider:before {
  background-color: #e0e0e0;
  transform: translate(24px);
}
</style>
