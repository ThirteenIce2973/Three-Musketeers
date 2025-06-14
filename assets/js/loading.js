let progress = 0;
const interval = 50;
const duration = 1000;
const step = 100 / (duration/interval);

const timer = setInterval(() => {
    progress += step;
    if(progress >= 100) {
        progress = 100;
        clearInterval(timer);
    }
    document.getElementById('loading-s1').textContent = Math.round(progress);
}, interval);
setTimeout(function() {
    // 移除加载动画效果
    $('#loading-box').attr('class', 'loaded');
    $('#bg').css(
        'cssText',
        'transform: scale(1); filter: blur(0px); transition: ease 1s;'
    );
    $('.cover').css('cssText', 'opacity: 1; transition: ease 1s;');
    $('#section').css(
        'cssText',
        'transform: scale(1) !important; opacity: 1 !important; filter: blur(0px) !important'
    );
}, 1500);




