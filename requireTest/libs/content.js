define(['text!list.html', 'jquery', 'css!list.css'], function (a, $) {
    return {
        // text插件必须依赖于服务器环境下运行
        start: function () {
            $('#wrap').html(a);
        }
    }
});