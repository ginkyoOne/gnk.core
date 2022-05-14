async function getImageMeta(src){
    return await new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve({src: src, height: img.height, width: img.width})
        img.onerror = () => resolve({ src: '', height: 0, width: 0 })
        img.src = src
    })
}
export default {
    getImageMeta
}