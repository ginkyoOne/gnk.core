function createRipple(event) {
    
    if (!event.currentTarget.querySelector('.--ripple')) return
    
    const TARGET = event.currentTarget.querySelector('.--ripple');
    
    //CHECK IF SPAN ALREADY EXISTS
    const RIPPLE = TARGET.querySelector(".--ripple-animation");

    //REMOVE IT
    if (!!RIPPLE) RIPPLE.remove();

    //GET TARGET INFO
    const TARGET_INFO = TARGET.getBoundingClientRect();

    //CREATE NEW RIPPLE
    const RIPPLE_SPAN = document.createElement("span");

    const RIPPLE_SIZE = Math.max(TARGET_INFO['width'], TARGET_INFO['height']);

    RIPPLE_SPAN.style = `height: ${RIPPLE_SIZE}px !important; width: ${RIPPLE_SIZE}px !important;`;
    
    RIPPLE_SPAN.style.left = `${(event.clientX - TARGET_INFO['x']) - (RIPPLE_SIZE / 2)}px`;
    RIPPLE_SPAN.style.top = `${(event.clientY - TARGET_INFO['y']) - (RIPPLE_SIZE / 2)}px`;
    RIPPLE_SPAN.classList.add("--ripple-animation");
    
    //ADD TO TARGET
    TARGET.appendChild(RIPPLE_SPAN);

}
export default {
    createRipple
}