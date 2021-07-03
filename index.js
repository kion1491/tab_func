var tabEvtFunc = function(){
    var tab = $("ul.tab_button_wrapper"),
        tabLi = tab.children('li');
    function init(){
        tabLiClickFunc();
    }
    function tabLiToggle(target){
        target.siblings().removeClass("on")
        target.addClass("on");
    }
    function tabContFunc(target){

        for(var i = 0; i<target.siblings().length+1; i++){
            
            var tabUl = target.parent('ul.tab_button_wrapper');
            var tabCont = tabUl.siblings('div.tab_cont_wrap').children('div.tab_cont');

            tabCont.removeClass('on');

            if(tabUl.children('li').eq(i).hasClass('on')){
                tabCont.eq(i).addClass('on')
                return true
            }
        }
    } 
    function tabLiClickFunc(){
        tabLi.on("click",function(){
            tabLiToggle($(this))

            tabContFunc($(this));

        })
    }
    return{
        init: init
    }
}();

tabEvtFunc.init()





