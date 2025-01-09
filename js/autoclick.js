//  进入页面立即触发
		(()=>{
			//  兼容IE
		    if(document.all) {
		        document.getElementById("aid").click();
		    }
		    //  兼容其它浏览器
		    else {
		        var e = document.createEvent("MouseEvents");
		        e.initEvent("click", true, true);
		        document.getElementById("aid").dispatchEvent(e);
		    }
		})();


//  三秒后模拟点击
setTimeout(function() {
    //  IE浏览器
    if(document.all) {
        document.getElementById("aid").click();
    }
    //  其它浏览器
    else {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        document.getElementById("aid").dispatchEvent(e);
    }
}, 1000);
