//是js入口文件
//1.导入jquery import ** from **是es6中导入模块的方式
//es6语法浏览器无法识别
import $ from 'jquery'
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'red')
})
//webpack 可以做什么？？？？
/*
  1.webpack能够处理js文件之间的依赖关系
  2.webpack可以将浏览器不兼容的js语法处理掉，把高级js语法转为低级的浏览器能够识别的语法
  3.webpack 要打包的文件路径 -0 输出文件的路径
*/