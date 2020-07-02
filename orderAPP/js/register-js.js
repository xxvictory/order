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
var telIpt = document.querySelector('.tel-ipt').querySelector('input');
var nameIpt = document.querySelector('.name-ipt').querySelector('input');
var passwordIpt_1 = document.querySelector('.password-ipt-1').querySelector('input');
var passwordIpt_2 = document.querySelector('.password-ipt-2').querySelector('input');
var checkIpt = document.querySelector('.check-ipt').querySelector('input');
var submitIpt = document.querySelector('.submit-ipt').querySelector('input');

var telSpan =document.getElementById('span-tel-ipt');
var nameSpan =document.getElementById('span-name-ipt');
var pswSpan1 =document.getElementById('span-password-ipt-1');
var pswSpan2 =document.getElementById('span-password-ipt-2');


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

nameIpt.onblur = function () {
    if(nameIpt.value !== ''){
        nameSpan.className = 'green-span';
        nameSpan.innerHTML = "√";
        puanduan();
    }else{
        nameSpan.className = 'red-span';
        nameSpan.innerHTML = "×";
    }

}
passwordIpt_1.onblur = function () {
    var mima = passwordIpt_1.value;
    if (mima.length>=8 && mima.length<=20) {
        pswSpan1.className = 'green-span';
        pswSpan1.innerHTML = "√";
        if (mima == passwordIpt_2.value) {
            pswSpan2.className = 'green-span';
            pswSpan2.innerHTML = "√";
            puanduan();
        }else{
            pswSpan2.className = 'red-span';
            pswSpan2.innerHTML = "×";
            puanduan();
        }
        puanduan();
    } else {
        pswSpan1.className = 'red-span';
        pswSpan1.innerHTML = "×";
    }
};
passwordIpt_2.onblur = function () {
    var queRenPasswordmm = passwordIpt_2.value;
    if (queRenPasswordmm == passwordIpt_1.value && passwordIpt_1.value != "") {
        pswSpan2.className = 'green-span';
        pswSpan2.innerHTML = "√";
        puanduan();
    } else {
        pswSpan2.className = 'red-span';
        pswSpan2.innerHTML = "×";
    }
};

checkIpt.onclick = function () {
    puanduan();

};

function puanduan() {
    if (telSpan.innerHTML=="√" && nameSpan.innerHTML=="√" && pswSpan1.innerHTML=="√" && pswSpan2.innerHTML=="√" && checkIpt.checked == true) {
        submitIpt.disabled = "";
    }else{
        submitIpt.disabled = "disabled";
    }
}

