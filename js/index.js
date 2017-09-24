var getElement=function(selector){
	return document.querySelector(selector)
}

var getAllElement=function(selector){
	return document.querySelectorAll(selector)
}

var getCls=function(element){
	return element.getAttribute('class')
}

var setCls=function(element,cls){
	return element.setAttribute('class',cls)
}

var addCls=function(element,cls){
	var baseCls=getCls(element)
	if(baseCls.indexOf(cls)===-1){
		setCls(element,baseCls+' '+cls)
	}
	return
}

var delCls=function(element,cls){
	var baseCls=getCls(element)
	if(baseCls.indexOf(cls)!=-1){
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '))
	}
	return
}

var screenAnimateElements={
	'.screen-1' : [
	'.screen-1__heading',
	'.screen-1__phone',
	'.screen-1__shadow',
	],
	'.screen-2' : [
	'.screen-2__heading',
	'.screen-2__subheading',
	'.screen-2__phone',
	'.screen-2__point_1',
	'.screen-2__point_2',
	'.screen-2__point_3',
	],
	'.screen-3' : [
	'.screen-3__heading',
	'.screen-3__phone',
	'.screen-3__subheading',
	'.screen-3__features',
	],
	'.screen-4' : [
	'.screen-4__heading',
	'.screen-4__subheading',
	'.screen-4__phonewrap__phone_1',
	'.screen-4__phonewrap__phone_2',
	'.screen-4__phonewrap__phone_3',
	'.screen-4__phonewrap__phone_4',
	],
	'.screen-5' : [
	'.screen-5__heading',
	'.screen-5__subheading',
	'.screen-5__bg',
	]

}

window.onload=function(){
	for(k in screenAnimateElements){
		if(k == '.screen-1'){
      continue;
    }
  setAnimateInit(k);
}
}

function setAnimateInit(screenCls){
	var animateElements=screenAnimateElements[screenCls]
	for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class'); 
				element.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
			}
}

function setAnimateDone(screenCls){
	var animateElements=screenAnimateElements[screenCls]
	for(var i=0;i<animateElements.length;i++){
				var element=document.querySelector(animateElements[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
}

setTimeout(function(){setAnimateDone('.screen-1');},300)

var navItems=getAllElement('.header__nav-item')
var outlineItem=getAllElement('.outline__item')

var switchNavItemsActive=function(idx){
	for(var i=0;i<navItems.length;i++){
		delCls(navItems[i],'header__nav-item_status_active')
	}
	addCls(navItems[idx],'header__nav-item_status_active')

	for(var i=0;i<outlineItem.length;i++){
		delCls(outlineItem[i],'outline__item_status_active')
	}
	addCls(outlineItem[idx],'outline__item_status_active')
}
switchNavItemsActive(0)
window.onscroll=function(){

	var top=document.body.scrollTop

	
	if(top>-1){
		switchNavItemsActive(0)
	}
	if(top>800-200){
		setAnimateDone('.screen-2')
		switchNavItemsActive(1)
	}
	if(top>800*2-200){
		setAnimateDone('.screen-3')
		switchNavItemsActive(2)
	}
	if(top>800*3-200){
		setAnimateDone('.screen-4')
		switchNavItemsActive(3)
	}
	if(top>800*4-200){
		setAnimateDone('.screen-5')
		switchNavItemsActive(4)
	}

	if(top>80){
		addCls(getElement('.header'),'header_status_black')
		addCls(getElement('.outline'),'outline_init')
	}else{
		delCls(getElement('.header'),'header_status_black')
		delCls(getElement('.outline'),'outline_init')
	}

}


var setNavJump=function(i,lib){
	lib[i].onclick=function(){
		document.body.scrollTop=i*800
	}
}
for(var i=0;i<navItems.length;i++){
	setNavJump(i,navItems)
}
for(var i=0;i<outlineItem.length;i++){
	setNavJump(i,outlineItem)
}
