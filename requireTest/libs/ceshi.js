define('ceshi', ['jisuan'], function (jisuan) {
    function showText (a) {
        // alert(a);
        alert(jisuan.add(200,300));
    }

    return {
        showText: showText
    }

});