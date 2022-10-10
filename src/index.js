// ? DONE
import gnkImage from './components/Image/Image.vue'
import gnkBadge from './components/Badge/Badge.vue'
import gnk404 from './components/Page/404.vue'
import gnkIcon from './components/Icon/Icon.vue'
import gnkExpandPanel from './components/ExpandPanel/ExpandPanel.vue'




// : WORK IN PROGRESS 
import gnkSwipeManager from './components/SwipeManager/SwipeManager.vue'
import gnkButton from './components/Button/Button.vue'
import gnkCheckbox from './components/Checkbox/Checkbox.vue'
import gnkSwitch from './components/Switch/Switch.vue'
import gnkRadio from './components/Radio/Radio.vue'
import gnkInput from './components/Input/Input.vue'
import gnkCounter from './components/Counter/Counter.vue'
import gnkProgressbar from './components/ProgressBar/ProgressBar.vue'
import gnkButtonGroup from './components/ButtonGroup/ButtonGroup.vue'
import gnkLoading from './components/Loading/Loading.vue'
import gnkCard from './components/Card/Card.vue'
import gnkSidebar from  './components/Sidebar/Sidebar.vue'
import gnkDropdown from './components/Dropdown/Dropdown.vue'



// ! TODO
import gnkListview from './components/Listview/Listview.vue'
import gnkListviewItem from './components/Listview/ListviewItem.vue'

import gnkApp from './components/App/App.vue'
import gnkPage from './components/Page/Page.vue'
import gnkNavbar from './components/Navbar/Navbar.vue'

import gnkSyntaxHighlight from './components/SyntaxHighlight/SyntaxHighlight.vue'
import gnkChip from './components/Chip/Chip.vue'










import {router, registerRoutes } from './Router/Router'
import Store from './Store/Store'
import registerModuleComponents from './utils/registerComponents'
import {setColors} from './utils/colorsUtils'

/* Vue.directive('img', function(url) {
    var img = new Image();
    img.src = url;

    img.onload = function () {
        this.el.src = url;
    }
}); */

export default {
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
}


