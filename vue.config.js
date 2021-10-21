// const path = require('path')
// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 prependData: '@import "./styles/_var.scss";'
//             }
//         }
//     }
// }
const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                includePaths: [path.join(__dirname, 'styles')]
            },
        }
    },
}
