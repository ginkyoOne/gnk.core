
import gnkButton from './components/Button/Button.vue'
import gnkCard from './components/Card/Card.vue'
import Checkbox  from './components/Checkbox/Checkbox.vue'
import Input  from './components/Input/Input.vue'
import Link  from './components/Link/Link.vue'
import Modal  from './components/Modal/Modal.vue'
import ModalManager  from './components/ModalManager/ModalManager.vue'
import gnkProgress  from './components/Progress/Progress.vue'
import Radio  from './components/Radio/Radio.vue'
import Sidebar  from './components/Sidebar/Sidebar.vue'
import SidebarManager  from './components/SidebarManager/SidebarManager.vue'
import Switch  from './components/Switch/Switch.vue'
import Textarea  from './components/Textarea/Textarea.vue'
import Tooltip  from './components/Tooltip/Tooltip.vue'


import EVENTS  from './utils/events'
import EventBus from './utils/mitt'

import {lockScroll} from './utils/scrollLock'
import {unlockScroll} from './utils/scrollLock'
import {registerModuleComponents} from './utils/registerComponents'
import { reactive } from 'vue'

import gnkComponent from './mixin/gnkComponent'

const Configs = reactive({
    darkmode: false,

})


export default {
    Configs, gnkComponent, gnkButton, gnkCard, Checkbox, Input, Link, Modal, ModalManager, gnkProgress, Radio, Sidebar, SidebarManager, Switch, Textarea, Tooltip, EVENTS, EventBus, lockScroll, unlockScroll, registerModuleComponents
}

