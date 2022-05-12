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

export { registerModuleComponents }
