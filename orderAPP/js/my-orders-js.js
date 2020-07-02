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

//选项卡切换部分脚本
//获取页面元素
var siftingItemArr = document.querySelectorAll('.sifting-item');
var iconItemArr = document.querySelectorAll('.my-icon');
var contentArr = [document.getElementById('yuding-box'),document.getElementById('waimai-box'),document.getElementById('quanbu-box')];


for (var s=0;s<siftingItemArr.length;s++){
    siftingItemArr[s].flag = s;
    siftingItemArr[s].onclick = function (eve) {
        for(var d=0;d<siftingItemArr.length;d++){
            iconItemArr[d].id = '';
            contentArr[d].style.display = 'none';
            document.body.scrollTop = 0;
        }

        iconItemArr[this.flag].id = 'icon-active';

        contentArr[this.flag].style.display = 'block';
    }
}



// 页面餐厅列表部分脚本
var ShangjiaObj={
    "shangjiaImg":["images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia2.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png"],
    "shangjiaName":["商家标题一","商家标题二","商家标题三","商家标题四","商家标题五","商家标题六","商家标题二","商家标题三","商家标题四","商家标题二","商家标题三","商家标题四","商家标题五","商家标题五","商家标题六","商家标题二","商家标题三","商家标题四"],
    "shangjiaFuwu":[['订'],['送'],['送'],['送'],['订'],['订','送'],['送'],['订','送'],['送'],['送'],['订','送'],['送'],['订'],['订','送'],['送'],['送'],['订','送'],['订','送']],
    "url":["http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784"],
    "cost":["20.00","40.00","15.00","20.00","30.00","30.00","10.00","40.00","15.00","20.00","30.00","10.00","21.00","30.00","10.00","40.00","15.00","21.00"],
    "number":["10","50","10","10","8","50","10","10","10","10","50","10","10","8","52","10","17","100"],
    "starLevel":[Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1),Math.floor(Math.random()*6+1)],
    "shangjiaAddress":["南屏街金马坊","海淀区西三旗","世纪城华春苑","神州科技园","天安门广场","北京西站","海淀区西三旗","海淀区西三旗","世纪城华春苑","神州科技园","天安门广场","世纪城华春苑","神州科技园","天安门广场","北京西站","海淀区西三旗","世纪城华春苑","神州科技园"],
    "orderType":["W","W","Y","Y","Y","W","W","W","Y","Y","W","Y","Y","W","W","Y","W","Y"]
};

//获取页面元素
var YD_list = document.querySelector('#YD-list');
var WM_list = document.querySelector('#WM-list');
var QB_list = document.querySelector('#QB-list');
//使用for循环添加shangjia-item
for(var i=0;i<ShangjiaObj.shangjiaName.length;i++){
    //向YD-list和WM-list中添加shangjia-item
    if (ShangjiaObj.orderType[i][0] == 'W'){
        var shangjiaItemArr = [addElement('div',WM_list,{"class":"shangjia-item"}),addElement('div',QB_list,{"class":"shangjia-item"})];
    }else if (ShangjiaObj.orderType[i][0] == 'Y'){

        var shangjiaItemArr = [addElement('div',YD_list,{"class":"shangjia-item"}),addElement('div',QB_list,{"class":"shangjia-item"})];


    }

    for(var w=0;w<shangjiaItemArr.length;w++){
        //向shangjia-item中添加shangjia-item-top
        var shangjia_item_top = addElement('div',shangjiaItemArr[w],{"class":"shangjia-item-top"});
        // 向shangjia-item-top中添加shangjia-img
        var shangjia_img = addElement('div',shangjia_item_top,{"class":"shangjia-img"});
        //向shangjia-img中添加a标签
        var shangjia_img_a = addElement('a',shangjia_img,{"href":ShangjiaObj.url[i]});
        //向a标签中添加img标签
        var shangjia_img_a_img = addElement('img',shangjia_img_a,{"src":ShangjiaObj.shangjiaImg[i],"alt":"图片加载失败，请重试。"});
        //向shangjia-item-top中添加shangjia-content
        var shangjia_content = addElement('div',shangjia_item_top,{"class":"shangjia-content"});
        //向shangjia-content中添加shangjia-title
        var shangjia_title = addElement('h5',shangjia_content,{"class":"shangjia-title"});
        //向shangjia-title中添加a标签
        var shangjia_title_a = addElement('a',shangjia_title,{"href":ShangjiaObj.url[i],"text":ShangjiaObj.shangjiaName[i]});
        //向shangjia-title中添加span标签
        var shangjia_title_span = addElement('span',shangjia_title);
        //向shangjia_title_span中添加song-icon/mai-icon标签
        for (var p=0;p<ShangjiaObj.shangjiaFuwu[i].length;p++){
            if(ShangjiaObj.shangjiaFuwu[i][p] == '订'){
                addElement('i',shangjia_title_span,{"id":'ding-icon',"text":ShangjiaObj.shangjiaFuwu[i][p]});
            }else if(ShangjiaObj.shangjiaFuwu[i][p] == '送'){
                addElement('i',shangjia_title_span,{"id":'song-icon',"text":ShangjiaObj.shangjiaFuwu[i][p]});
            }
        }

        //向shangjia-content中添加shangjia-jiage
        var shangjia_jiage = addElement('p',shangjia_content,{"class":"shangjia-jiage","text":'人均：￥'+ShangjiaObj.cost[i]+' | '+Math.floor(Math.random()*50+1)+'人预定'});
        //向shangjia-content中添加shangjia-xingji
        var shangjia_xingji = addElement('p',shangjia_content,{"class":"shangjia-xingji"});
        //向shangjia-xingji中添加icon
        for(var n=0;n<5;n++){
            if(n<ShangjiaObj.starLevel[i]){
                addElement('i',shangjia_xingji,{"class":"iconfont icon-xingji xingji-red"});
            }
            if(n>=ShangjiaObj.starLevel[i]){
                addElement('i',shangjia_xingji,{"class":"iconfont icon-xingji"});
            }
        }
        //向shangjia-item中添加shangjia-item-bottom
        var shangjia_item_bottom = addElement('div',shangjiaItemArr[w],{"class":"shangjia-item-bottom"});
        //向shangjia-item-bottom中添加span标签
        addElement('span',shangjia_item_bottom,{"text":ShangjiaObj.shangjiaAddress[i]});
    }
}
