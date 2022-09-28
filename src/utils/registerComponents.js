import Store from "../Store/Store"
function registerModuleComponents(App, components) {
    
    App.provide('store', Store )

    if (!components) {
        return;
    }
    for (var componentName in components) {
        if (components.hasOwnProperty(componentName)) {
            App.component(componentName, components[componentName]);
        }
    }
}

export default registerModuleComponents 
