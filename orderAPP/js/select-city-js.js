//添加热门城市列表部分脚本
    var hotCityObj = {"initialArr":['A','B','C','D','E','F','G','H','J','K','L','M'],"cityNameArr":[[ '鞍山','安阳','安顺','安庆'],['北京','蚌埠','包头','保定', '宝鸡','白银','白云鄂博','巴彦淖尔','北戴河','博鳌','承德','本溪','阜新','白山','白城','亳州','滨州','北海','百色','巴中','宝山'],['重庆','成都','长沙','长春','承德','常州','池州','沧州','赤峰','滁州','巢湖','常德','郴州','潮州','朝阳','崇左','德阳'],['大连','大庆','大同','丹东'],['鄂尔多斯'],['抚顺','阜阳'],['广州','贵阳','桂林'],['海口'],['济南','吉林','九江'],['昆明'],['丽江','洛阳'],['绵阳']]};



// 创建添加元素的函数
function addElement(elementName,parent,attrObj){
    var myElement = document.createElement(elementName);
    for(var attr in attrObj){
        if(attr=='text'){
            myElement.appendChild(document.createTextNode(attrObj[attr]));
        }else{
            myElement.setAttribute(attr,attrObj[attr]);
        }
    }
    parent.appendChild(myElement);
    return myElement;
}

// 获取页面元素
var hotCityList = document.querySelector('.hot-city-list');
//添加元素
for(var m=0;m<hotCityObj.initialArr.length;m++){
    addElement("dt",hotCityList,{"text":hotCityObj.initialArr[m]});
    for(var n=0;n<hotCityObj.cityNameArr[m].length;n++){
        addElement("dd",hotCityList,{"text":hotCityObj.cityNameArr[m][n]});
    }
}

//为每个dd添加点击事件
var checkCityName = document.querySelector('.check-city-centent').querySelector('span');
var ddArr = hotCityList.querySelectorAll('dd');
for(var i=0;i<ddArr.length;i++){
    ddArr[i].onclick = function (eve) {
        // window.location = 'HomePage.html';
        checkCityName.innerHTML = this.innerText;
        document.body.scrollTop = 0;
    }
}