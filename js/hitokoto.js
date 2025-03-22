var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn/');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var data = JSON.parse(xhr.responseText);
        var poem = document.getElementById('poem');
        poem.innerText = data.hitokoto;
        info.innerText = data.from_who + '《' + data.from + '》';
    }
};
xhr.send();
