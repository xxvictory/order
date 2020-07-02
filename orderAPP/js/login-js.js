// 页面问候区部分脚本
    //获取页面元素
    var greetingText = document.querySelector('.greeting-box').querySelector('span');
    //获取当前时间
    var nowTime = new Date().getHours();
    if(nowTime<6){
        greetingText.innerHTML = '亲，凌晨好';
    }else if(nowTime<9){
        greetingText.innerHTML = '亲，早上好';
    }else if(nowTime<12){
        greetingText.innerHTML = '亲，上午好';
    }else if(nowTime<14){
        greetingText.innerHTML = '亲，中午好';
    }else if(nowTime<17){
        greetingText.innerHTML = '亲，下午好';
    }else if(nowTime<19){
        greetingText.innerHTML = '亲，傍晚好';
    }else if(nowTime<22){
        greetingText.innerHTML = '亲，晚上好';
    }else {
        greetingText.innerHTML = '亲，夜里好';
    }

// 表单验证脚本
//获取页面元素
var telIpt = document.querySelector('.text-ipt').querySelector('input');
var submitIpt = document.querySelector('.submit-ipt').querySelector('input');
var telSpan =document.getElementById('span-tel-ipt');

submitIpt.disabled = "disabled";
telIpt.onblur = function () {
    var tel = telIpt.value;
    if (tel.length == 11) {
        var arr = ['13', '14', '15', '17', '18'];
        if (arr.indexOf(tel.substr(0, 2)) > -1) {
            telSpan.className = 'green-span';
            telSpan.innerHTML = "√";
            puanduan();
        } else {
            telSpan.className = 'red-span';
            telSpan.innerHTML = "×";
        }
    } else {
        telSpan.className = 'red-span';
        telSpan.innerHTML = "×";
    }
};

function puanduan() {
    if (telSpan.innerHTML=="√") {
        submitIpt.disabled = "";
    }else{
        submitIpt.disabled = "disabled";
    }
}

