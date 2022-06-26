// const postCssPurge = require('@fullhuman/postcss-purgecss');
// const vuePath = /\.vue(\?.+)?$/;
// const scssPath = /\.scss(\?.+)?$/;

// module.exports = {
//     plugins: [
//         postCssPurge({
//             contentFunction: (sourceInputFile) => {
//                 if (vuePath.test(sourceInputFile)) {
//                     return [sourceInputFile.replace(vuePath, '.vue')];
//                 }
//                 if (scssPath.test(sourceInputFile)) {
//                     return [sourceInputFile.replace(scssPath, '.scss')];
//                 }
//                 return ['src/**/*.vue', 'index.html'];
//             },
//             defaultExtractor(content) {
//                 if (content.startsWith('<template')) {
//                     content = content.split('</template')[0] + '</template>';
//                 }

//                 return content.match(/[\w-/:]+(?<!:)/g) || [];
//             },

//         }),
//     ],
// };