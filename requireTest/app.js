// 配置requireJS
requirejs.config({
    paths: {
        'ceshi': 'libs/ceshi',
        'jisuan': 'jisuan',
        'text': 'libs/text',
        'content': 'libs/content',
        'jquery': 'libs/jquery-3.1.1',
        'css': 'libs/css'
    }
})


// 有主模块,在没有配置别名的情况下，不能使用路径获取该模块
require(['ceshi', 'content', 'jquery'], function (a, content, $) {
    // a.showText('hello word');
    // console.log(content);
    // content.start();
    $('#btn').on('click', function () {
        content.start();
    })

});