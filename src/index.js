
import gnkApp from './components/App/App.vue'
import gnkPage from './components/Page/Page.vue'
import gnk404 from './components/Page/404.vue'

import gnkNavbar from './components/Navbar/Navbar.vue'
import gnkSwipeManager from './components/SwipeManager/SwipeManager.vue'



import gnkButton from './components/Button/Button.vue'
import gnkButtonGroup from './components/ButtonGroup/ButtonGroup.vue'
import gnkCard from './components/Card/Card.vue'
import gnkProgress from './components/Progress/Progress.vue'

import gnkListview from './components/Listview/Listview.vue'
import gnkListviewItem from './components/Listview/ListviewItem.vue'

import gnkSwitch from './components/Switch/Switch.vue'
import gnkLoading from './components/Loading/Loading.vue'


import gnkImage from './components/Image/Image.vue'
import gnkBadge from './components/Badge/Badge.vue'



import {router, registerRoutes } from './Router/Router'
import Store from './Store/Store'



import registerModuleComponents from './utils/registerComponents'



export default {
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
}


