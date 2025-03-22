//加载完成后执行
window.addEventListener(
    'load',
    function () {
        //载入动画
        $('#loading-box').attr('class', 'loaded')
        $('#bg').css(
            'cssText',
            'transform: scale(1);filter: blur(0px);transition: ease 1s;'
        )
        $('.cover').css('cssText', 'opacity: 1;transition: ease 1s;')
        $('#section').css(
            'cssText',
            'transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important'
        )
    },
    false
)
var i = 0;
function doit(){
    i = i + 1;
    var o = document.getElementById('s1');
    o.innerHTML = i.toString();
    if(i<100) setTimeout('doit()',25);
}
doit();
