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
}, 3000);

let progress = 0;
const interval = 50; // 每50ms更新一次
const duration = 3000; // 总时长5秒
const step = 100 / (duration/interval); // 每次增加的百分比

const timer = setInterval(() => {
    progress += step;
    if(progress >= 100) {
        progress = 100;
        clearInterval(timer);
    }
    document.getElementById('loading-s1').textContent = Math.round(progress);
}, interval);



