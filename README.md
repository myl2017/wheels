# 轱辘 - 一个 Vue UI 组件

[![Build Status](https://travis-ci.com/myl2017/wheels.svg?branch=main)](https://travis-ci.com/myl2017/wheels)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架， 希望对你有用。

## 开始使用

1. 添加 CSS 样式
   使用本框架签， 请在 CSS 中开启 border-box

    ```
    *,*::before,*::after{ box-sizing:  border-box;} 
    ```
   IE8 及以上浏览器都支持此样式。

   你还需要设置默认颜色等变量(后续会改为 SCSS 变量)
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
   IE 15 及以上浏览器都支持此样式。
2. 安装 gulu
    ```
    npm i --save gulu
    ```
3. 引入 gulu
    ```
    import {Button} from 'wheels-20210714'
   	import 'wheels-20210714/dist/index.css'
   
     export default {
       name: 'App',
       components: {
         'g-button': Button
       }
     }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
