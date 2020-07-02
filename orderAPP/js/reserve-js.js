//获取页面元素
var yearMonth = document.getElementById('year-month');
var dayItemArr = document.querySelectorAll('.day-item');
var beforeYear = document.getElementById('before-year');
var nextYear = document.getElementById('next-year');
var boforeMonth = document.getElementById('bofore-month');
var nextMonth = document.getElementById('next-month');

//获取当前日期
var myDateObj = (function() {
    var nowDate = new Date();    // 默认为当前系统时间
    return {
        myGetDate: function () {
            return nowDate;
        },
        mySetDate: function (date) {
            nowDate = date;
        }
    }

}());
// myDateObj.mySetDate(new Date(2017,1,19));
// console.log(myDateObj.myGetDate());

var myYear = myDateObj.myGetDate().getFullYear();//当前日期年份
var myMonth = myDateObj.myGetDate().getMonth()+1;//当前日期月份
var myDay = myDateObj.myGetDate().getDate();//当前日期

beforeYear.onclick = function (eve) {
    myYear = myYear - 1;
    computeDate();
}
nextYear.onclick = function (eve) {
    myYear = myYear + 1;
    computeDate();
}
boforeMonth.onclick = function (eve) {
    myMonth = myMonth - 1;
    computeDate();
}

nextMonth.onclick = function (eve) {
    myMonth = myMonth + 1;
    computeDate();
}

function computeDate() {
    var firstDayDate = new Date(myYear,myMonth-1,1);
// console.log(firstDayDate);

    if(firstDayDate.getDay() == 0){
        var firstDayDateWeek = 7;
    }else {
        var firstDayDateWeek = firstDayDate.getDay();
    }

// console.log(firstDayDateWeek);


    for(var i=0;i<dayItemArr.length;i++){
        dayItemArr[i].innerHTML = new Date(myYear,myMonth-1,1-(firstDayDateWeek-1)+i).getDate();
        dayItemArr[i].value = new Date(myYear,myMonth-1,1-(firstDayDateWeek-1)+i).toString();
        dayItemArr[i].className = 'day-item';
        dayItemArr[i].id = '';

        if (dayItemArr[i].value.slice(3,7) == new Date(myYear,myMonth-1,myDay).toString().slice(3,7)) {
            // console.log(dayItemArr[i].className);
            dayItemArr[i].className = dayItemArr[i].className + ' ' + 'current-month';
            // console.log(dayItemArr[i].className);
        }else {
            dayItemArr[i].className = dayItemArr[i].className + ' ' + 'other-month';
        }
        // console.log(dayItemArr[i].value.slice(8,10));
        // console.log(new Date().toString().slice(0,15));
        // console.log(dayItemArr[i].value.slice(0,15) == new Date().toString().slice(0,15));
        if (dayItemArr[i].value.slice(8,10) == new Date().toString().slice(8,10)) {

            dayItemArr[i].id = 'today-style';
        }

    }
    yearMonth.innerHTML = new Date(myYear,myMonth-1,myDay).getFullYear() + '年' + (new Date(myYear,myMonth-1,myDay).getMonth()+1) + '月';


}

computeDate();


$(function () {

    $('.day-item').click(function () {
        $('.day-item').removeAttr('id');
        $(this).attr('id','select-day');

    })

})


