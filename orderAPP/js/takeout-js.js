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


// 页面筛选部分脚本
//获取页面元素
var quancheng = document.getElementById('quancheng');
var quancheng_btn = document.getElementById('quancheng-btn');
var quancheng_select = document.getElementById('quancheng-select');
var quanbucaipin = document.getElementById('quanbucaipin');
var quanbucaipin_btn = document.getElementById('quanbucaipin-btn');
var quanbucaipin_select = document.getElementById('quanbucaipin-select');

quancheng_select.style.height = '0px';
quanbucaipin_select.style.height = '0px';

// 全城筛选部分脚本
//为quancheng-btn添加点击事件
quancheng_btn.onclick = function (eve) {
    if (quancheng_select.style.getPropertyValue('height') == '0px'){
        if (quanbucaipin_select.style.getPropertyValue('height') !== '0px'){
            quanbucaipin_select.style.height = '0px';
        }
        quancheng_select.style.height = window.innerHeight-80+'px';
    }else{
        quancheng_select.style.height = '0px';
    }

}

//在quyu-name-box中添加菜品名
var quyuNameBox = document.getElementById('quyu-name-box');
var quyuNameArr = ['全城','五华区','盘龙区','西山区','管渡区','呈贡','安宁','石林'];
for(var x=0;x<quyuNameArr.length;x++){
    addElement('span',quyuNameBox,{'class':'caipin-name','text':quyuNameArr[x]})
}
//为caipin-name添加点击事件
var quyuNameArr = quyuNameBox.querySelectorAll('span');
for (var y=0;y<quyuNameArr.length;y++){
    quyuNameArr[y].onclick = function (eve) {
        quancheng.innerHTML = this.innerHTML;
        quancheng_select.style.height = '0px';
    }
}








// 全部菜品筛选部分脚本
//为quancheng-btn添加点击事件
quanbucaipin_btn.onclick = function (eve) {
    if (quanbucaipin_select.style.getPropertyValue('height') == '0px'){
        if (quancheng_select.style.getPropertyValue('height') !== '0px'){
            quancheng_select.style.height = '0px';
        }
        quanbucaipin_select.style.height = window.innerHeight-80+'px';
    }else{
        quanbucaipin_select.style.height = '0px';
    }

}
//在caipin-name-box中添加菜品名
var caipinNameBox = document.getElementById('caipin-name-box');
var caiNameArr = ['全部菜品','小吃快餐','蛋糕甜点','咖啡茶楼','火锅烧烤','云南特色','粤菜','川菜','鲁菜','湘菜','东北菜','西餐','日韩料理','新疆清真菜','北京菜','家常菜'];
for(var p=0;p<caiNameArr.length;p++){
    addElement('span',caipinNameBox,{'class':'caipin-name','text':caiNameArr[p]})
}
//为caipin-name添加点击事件
var caiPinNameArr = caipinNameBox.querySelectorAll('span');
for (var q=0;q<caiPinNameArr.length;q++){
    caiPinNameArr[q].onclick = function (eve) {
        quanbucaipin.innerHTML = this.innerHTML;
        quanbucaipin_select.style.height = '0px';
    }
}







// 页面餐厅列表部分脚本
var ShangjiaObj={
    "shangjiaImg":["images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png"],
    "shangjiaName":["商家标题一","商家标题二","商家标题三","商家标题四","商家标题五","商家标题六","商家标题二","商家标题三","商家标题四","商家标题五","商家标题六","商家标题二","商家标题三","商家标题四"],
    "shangjiaFuwu":[['订','送'],['送'],['送'],['送'],['订','送'],['订','送'],['送'],['订','送'],['送'],['送'],['订','送'],['送'],['订','送'],['订','送']],
    "url":["http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784"],
    "qijia":["0","5","100","0","1","2","30","10","40","15","20","100","0","1"],
    "peisongfei":["0","10","5","20","2","0","10","3","4","1","15","5","20","2"],
    "xiaoliang":["0","10","50","200","20","40","10","31","47","18","15","50","200","20"],
    "time":['08:00-22:00','09:00-21:00','09:00-20:00','06:00-21:00','07:00-20:00','09:00-19:00','09:00-21:00','09:00-20:00','09:00-21:00','09:00-18:00','04:00-13:00','09:00-21:00','09:00-20:00','06:00-21:00'],
    "shangjiaAddress":["南屏街金马坊","海淀区西三旗","世纪城华春苑","神州科技园","天安门广场","北京西站","海淀区西三旗","世纪城华春苑","神州科技园","天安门广场","北京西站","海淀区西三旗","世纪城华春苑","神州科技园"]
};

//获取页面元素
var canting_list = document.querySelector('.canting-list');
//使用for循环添加tuijian-item
for(var m=0;m<ShangjiaObj.shangjiaName.length;m++){
    //向canting-list中添加canting-item
    var canting_item = addElement('div',canting_list,{"class":"canting-item"});
    //向canting-item中添加canting-item-top
    var canting_item_top = addElement('div',canting_item,{"class":"canting-item-top"});
    // 向canting-item-top中添加canting-img
    var canting_img = addElement('div',canting_item_top,{"class":"canting-img"});
    //向canting-img中添加a标签
    var canting_img_a = addElement('a',canting_img,{"href":ShangjiaObj.url[m]});
    //向a标签中添加img标签
    var canting_img_a_img = addElement('img',canting_img_a,{"src":ShangjiaObj.shangjiaImg[m],"alt":"图片加载失败，请重试。"});
    //向canting-item-top中添加canting-content
    var canting_content = addElement('div',canting_item_top,{"class":"canting-content"});
    //向canting-content中添加shangjia-title
    var shangjia_title = addElement('h5',canting_content,{"class":"shangjia-title"});
    //向shangjia-title中添加a标签
    var shangjia_title_a = addElement('a',shangjia_title,{"href":ShangjiaObj.url[m],"text":ShangjiaObj.shangjiaName[m]});
    //向shangjia-title中添加span标签
    var shangjia_title_span = addElement('span',shangjia_title);
    //向shangjia_title_span中添加song-icon/mai-icon标签
    for (var p=0;p<ShangjiaObj.shangjiaFuwu[m].length;p++){
        if(ShangjiaObj.shangjiaFuwu[m][p] == '订'){
            addElement('i',shangjia_title_span,{"id":'ding-icon',"text":ShangjiaObj.shangjiaFuwu[m][p]});
        }else if(ShangjiaObj.shangjiaFuwu[m][p] == '送'){
            addElement('i',shangjia_title_span,{"id":'song-icon',"text":ShangjiaObj.shangjiaFuwu[m][p]});
        }
    }
    // 向canting-content中添加shangjia-shuoming
    var shangjia_shuoming = addElement('p',canting_content,{"class":"shangjia-shuoming","text":ShangjiaObj.qijia[m]+'元起送'+' | '+'配送费：'+ShangjiaObj.peisongfei[m]+' | '+'销量：'+ShangjiaObj.xiaoliang[m]});
    //向canting-content中添加shangjia-peisong
    var shangjia_peisong = addElement('p',canting_content,{"class":"shangjia-peisong"});
    //向shangjia-peisong中添加span
    addElement('span',shangjia_peisong,{"class":"shangjia-peisong","text":'配送时间：'+ShangjiaObj.time[m]});

    //向canting-item中添加canting-item-bottom
    var canting_item_bottom = addElement('div',canting_item,{"class":"canting-item-bottom"});
    //向tuijian-item-bottom中添加span标签
    addElement('span',canting_item_bottom,{"text":ShangjiaObj.shangjiaAddress[m]});

}