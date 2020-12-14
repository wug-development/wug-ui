/**
* MIT License
*
* Copyright (c) 2020 guangwu_dev
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
const NODE_ENV = 'development' // 开发环境 打包doc
// const NODE_ENV = 'lib' // 组件库 上传npm
const components = require('./build/compontents.json');
const path = require('path')
const baseConfig = {
    chainWebpack: config => {
        config.resolve.alias
        .set('@', path.resolve('examples'))
        .set('~', path.resolve('packages'))
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    // 如有scss配置需求
    css: {
        extract: false,
        // loaderOptions: {
        //     // 给 sass-loader 传递选项
        //     sass: {
        //         data: `@import "public/css/ui.scss";`
        //     }
        // },
    }
}
const devConfig = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        }
    },
    publicPath: './',
    outputDir: 'docs',
    ...baseConfig
}
const buildConfig = {
    // configureWebpack: {
    //     entry: components,
    //     // output: {
    //     //     filename: 'index.js',
    //     //     libraryTarget: 'commonjs2',
    //     //     // path: path.resolve(__dirname, 'lib/[name]/index.js')
    //     //     chunkFilename: 'js/[name]_chunk.js'
    //     // },
    // },
    outputDir: 'lib',
    productionSourceMap: false,
    ...baseConfig
}

console.log(NODE_ENV)
module.exports = NODE_ENV === 'development' ? devConfig : buildConfig;