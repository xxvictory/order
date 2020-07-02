
// 页面收藏餐厅部分脚本
var tuijianShangjia={
    "shangjiaImg":["images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png","images/shangjia2.png","images/shangjia3.png","images/shangjia1.png","images/shangjia2.png","images/shangjia3.png"],
    "shangjiaName":["商家标题一","商家标题二","商家标题三","商家标题四","商家标题五","商家标题六","商家标题二","商家标题三","商家标题四","商家标题五","商家标题六"],
    "url":["http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784","http://bj.meituan.com/shop/30743?acm=UwunyailsW14745010697817179244.30743.3&mtt=1.index%2Fdefault%2Fpoi.pz.17.j18m6k1u&cks=45784"],
    "cost":["20.00","30.00","10.00","40.00","15.00","21.00","30.00","10.00","40.00","15.00","21.00"],
    "number":["10","50","10","10","8","10","10","52","10","17","100"],
    "starLevel":[4,3,4,1,5,5,3,4,1,5,2],
    "shangjiaAddress":["南屏街金马坊","海淀区西三旗","世纪城华春苑","神州科技园","天安门广场","北京西站","海淀区西三旗","世纪城华春苑","神州科技园","天安门广场","北京西站"]
};
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
//获取页面元素
var tuijian_list = document.querySelector('.tuijian-list');
//使用for循环添加tuijian-item
for(var m=0;m<tuijianShangjia.shangjiaName.length;m++){
    //向tuijian-list中添加tuijian-item
    var tuijian_item = addElement('div',tuijian_list,{"class":"tuijian-item"});
    //向tuijian-item中添加tuijian-item-top
    var tuijian_item_top = addElement('div',tuijian_item,{"class":"tuijian-item-top"});
    //向tuijian-item-top中添加tuijian-img
    var tuijian_img = addElement('div',tuijian_item_top,{"class":"tuijian-img"});
    //向tuijian-img中添加a标签
    var tuijian_img_a = addElement('a',tuijian_img,{"href":tuijianShangjia.url[m]});
    //向a标签中添加img标签
    var tuijian_img_a_img = addElement('img',tuijian_img_a,{"src":tuijianShangjia.shangjiaImg[m],"alt":"图片加载失败，请重试。"});
    //向tuijian-item-top中添加tuijian-content
    var tuijian_content = addElement('div',tuijian_item_top,{"class":"tuijian-content"});
    //向tuijian-content中添加shangjia-title
    var shangjia_title = addElement('h5',tuijian_content,{"class":"shangjia-title"});
    //向shangjia-title中添加a标签
    var shangjia_title_a = addElement('a',shangjia_title,{"href":tuijianShangjia.url[m],"text":tuijianShangjia.shangjiaName[m]});
    //向tuijian-content中添加shangjia-jiage
    var shangjia_jiage = addElement('p',tuijian_content,{"class":"shangjia-jiage","text":'人均：￥'+tuijianShangjia.cost[m]+' | '+tuijianShangjia.number[m]+'人预定'});
    //向tuijian-content中添加tuijian-xingji
    var tuijian_xingji = addElement('p',tuijian_content,{"class":"tuijian-xingji"});
    //向tuijian-xingji中添加icon
    for(var n=0;n<5;n++){
        if(n<tuijianShangjia.starLevel[m]){
            addElement('i',tuijian_xingji,{"class":"iconfont icon-xingji xingji-red"});
        }
        if(n>=tuijianShangjia.starLevel[m]){
            addElement('i',tuijian_xingji,{"class":"iconfont icon-xingji"});
        }
    }
    //向tuijian-item-top中添加tuijian-icon
    var tuijian_icon = addElement('div',tuijian_item_top,{"class":"tuijian-icon"});
    //向tuijian-icon中添加span标签
    var tuijian_icon_span = addElement('span',tuijian_icon,{"text":"订"});
    //向tuijian-item中添加tuijian-item-bottom
    var tuijian_item_bottom = addElement('div',tuijian_item,{"class":"tuijian-item-bottom"});
    //向tuijian-item-bottom中添加span标签
    var tuijian_item_bottom_span = addElement('span',tuijian_item_bottom,{"text":tuijianShangjia.shangjiaAddress[m]});















}
