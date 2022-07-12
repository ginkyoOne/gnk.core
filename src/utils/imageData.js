async function getImageMeta(src){
    return await new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = () => resolve({src: src, height: img.height, width: img.width})
        img.onerror = () => reject('Image load error')
        img.src = src
    })
}
export default {
    getImageMeta
}