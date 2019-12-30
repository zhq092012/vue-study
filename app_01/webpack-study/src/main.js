//是js入口文件
//1.导入jquery import ** from **是es6中导入模块的方式
//es6语法浏览器无法识别
import $ from 'jquery'
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D097634'
  })
})