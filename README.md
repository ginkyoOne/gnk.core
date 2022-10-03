# Vue 3 UI Framework

[DEMO](https://ginkyoone.github.io/gnk.core/#/expandPanel)

vue gnk.core v0.1 alfa
### Built With

* 🖊️ scss
* 🐙 Vue 3 (options api)
* 💻 Vite
* ☕ Coffee 
* 💕 Love


- [x] .core.autoLoader(FULL)
- [ ] .core.autoLoader(mobile)
- [ ] .core.autoLoader(WEB)
- [x] .core.configs
- [x] .core.grid
- [x] .core.theme
- [ ] Alert
- [ ] Avatar
- [ ] Backdrop
- [ ] Breadcrumb
- [x] Button
- [ ] Calendar/Date picker
- [x] Card/Expandable Card
- [x] Checkbox
- [ ] Chip
- [ ] Collapse
- [ ] Contacts List
- [ ] Data Table
- [ ] Dialogs
- [ ] Divider
- [ ] Dropdown
- [ ] Editable
- [ ] Export pdf/xls
- [x] Images
- [x] Input
- [ ] List
- [x] Loading
- [ ] Navbar
- [ ] Notification
- [x] Number Input
- [ ] Pagination
- [ ] Picker
- [ ] PopOver
- [ ] Popup
- [x] Progress
- [ ] Properties Grid
- [x] Radio
- [ ] SearchBar
- [ ] Select
- [ ] Sheet Modal
- [ ] Sidebar
- [ ] Skeleton
- [x] Expand Pannel
- [ ] Slider
- [ ] Sortable/Drag list
- [ ] Swipeout
- [x] Swiper
- [x] Switch
- [ ] Tabs
- [ ] Textarea
- [ ] Timeline
- [ ] Tooltip
- [ ] Treeview
- [ ] Upload
- [ ] Video player 


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* Node : 16.10.0
* Vscode

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/ginkyoOne/gnk.core/
```

2. Open VS Code
3. On your project main.js
```sh
import { createApp, h } from 'vue'
import App from './App.vue'
import GNK from 'gnk.core'
import routes from './router'


import "gnk.core/dist/style.css"

//CREATE APP
window.APP = createApp({
    render: () => h(App)
})


//REGISTER GNK FRAMEWORK
GNK.registerModuleComponents( GNK)
GNK.registerRoutes( routes)

//MOUNT APP
window.APP.mount('#app')
```







<!-- USAGE EXAMPLES -->
## Usage
```sh
    <gnk-button primary size="xl" > xl</gnk-button>
    <gnk-button info size="xl" > xl</gnk-button>
    <gnk-button warning size="l"> l </gnk-button>
    <gnk-button danger size="default"> default </gnk-button>
    <gnk-button success size="small"> small </gnk-button>
```

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/ginkyoOne/gnk.core/](https://github.com/ginkyoOne/gnk.core/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* This is still an alfa version, dont use it in production. 

