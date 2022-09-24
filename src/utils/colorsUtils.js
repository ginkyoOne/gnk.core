
//HEX COLOR TO HSLA
function hexToHsl(hex) {
    
            //check if hex starts with #, if not add #
            hex = (hex?.charAt(0) == "#") ? hex : '#' + hex

            //Check if hex is valid
            if (/^#[0-9A-F]{6}$/i.test(hex) === false) return null

            // Convert hex to RGB first
            let r = 0, g = 0, b = 0;
            if (hex.length == 4) {
                r = "0x" + hex[1] + hex[1];
                g = "0x" + hex[2] + hex[2];
                b = "0x" + hex[3] + hex[3];
            } else if (hex.length == 7) {
                r = "0x" + hex[1] + hex[2];
                g = "0x" + hex[3] + hex[4];
                b = "0x" + hex[5] + hex[6];
            }

            // Then to HSL
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;

            if (delta == 0)
                h = 0;
            else if (cmax == r)
                h = ((g - b) / delta) % 6;
            else if (cmax == g)
                h = (b - r) / delta + 2;
            else
                h = (r - g) / delta + 4;

            h = Math.round(h * 60);

            if (h < 0) h += 360;

            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            return { 'H': h, 'S': s + '%', 'L': l + '%' };
}


//? SET THEME COLORS 
//! { PRIMARY: '#1231231' }

import { setCssVariable } from "./cssUtils";
function setColors(colors) {
    if (!Array.isArray(colors)) colors = [colors]

    colors.forEach((color) => {

        if(!Object.keys(color).length > 0) return
        let result = hexToHsl(color[Object.keys(color)[0]])
        
        if (!result) return
        let {H, S, L} = result
        
        document.querySelectorAll('[gnk-theme-colorMode=dark], [gnk-theme-colorMode=light]').forEach((element) => {
            setCssVariable(element, `--COLOR-${Object.keys(color)[0]}-H`, H)
            setCssVariable(element, `--COLOR-${Object.keys(color)[0]}-S`, S)
            //setCssVariable(element, `--COLOR-${Object.keys(color)[0]}-L`, L)    
        })
    })

}

export {setColors, hexToHsl} 
